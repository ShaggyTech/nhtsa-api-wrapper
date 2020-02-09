/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetCanadianVehicleSpecifications extends Fetch {
  /**
   * This returns the Models in the vPIC dataset for a specified Model Year and Make whose name is LIKE the Make in vPIC Dataset.
   *   - params.makeId is a number
   *   - params.modelYear is a number (greater than 1995)
   *   - params.vehicleType can be a partial name, or a full name for more specificity
   *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
   */
  async GetCanadianVehicleSpecifications(
    params: {
      year: number;
      make?: string;
      model?: string;
      units?: string;
    } = {
      year: undefined as any
    }
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetCanadianVehicleSpecifications';

    /* Runtime gatekeeping */
    if (!params.year) {
      return Promise.reject(
        new Error(`${action}, params.year is required, got: ${params.year}`)
      );
    }

    if (!params.make) params.make = '';
    if (!params.model) params.model = '';
    if (!params.units) params.units = '';

    /* Build the 'default' query string to be appended to the URL
     * Additionally, set the allowEmptyStringValues option (2nd argument) to true
     * This API action will return a 404 error if any of the query parameters in params
     * are missing from the query string. This is the only API action with this behaviour.
     * "year" is the only param the user must provide.
     */
    const queryString = await this.buildQueryString(
      params,
      true
    ).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${action}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
