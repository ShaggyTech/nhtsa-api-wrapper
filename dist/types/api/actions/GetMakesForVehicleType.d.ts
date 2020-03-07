/**
 * @module api/actions/GetMakesForVehicleType
 * @category Actions
 * @description GetMakesForVehicleType NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForVehicleType](module-api_actions_GetMakesForVehicleType.GetMakesForVehicleType.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForVehicleTypeResponse](#GetMakesForVehicleTypeResponse)
 * > - Type: [GetMakesForVehicleTypeResults](#GetMakesForVehicleTypeResults)
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
export declare class GetMakesForVehicleType extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns all the Makes in the vPIC dataset for a specified vehicle type (`typeName`),
     * whose name is LIKE the vehicle type name in vPIC Dataset.
     * - Vehicle `typeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     * @param {string} typeName - A partial or full vehicle type name.
     * @returns {(Promise<GetMakesForVehicleTypeResponse | Error>)} Api Response object.
     */
    GetMakesForVehicleType(typeName: string): Promise<GetMakesForVehicleTypeResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetMakesForVehicleTypeResponse}.Results' array.
 *
 * @memberof module:api/actions/GetMakesForVehicleType
 * @alias GetMakesForVehicleTypeResults
 */
export declare type GetMakesForVehicleTypeResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
/**
 * Type representing the complete response returned by the GetMakesForVehicleType API Action.
 *
 * @memberof module:api/actions/GetMakesForVehicleType
 * @alias GetMakesForVehicleTypeResponse
 */
export declare type GetMakesForVehicleTypeResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetMakesForVehicleTypeResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetMakesForVehicleType.d.ts.map