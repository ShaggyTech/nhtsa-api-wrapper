/**
 * @module api/endpoints/GetEquipmentPlantCodes
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetEquipmentPlantCodes Documentation](/api/endpoints/get-equipment-plant-codes)
 * :::
 *
 * `GetEquipmentPlantCodes` returns assigned Equipment Plant Codes. Can be filtered by Year,
 * Equipment Type and Report Type.
 *
 * ALL parameters are required and endpoint will return 404 if there are any undefined keys and/or
 * values in the query string.
 *
 * `params.equipmentType`:
 * - 1 (Tires)
 * - 3 (Brake Hoses)
 * - 13 (Glazing)
 * - 16 (Retread)
 *
 * `params.reportType`:
 * - 'New' (The Equipment Plant Code was assigned during the selected year)
 * - 'Updated' (The Equipment Plant data was modified during the selected year)
 * - 'Closed' (The Equipment Plant is no longer Active)
 * - 'All' (All Equipment Plant Codes regardless of year, including their status (active or closed))
 *
 * `params.year`:
 * - year >= 2016
 * - NOTE: It seems API will still respond with years < 2016 but api docs state only years >= 2016
 *   are supported
 *
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} params.equipmentType - Number equal to 1, 3, 13, or 16
 * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All'
 * @param {(string|number)} params.year - Year >= 2016
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetEquipmentPlantCodesResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
function GetEquipmentPlantCodes(
  params: GetEquipmentPlantCodesParams,
  doFetch?: true
): Promise<NhtsaResponse<GetEquipmentPlantCodesResults>>

function GetEquipmentPlantCodes(
  params: GetEquipmentPlantCodesParams,
  doFetch: false
): Promise<string>

async function GetEquipmentPlantCodes(
  params: GetEquipmentPlantCodesParams,
  doFetch = true
): Promise<NhtsaResponse<GetEquipmentPlantCodesResults> | string> {
  const endpointName = 'GetEquipmentPlantCodes'

  try {
    /* Validate the arguments */
    const args: IArgToValidate[] = [
      { name: 'params', value: params, required: true, types: ['object'] },
      {
        name: 'equipmentType',
        value: params?.equipmentType,
        required: true,
        types: ['string', 'number'],
      },
      {
        name: 'reportType',
        value: params?.reportType,
        required: true,
        types: ['string'],
      },
      {
        name: 'year',
        value: params?.year,
        required: true,
        types: ['string', 'number'],
      },
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

export { GetEquipmentPlantCodes }

/** Query String Parameters for this endpoint */
export type GetEquipmentPlantCodesParams = {
  equipmentType: '1' | '3' | '13' | '16' | 1 | 3 | 13 | 16
  reportType:
    | 'New'
    | 'Updated'
    | 'Closed'
    | 'All'
    | 'new'
    | 'updated'
    | 'closed'
    | 'all'
  year: string | number
}

/**
 * Objects found in the `Results` array of `GetEquipmentPlantCodes` endpoint response.
 */
export type GetEquipmentPlantCodesResults = {
  Address: string | null
  City: string | null
  Country: string
  DOTCode: string
  Name: string
  OldDotCode: string
  PostalCode: string | null
  StateProvince: string | null
  Status: string | null
}
