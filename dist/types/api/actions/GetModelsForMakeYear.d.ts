import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetModelsForMakeYear
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetModelsForMakeYear extends Fetch {
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year and Make whose name is LIKE the Make in vPIC Dataset.
     *   - `params.make` can be a partial, or a full for more specificity
     *     (e.g., "Harley", "Harley Davidson", etc.)
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
     *
     * @async
     * @memberof GetModelsForMakeYear
     *
     * @param {object} params Query Search Parameters to append to the URL
     * @param {string} params.make Make name to search
     * @param {number} [params.modelYear] A number representing the model year to search (greater than 1995)
     * @param {string} [params.vehicleType] String representing the vehicle type to search
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetModelsForMakeYear(params?: {
        make: string;
        modelYear?: number;
        vehicleType?: string;
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetModelsForMakeYear.d.ts.map