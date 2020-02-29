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

/* Parent Class and Fetch Types */
import {
  Fetch /* Class */,
  FetchConfig /* Type */,
  FetchResponse /* Type */
} from '../Fetch';

/* Utility Functions */
import { getTypeof } from '../../utils';

/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export class GetModelsForMake extends Fetch {
  constructor(userConfig?: FetchConfig) {
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
  async GetModelsForMake(
    makeName: string
  ): Promise<GetModelsForMakeResponse | Error> {
    const action = 'GetModelsForMake';

    /* Runtime typechecking */
    const typeofMakeName = getTypeof(makeName);
    if (typeofMakeName !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "makeName" argument is required and must be of type string, got: ` +
            `<${typeofMakeName}> ${makeName}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString().catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMake
 * @alias GetModelsForMakeResults
 */
export type GetModelsForMakeResults = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

/**
 * Type representing the complete response returned by the GetModelsForMake API Action.
 *
 * @memberof module:api/actions/GetModelsForMake
 * @alias GetModelsForMakeResponse
 */
export type GetModelsForMakeResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetModelsForMakeResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
