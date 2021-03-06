/**
 * @module api/actions/GetWMIsForManufacturer
 * @category Actions
 * @description GetWMIsForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetWMIsForManufacturer](module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetWMIsForManufacturerResponse](#GetWMIsForManufacturerResponse)
 * > - Type: [GetWMIsForManufacturerResults](#GetWMIsForManufacturerResults)
 *
 */
import { Fetch, FetchConfig, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export declare class GetWMIsForManufacturer extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * Provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
     * - Only WMIs registered in vPICList are displayed.
     * - `manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number
     *   (e.g., "Merc", "Mercedes Benz", 987, etc.).
     * - `vehicleType` can be a string or number (e.g., "car", 1)
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name.
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.vehicleType] - Optional Vehicle Type search parameter.
     * @returns {(Promise<GetWMIsForManufacturerResponse>)} Api Response object.
     */
    GetWMIsForManufacturer(manufacturer: string | number, params?: {
        vehicleType?: string | number;
    }): Promise<GetWMIsForManufacturerResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetWMIsForManufacturerResponse}.Results' array.
 *
 * @memberof module:api/actions/GetWMIsForManufacturer
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
/**
 * Type representing the complete response returned by the GetWMIsForManufacturer API Action.
 *
 * @memberof module:api/actions/GetWMIsForManufacturer
 * @alias GetWMIsForManufacturerResponse
 */
export declare type GetWMIsForManufacturerResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetWMIsForManufacturerResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetWMIsForManufacturer.d.ts.map