'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-57bc7fc7.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

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
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
class GetParts extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
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
    GetParts(params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetParts';
            const type = params === null || params === void 0 ? void 0 : params.type;
            const fromDate = params === null || params === void 0 ? void 0 : params.fromDate;
            const toDate = params === null || params === void 0 ? void 0 : params.toDate;
            const page = params === null || params === void 0 ? void 0 : params.page;
            /* Valid params object */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`));
            }
            /* valid params.type of type number */
            const typeofType = Fetch.getTypeof(type);
            if (type && typeofType !== 'number') {
                return Promise.reject(new Error(`${action}, "params.type" argument must be of type number, got: <${typeofType}> ${type}`));
            }
            /* valid params.fromDate of type string */
            const typeofFromDate = Fetch.getTypeof(fromDate);
            if (fromDate && typeofFromDate !== 'string') {
                return Promise.reject(new Error(`${action}, "params.fromDate" argument must be of type string, got: <${typeofFromDate}> ${fromDate}`));
            }
            /* valid params.toDate of type number */
            const typeofToDate = Fetch.getTypeof(toDate);
            if (toDate && typeofToDate !== 'string') {
                return Promise.reject(new Error(`${action}, "params.toDate" argument must be of type string, got: <${typeofToDate}> ${toDate}`));
            }
            /* valid params.page of type number */
            const typeofPage = Fetch.getTypeof(page);
            if (page && typeofPage !== 'number') {
                return Promise.reject(new Error(`${action}, "params.page" argument must be of type number, got: <${typeofPage}> ${page}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetParts = GetParts;
