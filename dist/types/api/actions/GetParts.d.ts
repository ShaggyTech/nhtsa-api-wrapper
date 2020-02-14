import { Fetch } from '../Fetch';
/**
 * @category Actions
 * @class GetParts
 * @extends {module:api/Fetch.Fetch}
 */
export declare class GetParts extends Fetch {
    /**
     * This provides a list of ORGs with letter date in the given range of the dates and with specified `params.type` of ORG.
     * - Up to 1000 results will be returned at a time.
     * - Get the next page by incrementing the `params.page` query parameter.
     * - All query `params` are optional.
     *
     * @async
     * @memberof GetParts
     *
     * @param {object} params Query Search Parameters to append to the URL
     * @param {string|number} [params.type] Specified type of ORG to search
     * @param {string} [params.fromDate] Start date of search query
     * @param {string} [params.toDate] End date of search query
     * @param {string|number} [params.page] Page number of results to request (100 results per page)
     *
     * @returns {(Promise<module:api.ApiResponse | Error>)}
     */
    GetParts(params?: {
        type?: string | number;
        fromDate?: string;
        toDate?: string;
        page?: string | number;
    }): Promise<import('../types').ApiResponse | Error>;
}
//# sourceMappingURL=GetParts.d.ts.map