/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetWMIsForManufacturer extends Fetch {
  /**
   * Provides information on the all World Manufacturer Identifier (WMI) for a specified Manufacturer.
   * Only WMI registered in vPICList are displayed.
   */
  async GetWMIsForManufacturer(
    manufacturer: string
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetWMIsForManufacturer';

    /* Runtime typechecking */
    if (getTypeof(manufacturer) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, manufacturer argument is required and must be a string, got: ${manufacturer}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
