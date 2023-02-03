import { catchInvalidArguments, rejectWithError, useFetch } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.
 *
 * `WMI` may provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
 * representing VIN positions 1-3 & 12-14.
 * - Examples: "JTD" "1T9131"
 *
 * A list of WMI codes can be found
 * [here](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)),
 * but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
 * be available in vPIC data sets.
 *
 * @param {string} WMI - World Manufacturer Identifier
 * @returns {(Promise<NhtsaResponse<DecodeWMIResults>>)} - Api Response object
 */

export const DecodeWMI = async (
  WMI: string
): Promise<NhtsaResponse<DecodeWMIResults>> => {
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

    const { createUrl, get } = useFetch()
    createUrl({ endpointName, path: WMI })

    return get()
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of DecodeWMI endpoint
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
  UpdatedOn: string | null
  VehicleType: string
}
