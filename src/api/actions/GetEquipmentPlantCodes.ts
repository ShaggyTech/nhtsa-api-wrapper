/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetEquipmentPlantCodes extends Fetch {
  /**
   * Returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
   * - params.year:
   *   - Only years 2016 and above are supported
   * - params.equipmentType:
   *   - 1 (Tires)
   *   - 3 (Brake Hoses)
   *   - 13 (Glazing)
   *   - 16 (Retread)
   * - params.reportType:                                                                                  |
   *   - New (The Equipment Plant Code was assigned during the selected year)
   *   - Updated (The Equipment Plant data was modified during the selected year)
   *   - Closed (The Equipment Plant is no longer Active)
   *   - All (All Equipment Plant Codes regardless of year, including their status (active or closed))
   */
  public async GetEquipmentPlantCodes(
    params: {
      year: number;
      equipmentType: 1 | 3 | 13 | 16;
      reportType: 'New' | 'Updated' | 'Closed' | 'All';
    } = {
      year: undefined as any,
      equipmentType: undefined as any,
      reportType: undefined as any
    }
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetEquipmentPlantCodes';

    /* Runtime typechecking */
    if (!params.year) {
      return Promise.reject(
        new Error(
          `${action}, "year" parameter is required, got: ${params.year}`
        )
      );
    }
    if (!params.equipmentType) {
      return Promise.reject(
        new Error(
          `${action}, "equipmentType" parameter is required, got: ${params.equipmentType}`
        )
      );
    }
    if (!params.reportType) {
      return Promise.reject(
        new Error(
          `${action}, "reportType" parameter is required, got: ${params.reportType}`
        )
      );
    }

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
