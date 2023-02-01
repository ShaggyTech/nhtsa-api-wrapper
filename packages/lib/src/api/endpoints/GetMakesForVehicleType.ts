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
 * GetMakesForVehicleType returns all the Makes in the vPIC dataset for a specified vehicle type (`typeName`),
 * whose name is LIKE the vehicle type name in vPIC Dataset.
 *
 * - Vehicle `typeName` can be a partial name, or a full name for more specificity
 *   (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 * @param {string} typeName - A partial or full vehicle type name (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 * @returns {(Promise<NhtsaResponse<GetMakesForVehicleTypeResults>>)} - Api Response object
 */

export const GetMakesForVehicleType = async (
  typeName: string
): Promise<NhtsaResponse<GetMakesForVehicleTypeResults>> => {
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

    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}/${typeName}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetMakesForVehicleType endpoint
 *
 * @alias GetMakesForVehicleTypeResults
 */
export type GetMakesForVehicleTypeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
