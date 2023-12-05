# Decoding Vehicle Identification Numbers (VIN)

The NHTSA API provides several endpoints for decoding VINs. This section will use the
`DecodeVinValues` endpoint as an example, but the same principles apply to all DecodeVinXXX
endpoints.

`DecodeVinValues` is the most commonly used endpoint for decoding VINs as it returns
the data in a more usable format than the other endpoints called "flat file format". This format
is easier to work with than the other endpoints, which return the data in a nested format and
require additional processing to get the data into a usable format.

---

## Decoding a VIN

Decode a VIN and store the full response in a variable called `response`:

```typescript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('WA1A4AFY2J2008189')

/*
response = {
  Count: 136,
  Message: 'Results returned successfully ...',
  Results: [ {...} ],
  SearchCriteria: 'VIN:WA1A4AFY2J2008189',
}
*/
```

::: tip :mag: See: [VPIC Response](../guide/vpic/vpic-api-response) for more info on the response object
:::

---

## Response Object

The `DecodeVinValues` function returns a Promise that resolves to an object with the following
properties:

- `Count` - The number of results returned, if less than 1 then no results were returned
- `Message` - A message from the API
- `Results` - An array containing a single `DecodeVinValuesResults` object
- `SearchCriteria` - The search criteria used to get the results, in this case the VIN

In the example above, `response.Results` is an array containing a single `DecodeVinValuesResults`
object. This object is the decoded data for the VIN.

::: tip See also:

- [DecodeVinValues](../guide/vpic/endpoints/decode-vin-values)
- [DecodeVinValues Example Response](../guide/vpic/endpoints/decode-vin-values#returns)
- [Type - DecodeVinValuesResults](../typedoc/api/vpic/endpoints/DecodeVinValues#decodevinvaluesresults)

:::

---

## Accessing the Decoded Data

The following shows how to access and use the decoded data from the `DecodeVinValues` endpoint using
several different methods.

1. Get all properties of the first object in the `Results` array and save to a variable:

```typescript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValues('WA1A4AFY2J2008189')

// Get the first object in the Results array, this is an object of type DecodeVinValuesResults
const decodedData = response.Results[0]

// Save the data to variables that you want to use
const year = decodedData.ModelYear
const make = decodedData.Make
const model = decodedData.Model
const engineHP = decodedData.EngineHP

console.log(
  `The vehicle is a ${year} ${make} ${model} and it has ${engineHP} horsepower.`
)
```

2. Using object destructuring syntax:

```typescript
import { DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const { Count, Message, Results, SearchCriteria } =
  await DecodeVinValues('WA1A4AFY2J2008189')

// Destructure to get the specific data you want to use
const { ModelYear, Make, Model, EngineHP } = Results[0]

console.log(
  `The vehicle is a ${ModelYear} ${Make} ${Model} and it has ${EngineHP} horsepower.`
)
```

::: tip :mag: See Also: [VPIC API Endpoints](../guide/vpic/#vpic-api-endpoints)
:::
