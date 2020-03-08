/**
 * @module api/actions/GetManufacturerDetails
 * @category Actions
 * @description GetManufacturerDetails NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetManufacturerDetails](module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html)
 * >
 * > **Types**
 * > - Type: [GetManufacturerDetailsResponse](#GetManufacturerDetailsResponse)
 * > - Type: [GetManufacturerDetailsResults](#GetManufacturerDetailsResults)
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
export declare class GetManufacturerDetails extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This provides the details for a specific manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name,
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @returns {(Promise<GetManufacturerDetailsResponse | Error>)} Api Response object.
     */
    GetManufacturerDetails(manufacturer: string | number): Promise<GetManufacturerDetailsResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetManufacturerDetailsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetManufacturerDetails
 * @alias GetManufacturerDetailsResults
 */
export declare type GetManufacturerDetailsResults = {
    Address: string;
    Address2: string;
    City: string;
    ContactEmail: string;
    ContactFax: string;
    ContactPhone: string;
    Country: string;
    DBAs: string;
    EquipmentItems: Array<object>;
    LastUpdated: string;
    ManufacturerTypes: Array<{
        Name: string;
    }>;
    Mfr_CommonName: string;
    Mfr_ID: number;
    Mfr_Name: string;
    OtherManufacturerDetails: string;
    PostalCode: string;
    PrimaryProduct: string;
    PrincipalFirstName: string;
    PrincipalLastName: string;
    PrincipalPosition: string;
    StateProvince: string;
    SubmittedName: string;
    SubmittedOn: string;
    SubmittedPosition: string;
    VehicleTypes: Array<{
        GVWRFrom: string;
        GVWRTo: string;
        IsPrimary: boolean;
        Name: string;
    }>;
};
/**
 * Type representing the complete response returned by the GetManufacturerDetails API Action.
 *
 * @memberof module:api/actions/GetManufacturerDetails
 * @alias GetManufacturerDetailsResponse
 */
export declare type GetManufacturerDetailsResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetManufacturerDetailsResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetManufacturerDetails.d.ts.map