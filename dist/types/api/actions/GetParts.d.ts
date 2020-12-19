/**
 * @module api/actions/GetParts
 * @category Actions
 * @description GetParts NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetParts](module-api_actions_GetParts.GetParts.html)
 * >
 * > **Types**
 * > - Type: [GetPartsResponse](#GetPartsResponse)
 * > - Type: [GetPartsResults](#GetPartsResults)
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
export declare class GetParts extends Fetch {
    constructor(userConfig?: FetchConfig);
    /**
     * This provides a list of ORGs with letter date in the given range of the dates
     * and with specified Type (`params.type`) of ORG.
     * - Up to 1000 results will be returned at a time.
     * - Get the next page by incrementing the `params.page` query parameter.
     * - All query `params` are optional.
     *
     * @async
     * @param {object} [params] - Query Search Parameters to append to the URL.
     * @param {number} [params.type] - Specified type of ORG to search.
     * @param {string} [params.fromDate] - Start date of search query.
     * @param {string} [params.toDate] - End date of search query.
     * @param {number} [params.page] - Which page number of results to request (100 results per page).
     * @returns {(Promise<GetPartsResponse>)} Api Response object.
     */
    GetParts(params?: {
        type?: number;
        fromDate?: string;
        toDate?: string;
        page?: number;
    }): Promise<GetPartsResponse>;
}
/**
 * Type representing the structure of objects found in the '{@link GetPartsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetParts
 * @alias GetPartsResults
 */
export declare type GetPartsResults = {
    CoverLetterURL: string;
    LetterDate: string;
    ManufacturerId: number;
    ManufacturerName: string;
    ModelYearFrom: string;
    ModelYearTo: string;
    Name: string;
    Type: string;
    URL: string;
};
/**
 * Type representing the complete response returned by the GetParts API Action.
 *
 * @memberof module:api/actions/GetParts
 * @alias GetPartsResponse
 */
export declare type GetPartsResponse = {
    /** A count of the items returned in the Results array. */
    Count: number;
    /** A message describing the Results array. */
    Message: string;
    /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
    SearchCriteria: string;
    /** The search results returned by the NHSTA API request. */
    Results: Array<GetPartsResults>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=GetParts.d.ts.map