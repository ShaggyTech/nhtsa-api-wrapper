import type { NhtsaResponse } from '../../types';
/**
 * GetModelsForMake returns the Models in the vPIC dataset for a specified `makeName`
 * whose Name is LIKE the Make in vPIC Dataset.
 *
 * - `makeName` can be a partial, or a full for more specificity
 *   (e.g., "Harley", "Harley Davidson", etc.)
 *
 * @async
 * @param {string} makeName - Vehicle make name
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeResults>>)} - Api Response object
 */
export declare const GetModelsForMake: (makeName: string) => Promise<NhtsaResponse<GetModelsForMakeResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMake endpoint
 *
 * @alias GetModelsForMakeResults
 */
export declare type GetModelsForMakeResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
//# sourceMappingURL=GetModelsForMake.d.ts.map