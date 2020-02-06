/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetVehicleTypesForMake extends Fetch {
  /**
   * This returns all the Vehicle Types in the vPIC dataset for a specified Make,
   * whose name is LIKE the make name in vPIC Dataset.
   * Make name can be a partial name, or a full name for more specificity
   * (e.g., "Merc", "Mercedes Benz", etc.).
   */
  async GetVehicleTypesForMake(
    makeName: string
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetVehicleTypesForMake';

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
    const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
