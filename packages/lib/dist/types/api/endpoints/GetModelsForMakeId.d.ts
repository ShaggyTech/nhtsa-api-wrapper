import type { NhtsaResponse } from '../../types';
/**
 * `GetModelsForMakeId` returns the Models in the vPIC dataset for a specified Make whose ID is
 * equal to the `makeID` in the vPIC Dataset.
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
 * You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
 * One of the objects in the `Results` array will contain both `Variable: "Make"` and
 * `VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
 * endpoint.
 * - `DecodeVin`
 * - `DecodeVinExtended`
 *
 * @param {(string|number)} makeId - Make ID to search
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
export declare const GetModelsForMakeId: (makeId: string | number, doFetch?: boolean) => Promise<NhtsaResponse<GetModelsForMakeIdResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeId endpoint
 *
 * @alias GetModelsForMakeIdResults
 */
export declare type GetModelsForMakeIdResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
//# sourceMappingURL=GetModelsForMakeId.d.ts.map