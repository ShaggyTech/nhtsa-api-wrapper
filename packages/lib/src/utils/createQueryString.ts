import { NHTSA_RESPONSE_FORMAT } from '../constants'
import { getTypeof } from './getTypeof'

/**
 * @module utils/createQueryString
 * @category Internal Utility Functions
 */

/**
 * Utility function to generate a query string conforming to URI standards for use in API URL strings.
 *
 * The function takes an object of search parameters and returns a query string.
 * The paramater { format: 'json' } is hardcoded and cannot be overridden, no support for CSV or XML formats.
 * The function ignores any parameters that are not strings or numbers, and also ignores empty strings or falsy values by default.
 * If `allowEmptyStringValues` option is set to `true`, the function will include empty string values in the returned query string.
 * The function only allows characters a-z, 0-9, and ?,&,=,% in valid URI strings
 *   and will throw an error if invalid characters are found in the search parameters.
 *
 * @param {QueryStringParameters} params - An object of search parameters to be converted to a query string, will be ignored if not an object.
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to include empty string values in the returned query string.
 * @returns {string} - A query string of search parameters for use in a final fetch URL.
 * @throws {Error} - If any invalid characters are found in the search parameters.
 *
 * @requires module:utils/getTypeof
 * @requires module:constants/NHTSA_RESPONSE_FORMAT
 *
 * @example
 * // use default params
 * const qs = await createQueryString()
 * const qs2 = await createQueryString({})
 * console.log(qs)
 * // Output: "?format=json"
 * console.log(qs2)
 * // Output: "?format=json"
 *
 * @example
 * // basic usage
 * const qs = await createQueryString({ modelYear: 2019 })
 * console.log(qs)
 * // Output: "?modelYear=2019&format=json"
 *
 * @example
 * // URI encodes string with spaces
 * const qs = await createQueryString({
 *   whatever: 'some value',
 *   modelYear: 2006,
 *   page: "2",
 * })
 * console.log(qs)
 * // Output: "?whatever=some%20value&modelYear=2006&page=2&format=json"
 *
 * @example
 * // uses empty string values with allowEmptyStringValues = true
 * const qs = await createQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi',
 * }, true)
 * console.log(qs)
 * // Output: "?year=2016&vehicleType=&make=Audi&format=json"
 *
 */
export const createQueryString = (
  params?: QueryStringParameters,
  allowEmptyStringValues = false
): string => {
  /* Static (default) params are 'format=json', this package does not support CSV or XML formats */
  const staticParams = { format: NHTSA_RESPONSE_FORMAT }

  /* Merge default params with user params, override with static params, ignore params if not an object */
  const _params =
    getTypeof(params) === 'object'
      ? { ...params, ...staticParams }
      : staticParams

  /* Create query string  */
  const queryString =
    '?' +
    Object.entries(_params)
      .map(([key, value], index, array) => {
        const typeofValue = getTypeof(value)

        /* Skip invalid values */
        if (typeofValue !== 'string' && typeofValue !== 'number') {
          return ''
        }

        /* Convert number values to string */
        if (typeofValue === 'number') {
          value = value.toString()
        }

        /* Skip empty values unless allowEmptyStringValues is true, convert [key]:value to key=value, append '&' if not last param */
        return value.length || (allowEmptyStringValues && value === '')
          ? `${key}=${value}${index < array.length - 1 ? '&' : ''}`
          : ''
      })
      .join('')

  /* Perform URI encoding and return the completed string after checking URI validity */
  return validateURI(queryString)
}

/**
 * Ensures there are no invalid characters in a URI query string.
 * Only characters a-z, 0-9, and ?,&,=,% are allowed.
 * @param {string} string - The URI query string to validate
 * @returns {string} - The validated URI query string
 * @throws {Error} - If invalid characters are found in the URI query string
 */

export const validateURI = (value: string): string => {
  value = encodeURI(value)
  const invalidCharacters = /[^0-9A-Z?&=%]/gi
  if (invalidCharacters.test(value)) {
    throw Error(
      'Invalid characters found in query string. Only characters a-z, 0-9, and ?,&,=,% are allowed.'
    )
  }
  return value
}

/**
 * Object containing Key:Value pairs to build the URL query string with.
 * @typedef {Object.<string, number>} QueryStringParameters
 *
 * @example
 * {
 * modelYear: 2009,
 * whatever: 'something'
 * }
 *
 */
export type QueryStringParameters = {
  [propName: string]: string | number | undefined
}
