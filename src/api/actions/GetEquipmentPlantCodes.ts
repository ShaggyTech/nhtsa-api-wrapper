/**
 * @module api/actions/GetEquipmentPlantCodes
 * @category Actions
 * @description GetEquipmentPlantCodes NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetEquipmentPlantCodes](module-api_actions_GetEquipmentPlantCodes.GetEquipmentPlantCodes.html)
 * >
 * > **Types**
 * > - Type: [GetEquipmentPlantCodesResponse](#GetEquipmentPlantCodesResponse)
 * > - Type: [GetEquipmentPlantCodesResults](#GetEquipmentPlantCodesResults)
 *
 */

/* Parent Class and Fetch Types */
import {
  Fetch /* Class */,
  FetchConfig /* Type */,
  FetchResponse /* Type */
} from '../Fetch';

/* Utility Functions */
import { getTypeof } from '../../utils';

/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export class GetEquipmentPlantCodes extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * Returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
   *
   * `params.year`:
   *  - Only years >= 2016 are supported
   *
   * `params.equipmentType`:
   *  - 1 (Tires)
   *  - 3 (Brake Hoses)
   *  - 13 (Glazing)
   *  - 16 (Retread)
   *
   * `params.reportType`:
   *  - 'New' (The Equipment Plant Code was assigned during the selected year).
   *  - 'Updated' (The Equipment Plant data was modified during the selected year).
   *  - 'Closed' (The Equipment Plant is no longer Active).
   *  - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed)).
   *
   * @async
   * @param {object} params - Query Search Parameters to append to the URL.
   * @param {number} params.year - Model year of the vehicle - Number, >= 2016.
   * @param {number} params.equipmentType - Number equal to 1, 3, 13, or 16.
   * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All'.
   * @returns {(Promise<GetEquipmentPlantCodesResponse>)} Api Response object.
   */
  public async GetEquipmentPlantCodes(params: {
    year: number;
    equipmentType: 1 | 3 | 13 | 16;
    reportType: 'New' | 'Updated' | 'Closed' | 'All';
  }): Promise<GetEquipmentPlantCodesResponse> {
    const action = 'GetEquipmentPlantCodes';

    /* Runtime typechecking */
    const typeofParams = getTypeof(params);
    if (typeofParams !== 'object') {
      return Promise.reject(
        new Error(
          `${action}, "params" argument must be of type object, got: ` +
            `<${typeofParams}> ${params}`
        )
      );
    }

    const typeofYear = getTypeof(params.year);
    if (typeofYear !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.year" argument is required and must be of type number, got: ` +
            `<${typeofYear}> ${params.year}`
        )
      );
    }

    const typeofEquipmentType = getTypeof(params.equipmentType);
    if (typeofEquipmentType !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.equipmentType" argument is required and must be of type number, got: ` +
            `<${typeofEquipmentType}> ${params.equipmentType}`
        )
      );
    }

    const typeofReportType = getTypeof(params.reportType);
    if (typeofReportType !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.reportType" argument is required and must be of type string, got: ` +
            `<${typeofReportType}> ${params.reportType}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetEquipmentPlantCodesResponse}.Results' array.
 *
 * @memberof module:api/actions/GetEquipmentPlantCodes
 * @alias GetEquipmentPlantCodesResults
 */
export type GetEquipmentPlantCodesResults = {
  Address: string;
  City: string;
  Country: string;
  DOTCode: string;
  Name: string;
  OldDotCode: string;
  PostalCode: string;
  StateProvince: string;
  Status: string;
};

/**
 * Type representing the complete response returned by the GetEquipmentPlantCodes API Action.
 *
 * @memberof module:api/actions/GetEquipmentPlantCodes
 * @alias GetEquipmentPlantCodesResponse
 */
export type GetEquipmentPlantCodesResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetEquipmentPlantCodesResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
