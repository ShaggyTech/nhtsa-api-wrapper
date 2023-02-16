# Module: api/endpoints/GetVehicleVariableList

## Table of contents

### Type Aliases

- [GetVehicleVariableListResults](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)

### Functions

- [GetVehicleVariableList](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelist)

## Type Aliases

### GetVehicleVariableListResults

Ƭ **GetVehicleVariableListResults**: `Object`

Objects found in the NhtsaResponse 'Results' array of GetVehicleVariableList endpoint

**`Alias`**

GetVehicleVariableListResults

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DataType` | ``"string"`` \| ``"int"`` \| ``"decimal"`` \| ``"lookup"`` |
| `Description` | `string` |
| `GroupName` | `string` \| ``null`` |
| `ID` | `number` |
| `Name` | `string` |

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:39](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L39)

## Functions

### GetVehicleVariableList

▸ **GetVehicleVariableList**(`doFetch?`): `Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableListResults`](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

`GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
vPIC dataset. Information on the name, description and the type of the variable is provided.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `doFetch?` | `boolean` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<`string` \| [`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableListResults`](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

- Api Response
`object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:14](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/8c71dfe/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L14)
