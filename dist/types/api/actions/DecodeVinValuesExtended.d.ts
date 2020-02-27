/**
 * @module api/actions/DecodeVinValuesExtended
 * @category Actions
 * @description DecodeVinValuesExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinValuesExtended](module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinValuesExtendedResponse](#DecodeVinValuesExtendedResponse)
 * > - Type: [DecodeVinValuesExtendedResults](#DecodeVinValuesExtendedResults)
 *
 */
import { Fetch, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export declare class DecodeVinValuesExtended extends Fetch {
    /**
     * This is exactly like the DecodeVinValues (flat format Results) method but provides additional information
     * on variables related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - The Results will be made available in a flat file format of a single object containing
     *   'key<string>: value<string>' results.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinValuesExtendedResponse | Error>)} Api Response object.
     */
    DecodeVinValuesExtended(vin: string, params?: {
        modelYear?: string | number;
    }): Promise<DecodeVinValuesExtendedResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link DecodeVinValuesExtendedResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeVinValuesExtended
 * @alias DecodeVinValuesExtendedResults
 */
export declare type DecodeVinValuesExtendedResults = {
    /** Flat file format, single object containing keys and values of type string */
    [name: string]: string;
};
/**
 * Type representing the complete response returned by the DecodeVinValuesExtended API Action.
 *
 * @memberof module:api/actions/DecodeVinValuesExtended
 * @alias DecodeVinValuesExtendedResponse
 */
export declare type DecodeVinValuesExtendedResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /**
     * The search results returned by the NHSTA API request.
     * Flat file format, single object containing keys and values of type string
     * */
    Results: Array<DecodeVinValuesExtendedResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=DecodeVinValuesExtended.d.ts.map