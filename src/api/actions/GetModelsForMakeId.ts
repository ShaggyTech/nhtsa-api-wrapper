/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetModelsForMakeId extends Fetch {
  /**
   * This returns the Models in the vPIC dataset for a specified Make whose Id is EQUAL the MakeId in vPIC Dataset.
   */
  async GetModelsForMakeId(makeID: number): Promise<NhtsaResponse | Error> {
    const action = 'GetModelsForMakeId';

    /* Runtime typechecking */
    if (getTypeof(makeID) !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, makeID is required and must be a number, got: ${makeID}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}/${makeID}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
