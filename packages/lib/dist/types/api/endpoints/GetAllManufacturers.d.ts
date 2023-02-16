import type { NhtsaResponse } from '../../types';
/**
 * `GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.
 *
 * `params.manufacturerType` is optional but allows the user to filter the list based on
 * manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
 * 'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
 * 'Alterer', or any partial match of those strings.
 *
 * `params.page` is optional and used to specify (n)th page of results. Results are provided in
 * pages of 100 items.
 *
 * @param [params] - Object of Query Search names and values to append to the URL as a query string.
 * - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as
 * the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you
 * don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)`
 * @param {string} [params.manufacturerType] - See endpoint description
 * @param {(string|number)} [params.page] - Specify page number (results returned 100 at a time)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
export declare const GetAllManufacturers: (params?: {
    manufacturerType?: string;
    page?: string | number;
} | boolean, doFetch?: boolean) => Promise<NhtsaResponse<GetAllManufacturersResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetAllManufacturers endpoint
 *
 * @alias GetAllManufacturersResults
 */
export declare type GetAllManufacturersResults = {
    Country: string;
    Mfr_CommonName: string | null;
    Mfr_ID: number;
    Mfr_Name: string;
    VehicleTypes: Array<{
        IsPrimary?: boolean;
        Name?: string;
    }>;
};
//# sourceMappingURL=GetAllManufacturers.d.ts.map