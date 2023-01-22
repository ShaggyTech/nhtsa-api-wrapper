import type { NhtsaResponse } from '../../types';
/**
 * GetWMIsForManufacturer provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
 * Only WMIs registered in vPICList are displayed
 * - Both `manufacturer` and `params.vehicleType` are optional but at least one must be provided.
 * - If you don't want to provide `manufacturer` and want to only provide `params.vehicleType` - you must provide `undefined` as the first argument.
 *
 * `manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number (e.g., "Merc", "Mercedes Benz", 987, etc.)
 * - If `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name (it accepts a partial manufacturer name as an input).
 *   Multiple results are returned in case of multiple matches
 *
 * `params.vehicleType` can be a string or number (e.g., "car", 1)
 * - If `params.vehicleType` is a number - method will do exact match on VehicleType's Id
 * - If `params.vehicleType` is a string - it will look for VehicleType whose name is LIKE the provided name (it accepts a partial VehicleType name as an input).
 *   Multiple results are returned in case of multiple matches.
 *
 * @async
 * @param {(number|string)} [manufacturer] - Manufacturer Name, must be included if vehicleType is not provided
 * @param {Object} [params] - Query Search Parameters to append to the URL.
 * @param {(number|string)} [params.vehicleType] - Optional Vehicle Type search parameter, must be included if manufacturer is not provided
 * @returns {(Promise<NhtsaResponse<GetWMIsForManufacturerResults>>)} - Api Response object
 */
export declare const GetWMIsForManufacturer: (manufacturer?: number | string, params?: {
    vehicleType?: number | string;
}) => Promise<NhtsaResponse<GetWMIsForManufacturerResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetWMIsForManufacturer endpoint
 *
 * @alias GetWMIsForManufacturerResults
 */
export declare type GetWMIsForManufacturerResults = {
    Country: string;
    CreatedOn: string;
    DateAvailableToPublic: string;
    Id: number;
    Name: string;
    UpdatedOn: string;
    VehicleType: string;
    WMI: string;
};
