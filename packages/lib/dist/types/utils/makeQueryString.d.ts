/**
 * @module utils/makeQueryString
 * @category Utils
 */
/**
 * Utility method to generate a query string compatible with the NHSTA API, for use in an API URL string.
 *
 * @async
 *
 * @param {object} params - Object of Type [QueryStringParameters](module-utils_makeQueryString.html#.QueryStringParameters).
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
 * - Given params of `{ paramName: "" }` , setting this to true will use 'paramName=' in the final query string.
 * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
 *
 * @returns {Promise<string>} A query string of search parameters for use in a final Fetch.get URL.
 *
 * @example <caption>When loaded as a module</caption>
 * import { makeQueryString } from '@shaggytools/nhtsa-api-wrapper'
 * const qs = await makeQueryString({ modelYear: 2010 }).catch(error => error)
 * console.log(qs) // "?modelYear=2010"
 *
 * @example <caption>Single Param:</caption>
 * const qs = await makeQueryString({
 *   modelYear: 2019
 * }).catch(error => error)
 * console.log(qs) // "?modelYear=2019&format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await makeQueryString({
 *   whatever: 'some value',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 *
 * console.log(qs) // "?whatever=some%20value&modelYear=2006&page=2&format=json"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await makeQueryString({}).catch(error => error)
 *
 * console.log(qs) // "?format=json"
 *
 * @example <caption>Using allowEmptyStringValues option:</caption>
 * const qs = await makeQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi'
 * }, true).catch(error => error)
 *
 * console.log(qs) // "?year=2016&vehicleType=&make=Audi&format=json"
 *
 */
export declare function makeQueryString(params?: QueryStringParameters, allowEmptyStringValues?: boolean): Promise<string>;
/**
 * Object containing Key:Value pairs to build the URL query string with.
 * - Parameter values may be either strings or numbers.
 *
 * @memberof module:utils/makeQueryString
 * @alias QueryStringParameters
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
//# sourceMappingURL=makeQueryString.d.ts.map