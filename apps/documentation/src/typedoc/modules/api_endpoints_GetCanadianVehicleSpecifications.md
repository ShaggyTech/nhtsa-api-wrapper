[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetCanadianVehicleSpecifications

# Module: api/endpoints/GetCanadianVehicleSpecifications

## Table of contents

### Functions

- [GetCanadianVehicleSpecifications](api_endpoints_GetCanadianVehicleSpecifications.md#getcanadianvehiclespecifications)

### Type Aliases

- [GetCanadianVehicleSpecificationsResults](api_endpoints_GetCanadianVehicleSpecifications.md#getcanadianvehiclespecificationsresults)

## Functions

### GetCanadianVehicleSpecifications

▸ **GetCanadianVehicleSpecifications**(`params`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetCanadianVehicleSpecificationsResults`](api_endpoints_GetCanadianVehicleSpecifications.md#getcanadianvehiclespecificationsresults)\>\>

::: tip :bulb: More Information
See: [GetCanadianVehicleSpecifications Documentation](/api/get-canadian-vehicle-specifications)
:::

`GetCanadianVehicleSpecifications` returns data from the Canadian Vehicle Specifications (CVS).
The CVS consists of a database of original vehicle dimensions, used primarily in
collision investigation and reconstruction, combined with a search engine.

The CVS database is compiled annually by the Collision Investigation and Research Division of
Transport Canada. Visit official
[Canadian Vehicle Specifications](http://www.carsp.ca/research/resources/safety-sources/canadian-vehicle-specifications/)
page for more details.

`params.year` is the only required query parameter, all others are optional but will still be
included in the query string as blank values even if not provided by the user.
See below Note for more details.

_NOTE:_ This endpoint does not like missing query keys and will return a 404 error if any of
them are omitted from the query string. Therefore, we must set default values to empty strings
for any query keys that are not provided by the user. This means keys not provided by user will
always show up as "something=" in the query string. `year` is the only key user must provide,
no default value is set for it so that an error will be thrown if not provided by user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Object of Query Search names and values to append to the URL as a query string |
| `params.make?` | `string` | Vehicle's make, like "Honda", "Toyota", etc... |
| `params.model?` | `string` | Vehicle's model, like "Pilot", "Focus". Can also include some other elements like Body Type, Engine Model/size, etc... |
| `params.units?` | `string` | "Metric" (default), or "US" for standard units |
| `params.year` | `string` \| `number` | Model year of the vehicle - year >= 1971 |
| `doFetch?` | ``true`` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetCanadianVehicleSpecificationsResults`](api_endpoints_GetCanadianVehicleSpecifications.md#getcanadianvehiclespecificationsresults)\>\>

- Api
Response `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetCanadianVehicleSpecifications.ts:45](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetCanadianVehicleSpecifications.ts#L45)

▸ **GetCanadianVehicleSpecifications**(`params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.make?` | `string` |
| `params.model?` | `string` |
| `params.units?` | `string` |
| `params.year` | `string` \| `number` |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetCanadianVehicleSpecifications.ts:55](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetCanadianVehicleSpecifications.ts#L55)

## Type Aliases

### GetCanadianVehicleSpecificationsResults

Ƭ **GetCanadianVehicleSpecificationsResults**: `Object`

Objects found in the `Results` array of `GetCanadianVehicleSpecifications` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Specs` | { `Name`: ``"Make"`` \| ``"Model"`` \| ``"MYR"`` \| ``"OL"`` \| ``"OW"`` \| ``"OH"`` \| ``"WB"`` \| ``"CW"`` \| ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"G"`` \| ``"TWF"`` \| ``"TWR"`` \| ``"WD"`` ; `Value`: `string`  }[] |

#### Defined in

[api/endpoints/GetCanadianVehicleSpecifications.ts:120](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetCanadianVehicleSpecifications.ts#L120)
