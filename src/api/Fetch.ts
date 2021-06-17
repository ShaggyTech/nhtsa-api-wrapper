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

/* Module Dependencies */
import 'isomorphic-unfetch';
/* Utilities */
import { getTypeof, makeQueryString } from '../utils';
/* Types */
import { QueryStringParameters } from '../utils/types';

/*****************
 * CONSTANTS
 ****************/

/**
 * @constant {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

/**
 * @constant {module:api/Fetch.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL Default: [BASE_URL](module-api_Fetch.html#~BASE_URL)
 * @property {FetchRequestOptions} options={method:"GET"}
 */
export const DEFAULT_CONFIG: FetchConfig = {
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
export class Fetch {
  apiResponseFormat: string;
  baseUrl?: string;
  options?: FetchRequestOptions;

  constructor(userConfig?: FetchConfig) {
    let finalConfig: FetchConfig;

    /* userConfig takes precedence over DEFAULT_CONFIG */
    if (userConfig && getTypeof(userConfig) === 'object') {
      finalConfig = {
        ...DEFAULT_CONFIG,
        ...userConfig,
        options: { ...DEFAULT_CONFIG.options, ...userConfig.options },
      };
    } else {
      finalConfig = { ...DEFAULT_CONFIG };
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
  async buildQueryString(
    params?: QueryStringParameters,
    allowEmptyStringValues = false
  ): Promise<string> {
    /*
     * Make sure we're always using 'format=json' in the url Query parameters
     * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
     * This package may provide support for the other formats (CSV and XML) if requested.
     */
    if (!params || getTypeof(params) !== 'object') {
      params = {
        format: this.apiResponseFormat,
      };
    } else {
      params = { ...params, format: this.apiResponseFormat };
    }

    /* Return the completed query string */
    return await makeQueryString(params, allowEmptyStringValues);
  }

  /**
   * Uses the `isomorphic-unfetch` npm package to send HTTP requests and retrieve data from an API.
   * - Switches between [unfetch](https://github.com/developit/unfetch) & [node-fetch](https://github.com/bitinn/node-fetch) for client & server.
   * - 2.5 kB unpacked size
   *
   * @param {string} url - URL to fetch data from.
   * @param {FetchRequestOptions} [options] - [Fetch options](https://github.github.io/fetch/#options).
   * @returns {(Promise<module:api/Fetch.ApiResponse>)} Response from the API.
   */
  async get(
    url: string,
    options: FetchRequestOptions = {}
  ): Promise<ApiResponse> {
    /* Runtime typechecking */
    const typeofUrl = getTypeof(url);
    if (typeofUrl !== 'string') {
      return Promise.reject(
        new Error(
          `Fetch.get(url) - url argument must be of type string, got: ${typeofUrl}`
        )
      );
    }
    const typeofOptions = getTypeof(options);
    if (typeofOptions !== 'object') {
      return Promise.reject(
        new Error(
          `Fetch.get(url, options) - options argument must be of type object, got: ${typeofOptions}`
        )
      );
    }

    /* Combine user provided 'options' and class property 'this.options', user options overwrite class options */
    const combinedOptions = { ...this.options, ...options };

    /* Use the isomorphic-unfetch package to perform an HTTP request */
    const response: Response = await fetch(url, combinedOptions)
      .then((result) => {
        if (!result?.status || result.status >= 400) {
          throw new Error(
            `Bad response from server, code: ${result?.status}, text: ${result?.statusText}, headers: ${result?.headers}`
          );
        } else return result;
      })
      .catch((err) =>
        Promise.reject(new Error(`Fetch.get() http error: ${err}`))
      );

    /* Convert the NHTSA API data to JSON */
    const NhtsaResponse: NhtsaResponse = await response
      .json()
      .then((json: NhtsaResponse): NhtsaResponse => json);

    /* Add the fetch response information to the returned NHSTA API data */
    const finalResult: ApiResponse = {
      ...NhtsaResponse,
      FetchResponse: {
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      },
    };

    /* Return the completed ApiResponse */
    return Promise.resolve(finalResult);
  }
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
export type FetchRequestBodyTypes =
  | URLSearchParams
  | FormData
  | Blob
  | ArrayBuffer
  | DataView;

/**
 * Options object provided as the 2nd argument to {@link module:api/Fetch.Fetch#get}.
 *
 * @memberof module:api/Fetch
 * @alias FetchRequestOptions
 */
export type FetchRequestOptions = {
  /**HTTP request method - Default: "GET". */
  method?: string;
  /** HTTP request body - [FetchRequestBodyTypes](https://github.github.io/fetch/#request-body). */
  body?: string | FetchRequestBodyTypes;
  /** [Object, Headers](https://github.github.io/fetch/#Headers) - Default: {}. */
  headers?: Record<string, string> | Headers;
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
export type FetchConfig = {
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
export type FetchResponse = {
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
export type NhtsaResponse = {
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
export type ApiResponse = {
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
