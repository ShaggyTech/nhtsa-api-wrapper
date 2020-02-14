import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetMakesForVehicleType
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetMakesForVehicleType extends Fetch {
    /**
     * This returns all the Makes in the vPIC dataset for a specified vehicle type,
     * whose name is LIKE the vehicle type name in vPIC Dataset.
     * - Vehicle `typeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     * @memberof GetMakesForVehicleType
     *
     * @param {string} typeName A partial or full vehicle type name
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetMakesForVehicleType(typeName: string): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetMakesForVehicleType.d.ts.map