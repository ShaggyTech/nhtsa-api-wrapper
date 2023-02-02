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
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {string} [params.manufacturerType] - See endpoint description
 * @param {(string|number)} [params.page] - Specify page number (results returned 100 at a time)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults>>)} - Api Response object
 */
export declare const GetAllManufacturers: (params?: {
    manufacturerType?: string;
    page?: string | number;
}) => Promise<NhtsaResponse<GetAllManufacturersResults>>;
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