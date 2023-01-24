import type { NhtsaResponse, RequireAtLeastOne } from '../../types';
/**
 * This returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *
 * `params.makeId` is a number and is a required query parameter
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * You can get `makeId`s by:
 * - using `DecodeVinValues` endpoint, via `MakeID` in the Results
 * - using `DecodeVin` endpoint, via `ValueId` in the object containing `Variable: "Make"`
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} params.makeId - Make ID to search
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>)} Api Response object
 */
export declare const GetModelsForMakeIdYear: (params: {
    makeId: number | string;
} & RequireAtLeastOne<{
    modelYear?: number | string;
    vehicleType?: string;
}, 'modelYear' | 'vehicleType'>) => Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeIdYear endpoint
 *
 * @alias GetModelsForMakeIdYearResults
 */
export declare type GetModelsForMakeIdYearResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
//# sourceMappingURL=GetModelsForMakeIdYear.d.ts.map