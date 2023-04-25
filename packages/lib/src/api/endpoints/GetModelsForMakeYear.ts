/**
 * @module api/endpoints/GetModelsForMakeYear
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import {
  catchInvalidArguments,
  encodeQueryStringParams,
  rejectWithError,
} from '@/utils'
import type { NhtsaResponse, IArgToValidate, AtLeastOne } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetModelsForMakeYear Documentation](/api/endpoints/get-models-for-make-year)
 * :::
 *
 * `GetModelsForMakeYear` returns the Models in the vPIC dataset for a specified Model Year and
 * Make whose name is LIKE the Make in the vPIC Dataset.
 *
 * `params.make` is **required**. It can be a partial, or a full name for more specificity, e.g.,
 * "Harley", "Harley Davidson", etc.
 *
 * A minimum of one of the following are also **required** (or a combination of both):
 * - `params.modelYear` year you want to search for (years >= 1995 are supported according to NHTSA
 *   docs)
 * - `params.vehicleType` can be a partial name, or a full name for more specificity, e.g.,
 *   "Vehicle", "Moto", "Low Speed Vehicle", etc.
 *
 * _NOTE:_ This endpoint requires special handling of the params object, such that none of the
 * params are used in the query string and are instead used as part of the URL path for the
 * endpoint. To account for this, we pass the params object to the `createUrl` function as the
 * `path`, after encoding the params object key:values into a url path string.
 *
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {string} params.make - Make name to search
 * @param {(string|number)} [params.modelYear] - A number representing the model year to search
 * (required if !vehicleType)
 * @param {string} [params.vehicleType] - String representing the vehicle type to search
 * (required if !modelYear)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
function GetModelsForMakeYear(
  params: {
    make: string
  } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>,
  doFetch?: true
): Promise<NhtsaResponse<GetModelsForMakeYearResults>>

function GetModelsForMakeYear(
  params: {
    make: string
  } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>,
  doFetch: false
): Promise<string>

async function GetModelsForMakeYear(
  params: {
    make: string
  } & AtLeastOne<{
    modelYear?: string | number
    vehicleType?: string
  }>,
  doFetch = true
): Promise<NhtsaResponse<GetModelsForMakeYearResults> | string> {
  const endpointName = 'GetModelsForMakeYear'

  try {
    /* Validate the arguments */
    const atLeastOne: IArgToValidate[] = [
      {
        name: 'modelYear',
        value: params.modelYear,
        types: ['string', 'number'],
      },
      {
        name: 'vehicleType',
        value: params.vehicleType,
        types: ['string'],
      },
    ]
    const args: IArgToValidate[] = [
      { name: 'params', value: params, required: true, types: ['object'] },
      { name: 'make', value: params.make, required: true, types: ['string'] },
      ...atLeastOne,
    ]
    catchInvalidArguments({ args })
    catchInvalidArguments({ args: atLeastOne, mode: 'atLeast' })

    /*
     * Params for this endpoint are not part of the query string, instead they are part of the URL
     * path. This means params are never run through createQueryString() and won't be URI component
     * encoded without this.
     */
    const { make, modelYear, vehicleType } = encodeQueryStringParams(params)

    /* Build the URL */
    let path = `make/${make}/`
    path += modelYear ? `modelYear/${modelYear}` : ''
    path += vehicleType
      ? `${modelYear ? '/' : ''}vehicleType/${vehicleType}`
      : ''

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetModelsForMakeYear }

/**
 * Objects found in the `Results` array of `GetModelsForMakeYear` endpoint response.
 */
export type GetModelsForMakeYearResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
