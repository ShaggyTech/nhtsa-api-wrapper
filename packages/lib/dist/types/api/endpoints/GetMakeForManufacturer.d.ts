import type { NhtsaResponse } from '../../types';
/**
 * `GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
 * that is requested. Multiple results are returned in case of multiple matches.
 *
 * `manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
 * "honda", "HONDA OF CANADA MFG., INC.", etc.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
 *   provided name. It accepts a partial manufacturer name as an input.
 *
 * @async
 * @param {(string|number)} manufacturer - Manufacturer Name or ID
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults>>)} - Api Response object
 */
export declare const GetMakeForManufacturer: (manufacturer: string | number) => Promise<NhtsaResponse<GetMakeForManufacturerResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetMakeForManufacturer endpoint
 *
 * @alias GetMakeForManufacturerResults
 */
export declare type GetMakeForManufacturerResults = {
    Make_ID: number;
    Make_Name: string;
    Mfr_Name: string;
};
//# sourceMappingURL=GetMakeForManufacturer.d.ts.map