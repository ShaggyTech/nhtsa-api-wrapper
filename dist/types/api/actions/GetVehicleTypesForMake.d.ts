/**
 * @module api/actions/GetVehicleTypesForMake
 * @category Actions
 * @description GetVehicleTypesForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMake](module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeResponse](#GetVehicleTypesForMakeResponse)
 * > - Type: [GetVehicleTypesForMakeResults](#GetVehicleTypesForMakeResults)
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
export declare class GetVehicleTypesForMake extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make,
     * whose name is LIKE the make name in the vPIC Dataset.
     * - `makeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @param {string} makeName - Name of the vehicle make to search.
     * @returns {(Promise<GetVehicleTypesForMakeResponse>)} Api Response object.
     */
    GetVehicleTypesForMake(makeName: string): Promise<GetVehicleTypesForMakeResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetVehicleTypesForMakeResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleTypesForMake
 * @alias GetVehicleTypesForMakeResults
 */
export declare type GetVehicleTypesForMakeResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
/**
 * Type representing the complete response returned by the GetVehicleTypesForMake API Action.
 *
 * @memberof module:api/actions/GetVehicleTypesForMake
 * @alias GetVehicleTypesForMakeResponse
 */
export declare type GetVehicleTypesForMakeResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetVehicleTypesForMakeResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetVehicleTypesForMake.d.ts.map