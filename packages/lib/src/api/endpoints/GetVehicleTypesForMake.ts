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
 * GetVehicleTypesForMake returns all the Vehicle Types in the vPIC dataset for a specified Make,
 * whose name is LIKE the make name in the vPIC Dataset.
 *
 * - `makeName` can be a partial name, or a full name for more specificity
 *   (e.g., "Merc", "Mercedes Benz", etc.)
 *
 * @async
 * @param {string} makeName - Name of the vehicle make to search
 * @returns {(Promise<NhtsaResponse<GetVehicleTypesForMakeResults>>)} - Api Response object
 */

export const GetVehicleTypesForMake = async (
  makeName: string
): Promise<NhtsaResponse<GetVehicleTypesForMakeResults>> => {
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

    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}/${makeName}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleTypesForMake endpoint
 *
 * @alias GetVehicleTypesForMakeResults
 */
export type GetVehicleTypesForMakeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
