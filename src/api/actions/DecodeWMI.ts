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
export class DecodeWMI extends Fetch {
  /**
   * This provides information on the World Manufacturer Identifier for a specific WMI code.
   * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
   *   representing VIN positions 1-3 & 12-14. Example "JTD", "1T9131".
   *
   * @async
   * @param {string} WMI - World Manufacturer Identifier.
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  async DecodeWMI(
    WMI: string
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'DecodeWMI';

    /* Runtime typechecking */
    if (getTypeof(WMI) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, WMI argument is required and must be a string, got: ${WMI}`
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
    const url = `${this.baseUrl}/${action}/${WMI}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
