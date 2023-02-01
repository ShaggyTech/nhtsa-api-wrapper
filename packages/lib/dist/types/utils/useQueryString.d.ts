/**
 * @module utils/createQueryString
 * @category Internal Utility Functions
 */
/** Valid URI component types */
export declare type QueryStringTypes = string | number | boolean;
/** Object containing Key:Value pairs to build the query string with */
export declare type QueryStringParams = Record<string, QueryStringTypes>;
/** Structure of the object returned by encodeQueryStringParams() */
export declare type QueryStringParamsEncoded<T> = {
    [key in keyof T]: string;
};
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
export declare const createQueryString: (params?: QueryStringParams, allowEmptyStringValues?: boolean) => string;
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
export declare const encodeQueryStringParams: <T extends QueryStringParams>(params: T) => QueryStringParamsEncoded<T>;
//# sourceMappingURL=useQueryString.d.ts.map