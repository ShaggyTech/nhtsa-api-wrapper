**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetAllManufacturers

# api/endpoints/GetAllManufacturers

## Contents

- [Type Aliases](GetAllManufacturers.md#type-aliases)
  - [GetAllManufacturersResults](GetAllManufacturers.md#getallmanufacturersresults)
- [Functions](GetAllManufacturers.md#functions)
  - [GetAllManufacturers()](GetAllManufacturers.md#getallmanufacturers)

## Type Aliases

### GetAllManufacturersResults

> **GetAllManufacturersResults**: `object`

Objects found in the `Results` array of `GetAllManufacturers` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `Country` | `string` | - |
| `Mfr_CommonName` | `string` \| `null` | - |
| `Mfr_ID` | `number` | - |
| `Mfr_Name` | `string` | - |
| `VehicleTypes` | `object`[] | - |

#### Source

[api/endpoints/GetAllManufacturers.ts:111](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L111)

## Functions

### GetAllManufacturers()

#### GetAllManufacturers(doFetch, _dummy)

> **GetAllManufacturers**(`doFetch`?, `_dummy`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllManufacturersResults`](GetAllManufacturers.md#getallmanufacturersresults)\>\>

::: tip :bulb: More Information
See: [GetAllManufacturers Documentation](/api/endpoints/get-all-manufacturers)
:::

`GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.

`params.manufacturerType` is optional but allows the user to filter the list based on
manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
'Alterer', or any partial match of those strings.

`params.page` is optional and used to specify (n)th page of results. Results are provided in
pages of 100 items.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |
| `_dummy`? | `undefined` | - |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllManufacturersResults`](GetAllManufacturers.md#getallmanufacturersresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetAllManufacturers.ts:33](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L33)

#### GetAllManufacturers(doFetch, _dummy)

> **GetAllManufacturers**(`doFetch`?, `_dummy`?): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `doFetch`? | `false` |
| `_dummy`? | `undefined` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetAllManufacturers.ts:38](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L38)

#### GetAllManufacturers(params, doFetch)

> **GetAllManufacturers**(`params`, `doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | `object` |
| `params.manufacturerType`? | `string` |
| `params.page`? | `string` \| `number` |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetAllManufacturers.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L43)

#### GetAllManufacturers(params, doFetch)

> **GetAllManufacturers**(`params`?, `doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllManufacturersResults`](GetAllManufacturers.md#getallmanufacturersresults)\>\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `params`? | `object` |
| `params.manufacturerType`? | `string` |
| `params.page`? | `string` \| `number` |
| `doFetch`? | `true` |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetAllManufacturersResults`](GetAllManufacturers.md#getallmanufacturersresults)\>\>

##### Source

[api/endpoints/GetAllManufacturers.ts:51](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L51)
