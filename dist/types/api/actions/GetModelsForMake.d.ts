/**
 * @module api/actions/GetModelsForMake
 * @category Actions
 * @description GetModelsForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMake](module-api_actions_GetModelsForMake.GetModelsForMake.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeResponse](#GetModelsForMakeResponse)
 * > - Type: [GetModelsForMakeResults](#GetModelsForMakeResults)
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
export declare class GetModelsForMake extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns the Models in the vPIC dataset for a specified `makeName`
     * whose Name is LIKE the Make in vPIC Dataset.
     * - `makeName` can be a partial, or a full for more specificity
     *   (e.g., "Harley", "Harley Davidson", etc.).
     *
     * @async
     * @param {string} makeName - Vehicle make name.
     * @returns {(Promise<GetModelsForMakeResponse | Error>)} Api Response object.
     */
    GetModelsForMake(makeName: string): Promise<GetModelsForMakeResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMake
 * @alias GetModelsForMakeResults
 */
export declare type GetModelsForMakeResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
/**
 * Type representing the complete response returned by the GetModelsForMake API Action.
 *
 * @memberof module:api/actions/GetModelsForMake
 * @alias GetModelsForMakeResponse
 */
export declare type GetModelsForMakeResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetModelsForMakeResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetModelsForMake.d.ts.map