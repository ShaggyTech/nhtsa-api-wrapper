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
import { Fetch, FetchConfig, FetchResponse } from '../Fetch';
/**
 * Implemented by [NHTSA](module-api_NHTSA-NHTSA.html).
 *
 * Extends [api/Fetch.Fetch](module-api_Fetch.Fetch.html).
 *
 * @category Actions
 * @param {FetchConfig} [userConfig] - User configuration options to construct the class with.
 */
export declare class DecodeVINValuesBatch extends Fetch {
    constructor(userConfig?: FetchConfig);
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
    DecodeVINValuesBatch(inputString: string): Promise<DecodeVINValuesBatchResponse | Error>;
}
/**
 * Type representing the structure of objects found in the '{@link DecodeVINValuesBatchResponse}.Results' array.
 *
 * @memberof module:api/actions/DecodeVINValuesBatch
 * @alias DecodeVINValuesBatchResults
 */
export declare type DecodeVINValuesBatchResults = {
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
export declare type DecodeVINValuesBatchResponse = {
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
//# sourceMappingURL=DecodeVINValuesBatch.d.ts.map