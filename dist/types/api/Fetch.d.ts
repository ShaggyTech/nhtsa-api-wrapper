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
import { QueryStringParameters } from '../utils/types';
/*****************
 * CONSTANTS
 ****************/
/**
 * @constant {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
export declare const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";
/**
 * @constant {module:api/Fetch.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL Default: [BASE_URL](module-api_Fetch.html#~BASE_URL)
 * @property {FetchRequestOptions} options={method:"GET"}
 */
export declare const DEFAULT_CONFIG: FetchConfig;
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
export declare class Fetch {
    apiResponseFormat: string;
    baseUrl?: string;
    options?: FetchRequestOptions;
    constructor(userConfig?: FetchConfig);
    /**
     * Builds a query string from QueryStringParameters.
     *
     * @param {QueryStringParameters} params - Object containing Key:Value pairs to build the URL query string with.
     * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
     * - Given params of `{paramName: ""}` , setting this to true will use 'paramName=' in the final query string.
     * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
     * @returns {(Promise<string | Error>)} A formatted NHSTA.dot.gov Vehicles API query string.
     */
    buildQueryString(params?: QueryStringParameters, allowEmptyStringValues?: boolean): Promise<string | Error>;
    /**
     * Uses the `cross-fetch` npm package to send HTTP requests and retrieve data from an API.
     * - In browser environments, [whatwg-fetch](https://github.com/github/fetch/) window.fetch is used.
     * - In node environments, [node-fetch](https://github.com/bitinn/node-fetch/) NPM package is used.
     *
     * @param {string} url - URL to fetch data from.
     * @param {FetchRequestOptions} [options] - [Fetch options](https://github.github.io/fetch/#options).
     * @returns {(Promise<module:api/Fetch.ApiResponse | Error>)} Response from the API.
     */
    get(url: string, options?: FetchRequestOptions): Promise<ApiResponse | Error>;
}
/*****************
 * Types
 ****************/
/**
 * Various fetch request body types.
 *
 * @typedef FetchRequestBodyTypes
 * @type {URLSearchParams | FormData | Blob | ArrayBuffer | DataView}
 *
 * @memberof module:api/Fetch
 */
export declare type FetchRequestBodyTypes = URLSearchParams | FormData | Blob | ArrayBuffer | DataView;
/**
 * Options object provided as the 2nd argument to {@link module:api/Fetch.Fetch#get}.
 *
 * @memberof module:api/Fetch
 * @alias FetchRequestOptions
 */
export declare type FetchRequestOptions = {
    /**HTTP request method - Default: "GET". */
    method?: string;
    /** HTTP request body - [FetchRequestBodyTypes](https://github.github.io/fetch/#request-body). */
    body?: string | FetchRequestBodyTypes;
    /** [Object, Headers](https://github.github.io/fetch/#Headers) - Default: {}. */
    headers?: {} | Headers;
    /**
     * Default: "omit" - Authentication credentials mode.
     * - "omit" - don't include authentication credentials (e.g. Cookies) in the request.
     * - "same-origin" - include credentials in requests to the same site
     * - "include" - include credentials in requests to all sites.
     */
    credentials?: 'omit' | 'same-origin' | 'include';
};
/**
 * Used when instantiating a Fetch class or related subclass.
 *
 * @memberof module:api/Fetch
 * @alias FetchConfig
 */
export declare type FetchConfig = {
    /** Requested response format from the NHSTA API (hardcoded to 'json' for now). */
    apiResponseFormat?: string;
    /** Base of the URL to build fetch URLs from. */
    baseUrl?: string;
    /** Options object provided as the 2nd argument to {@link module:api/Fetch.Fetch#get}. */
    options?: FetchRequestOptions;
};
/**
 * [Fetch API Response](https://github.github.io/fetch/#Response) properties.
 *
 * @memberof module:api/Fetch
 * @alias FetchResponse
 */
export declare type FetchResponse = {
    /** The [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object associated with the response. */
    headers: Headers;
    /** A boolean indicating whether the response was successful (status in the range 200–299) or not. */
    ok: boolean;
    /** Indicates whether or not the response is the result of a redirect (that is, its URL list has more than one entry). */
    redirected: boolean;
    /** The status code of the response. (This will be 200 for a success). */
    status: number;
    /** The status message corresponding to the status code. (e.g., OK for 200). */
    statusText: string;
    /** The URL of the response. */
    url: string;
};
/**
 * Response data returned from the NHSTA API.
 *
 * @memberof module:api/Fetch
 * @alias NhtsaResponse
 */
export declare type NhtsaResponse = {
    /** The number of items returned in the Results object. */
    Count: number;
    /** A message describing the Results. */
    Message: string;
    /** Search terms (VIN, WMI, etc) used in the request URL. */
    SearchCriteria: string;
    /** An array of Results returned by NHSTA, specific to each individual API Action. */
    Results: Array<any>;
};
/**
 * Complete response returned by {@link module:api/Fetch.Fetch#get}.
 *
 * @see {@link module:api/Fetch.NhtsaResponse}
 * @see {@link module:api/Fetch.FetchResponse}
 * @memberof module:api/Fetch
 * @alias ApiResponse
 */
export declare type ApiResponse = {
    /** The number of items returned in the Results object. */
    Count: number;
    /** A message describing the Results. */
    Message: string;
    /** Search terms (VIN, WMI, etc) used in the request URL. */
    SearchCriteria: string;
    /** An array of Results returned by NHSTA, specific to each individual API Action. */
    Results: Array<any>;
    /** [Fetch API Response](https://github.github.io/fetch/#Response) Properties. */
    FetchResponse: FetchResponse;
};
//# sourceMappingURL=Fetch.d.ts.map