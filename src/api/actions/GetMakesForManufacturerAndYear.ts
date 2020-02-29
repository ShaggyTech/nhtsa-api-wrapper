/**
 * @module api/actions/GetMakesForManufacturerAndYear
 * @category Actions
 * @description GetMakesForManufacturerAndYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetMakesForManufacturerAndYear](module-api_actions_GetMakesForManufacturerAndYear.GetMakesForManufacturerAndYear.html)
 * >
 * > **Types**
 * > - Type: [GetMakesForManufacturerAndYearResponse](#GetMakesForManufacturerAndYearResponse)
 * > - Type: [GetMakesForManufacturerAndYearResults](#GetMakesForManufacturerAndYearResults)
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
export class GetMakesForManufacturerAndYear extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This returns all the Makes in the vPIC dataset for a specified manufacturer,
   * and whose Year From and Year To range cover the specified year.
   * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
   * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
   *   (it accepts a partial manufacturer name as an input).
   * - Multiple results are returned in case of multiple matches.
   * - Manufacturer can be idenfitied by Id, a partial name, or a full name
   *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.).
   *
   * @async
   * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
   * @param {object} params - Query Search Parameters to append to the URL.
   * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
   *
   * @returns {(Promise<GetMakesForManufacturerAndYearResponse | Error>)} Api Response object.
   */
  public async GetMakesForManufacturerAndYear(
    manufacturer: string | number,
    params: {
      year: number;
    }
  ): Promise<GetMakesForManufacturerAndYearResponse | Error> {
    const action = 'GetMakesForManufacturerAndYear';

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

    const typeofParams = getTypeof(params);
    if (typeofParams !== 'object') {
      return Promise.reject(
        new Error(
          `${action}, "params" argument is required and must be of type object, got: ` +
            `<${typeofParams}> ${params}`
        )
      );
    }

    const typeofYear = getTypeof(params.year);
    if (typeofYear !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.year" argument is required and must be of type number, got: ` +
            `<${typeofYear}> ${params.year}`
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
 * Type representing the structure of objects found in the '{@link GetMakesForManufacturerAndYearResponse}.Results' array.
 *
 * @memberof module:api/actions/GetMakesForManufacturerAndYear
 * @alias GetMakesForManufacturerAndYearResults
 */
export type GetMakesForManufacturerAndYearResults = {
  MakeId: number;
  MakeName: string;
  MfrId: number;
  MfrName: string;
};

/**
 * Type representing the complete response returned by the GetMakesForManufacturerAndYear API Action.
 *
 * @memberof module:api/actions/GetMakesForManufacturerAndYear
 * @alias GetMakesForManufacturerAndYearResponse
 */
export type GetMakesForManufacturerAndYearResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetMakesForManufacturerAndYearResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
