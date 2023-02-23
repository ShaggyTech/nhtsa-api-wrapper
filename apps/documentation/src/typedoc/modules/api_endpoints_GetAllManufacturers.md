[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetAllManufacturers

# Module: api/endpoints/GetAllManufacturers

## Table of contents

### Functions

- [GetAllManufacturers](api_endpoints_GetAllManufacturers.md#getallmanufacturers)

### Type Aliases

- [GetAllManufacturersResults](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)

## Functions

### GetAllManufacturers

▸ **GetAllManufacturers**(`doFetch?`, `_dummy?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

::: tip :bulb: More Information
See: [GetAllManufacturers Documentation](/api/get-all-manufacturers)
:::

`GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.

`params.manufacturerType` is optional but allows the user to filter the list based on
manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
'Alterer', or any partial match of those strings.

`params.page` is optional and used to specify (n)th page of results. Results are provided in
pages of 100 items.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `doFetch?` | ``true`` | Whether to fetch the data or just return the URL (default: `true`) |
| `_dummy?` | `undefined` | - |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetAllManufacturers.ts:33](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L33)

▸ **GetAllManufacturers**(`doFetch?`, `_dummy?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `doFetch?` | ``false`` |
| `_dummy?` | `undefined` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetAllManufacturers.ts:38](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L38)

▸ **GetAllManufacturers**(`params`, `doFetch`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.manufacturerType?` | `string` |
| `params.page?` | `string` \| `number` |
| `doFetch` | ``false`` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetAllManufacturers.ts:43](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L43)

▸ **GetAllManufacturers**(`params?`, `doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `Object` |
| `params.manufacturerType?` | `string` |
| `params.page?` | `string` \| `number` |
| `doFetch?` | ``true`` |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

#### Defined in

[api/endpoints/GetAllManufacturers.ts:51](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L51)

## Type Aliases

### GetAllManufacturersResults

Ƭ **GetAllManufacturersResults**: `Object`

Objects found in the `Results` array of `GetAllManufacturers` endpoint response.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Country` | `string` |
| `Mfr_CommonName` | `string` \| ``null`` |
| `Mfr_ID` | `number` |
| `Mfr_Name` | `string` |
| `VehicleTypes` | { `IsPrimary?`: `boolean` ; `Name?`: `string`  }[] |

#### Defined in

[api/endpoints/GetAllManufacturers.ts:111](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/158685c/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L111)
