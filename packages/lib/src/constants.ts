/**
 * @module constants
 * @category Constants
 */

export const NHTSA_DEFAULT_API_TYPE = 'vpic'
export const NHTSA_RESPONSE_FORMAT = 'json'

/** VPIC Vehicles API (vin decoding) */
export const NHTSA_VPIC_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'
/** NHTSA API (recalls, complaints, etc.) */
export const NHTSA_API_URL = 'https://api.nhtsa.gov'

/** Deprecated since v4.0.0 - has been renamed to NHTSA_VPIC_URL */
export const NHTSA_BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'
