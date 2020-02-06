/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetParts extends Fetch {
  /**
   * This provides a list of ORGs with letter date in the given range of the dates and with specified Type of ORG.
   * Up to 1000 results will be returned at a time, get the next page by incrementing the "page" parameter.
   */
  async GetParts(
    params: {
      type?: string | number;
      fromDate?: string;
      toDate?: string;
      page?: string | number;
    } = {}
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetParts';

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
