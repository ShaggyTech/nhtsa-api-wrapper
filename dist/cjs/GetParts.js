'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-4e63b739.js');
require('cross-fetch');
var Fetch = require('./Fetch-4ce8326c.js');

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
     * @returns {(Promise<GetPartsResponse | Error>)} Api Response object.
     */
    GetParts(params) {
        var _a, _b, _c, _d;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetParts';
            const type = (_a = params) === null || _a === void 0 ? void 0 : _a.type;
            const fromDate = (_b = params) === null || _b === void 0 ? void 0 : _b.fromDate;
            const toDate = (_c = params) === null || _c === void 0 ? void 0 : _c.toDate;
            const page = (_d = params) === null || _d === void 0 ? void 0 : _d.page;
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
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetParts = GetParts;
//# sourceMappingURL=GetParts.js.map
