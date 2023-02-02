import { getTypeof } from '../utils'
import type { AtLeastOne } from '../types'

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
 * validation logic works.
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
 * At least one of `required` or `types` must be provided for each arg to validate against or it
 * will validate nothing and return true for that arg value as if it was valid.
 *
 * - It will throw an error if the argument is invalid based on the provided options.
 * - If the argument is valid, it will return true.
 * - If the argument is invalid, it will return false.
 * - If the argument is invalid and mode is set to 'error', it will throw an error.
 * - If the argument is invalid and mode is set to 'boolean', it will return false.
 *
 * - If types array is not provided, it will only validate that value is defined.
 * - If required boolean is true, it will only validate value is one of the supplied strings in
 *   the provided types array for each arg.
 * - If both are provided, it will validate against both required value and matching type(s).
 *
 * @param {Object} options - options object
 * @param {string} options.name - name of the argument
 * @param {unknown} options.value - value of the argument
 * @param {boolean} [options.required] - if true, will validate that value is defined
 * @param {string[]} [options.types] - array of strings to validate value against
 * @param {('error' | 'boolean')} [options.errorMode='error'] - 'error' or 'boolean' - 'error' will throw an error if the argument is invalid, 'boolean' will return false if the argument is invalid
 * @returns boolean - true if validation passes, throws error in the case of validation failure
 *
 * @example
 * // throws error in default (error) mode, typeof value is not one of the provided types
 * validateArgument({
 *  name: 'myArg',
 *  value: ['not', 'a', 'string'],
 *  types: ['string', 'number'],
 * })
 *
 * @example
 * // throws error in default (error) mode, value is not defined
 * validateArgument({
 *  name: 'myArg',
 *  value: undefined,
 *  required: true,
 *  types: ['string', 'number'],
 * })
 *
 * @example
 * // returns false in boolean mode, value is not one of the provided types
 * validateArgument({
 *  name: 'myArg',
 *  value: null,
 *  types: ['string', 'number'],
 *  errorMode: 'boolean'
 * })
 *
 * @example
 * // returns true in boolean mode, all validations pass
 * validateArgument({
 *  name: 'myArg',
 *  value: 3000,
 *  types: ['string', 'number'],
 *  errorMode: 'boolean'
 * })
 *
 * @example
 * // returns true in default (error) mode, all validations pass
 * validateArgument({
 *  name: 'myArg',
 *  value: 3000,
 *  required: true,
 *  types: ['string', 'number'],
 * })
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
