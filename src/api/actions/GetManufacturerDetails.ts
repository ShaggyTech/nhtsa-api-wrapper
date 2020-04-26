/**
 * @module api/actions/GetManufacturerDetails
 * @category Actions
 * @description GetManufacturerDetails NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetManufacturerDetails](module-api_actions_GetManufacturerDetails.GetManufacturerDetails.html)
 * >
 * > **Types**
 * > - Type: [GetManufacturerDetailsResponse](#GetManufacturerDetailsResponse)
 * > - Type: [GetManufacturerDetailsResults](#GetManufacturerDetailsResults)
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
export class GetManufacturerDetails extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides the details for a specific manufacturer that is requested.
   * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
   * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name,
   *   (it accepts a partial manufacturer name as an input).
   * - Multiple results are returned in case of multiple matches.
   *
   * @async
   * @param {string|number} manufacturer - Manufacturer Name (string) or Manufacturer ID (number).
   * @returns {(Promise<GetManufacturerDetailsResponse>)} Api Response object.
   */
  public async GetManufacturerDetails(
    manufacturer: string | number
  ): Promise<GetManufacturerDetailsResponse> {
    const action = 'GetManufacturerDetails';

    /* Runtime typechecking */
    const typeofManufacturer = getTypeof(manufacturer);
    if (typeofManufacturer !== 'string' && typeofManufacturer !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "manufacturer" argument is required and must be of type string or number, got: ` +
            `<${typeofManufacturer}> ${manufacturer}`
        )
      );
    }

    /* Build the 'default' query string to be appended to the URL*/
    const queryString = await this.buildQueryString().catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${manufacturer}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetManufacturerDetailsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetManufacturerDetails
 * @alias GetManufacturerDetailsResults
 */
export type GetManufacturerDetailsResults = {
  Address: string;
  Address2: string;
  City: string;
  ContactEmail: string;
  ContactFax: string;
  ContactPhone: string;
  Country: string;
  DBAs: string;
  EquipmentItems: Array<object>;
  LastUpdated: string;
  ManufacturerTypes: Array<{
    Name: string;
  }>;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  OtherManufacturerDetails: string;
  PostalCode: string;
  PrimaryProduct: string;
  PrincipalFirstName: string;
  PrincipalLastName: string;
  PrincipalPosition: string;
  StateProvince: string;
  SubmittedName: string;
  SubmittedOn: string;
  SubmittedPosition: string;
  VehicleTypes: Array<{
    GVWRFrom: string;
    GVWRTo: string;
    IsPrimary: boolean;
    Name: string;
  }>;
};

/**
 * Type representing the complete response returned by the GetManufacturerDetails API Action.
 *
 * @memberof module:api/actions/GetManufacturerDetails
 * @alias GetManufacturerDetailsResponse
 */
export type GetManufacturerDetailsResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetManufacturerDetailsResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
