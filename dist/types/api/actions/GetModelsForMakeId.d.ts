/**
 * @module api/actions/GetModelsForMakeId
 * @category Actions
 * @description GetModelsForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeId](module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdResponse](#GetModelsForMakeIdResponse)
 * > - Type: [GetModelsForMakeIdResults](#GetModelsForMakeIdResults)
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
export declare class GetModelsForMakeId extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns the Models in the vPIC dataset for a specified Make
     * whose Id is equal to the `makeId` in the vPIC Dataset.
     *
     * @async
     * @param {number} makeID - Vehicle make ID (number).
     * @returns {(Promise<GetModelsForMakeIdResponse>)} Api Response object.
     */
    GetModelsForMakeId(makeID: number): Promise<GetModelsForMakeIdResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeIdResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMakeId
 * @alias GetModelsForMakeIdResults
 */
export declare type GetModelsForMakeIdResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
/**
 * Type representing the complete response returned by the GetModelsForMakeId API Action.
 *
 * @memberof module:api/actions/GetModelsForMakeId
 * @alias GetModelsForMakeIdResponse
 */
export declare type GetModelsForMakeIdResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetModelsForMakeIdResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetModelsForMakeId.d.ts.map