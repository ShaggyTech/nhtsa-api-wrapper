/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  createQueryString,
  catchInvalidArguments,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { AtLeastOne, IArgToValidate, NhtsaResponse } from '../../types'

/**
 * GetWMIsForManufacturer provides information on the World Manufacturer Identifier (WMI) for a specified `manufacturer`.
 * Only WMIs registered in vPICList are displayed. Multiple results are returned in case of multiple matches.
 *
 * - Both `manufacturer` and `vehicleType` are optional but at least one must be provided.
 *
 * `manufacturer` can be a partial name, or a full name for more specificity, or WMI ID number (e.g., "Merc", "Mercedes Benz", 987, etc.)
 * - If `manufacturer` is a number - method will do exact match on Manufacturer's Id
 * - If `manufacturer` is a string - it will look for manufacturers whose name is LIKE the provided name (it accepts a partial manufacturer name as an input).
 *
 * `vehicleType` can be a string or number (e.g., "car", 1)
 * - If `vehicleType` is a number - method will do exact match on VehicleType's Id
 * - If `vehicleType` is a string - it will look for VehicleType whose name is LIKE the provided name (it accepts a partial VehicleType name as an input).
 *
 * @async
 * @param {Object} [params] - Query Search Parameters to append to the URL.
 * @param {(string|number)} [params.manufacturer] - Manufacturer Name, must be included if vehicleType is not provided
 * @param {(string|number)} [params.vehicleType] - Optional Vehicle Type search parameter, must be included if manufacturer is not provided
 * @returns {(Promise<NhtsaResponse<GetWMIsForManufacturerResults>>)} - Api Response object
 */

export const GetWMIsForManufacturer = async (
  params?: AtLeastOne<{
    manufacturer?: string | number
    vehicleType?: string | number
  }>
): Promise<NhtsaResponse<GetWMIsForManufacturerResults>> => {
  const endpointName = 'GetWMIsForManufacturer'

  try {
    /* Validate the arguments */
    const atLeastOne: IArgToValidate[] = [
      {
        name: 'manufacturer',
        value: params?.manufacturer,
        types: ['string', 'number'],
      },
      {
        name: 'vehicleType',
        value: params?.vehicleType,
        types: ['string', 'number'],
      },
    ]
    const args: IArgToValidate[] = [
      { name: 'params', value: params, types: ['object'] },
      ...atLeastOne,
    ]

    catchInvalidArguments({ args })
    catchInvalidArguments({ args: atLeastOne, mode: 'atLeast' })

    const manufacturer = params?.manufacturer
      ? encodeURIComponent(params.manufacturer)
      : ''
    const vehicleType = params?.vehicleType || ''
    const queryString = createQueryString({ vehicleType })
    const url = `${NHTSA_BASE_URL}/${endpointName}/${manufacturer}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetWMIsForManufacturer endpoint
 *
 * @alias GetWMIsForManufacturerResults
 */
export type GetWMIsForManufacturerResults = {
  Country: string | null
  CreatedOn: string
  DateAvailableToPublic: string
  Id: number
  Name: string
  UpdatedOn: string
  VehicleType: string
  WMI: string
}
