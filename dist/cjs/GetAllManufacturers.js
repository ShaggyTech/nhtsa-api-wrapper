'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2e798510.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

/**
 * @module api/actions/GetAllManufacturers
 * @category Actions
 * @description GetAllManufacturers NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetAllManufacturers](module-api_actions_GetAllManufacturers.GetAllManufacturers.html)
 * >
 * > **Types**
 * > - Type: [GetAllManufacturersResponse](#GetAllManufacturersResponse)
 * > - Type: [GetAllManufacturersResults](#GetAllManufacturersResults)
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
class GetAllManufacturers extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of all the Manufacturers available in vPIC Dataset.
     * - `params.manufacturerType` allows the user to filter the list based on manufacturer type,
     *   ('Incomplete Vehicles', 'Completed Vehicle Manufacturer', 'Incomplete Vehicle Manufacturer',
     *   'Intermediate Manufacturer', 'Final-Stage Manufacturer', 'Alterer', or any partial match of those strings).
     * - You can get a list of all manufacturer types with the following API Action:
     *   `GetVehicleVariableValuesList('manufacturer type')`
     * - Results are provided in pages of 100 items.
     * - Provide a number value for `params.page` to specify 1st (default), 2nd, 3rd, Nth, etc page.
     *
     * @async
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string} [params.manufacturerType] - See method description.
     * @param {number} [params.page] - Specify the page number (results returned 100 at a time).
     * @returns {(Promise<module:api.ApiResponse>)} Api Response object.
     */
    GetAllManufacturers(params = {}) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetAllManufacturers';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofManufacturerType = Fetch.getTypeof(params.manufacturerType);
            if (params.manufacturerType && typeofManufacturerType !== 'string') {
                return Promise.reject(new Error(`${action}, "params.manufacturerType" argument must be of type string, got: ` +
                    `<${typeofManufacturerType}> ${params.manufacturerType}`));
            }
            const typeofPage = Fetch.getTypeof(params.page);
            if (params.page && typeofPage !== 'number') {
                return Promise.reject(new Error(`${action}, "params.page" argument must be of type number, got: ` +
                    `<${typeofPage}> ${params.page}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetAllManufacturers = GetAllManufacturers;
