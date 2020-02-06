/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetMakesForVehicleType extends Fetch {
  /**
   * This returns all the Makes in the vPIC dataset for a specified vehicle type,
   * whose name is LIKE the vehicle type name in vPIC Dataset.
   * Vehicle Type name can be a partial name, or a full name for more specificity
   * (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.).
   */
  async GetMakesForVehicleType(
    typeName: string
  ): Promise<NhtsaResponse | Error> {
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
    const url = `${this.baseUrl}/${action}/${typeName}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
