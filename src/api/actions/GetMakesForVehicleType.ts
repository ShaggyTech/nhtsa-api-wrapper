/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * @category Actions
 * @class GetMakesForVehicleType
 * @extends {module:api/Fetch.Fetch}
 */
export class GetMakesForVehicleType extends Fetch {
  /**
   * This returns all the Makes in the vPIC dataset for a specified vehicle type,
   * whose name is LIKE the vehicle type name in vPIC Dataset.
   * - Vehicle `typeName` can be a partial name, or a full name for more specificity
   *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
   *
   * @async
   * @memberof GetMakesForVehicleType
   *
   * @param {string} typeName A partial or full vehicle type name
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async GetMakesForVehicleType(
    typeName: string
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetMakesForVehicleType';

    if (getTypeof(typeName) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, typeName is required and must be a string, got: ${typeName}`
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
    const url = `${this.baseUrl}/${action}/${typeName}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
