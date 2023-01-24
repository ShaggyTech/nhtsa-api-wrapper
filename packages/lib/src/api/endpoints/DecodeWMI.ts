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
 * DecodeWMI provides information on the World Manufacturer Identifier for a specific WMI code.
 *
 * - `WMI` may be put in as either 3 characters representing VIN position 1-3 or 6 characters
 *   representing VIN positions 1-3 & 12-14. Examples: "JTD" "1T9131"
 *
 * @async
 * @param {string} WMI - World Manufacturer Identifier
 * @returns {(Promise<NhtsaResponse<DecodeWMIResults>>)} - Api Response object
 */

export const DecodeWMI = async (
  WMI: string
): Promise<NhtsaResponse<DecodeWMIResults>> => {
  const action = 'DecodeWMI'

  /* Runtime type guards against user provided args*/
  const typeofWMI = getTypeof(WMI)
  if (typeofWMI !== 'string') {
    return rejectWithError(
      `${action}, "WMI" argument is required and must be of type string, got <${typeofWMI}> ${WMI}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${WMI}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<DecodeWMIResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for DecodeWMI endpoint
 *
 * @alias DecodeWMIResults
 */
export type DecodeWMIResults = {
  CommonName: string
  CreatedOn: string
  DateAvailableToPublic: string
  Make: string
  ManufacturerName: string
  ParentCompanyName: string
  URL: string
  UpdatedOn: string
  VehicleType: string
}
