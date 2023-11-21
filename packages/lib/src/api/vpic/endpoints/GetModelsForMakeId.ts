/**
 * @module api/endpoints/GetModelsForMakeId
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetModelsForMakeId Documentation](/guide/vpic/endpoints/get-models-for-make-id)
 * :::
 *
 * `GetModelsForMakeId` returns the Models in the vPIC dataset for a specified Make whose ID is
 * equal to the `makeID` in the vPIC Dataset.
 *
 * You can get `makeID`s via `MAKE_ID` key in Results objects of the following endpoints:
 * - `GetAllMakes` endpoint
 * - `GetMakeForManufacturer` endpoint
 * - `GetModelsForMake` endpoint
 * - `GetModelsForMakeYear` endpoint
 *
 * You can get `makeID`s via `MakeID` key in Results objects of the following endpoints:
 * - `DecodeVinValues`
 * - `DecodeVinValuesBatch`
 *
 * You can get `makeID`s via `ValueId` key in Results objects of the following endpoints.
 * One of the objects in the `Results` array will contain both `Variable: "Make"` and
 * `VariableId: 26`. The `ValueId` key in that same object is the `makeID` for use in this
 * endpoint.
 * - `DecodeVin`
 * - `DecodeVinExtended`
 *
 * @param {(string|number)} makeId - Make ID to search
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */
function GetModelsForMakeId(
  makeId: string | number,
  doFetch?: true
): Promise<NhtsaResponse<GetModelsForMakeIdResults>>

function GetModelsForMakeId(
  makeId: string | number,
  doFetch: false
): Promise<string>

async function GetModelsForMakeId(
  makeId: string | number,
  doFetch = true
): Promise<NhtsaResponse<GetModelsForMakeIdResults> | string> {
  const endpointName = 'GetModelsForMakeId'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'makeId',
        value: makeId,
        required: true,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path: makeId.toString() })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetModelsForMakeId }

/**
 * Objects found in the `Results` array of `GetModelsForMakeId` endpoint response.
 */
export type GetModelsForMakeIdResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
