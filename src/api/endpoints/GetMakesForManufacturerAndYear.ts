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
 * GetMakesForManufacturerAndYear returns all the Makes in the vPIC dataset for a specified manufacturer,
 * and whose Year From and Year To range cover the specified year.
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
 *   (it accepts a partial manufacturer name as an input)
 * - Multiple results are returned in case of multiple matches
 * - Manufacturer can be idenfitied by Id, a partial name, or a full name
 *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
 *
 * @async
 * @param {(number|string)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @param {Object} params - Query Search Parameters to append to the URL
 * @param {(number|string)} params.year - Model year of the vehicle - Number, >= 2016
 * @returns {(Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>)} - Api Response object
 */

export const GetMakesForManufacturerAndYear = async (
  manufacturer: string,
  params: {
    year: number | string
  }
): Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>> => {
  const action = 'GetMakesForManufacturerAndYear'

  /* Runtime type guards against user provided args*/
  const typeofManufacturer = getTypeof(manufacturer)
  if (!manufacturer || typeofManufacturer !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "manufacturer" argument is required and must be of type number or string, got <${typeofManufacturer}> ${manufacturer}`
    )
  }

  const typeofParams = getTypeof(params)
  if (!params || (params && typeofParams !== 'object')) {
    return rejectWithError(
      `${action}, "params" argument is required and must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofYear = getTypeof(params.year)
  if (!params.year || typeofYear !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.year" is required and must be of type number or string, got: <${typeofYear}> ${params.year}`
    )
  }

  /* Build the query string to be appended to the URL*/
  const queryString = await makeQueryString(params).catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${manufacturer}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetMakesForManufacturerAndYearResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetMakesForManufacturerAndYear endpoint
 *
 * @alias GetMakesForManufacturerAndYearResults
 */
export type GetMakesForManufacturerAndYearResults = {
  MakeId: number
  MakeName: string
  MfrId: number
  MfrName: string
}
