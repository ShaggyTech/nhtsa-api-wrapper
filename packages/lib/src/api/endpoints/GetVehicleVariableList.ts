/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import { makeQueryString, rejectWithError, useFetch } from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

/**
  /**
   * GetVehicleVariableList provides a list of all the Vehicle related variables that are in the vPIC dataset.
   * - Information on the name, description and the type of the variable is provided.
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults>>)} - Api Response object
 */

export const GetVehicleVariableList = async (): Promise<
  NhtsaResponse<GetVehicleVariableListResults>
> => {
  const action = 'GetVehicleVariableList'

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetVehicleVariableListResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleVariableList endpoint
 *
 * @alias GetVehicleVariableListResults
 */
export type GetVehicleVariableListResults = {
  DataType: 'decimal' | 'int' | 'lookup' | 'string'
  Description: string
  GroupName: string | null
  ID: number
  Name: string
}
