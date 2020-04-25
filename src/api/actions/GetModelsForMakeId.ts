/**
 * @module api/actions/GetModelsForMakeId
 * @category Actions
 * @description GetModelsForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeId](module-api_actions_GetModelsForMakeId.GetModelsForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeIdResponse](#GetModelsForMakeIdResponse)
 * > - Type: [GetModelsForMakeIdResults](#GetModelsForMakeIdResults)
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
export class GetModelsForMakeId extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This returns the Models in the vPIC dataset for a specified Make
   * whose Id is equal to the `makeId` in the vPIC Dataset.
   *
   * @async
   * @param {number} makeID - Vehicle make ID (number).
   * @returns {(Promise<GetModelsForMakeIdResponse>)} Api Response object.
   */
  async GetModelsForMakeId(
    makeID: number
  ): Promise<GetModelsForMakeIdResponse> {
    const action = 'GetModelsForMakeId';

    /* Runtime typechecking */
    const typeofMakeId = getTypeof(makeID);
    if (typeofMakeId !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "makeId" argument is required and must be of type number, got: ` +
            `<${typeofMakeId}> ${makeID}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeIdResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMakeId
 * @alias GetModelsForMakeIdResults
 */
export type GetModelsForMakeIdResults = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

/**
 * Type representing the complete response returned by the GetModelsForMakeId API Action.
 *
 * @memberof module:api/actions/GetModelsForMakeId
 * @alias GetModelsForMakeIdResponse
 */
export type GetModelsForMakeIdResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetModelsForMakeIdResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
