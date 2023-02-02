import type { NhtsaResponse } from '../../types';
/**
 * `GetParts` provides a list of ORGs with letter date in the given range of the dates and with
 * specified Type (`params.type`) of ORG.
 *
 * - Up to 1000 results will be returned at a time.
 * - Get the next page by incrementing the `params.page` query parameter.
 *
 * All query `params` are optional.
 *
 * `params.type`:
 * - (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
 *   or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)
 * `params.fromDate`:
 * - (optional) ORG's Letter Date should be on or after this date
 * `params.manufacturer`:
 * - (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
 * - if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
 *   name
 * - it accepts a partial manufacturer name as an input
 * - multiple results are returned in case of multiple matches
 * - manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
 *   "HONDA", "HONDA OF CANADA MFG., INC.", etc.
 * `params.page`:
 *  - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc
 *
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {(string|number)} [params.type] - Specified type of ORG to search
 * @param {string} [params.fromDate] - Start date of search query
 * @param {string} [params.toDate] - End date of search query
 * @param {(string|number)} [params.page] - Which page number of results to request (100 results per page)
 * @returns {(Promise<NhtsaResponse<GetPartsResults>>)} - Api Response object
 */
export declare const GetParts: (params?: {
    type?: string | number;
    fromDate?: string;
    toDate?: string;
    page?: string | number;
}) => Promise<NhtsaResponse<GetPartsResults>>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetParts endpoint
 *
 * @alias GetPartsResults
 */
export declare type GetPartsResults = {
    CoverLetterURL: string;
    LetterDate: string;
    ManufacturerId: number;
    ManufacturerName: string;
    ModelYearFrom: number | null;
    ModelYearTo: number | null;
    Name: string;
    Type: string;
    URL: string;
};
//# sourceMappingURL=GetParts.d.ts.map