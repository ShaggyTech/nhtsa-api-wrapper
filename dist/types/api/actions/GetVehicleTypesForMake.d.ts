import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetVehicleTypesForMake
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetVehicleTypesForMake extends Fetch {
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make, whose name is LIKE the make name in vPIC Dataset.
     * - `makeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @memberof GetVehicleTypesForMake
     *
     * @param {string} makeName Name of the vehicle make to search
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetVehicleTypesForMake(makeName: string): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetVehicleTypesForMake.d.ts.map