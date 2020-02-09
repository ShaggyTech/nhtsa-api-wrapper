/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetVehicleVariableList extends Fetch {
  /**
   * This provides a list of all the Vehicle related variables that are in vPIC dataset.
   * Information on the name, description and the type of the variable is provided.
   */
  public async GetVehicleVariableList(): Promise<NhtsaResponse | Error> {
    const action = 'GetVehicleVariableList';

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch(err =>
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
