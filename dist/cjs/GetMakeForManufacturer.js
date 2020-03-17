'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-1cfe3e63.js');
require('cross-fetch');

/**
 * @module api/actions/GetMakeForManufacturer
 * @category Actions
 * @description GetMakeForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakeForManufacturer](module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetMakeForManufacturerResponse](#GetMakeForManufacturerResponse)
 * > - Type: [GetMakeForManufacturerResults](#GetMakeForManufacturerResults)
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
class GetMakeForManufacturer extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - `manufacturer` name can be a partial name, or a full name for more specificity
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @returns {(Promise<GetMakeForManufacturer | Error>)} Api Response object.
     */
    GetMakeForManufacturer(manufacturer) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetMakeForManufacturer';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetMakeForManufacturer = GetMakeForManufacturer;
//# sourceMappingURL=GetMakeForManufacturer.js.map
