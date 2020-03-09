/**
 * @module api/actions/DecodeVINValuesBatch
 * @category Actions
 * @description DecodeVINValuesBatch NHSTA Api Action.
 *
 * > **Module Exports**:
 * > - Class: [DecodeVINValuesBatch](module-api_actions_DecodeVINValuesBatch.DecodeVINValuesBatch.html)
 * >
 * > **Types**
 * > - Type: [DecodeVINValuesBatchResponse](#DecodeVINValuesBatchResponse)
 * > - Type: [DecodeVINValuesBatchResults](#DecodeVINValuesBatchResults)
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
export class DecodeVINValuesBatch extends Fetch {
  constructor(userConfig?: FetchConfig) {
    super(userConfig);
  }

  /**
   * This decodes a batch of VINs that are submitted in a standardized format in a string
   * and returns multiple decodes in a flat format.
   *
   * The `inputString` parameter should be in the following format:
   * - `vin , modelYear ; vin , modelYear ; vin , modelYear ...`
   *
   * "modelYear" is optional, the output for each VIN decode is in the same format as produced by the "Decode VIN (flat format)" method.
   *
   * @async
   * @param {string} inputString - A string of Vehicle Identification Numbers (full or partial) following the format listed in the description.
   * @returns {(Promise<DecodeVINValuesBatchResponse | Error>)} - Api Response object.
   */
  async DecodeVINValuesBatch(
    inputString: string
  ): Promise<DecodeVINValuesBatchResponse | Error> {
    const action = 'DecodeVINValuesBatch';

    /* Runtime typechecking */
    const typeofInputString = getTypeof(inputString);
    if (typeofInputString !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, "inputString" argument is required and must be of type string, got: ` +
            `<${typeofInputString}> ${inputString}`
        )
      );
    }

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/`;

    const body = encodeURI(`DATA=${inputString}&format=json`);

    /* Return the result */
    return await this.get(url, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body
    })
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}

/**
 * Type representing the structure of objects found in the '{@link DecodeVINValuesBatchResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeVINValuesBatch
 * @alias DecodeVINValuesBatchResults
 */
export type DecodeVINValuesBatchResults = {
  Value: string | null;
  ValueId: string | null;
  Variable: string;
  VariableId: number;
};

/**
 * Type representing the complete response returned by the DecodeVINValuesBatch API Action.
 *
 * @memberof module:api/actions/DecodeVINValuesBatch
 * @alias DecodeVINValuesBatchResponse
 */
export type DecodeVINValuesBatchResponse = {
  /** A count of the items returned in the Results array. */
  Count: number;
  /** A message describing the Results array. */
  Message: string;
  /** Search terms (VIN, WMI, manufacturer, etc.) used in the request URL. */
  SearchCriteria: string;
  /** The search results returned by the NHSTA API request. */
  Results: Array<DecodeVINValuesBatchResults>;
  /** [Fetch API Response](https://github.github.io/fetch/#Response) properties. */
  FetchResponse: FetchResponse;
};
