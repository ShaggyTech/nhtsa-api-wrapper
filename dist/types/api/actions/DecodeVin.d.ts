/**
 * @module api/actions/DecodeVin
 * @category Actions
 * @description DecodeVin NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVin](module-api_actions_DecodeVin.DecodeVin.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinResponse](#DecodeVinResponse)
 * > - Type: [DecodeVinResults](#DecodeVinResults)
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
export declare class DecodeVin extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * The DecodeVin API Action will decode the VIN and the decoded output will be made available in the format of Key-value pairs.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This API also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinResponse | Error>)} - Api Response object.
     */
    DecodeVin(vin: string, params?: {
        modelYear?: number;
    }): Promise<DecodeVinResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link DecodeVinResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeVin
 * @alias DecodeVinResults
 */
export declare type DecodeVinResults = {
    Value: string | null;
    ValueId: string | null;
    Variable: string;
    VariableId: number;
};
/**
 * Type representing the complete response returned by the DecodeVin API Action.
 *
 * @memberof module:api/actions/DecodeVin
 * @alias DecodeVinResponse
 */
export declare type DecodeVinResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<DecodeVinResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=DecodeVin.d.ts.map