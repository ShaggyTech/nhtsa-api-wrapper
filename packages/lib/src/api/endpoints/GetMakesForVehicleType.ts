import { catchInvalidArguments, rejectWithError, useFetch } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetMakesForVehicleType` returns all the Makes in the vPIC dataset for a specified vehicle type
 * (`typeName`), whose name is LIKE the vehicle type name in vPIC Dataset.
 *
 * `typeName` can be a partial name, or a full name for more specificity, e.g., "Vehicle", "Moto",
 * "Low Speed Vehicle", etc.
 *
 * @param {string} typeName - A partial or full vehicle type name
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

    const { createUrl, get } = useFetch()
    createUrl({
      endpointName,
      path: typeName,
    })

    return get()
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
