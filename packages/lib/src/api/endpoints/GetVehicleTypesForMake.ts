/* Utility Functions */
import { catchInvalidArguments, rejectWithError, useFetch } from '../../utils'
/* Types */
import type { IArgToValidate, NhtsaResponse } from '../../types'

/**
 * `GetVehicleTypesForMake` returns all the Vehicle Types in the vPIC dataset for a specified Make,
 * whose name is LIKE the make name in the vPIC Dataset.
 *
 * `makeName` can be a partial name, or a full name for more specificity, e.g., "Merc",
 * "Mercedes Benz", etc.
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

    const { createUrl, get } = useFetch()
    createUrl({
      endpointName,
      path: makeName,
    })

    return get()
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleTypesForMake endpoint
 *
 * @alias GetVehicleTypesForMakeResults
 */
export type GetVehicleTypesForMakeResults = {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
