'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-8710883e.js');
require('cross-fetch');

/**
 * @module api/actions/GetModelsForMakeIdYear
 * @category Actions
 * @description GetModelsForMakeIdYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeIdYear](module-api_actions_GetModelsForMakeIdYear.GetModelsForMakeIdYear.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdYearResponse](#GetModelsForMakeIdYearResponse)
 * > - Type: [GetModelsForMakeIdYearResults](#GetModelsForMakeIdYearResults)
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
class GetModelsForMakeIdYear extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year
     * and Make whose name is LIKE the Make in the vPIC Dataset.
     *   - `params.makeId` is a number and is a required query parameter.
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.makeId - Make ID to search.
     * @param {number} [params.modelYear] - A number representing the model year to search (greater than 1995).
     * @param {string} [params.vehicleType] - String representing the vehicle type to search.
     * @returns {(Promise<GetModelsForMakeIdYearResponse>)} Api Response object.
     */
    GetModelsForMakeIdYear(params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMakeIdYear';
            const makeId = params === null || params === void 0 ? void 0 : params.makeId;
            const modelYear = params === null || params === void 0 ? void 0 : params.modelYear;
            const vehicleType = params === null || params === void 0 ? void 0 : params.vehicleType;
            /* Valid params object */
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            /* Required makeId param of type number */
            const typeofMakeId = Fetch.getTypeof(makeId);
            if (typeofMakeId !== 'number') {
                return Promise.reject(new Error(`${action}, "params.makeId" argument is required and must be of type number, got: ` +
                    `<${typeofMakeId}> ${makeId}`));
            }
            /* At least one of modelYear or vehicleType params is required */
            if (!modelYear && !vehicleType) {
                return Promise.reject(new Error(`${action}, either one of "params.modelYear" or "params.vehicleType" is required, got: ` +
                    `${modelYear} | ${vehicleType}`));
            }
            /* valid modelYear param of type number */
            const typeofModelYear = Fetch.getTypeof(modelYear);
            if (modelYear && typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" must be of type number, got: ` +
                    `<${typeofModelYear}> ${modelYear}`));
            }
            /* valid vehicleType param of type string */
            const typeofVehicleType = Fetch.getTypeof(vehicleType);
            if (vehicleType && typeofVehicleType !== 'string') {
                return Promise.reject(new Error(`${action}, "params.vehicleType" must be of type string, got: ` +
                    `<${typeofVehicleType}> ${vehicleType}`));
            }
            /* Beginning of the the actionUrl */
            let actionUrl = `${action}/makeId/${makeId}/`;
            /* Append params.modelYear and params.vehicleType to the actionUrl, at least one is required by the API */
            if (modelYear && vehicleType) {
                actionUrl += `modelYear/${modelYear}/vehicleType/${vehicleType}`;
            }
            else if (modelYear) {
                actionUrl += `modelYear/${modelYear}`;
            }
            else {
                actionUrl += `vehicleType/${vehicleType}`;
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${actionUrl}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetModelsForMakeIdYear = GetModelsForMakeIdYear;
//# sourceMappingURL=GetModelsForMakeIdYear.js.map
