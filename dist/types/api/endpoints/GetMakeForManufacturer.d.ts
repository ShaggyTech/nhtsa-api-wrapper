import type { NhtsaResponse } from '../../types';
/**
 * GetMakeForManufacturer returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
 *   (it accepts a partial manufacturer name as an input)
 * - `manufacturer` name can be a partial name, or a full name for more specificity
 *   (e.g., "988", "honda", "HONDA OF CANADA MFG., INC.", etc.)
 * - Multiple results are returned in case of multiple matches
 *
 * @async
 * @param {(number|string)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults>>)} - Api Response object
 */
export declare const GetMakeForManufacturer: (manufacturer: number | string) => Promise<NhtsaResponse<GetMakeForManufacturerResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetMakeForManufacturer endpoint
 *
 * @alias GetMakeForManufacturerResults
 */
export declare type GetMakeForManufacturerResults = {
    Make_ID: number;
    Make_Name: string;
    Mfr_Name: string;
};
