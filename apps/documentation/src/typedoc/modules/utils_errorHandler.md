[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / utils/errorHandler

# Module: utils/errorHandler

## Table of contents

### Functions

- [handleError](utils_errorHandler.md#handleerror)
- [isError](utils_errorHandler.md#iserror)
- [rejectWithError](utils_errorHandler.md#rejectwitherror)

## Functions

### handleError

▸ **handleError**(`error`): `Error`

Handles errors by returning an Error instance.
Accepts any type of value but will return default error message of `an unknown error occurred` if
`error` is not an Error type or a message string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`Error`

- instance of Error with message

#### Defined in

[utils/errorHandler.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/utils/errorHandler.ts#L26)

___

### isError

▸ **isError**(`error`): `boolean`

Checks if `error` is an instance of any Error type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`boolean`

- True if `error` is an instance of Error, TypeError, etc.

#### Defined in

[utils/errorHandler.ts:14](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/utils/errorHandler.ts#L14)

___

### rejectWithError

▸ **rejectWithError**(`error`): `Promise`<`never`\>

Returns a Promise rejection containing an Error instance.
Uses [handleError](utils_errorHandler.md#handleerror) to return a default error message if `error` is
not an Error type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`Promise`<`never`\>

#### Defined in

[utils/errorHandler.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/881ab5c/packages/lib/src/utils/errorHandler.ts#L44)
