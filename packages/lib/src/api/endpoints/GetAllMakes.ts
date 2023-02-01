/* Constants */
import { NHTSA_BASE_URL } from '../../constants'
/* Utility Functions */
import { createQueryString, rejectWithError, useFetch } from '../../utils'
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
  const endpointName = 'GetAllMakes'

  try {
    const queryString = createQueryString()
    const url = `${NHTSA_BASE_URL}/${endpointName}${queryString}`

    return await useFetch().get(url)
  } catch (error) {
    return rejectWithError(error)
  }
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
