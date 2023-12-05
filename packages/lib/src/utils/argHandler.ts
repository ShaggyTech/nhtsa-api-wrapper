/**
 * @module utils/argHandler
 * @category Utility Functions
 */

import { getTypeof } from '@/utils'
import type { AtLeastOne } from '@/types'

export type IArgToValidate = {
  name: string
  value?: unknown
  required?: boolean
  requiredBy?: Array<{
    name: string
    value: unknown
  }>
  types?: string[]
  errorMode?: 'error' | 'boolean'
} & (
  | AtLeastOne<{
      required?: boolean
      types?: string[]
    }>
  | {
      requiredBy: Array<{
        name: string
        value: unknown
      }>
    }
)

/**
 * Will validate a single argument based on the provided arg object and throws an error with a
 * message detailing the invalid argument(s) and what was expected.
 *
 * There are two modes for this function:
 * - 'error' - (default) - Throws an error if the argument fails validation.
 * - 'boolean' - Returns false if the argument fails validation, does not throw an error.
 *
 * Both modes return true if the argument passes validation.
 *
 * The logic is the same for both modes, the only difference is the return value.
 *
 * `error` mode is useful for validating arguments supplied to a function and throwing an
 * error if the arguments are invalid. Can also be used to validate existence and type of any
 * value matches an array of type names you provide. It will throw an error if the argument is
 * invalid and return true if the argument is valid.
 *
 * `boolean` mode is useful for validating arguments in a function that returns a boolean value,
 * such as in Array.filter() or 'if' statements. It will return false if the argument is invalid
 * and true if the argument is valid.
 *
 * ### `argData` Object
 *
 * The main purpose for this function is to throw a helpful Error message to the user when they
 * are using the endpoint functions in a way that would cause the NHTSA API to return an error.
 * In default mode, it uses the `argData.name` and `argData.types` array (if provided) to build the
 * error message in the case of validation failure.
 *
 * - `argData.name` and `argData.value` are required in the arg object. It's ok to pass undefined
 * as the value, i.e. `{ value: someVarThatMightBeUndefined }`, but you must provide a name for the
 * argument. If you didn't provide a name then the error message would not be as helpful.
 *
 * - `argData.required` and `argData.types` are optional.
 *
 * At least one of `argData.required` or `argData.types` must be provided as part of each arg
 * object. At least one of these must be provided, otherwise it will always return true. You
 * probably don't need to validate that arg if you don't provide at least* one of these options.
 *
 * ### Validation Logic
 *
 * If both `required` is true and `types` are provided, it will validate the value is defined and
 * that the typeof value is one of the provided strings in the `types` array.
 *
 * If `required` is true and no `types` are provided, it will only validate value is defined.
 *
 * - If `types` is provided but it is not `required`, it will only validate value is one of the
 * type strings in the `types` array.
 * - If `types` is provided but it is not `required` and value is 'undefined' it will skip
 * validation as there is no value to validate against and user would mark it required if they
 * wanted to validate against a defined value. If the value is not required and you give types of
 * ['string', 'number'] for example, it will validate that the value is either a string or a number.
 * - If neither `required` nor `types` are provided, it will not peerform validation and will
 * simply return true.
 *
 * @param argData - options object
 * @param argData.name - name of the argument
 * @param argData.value - value of the argument
 * @param [argData.required] - if true, will validate that value is defined
 * @param [argData.requiredBy] - array of objects with name and value properties. Will validate
 * that value is defined if any of the `value`s in requiredBy array are defined.
 * @param [argData.requiredBy.name] - name of the argument that requires this argument to be defined
 * @param [argData.requiredBy.value] - value of the argument that requires this argument to be
 * defined
 * @param [argData.types] - array of strings to validate value against
 * @param [argData.errorMode='error'] - 'error' or 'boolean' - 'error' will
 * throw an error if the argument is invalid, 'boolean' will return false if the argument is invalid
 * @returns - true if validation passes, mode 'error' throws Error in the case of
 * validation failure, mode 'boolean' returns false in the case of validation failure
 */
export const validateArgument = (argData: IArgToValidate): boolean => {
  if (getTypeof(argData) !== 'object') {
    throw Error(
      `'argData' argument is required and must be an object containing valid options`
    )
  }

  const {
    name,
    value,
    required,
    requiredBy,
    types,
    errorMode = 'error',
  } = argData
  /* later we will use this to store types normalized to lowercase */
  let typesLowercased: string[] = []

  /* validate and typeguard argData passed to function */
  if (getTypeof(name) !== 'string') {
    throw Error(`'argData.name', is required and must be of type string`)
  }
  if (required !== undefined && getTypeof(required) !== 'boolean') {
    throw Error(`'argData.required' must be of type boolean if provided`)
  }
  if (requiredBy) {
    if (getTypeof(requiredBy) !== 'array' || !requiredBy.length) {
      throw Error(
        `'argData.requiredBy' must be an arrry of objects if provided`
      )
    }
    requiredBy.forEach(({ name: requiredByName, value: requiredByValue }) => {
      if (requiredByValue) {
        if (getTypeof(requiredByName) !== 'string') {
          throw Error(
            `'argData.requiredBy' requires both a name and value if value is defined`
          )
        }
      }
    })
  }
  if (types) {
    if (getTypeof(types) !== 'array' || !types.length) {
      throw Error(`'argData.types' must be an array of strings if provided`)
    }
    types.forEach((type) => {
      if (getTypeof(type) !== 'string') {
        throw Error(`'argData.types' must be an array of strings if provided`)
      }
    })
    /* normalize all passed types to lowercase */
    typesLowercased = types.map((type) => type.toLowerCase())
  }

  /* for argument validation error messages */
  let error = ''
  const typeofValue = getTypeof(value)
  const errorPrepend = `error validating argument named "${name}",`
  const errorAppend = `received value: ${value} - of type: <${typeofValue}>`

  /*
   * If provided an array of requiredBy objects with name and value properties, will validate
   * `argData.value` is defined if any of the `value`s in requiredBy array are defined.
   */
  if (requiredBy && requiredBy.length) {
    try {
      requiredBy.forEach(({ name: requiredByName, value: requiredByValue }) => {
        if (requiredByValue) {
          /*
           * If options.value is falsey throw an error because this requiredBy.value requires it
           * be defined
           */
          if (!value) {
            throw Error(`${errorPrepend} it is required if "${requiredByName}" is passed,
          ${errorAppend}`)
          }
        }
      })
    } catch (err) {
      error = (err as Error).message
    }

    /* exit early if requiredBy checks do not pass */
    if (error.length) {
      if (errorMode === 'boolean') return false
      else throw Error(error)
    }
  }

  /* argument validation logic */
  if (required && !types) {
    if (!value) {
      error = `${errorPrepend} it is required, ${errorAppend}`
    }
  } else if (types && !required) {
    /* if value is not defined and is not required then we don't need to validate the type */
    if (value !== undefined && !types.includes(typeofValue)) {
      error = `${errorPrepend} must be of type(s) ${typesLowercased}, ${errorAppend}`
    }
  } else if (required && types) {
    if (!value || !types.includes(typeofValue)) {
      error = `${errorPrepend} is required and must be of type(s) ${typesLowercased}, ${errorAppend}`
    }
  }

  /* if any argument validation has failed, throw an error or return false dependign on mode */
  if (error.length) {
    if (errorMode === 'boolean') return false
    else throw Error(error)
  }

  /* else all validation has passed, return true */
  return true
}

/**
 * Catches invalid arguments passed to functions and throws an error with a message detailing the
 * invalid argument(s) and what was expected.
 *
 * At least one of `required` or `types` must be provided for each arg to validate against or it
 * will validate nothing and return true for that arg value as if it was valid.
 *
 * Under the hood it loops through the args and calls `validateArgument` to validate each arg.
 * `validateArgument` will throw an error if any of the arguments are invalid based on the provided
 * options in each arg. See the description for `validateArgument` for more details on how
 * validation logic works and how to override the default error throwing behavior.
 *
 * @param options - options object with args array and mode
 * @param options.args - array of IArgToValidate objects
 * @param [options.mode="default"] - 'default' or 'atLeast' - 'default' will validate all
 * args, 'atLeast' will validate at least one arg in in the array has a defined value
 * @returns - true if validation passes, throws error in the case of validation failure
 */
export const catchInvalidArguments = (options: {
  args: IArgToValidate[]
  mode?: 'default' | 'atLeast'
}) => {
  if (getTypeof(options?.args) !== 'array' || !options?.args.length) {
    throw Error(
      `catchInvalidArguments requires "args" that must be an array of IArgToValidate objects`
    )
  }

  const { args, mode = 'default' } = options

  if (mode === 'default') {
    args.forEach((arg) => validateArgument(arg))
  } else if (mode === 'atLeast') {
    const providedArg = args.find((arg) => !!arg.value)
    if (!providedArg) {
      throw Error(
        `must provide at least one of the following arguments: ${args
          .map((arg) => arg.name)
          .join(', ')}`
      )
    }
  }

  return true
}
