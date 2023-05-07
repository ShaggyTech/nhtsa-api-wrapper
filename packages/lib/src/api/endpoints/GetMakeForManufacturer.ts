/**
 * @module api/endpoints/GetMakeForManufacturer
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetMakeForManufacturer Documentation](/api/endpoints/get-make-for-manufacturer)
 * :::
 *
 * `GetMakeForManufacturer` returns all the Makes in the vPIC dataset for a specified manufacturer
 * that is requested. Multiple results are returned in case of multiple matches.
 *
 * `manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
 * "honda", "HONDA OF CANADA MFG., INC.", etc.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
 *   provided name. It accepts a partial manufacturer name as an input.
 *
 * @param {(string|number)} manufacturer - Manufacturer Name or ID
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
function GetMakeForManufacturer(
  manufacturer: string | number,
  doFetch?: true
): Promise<NhtsaResponse<GetMakeForManufacturerResults>>

function GetMakeForManufacturer(
  manufacturer: string | number,
  doFetch: false
): Promise<string>

async function GetMakeForManufacturer(
  manufacturer: string | number,
  doFetch = true
): Promise<NhtsaResponse<GetMakeForManufacturerResults> | string> {
  const endpointName = 'GetMakeForManufacturer'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'manufacturer',
        value: manufacturer,
        required: true,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path: manufacturer.toString() })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetMakeForManufacturer }

/**
 * Objects found in the `Results` array of `GetMakeForManufacturer` endpoint response.
 */
export type GetMakeForManufacturerResults = {
  Make_ID: number
  Make_Name: string
  Mfr_Name: string
}
