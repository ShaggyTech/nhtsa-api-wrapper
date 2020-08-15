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

/* Parent Class and Fetch Types */
import {
  Fetch /* Class */,
  FetchConfig /* Type */,
  FetchResponse /* Type */,
} from '../Fetch';

/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export class GetAllMakes extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides a list of all the Makes available in the vPIC Dataset.
   *
   * @async
   * @returns {(Promise<GetAllMakesResponse>)} Api Response object.
   */
  public async GetAllMakes(): Promise<GetAllMakesResponse> {
    const action = 'GetAllMakes';

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString().catch((err) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then((response) => response)
      .catch((err) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetAllMakesResponse}.Results' array.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResults
 */
export type GetAllMakesResults = {
  Make_ID: number;
  Make_Name: string;
};

/**
 * Type representing the complete response returned by the GetAllMakes API Action.
 *
 * @memberof module:api/actions/GetAllMakes
 * @alias GetAllMakesResponse
 */
export type GetAllMakesResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetAllMakesResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
