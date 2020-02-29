'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_es6 = require('./tslib.es6-4e63b739.js');
require('cross-fetch');
var Fetch = require('./Fetch-4ce8326c.js');

/**
 * @module api/actions/GetMakesForManufacturerAndYear
 * @category Actions
 * @description GetMakesForManufacturerAndYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForManufacturerAndYear](module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForManufacturerAndYearResponse](#GetMakesForManufacturerAndYearResponse)
 * > - Type: [GetMakesForManufacturerAndYearResults](#GetMakesForManufacturerAndYearResults)
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
class GetMakesForManufacturerAndYear extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer,
     * and whose Year From and Year To range cover the specified year.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     * - Manufacturer can be idenfitied by Id, a partial name, or a full name
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
     *
     * @returns {(Promise<GetMakesForManufacturerAndYearResponse | Error>)} Api Response object.
     */
    GetMakesForManufacturerAndYear(manufacturer, params) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetMakesForManufacturerAndYear';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument is required and must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofYear = Fetch.getTypeof(params.year);
            if (typeofYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.year" argument is required and must be of type number, got: ` +
                    `<${typeofYear}> ${params.year}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetMakesForManufacturerAndYear = GetMakesForManufacturerAndYear;
//# sourceMappingURL=GetMakesForManufacturerAndYear.js.map
