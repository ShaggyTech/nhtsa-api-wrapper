import type { NhtsaResponse, AtLeastOne } from '../../types';
/**
 * GetModelsForMakeIdYear returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *
 * `params.makeId` is required + a minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA docs)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:
 * - `GetAllMakes` endpoint
 * - `GetMakeForManufacturer` endpoint
 * - `GetModelsForMake` endpoint
 * - `GetModelsForMakeYear` endpoint
 *
 * You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:
 * - `DecodeVinValues`
 * - `DecodeVinValuesBatch`
 *
 * You can get `makeID`s via `ValueId` key in Results objects of the following endpoints:
 * - `DecodeVin`
 * - `DecodeVinExtended`
 * - NOTE: one of the objects in the Results array will have key/values of `Variable: "Make"` and `VariableId: 26`,
 *   and the `ValueId` key in that object is the `makeID` for use in this endpoint.
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(string|number)} params.makeId - Make ID to search
 * @param {(string|number)} [params.modelYear] - A number representing the model year to search (greater than 1995)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>)} Api Response object
 */
export declare const GetModelsForMakeIdYear: (params: {
    makeId: string | number;
} & AtLeastOne<{
    modelYear?: string | number;
    vehicleType?: string;
}>) => Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>;
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