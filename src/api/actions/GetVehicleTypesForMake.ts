/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * @category Actions
 * @class GetVehicleTypesForMake
 * @extends {module:api/Fetch.Fetch}
 */
export class GetVehicleTypesForMake extends Fetch {
  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make, whose name is LIKE the make name in vPIC Dataset.
   * - `makeName` can be a partial name, or a full name for more specificity
   *   (e.g., "Merc", "Mercedes Benz", etc.).
   *
   * @async
   * @memberof GetVehicleTypesForMake
   *
   * @param {string} makeName Name of the vehicle make to search
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async GetVehicleTypesForMake(
    makeName: string
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetVehicleTypesForMake';

    /* Runtime typechecking */
    if (getTypeof(makeName) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, makeName is required and must be a string, got: ${makeName}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
