import type { NhtsaResponse } from '../../types';
/**
 * GetVehicleTypesForMakeId returns the Models in the vPIC dataset for a specified Make
 * whose ID is equal to the `makeID` in the vPIC Dataset.
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
 * @param {(string|number)} makeId - Make ID to search
 * @returns {(Promise<NhtsaResponse<GetVehicleTypesForMakeIdResults>>)} - Api Response object
 */
export declare const GetVehicleTypesForMakeId: (makeId: string | number) => Promise<NhtsaResponse<GetVehicleTypesForMakeIdResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleTypesForMakeId endpoint
 *
 * @alias GetVehicleTypesForMakeIdResults
 */
export declare type GetVehicleTypesForMakeIdResults = {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
};
//# sourceMappingURL=GetVehicleTypesForMakeId.d.ts.map