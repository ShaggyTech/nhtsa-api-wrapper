import { NHTSA_RESPONSE_FORMAT } from '../constants'
import { getTypeof, validateArgument } from '.'

/**
 * @module utils/createQueryString
 * @category Internal Utility Functions
 */

/**
 * Utility function to generate a query string conforming to URI standards for use in API URL strings.
 * This function was written in order to support the NHTSA API,
 * which requires a query string of search parameters be formatted in a specific way to avoid 404 responses.
 * It may not be suitable in creating query strings for other APIs.
 *
 * - The function takes an an optional object of search parameters and returns a query string.
 * - If first argument is not an object then it will be ignored.
 * - The paramater { format: 'json' } is hardcoded and cannot be overridden, no support for CSV or XML formats at this time.
 *   If you provide no params, all invalid params, or an empty object as params,
 *   the function will return a query string with only the hardcoded format parameter, e.g. "?format=json".
 * - The function ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings by default.
 * - If second argument `allowEmptyStringValues` is set to `true`, the function will include empty string values in the returned query string.
 *
 * @param {QueryStringParameters} params - An object of search parameters to be converted to a query string.
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

  const queryString =
    '?' +
    Object.entries(_params)
      /* Filter invalid URI value types */
      .filter(([, value]) =>
        validateArgument({
          name: '',
          types: ['string', 'number', 'boolean'],
          value,
          mode: 'boolean',
        })
      )
      .map(([key, value], index, array) => {
        const isEmptyString = value === ''
        value = encodeURIComponent(value)

        /* Skip empty values unless allowEmptyStringValues is true, convert [key]:value to key=value, append '&' if not last param */
        return value.length || (allowEmptyStringValues && isEmptyString)
          ? `${key}=${value}${index < array.length - 1 ? '&' : ''}`
          : ''
      })
      .join('')

  /* default: ?format=json */
  return queryString
}

/**
 * Object containing Key:Value pairs to build the URL query string with.
 * @typedef QueryStringParameters
 *
 * @example
 * {
 * modelYear: 2009,
 * whatever: 'something'
 * }
 *
 */
export type QueryStringParameters = {
  [propName: string]: string | number | boolean | undefined
}
