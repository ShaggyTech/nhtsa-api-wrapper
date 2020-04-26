/**
 * @module api/actions/GetCanadianVehicleSpecifications
 * @category Actions
 * @description GetCanadianVehicleSpecifications NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetCanadianVehicleSpecifications](module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html)
 * >
 * > **Types**
 * > - Type: [GetCanadianVehicleSpecificationsResponse](#GetCanadianVehicleSpecificationsResponse)
 * > - Type: [GetCanadianVehicleSpecificationsResults](#GetCanadianVehicleSpecificationsResults)
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
export declare class GetCanadianVehicleSpecifications extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * The Canadian Vehicle Specifications (CVS) consists of a database of original vehicle dimensions,
     * used primarily in collision investigation and reconstruction, combined with a search engine.
     *
     * The database is compiled annually by the Collision Investigation and Research Division of Transport Canada.
     * Visit official [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
     * page for more details.
     *
     * This API action will return a 404 html error if any of the query parameters in params
     * are missing from the query string. This is the only API action with this behaviour. Therefore,
     * parameters are inserted into the query string as empty strings if not provided by the user.
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle (required) - Number, >= 1971.
     * @param {string} [params.make] - Vehicle's make, like "Honda", "Toyota", etc...
     * @param {string} [params.model] - Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
     * @param {string} [params.units] - "Metric" (default), or "US" for United States customary units.
     * @returns {(Promise<GetCanadianVehicleSpecificationsResponse>)} Api Response object.
     */
    GetCanadianVehicleSpecifications(params: {
        year: number;
        make?: string;
        model?: string;
        units?: string;
    }): Promise<GetCanadianVehicleSpecificationsResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetCanadianVehicleSpecificationsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetCanadianVehicleSpecifications
 * @alias GetCanadianVehicleSpecificationsResults
 */
export declare type GetCanadianVehicleSpecificationsResults = {
    Specs: Array<{
        Name: string;
        Value: string;
    }>;
};
/**
 * Type representing the complete response returned by the GetCanadianVehicleSpecifications API Action.
 *
 * @memberof module:api/actions/GetCanadianVehicleSpecifications
 * @alias GetCanadianVehicleSpecificationsResponse
 */
export declare type GetCanadianVehicleSpecificationsResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetCanadianVehicleSpecificationsResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetCanadianVehicleSpecifications.d.ts.map