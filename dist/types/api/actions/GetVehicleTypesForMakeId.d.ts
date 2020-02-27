/**
 * @module api/actions/GetVehicleTypesForMakeId
 * @category Actions
 * @description GetVehicleTypesForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMakeId](module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeIdResponse](#GetVehicleTypesForMakeIdResponse)
 * > - Type: [GetVehicleTypesForMakeIdResults](#GetVehicleTypesForMakeIdResults)
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
export declare class GetVehicleTypesForMakeId extends Fetch {
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make and
     * whose ID equals the make ID in the vPIC Dataset.
     *
     * @async
     * @param {number} makeID - Vehicle make ID.
     * @returns {(Promise<GetVehicleTypesForMakeIdResponse | Error>)} Api Response object.
     */
    GetVehicleTypesForMakeId(makeID: number): Promise<GetVehicleTypesForMakeIdResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetVehicleTypesForMakeIdResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResults
 */
export declare type GetVehicleTypesForMakeIdResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
/**
 * Type representing the complete response returned by the GetVehicleTypesForMakeId API Action.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResponse
 */
export declare type GetVehicleTypesForMakeIdResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetVehicleTypesForMakeIdResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetVehicleTypesForMakeId.d.ts.map