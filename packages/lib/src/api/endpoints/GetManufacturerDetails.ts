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
 * GetManufacturerDetails provides the details for a specific manufacturer that is requested.
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
 * @returns {(Promise<NhtsaResponse<GetManufacturerDetailsResults>>)} - Api Response object
 */

export const GetManufacturerDetails = async (
  manufacturer: string | number
): Promise<NhtsaResponse<GetManufacturerDetailsResults>> => {
  const endpointName = 'GetManufacturerDetails'

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
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetManufacturerDetails endpoint
 *
 * @alias GetManufacturerDetailsResults
 */
export type GetManufacturerDetailsResults = {
  Address: string | null
  Address2: string | null
  City: string | null
  ContactEmail: string | null
  ContactFax: string | null
  ContactPhone: string | null
  Country: string | null
  DBAs: string | null
  EquipmentItems: Array<unknown>
  LastUpdated: string
  ManufacturerTypes: Array<{
    Name: string
  }>
  Mfr_CommonName: string | null
  Mfr_ID: number | null
  Mfr_Name: string | null
  OtherManufacturerDetails: string | null
  PostalCode: string | null
  PrimaryProduct: string | null
  PrincipalFirstName: string | null
  PrincipalLastName: string | null
  PrincipalPosition: string | null
  StateProvince: string | null
  SubmittedName: string | null
  SubmittedOn: string
  SubmittedPosition: string | null
  VehicleTypes: Array<{
    GVWRFrom: string
    GVWRTo: string
    IsPrimary: boolean
    Name: string
  }>
}
