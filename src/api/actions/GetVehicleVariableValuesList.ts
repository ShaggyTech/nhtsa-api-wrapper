/**
 * @module api/actions/GetVehicleVariableValuesList
 * @category Actions
 * @description GetVehicleVariableValuesList NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetVehicleVariableValuesList](module-api_actions_GetVehicleVariableValuesList.GetVehicleVariableValuesList.html)
 * >
 * > **Types**
 * > - Type: [GetVehicleVariableValuesListResponse](#GetVehicleVariableValuesListResponse)
 * > - Type: [GetVehicleVariableValuesListResults](#GetVehicleVariableValuesListResults)
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
export class GetVehicleVariableValuesList extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
   *
   * This applies to only "Look up" type of variables.
   * - `variableValue` can either be a:
   *   - Variable Name ("battery type" in first example, please use full name, not just part of it),
   *   - or Variable ID (number).
   *
   * @async
   * @param {string|number} variableValue - The variable you want to get a values list of.
   * @returns {(Promise<GetVehicleVariableValuesListResponse>)} Api Response object.
   */
  async GetVehicleVariableValuesList(
    variableValue: string | number
  ): Promise<GetVehicleVariableValuesListResponse> {
    const action = 'GetVehicleVariableValuesList';

    /* Runtime typechecking */
    const typeofVariableValue = getTypeof(variableValue);
    if (typeofVariableValue !== 'string' && typeofVariableValue !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "variableValue" argument is required and must be of type string or number, got: ` +
            `<${typeofVariableValue}> ${variableValue}`
        )
      );
    }
    /* Encode to a valid URI string (space chars, etc.) if variableValue is a string*/
    if (typeofVariableValue === 'string') {
      variableValue = encodeURI(variableValue as string);
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString().catch((err) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${variableValue}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then((response) => response)
      .catch((err) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetVehicleVariableValuesListResponse}.Results' array.
 *
 * @memberof module:api/actions/GetVehicleVariableValuesList
 * @alias GetVehicleVariableValuesListResults
 */
export type GetVehicleVariableValuesListResults = {
  ElementName: string;
  Id: number;
  Name: string;
};

/**
 * Type representing the complete response returned by the GetVehicleVariableValuesList API Action.
 *
 * @memberof module:api/actions/GetVehicleVariableValuesList
 * @alias GetVehicleVariableValuesListResponse
 */
export type GetVehicleVariableValuesListResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetVehicleVariableValuesListResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
