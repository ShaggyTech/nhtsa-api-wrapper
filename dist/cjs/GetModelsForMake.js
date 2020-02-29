'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-4e63b739.js');
require('cross-fetch');
var Fetch = require('./Fetch-4ce8326c.js');

/**
 * @module api/actions/GetModelsForMake
 * @category Actions
 * @description GetModelsForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMake](module-api_actions_GetModelsForMake.GetModelsForMake.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeResponse](#GetModelsForMakeResponse)
 * > - Type: [GetModelsForMakeResults](#GetModelsForMakeResults)
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
class GetModelsForMake extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified `makeName`
     * whose Name is LIKE the Make in vPIC Dataset.
     * - `makeName` can be a partial, or a full for more specificity
     *   (e.g., "Harley", "Harley Davidson", etc.).
     *
     * @async
     * @param {string} makeName - Vehicle make name.
     * @returns {(Promise<GetModelsForMakeResponse | Error>)} Api Response object.
     */
    GetModelsForMake(makeName) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMake';
            /* Runtime typechecking */
            const typeofMakeName = Fetch.getTypeof(makeName);
            if (typeofMakeName !== 'string') {
                return Promise.reject(new Error(`${action}, "makeName" argument is required and must be of type string, got: ` +
                    `<${typeofMakeName}> ${makeName}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetModelsForMake = GetModelsForMake;
//# sourceMappingURL=GetModelsForMake.js.map
