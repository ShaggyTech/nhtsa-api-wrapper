import type { NhtsaResponse, RequireAtLeastOne } from '../../types';
/**
 * GetModelsForMakeYear returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *   - `params.make` is required. It can be a partial, or a full name for more specificity
 *     (e.g., "Harley", "Harley Davidson", etc.)
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 *
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {string} params.make - Make name to search
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */
export declare const GetModelsForMakeYear: (params: {
    make: string;
} & RequireAtLeastOne<{
    modelYear?: number | string;
    vehicleType?: string;
}, 'modelYear' | 'vehicleType'>) => Promise<NhtsaResponse<GetModelsForMakeYearResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeYear endpoint
 *
 * @alias GetModelsForMakeYearResults
 */
export declare type GetModelsForMakeYearResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
//# sourceMappingURL=GetModelsForMakeYear.d.ts.map