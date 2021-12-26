'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-672e2a53.js');
require('stream');
require('http');
require('url');
require('punycode');
require('https');
require('zlib');

/**
 * @module api/actions/DecodeVinExtended
 * @category Actions
 * @description DecodeVinExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinExtended](module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinExtendedResponse](#DecodeVinExtendedResponse)
 * > - Type: [DecodeVinExtendedResults](#DecodeVinExtendedResults)
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
class DecodeVinExtended extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This is exactly like the DecodeVin method but provides additional information on variables
     * related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - This will decode the VIN and the decoded output will be made available
     *   in the format of Key-value pairs.
     * - In the returned 'Results` object:
     *   - The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value.
     *   - In case of text variables, the ValueID is not applicable.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinExtendedResponse>)} - Api Response object.
     */
    DecodeVinExtended(vin, params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVinExtended';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofVin = Fetch.getTypeof(vin);
            if (typeofVin !== 'string') {
                return Promise.reject(new Error(`${action}, "vin" argument is required and must be of type string, got: ` +
                    `<${typeofVin}> ${vin}`));
            }
            const typeofModelYear = Fetch.getTypeof(params === null || params === void 0 ? void 0 : params.modelYear);
            if ((params === null || params === void 0 ? void 0 : params.modelYear) && typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" argument is required and must be of type string or number, got: ` +
                    `<${typeofModelYear}> ${params.modelYear}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.DecodeVinExtended = DecodeVinExtended;
//# sourceMappingURL=DecodeVinExtended.js.map
