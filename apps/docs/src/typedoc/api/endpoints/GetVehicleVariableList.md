**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../../modules.md) / api/endpoints/GetVehicleVariableList

# api/endpoints/GetVehicleVariableList

## Contents

- [Type Aliases](GetVehicleVariableList.md#type-aliases)
  - [GetVehicleVariableListResults](GetVehicleVariableList.md#getvehiclevariablelistresults)
- [Functions](GetVehicleVariableList.md#functions)
  - [GetVehicleVariableList()](GetVehicleVariableList.md#getvehiclevariablelist)

## Type Aliases

### GetVehicleVariableListResults

> **GetVehicleVariableListResults**: `object`

Objects found in the `Results` array of `GetVehicleVariableList` endpoint response.

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `DataType` | `"string"` \| `"int"` \| `"decimal"` \| `"lookup"` | - |
| `Description` | `string` | - |
| `GroupName` | `string` \| `null` | - |
| `ID` | `number` | - |
| `Name` | `string` | - |

#### Source

[api/endpoints/GetVehicleVariableList.ts:54](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L54)

## Functions

### GetVehicleVariableList()

#### GetVehicleVariableList(doFetch)

> **GetVehicleVariableList**(`doFetch`?): `Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetVehicleVariableListResults`](GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleVariableList Documentation](/guide/vpic/endpoints/get-vehicle-variable-list)
:::

`GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
vPIC dataset. Information on the name, description and the type of the variable is provided.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `doFetch`? | `true` | Whether to fetch the data or just return the URL<br />(default: `true`) |

##### Returns

`Promise`\<[`NhtsaResponse`](../types.md#nhtsaresponset)\<[`GetVehicleVariableListResults`](GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

##### Source

[api/endpoints/GetVehicleVariableList.ts:23](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L23)

#### GetVehicleVariableList(doFetch)

> **GetVehicleVariableList**(`doFetch`): `Promise`\<`string`\>

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `doFetch` | `false` |

##### Returns

`Promise`\<`string`\>

##### Source

[api/endpoints/GetVehicleVariableList.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L27)
