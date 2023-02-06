import { useNHTSA } from '@/api'
import { rejectWithError } from '@/utils'
import type { NhtsaResponse } from '@/types'

/**
 * `GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
 * Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
 * an individual vehicle Make.
 *
 * - FYI there are over 10,000 registered makes in the database!
 *
 * @returns {(Promise<NhtsaResponse<GetAllMakesResults>>)} - Api Response object
 */
export const GetAllMakes = async (): Promise<
  NhtsaResponse<GetAllMakesResults>
> => {
  const endpointName = 'GetAllMakes'

  try {
    return useNHTSA().get({ endpointName })
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetAllMakes endpoint
 *
 * @alias GetAllMakesResults
 */
export type GetAllMakesResults = {
  Make_ID: number
  Make_Name: string
}
