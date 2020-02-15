/* Parent Class */
import { Fetch } from '../Fetch';

/**
 * Implemented by [NHTSA](NHTSA.html#NHTSA).
 *
 * Extends [api/Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export class GetVehicleVariableValuesList extends Fetch {
  /**
   * This provides a list of all the accepted values for a given variable that are stored in vPIC dataset.
   *
   * This applies to only "Look up" type of variables.
   * - `variableValue` can either be a:
   *   - Variable Name ("battery type" in first example, please use full name, not just part of it),
   *   - or Variable ID ("2" in second example).
   *
   * @async
   * @param {string|number} variableValue - The variable you want to get a values list of.
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  async GetVehicleVariableValuesList(
    variableValue: string | number
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetVehicleVariableValuesList';

    /* Runtime typechecking */
    if (!variableValue) {
      return Promise.reject(
        new Error(
          `${action}, variableValue is required and must be a string or number, got: ${variableValue}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${variableValue}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
