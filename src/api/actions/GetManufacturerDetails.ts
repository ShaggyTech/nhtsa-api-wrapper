/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetManufacturerDetails extends Fetch {
  /**
   * This provides the details for a specific manufacturer that is requested.
   * If supplied manufacturer is a number - method will do exact match on Manufacturer's Id.
   * If supplied manufacturer is a string - it will look for manufacturers whose name is LIKE the provided name,
   * (it accepts a partial manufacturer name as an input).
   * Multiple results are returned in case of multiple matches.
   */
  public async GetManufacturerDetails(
    manufacturer: string | number
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetManufacturerDetails';

    /* Runtime typechecking */
    if (!manufacturer) {
      return Promise.reject(
        new Error(
          `${action}, manufacturer argument is required and must be a string or number, got: ${manufacturer}`
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
