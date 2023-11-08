/**
 * @module api/endpoints/GetAllManufacturers
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetAllManufacturers Documentation](/guide/vpic/endpoints/get-all-manufacturers)
 * :::
 *
 * `GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.
 *
 * `params.manufacturerType` is optional but allows the user to filter the list based on
 * manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
 * 'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
 * 'Alterer', or any partial match of those strings.
 *
 * `params.page` is optional and used to specify (n)th page of results. Results are provided in
 * pages of 100 items.
 *
 * @param [params] - Object of Query Search names and values to append to the URL as a query string.
 * @param {string} [params.manufacturerType] - See function description
 * @param {(string|number)} [params.page] - Specify page number (results returned 100 at a time)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
function GetAllManufacturers(
  doFetch: true,
  _dummy?: undefined
): Promise<NhtsaResponse<GetAllManufacturersResults>>

function GetAllManufacturers(
  doFetch?: false,
  _dummy?: undefined
): Promise<string>

function GetAllManufacturers(
  params: {
    manufacturerType?: string
    page?: string | number
  },
  doFetch: false
): Promise<string>

function GetAllManufacturers(
  params?: {
    manufacturerType?: string
    page?: string | number
  },
  doFetch?: true
): Promise<NhtsaResponse<GetAllManufacturersResults>>

/* Implementation */
async function GetAllManufacturers(
  params?:
    | {
        manufacturerType?: string
        page?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<GetAllManufacturersResults> | string> {
  const endpointName = 'GetAllManufacturers'

  try {
    if (typeof params === 'boolean') {
      doFetch = params
      params = undefined
    }

    const args: IArgToValidate[] = [
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'manufacturerType',
        value: params?.manufacturerType,
        types: ['string'],
      },
      {
        name: 'page',
        value: params?.page,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, params })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetAllManufacturers }

/**
 * Objects found in the `Results` array of `GetAllManufacturers` endpoint response.
 */
export type GetAllManufacturersResults = {
  Country: string
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: Array<{ IsPrimary?: boolean; Name?: string }>
}
