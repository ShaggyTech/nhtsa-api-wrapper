'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isValidVin = require('./isValidVin-547fbc43.js');
require('cross-fetch');
var Fetch = require('./Fetch-55f9a4b7.js');

/**
 * @module api/actions/GetMakesForVehicleType
 * @category Actions
 * @description GetMakesForVehicleType NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForVehicleType](module-api_actions_GetMakesForVehicleType.GetMakesForVehicleType.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForVehicleTypeResponse](#GetMakesForVehicleTypeResponse)
 * > - Type: [GetMakesForVehicleTypeResults](#GetMakesForVehicleTypeResults)
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
class GetMakesForVehicleType extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Makes in the vPIC dataset for a specified vehicle type (`typeName`),
     * whose name is LIKE the vehicle type name in vPIC Dataset.
     * - Vehicle `typeName` can be a partial name, or a full name for more specificity
     *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     * @param {string} typeName - A partial or full vehicle type name.
     * @returns {(Promise<GetMakesForVehicleTypeResponse | Error>)} Api Response object.
     */
    GetMakesForVehicleType(typeName) {
        return isValidVin.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetMakesForVehicleType';
            /* Runtime typechecking */
            const typeofTypeName = Fetch.getTypeof(typeName);
            if (typeofTypeName !== 'string') {
                return Promise.reject(new Error(`${action}, "typeName" argument is required and must be of type string, got: ` +
                    `<${typeofTypeName}> ${typeName}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${typeName}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetMakesForVehicleType = GetMakesForVehicleType;
//# sourceMappingURL=GetMakesForVehicleType.js.map
