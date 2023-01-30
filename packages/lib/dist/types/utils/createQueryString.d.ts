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
export declare const createQueryString: (params?: QueryStringParameters, allowEmptyStringValues?: boolean) => string;
/**
 * Ensures there are no invalid characters in a URI query string.
 * Only characters a-z, 0-9, and ?,&,=,% are allowed.
 * @param {string} string - The URI query string to validate
 * @returns {string} - The validated URI query string
 * @throws {Error} - If invalid characters are found in the URI query string
 */
export declare const validateURI: (value: string) => string;
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
export declare type QueryStringParameters = {
    [propName: string]: string | number | undefined;
};
//# sourceMappingURL=createQueryString.d.ts.map