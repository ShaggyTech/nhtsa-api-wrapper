/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import { makeQueryString, rejectWithError, useFetch } from '../../utils'
/* Types */
import type { NhtsaResponse } from '../../types'

/**
 * GetAllMakes endpoint provides a list of all the Makes available in the vPIC Dataset.
 * - FYI there are over 10,000 registered makes in the database!
 *
 * @async
 * @returns {(Promise<NhtsaResponse<GetAllMakesResults>>)} - Api Response object
 */

export const GetAllMakes = async (): Promise<
  NhtsaResponse<GetAllMakesResults>
> => {
  const action = 'GetAllMakes'

  /* Build the default query string to be appended to the URL ('?format=json') */
  const queryString = await makeQueryString().catch((err) =>
    rejectWithError(`${action}, error building query string: ${err}`)
  )

  /* Build the final request URL*/
  const url = `${NHTSA_BASE_URL}/${action}${queryString}`

  /* Return the result */
  return await useFetch()
    .get<GetAllMakesResults>(url)
    .then((response) => response)
    .catch((err) => rejectWithError(`${action}, error fetching data: ${err}`))
}

/**
 * Type representing the structure of objects found in the NhtsaResponse 'Results' array for GetAllMakes endpoint
 *
 * @alias GetAllMakesResults
 */
export type GetAllMakesResults = {
  Make_ID: number
  Make_Name: string
}
