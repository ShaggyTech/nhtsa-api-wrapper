/**
 * @module api/actions/GetMakeForManufacturer
 * @category Actions
 * @description GetMakeForManufacturer NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakeForManufacturer](module-api_actions_GetMakeForManufacturer.GetMakeForManufacturer.html)
 * >
 * > **Types**
 * > - Type: [GetMakeForManufacturerResponse](#GetMakeForManufacturerResponse)
 * > - Type: [GetMakeForManufacturerResults](#GetMakeForManufacturerResults)
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
export class GetMakeForManufacturer extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
   * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
   * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
   *   (it accepts a partial manufacturer name as an input).
   * - `manufacturer` name can be a partial name, or a full name for more specificity
   *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
   * - Multiple results are returned in case of multiple matches.
   *
   * @async
   * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
   * @returns {(Promise<GetMakeForManufacturer | Error>)} Api Response object.
   */
  async GetMakeForManufacturer(
    manufacturer: string | number
  ): Promise<GetMakeForManufacturerResponse | Error> {
    const action = 'GetMakeForManufacturer';

    /* Runtime typechecking */
    const typeofManufacturer = getTypeof(manufacturer);
    if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
            `<${typeofManufacturer}> ${manufacturer}`
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
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetMakeForManufacturerResponse}.Results' array.
 *
 * @memberof module:api/actions/GetMakeForManufacturer
 * @alias GetMakeForManufacturerResults
 */
export type GetMakeForManufacturerResults = {
  Make_ID: number;
  Make_Name: string;
  Mfr_Name: string;
};

/**
 * Type representing the complete response returned by the GetMakeForManufacturer API Action.
 *
 * @memberof module:api/actions/GetMakeForManufacturer
 * @alias GetMakeForManufacturerResponse
 */
export type GetMakeForManufacturerResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetMakeForManufacturerResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
