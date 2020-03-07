/**
 * @module api/actions/GetModelsForMakeIdYear
 * @category Actions
 * @description GetModelsForMakeIdYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeIdYear](module-api_actions_GetModelsForMakeIdYear.GetModelsForMakeIdYear.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdYearResponse](#GetModelsForMakeIdYearResponse)
 * > - Type: [GetModelsForMakeIdYearResults](#GetModelsForMakeIdYearResults)
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
export declare class GetModelsForMakeIdYear extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year
     * and Make whose name is LIKE the Make in the vPIC Dataset.
     *   - `params.makeId` is a number and is a required query parameter.
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.makeId - Make ID to search.
     * @param {number} [params.modelYear] - A number representing the model year to search (greater than 1995).
     * @param {string} [params.vehicleType] - String representing the vehicle type to search.
     * @returns {(Promise<GetModelsForMakeIdYearResponse | Error>)} Api Response object.
     */
    GetModelsForMakeIdYear(params: {
        makeId: number;
        modelYear?: number;
        vehicleType?: string;
    }): Promise<GetModelsForMakeIdYearResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeIdYearResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMakeIdYear
 * @alias GetModelsForMakeIdYearResults
 */
export declare type GetModelsForMakeIdYearResults = {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
};
/**
 * Type representing the complete response returned by the GetModelsForMakeIdYear API Action.
 *
 * @memberof module:api/actions/GetModelsForMakeIdYear
 * @alias GetModelsForMakeIdYearResponse
 */
export declare type GetModelsForMakeIdYearResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetModelsForMakeIdYearResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetModelsForMakeIdYear.d.ts.map