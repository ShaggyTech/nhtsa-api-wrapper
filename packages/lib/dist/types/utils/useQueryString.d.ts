/**
 * @module utils/createQueryString
 * @category Internal Utility Functions
 */
/** Valid URI component types */
export declare type QueryStringTypes = string | number | boolean;
/** Object to build the query string with */
export declare type QueryStringParams = Record<string, QueryStringTypes>;
/** Object returned by encodeQueryStringParams() */
export declare type QueryStringParamsEncoded<T> = {
    [key in keyof T]: string;
};
/**
 * Utility function to generate a query string conforming to URI component standards. Takes an an
 * optional object of search parameters and returns an encoded query string.
 *
 * The paramater { format: 'json' } is hardcoded and cannot be overridden, this package provides
 * no support for CSV or XML formats at this time. The default query string will be "?format=json"
 * even if no `params` are provided by user.
 *
 * - Ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings
 *   by default.
 * - If first argument is not an object then it will be ignored.
 * - If second argument `allowEmptyParams` is set to `true`, the function will include keys with
 *   empty string values, e.g. 'emptyKey='
 *
 * @param {QueryStringParams} params - An object of search parameters to be converted to a query string.
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to include keys with empty string values, e.g. 'emptyKey='.
 * @returns {string} - A query string of search parameters for use in a final fetch URL.
 */
export declare const createQueryString: (params?: QueryStringParams, allowEmptyParams?: boolean) => string;
/**
 * Utility function to perform URI component encoding on all values in an object, for use in URL query strings.
 *
 * In it's current implementation, this function assumes that invalid types have already been filtered out, and that all values are valid.
 * If you need to be sure that all keys are present in the returned object, you can use the `validateArgument()` function
 * to check the types of all values are valid before calling this function.
 *
 * - Returns an object of valid URI encoded parameters with same keys as the original object.
 * - Will silently filter out parameters with values that are not type string, number, or boolean.
 *   It filters invalid key/values so that encodeURIComponent() does not throw an error.
 *
 * @param {QueryStringParams} params - An object of search parameters to be encoded.
 * @returns {QueryStringParamsEncoded} - A new object of same keys as the original object with values converted to URI component strings.
 *   Any keys with values not a string, number, or boolean are filtered out of final object.
 */
export declare const encodeQueryStringParams: <T extends QueryStringParams>(params: T) => QueryStringParamsEncoded<T>;
//# sourceMappingURL=useQueryString.d.ts.map