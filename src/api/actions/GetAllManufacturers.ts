/* Parent Class */
import { Fetch } from '../Fetch';

/**
 * @category Actions
 * @class GetAllManufacturers
 * @extends {module:api/Fetch.Fetch}
 */
export class GetAllManufacturers extends Fetch {
  /**
   * This provides a list of all the Manufacturers available in vPIC Dataset.
   * - `params.manufacturerType` allows the user to filter the list based on manufacturer type,
   *   ('Incomplete Vehicles', 'Completed Vehicle Manufacturer', 'Incomplete Vehicle Manufacturer',
   *   'Intermediate Manufacturer', 'Final-Stage Manufacturer', 'Alterer', or any partial match of those strings).
   * - You can get a list of all manufacturer types with the following API Action:
   *   `GetVehicleVariableValuesList('manufacturer type')`
   * - Results are provided in pages of 100 items.
   * - Provide a number value for params.page to specify 1st (default), 2nd, 3rd, Nth, etc page.
   *
   * @async
   * @memberof GetAllManufacturers
   *
   * @param {object} params={} Query Search Parameters to append to the URL
   * @param {string} [params.manufacturerType] see method description
   * @param {string|number} [params.page] Specify the page number (results returned 100 at a time)
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async GetAllManufacturers(
    params: {
      manufacturerType?: string;
      page?: string | number;
    } = {}
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetAllManufacturers';

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
