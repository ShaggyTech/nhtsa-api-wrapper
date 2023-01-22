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
 * @param {(number|string)} [params.page] - Specify the page number (results returned 100 at a time)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults>>)} - Api Response object
 */

export const GetAllManufacturers = async (params?: {
  manufacturerType?: string
  page?: number | string
}): Promise<NhtsaResponse<GetAllManufacturersResults>> => {
  const action = 'GetAllManufacturers'

  /* Runtime type guards against user provided args*/
  const typeofParams = getTypeof(params)
  if (params && typeofParams !== 'object') {
    return rejectWithError(
      `${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofManufacturerType = getTypeof(params?.manufacturerType)
  if (params?.manufacturerType && typeofManufacturerType !== 'string') {
    return rejectWithError(
      `${action}, params.manufacturerType" argument must be of type string, got: <${typeofManufacturerType}> ${params.manufacturerType}`
    )
  }

  const typeofPage = getTypeof(params?.page)
  if (params?.page && typeofPage !== 'number | string') {
    return rejectWithError(
      `${action}, "params.page" argument must be of type number or string, got: <${typeofPage}> ${params.page}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString(params).catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetAllManufacturersResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetAllManufacturers endpoint
 *
 * @alias GetAllManufacturersResults
 */
export type GetAllManufacturersResults = {
  Country: string
  Mfr_CommonName: string
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: Array<{ IsPrimary?: boolean; Name?: string }>
}
