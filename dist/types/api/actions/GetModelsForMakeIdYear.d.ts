import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetModelsForMakeIdYear
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetModelsForMakeIdYear extends Fetch {
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year and Make whose name is LIKE the Make in vPIC Dataset.
     *   - `params.makeId` is a number and is a required query parameter
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
     *
     * @async
     * @memberof GetModelsForMakeIdYear
     *
     * @param {object} params Query Search Parameters to append to the URL
     * @param {number} params.makeId Make ID to search
     * @param {number} [params.modelYear] A number representing the model year to search (greater than 1995)
     * @param {string} [params.vehicleType] String representing the vehicle type to search
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetModelsForMakeIdYear(params?: {
        makeId: number;
        modelYear?: number;
        vehicleType?: string;
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetModelsForMakeIdYear.d.ts.map