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
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>)} - Api Response object
 */
export const GetVehicleVariableValuesList = async (
  variableValue: number | string
): Promise<NhtsaResponse<GetVehicleVariableValuesListResults>> => {
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

    return useNHTSA().get({ endpointName, path: variableValue.toString() })
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
