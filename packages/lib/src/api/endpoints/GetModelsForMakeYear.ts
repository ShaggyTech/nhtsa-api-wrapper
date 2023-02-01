/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  encodeQueryStringParams,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { NhtsaResponse, IArgToValidate, AtLeastOne } from '../../types'

/**
 * GetModelsForMakeYear returns the Models in the vPIC dataset for a specified Model Year
 * and Make whose name is LIKE the Make in the vPIC Dataset.
 *   - `params.make` is required. It can be a partial, or a full name for more specificity
 *     (e.g., "Harley", "Harley Davidson", etc.)
 *
 * A minimum of one of the following are required (or a combination of both):
 *   - `params.modelYear` is a number (years >= 1995 are supported)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {string} params.make - Make name to search
 * @param {(string|number)} [params.modelYear] - A number representing the model year to search (greater than 1995), required if params.vehicleType is not provided
 * @param {string} [params.vehicleType] - String representing the vehicle type to search, required if params.modelYear is not provided
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */

export const GetModelsForMakeYear = async (
  params: { make: string } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>
): Promise<NhtsaResponse<GetModelsForMakeYearResults>> => {
  const endpointName = 'GetModelsForMakeYear'

  try {
    /* Validate the arguments */
    const atLeastOne: IArgToValidate[] = [
      {
        name: 'modelYear',
        value: params.modelYear,
        types: ['string', 'number'],
      },
      {
        name: 'vehicleType',
        value: params.vehicleType,
        types: ['string'],
      },
    ]
    const args: IArgToValidate[] = [
      { name: 'params', value: params, required: true, types: ['object'] },
      { name: 'make', value: params.make, required: true, types: ['string'] },
      ...atLeastOne,
    ]

    catchInvalidArguments({ args })
    catchInvalidArguments({ args: atLeastOne, mode: 'atLeast' })

    /*
     * This endpoint requires special logic to handle encoding param values.
     * Params are never run through createQueryString and therefore won't be encoded without this
     */
    const { make, modelYear, vehicleType } = encodeQueryStringParams(params)

    /* Build the URL */
    let url = `${NHTSA_BASE_URL}/${endpointName}/make/${make}/`

    if (modelYear) {
      url += `modelYear/${modelYear}`
    }
    if (vehicleType) {
      url += `${modelYear ? '/' : ''}vehicleType/${vehicleType}`
    }

    url += createQueryString()

    return await useFetch().get(url)
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
