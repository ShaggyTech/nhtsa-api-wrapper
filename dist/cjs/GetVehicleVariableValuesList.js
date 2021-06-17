'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-57bc7fc7.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

/**
 * @module api/actions/GetVehicleVariableValuesList
 * @category Actions
 * @description GetVehicleVariableValuesList NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleVariableValuesList](module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleVariableValuesListResponse](#GetVehicleVariableValuesListResponse)
 * > - Type: [GetVehicleVariableValuesListResults](#GetVehicleVariableValuesListResults)
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
class GetVehicleVariableValuesList extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
     *
     * This applies to only "Look up" type of variables.
     * - `variableValue` can either be a:
     *   - Variable Name ("battery type" in first example, please use full name, not just part of it),
     *   - or Variable ID (number).
     *
     * @async
     * @param {string|number} variableValue - The variable you want to get a values list of.
     * @returns {(Promise<GetVehicleVariableValuesListResponse>)} Api Response object.
     */
    GetVehicleVariableValuesList(variableValue) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleVariableValuesList';
            /* Runtime typechecking */
            const typeofVariableValue = Fetch.getTypeof(variableValue);
            if (typeofVariableValue !== 'string' && typeofVariableValue !== 'number') {
                return Promise.reject(new Error(`${action}, "variableValue" argument is required and must be of type string or number, got: ` +
                    `<${typeofVariableValue}> ${variableValue}`));
            }
            /* Encode to a valid URI string (space chars, etc.) if variableValue is a string*/
            if (typeofVariableValue === 'string') {
                variableValue = encodeURI(variableValue);
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${variableValue}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetVehicleVariableValuesList = GetVehicleVariableValuesList;
