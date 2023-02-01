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
 * GetAllManufacturers provides a list of all the Manufacturers available in vPIC Dataset.
 *
 * - `params.manufacturerType` allows the user to filter the list based on manufacturer type
 *   ('Incomplete Vehicles', 'Completed Vehicle Manufacturer', 'Incomplete Vehicle Manufacturer',
 *   'Intermediate Manufacturer', 'Final-Stage Manufacturer', 'Alterer', or any partial match of those strings)
 * - You can get a list of all manufacturer types via `GetVehicleVariableValuesList` endpoint
 *
 * Results are provided in pages of 100 items.
 * - Provide `params.page` to specify (n)th page of results
 *
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {string} [params.manufacturerType] - See method description
 * @param {(string|number)} [params.page] - Specify the page number (results returned 100 at a time)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults>>)} - Api Response object
 */

export const GetAllManufacturers = async (params?: {
  manufacturerType?: string
  page?: string | number
}): Promise<NhtsaResponse<GetAllManufacturersResults>> => {
  const endpointName = 'GetAllManufacturers'

  try {
    const args: IArgToValidate[] = [
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'manufacturerType',
        value: params?.manufacturerType,
        types: ['string'],
      },
      {
        name: 'page',
        value: params?.page,
        types: ['string', 'number'],
      },
    ]

    catchInvalidArguments({ args })

    const queryString = createQueryString(params)
    const url = `${NHTSA_BASE_URL}/${endpointName}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetAllManufacturers endpoint
 *
 * @alias GetAllManufacturersResults
 */
export type GetAllManufacturersResults = {
  Country: string
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: Array<{ IsPrimary?: boolean; Name?: string }>
}
