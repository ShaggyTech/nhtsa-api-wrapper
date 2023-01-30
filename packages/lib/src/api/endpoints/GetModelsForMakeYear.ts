/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  getTypeof,
  rejectWithError,
  useFetch,
  validateURI,
} from '../../utils'
/* Types */
import type { NhtsaResponse, IArgToValidate, AtLeastOne } from '../../types'

/**
 * GetModelsForMakeYear returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *   - `make` is required. It can be a partial, or a full name for more specificity
 *     (e.g., "Harley", "Harley Davidson", etc.)
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 *
 * @param {string} make - Make name to search
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995), required if params.vehicleType is not provided
 * @param {string} [params.vehicleType] - String representing the vehicle type to search, required if params.modelYear is not provided
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */

export const GetModelsForMakeYear = async (
  make: string,
  params: AtLeastOne<{
    modelYear?: number | string
    vehicleType?: string
  }>
): Promise<NhtsaResponse<GetModelsForMakeYearResults>> => {
  const endpointName = 'GetModelsForMakeYear'
  const modelYear = params?.modelYear
  const vehicleType = params?.vehicleType

  /* Validate the arguments */
  try {
    const atLeastOneArgs: IArgToValidate[] = [
      {
        name: 'params.modelYear',
        types: ['number', 'string'],
        value: modelYear,
      },
      { name: 'params.vehicleType', types: ['string'], value: vehicleType },
    ]
    const args: IArgToValidate[] = [
      { name: 'make', required: true, types: ['string'], value: make },
      { name: 'params', required: true, types: ['object'], value: params },
      ...atLeastOneArgs,
    ]

    catchInvalidArguments({ args })
    catchInvalidArguments({ args: atLeastOneArgs, mode: 'atLeast' })

    /* Special case: no illegal URI characters in the arg values as they aren't ran through createQueryString for this endpoint */
    args.forEach((arg) => {
      if (getTypeof(arg.value) === 'string') {
        arg.value = validateURI(arg.value as string)
      }
    })

    let path = `${endpointName}/make/${make}/`

    if (modelYear) {
      path += `modelYear/${modelYear}`
    }
    if (vehicleType) {
      path += `${modelYear ? '/' : ''}vehicleType/${vehicleType}`
    }

    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${path}${queryString}`

    return await useFetch()
      .get<GetModelsForMakeYearResults>(url)
      .then((response) => response)
  } catch (error) {
    return rejectWithError(error)
  }
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
