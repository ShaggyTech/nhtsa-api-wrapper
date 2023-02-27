/**
 * @module utils/queryString
 * @category Utility Functions
 */

import { NHTSA_RESPONSE_FORMAT } from '@/constants'
import { validateArgument } from '@/utils'

/** Valid URI component types */
export type QueryStringTypes = string | number | boolean

/** Object to build the query string with */
export type QueryStringParams = Record<string, QueryStringTypes>

/** Object returned by encodeQueryStringParams() */
export type QueryStringParamsEncoded<T> = { [key in keyof T]: string }

/**
 * Utility function to perform URI component encoding on all values in an object, for use in URL
 * query strings.
 *
 * - Returns an object of valid URI encoded parameters with same keys as the original object.
 * - Will silently filter out parameters with values that are not type `string`, `number`, or
 *   `boolean`.
 * - It filters invalid key/values so that encodeURIComponent() does not throw an error.
 *
 * In it's current implementation, this function assumes that invalid types have already been
 * filtered out, and that all values are valid. If you need to be sure that all keys are present
 * in the returned object, you can use the `validateArgument()` function to check the types of all
 * values are valid before calling this function.
 *
 * This function is not exported by the package, but is used internally by other
 * functions. However, it _is_ exported by the package as part of the composable function
 * `useQueryString`, and renamed to `encodeParams` for less verbose use.
 *
 * @param {QueryStringParams} params - An object of search parameters to be encoded.
 * @returns {QueryStringParamsEncoded} - A new object of same keys as the original object with
 * values converted to URI component strings. Any keys with values not a string, number, or
 * boolean are filtered out of final object.
 */
export const encodeQueryStringParams = <T extends QueryStringParams>(
  params: T,
): QueryStringParamsEncoded<T> => {
  /* Validate user provided params is an object */
  validateArgument({
    name: 'params',
    value: params,
    required: true,
    types: ['object'],
  })

  const _params = Object.entries(params)
    .filter(([key, value]) =>
      validateArgument({
        name: key,
        types: ['string', 'number', 'boolean'],
        value,
        errorMode: 'boolean',
      }),
    )
    .reduce((acc, [key, value]) => {
      /* can expect only strings, numbers, and booleans after filtering */
      acc[key as keyof T] = encodeURIComponent(value)
      return acc
    }, {} as QueryStringParamsEncoded<T>)

  return _params
}

/**
 * Utility function to generate a query string conforming to URI component standards. Takes an an
 * optional object of search parameters and returns an encoded query string.
 *
 * The parameter `{ format: 'json' }` is hardcoded and cannot be overridden, this package provides
 * no support for CSV or XML formats at this time. The default query string will be "?format=json"
 * even if no `params` are provided by user.
 *
 * - Ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings
 *   by default.
 * - If first argument is not an object then it will be ignored.
 * - If second argument `allowEmptyParams` is set to `true`, the function will include keys with
 *   empty string values, e.g. 'emptyKey='
 *
 * This function is not exported by the package, but is used internally by other
 * functions. However, it _is_ exported by the package as part of the composable function
 * `useQueryString`, and renamed to `createString` for less verbose use.
 *
 * @param {QueryStringParams} params - An object of search parameters to be converted to a query
 * string.
 * @param {boolean} [allowEmptyParams=false] - Set to `true` to include keys with empty string
 * values, e.g. 'emptyKey='.
 * @returns {string} - A query string of search parameters for use in a final fetch URL.
 */
export const createQueryString = <T extends QueryStringParams>(
  params = {} as T,
  allowEmptyParams = false,
): string => {
  /* Validate user provided params is an object */
  validateArgument({
    name: 'params',
    value: params,
    types: ['object'],
  })

  /* Merge with valid user params but override with static params */
  const _params = encodeQueryStringParams({
    ...params,
    format: NHTSA_RESPONSE_FORMAT,
  })

  /* Create query string from params, default: ?format=json */
  return (
    '?' +
    Object.entries(_params)
      .map(([key, value], index, array) => {
        return value.length || (allowEmptyParams && value === '')
          ? `${key}=${value}${index < array.length - 1 ? '&' : ''}`
          : ''
      })
      .join('')
  )
}
