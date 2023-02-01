/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import { createQueryString, rejectWithError, useFetch } from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

/**
 * GetVehicleVariableList provides a list of all the Vehicle related variables that are in the vPIC dataset.
 *
 * - Information on the name, description and the type of the variable is provided.
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults>>)} - Api Response object
 */

export const GetVehicleVariableList = async (): Promise<
  NhtsaResponse<GetVehicleVariableListResults>
> => {
  const endpointName = 'GetVehicleVariableList'

  try {
    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetVehicleVariableList endpoint
 *
 * @alias GetVehicleVariableListResults
 */
export type GetVehicleVariableListResults = {
  DataType: 'string' | 'int' | 'decimal' | 'lookup'
  Description: string
  GroupName: string | null
  ID: number
  Name: string
}
