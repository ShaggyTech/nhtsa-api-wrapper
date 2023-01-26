export * from './endpoints/types'

import { DecodeVinExtended } from './endpoints/DecodeVinExtended'

/**
 * Response data returned from the NHSTA API.
 *
 * - `Results` key will be an array of objects of type "T"
 */
export type NhtsaResponse<T> = {
  /** The number of items returned in the Results object. */
  Count: number
  /** A message describing the Results. */
  Message: string
  /** An array of objects returned by NHSTA, specific to each individual API Action. */
  Results: Array<T>
  /** Search terms (VIN, WMI, etc) used in the request URL. */
  SearchCriteria: string
}

export {}
