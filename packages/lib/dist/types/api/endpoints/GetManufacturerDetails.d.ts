import type { NhtsaResponse } from '../../types';
/**
 * GetManufacturerDetails provides the details for a specific manufacturer that is requested.
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
 * @returns {(Promise<NhtsaResponse<GetManufacturerDetailsResults>>)} - Api Response object
 */
export declare const GetManufacturerDetails: (manufacturer: number | string) => Promise<NhtsaResponse<GetManufacturerDetailsResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetManufacturerDetails endpoint
 *
 * @alias GetManufacturerDetailsResults
 */
export declare type GetManufacturerDetailsResults = {
    Address: string | null;
    Address2: string | null;
    City: string | null;
    ContactEmail: string | null;
    ContactFax: string | null;
    ContactPhone: string | null;
    Country: string | null;
    DBAs: string | null;
    EquipmentItems: Array<unknown>;
    LastUpdated: string;
    ManufacturerTypes: Array<{
        Name: string;
    }>;
    Mfr_CommonName: string | null;
    Mfr_ID: number | null;
    Mfr_Name: string | null;
    OtherManufacturerDetails: string | null;
    PostalCode: string | null;
    PrimaryProduct: string | null;
    PrincipalFirstName: string | null;
    PrincipalLastName: string | null;
    PrincipalPosition: string | null;
    StateProvince: string | null;
    SubmittedName: string | null;
    SubmittedOn: string;
    SubmittedPosition: string | null;
    VehicleTypes: Array<{
        GVWRFrom: string;
        GVWRTo: string;
        IsPrimary: boolean;
        Name: string;
    }>;
};
//# sourceMappingURL=GetManufacturerDetails.d.ts.map