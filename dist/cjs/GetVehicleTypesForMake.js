'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2f6f3d33.js');
require('cross-fetch');

/**
 * @module api/actions/GetVehicleTypesForMake
 * @category Actions
 * @description GetVehicleTypesForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMake](module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeResponse](#GetVehicleTypesForMakeResponse)
 * > - Type: [GetVehicleTypesForMakeResults](#GetVehicleTypesForMakeResults)
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
class GetVehicleTypesForMake extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Vehicle Types in the vPIC dataset for a specified Make,
     * whose name is LIKE the make name in the vPIC Dataset.
     * - `makeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @param {string} makeName - Name of the vehicle make to search.
     * @returns {(Promise<GetVehicleTypesForMakeResponse>)} Api Response object.
     */
    GetVehicleTypesForMake(makeName) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleTypesForMake';
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
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetVehicleTypesForMake = GetVehicleTypesForMake;
//# sourceMappingURL=GetVehicleTypesForMake.js.map
