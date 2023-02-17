/**
 * @module api/endpoints/GetMakesForVehicleType
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
 * (`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.
 *
 * `typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
 * "Low Speed Vehicle", etc.
 *
 * @param {string} typeName - A partial or full vehicle type name
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export const GetMakesForVehicleType = async (
  typeName: string,
  doFetch = true
): Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string> => {
  const endpointName = 'GetMakesForVehicleType'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'typeName',
        value: typeName,
        required: true,
        types: ['string'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, path: typeName })

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
 * Objects found in the NhtsaResponse 'Results' array of GetMakesForVehicleType endpoint
 *
 * @alias GetMakesForVehicleTypeResults
 */
export type GetMakesForVehicleTypeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
