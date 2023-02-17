[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/endpoints/GetAllManufacturers

# Module: api/endpoints/GetAllManufacturers

## Table of contents

### Functions

- [GetAllManufacturers](api_endpoints_GetAllManufacturers.md#getallmanufacturers)

### Type Aliases

- [GetAllManufacturersResults](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)

## Functions

### GetAllManufacturers

▸ **GetAllManufacturers**(`params?`, `doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

`GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.

`params.manufacturerType` is optional but allows the user to filter the list based on
manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
'Alterer', or any partial match of those strings.

`params.page` is optional and used to specify (n)th page of results. Results are provided in
pages of 100 items.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params?` | `boolean` \| { `manufacturerType?`: `string` ; `page?`: `string` \| `number`  } | `undefined` | Object of Query Search names and values to append to the URL as a query string. - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)` |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetAllManufacturersResults`](api_endpoints_GetAllManufacturers.md#getallmanufacturersresults)\>\>

- Api Response `object`
-or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetAllManufacturers.ts:33](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L33)

## Type Aliases

### GetAllManufacturersResults

Ƭ **GetAllManufacturersResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetAllManufacturers endpoint

**`Alias`**

GetAllManufacturersResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Country` | `string` |
| `Mfr_CommonName` | `string` \| ``null`` |
| `Mfr_ID` | `number` |
| `Mfr_Name` | `string` |
| `VehicleTypes` | { `IsPrimary?`: `boolean` ; `Name?`: `string`  }[] |

#### Defined in

[api/endpoints/GetAllManufacturers.ts:84](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/19d28b5/packages/lib/src/api/endpoints/GetAllManufacturers.ts#L84)
