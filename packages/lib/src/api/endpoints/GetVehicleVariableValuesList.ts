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
 * GetVehicleVariableValuesList provides a list of all the accepted values for a given variable that are stored in the vPIC dataset.
 *
 * This only applies to "Look up" type of variables
 * - Search parameter (`variableValue`) can either be a:
 *   - Variable Name (ex: "battery type"; must use full name, not just part of it),
 *   - or Variable ID (number)
 *
 * @async
 * @param {(number|string)} variableValue - The variable you want to get a values list of
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableValuesListResults>>)} - Api Response object
 */

export const GetVehicleVariableValuesList = async (
  variableValue: number | string
): Promise<NhtsaResponse<GetVehicleVariableValuesListResults>> => {
  const action = 'GetVehicleVariableValuesList'

  /* Runtime type guards against user provided args*/
  const typeofVariableValue = getTypeof(variableValue)
  if (!variableValue || !['number', 'string'].includes(typeofVariableValue)) {
    return rejectWithError(
      `${action}, "variableValue" argument is required and must be of type number or string, got <${typeofVariableValue}> ${variableValue}`
    )
  }

  /* Encode to a valid URI string (space chars, etc.) if variableValue is a string*/
  variableValue = encodeURI(String(variableValue))

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${variableValue}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetVehicleVariableValuesListResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
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
