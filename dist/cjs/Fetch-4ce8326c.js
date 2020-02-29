'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_es6 = require('./tslib.es6-4e63b739.js');
var fetch = _interopDefault(require('cross-fetch'));

/**
 * @module utils/getTypeof
 * @category Utils
 */
/**
 * Gets type of `value` using `Object.prototype.toString.call(value)`.
 *
 * @param {any} value - Any kind of value (string, object, array, function, etc).
 *
 * @returns {string} - Type of value, normalized to a lowercase string.
 */
function getTypeof(value) {
    const toString = Object.prototype.toString
        .call(value)
        .toLowerCase(); /* ex: => '[object string]' or '[object array], etc. */
    return toString.slice(8, toString.length - 1);
}

/**
 * @module utils/isValidVin
 * @category Utils
 */
/**
 * Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
 * [VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).
 *
 * @param {string} vin - Vehicle Identification Number.
 *
 * @returns {Promise<boolean>} True for a valid VIN, false for an invalid VIN.
 *
 * @example <caption>When loaded from the browser via html script tags</caption>
 * // <script type="text/javascript" src="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper"></script>
 * const isValid = await NHTSA.isValidVin('3VWD07AJ5EM388202').catch(error => error)
 * console.log(isValid) // true
 *
 * @example <caption>When loaded as a module</caption>
 * import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
 * const isValid = await isValidVin('3VWD07AJ5EM388202').catch(error => error)
 * console.log(isValid) // true
 *
 */
function isValidVin(vin) {
    return tslib_es6.__awaiter(this, void 0, void 0, function* () {
        /* A valid VIN must be a string and is always exactly 17 digits */
        if (typeof vin !== 'string' || vin.length != 17) {
            return Promise.resolve(false);
        }
        /* Normalize the vin to all uppercase letters */
        vin = vin.toUpperCase();
        /* split the vin digits into an array */
        const vinArray = vin.split('');
        /* checkDigit will be tested against the checkSum later */
        const checkDigit = vinArray[8];
        /*
         * In a valid VIN, the checkDigit can either be:
         * a number, 0-9 inclusive OR the character 'X'
         */
        if (isNaN(parseInt(checkDigit)) && checkDigit !== 'X') {
            return Promise.resolve(false);
        }
        /*
         * The checkValue must be a digit and 'X' is the only valid alphabetic check value.
         * As per the algorithm, a checkDigit of 'X' is equal to a checkValue of `10` and needs
         * to be converted as such.
         */
        const checkValue = checkDigit === 'X' ? 10 : parseInt(checkDigit);
        /*
         * There will need to be some way to translate vin digits that are alphabetic
         * into their number value in the VIN algorithm transliteration table.
         * Later, during the creation of the checkusm variable, those digits will be
         * multiplied against their corresponding weight (by index) in the weightsArray.
         * This transliteration table is a key part of the VIN validation algorithm.
         */
        const transliterationTable = {
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            J: 1,
            K: 2,
            L: 3,
            M: 4,
            N: 5,
            P: 7,
            R: 9,
            S: 2,
            T: 3,
            U: 4,
            V: 5,
            W: 6,
            X: 7,
            Y: 8,
            Z: 9
        };
        /*
         * Later, during the creation of the 'checksum' variable, these weights will be
         * multilplied by the value of their mirrored index vin digits.
         * The array index of each weight corresponds to the same index of each
         * digit in the 'vin'.
         */
        const weightsArray = [
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            10,
            0,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2
        ];
        /*
         * Maps the vinArray and converts any values (digits) that are alphabetic,
         * into numbers, using the above transliteration table.
         * Then these numbers are multiplied against their corresponding weight
         * in the weights array, matched by index position.
         * All 17 of those digitValues are then added together and divided by 11.
         * The remainder, or % modulo, of that division will be the final 'checksum'.
         */
        const checksum = vinArray
            .map((digit, index) => {
            let digitValue;
            /* Use the transliteration table to convert any Not a Number(NaN) values to numbers */
            isNaN(parseInt(digit))
                ? (digitValue = transliterationTable[digit])
                : (digitValue = parseInt(digit));
            /* Convert the digitValue to a weighted number corresponding to it's position, by index, in the weightsArray. */
            const weight = weightsArray[index];
            /* The final step for each digit is to multiply it by it's corresponding weight */
            return digitValue * weight;
        })
            /* Then get the sum of all digits and divide by 11, the remainder of that operation is the checksum */
            .reduce((acc, currValue) => acc + currValue, 0) % 11;
        /*
         * The checksum is compared against the checkValue we set earlier (the 9th digit of the VIN)
         * As per the algorithm, if they are equal to each other, then the VIN must be valid and
         * we return true, otherwise the VIN is invalid and we return false.
         */
        return Promise.resolve(checksum === checkValue);
    });
}

/**
 * @module utils/makeQueryString
 * @category Utils
 */
/**
 * Utility method to generate a query string compatible with the NHSTA API, for use in an API URL string.
 *
 * @async
 *
 * @param {object} params - Object of Type [QueryStringParameters](module-utils_makeQueryString.html#.QueryStringParameters).
 * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
 * - Given params of `{ paramName: "" }` , setting this to true will use 'paramName=' in the final query string.
 * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
 *
 * @returns {Promise<string>|Error} A query string of search parameters for use in a final Fetch.get URL.
 *
 * @example <caption>When loaded from the browser via html script tags</caption>
 * // <script type="text/javascript" src="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper"></script>
 * const qs = await NHTSA.makeQueryString({ modelYear: 2010 }).catch(error => error)
 * console.log(qs) // "?modelYear=2010"
 *
 * @example <caption>When loaded as a module</caption>
 * import { makeQueryString } from '@shaggytools/nhtsa-api-wrapper'
 * const qs = await makeQueryString({ modelYear: 2010 }).catch(error => error)
 * console.log(qs) // "?modelYear=2010"
 *
 * @example <caption>Single Param:</caption>
 * const qs = await makeQueryString({
 *   modelYear: 2019
 * }).catch(error => error)
 * console.log(qs) // "?modelYear=2019"
 *
 * @example <caption>Multiple Params:</caption>
 * const qs = await makeQueryString({
 *   whatever: 'some value',
 *   modelYear: 2006,
 *   page: "2"
 * }).catch(error => error)
 *
 * console.log(qs) // "?whatever=some%20value&modelYear=2006&page=2"
 *
 * @example <caption>Empty Params Object:</caption>
 * const qs = await makeQueryString({}).catch(error => error)
 *
 * console.log(qs) // ""
 *
 * @example <caption>Using allowEmptyStringValues option:</caption>
 * const qs = await makeQueryString({
 *   year: 2016,
 *   vehicleType: '',
 *   make: 'Audi'
 * }, true).catch(error => error)
 *
 * console.log(qs) // "?year=2016&vehicleType=&make=Audi"
 *
 */
function makeQueryString(params = {}, allowEmptyStringValues = false) {
    /* Beginning of error message string */
    const errorBase = 'queryString(params) - expected params in the form of an object, got:';
    /* Runtime type guard params argument, must be of type object */
    if (getTypeof(params) !== 'object') {
        return Promise.reject(new Error(`${errorBase} ${params}`));
    }
    /* Setup QueryString for Array mapping */
    const entries = Object.entries(params);
    const paramsLength = entries.length;
    /* Return an empty string if params are an empty object */
    if (paramsLength < 1)
        return Promise.resolve('');
    /* Used to check if we've already prepended a valid query param */
    let isPrepended = false;
    /* Map [key]:value entries to "key=value" strings in an array */
    const queryStringArray = entries.map(([key, value], index) => {
        let prepend = '';
        let append = '';
        const typeofValue = getTypeof(value);
        /* Convert any number values to a string */
        if (value && typeofValue === 'number') {
            value = value.toString();
        }
        /* Skip any invalid values, only string and number value types are valid */
        if ((value || allowEmptyStringValues) &&
            (typeofValue === 'string' || typeofValue === 'number')) {
            /* if this is the first param we need to prepend the '?' char */
            if (!isPrepended) {
                prepend = '?';
                isPrepended = true;
            }
            /* if there is another param coming after this one we need to append the '&' char */
            if (index < paramsLength - 1) {
                append = '&';
            }
            /* Add the completed partial query string to queryStringArray */
            return `${prepend}${key}=${value}${append}`;
        }
        return;
    });
    /* Join and return the completed query string after URI encoding */
    return Promise.resolve(encodeURI(queryStringArray.join('')));
}

/**
 * @module api/Fetch
 * @category API
 * @description API Fetch Logic.
 *
 * > **Module Exports**:
 * > - Class: [Fetch](module-api_Fetch.Fetch.html)
 * > - Constant: [BASE_URL](#~BASE_URL)
 * > - Constant: [DEFAULT_CONFIG](#~DEFAULT_CONFIG)
 * >
 * > **Types**
 * > - Type: [ApiResponse](#ApiResponse)
 * > - Type: [FetchConfig](#FetchConfig)
 * > - Type: [FetchRequestOptions](#FetchRequestOptions)
 * > - Type: [FetchRequestBodyTypes](https://github.github.io/fetch/#request-body)
 * > - Type: [FetchResponse](#FetchResponse)
 * > - Type: [NhtsaResponse](#NhtsaResponse)
 */
/*****************
 * CONSTANTS
 ****************/
/**
 * @constant {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';
/**
 * @constant {module:api/Fetch.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL Default: [BASE_URL](module-api_Fetch.html#~BASE_URL)
 * @property {FetchRequestOptions} options={method:"GET"}
 */
const DEFAULT_CONFIG = {
    apiResponseFormat: 'json',
    baseUrl: BASE_URL,
    options: {}
};
/*****************
 * Fetch Class
 ****************/
/**
 * Class wrapper containing API wrapper HTTP Fetch logic.
 *
 * > **Static Methods**:
 * > - [buildQueryString](#buildQueryString)
 * > - [get](#get)
 *
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 * @category API
 */
class Fetch {
    constructor(userConfig) {
        let finalConfig;
        /* userConfig takes precedence over DEFAULT_CONFIG */
        if (userConfig && getTypeof(userConfig) === 'object') {
            finalConfig = Object.assign(Object.assign(Object.assign({}, DEFAULT_CONFIG), userConfig), { options: Object.assign(Object.assign({}, DEFAULT_CONFIG.options), userConfig.options) });
        }
        else {
            finalConfig = Object.assign({}, DEFAULT_CONFIG);
        }
        /** @private */
        this.apiResponseFormat = 'json';
        /** @private */
        this.baseUrl = finalConfig.baseUrl;
        /** @private */
        this.options = finalConfig.options;
    }
    /**
     * Builds a query string from QueryStringParameters.
     *
     * @param {QueryStringParameters} params - Object containing Key:Value pairs to build the URL query string with.
     * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
     * - Given params of `{paramName: ""}` , setting this to true will use 'paramName=' in the final query string.
     * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
     * @returns {(Promise<string | Error>)} A formatted NHSTA.dot.gov Vehicles API query string.
     */
    buildQueryString(params, allowEmptyStringValues = false) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            /*
             * Make sure we're always using 'format=json' in the url Query parameters
             * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
             * This package may provide support for the other formats (CSV and XML) if requested.
             */
            if (!params || getTypeof(params) !== 'object') {
                params = {
                    format: this.apiResponseFormat
                };
            }
            else {
                params = Object.assign(Object.assign({}, params), { format: this.apiResponseFormat });
            }
            /* Return the completed query string */
            return yield makeQueryString(params, allowEmptyStringValues);
        });
    }
    /**
     * Uses the `cross-fetch` npm package to send HTTP requests and retrieve data from an API.
     * - In browser environments, [whatwg-fetch](https://github.com/github/fetch/) window.fetch is used.
     * - In node environments, [node-fetch](https://github.com/bitinn/node-fetch/) NPM package is used.
     *
     * @param {string} url - URL to fetch data from.
     * @param {FetchRequestOptions} [options] - [Fetch options](https://github.github.io/fetch/#options).
     * @returns {(Promise<module:api/Fetch.ApiResponse | Error>)} Response from the API.
     */
    get(url, options = {}) {
        return tslib_es6.__awaiter(this, void 0, void 0, function* () {
            /* Runtime typechecking */
            const typeofUrl = getTypeof(url);
            if (typeofUrl !== 'string') {
                return Promise.reject(new Error(`Fetch.get(url) - url argument must be of type string, got: ${typeofUrl}`));
            }
            const typeofOptions = getTypeof(options);
            if (typeofOptions !== 'object') {
                return Promise.reject(new Error(`Fetch.get(url, options) - options argument must be of type object, got: ${typeofOptions}`));
            }
            /* Combine user provided 'options' and class property 'this.options', user options overwrite class options */
            const combinedOptions = Object.assign(Object.assign({}, this.options), options);
            /* Use the cross-fetch package to perform an HTTP request */
            const response = yield fetch(url, combinedOptions)
                .then(result => {
                var _a, _b, _c, _d;
                if (!((_a = result) === null || _a === void 0 ? void 0 : _a.status) || result.status >= 400) {
                    throw new Error(`Bad response from server, code: ${(_b = result) === null || _b === void 0 ? void 0 : _b.status}, text: ${(_c = result) === null || _c === void 0 ? void 0 : _c.statusText}, headers: ${(_d = result) === null || _d === void 0 ? void 0 : _d.headers}`);
                }
                else
                    return result;
            })
                .catch(err => Promise.reject(new Error(`Fetch.get() http error: ${err}`)));
            /* Convert the NHTSA API data to JSON */
            const NhtsaResponse = yield response
                .json()
                .then((json) => json);
            /* Add the fetch response information to the returned NHSTA API data */
            const finalResult = Object.assign(Object.assign({}, NhtsaResponse), { FetchResponse: {
                    headers: response.headers,
                    ok: response.ok,
                    redirected: response.redirected,
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url
                } });
            /* Return the completed ApiResponse */
            return Promise.resolve(finalResult);
        });
    }
}

exports.Fetch = Fetch;
exports.getTypeof = getTypeof;
exports.isValidVin = isValidVin;
//# sourceMappingURL=Fetch-4ce8326c.js.map
