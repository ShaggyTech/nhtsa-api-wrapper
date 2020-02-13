/* Parent Class */
import { Fetch } from '../Fetch';

/**
 * @category Actions
 * @class GetAllMakes
 * @extends {module:api/Fetch.Fetch}
 */
export class GetAllMakes extends Fetch {
  /**
   * This provides a list of all the Makes available in the vPIC Dataset.
   *
   * @async
   * @memberof GetAllMakes
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  public async GetAllMakes(): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetAllMakes';

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
