---
outline: deep
---

# DecodeVinExtended

[[toc]]

---

```typescript
function DecodeVinExtended (
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinExtendedResults> | string>
```

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

## Description

`DecodeVinExtended` decodes a Vehicle Identification Number (VIN) and returns useful information
about the vehicle.

This endpoint is similar to `DecodeVin` but returns additional information on variables related
to other NHTSA programs like the
[NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa).

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).

- Ex: 5UXWX7C5\*BA
- In this case, the VIN will be decoded partially with the available characters
- In case of partial VINs, a `*` could be used to indicate the unavailable characters
- The 9th digit is not necessary

::: tip :bulb: TIP
This package recommends using one of the `DecodeVinValuesX` endpoints before this one, unless you
have a specific need to obtain "ValueID" or "VariableID" for each variable in a decoded VIN.

This is because they will return a single flat format object of key/value pairs,
where key is the name of the variable. `DecodeVinValuesBatch` will return multiple flat format
objects, one for each VIN you search.

The flat format is more efficient and easier to work with as you won't have to iterate through a
bunch of objects just to get all variable names/values.
:::

## Returns

**Default:**

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[DecodeVinExtendedResults](#type-decodevinextendedresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinExtendedResults>>
```

```typescript
type NhtsaApiResponse<DecodeVinExtendedResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinExtendedResults>
  SearchCriteria: string
}
```

::: details :mag: Click to View Full Example Response
<<< @/snippets/endpoints/decode-vin-extended.ts#example-response
:::

**If `doFetch` is set to `false`:**

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/WA1A4AFY2J2008189?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type DecodeVinExtendedResults

<<< @/snippets/endpoints/decode-vin-extended.ts#type-results

::: details :mag: Click to View All Possible `Variable` Names
<<< @/snippets/endpoints/decode-vin-extended.ts#type-variable-names
:::

Ƭ **DecodeVinExtendedResults**: `Object`

Objects returned in the `Results` array of `DecodeVinExtended` endpoint response.

In the return object, `Results` will be an array with multiple objects containing 'key:value'
results. Each object will contain:

- "Variable" (variable name) and "Value" (variable value)
- "VariableID" and "ValueID" (unique ID associated with the variable/value)
- In case of text variables, the "ValueID" is not applicable

## Examples

---

::: tip :bulb: Examples 1-3:

- Fetches data internally
- Returns `Promise<NhtsaResponse<DecodeVinExtendedResults>>`

:::

### Example 1: Decode VIN

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinExtended('WA1A4AFY2J2008189')
```

### Example 2: Decode VIN with optional Model Year

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinExtended('WA1A4AFY2J2008189', {
  modelYear: 2018
})
```

### Example 3: Decode Partial VIN

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinExtended('5UXWX7C5*BA')
```

---

::: warning :bulb: Examples 4-5:

- Does _not_ fetch data internally
- Returns `Promise<string>`
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 4: Decode VIN and doFetch = false

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinExtended('WA1A4AFY2J2008189', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?format=json'
```

### Example 5: Decode VIN with optional Model Year and doFetch = false

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinExtended(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'
```
