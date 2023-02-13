---
outline: deep
---

# DecodeVin

[[toc]]

---

```typescript
function DecodeVin (
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinResults> | string>
```

## Description

`DecodeVin` decodes a Vehicle Identification Number (VIN) and returns useful information about
the vehicle.

Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
the model year is known at the time of decoding, but it is not required.

This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).

- Ex: 5UXWX7C5\*BA
- In this case, the VIN will be decoded partially with the available characters
- In case of partial VINs, a `*` could be used to indicate the unavailable characters
- The 9th digit is not necessary

NOTE: Unless you have a specific need to obtain "ValueID" or "VariableID" for each variable
in a decoded VIN, this package recommends using one of the `DecodeVinValues*` endpoints
instead. This is because they will return a single flat format object of key/value pairs,
where key is the name of the variable. `DecodeVinValuesBatch` will return multple flat format
objects, one for each VIN you search. The flat format is more efficient and easier to work with
as you won't have to iterate through a bunch of objects just to get all variable names/values.

## Parameters

| Name                | Type                 | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------- | -------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vin`               | `string`             | `undefined`   | Vehicle Identification Number (full or partial)                                                                                                                                                                                                                                                                                                                                          |
| `params?`           | `Object \| boolean ` | `undefined`   | Object of Query Search names and values to append to the URL as a query string. - If not providing params and want you want to set doFetch = false, you can pass false as the second arg in place of params, instead of having to pass all 3 args with params as undefined, i.e. you don't have to do this: func(arg1, undefined, doFetch), and can instead do this: func(arg1, doFetch) |
| `params.modelYear?` | `string \| number`   | `undefined`   | Optional Model Year search parameter                                                                                                                                                                                                                                                                                                                                                     |
| `doFetch`           | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)                                                                                                                                                                                                                                                                                                                       |

## Returns

If `doFetch = true` (default):

Returns a Promise that resolves to a NhtsaResponse object containing an array of [DecodeVinResults](#decodevinresults)
objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinResults>>
```

::: code-group

```typescript [NhtsaApiResponse]
interface NhtsaApiResponse<DecodeVinResults> = {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Array<DecodeVinResults>
}
```

:::

If `doFetch = false`:

Returns the URL string that would be used to fetch the data, does not fetch the data internally.

```typescript
=> Promise<<string>
```

## DecodeVinResults

Ƭ **DecodeVinResults**: `Object`

Objects returned in the `Results` array of DecodeVin endpoint response.

In the return object, `Results` will be an array with multiple objects containing 'key:value'
results. Each object will contain:

- "Variable" (variable name) and "Value" (variable value)
- "VariableID" and "ValueID" (unique ID associated with the variable/value)
- In case of text variables, the "ValueID" is not applicable

| Name         | Type               |
| :----------- | :----------------- |
| `Value`      | `string` \| `null` |
| `ValueId`    | `string` \| `null` |
| `Variable`   | `string`           |
| `VariableId` | `number`           |

## Examples

::: warning :bulb: Examples 1-3:

- Fetches data internally
- Returns `Promise<NhtsaResponse<DecodeVinResults>>`

:::

### Example 1: Decode VIN

```ts
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVin('WA1A4AFY2J2008189')
```

### Example 2: Decode VIN with optional Model Year

```ts
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVin('WA1A4AFY2J2008189', { modelYear: 2018 })
```

### Example 3: Decode Partial VIN

```ts
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVin('5UXWX7C5*BA')
```

::: warning :bulb: Examples 4-5:

- Does _not_ fetch data internally
- Returns `Promise<string>`
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 4: Decode VIN and doFetch = false

```ts
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVin('WA1A4AFY2J2008189', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?format=json'
```

### Example 5: Decode VIN with optional Model Year and doFetch = false

```ts
import { DecodeVin } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeVin('WA1A4AFY2J2008189', { modelYear: 2018 }, false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelyear=2018&format=json'
```
