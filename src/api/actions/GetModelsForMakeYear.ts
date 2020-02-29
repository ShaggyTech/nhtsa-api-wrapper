/**
 * @module api/actions/GetModelsForMakeYear
 * @category Actions
 * @description GetModelsForMakeYear NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetModelsForMakeYear](module-api_actions_GetModelsForMakeYear.GetModelsForMakeYear.html)
 * >
 * > **Types**
 * > - Type: [GetModelsForMakeYearResponse](#GetModelsForMakeYearResponse)
 * > - Type: [GetModelsForMakeYearResults](#GetModelsForMakeYearResults)
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
export class GetModelsForMakeYear extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This returns the Models in the vPIC dataset for a specified Model Year
   * and Make whose name is LIKE the Make in the vPIC Dataset.
   *   - `params.make` is required. It can be a partial, or a full name for more specificity
   *     (e.g., "Harley", "Harley Davidson", etc.).
   *
   * A minimum of one of the following are required (or a combination of both):
   *   - `params.modelYear` is a number (greater than 1995)
   *   - `params.vehicleType` can be a partial name, or a full name for more specificity
   *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
   *
   * @async
   *
   * @param {object} params - Query Search Parameters to append to the URL.
   * @param {string} params.make - Make name to search.
   * @param {number} [params.modelYear] - A number representing the model year to search (greater than 1995).
   * @param {string} [params.vehicleType] - String representing the vehicle type to search.
   *
   * @returns {(Promise<GetModelsForMakeYearResponse | Error>)} Api Response object.
   */
  async GetModelsForMakeYear(params: {
    make: string;
    modelYear?: number;
    vehicleType?: string;
  }): Promise<GetModelsForMakeYearResponse | Error> {
    const action = 'GetModelsForMakeYear';

    const make: string = params?.make;
    const modelYear: number | undefined = params?.modelYear;
    const vehicleType: string | undefined = params?.vehicleType;

    /* Valid params object */
    const typeofParams = getTypeof(params);
    if (typeofParams !== 'object') {
      return Promise.reject(
        new Error(
          `${action}, "params" argument must be of type object, got: ` +
            `<${typeofParams}> ${params}`
        )
      );
    }
    /* Required make param of type string */
    const typeofMake = getTypeof(make);
    if (typeofMake !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.make" argument is required and must be of type string, got: ` +
            `<${typeofMake}> ${make}`
        )
      );
    }
    /* At least one of modelYear or vehicleType params is required */
    if (!modelYear && !vehicleType) {
      return Promise.reject(
        new Error(
          `${action}, either one of "params.modelYear" or "params.vehicleType" is required, got: ` +
            `${modelYear} | ${vehicleType}`
        )
      );
    }
    /* valid modelYear param of type number */
    const typeofModelYear = getTypeof(modelYear);
    if (modelYear && typeofModelYear !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.modelYear" must be of type number, got: ` +
            `<${typeofModelYear}> ${modelYear}`
        )
      );
    }
    /* valid vehicleType param of type string */
    const typeofVehicleType = getTypeof(vehicleType);
    if (vehicleType && typeofVehicleType !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.vehicleType" must be of type string, got: ` +
            `<${typeofVehicleType}> ${vehicleType}`
        )
      );
    }

    /* Beginning of the the actionUrl */
    let actionUrl = `${action}/make/${params.make}/`;

    /* Append params.modelYear and params.vehicleType to the actionUrl, at least one is required by the API */
    if (modelYear && vehicleType) {
      actionUrl += `modelYear/${modelYear}/vehicleType/${vehicleType}`;
    } else if (modelYear) {
      actionUrl += `modelYear/${modelYear}`;
    } else {
      actionUrl += `vehicleType/${vehicleType}`;
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString().catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${actionUrl}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetModelsForMakeYearResponse}.Results' array.
 *
 * @memberof module:api/actions/GetModelsForMakeYear
 * @alias GetModelsForMakeYearResults
 */
export type GetModelsForMakeYearResults = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

/**
 * Type representing the complete response returned by the GetModelsForMakeYear API Action.
 *
 * @memberof module:api/actions/GetModelsForMakeYear
 * @alias GetModelsForMakeYearResponse
 */
export type GetModelsForMakeYearResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetModelsForMakeYearResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
