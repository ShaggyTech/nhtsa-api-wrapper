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
 * GetMakeForManufacturer returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name
 *   (it accepts a partial manufacturer name as an input)
 * - `manufacturer` name can be a partial name, or a full name for more specificity
 *   (e.g., "988", "honda", "HONDA OF CANADA MFG., INC.", etc.)
 * - Multiple results are returned in case of multiple matches
 *
 * @async
 * @param {(number|string)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults>>)} - Api Response object
 */

export const GetMakeForManufacturer = async (
  manufacturer: number | string
): Promise<NhtsaResponse<GetMakeForManufacturerResults>> => {
  const action = 'GetMakeForManufacturer'

  /* Runtime type guards against user provided args*/
  const typeofManufacturer = getTypeof(manufacturer)
  if (!manufacturer || typeofManufacturer !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "manufacturer" argument is required and must be of type number or string, got <${typeofManufacturer}> ${manufacturer}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${manufacturer}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetMakeForManufacturerResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetMakeForManufacturer endpoint
 *
 * @alias GetMakeForManufacturerResults
 */
export type GetMakeForManufacturerResults = {
  Make_ID: number
  Make_Name: string
  Mfr_Name: string
}
