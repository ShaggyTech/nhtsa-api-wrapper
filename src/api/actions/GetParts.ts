/**
 * @module api/actions/GetParts
 * @category Actions
 * @description GetParts NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [GetParts](module-api_actions_GetParts.GetParts.html)
 * >
 * > **Types**
 * > - Type: [GetPartsResponse](#GetPartsResponse)
 * > - Type: [GetPartsResults](#GetPartsResults)
 *
 */

/* Parent Class and Fetch Types */
import {
  Fetch /* Class */,
  FetchConfig /* Type */,
  FetchResponse /* Type */,
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
export class GetParts extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This provides a list of ORGs with letter date in the given range of the dates
   * and with specified Type (`params.type`) of ORG.
   * - Up to 1000 results will be returned at a time.
   * - Get the next page by incrementing the `params.page` query parameter.
   * - All query `params` are optional.
   *
   * @async
   * @param {object} [params] - Query Search Parameters to append to the URL.
   * @param {number} [params.type] - Specified type of ORG to search.
   * @param {string} [params.fromDate] - Start date of search query.
   * @param {string} [params.toDate] - End date of search query.
   * @param {number} [params.page] - Which page number of results to request (100 results per page).
   * @returns {(Promise<GetPartsResponse>)} Api Response object.
   */
  async GetParts(params?: {
    type?: number;
    fromDate?: string;
    toDate?: string;
    page?: number;
  }): Promise<GetPartsResponse> {
    const action = 'GetParts';

    const type: number | undefined = params?.type;
    const fromDate: string | undefined = params?.fromDate;
    const toDate: string | undefined = params?.toDate;
    const page: number | undefined = params?.page;

    /* Valid params object */
    const typeofParams = getTypeof(params);
    if (params && typeofParams !== 'object') {
      return Promise.reject(
        new Error(
          `${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`
        )
      );
    }

    /* valid params.type of type number */
    const typeofType = getTypeof(type);
    if (type && typeofType !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.type" argument must be of type number, got: <${typeofType}> ${type}`
        )
      );
    }

    /* valid params.fromDate of type string */
    const typeofFromDate = getTypeof(fromDate);
    if (fromDate && typeofFromDate !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.fromDate" argument must be of type string, got: <${typeofFromDate}> ${fromDate}`
        )
      );
    }

    /* valid params.toDate of type number */
    const typeofToDate = getTypeof(toDate);
    if (toDate && typeofToDate !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.toDate" argument must be of type string, got: <${typeofToDate}> ${toDate}`
        )
      );
    }

    /* valid params.page of type number */
    const typeofPage = getTypeof(page);
    if (page && typeofPage !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.page" argument must be of type number, got: <${typeofPage}> ${page}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch((err) =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then((response) => response)
      .catch((err) =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link GetPartsResponse}.Results' array.
 *
 * @memberof module:api/actions/GetParts
 * @alias GetPartsResults
 */
export type GetPartsResults = {
  CoverLetterURL: string;
  LetterDate: string;
  ManufacturerId: number;
  ManufacturerName: string;
  ModelYearFrom: string;
  ModelYearTo: string;
  Name: string;
  Type: string;
  URL: string;
};

/**
 * Type representing the complete response returned by the GetParts API Action.
 *
 * @memberof module:api/actions/GetParts
 * @alias GetPartsResponse
 */
export type GetPartsResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<GetPartsResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
