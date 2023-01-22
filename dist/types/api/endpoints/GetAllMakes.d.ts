import type { NhtsaResponse } from '../../types';
/**
 * GetAllMakes endpoint provides a list of all the Makes available in the vPIC Dataset.
 * - FYI there are over 10,000 registered makes in the database!
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetAllMakesResults>>)} - Api Response object
 */
export declare const GetAllMakes: () => Promise<NhtsaResponse<GetAllMakesResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetAllMakes endpoint
 *
 * @alias GetAllMakesResults
 */
export declare type GetAllMakesResults = {
    Make_ID: number;
    Make_Name: string;
};
