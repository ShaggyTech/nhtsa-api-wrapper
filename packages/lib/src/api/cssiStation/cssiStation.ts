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
Rough Draft Notes:

----------------------------------------------------------------------------
----------------------------------------------------------------------------

From the official docs at https://www.nhtsa.gov/nhtsa-datasets-and-apis#car-seat-inspection-locator

Approach A. Get by Zip Code
Make the request with a zip code to get the list of CSSIStations at the specific zip code only (nearby zip codes are not included).

/CSSIStation/zip/63640
Response Fields: Response is a list of CSSIStations for a given zip code.

Working Sample: https://api.nhtsa.gov/CSSIStation/zip/63640

---

Approach B. Get by State
Make the request with the state abbreviation to get the list of CSSIStations in that state only.

/api/CSSIStation/state/NV
Response Fields: Response is a list of CSSIStations in a given state.

Working Sample: https://api.nhtsa.gov/CSSIStation/state/NV

---

Approach C. Get by Geo location
Make the request with an interested latitude and longitude location along with the miles nearby to look out for CSSIStations.

/CSSIStation?lat=30.1783&long=-96.3911&miles=50
Response Fields: Response is a list of CSSIStations nearby the interested geographical location spotted by its latitude and longitude.

Working Sample: https://api.nhtsa.gov/CSSIStation?lat=30.1783&long=-96.3911&miles=50

---
---

Filters. Optional Filters

Filter 1: Filter by Spanish speaking Stations

Make the request with a zip code/state/geographical location to get the list of CSSIStations filtered by spanish speaking (attach string - /lang/spanish) and stations participating in CPSWeek event (attach string - /cpsweek). Below filters in the request string are optional, either one/none OR both can be sent in.

/CSSIStation/zip/67951/lang/spanish
Response Fields: Response is a list of CSSIStations for a given zip code applying the respective filter.

Working Sample: https://api.nhtsa.gov//CSSIStation/zip/67951/lang/spanish

---

Filter 2: Filter by Stations participating in CPSWeek

Make the request with a zip code/state/geographical location to get the list of CSSIStations filtered by stations participating in CPSWeek event (attach string - /cpsweek). Below filters in the request string are optional, either one/none OR both can be sent in.

/CSSIStation/zip/37066/cpsweek
Response Fields: Response is a list of CSSIStations for a given zip code applying the respective filter.

Working Sample: https://api.nhtsa.gov/CSSIStation/zip/37066/cpsweek

Notes
Request parameters and method names are case sensitive

----------------------------------------------------------------------------

Possible Options:
- zip: string | number
- state: string
- location: {
    lat: string | number;
    long: string | number;
    miles: string | number
  }
- filters: {
    lang: string;
    cpsweek: boolean
  }

Possible Options Combinations:
- zip
- zip + filters
- state
- state + filter.lang
- location
- location + filters (same as location only)

Rules:
- CSSIStation is not case sensitive for the path name, can be /CSSIStation or /cssistation, etc.
- If zip is provided, cannot provide state or location
- If state is provided, cannot provide zip or location
- lat, long, and miles must be provided all or none
- filters are optional, either one/none OR both can be sent in according to docs
- filters.cpsweek not compatible with state

---

Examples:

FIRST 100 STATIONS (no options):

cssiStation()
- returns first 100 stations
- uses base url of /CSSIStation

cssiStation({})
- returns first 100 stations
- uses base url of /CSSIStation

---

ZIP:
Path - https://api.nhtsa.gov/CSSIStation/zip/63640
cssiStation({ zip: 63640 })

Path- https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish
cssiStation({ zip: 63640, filters: { lang: 'spanish' } })

Path - https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek
cssiStation({ zip: 63640, filters: { cpsweek: true } })

Path - https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek?lang=spanish
cssiStation({ zip: 63640, filters: { lang: 'spanish', cpsweek: true } })

---

STATE:
Path - https://api.nhtsa.gov/CSSIStation/state/NV
cssiStation({ state: 'NV' })
cssiStation({ state: 'nv' })
cssiStation({ state: 'Nv' })
cssiStation({ state: 'Nevada' })
cssiStation({ state: 'nevada' })

Path - https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish
cssiStation({ state: 'NV', filters: { lang: 'spanish' } })

---

LOCATION (lat, long, miles):
- returns first 100 stations, same as no options
- query string has no effect on returned data, returns same data as no query string
- these options appears to be broken or abandoned by NHTSA
- uses base url of /CSSIStation with query string of ?lat=32.71325&long=-97.28864&miles=50
- filters are added to query string as &lang=spanish &cpsweek=true

Path - https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50
All paths here use query string to represent passed options as seen in the path above.

cssiStation({
  location: {
    lat: 32.71325,
    long: -97.28864,
    miles: 50
  }
})

cssiStation({
  location: {
    lat: 32.71325,
    long: -97.28864,
    miles: 50
  },
  filters: {
    lang: 'spanish'
  }
})

cssiStation({
  location: {
    lat: 32.71325,
    long: -97.28864,
    miles: 50
  },
  filters: {
    cpsweek: true
  }
})

cssiStation({
  location: {
    lat: 32.71325,
    long: -97.28864,
    miles: 50
  },
  filters: {
    lang: 'spanish',
    cpsweek: true
  }
})

----------------------------------------------------------------------------

By zip:

Uses url path to specify zip code:
- https://api.nhtsa.gov/CSSIStation/zip/63640

Fitering by lang:
- https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish
- Apparently you can pash whatever language string you want after the /lang/ part of the path, it
  doesn't have to be /lang/spanish as described in the docs.
- It returns the same data no matter the path after /lang (e.g. /lang/blahblahblah returns the same
  data as /lang/spanish)

Filtering by cpsweek:
- https://api.nhtsa.gov/CSSIStation/zip/37066/cpsweek

Filtering by cpsweek and lang as query string:
- https://api.nhtsa.gov/CSSIStation/zip/37066/cpsweek?lang=spanish

---

By state:

Uses url path to specify state:
- https://api.nhtsa.gov/CSSIStation/state/NV
- state can be NV, nv, nevada, Nevada, etc.

Filtering by lang:
- https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish
- Apparently you can pash whatever language string you want after the /lang/ part of the path, it
  doesn't have to be /lang/spanish as described in the docs.
- It returns the same data no matter the path after /lang (e.g. /lang/blahblahblah returns the same
  data as /lang/spanish)

Filtering by cpsweek (DOES NOT WORK WITH STATE!):
- https://api.nhtsa.gov/CSSIStation/state/NV/?cpsweek=true <-- ignores query, returns same data as
  /state/NV
- https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek <-- gives 404 error
- https://api.nhtsa.gov/CSSIStation/cpsweek/state/NV <-- gives 404 error with differing path
  order

Filtering by cpsweek and lang (DOES NOT WORK WITH STATE!):
- https://api.nhtsa.gov/CSSIStation/state/NV?cpsweek&lang=spanish <-- ignores query, returns same
  data as /state/NV?lang=spanish
- https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek?lang=spanish <-- gives 404 error
- https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish/cpsweek <-- gives 404 error
- https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek/lang/spanish <-- gives 404 error

---

By lat, long, and miles:

In real world use, this will return the same data no matter what query string you send, the same as
if you sent no query string at all.  It appears the query string does nothing for this endpoint as
described in the official docs.  You will get the same 100 stations returned no matter what query
string you send.

After testing out the API and looking at the docs, I think the docs are wrong or at the very least
the lat/long/miles query is broken or abandoned, possibly in favor of the official site and form at:
https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#installation-help-inspection

It doesn't appear the query string does anything, even with the example in the official docs. If you
change the lat and long and miles the results are the same as if you has just hit the baseURL
of https://api.nhtsa.gov/CSSIStation with no query string.

I'm not sure if this is a bug or if the docs are wrong.

In practice you can send whatever query string names and values you want, it will ignore the query
and still return the same data.

I also don't know how to apply filters in this case although the docs say you can, and again the
query string in any combination doesn't seem to change the data returned, which appears to be the
first 100 stations in the database.

If you go here:
https://api.nhtsa.gov/CSSIStation?lat=32.71325&long=-97.28864&miles=50

You get data returned with:
StartLatitude: 42.75565
StartLongitude: -92.79417

Which does not match the lat and long you sent in the query string. It should be:
StartLatitude: 32.71325
StartLongitude: -97.28864

This will also return the same data as when you send the query string:
https://api.nhtsa.gov/CSSIStation

This appears to be broken on the NHTSA side, possibly because whatever API they were using to
convert lat and long to a geo location is no longer available or because they are using a different
internal API behind an auth wall for their offical seat install locator site at
https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#installation-help-inspection and have
abandoned this api.nhtsa.gove/CSSIStation API.

---

Filters:

Cannot use with lat, long, and miles, or more accurately, query strings do nothing for this endpoint
so determining if you can use filters with lat, long, and miles is impossible.

lang:

Apparently you can pass whatever language string you want after the /lang/ part of the path, it
doesn't have to be /lang/spanish as described in the docs. It returns the same data no matter the
path after /lang (e.g. /lang/blahblahblah returns the same data as /lang/spanish)

By zip with lang:
- https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish

By zip with lang and cpsweek (cpsweek sent as query string = true):
- https://api.nhtsa.gov//CSSIStation/zip/67951/lang/spanish?cpsweek=true
- Returns: Count = 0 because there are no stations with CPSWeekEventFlag = "Yes" in zip 63640 but will
  still return 200 status code and empty Results[]

By state with lang:
- https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish

By state with lang and cpsweek (cpsweek sent as query string = true):
- https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish?cpsweek=true <-- responds with same data
  as above, query strings do nothing it appears, includes stations with CPSWeekEventFlag = "No" when
  it should only include stations with CPSWeekEventFlag = "Yes"

cpsweek:

By zip With cpsweek:
- https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek

By zip with cpsweek and lang as query string:
- https://api.nhtsa.gov/CSSIStation/zip/37066/cpsweek?lang=spanish
- Returns: Count = 0 because there are no stations with CPSWeekEventFlag = "Yes" in zip 63640 that
  have spanish speaking technicians but will still return 200 status code and empty Results[]

By state with cpsweek (DOES NOT WORK):
- https://api.nhtsa.gov/CSSIStation/state/NV?cpsweek=true <-- ignores query, returns same data as /state/NV
- https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek <- gives 404 error
- https://api.nhtsa.gov/CSSIStation/cpsweek/state/NV <- also gives 404 error with differing path order

---

It's very possible you get a repsonse with empty Results and a Count of 0, in which case this means
it found no stations.  This is not an error, it's just a response with no data.

Needs more real world testing before we try to implement.

 */

/**
 * # CSSI Station
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
