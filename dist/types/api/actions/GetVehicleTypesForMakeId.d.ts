import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetVehicleTypesForMakeId
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetVehicleTypesForMakeId extends Fetch {
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make whose ID equals the make ID in vPIC Dataset.
     *
     * @async
     * @memberof GetVehicleTypesForMakeId
     *
     * @param {number} makeID Vehicle make ID
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetVehicleTypesForMakeId(makeID: number): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetVehicleTypesForMakeId.d.ts.map