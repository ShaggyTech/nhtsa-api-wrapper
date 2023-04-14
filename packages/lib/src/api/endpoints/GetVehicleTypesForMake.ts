/**
 * @module api/endpoints/GetVehicleTypesForMake
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetVehicleTypesForMake Documentation](/api/get-vehicle-types-for-make)
 * :::
 *
 * `GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
 * whose name is LIKE the make name in the vPIC Dataset.
 *
 * `makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
 * "Mercedes Benz", etc.
 *
 * @param {string} makeName - Name of the vehicle make to search
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetVehicleTypesForMakeResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
function GetVehicleTypesForMake(
  makeName: string,
  doFetch?: true
): Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>

function GetVehicleTypesForMake(
  makeName: string,
  doFetch: false
): Promise<string>

async function GetVehicleTypesForMake(
  makeName: string,
  doFetch = true
): Promise<NhtsaResponse<GetVehicleTypesForMakeResults> | string> {
  const endpointName = 'GetVehicleTypesForMake'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'makeName',
        value: makeName,
        required: true,
        types: ['string'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, path: makeName })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetVehicleTypesForMake }

/**
 * Objects found in the `Results` array of `GetVehicleTypesForMake` endpoint response.
 */
export type GetVehicleTypesForMakeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
