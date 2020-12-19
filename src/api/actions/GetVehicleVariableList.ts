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
export class GetVehicleVariableList extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides a list of all the Vehicle related variables that are in the vPIC dataset.
   * - Information on the name, description and the type of the variable is provided.
   *
   * @async
   * @returns {(Promise<GetVehicleVariableListResponse>)} Api Response object.
   */
  public async GetVehicleVariableList(): Promise<GetVehicleVariableListResponse> {
    const action = 'GetVehicleVariableList';

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
 * Type representing the structure of objects found in the '{@link GetVehicleVariableListResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleVariableList
 * @alias GetVehicleVariableListResults
 */
export type GetVehicleVariableListResults = {
  DataType: string;
  Description: string;
  ID: number;
  Name: string;
};

/**
 * Type representing the complete response returned by the GetVehicleVariableList API Action.
 *
 * @memberof module:api/actions/GetVehicleVariableList
 * @alias GetVehicleVariableListResponse
 */
export type GetVehicleVariableListResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetVehicleVariableListResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
