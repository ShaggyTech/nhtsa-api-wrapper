/**
 * @module api/actions/GetWMIsForManufacturer
 * @category Actions
 * @description GetWMIsForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetWMIsForManufacturer](module-api_actions_GetWMIsForManufacturer.GetWMIsForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetWMIsForManufacturerResponse](#GetWMIsForManufacturerResponse)
 * > - Type: [GetWMIsForManufacturerResults](#GetWMIsForManufacturerResults)
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
export class GetWMIsForManufacturer extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * Provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
   * - Only WMIs registered in vPICList are displayed.
   * - `manufacturer` can be a partial name, or a full name for more specificity
   *   (e.g., "Merc", "Mercedes Benz", etc.).
   *
   * @async
   * @param {string|number} manufacturer - Manufacturer Name.
   * @returns {(Promise<GetWMIsForManufacturerResponse>)} Api Response object.
   */
  async GetWMIsForManufacturer(
    manufacturer: string
  ): Promise<GetWMIsForManufacturerResponse> {
    const action = 'GetWMIsForManufacturer';

    /* Runtime typechecking */
    const typeofManufacturer = getTypeof(manufacturer);
    if (typeofManufacturer !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "manufacturer" argument is required and must be of type string, got: ` +
            `<${typeofManufacturer}> ${manufacturer}`
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
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then((response) => response)
      .catch((err) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetWMIsForManufacturerResponse}.Results' array.
 *
 * @memberof module:api/actions/GetWMIsForManufacturer
 * @alias GetWMIsForManufacturerResults
 */
export type GetWMIsForManufacturerResults = {
  Country: string;
  CreatedOn: string;
  DateAvailableToPublic: string;
  Id: number;
  Name: string;
  UpdatedOn: string;
  VehicleType: string;
  WMI: string;
};

/**
 * Type representing the complete response returned by the GetWMIsForManufacturer API Action.
 *
 * @memberof module:api/actions/GetWMIsForManufacturer
 * @alias GetWMIsForManufacturerResponse
 */
export type GetWMIsForManufacturerResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetWMIsForManufacturerResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
