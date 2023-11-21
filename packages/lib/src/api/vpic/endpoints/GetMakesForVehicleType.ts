/**
 * @module api/endpoints/GetMakesForVehicleType
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetMakesForVehicleType Documentation](/guide/vpic/endpoints/get-makes-for-vehicle-type)
 * :::
 *
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
function GetMakesForVehicleType(
  typeName: string,
  doFetch?: true
): Promise<NhtsaResponse<GetMakesForVehicleTypeResults>>

function GetMakesForVehicleType(
  typeName: string,
  doFetch: false
): Promise<string>

async function GetMakesForVehicleType(
  typeName: string,
  doFetch = true
): Promise<NhtsaResponse<GetMakesForVehicleTypeResults> | string> {
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

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path: typeName })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetMakesForVehicleType }

/**
 * Objects found in the `Results` array of `GetMakesForVehicleType` endpoint response.
 */
export type GetMakesForVehicleTypeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
