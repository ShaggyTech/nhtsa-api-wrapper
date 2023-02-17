/**
 * @module api/endpoints/DecodeWMI
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [DecodeWMI Documentation](/api/decode-wmi)
 * :::
 *
 * `DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.
 *
 * `WMI` may be provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
 * representing VIN positions 1-3 & 12-14.
 * - Examples: "JTD" "1T9131"
 *
 * A list of WMI codes can be found
 * [here](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)),
 * but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
 * be available in VPIC data sets.
 *
 * @param {string} WMI - World Manufacturer Identifier
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeWMIResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
function DecodeWMI(WMI: string): Promise<NhtsaResponse<DecodeWMIResults>>
/**
 * ### Overload: `WMI` + `doFetch = true`
 */
function DecodeWMI(
  WMI: string,
  doFetch: true
): Promise<NhtsaResponse<DecodeWMIResults>>
/**
 * ### Overload: `WMI` + `doFetch = false`
 */
function DecodeWMI(WMI: string, doFetch: false): Promise<string>

/* Implementation */
async function DecodeWMI(
  WMI: string,
  doFetch = true
): Promise<NhtsaResponse<DecodeWMIResults> | string> {
  const endpointName = 'DecodeWMI'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'WMI',
        value: WMI,
        required: true,
        types: ['string'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, path: WMI })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { DecodeWMI }

/**
 * Objects found in the `Results` array of `DecodeWMI` endpoint response.
 */
export type DecodeWMIResults = {
  CommonName: string
  CreatedOn: string
  DateAvailableToPublic: string
  Make: string
  ManufacturerName: string
  ParentCompanyName: string
  URL: string
  UpdatedOn: string | null
  VehicleType: string
}
