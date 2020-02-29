/**
 * @module api/actions/GetModelsForMakeYear
 * @category Actions
 * @description GetModelsForMakeYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeYear](module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeYearResponse](#GetModelsForMakeYearResponse)
 * > - Type: [GetModelsForMakeYearResults](#GetModelsForMakeYearResults)
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
export declare class GetModelsForMakeYear extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year
     * and Make whose name is LIKE the Make in the vPIC Dataset.
     *   - `params.make` is required. It can be a partial, or a full name for more specificity
     *     (e.g., "Harley", "Harley Davidson", etc.).
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     *
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {string} params.make - Make name to search.
     * @param {number} [params.modelYear] - A number representing the model year to search (greater than 1995).
     * @param {string} [params.vehicleType] - String representing the vehicle type to search.
     *
     * @returns {(Promise<GetModelsForMakeYearResponse | Error>)} Api Response object.
     */
    GetModelsForMakeYear(params: {
        make: string;
        modelYear?: number;
        vehicleType?: string;
    }): Promise<GetModelsForMakeYearResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeYearResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMakeYear
 * @alias GetModelsForMakeYearResults
 */
export declare type GetModelsForMakeYearResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
/**
 * Type representing the complete response returned by the GetModelsForMakeYear API Action.
 *
 * @memberof module:api/actions/GetModelsForMakeYear
 * @alias GetModelsForMakeYearResponse
 */
export declare type GetModelsForMakeYearResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetModelsForMakeYearResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetModelsForMakeYear.d.ts.map