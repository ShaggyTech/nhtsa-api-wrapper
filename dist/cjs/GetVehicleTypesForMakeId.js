'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2e798510.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

/**
 * @module api/actions/GetVehicleTypesForMakeId
 * @category Actions
 * @description GetVehicleTypesForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMakeId](module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeIdResponse](#GetVehicleTypesForMakeIdResponse)
 * > - Type: [GetVehicleTypesForMakeIdResults](#GetVehicleTypesForMakeIdResults)
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
class GetVehicleTypesForMakeId extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make and
     * whose ID equals the make ID in the vPIC Dataset.
     *
     * @async
     * @param {number} makeID - Vehicle make ID.
     * @returns {(Promise<GetVehicleTypesForMakeIdResponse>)} Api Response object.
     */
    GetVehicleTypesForMakeId(makeID) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleTypesForMakeId';
            /* Runtime typechecking */
            const typeofMakeId = Fetch.getTypeof(makeID);
            if (typeofMakeId !== 'number') {
                return Promise.reject(new Error(`${action}, "makeId" argument is required and must be of type number, got: ` +
                    `<${typeofMakeId}> ${makeID}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetVehicleTypesForMakeId = GetVehicleTypesForMakeId;
