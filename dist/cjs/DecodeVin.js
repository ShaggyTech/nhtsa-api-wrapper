'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-8710883e.js');
require('cross-fetch');

/**
 * @module api/actions/DecodeVin
 * @category Actions
 * @description DecodeVin NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVin](module-api_actions_DecodeVin.DecodeVin.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinResponse](#DecodeVinResponse)
 * > - Type: [DecodeVinResults](#DecodeVinResults)
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
class DecodeVin extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * The DecodeVin API Action will decode the VIN and the decoded output will be made available in the format of Key-value pairs.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This API also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinResponse>)} - Api Response object.
     */
    DecodeVin(vin, params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVin';
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

exports.DecodeVin = DecodeVin;
//# sourceMappingURL=DecodeVin.js.map
