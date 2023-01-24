import type { NhtsaResponse } from '../../types';
/**
 * GetAllManufacturers provides a list of all the Manufacturers available in vPIC Dataset.
 *
 * - `params.manufacturerType` allows the user to filter the list based on manufacturer type
 *   ('Incomplete Vehicles', 'Completed Vehicle Manufacturer', 'Incomplete Vehicle Manufacturer',
 *   'Intermediate Manufacturer', 'Final-Stage Manufacturer', 'Alterer', or any partial match of those strings)
 * - You can get a list of all manufacturer types via `GetVehicleVariableValuesList` endpoint
 *
 * Results are provided in pages of 100 items.
 * - Provide `params.page` to specify (n)th page of results
 *
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {string} [params.manufacturerType] - See method description
 * @param {(number|string)} [params.page] - Specify the page number (results returned 100 at a time)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults>>)} - Api Response object
 */
export declare const GetAllManufacturers: (params?: {
    manufacturerType?: string;
    page?: number | string;
}) => Promise<NhtsaResponse<GetAllManufacturersResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetAllManufacturers endpoint
 *
 * @alias GetAllManufacturersResults
 */
export declare type GetAllManufacturersResults = {
    Country: string;
    Mfr_CommonName: string;
    Mfr_ID: number;
    Mfr_Name: string;
    VehicleTypes: Array<{
        IsPrimary?: boolean;
        Name?: string;
    }>;
};
//# sourceMappingURL=GetAllManufacturers.d.ts.map