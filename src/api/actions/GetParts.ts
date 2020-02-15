/* Parent Class */
import { Fetch } from '../Fetch';

/**
 * Implemented by [NHTSA](NHTSA.html#NHTSA).
 *
 * Extends [api/Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export class GetParts extends Fetch {
  /**
   * This provides a list of ORGs with letter date in the given range of the dates and with specified `params.type` of ORG.
   * - Up to 1000 results will be returned at a time.
   * - Get the next page by incrementing the `params.page` query parameter.
   * - All query `params` are optional.
   *
   * @async
   * @param {object} params - Query Search Parameters to append to the URL.
   * @param {string|number} [params.type] - Specified type of ORG to search.
   * @param {string} [params.fromDate] - Start date of search query.
   * @param {string} [params.toDate] - End date of search query.
   * @param {string|number} [params.page] - Page number of results to request (100 results per page).
   * @returns {(Promise<module:api.ApiResponse | Error>)} Api Response object.
   */
  async GetParts(
    params: {
      type?: string | number;
      fromDate?: string;
      toDate?: string;
      page?: string | number;
    } = {}
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'GetParts';

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
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
