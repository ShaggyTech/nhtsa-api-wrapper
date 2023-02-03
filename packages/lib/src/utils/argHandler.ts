import { getTypeof } from '@/utils'
import type { AtLeastOne } from '@/types'

export type IArgToValidate = {
  name: string
  value: unknown
} & AtLeastOne<{
  required?: boolean
  types?: string[]
}>

/**
 * `catchInvalidArguments` catches invalid arguments passed to functions and throws an error
 * with a message detailing the invalid argument(s) and what was expected.
 *
 * At least one of `required` or `types` must be provided for each arg to validate against or it
 * will validate nothing and return true for that arg value as if it was valid.
 *
 * Under the hood it loops through the args and calls `validateArgument` to validate each arg.
 * `validateArgument` will throw an error if any of the arguments are invalid based on the provided
 * options in each arg. See the description for `validateArgument` for more details on how
 * validation logic works and how to override the default error throwing behavior.
 *
 * @param {Object} options - options object
 * @param {IArgToValidate[]} options.args - array of IArgToValidate objects
 * @param {boolean} [options.mode=default] - 'default' or 'atLeast' - 'default' will validate all
 * args, 'atLeast' will validate at least one arg in in the array has a defined value
 * @returns {boolean} - true if validation passes, throws error in the case of validation failure
 */
export const catchInvalidArguments = ({
  args,
  mode = 'default',
}: {
  args: IArgToValidate[]
  mode?: 'default' | 'atLeast'
}) => {
  if (getTypeof(args) !== 'array' && !args.length) {
    throw Error(
      `catchInvalidArguments requires "args" that must be an array of IArgToValidate objects`
    )
  }

  if (mode === 'default') {
    args.forEach((arg) => {
      validateArgument(arg)
    })
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
}

/**
 * `validateArgument` validates a single argument based on the provided options and throws an error
 * with a message detailing the invalid argument(s) and what was expected.
 *
 * There are two modes for this function:
 * - 'error' - (default) - Throws an error if the argument fails validation.
 * - 'boolean' - Returns false if the argument fails validation.
 *
 * The logic is the same for both modes, the only difference is the return value. In 'error' mode
 * it will throw an error if the argument is invalid and in 'boolean' mode it will return false if
 * the argument is invalid. It returns true in both modes if validation passes. It uses the name
 * and types array (if provided) to build the error message in the case of validation failure.
 * The goal is to provide a helpful error message to the user when they are using the endpoint
 * functions in this package incorrectly.
 *
 * Default (error) mode is useful for validating arguments supplied to a function and throwing an
 * error if the arguments are invalid. Can also be used to validate existence and type of any
 * value in a general sense. It will throw an error if the argument is invalid and return true if
 * the argument is valid.
 *
 * Boolean mode is useful for validating arguments in a function that returns a boolean value, such
 * as in Array.filter() or 'if' statements. It will return false if the argument is invalid and
 * true if the argument is valid.
 *
 * `name` and `value` are required in each arg object. `required` and `types` are optional.
 *
 * At least one of `required` or `types` must be provided as part of each arg object. If neither
 * are provided then there would be nothing to validate against. If you aren't providing either of
 * those for a certain arg then you probably don't need to use this function for that arg as it
 * will always return true.
 *
 * The logic for validation is as follows:
 *
 * If both `required` is true and `types` are provided, it will validate the value is defined and
 * that the typeof value is one of the provided strings in the `types` array.
 *
 * If `required` is true and no `types` are provided, it will only validate value is defined.
 *
 * If `types` is provided but it is not `required`, it will only validate value is one of the
 * supplied strings in the provided `types` array. If value is 'undefined' it will skip validation
 * as there is no value to validate against and user would mark it required if they wanted to
 * validate against a defined value. It will however catch any other falsey values that are not
 * 'undefined' and fail type validation. If you value is not required and you give types of
 * ['string', 'number'] for example, it will validate that the value is either a string or a
 * number. If that value in the given example is type 'undefined' it will skip the validation.
 * However it will still fail if the typeof value is anything other than 'undefined' and does not
 * match the given types, which includes all other values considered falsey such as 'null', 'false',
 * '0', etc. In the given example, if the value is 'null' it will fail validation as null is not
 * a string or a number type.
 *
 * If neither `required` nor `types` are provided, it will not peerform validation and will
 * simply return true.
 *
 * @param {Object} options - options object
 * @param {string} options.name - name of the argument
 * @param {unknown} options.value - value of the argument
 * @param {boolean} [options.required] - if true, will validate that value is defined
 * @param {(string[])} [options.types] - array of strings to validate value against
 * @param {('error' | 'boolean')} [options.errorMode='error'] - 'error' or 'boolean' - 'error' will throw an error if the argument is invalid, 'boolean' will return false if the argument is invalid
 * @returns boolean - true if validation passes, throws error in the case of validation failure
 *
 * @example
 * // throws error in default (error) mode, typeof value is not one of the provided types
 * validateArgument({
 *   name: 'myArg',
 *   value: ['not', 'a', 'string'],
 *   types: ['string', 'number'],
 * })
 *
 * @example
 * // throws error in default (error) mode, value is not defined
 * validateArgument({
 *   name: 'myArg',
 *   value: undefined,
 *   required: true,
 *   types: ['string', 'number'],
 * })
 *
 * @example
 * // returns false in boolean mode, value is not one of the provided types
 * validateArgument({
 *   name: 'myArg',
 *   value: null,
 *   types: ['string', 'number'],
 *   errorMode: 'boolean'
 * })
 *
 * @example
 * // returns true in default (error) mode, all validations pass
 * validateArgument({
 *   name: 'myArg',
 *   value: [3000, 'hello', null],
 *   required: true,
 *   types: ['array'],
 * })
 *
 * @example
 * // returns true in boolean mode, all validations pass
 * validateArgument({
 *   name: 'myArg',
 *   value: 3000,
 *   types: ['string', 'number'],
 *   errorMode: 'boolean'
 * })
 *
 */
export const validateArgument = ({
  name,
  value,
  required,
  types,
  errorMode = 'error',
}: IArgToValidate & { errorMode?: 'error' | 'boolean' }): boolean => {
  if (getTypeof(name) !== 'string') {
    throw Error(`'name', is required and must be of type string`)
  }

  let error = ''
  const typeofValue = getTypeof(value)
  const errorPrepend = `error validating argument named "${name}",`
  const errorAppend = `received value: ${value} - of type: <${typeofValue}>`

  if (types && getTypeof(types) !== 'array' && !types.length) {
    throw Error(`${errorPrepend} 'types' must be an array of strings`)
  }

  /* ex: if types = ['string', 'number'] then you'll get '<string | number>' */
  const joinedTypes = types ? `<${types.join(' | ')}>` : ''

  /* argument validation logic */
  if (required && !types) {
    if (!value) {
      error = `${errorPrepend} is required, ${errorAppend}`
    }
  } else if (types && !required) {
    /* if value is not defined and is not required then there should be no need to validate the type */
    if (value !== undefined && !types.includes(typeofValue)) {
      error = `${errorPrepend} must be of type(s) ${joinedTypes}, ${errorAppend}`
    }
  } else if (required && types) {
    if (!value || !types.includes(typeofValue)) {
      error = `${errorPrepend} is required and must be of type(s) ${joinedTypes}, ${errorAppend}`
    }
  }

  if (error.length) {
    if (errorMode === 'boolean') return false
    else throw Error(error)
  }

  return true
}
