/**
 * @module utils/createQueryString
 * @category Internal Utility Functions
 */

import { NHTSA_RESPONSE_FORMAT } from '../constants'
import { getTypeof, validateArgument } from '.'

/** Valid URI component types */
export type QueryStringTypes = string | number | boolean

/** Object containing Key:Value pairs to build the query string with */
export type QueryStringParams = Record<string, QueryStringTypes>

/** Structure of the object returned by encodeQueryStringParams() */
export type QueryStringParamsEncoded<T> = { [key in keyof T]: string }

/**
 * Utility function to generate a query string conforming to URI component standards.
 * Takes an an optional object of search parameters and returns an encoded query string.
 * The paramater { format: 'json' } is hardcoded and cannot be overridden,
 * no support for CSV or XML formats at this time. i.e. default string will be "?format=json".
 * - If first argument is not an object then it will be ignored.
 * - The function ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings by default.
 * - If second argument `allowEmptyStringValues` is set to `true`,
 *   the function will include keys with empty string values, e.g. 'emptyKey='
 *
 * @param {QueryStringParams} params - An object of search parameters to be converted to a query string.
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to include keys with empty string values, e.g. 'emptyKey='.
 * @returns {string} - A query string of search parameters for use in a final fetch URL.
 */
export const createQueryString = (
  params?: QueryStringParams,
  allowEmptyStringValues = false
): string => {
  /* Static (hardcoded) params are 'format=json' */
  const staticParams = { format: NHTSA_RESPONSE_FORMAT }

  /* Merge with valid user params but override with static params */
  const _params =
    getTypeof(params) === 'object'
      ? { ...params, ...staticParams }
      : staticParams

  /* Create query string from params */
  const queryString =
    '?' +
    Object.entries(encodeQueryStringParams(_params))
      .map(([key, value], index, array) => {
        return value.length || (allowEmptyStringValues && value === '')
          ? `${key}=${value}${index < array.length - 1 ? '&' : ''}`
          : ''
      })
      .join('')

  /* default: ?format=json */
  return queryString
}

/**
 * Utility function to perform URI component encoding on values in an object, for use in URL query strings.
 *
 * - Will filter out invalid parameters with values that are not strings, numbers, or booleans.
 * - Returns an object of valid URI encoded parameters with same keys as the original object.
 *
 * In it's current implementation, this function assumes that invalid types have already been filtered out, and that all values are valid.
 * It filters out invalid key/values so that encodeURIComponent() does not throw an error.
 *
 * The function return is typed with the assumption that all values are valid and will not be filtered out,
 * optional values will still show possibly undefined.
 * - If you need to be sure that all keys are present in the returned object, you can use the `validateArgument()` function
 *   to check the type of each value before passing it to this function.
 *
 * @param {QueryStringParams} params - An object of search parameters to be encoded.
 * @returns {QueryStringParamsEncoded} - A new object of same keys as the original object with values converted to URI component strings.
 *   Any keys with values not a string, number, or boolean are filtered out of final object.
 */
export const encodeQueryStringParams = <T extends QueryStringParams>(
  params: T
): QueryStringParamsEncoded<T> => {
  return Object.entries(params)
    .filter(([key, value]) =>
      validateArgument({
        name: key,
        types: ['string', 'number', 'boolean'],
        value,
        mode: 'boolean',
      })
    )
    .reduce((acc, [key, value]) => {
      /* can expect only strings, numbers, and booleans after filtering */
      acc[key as keyof T] = encodeURIComponent(value)
      return acc
    }, {} as QueryStringParamsEncoded<T>)
}
