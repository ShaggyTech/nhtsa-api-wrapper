/**
 * @module api/actions/GetVehicleTypesForMakeId
 * @category Actions
 * @description GetVehicleTypesForMakeId NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMakeId](module-api_actions_GetVehicleTypesForMakeId.GetVehicleTypesForMakeId.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeIdResponse](#GetVehicleTypesForMakeIdResponse)
 * > - Type: [GetVehicleTypesForMakeIdResults](#GetVehicleTypesForMakeIdResults)
 *
 */

/* Parent Class and Fetch Types */
import {
  Fetch /* Class */,
  FetchConfig /* Type */,
  FetchResponse /* Type */,
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
export class GetVehicleTypesForMakeId extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make and
   * whose ID equals the make ID in the vPIC Dataset.
   *
   * @async
   * @param {number} makeID - Vehicle make ID.
   * @returns {(Promise<GetVehicleTypesForMakeIdResponse>)} Api Response object.
   */
  async GetVehicleTypesForMakeId(
    makeID: number
  ): Promise<GetVehicleTypesForMakeIdResponse> {
    const action = 'GetVehicleTypesForMakeId';

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
    const queryString = await this.buildQueryString().catch((err) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then((response) => response)
      .catch((err) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetVehicleTypesForMakeIdResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResults
 */
export type GetVehicleTypesForMakeIdResults = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

/**
 * Type representing the complete response returned by the GetVehicleTypesForMakeId API Action.
 *
 * @memberof module:api/actions/GetVehicleTypesForMakeId
 * @alias GetVehicleTypesForMakeIdResponse
 */
export type GetVehicleTypesForMakeIdResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetVehicleTypesForMakeIdResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
