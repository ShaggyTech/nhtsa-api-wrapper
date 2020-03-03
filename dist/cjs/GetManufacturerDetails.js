'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-4e63b739.js');
require('cross-fetch');
var Fetch = require('./Fetch-23ce7e7d.js');

/**
 * @module api/actions/GetManufacturerDetails
 * @category Actions
 * @description GetManufacturerDetails NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetManufacturerDetails](module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html)
 * >
 * > **Types**
 * > - Type: [GetManufacturerDetailsResponse](#GetManufacturerDetailsResponse)
 * > - Type: [GetManufacturerDetailsResults](#GetManufacturerDetailsResults)
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
class GetManufacturerDetails extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides the details for a specific manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name,
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @returns {(Promise<GetManufacturerDetailsResponse | Error>)} Api Response object.
     */
    GetManufacturerDetails(manufacturer) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetManufacturerDetails';
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

exports.GetManufacturerDetails = GetManufacturerDetails;
//# sourceMappingURL=GetManufacturerDetails.js.map
