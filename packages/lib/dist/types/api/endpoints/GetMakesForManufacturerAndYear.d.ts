import type { NhtsaResponse } from '../../types';
/**
 * GetMakesForManufacturerAndYear returns all the Makes in the vPIC dataset for a specified manufacturer,
 * and whose Year From and Year To range cover the specified year.
 *
 * - `manufacturer` name can be a partial name, or a full name for more specificity
 *   (e.g., "988", "honda", "HONDA OF CANADA MFG., INC.", etc.).
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name.
 *   (it accepts a partial manufacturer name as an input).
 * - Multiple results are returned in case of multiple matches.

 *
 * @async
 * @param {(string|number)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(string|number)} params.year - Model year of the vehicle - Number, >= 2016
 * @returns {(Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>)} - Api Response object
 */
export declare const GetMakesForManufacturerAndYear: (manufacturer: string, params: {
    year: string | number;
}) => Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetMakesForManufacturerAndYear endpoint
 *
 * @alias GetMakesForManufacturerAndYearResults
 */
export declare type GetMakesForManufacturerAndYearResults = {
    MakeId: number;
    MakeName: string;
    MfrId: number;
    MfrName: string;
};
//# sourceMappingURL=GetMakesForManufacturerAndYear.d.ts.map