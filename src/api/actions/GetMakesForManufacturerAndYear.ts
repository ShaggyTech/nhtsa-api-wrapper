/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetMakesForManufacturerAndYear extends Fetch {
  /**
   * This returns all the Makes in the vPIC dataset for a specified manufacturer,
   * and whose Year From and Year To range cover the specified year.
   * If supplied manufacturer is a number - method will do exact match on Manufacturer's Id.
   * If supplied manufacturer is a string - it will look for manufacturers whose name is LIKE the provided name
   * (it accepts a partial manufacturer name as an input).
   * Multiple results are returned in case of multiple matches.
   * Manufacturer can be idenfitied by Id, a partial name, or a full name
   * (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
   */
  public async GetMakesForManufacturerAndYear(
    manufacturer: string | number,
    params: {
      year: string | number;
    } = { year: undefined as any }
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetMakesForManufacturerAndYear';

    /* Runtime typechecking */
    if (!manufacturer) {
      return Promise.reject(
        new Error(
          `${action}, please provide a valid manufacturer arg, either a number or string, got: ${manufacturer}`
        )
      );
    }
    if (!params.year) {
      return Promise.reject(
        new Error(
          `${action}, please provide a valid year parameter, either a number or string, got params.year: ${params.year}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
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
