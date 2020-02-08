/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetModelsForMake extends Fetch {
  /**
   * This returns the Models in the vPIC dataset for a specified Make whose name is LIKE the Make in vPIC Dataset.
   * Make can be a partial, or a full for more specificity (e.g., "Harley", "Harley Davidson", etc.)
   */
  async GetModelsForMake(makeName: string): Promise<NhtsaResponse | Error> {
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
