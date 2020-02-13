/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * @category Actions
 * @class GetWMIsForManufacturer
 * @extends {module:api/Fetch.Fetch}
 */
export class GetWMIsForManufacturer extends Fetch {
  /**
   * Provides information on the all World Manufacturer Identifier (WMI) for a specified `manufacturer`.
   * - Only WMIs registered in vPICList are displayed.
   *
   * @async
   * @memberof GetWMIsForManufacturer
   *
   * @param {string|number} manufacturer Manufacturer Name (string) or Manufacturer ID (number)
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async GetWMIsForManufacturer(
    manufacturer: string
  ): Promise<import('../types').ApiResponse | Error> {
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

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
