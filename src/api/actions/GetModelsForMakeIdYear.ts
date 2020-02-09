/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/* Types */
import { NhtsaResponse } from '../index';

/* Parent Class */
import { Fetch } from '../Fetch';

export class GetModelsForMakeIdYear extends Fetch {
  /**
   * This returns the Models in the vPIC dataset for a specified Model Year and Make whose name is LIKE the Make in vPIC Dataset.
   *   - params.make can be a partial, or a full for more specificity
   *     (e.g., "Harley", "Harley Davidson", etc.)
   *   - params.modelYear is a number (greater than 1995)
   *   - params.vehicleType can be a partial name, or a full name for more specificity
   *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
   */
  async GetModelsForMakeIdYear(
    params: {
      makeId: number;
      modelYear?: number;
      vehicleType?: string;
    } = {
      makeId: undefined as any
    }
  ): Promise<NhtsaResponse | Error> {
    const action = 'GetModelsForMakeIdYear';

    /*
     * Runtime gatekeeping
     */
    /* Required make param of type string */
    const typeofMakeId = getTypeof(params.makeId);
    if (!params.makeId || typeofMakeId !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, params.makeId is required and must be a string, got: ${params.makeId} of type ${typeofMakeId}`
        )
      );
    }
    /* At least one of modelYear or vehicleType params */
    if (!params.modelYear && !params.vehicleType) {
      return Promise.reject(
        new Error(
          `${action}, one of or both of, params.modelYear or params.vehicleType is required, got params: ${params}`
        )
      );
    }
    /* valid modelYear param of type number */
    const typeofModelYear = getTypeof(params.modelYear);
    if (params.modelYear && typeofModelYear !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, params.modelYear must be of type number, got type of: ${typeofModelYear}`
        )
      );
    }
    /* valid vehicleType param of type string */
    const typeofVehicleType = getTypeof(params.vehicleType);
    if (params.vehicleType && getTypeof(params.vehicleType) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, params.vehicleType must be of type string, got type of: ${typeofVehicleType}`
        )
      );
    }

    /* Build the actionUrl */
    let actionUrl = `${action}/makeId/${params.makeId}/`;

    if (params.modelYear && params.vehicleType) {
      actionUrl += `modelYear/${params.modelYear}/vehicleType/${params.vehicleType}`;
    } else if (params.modelYear) {
      actionUrl += `modelYear/${params.modelYear}`;
    } else {
      actionUrl += `vehicleType/${params.vehicleType}`;
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString({}).catch((err: Error) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );
    const url = `${this.baseUrl}/${actionUrl}${queryString}`;

    return await this.get(url)
      .then(response => {
        return response;
      })
      .catch((err: Error) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
