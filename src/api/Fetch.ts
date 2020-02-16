/**
 * @module api/Fetch
 */

/* Module Dependencies */
import fetch from 'cross-fetch';
/* Utilities */
import { getTypeof, makeQueryString } from '../utils';

/**
 * @constant {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

/**
 * @constant {module:api/Fetch.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL
 */
export const DEFAULT_CONFIG: import('./types').FetchConfig = {
  apiResponseFormat: 'json',
  baseUrl: BASE_URL
};

/**
 * Class wrapper containing API wrapper HTTP Fetch logic.
 *
 * @param {module:api/Fetch.FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export class Fetch {
  apiResponseFormat: string;
  baseUrl?: string;
  options?: import('./types').FetchRequestOptions;

  constructor(userConfig?: import('./types').FetchConfig) {
    let finalConfig: import('./types').FetchConfig;

    /* userConfig takes precedence over DEFAULT_CONFIG */
    if (userConfig && getTypeof(userConfig) === 'object') {
      finalConfig = {
        ...DEFAULT_CONFIG,
        ...userConfig,
        options: { ...DEFAULT_CONFIG.options, ...userConfig.options }
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
   * @param {object} params - Object of Type [QueryStringParameters](module-utils_makeQueryString.html#.QueryStringParameters).
   * @param {boolean} [allowEmptyStringValues=false] - Set to `true` to add empty parameter values to the returned query string.
   * - Given params of `{paramName: ""}` , setting this to true will use 'paramName=' in the final query string.
   * - GetCanadianVehicleSpecifications is the only API Action that requires this functionality.
   * @returns {(Promise<string | Error>)} A formatted NHSTA.dot.gov Vehicles API query string.
   */
  async buildQueryString(
    params: import('../utils/types').QueryStringParameters,
    allowEmptyStringValues = false
  ): Promise<string | Error> {
    /*
     * Make sure we're always using 'format=json' in the url Query parameters
     * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
     * This package may provide support for the other formats (CSV and XML) if requested.
     */
    if (!params || getTypeof(params) !== 'object') {
      params = {
        format: this.apiResponseFormat
      };
    } else {
      params = { ...params, format: this.apiResponseFormat };
    }

    /* Return the completed query string */
    return await makeQueryString(params, allowEmptyStringValues);
  }

  /**
   * Uses the `cross-fetch` npm package to send HTTP requests and retrieve data from an API.
   * - In browser environments, [whatwg-fetch](https://github.com/github/fetch/) window.fetch is used.
   * - In node environments, [node-fetch](https://github.com/bitinn/node-fetch/) NPM package is used.
   *
   * @param {string} url - URL to fetch data from.
   * @param {module:api/Fetch.FetchRequestOptions} [options] - [Fetch options](https://github.github.io/fetch/#options).
   * @returns {(Promise<module:api/Fetch.ApiResponse | Error>)} Response from the API.
   */
  async get(
    url: string,
    options: import('./types').FetchRequestOptions = {}
  ): Promise<import('./types').ApiResponse | Error> {
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

    /* Use the cross-fetch package to perform an HTTP request */
    const response: Response = await fetch(url, combinedOptions)
      .then(result => {
        if (!result?.status || result.status >= 400) {
          throw new Error(
            `Bad response from server, code: ${result?.status}, text: ${result?.statusText}, headers: ${result?.headers}`
          );
        } else return result;
      })
      .catch(err =>
        Promise.reject(new Error(`Fetch.get() http error: ${err}`))
      );

    /* Convert the NHTSA API data to JSON */
    const NhtsaResponse: import('./types').NhtsaResponse = await response.json();

    /* Add the fetch response information to the returned NHSTA API data */
    const finalResult: import('./types').ApiResponse = {
      ...NhtsaResponse,
      FetchResponse: {
        headers: response.headers,
        ok: response.ok,
        redirected: response.redirected,
        status: response.status,
        statusText: response.statusText,
        url: response.url
      }
    };

    /* Return the completed ApiResponse */
    return Promise.resolve(finalResult);
  }
}
