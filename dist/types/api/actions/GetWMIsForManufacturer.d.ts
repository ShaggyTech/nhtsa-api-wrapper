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
import { Fetch, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export declare class GetWMIsForManufacturer extends Fetch {
    /**
     * Provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
     * - Only WMIs registered in vPICList are displayed.
     * - `manufacturer` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name.
     * @returns {(Promise<GetWMIsForManufacturerResponse | Error>)} Api Response object.
     */
    GetWMIsForManufacturer(manufacturer: string): Promise<GetWMIsForManufacturerResponse | Error>;
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