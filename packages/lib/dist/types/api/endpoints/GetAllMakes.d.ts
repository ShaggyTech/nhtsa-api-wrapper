import type { NhtsaResponse } from '../../types';
/**
 * `GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
 * Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
 * an individual vehicle Make.
 *
 * - FYI there are over 10,000 registered makes in the database!
 *
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetAllMakesResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
export declare const GetAllMakes: (doFetch?: boolean) => Promise<NhtsaResponse<GetAllMakesResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetAllMakes endpoint
 *
 * @alias GetAllMakesResults
 */
export declare type GetAllMakesResults = {
    Make_ID: number;
    Make_Name: string;
};
//# sourceMappingURL=GetAllMakes.d.ts.map