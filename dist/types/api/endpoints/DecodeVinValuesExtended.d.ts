import type { NhtsaResponse } from '../../types';
/**
 * DecodeVinValuesExtended is exactly like the DecodeVinValues endpoint (flat format Results) but provides additional information
 * on variables related to other NHTSA programs like
 * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
 *
 * The results will be made available in a flat file format of a single object containing 'key<string>: value<string>' results.
 *
 * Providing `params.modelYear` allows for the decoding to specifically be done in the current,
 * or older (pre-1980), model year ranges
 *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding
 *
 * This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary.
 *   - Ex: 5UXWX7C5*BA
 *
 * @async
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {(number|string)} [params.modelYear] - Optional Model Year search parameter
 * @returns {(Promise<NhtsaResponse<DecodeVinExtendedResults>>)} - Api Response object
 */
export declare const DecodeVinValuesExtended: (vin: string, params?: {
    modelYear?: number;
}) => Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>;
/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeVinValuesExtended endpoint
 *
 * @alias DecodeVinValuesExtendedResults
 */
export declare type DecodeVinValuesExtendedResults = {
    Value: string | null;
    ValueId: string | null;
    Variable: string;
    VariableId: number;
};
