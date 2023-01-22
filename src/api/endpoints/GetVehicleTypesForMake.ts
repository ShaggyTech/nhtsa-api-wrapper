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
 * GetVehicleTypesForMake returns all the Vehicle Types in the vPIC dataset for a specified Make,
 * whose name is LIKE the make name in the vPIC Dataset.
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
  const action = 'GetVehicleTypesForMake'

  /* Runtime type guards against user provided args*/
  const typeofMakeName = getTypeof(makeName)
  if (!makeName || typeofMakeName !== 'string') {
    return rejectWithError(
      `${action}, "makeName" argument is required and must be of type string, got <${typeofMakeName}> ${makeName}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${makeName}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetVehicleTypesForMakeResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
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
