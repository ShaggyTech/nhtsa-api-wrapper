/**
 * @module api/actions/GetVehicleVariableList
 * @category Actions
 * @description GetVehicleVariableList NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleVariableList](module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleVariableListResponse](#GetVehicleVariableListResponse)
 * > - Type: [GetVehicleVariableListResults](#GetVehicleVariableListResults)
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
export declare class GetVehicleVariableList extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This provides a list of all the Vehicle related variables that are in the vPIC dataset.
     * - Information on the name, description and the type of the variable is provided.
     *
     * @async
     * @returns {(Promise<GetVehicleVariableListResponse | Error>)} Api Response object.
     */
    GetVehicleVariableList(): Promise<GetVehicleVariableListResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetVehicleVariableListResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleVariableList
 * @alias GetVehicleVariableListResults
 */
export declare type GetVehicleVariableListResults = {
    DataType: string;
    Description: string;
    ID: number;
    Name: string;
};
/**
 * Type representing the complete response returned by the GetVehicleVariableList API Action.
 *
 * @memberof module:api/actions/GetVehicleVariableList
 * @alias GetVehicleVariableListResponse
 */
export declare type GetVehicleVariableListResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetVehicleVariableListResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetVehicleVariableList.d.ts.map