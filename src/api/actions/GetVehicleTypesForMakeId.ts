/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * Implemented by [NHTSA](NHTSA.html#NHTSA).
 *
 * Extends [api/Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export class GetVehicleTypesForMakeId extends Fetch {
  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make whose ID equals the make ID in vPIC Dataset.
   *
   * @async
   * @param {number} makeID - Vehicle make ID.
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  async GetVehicleTypesForMakeId(
    makeID: number
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetVehicleTypesForMakeId';

    /* Runtime typechecking */
    if (getTypeof(makeID) !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, makeID is required and must be a number, got: ${makeID}`
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
    const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
