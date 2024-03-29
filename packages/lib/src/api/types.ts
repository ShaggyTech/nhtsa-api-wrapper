/**
 * @module api/types
 * @category Types
 */

export * from './endpoints/types'
export type { CreateUrlOptions } from './useNHTSA'

/**
 * Response data returned from the NHTSA VPIC API. `Results` key will be an array of objects of type "T"
 */
export type NhtsaResponse<T> = {
  /** The number of items returned in the Results object. Will = 0 if no Results*/
  Count: number
  /** A message describing the Results. If Count is 0 check the Message for helpful info */
  Message: string
  /** An array of objects returned by NHTSA VPIC API, specific to each individual API Action. */
  Results: Array<T>
  /** Search terms (VIN, WMI, etc) used in the request URL. */
  SearchCriteria: string | null
}

export {}
