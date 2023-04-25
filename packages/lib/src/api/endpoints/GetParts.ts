/**
 * @module api/endpoints/GetParts
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetParts Documentation](/api/endpoints/get-parts)
 * :::
 *
 * `GetParts` provides a list of ORGs with letter date in the given range of the dates and with
 * specified Type (`params.type`) of ORG.
 *
 * - Up to 1000 results will be returned at a time.
 * - Get the next page by incrementing the `params.page` query parameter.
 *
 * All query `params` are optional.
 *
 * `params.manufacturer`:
 * - (optional) if supplied value is a number - method will do exact match on Manufacturer's Id
 * - if supplied value is a string - it will look for manufacturers whose name is LIKE the provided
 *   name
 * - it accepts a partial manufacturer name as an input
 * - multiple results are returned in case of multiple matches
 * - manufacturer name can be a partial name, or a full name for more specificity, e.g., "988",
 *   "HONDA", "HONDA OF CANADA MFG., INC.", etc.
 *
 * `params.type`:
 * - (optional) number, 565 (Vehicle Identification Number Guidance, based on 49 CFR Part 565)
 *   or 566 (Manufacturer Identification – Reporting Requirements based on 49 CFR Part 566)
 *
 * `params.fromDate`:
 * - (optional) ORG's Letter Date should be on or after this date
 *
 * `params.toDate`:
 * - (optional) ORG's Letter Date should be on or before this date
 *
 * `params.page`:
 *  - (optional) number, 1 (default) first 1000 records, 2 - next 1000 records, etc
 *
 * @param [params] - Object of Query Search names and values to append to the URL as a query string.
 * - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as
 * the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you
 * don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)`
 * @param {string} [params.manufacturer] - Manufacturer Name or ID
 * @param {(565|566)} [params.type] - Specified type of ORG to search
 * @param {string} [params.fromDate] - Start date of search query
 * @param {string} [params.toDate] - End date of search query
 * @param {(string|number)} [params.page] - Which page number of results to request
 * (up to 1000 results per page)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetPartsResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
function GetParts(
  doFetch: true,
  _dummy?: undefined
): Promise<NhtsaResponse<GetPartsResults>>

function GetParts(doFetch?: false, _dummy?: undefined): Promise<string>

function GetParts(
  params: {
    manufacturer?: string | number
    type?: 565 | 566
    fromDate?: string
    toDate?: string
    page?: string | number
  },
  doFetch: false
): Promise<string>

function GetParts(
  params?: {
    manufacturer?: string | number
    type?: 565 | 566
    fromDate?: string
    toDate?: string
    page?: string | number
  },
  doFetch?: true
): Promise<NhtsaResponse<GetPartsResults>>

async function GetParts(
  params?:
    | {
        manufacturer?: string | number
        type?: 565 | 566
        fromDate?: string
        toDate?: string
        page?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<GetPartsResults> | string> {
  const endpointName = 'GetParts'

  if (typeof params === 'boolean') {
    doFetch = params
    params = undefined
  }

  try {
    /* Validate the arguments */
    const args: IArgToValidate[] = [
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'manufacturer',
        value: params?.manufacturer,
        types: ['string', 'number'],
      },
      { name: 'type', value: params?.type, types: ['number'] },
      { name: 'fromDate', value: params?.fromDate, types: ['string'] },
      { name: 'toDate', value: params?.toDate, types: ['string'] },
      { name: 'page', value: params?.page, types: ['string', 'number'] },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, params })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetParts }

/**
 * Objects found in the `Results` array of `GetParts` endpoint response.
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
