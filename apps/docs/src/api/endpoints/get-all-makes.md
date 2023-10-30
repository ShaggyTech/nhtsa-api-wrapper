# GetAllMakes

---

```typescript
async function GetAllMakes(
  doFetch?: boolean
) => Promise<NhtsaResponse<GetAllMakesResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../typedoc/api/endpoints/GetAllMakes)
:::

## Description

`GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
an individual vehicle Make.

- FYI there are over 10,000 registered makes in the database!

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `doFetch?` | `boolean` | `false`       | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to NhtsaResponse objects of type
[GetAllMakesResults](#type-getallmakesresults) in the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetAllMakesResults>>
```

```typescript [NhtsaResponse]
interface NhtsaResponse<GetAllMakesResults> = {
  Count: number
  Message: string
  Results: Array<GetAllMakesResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-all-makes.ts#example-response
:::

### If `doFetch` is set to `false`

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes/?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetAllMakesResults

Ƭ **GetAllMakesResults**: `Object`

Object returned in the `Results` array of `GetAllMakes` endpoint response.

In the return object, `Results` will be an array with multiple objects of type
`GetAllMakesResults`.

<<< @/snippets/endpoints/get-all-makes.ts#type-results

## Examples

::: tip Examples 1-2:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<GetAllMakesResults>>
```

:::

### Example 1: Get All Makes

```ts
import { GetAllMakes } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllMakes()
```

### Example 2: Get All Makes and doFetch = true

```ts
import { GetAllMakes } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetAllMakes(true)
```

::: tip Example 3:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 3: Get All Makes and doFetch = false

```ts
import { GetAllMakes } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetAllMakes(false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json'
```
