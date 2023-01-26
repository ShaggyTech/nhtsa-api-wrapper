/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  getTypeof,
  makeQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

/**
 * DecodeVinExtended is exactly like the DecodeVin endpoint but provides additional information on variables
 * related to other NHTSA programs like
 * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
 * - This will decode the VIN and the decoded output will be made available in the format of Key-value pairs
 * - In the returned 'Results` object:
 *   - The IDs (VariableID and ValueID) represent the unique ID associated with the Variable/Value
 *   - In case of text variables, the ValueID is not applicable
 * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
 *   or older (pre-1980), model year ranges
 *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding
 * - This endpoint also supports partial VIN decoding (VINs that are less than 17 characters)
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary
 *   - Ex: 5UXWX7C5*BA
 *
 * @async
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param {(number|string)} [params.modelYear] - Optional Model Year search parameter
 * @returns {(Promise<NhtsaResponse<DecodeVinExtendedResults>>)} - Api Response object
 */

export const DecodeVinExtended = async (
  vin: string,
  params?: {
    modelYear?: number
  }
): Promise<NhtsaResponse<DecodeVinExtendedResults>> => {
  const action = 'DecodeVinExtended'

  /* Runtime type guards against user provided args*/
  const typeofVin = getTypeof(vin)
  if (!vin || typeofVin !== 'string') {
    return rejectWithError(
      `${action}, "vin" argument is required and must be of type string, got: <${typeofVin}> ${vin}`
    )
  }

  const typeofParams = getTypeof(params)
  if (params && typeofParams !== 'object') {
    return rejectWithError(
      `${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofModelYear = getTypeof(params?.modelYear)
  if (params?.modelYear && typeofModelYear !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.modelYear" must be of type number or string, got: <${typeofModelYear}> ${params.modelYear}`
    )
  }

  /* Build the query string to be appended to the URL*/
  const queryString = await makeQueryString(params).catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${vin}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<DecodeVinExtendedResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeVinExtended endpoint
 *
 * @alias DecodeVinExtendedResults
 */
export type DecodeVinExtendedResults = {
  Value: string | null
  ValueId: string | null
  Variable: string
  VariableId: number
}
