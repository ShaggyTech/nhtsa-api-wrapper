**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / utils/errorHandler

# utils/errorHandler

## Contents

- [Functions](errorHandler.md#functions)
  - [handleError()](errorHandler.md#handleerror)
  - [isError()](errorHandler.md#iserror)
  - [rejectWithError()](errorHandler.md#rejectwitherror)

## Functions

### handleError()

> **handleError**(`error`): `Error`

Handles errors by returning an Error instance.
Accepts any type of value but will return default error message of `an unknown error occurred` if
`error` is not an Error type or a message string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`Error`

- instance of Error with message

#### Source

[utils/errorHandler.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/errorHandler.ts#L26)

***

### isError()

> **isError**(`error`): `boolean`

Checks if `error` is an instance of any Error type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`boolean`

- True if `error` is an instance of Error, TypeError, etc.

#### Source

[utils/errorHandler.ts:14](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/errorHandler.ts#L14)

***

### rejectWithError()

> **rejectWithError**(`error`): `Promise`\<`never`\>

Returns a Promise rejection containing an Error instance.
Uses [handleError](errorHandler.md#handleerror) to return a default error message if `error` is
not an Error type.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `error` | `unknown` | Any type of value |

#### Returns

`Promise`\<`never`\>

#### Source

[utils/errorHandler.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/errorHandler.ts#L47)
