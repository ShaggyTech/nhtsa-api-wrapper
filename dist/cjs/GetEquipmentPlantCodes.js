'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Fetch = require('./Fetch-2e798510.js');
require('stream');
require('http');
require('url');
require('https');
require('zlib');

/**
 * @module api/actions/GetEquipmentPlantCodes
 * @category Actions
 * @description GetEquipmentPlantCodes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetEquipmentPlantCodes](module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html)
 * >
 * > **Types**
 * > - Type: [GetEquipmentPlantCodesResponse](#GetEquipmentPlantCodesResponse)
 * > - Type: [GetEquipmentPlantCodesResults](#GetEquipmentPlantCodesResults)
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
class GetEquipmentPlantCodes extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * Returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
     *
     * `params.year`:
     *  - Only years >= 2016 are supported
     *
     * `params.equipmentType`:
     *  - 1 (Tires)
     *  - 3 (Brake Hoses)
     *  - 13 (Glazing)
     *  - 16 (Retread)
     *
     * `params.reportType`:
     *  - 'New' (The Equipment Plant Code was assigned during the selected year).
     *  - 'Updated' (The Equipment Plant data was modified during the selected year).
     *  - 'Closed' (The Equipment Plant is no longer Active).
     *  - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed)).
     *
     * @async
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
     * @param {number} params.equipmentType - Number equal to 1, 3, 13, or 16.
     * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All'.
     * @returns {(Promise<GetEquipmentPlantCodesResponse>)} Api Response object.
     */
    GetEquipmentPlantCodes(params) {
        return Fetch.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetEquipmentPlantCodes';
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
            const typeofEquipmentType = Fetch.getTypeof(params.equipmentType);
            if (typeofEquipmentType !== 'number') {
                return Promise.reject(new Error(`${action}, "params.equipmentType" argument is required and must be of type number, got: ` +
                    `<${typeofEquipmentType}> ${params.equipmentType}`));
            }
            const typeofReportType = Fetch.getTypeof(params.reportType);
            if (typeofReportType !== 'string') {
                return Promise.reject(new Error(`${action}, "params.reportType" argument is required and must be of type string, got: ` +
                    `<${typeofReportType}> ${params.reportType}`));
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

exports.GetEquipmentPlantCodes = GetEquipmentPlantCodes;
