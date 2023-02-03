import { rejectWithError, useFetch } from '@/utils'
import type { NhtsaResponse } from '@/types'

/**
 * `GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
 * vPIC dataset. Information on the name, description and the type of the variable is provided.
 *
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults>>)} - Api Response object
 */
export const GetVehicleVariableList = async (): Promise<
  NhtsaResponse<GetVehicleVariableListResults>
> => {
  const endpointName = 'GetVehicleVariableList'

  try {
    const { createUrl, get } = useFetch()
    createUrl({
      endpointName,
    })

    return get()
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableList endpoint
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
