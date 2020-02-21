/**
 * @module api/actions/GetVehicleTypesForMake
 * @category Actions
 * @description GetVehicleTypesForMake NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleTypesForMake](module-api_actions_GetVehicleTypesForMake.GetVehicleTypesForMake.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleTypesForMakeResponse](#GetVehicleTypesForMakeResponse)
 * > - Type: [GetVehicleTypesForMakeResults](#GetVehicleTypesForMakeResults)
 *
 */

/* Parent Class and Fetch Type */
import { Fetch /* Class */, FetchResponse /* Type */ } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export class GetVehicleTypesForMake extends Fetch {
  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make,
   * whose name is LIKE the make name in the vPIC Dataset.
   * - `makeName` can be a partial name, or a full name for more specificity
   *   (e.g., "Merc", "Mercedes Benz", etc.).
   *
   * @async
   * @param {string} makeName - Name of the vehicle make to search.
   * @returns {(Promise<GetVehicleTypesForMakeResponse | Error>)} Api Response object.
   */
  async GetVehicleTypesForMake(
    makeName: string
  ): Promise<GetVehicleTypesForMakeResponse | Error> {
    const action = 'GetVehicleTypesForMake';

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
    const queryString = await this.buildQueryString().catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetVehicleTypesForMakeResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleTypesForMake
 * @alias GetVehicleTypesForMakeResults
 */
export type GetVehicleTypesForMakeResults = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
};

/**
 * Type representing the complete response returned by the GetVehicleTypesForMake API Action.
 *
 * @memberof module:api/actions/GetVehicleTypesForMake
 * @alias GetVehicleTypesForMakeResponse
 */
export type GetVehicleTypesForMakeResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetVehicleTypesForMakeResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
