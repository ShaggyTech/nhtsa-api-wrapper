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

/* Parent Class and Fetch Type */
import { Fetch /* Class */, FetchResponse /* Type */ } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @hideconstructor
 */
export class GetParts extends Fetch {
  /**
   * This provides a list of ORGs with letter date in the given range of the dates
   * and with specified Type (`params.type`) of ORG.
   * - Up to 1000 results will be returned at a time.
   * - Get the next page by incrementing the `params.page` query parameter.
   * - All query `params` are optional.
   *
   * @async
   * @param {object} [params={}] - Query Search Parameters to append to the URL.
   * @param {string|number} [params.type] - Specified type of ORG to search.
   * @param {string} [params.fromDate] - Start date of search query.
   * @param {string} [params.toDate] - End date of search query.
   * @param {string|number} [params.page] - Which page number of results to request (100 results per page).
   * @returns {(Promise<GetPartsResponse | Error>)} Api Response object.
   */
  async GetParts(
    params: {
      type?: string | number;
      fromDate?: string;
      toDate?: string;
      page?: number;
    } = {}
  ): Promise<GetPartsResponse | Error> {
    const action = 'GetParts';

    const type: string | number | undefined = params.type;
    const fromDate: string | undefined = params.fromDate;
    const toDate: string | undefined = params.toDate;
    const page: number | undefined = params.page;

    /* valid params.type of type string or number */
    const typeofType = getTypeof(type);
    if (type && typeofType !== 'string' && typeofType !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.type" must be of type string or number, got: <${typeofType}> ${type}`
        )
      );
    }

    /* valid params.fromDate of type string */
    const typeofFromDate = getTypeof(fromDate);
    if (fromDate && typeofFromDate !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.fromDate" must be of type string, got: <${typeofFromDate}> ${fromDate}`
        )
      );
    }

    /* valid params.toDate of type number */
    const typeofToDate = getTypeof(toDate);
    if (toDate && typeofToDate !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "params.toDate" must be of type number, got: <${typeofToDate}> ${toDate}`
        )
      );
    }

    /* valid params.page of type number */
    const typeofPage = getTypeof(page);
    if (page && typeofPage !== 'number') {
      return Promise.reject(
        new Error(
          `${action}, "params.page" must be of type number, got: <${typeofPage}> ${page}`
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
