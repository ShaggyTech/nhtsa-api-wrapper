/**
 * @module api/endpoints/GetMakesForManufacturerAndYear
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetMakesForManufacturerAndYear` returns all the Makes in the vPIC dataset for a specified
 * `manufacturer`, and whose "Year From" and "Year To" range cover the specified `year`. Multiple
 * results are returned in case of multiple matches.
 *
 * Both `manufacturer` and `params.year` are required.
 *
 * `manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
 * "honda", "HONDA OF CANADA MFG., INC.", etc.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
 *   provided name. It accepts a partial manufacturer name as an input.
 *
 * `params.year` must be a number > 2016, years prior to 2016 are not supported according to the
 * NHTSA API.
 *
 * @param {(string|number)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} params.year - Model year of the vehicle - Number, >= 2016
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults> | string>)} - Api
 * Response `object` -or- url `string` if `doFetch = false`
 */
export const GetMakesForManufacturerAndYear = async (
  manufacturer: string,
  params: {
    year: string | number
  },
  doFetch = true
): Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults> | string> => {
  const endpointName = 'GetMakesForManufacturerAndYear'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'manufacturer',
        value: manufacturer,
        required: true,
        types: ['string', 'number'],
      },
      { name: 'params', value: params, required: true, types: ['object'] },
      {
        name: 'year',
        value: params.year,
        required: true,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({
      endpointName,
      path: manufacturer.toString(),
      params,
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetMakesForManufacturerAndYear endpoint
 *
 * @alias GetMakesForManufacturerAndYearResults
 */
export type GetMakesForManufacturerAndYearResults = {
  MakeId: number
  MakeName: string
  MfrId: number
  MfrName: string
}
