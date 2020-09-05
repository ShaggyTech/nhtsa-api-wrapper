'use strict';

var fetch = require('cross-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

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
 * @returns {Promise<string>} A query string of search parameters for use in a final Fetch.get URL.
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
    options: {},
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
     * @returns {(Promise<string>)} A formatted NHSTA.dot.gov Vehicles API query string.
     */
    buildQueryString(params, allowEmptyStringValues = false) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
             * Make sure we're always using 'format=json' in the url Query parameters
             * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
             * This package may provide support for the other formats (CSV and XML) if requested.
             */
            if (!params || getTypeof(params) !== 'object') {
                params = {
                    format: this.apiResponseFormat,
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
     * @returns {(Promise<module:api/Fetch.ApiResponse>)} Response from the API.
     */
    get(url, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const response = yield fetch__default['default'](url, combinedOptions)
                .then((result) => {
                if (!(result === null || result === void 0 ? void 0 : result.status) || result.status >= 400) {
                    throw new Error(`Bad response from server, code: ${result === null || result === void 0 ? void 0 : result.status}, text: ${result === null || result === void 0 ? void 0 : result.statusText}, headers: ${result === null || result === void 0 ? void 0 : result.headers}`);
                }
                else
                    return result;
            })
                .catch((err) => Promise.reject(new Error(`Fetch.get() http error: ${err}`)));
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
                    url: response.url,
                } });
            /* Return the completed ApiResponse */
            return Promise.resolve(finalResult);
        });
    }
}

exports.Fetch = Fetch;
exports.__awaiter = __awaiter;
exports.getTypeof = getTypeof;
//# sourceMappingURL=Fetch-2f6f3d33.js.map
