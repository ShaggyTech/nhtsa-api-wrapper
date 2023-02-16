import type { NhtsaResponse } from '../../types';
/**
 * `DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.
 *
 * `WMI` may provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
 * representing VIN positions 1-3 & 12-14.
 * - Examples: "JTD" "1T9131"
 *
 * A list of WMI codes can be found
 * [here](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)),
 * but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
 * be available in vPIC data sets.
 *
 * @param {string} WMI - World Manufacturer Identifier
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeWMIResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
export declare const DecodeWMI: (WMI: string, doFetch?: boolean) => Promise<NhtsaResponse<DecodeWMIResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of DecodeWMI endpoint
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