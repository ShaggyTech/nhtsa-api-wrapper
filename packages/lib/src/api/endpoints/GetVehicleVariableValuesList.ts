/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { IArgToValidate, NhtsaResponse } from '../../types'

/**
 * GetVehicleVariableValuesList provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
 *
 * This only applies to "Look up" type of variables
 * - Search parameter (`variableValue`) can either be a:
 *   - Variable Name (ex: "battery type"; must use full name, not just part of it),
 *   - or Variable ID (number)
 *
 * @async
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

    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}/${variableValue}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleVariableValuesList endpoint
 *
 * @alias GetVehicleVariableValuesListResults
 */
export type GetVehicleVariableValuesListResults = {
  ElementName: string
  Id: number
  Name: string
}
