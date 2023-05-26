[@shaggytools/nhtsa-api-wrapper - v3.0.3](../index.md) / [Exports](../modules.md) / api/endpoints/GetVehicleVariableList

# Module: api/endpoints/GetVehicleVariableList

## Table of contents

### Type Aliases

- [GetVehicleVariableListResults](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)

### Functions

- [GetVehicleVariableList](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelist)

## Type Aliases

### GetVehicleVariableListResults

Ƭ **GetVehicleVariableListResults**: `Object`

Objects found in the `Results` array of `GetVehicleVariableList` endpoint response.

#### Type declaration

| Name          | Type                                               |
| :------------ | :------------------------------------------------- |
| `DataType`    | `"string"` \| `"int"` \| `"decimal"` \| `"lookup"` |
| `Description` | `string`                                           |
| `GroupName`   | `string` \| `null`                                 |
| `ID`          | `number`                                           |
| `Name`        | `string`                                           |

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:54](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L54)

## Functions

### GetVehicleVariableList

▸ **GetVehicleVariableList**(`doFetch?`): `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableListResults`](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

::: tip :bulb: More Information
See: [GetVehicleVariableList Documentation](/api/endpoints/get-vehicle-variable-list)
:::

`GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
vPIC dataset. Information on the name, description and the type of the variable is provided.

#### Parameters

| Name       | Type   | Description                                                        |
| :--------- | :----- | :----------------------------------------------------------------- |
| `doFetch?` | `true` | Whether to fetch the data or just return the URL (default: `true`) |

#### Returns

`Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<[`GetVehicleVariableListResults`](api_endpoints_GetVehicleVariableList.md#getvehiclevariablelistresults)\>\>

- Api Response
  `object` -or- url `string` if `doFetch = false`

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:23](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L23)

▸ **GetVehicleVariableList**(`doFetch`): `Promise`<`string`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `doFetch` | `false` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/endpoints/GetVehicleVariableList.ts:27](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/endpoints/GetVehicleVariableList.ts#L27)
