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
 * GetEquipmentPlantCodes returns assigned Equipment Plant Codes. Can be filtered by Year, Equipment Type and Report Type.
 *
 * ALL parameters are required and endpoint will return 404 if there are any missing keys and/or values
 *
 * `params.year`:
 *  - year >= 2016
 *  - NOTE: It seems API will still respond with years < 2016 but developers state only years >= 2016 are supported
 * `params.equipmentType`:
 *  - 1 (Tires)
 *  - 3 (Brake Hoses)
 *  - 13 (Glazing)
 *  - 16 (Retread)
 * `params.reportType`:
 *  - 'New' (The Equipment Plant Code was assigned during the selected year)
 *  - 'Updated' (The Equipment Plant data was modified during the selected year)
 *  - 'Closed' (The Equipment Plant is no longer Active)
 *  - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed))
 *
 * @async
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} params.year - Year >= 2016 (required)
 * @param {(number|string)} params.equipmentType - Number equal to 1, 3, 13, or 16 (required)
 * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All' (required)
 * @returns {(Promise<NhtsaResponse<GetEquipmentPlantCodesResults>>)} - Api Response object (required)
 */

export const GetEquipmentPlantCodes = async (params: {
  year: number | string
  equipmentType: 1 | 3 | 13 | 16 | '1' | '3' | '13' | '16'
  reportType: 'New' | 'Updated' | 'Closed' | 'All'
}): Promise<NhtsaResponse<GetEquipmentPlantCodesResults>> => {
  const action = 'GetEquipmentPlantCodes'

  /* Runtime type guards against user provided args*/
  const typeofParams = getTypeof(params)
  if (!params || typeofParams !== 'object') {
    return rejectWithError(
      `${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofYear = getTypeof(params.year)
  if (typeofYear !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.year" argument is required and must be of type number or string, got: <${typeofYear}> ${params.year}`
    )
  }

  const typeofEquipmentType = getTypeof(params.equipmentType)
  if (typeofEquipmentType !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.equipmentType" argument is required and must be of type number or string, got: <${typeofEquipmentType}> ${params.equipmentType}`
    )
  }

  const typeofReportType = getTypeof(params.reportType)
  if (typeofReportType !== 'string') {
    return rejectWithError(
      `${action}, "params.reportType" argument is required and must be of type string, got: <${typeofReportType}> ${params.reportType}`
    )
  }

  /* Build the query string to be appended to the URL*/
  const queryString = await makeQueryString(params).catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetEquipmentPlantCodesResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetEquipmentPlantCodes endpoint
 *
 * @alias GetEquipmentPlantCodesResults
 */
export type GetEquipmentPlantCodesResults = {
  Address: string
  City: string
  Country: string
  DOTCode: string
  Name: string
  OldDotCode: string
  PostalCode: string
  StateProvince: string
  Status: string
}
