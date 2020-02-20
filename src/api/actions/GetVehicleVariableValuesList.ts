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
export class GetVehicleVariableValuesList extends Fetch {
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
   * @returns {(Promise<GetVehicleVariableValuesListResponse | Error>)} Api Response object.
   */
  async GetVehicleVariableValuesList(
    variableValue: string | number
  ): Promise<GetVehicleVariableValuesListResponse | Error> {
    const action = 'GetVehicleVariableValuesList';

    /* Runtime typechecking */
    const typeofVariableValue = getTypeof(variableValue);
    if (typeofVariableValue !== 'string' && typeofVariableValue !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "variableValue" is required and must be of type string or number, got: ` +
            `<${typeofVariableValue}> ${variableValue}`
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
    const url = `${this.baseUrl}/${action}/${variableValue}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
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
