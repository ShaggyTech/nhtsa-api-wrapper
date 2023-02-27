# DecodeVinValuesExtended

[[toc]]

---

```typescript
async function DecodeVinValuesExtended(
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinValuesExtendedResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_DecodeVinValuesExtended.md)
:::

## Description

`DecodeVinValuesExtended` decodes a Vehicle Identification Number (VIN) and returns useful
information about the vehicle in in a _flat format_. This means the endpoint will return an
array with a single object of results. Each key in the object is the name of a variable.

This endpoint is similar to `DecodeVinValues` but returns additional information on variables
related to other NHTSA programs like
[NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).

- Ex: "5UXWX7C5\*BA"
- In this case, the VIN will be decoded partially with the available characters
- In case of partial VINs, a `*` could be used to indicate the unavailable characters
- The 9th digit is not necessary

::: tip :bulb: TIP
The flat format is more efficient and easier to work with as you won't have to iterate through a
bunch of objects just to get all variable names/values.

The variable names and values in the flat format object are equivalent to "Variable" and "Value"
keys found in objects returned from _nested format_ endpoints such as `DecodeVin` and
`DecodeVinExtended`.
:::

## Parameters

| Name                | Type                 | Default Value | Description                                                                     |
| ------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------- |
| `vin`               | `string`             | `undefined`   | Vehicle Identification Number (full or partial)                                 |
| `params?`           | `Object \| boolean ` | `undefined`   | Object of query search names and values to append to the URL as a query string. |
| `params.modelYear?` | `string \| number`   | `undefined`   | Optional Model Year search parameter                                            |
| `doFetch`           | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)              |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

As `params` is optional, it also has type `| boolean`, so you can set `doFetch` without
having to pass `undefined` in place of intentionally undefined `params`.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a **_single_** NhtsaResponse object of type
[DecodeVinValuesExtendedResults](#type-decodevinvaluesextendedresults) in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>
```

```typescript [NhtsaApiResponse]
interface NhtsaApiResponse<DecodeVinValuesExtendedResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinValuesExtendedResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/decode-vin-values-extended.ts#example-response
:::

### If `doFetch` is set to `false`

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/WA1A4AFY2J2008189?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - DecodeVinValuesExtendedResults

Ƭ **DecodeVinValuesExtendedResults**: `Object`

Object returned in the `Results` array of `DecodeVinValuesExtended` endpoint response.

In the return object, `Results` will be an array with a _single_ object of type
`DecodeVinValuesExtendedResults`.

::: details :mag: Click to Show Type Definition
<<< @/snippets/endpoints/decode-vin-values-extended.ts#type-results
:::

## Examples

::: tip :bulb: Examples 1-3:

```typescript
=> Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Decode VIN

```ts
import { DecodeVinValuesExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesExtended('WA1A4AFY2J2008189')
```

### Example 2: Decode VIN with optional Model Year

```ts
import { DecodeVinValuesExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesExtended('WA1A4AFY2J2008189', {
  modelYear: 2018,
})
```

### Example 3: Decode Partial VIN

```ts
import { DecodeVinValuesExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesExtended('5UXWX7C5*BA')
```

::: warning :bulb: Examples 4-5:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 4: Decode VIN and doFetch = false

```ts
import { DecodeVinValuesExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinValuesExtended('WA1A4AFY2J2008189', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/WA1A4AFY2J2008189?format=json'
```

### Example 5: Decode VIN with optional Model Year and doFetch = false

```ts
import { DecodeVinValuesExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinValuesExtended(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/WA1A4AFY2J2008189?modelYear=2018&format=json'
```
