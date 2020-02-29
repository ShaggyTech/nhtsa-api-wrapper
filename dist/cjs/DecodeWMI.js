'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-4e63b739.js');
require('cross-fetch');
var Fetch = require('./Fetch-4ce8326c.js');

/**
 * @module api/actions/DecodeWMI
 * @category Actions
 * @description DecodeWMI NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeWMI](module-api_actions_DecodeWMI.DecodeWMI.html)
 * >
 * > **Types**
 * > - Type: [DecodeWMIResponse](#DecodeWMIResponse)
 * > - Type: [DecodeWMIResults](#DecodeWMIResults)
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
class DecodeWMI extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides information on the World Manufacturer Identifier for a specific WMI code.
     * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
     *   representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
     *
     * @async
     * @param {string} WMI - World Manufacturer Identifier.
     * @returns {(Promise<DecodeWMIResults | Error>)} Api Response object.
     */
    DecodeWMI(WMI) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeWMI';
            /* Runtime typechecking */
            const typeofWMI = Fetch.getTypeof(WMI);
            if (typeofWMI !== 'string') {
                return Promise.reject(new Error(`${action}, "WMI" argument is required and must be of type string, got: ` +
                    `<${typeofWMI}> ${WMI}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${WMI}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.DecodeWMI = DecodeWMI;
//# sourceMappingURL=DecodeWMI.js.map
