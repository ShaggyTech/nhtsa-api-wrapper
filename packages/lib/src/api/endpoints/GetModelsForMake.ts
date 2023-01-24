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
 * GetModelsForMake returns the Models in the vPIC dataset for a specified `makeName`
 * whose Name is LIKE the Make in vPIC Dataset.
 * - `makeName` can be a partial, or a full for more specificity
 *   (e.g., "Harley", "Harley Davidson", etc.)
 *
 * @async
 * @param {string} makeName - Vehicle make name
 * @returns {(Promise<NhtsaResponse<GetModelsForMakeResults>>)} - Api Response object
 */

export const GetModelsForMake = async (
  makeName: string
): Promise<NhtsaResponse<GetModelsForMakeResults>> => {
  const action = 'GetModelsForMake'

  /* Runtime type guards against user provided args*/
  const typeofMakeName = getTypeof(makeName)
  if (typeofMakeName !== 'string') {
    return rejectWithError(
      `${action}, "makeName" argument is required and must be of type string, got <${typeofMakeName}> ${makeName}`
    )
  }

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}/${makeName}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetModelsForMakeResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetModelsForMake endpoint
 *
 * @alias GetModelsForMakeResults
 */
export type GetModelsForMakeResults = {
  Make_ID: number
  Make_Name: string
  Model_ID: number
  Model_Name: string
}
