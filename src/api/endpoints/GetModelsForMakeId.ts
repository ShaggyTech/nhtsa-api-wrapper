/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import {
  getTypeof,
  makeQueryString,
  rejectWithError,
  useFetch,
} from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

/**
 * GetModelsForMakeId returns the Models in the vPIC dataset for a specified Make
 * whose ID is equal to the `makeID` in the vPIC Dataset.
 *
 * @async
 * @param {(number|string)} makeId - Vehicle make ID (number)
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeIdResults>>)} - Api Response object
 */

export const GetModelsForMakeId = async (
  makeId: number | string
): Promise<NhtsaResponse<GetModelsForMakeIdResults>> => {
  const action = 'GetModelsForMakeId'

  /* Runtime type guards against user provided args*/
  const typeofMakeId = getTypeof(makeId)
  if (!makeId || typeofMakeId !== ('number' || 'string')) {
    return rejectWithError(
      `${action}, "makeId" argument is required and must be of type number or string, got <${typeofMakeId}> ${makeId}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${makeId}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetModelsForMakeIdResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMakeId endpoint
 *
 * @alias GetModelsForMakeIdResults
 */
export type GetModelsForMakeIdResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
