/**
 * @module api/Fetch
 */

/* Module Dependencies */
import fetch from 'cross-fetch';
/* Utilities */
import { getTypeof, makeQueryString } from '../utils';

/**
 * @const {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
export const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

/**
 * @const {module:api/types.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL
 */
export const DEFAULT_CONFIG: import('./types').FetchConfig = {
  apiResponseFormat: 'json',
  baseUrl: BASE_URL
};

/** Class wrapper containing API wrapper HTTP Fetch logic*/
export class Fetch {
  apiResponseFormat?: string;
  baseUrl?: string;
  config?: import('./types').FetchConfig;

  /** @param {module:api/types.FetchConfig} [userConfig] User configuration options to construct the class with */
  constructor(userConfig?: import('./types').FetchConfig) {
    let finalConfig: import('./types').FetchConfig;

    if (getTypeof(userConfig) === 'object') {
      finalConfig = { ...DEFAULT_CONFIG, ...userConfig };
    } else {
      finalConfig = { ...DEFAULT_CONFIG };
    }

    /** @private */
    this.apiResponseFormat = 'json';
    /** @private */
    this.baseUrl = finalConfig.baseUrl;
    /** @private */
    this.config = finalConfig;
  }

  /**
   * Builds a query string from QueryStringParameters
   *
   * @param {QueryStringParameters} params [QueryStringParameters](module-utils_makeQueryString.html#.QueryStringParameters)
   * @param {boolean} [allowEmptyStringValues=false] Allow empty query string parameters (as an empty string)
   *
   * @returns {(Promise<string | Error>)} A formatted NHSTA.dot.gov Vehicles API query string
   */
  async buildQueryString(
    params: import('../utils/makeQueryString').QueryStringParameters,
    allowEmptyStringValues = false
  ): Promise<string | Error> {
    /*
     * Make sure we're always using 'format=json' in the url Query parameters
     * If the user provides a 'format' key in the params, during class instantiation we want to override it to 'json'
     * This package will never provide support for the other formats (CSV and XML)
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
   * Uses the `cross-fetch` npm package to send HTTP requests and retrieve data from an API
   *
   * @param {string} url URL to fetch data from
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async get(url: string): Promise<import('./types').ApiResponse | Error> {
    if (getTypeof(url) !== 'string') {
      return Promise.reject(
        new Error('Fetch.get(url) - url argument must be of type string')
      );
    }

    /* Use the cross-fetch package to perform an HTTP get request */
    const response: Response = await fetch(url)
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
    const json: import('./types').NhtsaResponse = await response.json();

    /* Add the fetch response information to the returned NHSTA API data */
    const finalResult: import('./types').ApiResponse = {
      ...json,
      Response: {
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
