/**
 * @module api/actions/GetMakesForManufacturerAndYear
 * @category Actions
 * @description GetMakesForManufacturerAndYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForManufacturerAndYear](module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForManufacturerAndYearResponse](#GetMakesForManufacturerAndYearResponse)
 * > - Type: [GetMakesForManufacturerAndYearResults](#GetMakesForManufacturerAndYearResults)
 *
 */
import { Fetch, FetchConfig, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export declare class GetMakesForManufacturerAndYear extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer,
     * and whose Year From and Year To range cover the specified year.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     * - Manufacturer can be idenfitied by Id, a partial name, or a full name
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
     *
     * @returns {(Promise<GetMakesForManufacturerAndYearResponse | Error>)} Api Response object.
     */
    GetMakesForManufacturerAndYear(manufacturer: string | number, params: {
        year: number;
    }): Promise<GetMakesForManufacturerAndYearResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetMakesForManufacturerAndYearResponse}.Results' array.
 *
 * @memberof module:api/actions/GetMakesForManufacturerAndYear
 * @alias GetMakesForManufacturerAndYearResults
 */
export declare type GetMakesForManufacturerAndYearResults = {
    MakeId: number;
    MakeName: string;
    MfrId: number;
    MfrName: string;
};
/**
 * Type representing the complete response returned by the GetMakesForManufacturerAndYear API Action.
 *
 * @memberof module:api/actions/GetMakesForManufacturerAndYear
 * @alias GetMakesForManufacturerAndYearResponse
 */
export declare type GetMakesForManufacturerAndYearResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetMakesForManufacturerAndYearResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetMakesForManufacturerAndYear.d.ts.map