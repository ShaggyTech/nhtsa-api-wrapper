/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  rejectWithError,
  useFetch,
  validateArgument,
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
 *   - `params.modelYear` is a number (greater than 1995)
 *   - `params.vehicleType` can be a partial name, or a full name for more specificity
 *     (e.g., "Vehicle", "Moto", "Low Speed Vehicle", etc.)
 *
 * @async
 *
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {string} params.make - Make name to search
 * @param {(number|string)} [params.modelYear] - A number representing the model year to search (greater than 1995), required if params.vehicleType is not provided
 * @param {string} [params.vehicleType] - String representing the vehicle type to search, required if params.modelYear is not provided
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeYearResults>>)} Api Response object
 */
export const GetModelsForMakeYear = async (
  params: { make: string } & AtLeastOne<{
    modelYear?: number | string
    vehicleType?: string
  }>
): Promise<NhtsaResponse<GetModelsForMakeYearResults>> => {
  const endpointName = 'GetModelsForMakeYear'

  try {
    /* Validate the arguments */
    const atLeastArgs: IArgToValidate[] = [
      {
        name: 'modelYear',
        types: ['number', 'string'],
        value: params.modelYear,
      },
      {
        name: 'vehicleType',
        types: ['string'],
        value: params.vehicleType,
      },
    ]
    const args: IArgToValidate[] = [
      { name: 'params', required: true, types: ['object'], value: params },
      { name: 'make', required: true, types: ['string'], value: params.make },
      ...atLeastArgs,
    ]

    catchInvalidArguments({ args })
    catchInvalidArguments({ args: atLeastArgs, mode: 'atLeast' })

    /*
     * Logic to handle encoding param values.
     * In this endpoint, params values are never called with createQueryString and therefore won't be encoded without this
     */
    type EncodedParams = { [key in keyof typeof params]: string } & {
      [key: string]: string
    }
    const encodedParams = Object.entries(params)
      .filter(([, value]) =>
        validateArgument({
          name: '',
          types: ['string', 'number', 'boolean'],
          value,
          mode: 'boolean',
        })
      )
      .reduce<EncodedParams>((acc, [key, value]) => {
        acc[key] = encodeURIComponent(value)
        return acc
      }, {} as EncodedParams)

    /* final encoded parameters to use */
    const { make, modelYear, vehicleType } = encodedParams

    /* Build the URL */
    let url = `${NHTSA_BASE_URL}/${endpointName}/make/${make}/`
    if (modelYear) {
      url += `modelYear/${modelYear}`
    }
    if (vehicleType) {
      url += `${modelYear ? '/' : ''}vehicleType/${vehicleType}`
    }
    url += createQueryString()

    return await useFetch().get<GetModelsForMakeYearResults>(url)
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
