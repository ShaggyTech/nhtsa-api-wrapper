/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * @category Actions
 * @class GetModelsForMake
 * @extends {module:api/Fetch.Fetch}
 */
export class GetModelsForMake extends Fetch {
  /**
   * This returns the Models in the vPIC dataset for a specified Make whose name is LIKE the Make in vPIC Dataset.
   * - `makeName` can be a partial, or a full for more specificity (e.g., "Harley", "Harley Davidson", etc.)
   *
   * @async
   * @memberof GetModelsForMake
   *
   * @param {string} makeName Vehicle make name (string)
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async GetModelsForMake(
    makeName: string
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetModelsForMake';

    /* Runtime typechecking */
    if (getTypeof(makeName) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, makeName is required and must be a string, got: ${makeName}`
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
    const url = `${this.baseUrl}/${action}/${makeName}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
