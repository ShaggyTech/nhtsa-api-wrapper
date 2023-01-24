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
 * GetParts provides a list of ORGs with letter date in the given range of the dates
 * and with specified Type (`params.type`) of ORG.
 * - Up to 1000 results will be returned at a time.
 * - Get the next page by incrementing the `params.page` query parameter.
 *
 * All query `params` are optional.
 *
 * `params.type`:
 * - (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
 *   or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)
 * `params.fromDate`:
 * - (optional) ORG's Letter Date should be on or after this date
 * `params.manufacturer`:
 * - (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
 * - if supplied value is a string - it will look for manufacturers whose name is LIKE the provided name
 * - it accepts a partial manufacturer name as an input
 * - multiple results are returned in case of multiple matches
 * - manufacturer name can be a partial name, or a full name for more specificity
 *   (e.g., "988", "HONDA", "HONDA OF CANADA MFG., INC.", etc.)
 * `params.page`:
 *  - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc
 *
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL
 * @param {(number|string)} [params.type] - Specified type of ORG to search
 * @param {string} [params.fromDate] - Start date of search query
 * @param {string} [params.toDate] - End date of search query
 * @param {(number|string)} [params.page] - Which page number of results to request (100 results per page)
 * @returns {(Promise<NhtsaResponse<GetPartsResults>>)} - Api Response object (required)
 */

export const GetParts = async (params?: {
  type?: number | string
  fromDate?: string
  toDate?: string
  page?: number | string
}): Promise<NhtsaResponse<GetPartsResults>> => {
  const action = 'GetParts'

  const type = params?.type
  const fromDate = params?.fromDate
  const toDate = params?.toDate
  const page = params?.page

  /* Runtime type guards against user provided args*/
  const typeofParams = getTypeof(params)
  if (params && typeofParams !== 'object') {
    return rejectWithError(
      `${action}, "params" argument must be of type object, got: <${typeofParams}> ${params}`
    )
  }

  const typeofType = getTypeof(type)
  if (type && typeofType !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.type" argument must be of type number or string, got: <${typeofType}> ${type}`
    )
  }

  const typeoffromDate = getTypeof(fromDate)
  if (fromDate && typeoffromDate !== 'string') {
    return rejectWithError(
      `${action}, "params.fromDate" argument must be of type string, got: <${typeoffromDate}> ${fromDate}`
    )
  }

  const typeofToDate = getTypeof(toDate)
  if (toDate && typeofToDate !== 'string') {
    return rejectWithError(
      `${action}, "params.toDate" argument must be of type string, got: <${typeofToDate}> ${toDate}`
    )
  }

  const typeofPage = getTypeof(page)
  if (page && typeofPage !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "params.page" argument must be of type number or string, got: <${typeofPage}> ${page}`
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
    .get<GetPartsResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetParts endpoint
 *
 * @alias GetPartsResults
 */
export type GetPartsResults = {
  CoverLetterURL: string
  LetterDate: string
  ManufacturerId: number
  ManufacturerName: string
  ModelYearFrom: number | null
  ModelYearTo: number | null
  Name: string
  Type: string
  URL: string
}
