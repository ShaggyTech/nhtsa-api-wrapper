'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-8710883e.js');
require('cross-fetch');

/**
 * @module api/actions/DecodeVINValuesBatch
 * @category Actions
 * @description DecodeVINValuesBatch NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVINValuesBatch](module-api_actions_DecodeVINValuesBatch.DecodeVINValuesBatch.html)
 * >
 * > **Types**
 * > - Type: [DecodeVINValuesBatchResponse](#DecodeVINValuesBatchResponse)
 * > - Type: [DecodeVINValuesBatchResults](#DecodeVINValuesBatchResults)
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
class DecodeVINValuesBatch extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This decodes a batch of VINs that are submitted in a standardized format in a string
     * and returns multiple decodes in a flat format.
     *
     * The `inputString` parameter should be in the following format:
     * - `vin , modelYear ; vin , modelYear ; vin , modelYear ...`
     *
     * "modelYear" is optional, the output for each VIN decode is in the same format as produced by the "Decode VIN (flat format)" method.
     *
     * @async
     * @param {string} inputString - A string of Vehicle Identification Numbers (full or partial) following the format listed in the description.
     * @returns {(Promise<DecodeVINValuesBatchResponse>)} - Api Response object.
     */
    DecodeVINValuesBatch(inputString) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVINValuesBatch';
            /* Runtime typechecking */
            const typeofInputString = Fetch.getTypeof(inputString);
            if (typeofInputString !== 'string') {
                return Promise.reject(new Error(`${action}, "inputString" argument is required and must be of type string, got: ` +
                    `<${typeofInputString}> ${inputString}`));
            }
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/`;
            const body = encodeURI(`DATA=${inputString}&format=json`);
            /* Return the result */
            return yield this.get(url, {
                method: 'POST',
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
                body
            })
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.DecodeVINValuesBatch = DecodeVINValuesBatch;
//# sourceMappingURL=DecodeVINValuesBatch.js.map
