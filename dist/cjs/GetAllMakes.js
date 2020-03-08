'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isValidVin = require('./isValidVin-547fbc43.js');
require('cross-fetch');
var Fetch = require('./Fetch-55f9a4b7.js');

/**
 * @module api/actions/GetAllMakes
 * @category Actions
 * @description GetAllMakes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetAllMakes](module-api_actions_GetAllMakes.GetAllMakes.html)
 * >
 * > **Types**
 * > - Type: [GetAllMakesResponse](#GetAllMakesResponse)
 * > - Type: [GetAllMakesResults](#GetAllMakesResults)
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
class GetAllMakes extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of all the Makes available in the vPIC Dataset.
     *
     * @async
     * @returns {(Promise<GetAllMakesResponse | Error>)} Api Response object.
     */
    GetAllMakes() {
        return isValidVin.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetAllMakes';
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetAllMakes = GetAllMakes;
//# sourceMappingURL=GetAllMakes.js.map
