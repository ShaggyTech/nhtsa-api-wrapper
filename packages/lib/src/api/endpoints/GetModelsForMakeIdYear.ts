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
import type { NhtsaResponse, AtLeastOne } from '../../types'

/**
 * This returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *
 * `params.makeId` is a number and is a required query parameter
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * You can get `makeId`s by:
 * - using `DecodeVinValues` endpoint, via `MakeID` in the Results
 * - using `DecodeVin` endpoint, via `ValueId` in the object containing `Variable: "Make"`
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} params.makeId - Make ID to search
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdYearResults>>)} Api Response object
 */

export const GetModelsForMakeIdYear = async (
  params: {
    makeId: number | string
  } & AtLeastOne<{
    modelYear?: number | string
    vehicleType?: string
  }>
): Promise<NhtsaResponse<GetModelsForMakeIdYearResults>> => {
  const action = 'GetModelsForMakeIdYear'

  const makeId: number | string = params?.makeId
  const modelYear: number | string | undefined = params?.modelYear
  const vehicleType: string | undefined = params?.vehicleType

  /* Check for required params existence */
  const typeofParams = getTypeof(params)
  if (!params || (params && typeofParams !== 'object')) {
    return rejectWithError(
      `${action}, "params" argument is required and must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  /* Required params.makeId */
  const typeofMakeId = getTypeof(makeId)
  if (!makeId || typeofMakeId !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.makeId" is required and must be of type number or string, got: <${typeofMakeId}> ${makeId}`
    )
  }

  /* At least one of modelYear or vehicleType is required */
  if (!modelYear && !vehicleType) {
    return rejectWithError(
      `${action}, must provide either "params.modelYear" or "params.vehicleType", got: { modelYear: ${modelYear}, vehicleType: ${vehicleType} }`
    )
  }

  /* Runtime type guards against user provided args*/
  const typeofModelYear = getTypeof(modelYear)
  if (params?.modelYear && typeofModelYear !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.modelYear" must be of type number or string, got: <${typeofModelYear}> ${modelYear}`
    )
  }

  const typeofVehicleType = getTypeof(vehicleType)
  if (vehicleType && typeofVehicleType !== 'string') {
    return rejectWithError(
      `${action}, "params.vehicleType" must be of type string, got: <${typeofVehicleType}> ${vehicleType}`
    )
  }

  /* Beginning of the the actionUrl string */
  let actionUrl = `${action}/makeId/${makeId}/`

  /* Append params.modelYear and params.vehicleType to the actionUrl, at least one is required by the API */
  if (modelYear && vehicleType) {
    actionUrl += `modelYear/${modelYear}/vehicleType/${vehicleType}`
  } else if (modelYear) {
    actionUrl += `modelYear/${modelYear}`
  } else {
    actionUrl += `vehicleType/${vehicleType}`
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${actionUrl}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetModelsForMakeIdYearResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeIdYear endpoint
 *
 * @alias GetModelsForMakeIdYearResults
 */
export type GetModelsForMakeIdYearResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
