/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  argHandler,
  getTypeof,
  makeQueryString,
  rejectWithError,
  useFetch,
  validateArgument,
} from '../../utils'
/* Types */
import type { NhtsaResponse, RequireAtLeastOne } from '../../types'

/**
 * GetModelsForMakeYear returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *   - `params.make` is required. It can be a partial, or a full name for more specificity
 *     (e.g., "Harley", "Harley Davidson", etc.)
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 *
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {string} params.make - Make name to search
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */

export const GetModelsForMakeYear = async (
  params: {
    make: string
  } & RequireAtLeastOne<
    {
      modelYear?: number | string
      vehicleType?: string
    },
    'modelYear' | 'vehicleType'
  >
): Promise<NhtsaResponse<GetModelsForMakeYearResults>> => {
  /* 
    {

    }
  */

  const action = 'GetModelsForMakeYear'

  const make: string = params?.make
  const modelYear: number | string | undefined = params?.modelYear
  const vehicleType: string | undefined = params?.vehicleType

  // // const typeofParams = getTypeof(params)
  // if (!params || (params && getTypeof(params) !== 'object')) {
  try {
    validateArgument({
      caller: action,
      name: 'params',
      required: true,
      types: ['object'],
      value: params,
    })

    validateArgument({
      caller: action,
      name: 'params.make',
      required: true,
      types: ['string'],
      value: params.make,
    })
  } catch (error) {
    return rejectWithError(error.message)
  }
  // }

  /* Required params.makeId */
  // const typeofMake = getTypeof(make)
  // if (!make || typeofMake !== 'string') {
  //   return rejectWithError(
  //     `${action}, "params.make" is required and must be of type string, got: <${typeofMake}> ${make}`
  //   )
  // }

  /* At least one of modelYear or vehicleType is required */
  if (!modelYear && !vehicleType) {
    return rejectWithError(
      `${action}, must provide either "params.modelYear" or "params.vehicleType" or both, got: { modelYear: ${modelYear}, vehicleType: ${vehicleType} }`
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
  let path = `${action}/make/${make}/`

  /* Append params.modelYear and params.vehicleType to the actionUrl, at least one is required by the API */
  if (modelYear && vehicleType) {
    path += `modelYear/${modelYear}/vehicleType/${vehicleType}`
  } else if (modelYear) {
    path += `modelYear/${modelYear}`
  } else {
    path += `vehicleType/${vehicleType}`
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${path}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetModelsForMakeYearResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeYear endpoint
 *
 * @alias GetModelsForMakeYearResults
 */
export type GetModelsForMakeYearResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
