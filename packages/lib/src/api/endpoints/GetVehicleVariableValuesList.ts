import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetVehicleVariableValuesList` provides a list of all the accepted values for a given variable
 * that are stored in the vPIC dataset.
 *
 * If `variableValue` is a string, it must use full name, not just part of it, e.g.,
 * "Battery Type", not "Battery"
 *
 * `variableValue` can be also be a number, which is the ID of the variable, e.g., 1, 2, 3, etc.
 *
 * @param {(string|number)} variableValue - The variable you want to get a values list of
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableValuesListResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
export const GetVehicleVariableValuesList = async (
  variableValue: number | string,
  doFetch = true
): Promise<NhtsaResponse<GetVehicleVariableValuesListResults> | string> => {
  const endpointName = 'GetVehicleVariableValuesList'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'variableValue',
        value: variableValue,
        required: true,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, path: variableValue.toString() })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableValuesList endpoint
 *
 * @alias GetVehicleVariableValuesListResults
 */
export type GetVehicleVariableValuesListResults = {
  ElementName: string
  Id: number
  Name: string
}
