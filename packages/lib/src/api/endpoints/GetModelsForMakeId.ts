import { catchInvalidArguments, rejectWithError, useFetch } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
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
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdResults>>)} - Api Response object
 */
export const GetModelsForMakeId = async (
  makeId: string | number
): Promise<NhtsaResponse<GetModelsForMakeIdResults>> => {
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

    const { createUrl, get } = useFetch()
    createUrl({
      endpointName,
      path: makeId.toString(),
    })

    return get()
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetModelsForMakeId endpoint
 *
 * @alias GetModelsForMakeIdResults
 */
export type GetModelsForMakeIdResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
