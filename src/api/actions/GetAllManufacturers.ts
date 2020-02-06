/* Types */
import { RequestManufacturerType, NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetAllManufacturers extends Fetch {
  /**
   * This provides a list of all the Manufacturers available in vPIC Dataset.
   * Parameter "ManufacturerType" allows to filter the list based on manufacturer type,
   * (Incomplete Vehicles, Completed Vehicle Manufacturer, Incomplete Vehicle Manufacturer,
   * Intermediate Manufacturer, Final-Stage Manufacturer, Alterer, or any part of it), optional.
   * You can get a list of all manufacturer types with this API call:
   * "/api/vehicles/getvehiclevariablevalueslist/Manufacturer Type"
   * Results are provided in pages of 100 items.
   * Use parameter "page" to specify 1-st (default), 2nd, 3rd, ...Nth ... page.
   */
  async GetAllManufacturers(
    params: {
      manufacturerType?: RequestManufacturerType;
      page?: string | number;
    } = {}
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetAllManufacturers';

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
