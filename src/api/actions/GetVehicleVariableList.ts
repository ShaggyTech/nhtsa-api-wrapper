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
export class GetVehicleVariableList extends Fetch {
  /**
   * This provides a list of all the Vehicle related variables that are in vPIC dataset.
   * - Information on the name, description and the type of the variable is provided.
   *
   * @async
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  public async GetVehicleVariableList(): Promise<
    import('../types').ApiResponse | Error
  > {
    const action = 'GetVehicleVariableList';

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
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
