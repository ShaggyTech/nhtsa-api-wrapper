import type { NhtsaResponse } from '../../types';
/**
 * GetModelsForMakeId returns the Models in the vPIC dataset for a specified Make
 * whose ID is equal to the `makeID` in the vPIC Dataset.
 *
 * @async
 * @param {(number|string)} makeId - Vehicle make ID (number)
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdResults>>)} - Api Response object
 */
export declare const GetModelsForMakeId: (makeId: number | string) => Promise<NhtsaResponse<GetModelsForMakeIdResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeId endpoint
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