/**
 * @module api/actions/GetAllMakes
 * @category Actions
 * @description GetAllMakes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetAllMakes](module-api_actions_GetAllMakes.GetAllMakes.html)
 * >
 * > **Types**
 * > - Type: [GetAllMakesResponse](#GetAllMakesResponse)
 * > - Type: [GetAllMakesResults](#GetAllMakesResults)
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
export declare class GetAllMakes extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This provides a list of all the Makes available in the vPIC Dataset.
     *
     * @async
     * @returns {(Promise<GetAllMakesResponse>)} Api Response object.
     */
    GetAllMakes(): Promise<GetAllMakesResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetAllMakesResponse}.Results' array.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResults
 */
export declare type GetAllMakesResults = {
    Make_ID: number;
    Make_Name: string;
};
/**
 * Type representing the complete response returned by the GetAllMakes API Action.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResponse
 */
export declare type GetAllMakesResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetAllMakesResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetAllMakes.d.ts.map