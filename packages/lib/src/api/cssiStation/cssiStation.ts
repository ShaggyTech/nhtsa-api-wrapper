/**
 * @module api/cssiStation
 * @category API - CSSI Station Locator API
 */

import { useNHTSA } from '@/api'
import {
  catchInvalidArguments,
  encodeQueryStringParams,
  rejectWithError,
} from '@/utils'
import type {
  NhtsaResponse,
  NoExtraProperties,
  QueryStringParamsEncoded,
} from '@/types'

/**
 * # CSSI Station API
 *
 * ::: tip :bulb: More Information
 * See: [CSSI Station Documentation] /guide/cssi-station/
 * :::
 *
 * You can use `cssiStation()` as a thin wrapper for the `NHTSA Car Seat Inspection Locator API` to
 * get safety ratings for a vehicle.
 *
 * This function is designed to handle all of the different possible workflows and return the
 * correct data/url for each one, all depending on which options you pass to the function. In this
 * sense it is a single universal function that can handle the entirety of the Safety Ratings
 * API.
 *
 * From the
 * [Official Documentation](https://www.nhtsa.gov/nhtsa-datasets-and-apis#car-seat-inspection-locator):
 *
 * > Car crashes are a leading cause of death and injuries for children. Data show a high number of
 *   child car seats are not installed properly. Car seat inspection stations make it easier for
 *   parents and caregivers to check to see if their car seat is installed correctly. NHTSA provides
 *   information to help people locate a car seat inspection station. Information for each station
 *   is reported to NHTSA and we attempt to validate the station locations using a commercial
 *   geographic database so this data will, in most cases, be able to be used for driving
 *   directions.
 *
 * ## Options
 *
 * The CSSI Station API uses a path and query string to get different data. This function uses the
 * options passed to build the correct url path and query string.
 *
 * Valid `options` are:
 *
 * - `state` - State to search
 * - `zip` - Zip code to search
 * - `location` - Object containing `lat`, `long`, and `miles` to search
 * - `filters` - Object containing `lang` and `cpsweek` to filter results
 *
 * All are optional and the only valid options you can pass to this function.
 *
 * Valid `options` combinations:
 *
 * No options:
 * - `cssiStation()` - Get first 100 stations
 * - `cssiStation({})` - Get first 100 stations
 *
 * With options.state:
 * - `cssiStation({ state: 'NV' })`
 * - `cssiStation({ state: 'nv' })`
 * - `cssiStation({ state: 'Nv' })`
 * - `cssiStation({ state: 'Nevada' })`
 * - `cssiStation({ state: 'nevada' })`
 * - `cssiStation({ state: 'NV', filters: { lang: 'spanish' } })`
 * - Note: `filters.cpsweek` not compatible with `state`
 *
 * With options.zip:
 * - `cssiStation({ zip: 63640 })`
 * - `cssiStation({ zip: 63640, filters: { lang: 'spanish' } })`
 * - `cssiStation({ zip: 63640, filters: { cpsweek: true } })`
 * - `cssiStation({ zip: 63640, filters: { lang: 'spanish', cpsweek: true } })`
 *
 * With options.location:
 * - `cssiStation({ location: { lat: 32.71325, long: -97.28864, miles: 50 } })`
 * - `cssiStation({ location, filters: { lang: 'spanish' } })`
 * - `cssiStation({ location, filters: { cpsweek: true } })`
 * - `cssiStation({ location, filters: { lang: 'spanish', cpsweek: true } })`
 *
 * Real Example URLs, w/trailing slash also ok:
 *
 * - https://api.nhtsa.gov/CSSIStation
 * - https://api.nhtsa.gov/CSSIStation/state/NV
 * - https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish
 * - https://api.nhtsa.gov/CSSIStation/zip/63640
 * - https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish
 * - https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek
 * - https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek?lang=spanish
 * - https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50
 * - https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50&lang=spanish
 * - https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50&cpsweek=true
 * - https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50&lang=spanish&cpsweek=true
 *
 * Note that `?format=json` will always be appended to the URL when using this package, even
 * though it is not required by the CSSI Station API.
 *
 * Returned data will be structured as `{ Count, Message, Results, StartLatitude, StartLongitude }`
 * for any combination of options.
 *
 * See the `Returns` section below for more details.
 *
 * ### Some Notes on this API
 *
 * Based on real world testing, it appears that this API may be broken or partially abandoned by
 * NHTSA.  For example:
 *
 * - if you search by state, you cannot use filters.cpsweek, it will return a 404 Unknown error
 *   if added as a path and will have no effect if added as a query string to the path.
 * - location query string has no effect on returned data, it will return the same data as if you
 *   sent no query string at all to the base url, the first 100 stations in the database.
 * - as a consequence of the above, it appears that filters will also have no effect when used with
 *   the location query string
 *
 * When using the location query string, the lat and long in the returned data will not match the
 * lat and long you sent in the query string.  For example, if you send:
 *
 * https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50
 *
 * You get data returned with:
 * - StartLatitude: 42.75565
 * - StartLongitude: -92.79417
 *
 * Which does not match the lat and long you sent in the query string. It should be:
 * - StartLatitude: 32.71325
 * - StartLongitude: -97.28864
 *
 * This will also return the same data as when you send no query string:
 *
 * https://api.nhtsa.gov/CSSIStation
 *
 * This appears to be broken on the NHTSA side, possibly because whatever API they were using to
 * convert lat and long to a geo location is no longer available or because they are using a
 * different internal API behind an auth wall for their offical seat install locator site at
 * https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#installation-help-inspection and have
 * abandoned this part of the CSSI API.
 *
 * In practice you can send whatever query string names and values you want, it will ignore the
 * query and still return the same data as if you sent no query.
 *
 * ## Rules
 *
 * There are several rules to follow when using this API or you will get a network error response
 * from the NHTSA API.
 *
 * 1. You can only pass one of the following options exclusively: `state`, `zip`, or `location`.
 * 2. If you pass `state`, you cannot pass `filters.cpsweek`.
 * 3. If you pass `location`, you must pass all of the following options: `lat`, `long`, and
 *   `miles`.
 *
 * FYI: Rules #1-2 will return a 404 Unknown error from the NHTSA API if you break them.
 *
 * Consequences of breaking the rules:
 *
 * - Rule #1 - If you pass more than one of the following options: `state`, `zip`, or `location`,
 *   this function will throw an error to prevent you from getting a 404 error from the NHTSA API.
 * - Rule #2 - If you pass `state` and `filters.cpsweek`, this function will throw an error to
 *   prevent you from getting a 404 error from the NHTSA API.
 * - Rule #3 - If you pass `location` and do not pass all of the following options: `lat`, `long`,
 *   and `miles`, this function will throw an error.
 *
 * There will also be TypeScript errors if you pass invalid options or invalid combinations of
 * options.
 *
 * To clarify, this function will `throw Error`s in the following cases:
 *
 * - If you pass options not listed above.
 * - If you pass an invalid combination of options.
 * - If you pass a valid combination of options but include options not listed above.
 *
 * ## Usage
 *
 * The following describes in more detail the use of the different options and the paths they use.
 *
 * ### Get First 100 Stations
 *
 * Get a list of the first 100 stations in the `CSSI Station API` database.
 *
 * If you pass no arguments, an empty object `{}`, `undefined`, or `true` as the first argument, the
 * path `/CSSIStation` will be used.
 *
 * ```js
 * await cssiStation().then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await cssiStation(false)
 * console.log(url) // "https://api.nhtsa.gov/CSSIStation?format=json"
 * ```
 *
 * ### Get Stations by State
 *
 * Get a list of all available stations in the `CSSI Station API` for a specific state.
 *
 * If you pass a `state` as the only option, the path `/state/:state` will be used.
 *
 * ```js
 * await cssiStation({ state: 'Texas' })
 * .then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await cssiStation({ state: 'Texas' }, false)
 * console.log(url) // "https://api.nhtsa.gov/CSSIStation/state/Texas?format=json"
 * ```
 *
 * ### Get Stations by Zip Code
 *
 * Get a list of all available stations in the `CSSI Station API` for a specific zip code.
 *
 * If you pass a `zip` as the only option, the path `/zip/:zip` will be used.
 *
 * ```js
 * // Get the models for a 2013 Honda
 * await cssiStation({ zip: 63640 })
 * .then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await cssiStation({ zip: 63640 }, false)
 * console.log(url) // "https://api.nhtsa.gov/CSSIStation/zip/63640?format=json"
 * ```
 *
 * ### Get Stations by Location
 *
 * Gets a list of all available stations in the `CSSI Station API` for a specific locatiion
 * (`latitude` and `longitude`) and radius (`miles`).
 *
 * If you pass a `location` as the only option, the path `/` will be used with the following query
 * string: `?lat={long}&long={long}&miles={miles}`.
 *
 * Note that this appears to be broken and returns the same data (first 100 stations) as if you
 * sent no query string at all to the base url of `/CSSIStation`.
 *
 * ```js
 * await cssiStation({ location: { lat: 32.71325, long: -97.28864, miles: 50 } })
 * .then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await cssiStation({ location: { lat: 32.71325, long: -97.28864, miles: 50 } }, false)
 * console.log(url)
 * // "https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50&format=json"
 * ```
 *
 * ### Get by State Filtered by Language
 *
 * Get a list of all available stations in the `CSSI Station API` for a specific state and language.
 *
 * If you pass a `state` and `filters.lang` as options, the path `/state/:state/lang/:lang` will be
 * used.
 *
 * Note: `filter.cpsweek` is not compatible with `state`.
 *
 * ```js
 * await cssiStation({ state: 'Texas', filters: { lang: 'spanish' } })
 * .then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * const url = await cssiStation({ state: 'Texas', filters: { lang: 'spanish' } }, false)
 * console.log(url) // "https://api.nhtsa.gov/CSSIStation/state/Texas/lang/spanish?format=json"
 * ```
 *
 * ### Get by Zip Code Filtered by Language and/or CPSWeek
 *
 * Get a list of all available stations in the `CSSI Station API` for a specific zip code and
 * language and/or CPSWeek.
 *
 * If you pass a `zip` and `filters.lang` as options, the path `/zip/:zip/lang/:lang` will be used.
 *
 * If you pass a `zip` and `filters.cpsweek` as options, the path `/zip/:zip/cpsweek` will be used.
 *
 * If you pass a `zip` and `filters.lang` and `filters.cpsweek` as options, the path and query
 * `/zip/:zip/cpsweek?lang={lang}` will be used.
 *
 * ```js
 * await cssiStation({ zip: 63640, filters: { lang: 'spanish' } })
 * .then((response) => {
 *   response.Results.forEach((station) => {
 *     console.log(station.AddressLine1) // "1000 E. 14th St.", etc.
 *     console.log(station.City) // "Rolla", etc.
 *     console.log(station.State) // "MO", etc.
 *     console.log(station.CPSWeekEventFlag) // "Yes" or "No"
 *     // ...more properties
 *   })
 * })
 *
 * // or use doFetch = false to get the url string instead of fetching the data
 * await cssiStation({ zip: 63640, filters: { lang: 'spanish' } }, false)
 * // "https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish?format=json"
 * await cssiStation({ zip: 63640, filters: { cpsweek: true } }, false)
 * // "https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek?format=json"
 * await cssiStation({ zip: 63640, filters: { lang: 'spanish', cpsweek: true } }, false)
 * // "https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek?lang=spanish&format=json"
 * ```
 *
 * ## Returns
 *
 * The return from this function will be a parsed JSON response, typed to reflect the different
 * types of objects you can expect to get back from the API in the `Results[]`.
 *
 * Returned data will be structured as `{ Count, Message, Results, StartLatitude, StartLongitude }`
 *
 * The return will be an object with the following properties:
 *
 * - `Count` - The number of results returned
 * - `Message` - A message from the NHTSA API
 * - `Results` - An array of objects containing the response data
 * - `StartLatitude` - The latitude of the starting point used to search for stations
 * - `StartLongitude` - The longitude of the starting point used to search for stations
 *
 * The `Results[]` typings will have the same properties no matter which options you pass to the
 * function.
 *
 * It's very possible you get a repsonse with empty Results and a Count of 0, in which case this
 * means it found no stations.  This is not an error, it's just a response with no data.
 *
 * - See type `CSSIResultsData` for a list of all possible properties in the `Results[]`
 *
 * @param [options] - Object of options, fetch data from the API depending on options passed
 * @param [options.state] - State to search
 * @param [options.zip] - Zip code to search
 * @param [options.location] - Object containing `lat`, `long`, and `miles` to search
 * @param [options.location.lat] - Latitude of the location to search
 * @param [options.location.long] - Longitude of the location to search
 * @param [options.location.miles] - Radius in miles to search
 * @param [options.filters] - Object containing `lang` and `cpsweek` to filter results
 * @param [options.filters.lang] - Language to filter results by (e.g. 'spanish')
 * @param [options.filters.cpsweek] - If true, will filter results by stations participating in
 * CPSWeek
 * @param [doFetch=true] - If false, will return the url string instead of fetching the data
 * (default: `true`)
 * @returns - Parsed API response `object` -or- url `string` if `doFetch = false`
 */
function cssiStation(
  options: CSSIOptions,
  doFetch?: true
): Promise<CSSIResponse>
function cssiStation(
  options: CSSIOptions | undefined,
  doFetch: false
): Promise<string>
function cssiStation(options?: undefined, doFetch?: true): Promise<CSSIResponse>
function cssiStation(doFetch?: true): Promise<CSSIResponse>
function cssiStation(doFetch: false): Promise<string>
function cssiStation(
  options?: CSSIOptions | boolean,
  doFetch?: boolean
): Promise<unknown>
/* Implementation */
async function cssiStation(
  options?: CSSIOptions | boolean,
  doFetch: boolean = true
): Promise<unknown> {
  const endpointName = 'CSSIStation'
  const apiType = 'cssiStation'

  /**
   * Builds the URL path
   */
  const buildPath = (parts: CSSIOptionsBase): string => {
    const pathParts = []
    if (parts.state) {
      pathParts.push(`state/${parts.state}`)
      if (parts.filters?.lang) {
        pathParts.push(`lang/${parts.filters.lang}`)
      }
      // filters.cpsweek not compatible with state
    }
    if (parts.zip) {
      pathParts.push(`zip/${parts.zip}`)
      if (parts.filters?.cpsweek) {
        pathParts.push('cpsweek')
      } else if (parts.filters?.lang) {
        pathParts.push(`lang/${parts.filters.lang}`)
      }
      // if (zip && filters.cpsweek && filters.lang) - lang will be added as query string
    }
    return pathParts.join('/')
  }

  try {
    let path = ''
    let encodedParams: QueryStringParamsEncoded<CSSIOptionsCanBeQuery> = {}

    if (typeof options === 'boolean') {
      /* If first argument is boolean, it is doFetch */
      doFetch = options
      /* Set options undefined so it will pass argument check below, otherwise invalid type */
      options = undefined
    }

    /* Throw an error if options contains invalid keys or types of values */
    catchInvalidArguments({
      args: [
        {
          name: 'options',
          value: options,
          types: ['object'],
          validKeys: ['state', 'zip', 'location', 'filters'],
        },
        {
          name: 'state',
          value: options?.state,
          types: ['string'],
        },
        {
          name: 'zip',
          value: options?.zip,
          types: ['string', 'number'],
        },
        {
          name: 'location',
          value: options?.location,
          types: ['object'],
          validKeys: ['lat', 'long', 'miles'],
        },
        {
          name: 'location.lat',
          value: options?.location?.lat,
          types: ['string', 'number'],
          requiredBy: [
            { name: 'location.long', value: options?.location?.long },
            { name: 'location.miles', value: options?.location?.miles },
          ],
        },
        {
          name: 'location.long',
          value: options?.location?.long,
          types: ['string', 'number'],
          requiredBy: [
            { name: 'location.lat', value: options?.location?.lat },
            { name: 'location.miles', value: options?.location?.miles },
          ],
        },
        {
          name: 'location.miles',
          value: options?.location?.miles,
          types: ['string', 'number'],
          requiredBy: [
            { name: 'location.lat', value: options?.location?.lat },
            { name: 'location.long', value: options?.location?.long },
          ],
        },
        {
          name: 'filters',
          value: options?.filters,
          types: ['object'],
          validKeys: ['lang', 'cpsweek'],
        },
        {
          name: 'filters.lang',
          value: options?.filters?.lang,
          types: ['string'],
        },
        {
          name: 'filters.cpsweek',
          value: options?.filters?.cpsweek,
          types: ['boolean'],
        },
      ],
    })

    /* options are guaranteed to be an object by now because of catchInvalidArguments() */
    if (options) {
      const {
        state,
        zip,
        location: { lat, long, miles } = {},
        filters: { lang, cpsweek } = {},
      } = options
      const hasLocation = lat && long && miles
      const hasBothFilters = cpsweek && lang

      /* Throw an error if state, zip, and location are provided together in any combination */
      if (
        (state && zip && hasLocation) ||
        (state && zip) ||
        (state && hasLocation) ||
        (zip && hasLocation)
      ) {
        throw new Error(
          `Invalid options: state, zip, and location are not compatible.`
        )
      }

      /* Throw an error if cpsweek is included with state */
      if (state && cpsweek) {
        throw new Error(
          `Invalid options: state and filters.cpsweek are not compatible.`
        )
      }

      /* Build the API URL path with state or zip, some filters used in path */
      if (state || zip) {
        path = buildPath(options)
      }
      /* lang is a query when used with zip and filters.cpsweek */
      if (zip && hasBothFilters) {
        encodedParams = encodeQueryStringParams({ lang })
      }
      /* location uses lat, long, miles, and possible filters as query string */
      if (hasLocation) {
        encodedParams = encodeQueryStringParams({
          lat,
          long,
          miles,
          lang,
          cpsweek,
        })
      }
    }

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({
      apiType,
      endpointName,
      path,
      params: encodedParams,
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get<CSSIResultsData, typeof apiType>()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { cssiStation }

/**
 * These types have to be kept together with the function in the same file.
 *
 * This is so Intellisense will show the full type contents of the return to the end user when they
 * save the results to a variable and then hover over that variable. If these types are moved to
 * another file, Intellisense will only show the type name, not the full type contents for the
 * cssiStation() NhstaResponse return type.
 *
 * Any type that is used directly in the function overloads and not in this file will cause this.
 * So, theoretically, you could move all of those types here and the others live in their own file,
 * but that would spread the types out and they are only used here and in the tests, so it makes
 * sense to keep them together.
 */

/**
 * All valid options for the `cssiStation()` function
 */
export type CSSIOptionsBase = {
  state?: string
  zip?: string | number
  location?: {
    lat: string | number
    long: string | number
    miles: string | number
  }
  filters?: {
    lang?: string
    cpsweek?: boolean
  }
}

/**
 * Options that can be used as query string params
 * - `lang` is a only query when used with `CSSIOptionsZip`
 * - `cpsweek` is a only query when used with `CSSIOptionsLocation`
 * - `lat`, `long`, and `miles` are only a query when used with `CSSIOptionsLocation`
 * - `lang` and `cpsweek` are also a query when used with `CSSIOptionsLocation`
 */
export type CSSIOptionsCanBeQuery = {
  lat?: string | number
  long?: string | number
  miles?: string | number
  lang?: string
  cpsweek?: boolean
}

/**
 * Options to get the first 100 stations in the database.
 *
 * Builds path: `/CSSIStation`
 */
export type CSSIOptionsEmpty = {
  state?: undefined
  zip?: undefined
  location?: undefined
  filters?: undefined
}

/**
 * Options to get all stations for a `state` passed to the `products()` function with an optional
 * `lang` filter.
 *
 * Builds path: `/CSSIStation/state/${state}` or `/CSSIStation/state/${state}/lang/${lang}`
 */
export type CSSIOptionsState = {
  state: string
  filters?: {
    lang?: string
    cpsweek?: undefined
  }
  zip?: undefined
  location?: undefined
}

/**
 * Options to get all stations for a `zip` passed to the `products()` function with optional
 * `lang` and `cpsweek` filters.
 *
 * Builds paths:
 * - `/CSSIStation/zip/${zip}`
 * - `/CSSIStation/zip/${zip}/lang/${lang}`
 * - `/CSSIStation/zip/${zip}/cpsweek`
 * - `/CSSIStation/zip/${zip}/cpsweek?lang=${lang}`
 */
export type CSSIOptionsZip = {
  zip: string | number
  filters?: {
    lang?: string
    cpsweek?: boolean
  }
  state?: undefined
  location?: undefined
}

/**
 * Options to get all stations for a location `lat`, `long`, and `miles` passed to the
 * `products()` function, with optional `lang` and `cpsweek` filters.
 *
 * Builds paths:
 * - `/CSSIStation?lat=${lat}&long=${long}&miles=${miles}`
 * - `/CSSIStation?lat=${lat}&long=${long}&miles=${miles}&lang=${lang}`
 * - `/CSSIStation?lat=${lat}&long=${long}&miles=${miles}&cpsweek=true`
 * - `/CSSIStation?lat=${lat}&long=${long}&miles=${miles}&cpsweek=true&lang=${lang}`
 */
export type CSSIOptionsLocation = {
  location: {
    lat: string | number
    long: string | number
    miles: string | number
  }
  filters?: {
    lang?: string
    cpsweek?: boolean
  }
  state?: undefined
  zip?: undefined
}

/**
 * All valid options combinations for the `cssiStation()` function
 */
export type CSSIOptions =
  | CSSIOptionsEmpty
  | CSSIOptionsState
  | CSSIOptionsZip
  | CSSIOptionsLocation

/**
 * Ensures only valid options are passed to the `cssiStation()` function
 */
export type NoInvalidOptions<T extends CSSIOptions> = NoExtraProperties<
  CSSIOptionsBase,
  T
>

/**
 * All possible properties and their value types, found in the `Results[]` objects of the
 * `CSSI Station API` response. This is typed with all properties optional so it can be used to
 * type the `Results[]` based on `options` passed to the `cssiStation()` function.
 */
export type CSSIResultsData = {
  ContactFirstName: string | null
  ContactLastName: string | null
  Organization: string | null
  AddressLine1: string | null
  City: string | null
  State: string | null
  Zip: string | null
  Email: string | null
  Fax: string | null
  Phone1: string | null
  CPSWeekEventFlag: string | null
  LastUpdatedDate: string | null
  MobileStationFlag: string | null
  CountiesServed: string | null
  LocationLatitude: number | null
  LocationLongitude: number | null
}

/**
 * Types the return of the `products()` function.
 *
 * The `Results[]` will be typed as `CSSIResultsData`
 */
export type CSSIResponse = NhtsaResponse<CSSIResultsData, 'cssiStation'>
