/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetVehicleTypesForMakeId extends Fetch {
  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make
   * whose ID equals the make ID in vPIC Dataset.
   */
  async GetVehicleTypesForMakeId(
    makeID: number
  ): Promise<NhtsaResponse | Error> {
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
    const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
