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
 * GetMakesForVehicleType returns all the Makes in the vPIC dataset for a specified vehicle type (`typeName`),
 * whose name is LIKE the vehicle type name in vPIC Dataset.
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
  const action = 'GetMakesForVehicleType'

  /* Runtime type guards against user provided args*/
  const typeofTypeName = getTypeof(typeName)
  if (typeofTypeName !== 'string') {
    return rejectWithError(
      `${action}, "typeName" argument is required and must be of type string, got <${typeofTypeName}> ${typeName}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${typeName}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetMakesForVehicleTypeResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
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
