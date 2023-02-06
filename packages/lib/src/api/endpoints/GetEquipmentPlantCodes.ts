import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetEquipmentPlantCodes` returns assigned Equipment Plant Codes. Can be filtered by Year,
 * Equipment Type and Report Type.
 *
 * ALL parameters are required and endpoint will return 404 if there are any undefined keys and/or
 * values in the query string.
 *
 * `params.year`:
 * - year >= 2016
 * - NOTE: It seems API will still respond with years < 2016 but api docs state only years >= 2016
 *   are supported
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
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} params.year - Year >= 2016
 * @param {(string|number)} params.equipmentType - Number equal to 1, 3, 13, or 16
 * @param {string} params.reportType - 'New', 'Updated', 'Closed', or 'All'
 * @returns {(Promise<NhtsaResponse<GetEquipmentPlantCodesResults>>)} - Api Response object
 */
export const GetEquipmentPlantCodes = async (params: {
  year: string | number
  equipmentType: '1' | '3' | '13' | '16' | 1 | 3 | 13 | 16
  reportType: 'New' | 'Updated' | 'Closed' | 'All'
}): Promise<NhtsaResponse<GetEquipmentPlantCodesResults>> => {
  const endpointName = 'GetEquipmentPlantCodes'

  try {
    /* Validate the arguments */
    const args: IArgToValidate[] = [
      { name: 'params', value: params, required: true, types: ['object'] },
      {
        name: 'year',
        value: params.year,
        required: true,
        types: ['string', 'number'],
      },
      {
        name: 'equipmentType',
        value: params.equipmentType,
        required: true,
        types: ['string', 'number'],
      },
      {
        name: 'reportType',
        value: params.reportType,
        required: true,
        types: ['string'],
      },
    ]
    catchInvalidArguments({ args })

    return useNHTSA().get({ endpointName, params })
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetEquipmentPlantCodes endpoint
 *
 * @alias GetEquipmentPlantCodesResults
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
