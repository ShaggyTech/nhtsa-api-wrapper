import type { AtLeastOne, NhtsaResponse } from '../../types';
/**
 * `GetWMIsForManufacturer` provides information on the World Manufacturer Identifier (WMI) for a
 * specified `manufacturer`. Only WMIs registered in vPICList are displayed. Multiple results are
 * returned in case of multiple matches.
 *
 * Both `manufacturer` and `vehicleType` are optional but at least one must be provided.
 *
 * `manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number,
 *  e.g., "Merc", "Mercedes Benz", 987, etc.
 * - If `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided
 *   name (it accepts a partial Manufacturer name as an input)
 *
 * `vehicleType` can be a string or number, e.g., "car", 1, etc.
 * - If `vehicleType` is a number - method will do exact match on VehicleType's Id
 * - If `vehicleType` is a string - it will look for VehicleType whose name is LIKE the provided
 *   name (it accepts a partial VehicleType name as an input).
 *
 * For this endpoint, `manufacturer` is actually part of the path string, not a query param. We
 * include `manufacturer` in params as it's easier to type the function args using the 'AtLeastOne'
 * type if they are placed in the same object (params). This can cause confusion as it's not
 * consistent with other endpoint methods where path string is the first arg, and the query params
 * are the second arg.
 *
 * @param [params] - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} [params.manufacturer] - Manufacturer Name or ID, or WMI ID
 * (required if !vehicleType)
 * @param {(string|number)} [params.vehicleType] - Optional Vehicle Type search parameter
 * (required if !manufacturer)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetWMIsForManufacturerResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export declare const GetWMIsForManufacturer: (params: AtLeastOne<{
    manufacturer?: string | number;
    vehicleType?: string | number;
}>, doFetch?: boolean) => Promise<NhtsaResponse<GetWMIsForManufacturerResults> | string>;
/**
 * Objects found in the NhtsaResponse 'Results' array of GetWMIsForManufacturer endpoint
 *
 * @alias GetWMIsForManufacturerResults
 */
export declare type GetWMIsForManufacturerResults = {
    Country: string | null;
    CreatedOn: string;
    DateAvailableToPublic: string;
    Id: number;
    Name: string;
    UpdatedOn: string;
    VehicleType: string;
    WMI: string;
};
//# sourceMappingURL=GetWMIsForManufacturer.d.ts.map