# DecodeVinExtended

---

```typescript
async function DecodeVinExtended (
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinExtendedResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/endpoints/DecodeVinExtended)
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

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[DecodeVinExtendedResults](#type-decodevinextendedresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinExtendedResults>>
```

```typescript
type NhtsaResponse<DecodeVinExtendedResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinExtendedResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/decode-vin-extended.ts#example-response
:::

### If `doFetch` is set to `false`

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/WA1A4AFY2J2008189?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type DecodeVinExtendedResults

<<< @/snippets/endpoints/decode-vin-extended.ts#type-results

::: details :mag: Click to Show All Possible `Variable` Names
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

::: tip Examples 1-3:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<DecodeVinExtendedResults>>
```

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
  modelYear: 2018,
})
```

### Example 3: Decode Partial VIN

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinExtended('5UXWX7C5*BA')
```

::: tip Examples 4-5:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 4: Decode VIN and doFetch = false

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinExtended('WA1A4AFY2J2008189', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/WA1A4AFY2J2008189?format=json'
```

### Example 5: Decode VIN with optional Model Year and doFetch = false

```ts
import { DecodeVinExtended } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVinExtended(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/WA1A4AFY2J2008189?modelYear=2018&format=json'
```
