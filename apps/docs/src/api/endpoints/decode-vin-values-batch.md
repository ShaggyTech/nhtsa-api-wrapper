# DecodeVinValuesBatch

---

```typescript
async function DecodeVinValuesBatch(
  inputString: string,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeVinValuesBatchResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/modules/api_endpoints_DecodeVinValuesBatch)
:::

## Description

`DecodeVinValuesBatch` decodes a batch of Vehicle Identification Numbers (VINs) and returns
useful information about the vehicles in in a _flat format_. This means the endpoint will return
an array with multiple objects of results. Each object represents a VIN from the `inputString`
and the key:value pairs in the objects are variables and their values for each particular VIN.

For this particular API you just have to provide a string of VINs, an `inputString`, that are
separated by a `;`. You can also indicate the model year after the vin, preceded by a `,`.

For example:

```typescript
inputString = `5UXWX7C5*BA, 2011; 5YJSA3DS*EF`
```

The `inputString` parameter should be in the following format:

- no modelYear: `vin; vin; vin`
- with modelYear: `vin, modelYear; vin, modelYear; vin, modelYear`
- mix of with/without modelYear: `vin; vin, modelYear`
- _vin_ and _modelYear_ are placeholders for real values in these examples
- all spaces between `;` and `,` are used in these examples for readability and are optional
- _Max 50 VINs per batch_

Providing the modelYear in the input string allows for the decoding to specifically be done in
the current, or older (pre-1980), model year ranges. It is recommended to always provide
the model year if it is known at the time of decoding, but it is not required.

## Parameters

| Name          | Type      | Default value | Description                                                                                                 |
| :------------ | :-------- | :------------ | :---------------------------------------------------------------------------------------------------------- |
| `inputString` | `string`  | `undefined`   | A string of Vehicle Identification Numbers (full or partial) following the format listed in the description |
| `doFetch?`    | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`)                                          |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[DecodeVinValuesBatchResults](#type-decodevinvaluesbatchresults) objects in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeVinValuesBatchResults>>
```

```typescript
type NhtsaApiResponse<DecodeVinValuesBatchResults> = {
  Count: number
  Message: string
  Results: Array<DecodeVinValuesBatchResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/decode-vin-values-batch.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesBatch'
```

::: tip :bulb: See:
[Using doFetch](../../guide/bring-your-own-fetch#using-dofetch) for info on how to
use the URL string to fetch the data in a POST request such as this endpoint.
:::

## Type - DecodeVinValuesBatchResults

::: details :mag: Click to Show Type Definition
<<< @/snippets/endpoints/decode-vin-values-batch.ts#type-results
:::

Ƭ **DecodeVinValuesBatchResults**: `Object`

Objects found in the `Results` array of `DecodeVinValuesBatch` endpoint response.

## Examples

::: tip Examples 1-4:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<DecodeVinValuesBatchResults>>
```

:::

### Example 1: Decode Multiple VINs

```ts
import { DecodeVinValuesBatch } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesBatch('5UXWX7C5*BA; 5YJSA3DS*EF')
```

### Example 2: Decode a Single VIN

```ts
import { DecodeVinValuesBatch } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesBatch('5UXWX7C5*BA')
```

### Example 3: Decode Multiple VINs with Model Years

```ts
import { DecodeVinValuesBatch } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesBatch(
  '5UXWX7C5*BA, 2011; 5YJSA3DS*EF, 2015'
)
```

### Example 4: Decode Multiple VINs omitting some Model Years

```ts
import { DecodeVinValuesBatch } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesBatch('5UXWX7C5*BA; 5YJSA3DS*EF, 2015')
```

::: tip Example 5:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- See: [Using with POST Endpoints](../../guide/bring-your-own-fetch#using-with-post-endpoints)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 5: Decode Multiple VINs and doFetch = false

```ts
import { DecodeVinValuesBatch } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeVinValuesBatch('5UXWX7C5*BA; 5YJSA3DS*EF', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesBatch'
```
