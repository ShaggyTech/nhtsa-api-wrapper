'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-d7540537.js');
require('cross-fetch');

/**
 * @module api/actions/GetWMIsForManufacturer
 * @category Actions
 * @description GetWMIsForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetWMIsForManufacturer](module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetWMIsForManufacturerResponse](#GetWMIsForManufacturerResponse)
 * > - Type: [GetWMIsForManufacturerResults](#GetWMIsForManufacturerResults)
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
class GetWMIsForManufacturer extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * Provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
     * - Only WMIs registered in vPICList are displayed.
     * - `manufacturer` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name.
     * @returns {(Promise<GetWMIsForManufacturerResponse>)} Api Response object.
     */
    GetWMIsForManufacturer(manufacturer) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetWMIsForManufacturer';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetWMIsForManufacturer = GetWMIsForManufacturer;
//# sourceMappingURL=GetWMIsForManufacturer.js.map
