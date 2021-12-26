'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-672e2a53.js');
require('stream');
require('http');
require('url');
require('punycode');
require('https');
require('zlib');

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
     * - `manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number
     *   (e.g., "Merc", "Mercedes Benz", 987, etc.).
     * - `vehicleType` can be a string or number (e.g., "car", 1)
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name.
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.vehicleType] - Optional Vehicle Type search parameter.
     * @returns {(Promise<GetWMIsForManufacturerResponse>)} Api Response object.
     */
    GetWMIsForManufacturer(manufacturer, params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetWMIsForManufacturer';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            const typeofVehicleType = Fetch.getTypeof(params === null || params === void 0 ? void 0 : params.vehicleType);
            if ((params === null || params === void 0 ? void 0 : params.vehicleType) &&
                typeofVehicleType !== 'string' &&
                typeofVehicleType !== 'number') {
                return Promise.reject(new Error(`${action}, "vehicleType" argument must be of type string or number, got: ` +
                    `<${typeofVehicleType}> ${params.vehicleType}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
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
