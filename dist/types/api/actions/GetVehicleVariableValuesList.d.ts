/**
 * @module api/actions/GetVehicleVariableValuesList
 * @category Actions
 * @description GetVehicleVariableValuesList NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleVariableValuesList](module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleVariableValuesListResponse](#GetVehicleVariableValuesListResponse)
 * > - Type: [GetVehicleVariableValuesListResults](#GetVehicleVariableValuesListResults)
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
export declare class GetVehicleVariableValuesList extends Fetch {
    /**
     * This provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
     *
     * This applies to only "Look up" type of variables.
     * - `variableValue` can either be a:
     *   - Variable Name ("battery type" in first example, please use full name, not just part of it),
     *   - or Variable ID (number).
     *
     * @async
     * @param {string|number} variableValue - The variable you want to get a values list of.
     * @returns {(Promise<GetVehicleVariableValuesListResponse | Error>)} Api Response object.
     */
    GetVehicleVariableValuesList(variableValue: string | number): Promise<GetVehicleVariableValuesListResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetVehicleVariableValuesListResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleVariableValuesList
 * @alias GetVehicleVariableValuesListResults
 */
export declare type GetVehicleVariableValuesListResults = {
    ElementName: string;
    Id: number;
    Name: string;
};
/**
 * Type representing the complete response returned by the GetVehicleVariableValuesList API Action.
 *
 * @memberof module:api/actions/GetVehicleVariableValuesList
 * @alias GetVehicleVariableValuesListResponse
 */
export declare type GetVehicleVariableValuesListResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetVehicleVariableValuesListResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetVehicleVariableValuesList.d.ts.map