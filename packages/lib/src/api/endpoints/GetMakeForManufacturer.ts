/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  catchInvalidArguments,
  createQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { IArgToValidate, NhtsaResponse } from '../../types'

/**
 * GetMakeForManufacturer returns all the Makes in the vPIC dataset for a specified manufacturer that is requested.
 *
 * - `manufacturer` name can be a partial name, or a full name for more specificity
 *   (e.g., "988", "honda", "HONDA OF CANADA MFG., INC.", etc.).
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name.
 *   (it accepts a partial manufacturer name as an input).
 * - Multiple results are returned in case of multiple matches.
 *
 * @async
 * @param {(string|number)} manufacturer - Manufacturer Name or ID
 * @returns {(Promise<NhtsaResponse<GetMakeForManufacturerResults>>)} - Api Response object
 */

export const GetMakeForManufacturer = async (
  manufacturer: string | number
): Promise<NhtsaResponse<GetMakeForManufacturerResults>> => {
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

    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}/${manufacturer}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
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
