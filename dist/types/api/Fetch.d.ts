/**
 * @module api/Fetch
 */
/**
 * @constant {string} BASE_URL Default Fetch base URL string
 * @default 'https://vpic.nhtsa.dot.gov/api/vehicles'
 */
export declare const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";
/**
 * @constant {module:api/types.FetchConfig} DEFAULT_CONFIG Default Fetch configuration options
 * @property {string} apiResponseFormat=json
 * @property {string} baseUrl=BASE_URL
 */
export declare const DEFAULT_CONFIG: import('./types').FetchConfig;
/**
 * Class wrapper containing API wrapper HTTP Fetch logic.
 *
 * @param {module:api/types.FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export declare class Fetch {
    apiResponseFormat?: string;
    baseUrl?: string;
    config?: import('./types').FetchConfig;
    constructor(userConfig?: import('./types').FetchConfig);
    /**
     * Builds a query string from QueryStringParameters.
     *
     * @param {module:utils/types.QueryStringParameters} params - Object of query string search parameters.
     * @param {boolean} [allowEmptyStringValues=false] - Allow empty query string parameters (as an empty string).
     *
     * @returns {(Promise<string | Error>)} A formatted NHSTA.dot.gov Vehicles API query string.
     */
    buildQueryString(params: import('../utils/types').QueryStringParameters, allowEmptyStringValues?: boolean): Promise<string | Error>;
    /**
     * Uses the `cross-fetch` npm package to send HTTP requests and retrieve data from an API.
     *
     * @param {string} url - URL to fetch data from.
     *
     * @returns {(Promise<module:api/types.ApiResponse | Error>)} Response from the API.
     */
    get(url: string): Promise<import('./types').ApiResponse | Error>;
}
//# sourceMappingURL=Fetch.d.ts.map