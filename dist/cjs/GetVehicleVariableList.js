'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2e798510.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

/**
 * @module api/actions/GetVehicleVariableList
 * @category Actions
 * @description GetVehicleVariableList NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleVariableList](module-api_actions_GetVehicleVariableList.GetVehicleVariableList.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleVariableListResponse](#GetVehicleVariableListResponse)
 * > - Type: [GetVehicleVariableListResults](#GetVehicleVariableListResults)
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
class GetVehicleVariableList extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of all the Vehicle related variables that are in the vPIC dataset.
     * - Information on the name, description and the type of the variable is provided.
     *
     * @async
     * @returns {(Promise<GetVehicleVariableListResponse>)} Api Response object.
     */
    GetVehicleVariableList() {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleVariableList';
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetVehicleVariableList = GetVehicleVariableList;
