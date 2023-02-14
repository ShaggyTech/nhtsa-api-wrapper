import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `DecodeVinExtended` decodes a Vehicle Identification Number (VIN) and returns useful information
 * about the vehicle.
 *
 * This endpoint is similar to `DecodeVin` but returns additional information on variables related
 * to other NHTSA programs like the
 * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa).
 *
 * In the return object, `Results` will be an array with multiple objects containing 'key:value'
 * results. Each object will contain:
 * - "Variable" (variable name) and "Value" (variable value)
 * - "VariableID" and "ValueID" (unique ID associated with the variable/value)
 * - In case of text variables, the "ValueID" is not applicable
 *
 * Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
 * older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
 * the model year is known at the time of decoding, but it is not required.
 *
 * This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
 *   - Ex: 5UXWX7C5*BA
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a `*` could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary
 *
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param [params] - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} [params.modelYear] - Optional Model Year search parameter
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeVinExtendedResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
export const DecodeVinExtended = async (
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<DecodeVinExtendedResults> | string> => {
  const endpointName = 'DecodeVinExtended'

  if (typeof params === 'boolean') {
    doFetch = params
    params = undefined
  }

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

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, path: vin, params })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects returned in the NhtsaResponse 'Results' array of DecodeVinExtended endpoint
 *
 * @alias DecodeVinExtendedResults
 */
export type DecodeVinExtendedResults = {
  Value: string | null
  ValueId: string | null
  Variable: string
  VariableId: number
}
