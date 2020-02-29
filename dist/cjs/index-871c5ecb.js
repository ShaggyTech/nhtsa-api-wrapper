'use strict';

var tslib_es6 = require('./tslib.es6-4e63b739.js');
var Fetch = require('./Fetch-4ce8326c.js');

/**
 * @module api/actions/DecodeVin
 * @category Actions
 * @description DecodeVin NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVin](module-api_actions_DecodeVin.DecodeVin.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinResponse](#DecodeVinResponse)
 * > - Type: [DecodeVinResults](#DecodeVinResults)
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
class DecodeVin extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * The DecodeVin API Action will decode the VIN and the decoded output will be made available in the format of Key-value pairs.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This API also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinResponse | Error>)} - Api Response object.
     */
    DecodeVin(vin, params) {
        var _a, _b;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVin';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofVin = Fetch.getTypeof(vin);
            if (typeofVin !== 'string') {
                return Promise.reject(new Error(`${action}, "vin" argument is required and must be of type string, got: ` +
                    `<${typeofVin}> ${vin}`));
            }
            const typeofModelYear = Fetch.getTypeof((_a = params) === null || _a === void 0 ? void 0 : _a.modelYear);
            if (((_b = params) === null || _b === void 0 ? void 0 : _b.modelYear) && typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" argument is required and must be of type string or number, got: ` +
                    `<${typeofModelYear}> ${params.modelYear}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/DecodeVinExtended
 * @category Actions
 * @description DecodeVinExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinExtended](module-api_actions_DecodeVinExtended.DecodeVinExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinExtendedResponse](#DecodeVinExtendedResponse)
 * > - Type: [DecodeVinExtendedResults](#DecodeVinExtendedResults)
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
class DecodeVinExtended extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This is exactly like the DecodeVin method but provides additional information on variables
     * related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - This will decode the VIN and the decoded output will be made available
     *   in the format of Key-value pairs.
     * - In the returned 'Results` object:
     *   - The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value.
     *   - In case of text variables, the ValueID is not applicable.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *   - The 9th digit is not necessary.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinExtendedResponse | Error>)} - Api Response object.
     */
    DecodeVinExtended(vin, params) {
        var _a, _b;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVinExtended';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofVin = Fetch.getTypeof(vin);
            if (typeofVin !== 'string') {
                return Promise.reject(new Error(`${action}, "vin" argument is required and must be of type string, got: ` +
                    `<${typeofVin}> ${vin}`));
            }
            const typeofModelYear = Fetch.getTypeof((_a = params) === null || _a === void 0 ? void 0 : _a.modelYear);
            if (((_b = params) === null || _b === void 0 ? void 0 : _b.modelYear) && typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" argument is required and must be of type string or number, got: ` +
                    `<${typeofModelYear}> ${params.modelYear}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/DecodeVinValues
 * @category Actions
 * @description DecodeVinValues NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinValues](module-api_actions_DecodeVinValues.DecodeVinValues.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinValuesResponse](#DecodeVinValuesResponse)
 * > - Type: [DecodeVinValuesResults](#DecodeVinValuesResults)
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
class DecodeVinValues extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * The DecodeVinValues API Action will decode the VIN with the Results returned in a _flat file_ format.
     * - The Results will be made available in a flat file format of a single object containing
     *   'key<string>: value<string>' results.
     * - Providing params.modelYear allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinValuesResponse | Error>)} Api Response object.
     */
    DecodeVinValues(vin, params) {
        var _a, _b;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVinValues';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofVin = Fetch.getTypeof(vin);
            if (typeofVin !== 'string') {
                return Promise.reject(new Error(`${action}, "vin" argument is required and must be of type string, got: ` +
                    `<${typeofVin}> ${vin}`));
            }
            const typeofModelYear = Fetch.getTypeof((_a = params) === null || _a === void 0 ? void 0 : _a.modelYear);
            if (((_b = params) === null || _b === void 0 ? void 0 : _b.modelYear) &&
                typeofModelYear !== 'string' &&
                typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" argument is required and must be of type string or number, got: ` +
                    `<${typeofModelYear}> ${params.modelYear}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/DecodeVinValuesExtended
 * @category Actions
 * @description DecodeVinValuesExtended NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVinValuesExtended](module-api_actions_DecodeVinValuesExtended.DecodeVinValuesExtended.html)
 * >
 * > **Types**
 * > - Type: [DecodeVinValuesExtendedResponse](#DecodeVinValuesExtendedResponse)
 * > - Type: [DecodeVinValuesExtendedResults](#DecodeVinValuesExtendedResults)
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
class DecodeVinValuesExtended extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This is exactly like the DecodeVinValues (flat format Results) method but provides additional information
     * on variables related to other NHTSA programs like
     * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
     * - The Results will be made available in a flat file format of a single object containing
     *   'key<string>: value<string>' results.
     * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
     *   or older (pre-1980), model year ranges.
     *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
     * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
     *   - In this case, the VIN will be decoded partially with the available characters.
     *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
     *
     * @async
     * @param {string} vin - Vehicle Identification Number (full or partial).
     * @param {object} [params={}] - Query Search Parameters to append to the URL.
     * @param {string|number} [params.modelYear] - Optional Model Year search parameter.
     * @returns {(Promise<DecodeVinValuesExtendedResponse | Error>)} Api Response object.
     */
    DecodeVinValuesExtended(vin, params) {
        var _a, _b;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeVinValuesExtended';
            /* Runtime typechecking */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofVin = Fetch.getTypeof(vin);
            if (typeofVin !== 'string') {
                return Promise.reject(new Error(`${action}, "vin" argument is required and must be of type string, got: ` +
                    `<${typeofVin}> ${vin}`));
            }
            const typeofModelYear = Fetch.getTypeof((_a = params) === null || _a === void 0 ? void 0 : _a.modelYear);
            if (((_b = params) === null || _b === void 0 ? void 0 : _b.modelYear) && typeofModelYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.modelYear" argument is required and must be of type string or number, got: ` +
                    `<${typeofModelYear}> ${params.modelYear}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${vin}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/DecodeWMI
 * @category Actions
 * @description DecodeWMI NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeWMI](module-api_actions_DecodeWMI.DecodeWMI.html)
 * >
 * > **Types**
 * > - Type: [DecodeWMIResponse](#DecodeWMIResponse)
 * > - Type: [DecodeWMIResults](#DecodeWMIResults)
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
class DecodeWMI extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides information on the World Manufacturer Identifier for a specific WMI code.
     * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
     *   representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
     *
     * @async
     * @param {string} WMI - World Manufacturer Identifier.
     * @returns {(Promise<DecodeWMIResults | Error>)} Api Response object.
     */
    DecodeWMI(WMI) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'DecodeWMI';
            /* Runtime typechecking */
            const typeofWMI = Fetch.getTypeof(WMI);
            if (typeofWMI !== 'string') {
                return Promise.reject(new Error(`${action}, "WMI" argument is required and must be of type string, got: ` +
                    `<${typeofWMI}> ${WMI}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${WMI}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/GetAllMakes
 * @category Actions
 * @description GetAllMakes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetAllMakes](module-api_actions_GetAllMakes.GetAllMakes.html)
 * >
 * > **Types**
 * > - Type: [GetAllMakesResponse](#GetAllMakesResponse)
 * > - Type: [GetAllMakesResults](#GetAllMakesResults)
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
class GetAllMakes extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of all the Makes available in the vPIC Dataset.
     *
     * @async
     * @returns {(Promise<GetAllMakesResponse | Error>)} Api Response object.
     */
    GetAllMakes() {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetAllMakes';
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
     */
    GetAllManufacturers(params = {}) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
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
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetCanadianVehicleSpecificationsResponse | Error>)} Api Response object.
     */
    GetCanadianVehicleSpecifications(params) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
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
                units
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
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetEquipmentPlantCodesResponse | Error>)} Api Response object.
     */
    GetEquipmentPlantCodes(params) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
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
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/GetMakeForManufacturer
 * @category Actions
 * @description GetMakeForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakeForManufacturer](module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetMakeForManufacturerResponse](#GetMakeForManufacturerResponse)
 * > - Type: [GetMakeForManufacturerResults](#GetMakeForManufacturerResults)
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
class GetMakeForManufacturer extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - `manufacturer` name can be a partial name, or a full name for more specificity
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @returns {(Promise<GetMakeForManufacturer | Error>)} Api Response object.
     */
    GetMakeForManufacturer(manufacturer) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetMakeForManufacturer';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/GetMakesForManufacturerAndYear
 * @category Actions
 * @description GetMakesForManufacturerAndYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForManufacturerAndYear](module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForManufacturerAndYearResponse](#GetMakesForManufacturerAndYearResponse)
 * > - Type: [GetMakesForManufacturerAndYearResults](#GetMakesForManufacturerAndYearResults)
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
class GetMakesForManufacturerAndYear extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns all the Makes in the vPIC dataset for a specified manufacturer,
     * and whose Year From and Year To range cover the specified year.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     * - Manufacturer can be idenfitied by Id, a partial name, or a full name
     *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
     *
     * @returns {(Promise<GetMakesForManufacturerAndYearResponse | Error>)} Api Response object.
     */
    GetMakesForManufacturerAndYear(manufacturer, params) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetMakesForManufacturerAndYear';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument is required and must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            const typeofYear = Fetch.getTypeof(params.year);
            if (typeofYear !== 'number') {
                return Promise.reject(new Error(`${action}, "params.year" argument is required and must be of type number, got: ` +
                    `<${typeofYear}> ${params.year}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
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

/**
 * @module api/actions/GetManufacturerDetails
 * @category Actions
 * @description GetManufacturerDetails NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetManufacturerDetails](module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html)
 * >
 * > **Types**
 * > - Type: [GetManufacturerDetailsResponse](#GetManufacturerDetailsResponse)
 * > - Type: [GetManufacturerDetailsResults](#GetManufacturerDetailsResults)
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
class GetManufacturerDetails extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides the details for a specific manufacturer that is requested.
     * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
     * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name,
     *   (it accepts a partial manufacturer name as an input).
     * - Multiple results are returned in case of multiple matches.
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
     * @returns {(Promise<GetManufacturerDetailsResponse | Error>)} Api Response object.
     */
    GetManufacturerDetails(manufacturer) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetManufacturerDetails';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/GetModelsForMake
 * @category Actions
 * @description GetModelsForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMake](module-api_actions_GetModelsForMake.GetModelsForMake.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeResponse](#GetModelsForMakeResponse)
 * > - Type: [GetModelsForMakeResults](#GetModelsForMakeResults)
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
class GetModelsForMake extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified `makeName`
     * whose Name is LIKE the Make in vPIC Dataset.
     * - `makeName` can be a partial, or a full for more specificity
     *   (e.g., "Harley", "Harley Davidson", etc.).
     *
     * @async
     * @param {string} makeName - Vehicle make name.
     * @returns {(Promise<GetModelsForMakeResponse | Error>)} Api Response object.
     */
    GetModelsForMake(makeName) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMake';
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
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

/**
 * @module api/actions/GetModelsForMakeId
 * @category Actions
 * @description GetModelsForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeId](module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdResponse](#GetModelsForMakeIdResponse)
 * > - Type: [GetModelsForMakeIdResults](#GetModelsForMakeIdResults)
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
class GetModelsForMakeId extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified Make
     * whose Id is equal to the `makeId` in the vPIC Dataset.
     *
     * @async
     * @param {number} makeID - Vehicle make ID (number).
     * @returns {(Promise<GetModelsForMakeIdResponse | Error>)} Api Response object.
     */
    GetModelsForMakeId(makeID) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMakeId';
            /* Runtime typechecking */
            const typeofMakeId = Fetch.getTypeof(makeID);
            if (typeofMakeId !== 'number') {
                return Promise.reject(new Error(`${action}, "makeId" argument is required and must be of type number, got: ` +
                    `<${typeofMakeId}> ${makeID}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString({}).catch((err) => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch((err) => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetModelsForMakeIdYearResponse | Error>)} Api Response object.
     */
    GetModelsForMakeIdYear(params) {
        var _a, _b, _c;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMakeIdYear';
            const makeId = (_a = params) === null || _a === void 0 ? void 0 : _a.makeId;
            const modelYear = (_b = params) === null || _b === void 0 ? void 0 : _b.modelYear;
            const vehicleType = (_c = params) === null || _c === void 0 ? void 0 : _c.vehicleType;
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

/**
 * @module api/actions/GetModelsForMakeYear
 * @category Actions
 * @description GetModelsForMakeYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeYear](module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeYearResponse](#GetModelsForMakeYearResponse)
 * > - Type: [GetModelsForMakeYearResults](#GetModelsForMakeYearResults)
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
class GetModelsForMakeYear extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This returns the Models in the vPIC dataset for a specified Model Year
     * and Make whose name is LIKE the Make in the vPIC Dataset.
     *   - `params.make` is required. It can be a partial, or a full name for more specificity
     *     (e.g., "Harley", "Harley Davidson", etc.).
     *
     * A minimum of one of the following are required (or a combination of both):
     *   - `params.modelYear` is a number (greater than 1995)
     *   - `params.vehicleType` can be a partial name, or a full name for more specificity
     *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
     *
     * @async
     *
     * @param {object} params - Query Search Parameters to append to the URL.
     * @param {string} params.make - Make name to search.
     * @param {number} [params.modelYear] - A number representing the model year to search (greater than 1995).
     * @param {string} [params.vehicleType] - String representing the vehicle type to search.
     *
     * @returns {(Promise<GetModelsForMakeYearResponse | Error>)} Api Response object.
     */
    GetModelsForMakeYear(params) {
        var _a, _b, _c;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetModelsForMakeYear';
            const make = (_a = params) === null || _a === void 0 ? void 0 : _a.make;
            const modelYear = (_b = params) === null || _b === void 0 ? void 0 : _b.modelYear;
            const vehicleType = (_c = params) === null || _c === void 0 ? void 0 : _c.vehicleType;
            /* Valid params object */
            const typeofParams = Fetch.getTypeof(params);
            if (typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: ` +
                    `<${typeofParams}> ${params}`));
            }
            /* Required make param of type string */
            const typeofMake = Fetch.getTypeof(make);
            if (typeofMake !== 'string') {
                return Promise.reject(new Error(`${action}, "params.make" argument is required and must be of type string, got: ` +
                    `<${typeofMake}> ${make}`));
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
            let actionUrl = `${action}/make/${params.make}/`;
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

/**
 * @module api/actions/GetParts
 * @category Actions
 * @description GetParts NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetParts](module-api_actions_GetParts.GetParts.html)
 * >
 * > **Types**
 * > - Type: [GetPartsResponse](#GetPartsResponse)
 * > - Type: [GetPartsResults](#GetPartsResults)
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
class GetParts extends Fetch.Fetch {
    constructor(userConfig) {
        super(userConfig);
    }
    /**
     * This provides a list of ORGs with letter date in the given range of the dates
     * and with specified Type (`params.type`) of ORG.
     * - Up to 1000 results will be returned at a time.
     * - Get the next page by incrementing the `params.page` query parameter.
     * - All query `params` are optional.
     *
     * @async
     * @param {object} [params] - Query Search Parameters to append to the URL.
     * @param {number} [params.type] - Specified type of ORG to search.
     * @param {string} [params.fromDate] - Start date of search query.
     * @param {string} [params.toDate] - End date of search query.
     * @param {number} [params.page] - Which page number of results to request (100 results per page).
     * @returns {(Promise<GetPartsResponse | Error>)} Api Response object.
     */
    GetParts(params) {
        var _a, _b, _c, _d;
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetParts';
            const type = (_a = params) === null || _a === void 0 ? void 0 : _a.type;
            const fromDate = (_b = params) === null || _b === void 0 ? void 0 : _b.fromDate;
            const toDate = (_c = params) === null || _c === void 0 ? void 0 : _c.toDate;
            const page = (_d = params) === null || _d === void 0 ? void 0 : _d.page;
            /* Valid params object */
            const typeofParams = Fetch.getTypeof(params);
            if (params && typeofParams !== 'object') {
                return Promise.reject(new Error(`${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`));
            }
            /* valid params.type of type number */
            const typeofType = Fetch.getTypeof(type);
            if (type && typeofType !== 'number') {
                return Promise.reject(new Error(`${action}, "params.type" argument must be of type number, got: <${typeofType}> ${type}`));
            }
            /* valid params.fromDate of type string */
            const typeofFromDate = Fetch.getTypeof(fromDate);
            if (fromDate && typeofFromDate !== 'string') {
                return Promise.reject(new Error(`${action}, "params.fromDate" argument must be of type string, got: <${typeofFromDate}> ${fromDate}`));
            }
            /* valid params.toDate of type number */
            const typeofToDate = Fetch.getTypeof(toDate);
            if (toDate && typeofToDate !== 'string') {
                return Promise.reject(new Error(`${action}, "params.toDate" argument must be of type string, got: <${typeofToDate}> ${toDate}`));
            }
            /* valid params.page of type number */
            const typeofPage = Fetch.getTypeof(page);
            if (page && typeofPage !== 'number') {
                return Promise.reject(new Error(`${action}, "params.page" argument must be of type number, got: <${typeofPage}> ${page}`));
            }
            /* Build the query string to be appended to the URL*/
            const queryString = yield this.buildQueryString(params).catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetVehicleTypesForMakeResponse | Error>)} Api Response object.
     */
    GetVehicleTypesForMake(makeName) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleTypesForMake';
            /* Runtime typechecking */
            const typeofMakeName = Fetch.getTypeof(makeName);
            if (typeofMakeName !== 'string') {
                return Promise.reject(new Error(`${action}, "makeName" argument is required and must be of type string, got: ` +
                    `<${typeofMakeName}> ${makeName}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetVehicleTypesForMakeIdResponse | Error>)} Api Response object.
     */
    GetVehicleTypesForMakeId(makeID) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleTypesForMakeId';
            /* Runtime typechecking */
            const typeofMakeId = Fetch.getTypeof(makeID);
            if (typeofMakeId !== 'number') {
                return Promise.reject(new Error(`${action}, "makeId" argument is required and must be of type number, got: ` +
                    `<${typeofMakeId}> ${makeID}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetVehicleVariableListResponse | Error>)} Api Response object.
     */
    GetVehicleVariableList() {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetVehicleVariableList';
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * @returns {(Promise<GetVehicleVariableValuesListResponse | Error>)} Api Response object.
     */
    GetVehicleVariableValuesList(variableValue) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
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
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${variableValue}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

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
     * - `manufacturer` can be a partial name, or a full name for more specificity
     *   (e.g., "Merc", "Mercedes Benz", etc.).
     *
     * @async
     * @param {string|number} manufacturer - Manufacturer Name.
     * @returns {(Promise<GetWMIsForManufacturerResponse | Error>)} Api Response object.
     */
    GetWMIsForManufacturer(manufacturer) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            const action = 'GetWMIsForManufacturer';
            /* Runtime typechecking */
            const typeofManufacturer = Fetch.getTypeof(manufacturer);
            if (typeofManufacturer !== 'string') {
                return Promise.reject(new Error(`${action}, "manufacturer" argument is required and must be of type string, got: ` +
                    `<${typeofManufacturer}> ${manufacturer}`));
            }
            /* Build the 'default' query string to be appended to the URL*/
            const queryString = yield this.buildQueryString().catch(err => Promise.reject(new Error(`${action}, Error building query string: ${err}`)));
            /* Build the final request URL*/
            const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;
            /* Return the result */
            return yield this.get(url)
                .then(response => response)
                .catch(err => Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`)));
        });
    }
}

exports.DecodeVin = DecodeVin;
exports.DecodeVinExtended = DecodeVinExtended;
exports.DecodeVinValues = DecodeVinValues;
exports.DecodeVinValuesExtended = DecodeVinValuesExtended;
exports.DecodeWMI = DecodeWMI;
exports.GetAllMakes = GetAllMakes;
exports.GetAllManufacturers = GetAllManufacturers;
exports.GetCanadianVehicleSpecifications = GetCanadianVehicleSpecifications;
exports.GetEquipmentPlantCodes = GetEquipmentPlantCodes;
exports.GetMakeForManufacturer = GetMakeForManufacturer;
exports.GetMakesForManufacturerAndYear = GetMakesForManufacturerAndYear;
exports.GetMakesForVehicleType = GetMakesForVehicleType;
exports.GetManufacturerDetails = GetManufacturerDetails;
exports.GetModelsForMake = GetModelsForMake;
exports.GetModelsForMakeId = GetModelsForMakeId;
exports.GetModelsForMakeIdYear = GetModelsForMakeIdYear;
exports.GetModelsForMakeYear = GetModelsForMakeYear;
exports.GetParts = GetParts;
exports.GetVehicleTypesForMake = GetVehicleTypesForMake;
exports.GetVehicleTypesForMakeId = GetVehicleTypesForMakeId;
exports.GetVehicleVariableList = GetVehicleVariableList;
exports.GetVehicleVariableValuesList = GetVehicleVariableValuesList;
exports.GetWMIsForManufacturer = GetWMIsForManufacturer;
//# sourceMappingURL=index-871c5ecb.js.map
