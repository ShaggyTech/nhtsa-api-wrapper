import type { NhtsaResponse } from '../../types';
/**
 * DecodeWMI provides information on the World Manufacturer Identifier for a specific WMI code.
 * See: [WMI Codes](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI))
 * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
 *   representing VIN positions 1-3 & 12-14. Examples: "JTD" "1T9131"
 *
 * @async
 * @param {string} WMI - World Manufacturer Identifier
 * @returns {(Promise<NhtsaResponse<DecodeWMIResults>>)} - Api Response object
 */
export declare const DecodeWMI: (WMI: string) => Promise<NhtsaResponse<DecodeWMIResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeWMI endpoint
 *
 * @alias DecodeWMIResults
 */
export declare type DecodeWMIResults = {
    CommonName: string;
    CreatedOn: string;
    DateAvailableToPublic: string;
    Make: string;
    ManufacturerName: string;
    ParentCompanyName: string;
    URL: string;
    UpdatedOn: string | null;
    VehicleType: string;
};
//# sourceMappingURL=DecodeWMI.d.ts.map