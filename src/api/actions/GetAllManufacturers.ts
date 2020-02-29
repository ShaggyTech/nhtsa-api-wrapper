/**
 * @module api/actions/GetAllManufacturers
 * @category Actions
 * @description GetAllManufacturers NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetAllManufacturers](module-api_actions_GetAllManufacturers.GetAllManufacturers.html)
 * >
 * > **Types**
 * > - Type: [GetAllManufacturersResponse](#GetAllManufacturersResponse)
 * > - Type: [GetAllManufacturersResults](#GetAllManufacturersResults)
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
export class GetAllManufacturers extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides a list of all the Manufacturers available in vPIC Dataset.
   * - `params.manufacturerType` allows the user to filter the list based on manufacturer type,
   *   ('Incomplete Vehicles', 'Completed Vehicle Manufacturer', 'Incomplete Vehicle Manufacturer',
   *   'Intermediate Manufacturer', 'Final-Stage Manufacturer', 'Alterer', or any partial match of those strings).
   * - You can get a list of all manufacturer types with the following API Action:
   *   `GetVehicleVariableValuesList('manufacturer type')`
   * - Results are provided in pages of 100 items.
   * - Provide a number value for `params.page` to specify 1st (default), 2nd, 3rd, Nth, etc page.
   *
   * @async
   * @param {object} [params={}] - Query Search Parameters to append to the URL.
   * @param {string} [params.manufacturerType] - See method description.
   * @param {number} [params.page] - Specify the page number (results returned 100 at a time).
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  async GetAllManufacturers(
    params: {
      manufacturerType?: string;
      page?: number;
    } = {}
  ): Promise<GetAllManufacturersResponse | Error> {
    const action = 'GetAllManufacturers';

    /* Runtime typechecking */
    const typeofParams = getTypeof(params);
    if (typeofParams !== 'object') {
      return Promise.reject(
        new Error(
          `${action}, "params" argument must be of type object, got: ` +
            `<${typeofParams}> ${params}`
        )
      );
    }

    const typeofManufacturerType = getTypeof(params.manufacturerType);
    if (params.manufacturerType && typeofManufacturerType !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.manufacturerType" argument must be of type string, got: ` +
            `<${typeofManufacturerType}> ${params.manufacturerType}`
        )
      );
    }

    const typeofPage = getTypeof(params.page);
    if (params.page && typeofPage !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.page" argument must be of type number, got: ` +
            `<${typeofPage}> ${params.page}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetAllManufacturersResponse}.Results' array.
 *
 * @memberof module:api/actions/GetAllManufacturers
 * @alias GetAllManufacturersResults
 */
export type GetAllManufacturersResults = {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: Array<{ isPrimary?: boolean; name?: string }>;
};

/**
 * Type representing the complete response returned by the GetAllManufacturers API Action.
 *
 * @memberof module:api/actions/GetAllManufacturers
 * @alias GetAllManufacturersResponse
 */
export type GetAllManufacturersResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetAllManufacturersResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
