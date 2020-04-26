'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-8710883e.js');
require('cross-fetch');

/**
 * @module api/actions/DecodeVinValuesExtended
 * @category Actions
 * @description DecodeVinValuesExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinValuesExtended](module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinValuesExtendedResponse](#DecodeVinValuesExtendedResponse)
 * > - Type: [DecodeVinValuesExtendedResults](#DecodeVinValuesExtendedResults)
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
class DecodeVinValuesExtended extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This is exactly like the DecodeVinValues (flat format Results) method but provides additional information
     * on variables related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - The Results will be made available in a flat file format of a single object containing
     *   'key<string>: value<string>' results.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @reje
     * @return {(Promise<DecodeVinValuesExtendedResponse>)} Api Response object.
     */
    DecodeVinValuesExtended(vin, params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVinValuesExtended';
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
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.DecodeVinValuesExtended = DecodeVinValuesExtended;
//# sourceMappingURL=DecodeVinValuesExtended.js.map
