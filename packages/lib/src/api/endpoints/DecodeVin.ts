/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { IArgToValidate, NhtsaResponse } from '../../types'

/**
 * DecodeVin will decode the VIN and the decoded output will be made available in the format of Key-value pairs.
 *
 * - In the returned `Results` object:
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
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {(string|number)} [params.modelYear] - Optional Model Year search parameter
 * @returns {(Promise<NhtsaResponse<DecodeVinResults>>)} - Api Response object
 */

export const DecodeVin = async (
  vin: string,
  params?: {
    modelYear?: string | number
  }
): Promise<NhtsaResponse<DecodeVinResults>> => {
  const endpointName = 'DecodeVin'

  try {
    const args: IArgToValidate[] = [
      { name: 'vin', value: vin, required: true, types: ['string'] },
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'modelYear',
        value: params?.modelYear,
        types: ['string', 'number'],
      },
    ]

    catchInvalidArguments({ args })

    const queryString = createQueryString(params)
    const url = `${NHTSA_BASE_URL}/${endpointName}/${vin}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeVin endpoint
 *
 * @alias DecodeVinResults
 */
export type DecodeVinResults = {
  Value: string | null
  ValueId: string | null
  Variable: string
  VariableId: number
}
