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
 * @param {(string|number)} manufacturer - Manufacturer Name or ID
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export declare const GetMakeForManufacturer: (manufacturer: string | number, doFetch?: boolean) => Promise<NhtsaResponse<GetMakeForManufacturerResults> | string>;
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