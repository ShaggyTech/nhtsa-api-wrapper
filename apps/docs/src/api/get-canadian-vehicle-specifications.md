# GetCanadianVehicleSpecifications

[[toc]]

---

```typescript
async function GetCanadianVehicleSpecifications(
  params: {
    year: string | number
    make?: string
    model?: string
    units?: string
  },
  doFetch?: boolean
): Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../typedoc/modules/api_endpoints_GetCanadianVehicleSpecifications.md)
:::

## Description

`GetCanadianVehicleSpecifications` returns data from the Canadian Vehicle Specifications (CVS).
The CVS consists of a database of original vehicle dimensions, used primarily in
collision investigation and reconstruction, combined with a search engine.

The CVS database is compiled annually by the Collision Investigation and Research Division of
Transport Canada. Visit official
[Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
page for more details.

`params.year` is the only required query parameter, all others are optional but will still be included
in the query string as blank values even if not provided by the user. See below Note for more
details.

_NOTE:_ This endpoint does not like missing query keys and will return a 404 error if any of
them are omitted from the query string. Therefore, we must set default values to empty strings
for any query keys that are not provided by the user. This means keys not provided by user will
always show up as "something=" in the query string. `year` is the only key user must provide,
no default value is set for it so that an error will be thrown if not provided by user.

## Parameters

| Name            | Type                 | Default value | Description                                                                                                            |
| :-------------- | :------------------- | :------------ | :--------------------------------------------------------------------------------------------------------------------- |
| `params`        | `Object`             | `undefined`   | Object of Query Search names and values to append to the URL as a query string                                         |
| `params.year`   | `string` \| `number` | `undefined`   | Model year of the vehicle - year >= 1971                                                                               |
| `params.make?`  | `string`             | `undefined`   | Vehicle's make, like "Honda", "Toyota", etc...                                                                         |
| `params.model?` | `string`             | `undefined`   | Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc... |
| `params.units?` | `string`             | `undefined`   | "Metric" (default), or "US" for standard units                                                                         |
| `doFetch?`      | `boolean`            | `true`        | Whether to fetch the data or just return the URL (default: `true`)                                                     |

::: warning 📝 NOTE

Any `params` that are not listed in the table above will be ignored.

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a NhtsaResponse object containing an array of
[GetCanadianVehicleSpecificationsResults](#type-getcanadianvehiclespecificationsresults) objects in
the `Results` key.

```typescript
=> Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>>
```

```typescript
type NhtsaApiResponse<GetCanadianVehicleSpecificationsResults> = {
  Count: number
  Message: string
  Results: Array<GetCanadianVehicleSpecificationsResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/get-canadian-vehicle-specifications.ts#example-response
:::

### If `doFetch` is set to `false`

Returns a URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications/?Year=2011&Make=Acura&Model=&units=&format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - GetCanadianVehicleSpecificationsResults

<<< @/snippets/endpoints/get-canadian-vehicle-specifications.ts#type-results

Ƭ **GetCanadianVehicleSpecificationsResults**: `Object`

Objects returned in the `Results` array of `GetCanadianVehicleSpecifications` endpoint
response.

## Examples

::: tip :bulb: Examples 1-2:

```typescript
=> Promise<NhtsaResponse<GetCanadianVehicleSpecificationsResults>>
```

- Fetches data from VPIC API internally

:::

### Example 1: Get Results With Only `year`

```ts
import { GetCanadianVehicleSpecifications } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetCanadianVehicleSpecifications({ year: 2015 })
```

### Example 2: Get Results With All `params`

```ts
import { GetCanadianVehicleSpecifications } from '@shaggytools/nhtsa-api-wrapper'

const response = await GetCanadianVehicleSpecifications({
  year: 2015,
  make: 'Audi',
  model: 'RS7',
  units: 'Metric',
})
```

::: warning :bulb: Examples 3-4:

```typescript
=> Promise<string>
```

- Does _NOT_ fetch data from VPIC API internally
- See: [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md#option-1-set-dofetch-to-false)

:::

### Example 3: Get Results and doFetch = false

```ts
import { GetCanadianVehicleSpecifications } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetCanadianVehicleSpecifications({ year: 2015 }, false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications/?Year=2011&Make=&Model=&units=&format=json'
```

### Example 4: Get Results With All `params` and doFetch = false

```ts
import { GetCanadianVehicleSpecifications } from '@shaggytools/nhtsa-api-wrapper'

const url = await GetCanadianVehicleSpecifications(
  { year: 2015, make: 'Audi', model: 'RS7', units: 'Metric' },
  false
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetCanadianVehicleSpecifications/?Year=2015&Make=Audi&Model=RS7&units=Metric&format=json'
```
