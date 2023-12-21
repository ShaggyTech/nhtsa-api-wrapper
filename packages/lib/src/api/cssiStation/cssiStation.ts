/**
Rough Draft Notes:

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
- lat: string | number 
- long: string | number
- miles: string | number
- filters: { lang: string; cpsweek: boolean }

Rules:
- If zip is provided, cannot provide other options except for filters
- If state is provided, cannot provide other options except for filters
- lat, long, and miles must be provided together
- filters are optional, either one/none OR both can be sent in.

By zip:

Uses url path to specify zip code:
https://api.nhtsa.gov/CSSIStation/zip/63640

Fitering by lang:
https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish

Apparently you can pash whatever language string you want after the /lang/ part of the path, it doesn't have to be /lang/spanish as described in the docs.
It returns the same data no matter the path after /lang (e.g. /lang/blahblahblah returns the same data as /lang/spanish)

Filtering by cpsweek:
https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek

---

By state:

Uses url path to specify state:
https://api.nhtsa.gov/CSSIStation/state/NV

Filtering by lang:
https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish

Apparently you can pash whatever language string you want after the /lang/ part of the path, it doesn't have to be /lang/spanish as described in the docs.
It returns the same data no matter the path after /lang (e.g. /lang/blahblahblah returns the same data as /lang/spanish)

Filtering by cpsweek:
https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek

doesn't seem to work, gives 404 error

---

By lat, long, and miles:

It doesn't appear the query string does anything, even with the example in the official docs.  If you change the lat and long and miles the results are the same
as if you has just hit the baseURL of https://api.nhtsa.gov/CSSIStation with no query string.  I'm not sure if this is a bug or if the docs are wrong.

In practice you can send whatever query string names and values you want, it will ignore the query and still return the same data.

I also don't know how to apply filters in this case although the docs say you can.

---

Filters:

Cannot use with lat, long, and miles, more accurately I don't know how to use it with lat, long, and miles query string or what the query name even is because query
strings don't do anything for the language filter.

lang:

By zip:
https://api.nhtsa.gov/CSSIStation/zip/63640/lang/spanish

By state:
https://api.nhtsa.gov/CSSIStation/state/NV/lang/spanish

Apparently you can pass whatever language string you want after the /lang/ part of the path, it doesn't have to be /lang/spanish as described in the docs.
It returns the same data no matter the path after /lang (e.g. /lang/blahblahblah returns the same data as /lang/spanish)

cpsweek:

By zip:
https://api.nhtsa.gov/CSSIStation/zip/63640/cpsweek

By state:
https://api.nhtsa.gov/CSSIStation/state/NV/cpsweek <-- gives 404 error


Does not work with state, gives 404 error if added to the path as described in the docs

---

It's very possible you get a repsonse with empty Results and a Count of 0, in which case this means it found no stations.  This is not an error, it's just a response
with no data.

Needs more real world testing before we try to implement.

 */

/**
 * # CSSI Station
 */
