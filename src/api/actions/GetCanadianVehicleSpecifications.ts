/**
 * @module api/actions/GetCanadianVehicleSpecifications
 * @category Actions
 * @description GetCanadianVehicleSpecifications NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetCanadianVehicleSpecifications](module-api_actions_GetCanadianVehicleSpecifications.GetCanadianVehicleSpecifications.html)
 * >
 * > **Types**
 * > - Type: [GetCanadianVehicleSpecificationsResponse](#GetCanadianVehicleSpecificationsResponse)
 * > - Type: [GetCanadianVehicleSpecificationsResults](#GetCanadianVehicleSpecificationsResults)
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
export class GetCanadianVehicleSpecifications extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * The Canadian Vehicle Specifications (CVS) consists of a database of original vehicle dimensions,
   * used primarily in collision investigation and reconstruction, combined with a search engine.
   *
   * The database is compiled annually by the Collision Investigation and Research Division of Transport Canada.
   * Visit official [Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
   * page for more details.
   *
   * This API action will return a 404 html error if any of the query parameters in params
   * are missing from the query string. This is the only API action with this behaviour. Therefore,
   * parameters are inserted into the query string as empty strings if not provided by the user.
   *
   * @async
   * @param {object} params - Query Search Parameters to append to the URL.
   * @param {number} params.year - Model year of the vehicle (required) - Number, >= 1971.
   * @param {string} [params.make] - Vehicle's make, like "Honda", "Toyota", etc...
   * @param {string} [params.model] - Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc...
   * @param {string} [params.units] - "Metric" (default), or "US" for United States customary units.
   * @returns {(Promise<GetCanadianVehicleSpecificationsResponse>)} Api Response object.
   */
  async GetCanadianVehicleSpecifications(params: {
    year: number;
    make?: string;
    model?: string;
    units?: string;
  }): Promise<GetCanadianVehicleSpecificationsResponse> {
    const action = 'GetCanadianVehicleSpecifications';

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

    const typeofYear = getTypeof(params.year);
    if (typeofYear !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.year" argument is required and must be of type number, got: ` +
            `<${typeofYear}> ${params.year}`
        )
      );
    }

    const typeofMake = getTypeof(params.make);
    if (params.make && typeofMake !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.make" argument must be of type string, got: ` +
            `<${typeofMake}> ${params.make}`
        )
      );
    }

    const typeofModel = getTypeof(params.model);
    if (params.model && typeofModel !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.model" argument must be of type string, got: ` +
            `<${typeofModel}> ${params.model}`
        )
      );
    }

    const typeofUnits = getTypeof(params.units);
    if (params.units && typeofUnits !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.units" argument must be of type string, got: ` +
            `<${typeofUnits}> ${params.units}`
        )
      );
    }

    /* Set default query parameters to empty strings if not provided by the user */
    const make = params.make || '';
    const model = params.model || '';
    const units = params.units || '';

    const params_ = {
      year: params.year,
      make,
      model,
      units
    };

    /*
     * Build the 'default' query string to be appended to the URL.
     *
     * Additionally, sets the allowEmptyStringValues option (2nd argument) to true because
     * this API action will return a 404 error if any of the query parameters are missing from the query string.
     * This is the only API action with this behaviour ("year" is the only param the user must provide).
     */
    const queryString = await this.buildQueryString(
      params_,
      true
    ).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetCanadianVehicleSpecificationsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetCanadianVehicleSpecifications
 * @alias GetCanadianVehicleSpecificationsResults
 */
export type GetCanadianVehicleSpecificationsResults = {
  Specs: Array<{
    Name: string;
    Value: string;
  }>;
};

/**
 * Type representing the complete response returned by the GetCanadianVehicleSpecifications API Action.
 *
 * @memberof module:api/actions/GetCanadianVehicleSpecifications
 * @alias GetCanadianVehicleSpecificationsResponse
 */
export type GetCanadianVehicleSpecificationsResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetCanadianVehicleSpecificationsResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
