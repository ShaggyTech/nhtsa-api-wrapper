'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-d7540537.js');
require('cross-fetch');

/**
 * @module api/actions/GetCanadianVehicleSpecifications
 * @category Actions
 * @description GetCanadianVehicleSpecifications NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetCanadianVehicleSpecifications](module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html)
 * >
 * > **Types**
 * > - Type: [GetCanadianVehicleSpecificationsResponse](#GetCanadianVehicleSpecificationsResponse)
 * > - Type: [GetCanadianVehicleSpecificationsResults](#GetCanadianVehicleSpecificationsResults)
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
class GetCanadianVehicleSpecifications extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * The Canadian Vehicle Specifications (CVS) consists of a database of original vehicle dimensions,
     * used primarily in collision investigation and reconstruction, combined with a search engine.
     *
     * The database is compiled annually by the Collision Investigation and Research Division of Transport Canada.
     * Visit official [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
     * page for more details.
     *
     * This API action will return a 404 html error if any of the query parameters in params
     * are missing from the query string. This is the only API action with this behaviour. Therefore,
     * parameters are inserted into the query string as empty strings if not provided by the user.
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle (required) - Number, >= 1971.
     * @param {string} [params.make] - Vehicle's make, like "Honda", "Toyota", etc...
     * @param {string} [params.model] - Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
     * @param {string} [params.units] - "Metric" (default), or "US" for United States customary units.
     * @returns {(Promise<GetCanadianVehicleSpecificationsResponse>)} Api Response object.
     */
    GetCanadianVehicleSpecifications(params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetCanadianVehicleSpecifications';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofYear = Fetch.getTypeof(params.year);
            if (typeofYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.year" argument is required and must be of type number, got: ` +
                    `<${typeofYear}> ${params.year}`));
            }
            const typeofMake = Fetch.getTypeof(params.make);
            if (params.make && typeofMake !== 'string') {
                return Promise.reject(new Error(`${action}, "params.make" argument must be of type string, got: ` +
                    `<${typeofMake}> ${params.make}`));
            }
            const typeofModel = Fetch.getTypeof(params.model);
            if (params.model && typeofModel !== 'string') {
                return Promise.reject(new Error(`${action}, "params.model" argument must be of type string, got: ` +
                    `<${typeofModel}> ${params.model}`));
            }
            const typeofUnits = Fetch.getTypeof(params.units);
            if (params.units && typeofUnits !== 'string') {
                return Promise.reject(new Error(`${action}, "params.units" argument must be of type string, got: ` +
                    `<${typeofUnits}> ${params.units}`));
            }
            /* Set default query parameters to empty strings if not provided by the user */
            const make = params.make || '';
            const model = params.model || '';
            const units = params.units || '';
            const params_ = {
                year: params.year,
                make,
                model,
                units,
            };
            /*
             * Build the 'default' query string to be appended to the URL.
             *
             * Additionally, sets the allowEmptyStringValues option (2nd argument) to true because
             * this API action will return a 404 error if any of the query parameters are missing from the query string.
             * This is the only API action with this behaviour ("year" is the only param the user must provide).
             */
            const queryString = yield this.buildQueryString(params_, true).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then((response) => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.GetCanadianVehicleSpecifications = GetCanadianVehicleSpecifications;
//# sourceMappingURL=GetCanadianVehicleSpecifications.js.map
