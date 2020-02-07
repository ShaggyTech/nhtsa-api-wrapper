/**
 * @memberof module:makeQueryString
 * @category Utils
 *
 * @description Object containing Key:Value pairs to build the URL query string with.<br>
 * Parameter values may be either strings or numbers. <br>
 * ---
 * ```javascript
 *  Example
 *  {
 *    format: 'json',
 *    modelYear: 2009,
 *    whatever: 'something'
 *  }
 * ```
 */
export interface QueryStringParameters {
    [propName: string]: string | number | undefined;
}
/**
 * @module makeQueryString
 * @category Utils
 */
/**
 * @async
 * @description Utility method to generate a query string.<br>
 *   Prepend it to an API URL string. <br>
 *   ---
 *
 * @param {object} params Object of Type [QueryStringParameters](module-makeQueryString.QueryStringParameters.html)
 *
 * @returns {Promise<string>|Error} An API query string <br>
 *  - On resolve: `Promise(<string>)`<br>
 *  - On reject: `new Error(<string>)` - if parameters are not of type 'object'
 *
 * @example <caption>Single Param:</caption>
 * const qs = await genQueryString({
 *   format: 'json'
 * }).catch(error => error)
 * //  qs = "format=json"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await genQueryString({
 *   format: 'json',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 * // qs = "?format=json&modelYear=2006&page=2"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await genQueryString({}).catch(error => error)
 * // qs = ""
 *
 */
export declare function makeQueryString(params?: QueryStringParameters): Promise<string | Error>;
//# sourceMappingURL=makeQueryString.d.ts.map