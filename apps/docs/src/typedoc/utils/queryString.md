**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / utils/queryString

# utils/queryString

## Contents

- [Type Aliases](queryString.md#type-aliases)
  - [QueryStringParams](queryString.md#querystringparams)
  - [QueryStringParamsEncoded`<T>`](queryString.md#querystringparamsencodedt)
  - [QueryStringTypes](queryString.md#querystringtypes)
- [Functions](queryString.md#functions)
  - [createQueryString()](queryString.md#createquerystring)
  - [encodeQueryStringParams()](queryString.md#encodequerystringparams)

## Type Aliases

### QueryStringParams

> **QueryStringParams**: `Record`\<`string`, [`QueryStringTypes`](queryString.md#querystringtypes)\>

Object to build the query string with

#### Source

[utils/queryString.ts:13](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/queryString.ts#L13)

***

### QueryStringParamsEncoded`<T>`

> **QueryStringParamsEncoded**\<`T`\>: `{ [key in keyof T]: string }`

Object returned by encodeQueryStringParams()

#### Type parameters

| Parameter |
| :------ |
| `T` |

#### Source

[utils/queryString.ts:16](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/queryString.ts#L16)

***

### QueryStringTypes

> **QueryStringTypes**: `string` \| `number` \| `boolean`

Valid URI component types

#### Source

[utils/queryString.ts:10](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/queryString.ts#L10)

## Functions

### createQueryString()

> **createQueryString**\<`T`\>(`params`, `allowEmptyParams`?): `string`

This function is used internally by other package functions. As a consumer of this package, you
should not need to use this function directly in most cases.

Utility function to generate a query string conforming to URI component standards. Takes an an
optional object of search parameters and returns an encoded query string.

This function will always override `params.format` with `{ format: 'json' }`. This is hardcoded
into the package and cannot be overridden, this package provides no support for CSV or XML
formats at this time. This means the default query string will be `"?format=json"` even if no
`params` are provided by user.

- Ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings
  by default.

- If you don't provide an object as the first argument, an error will be thrown. Providing an
  empty object will not throw an error.

- If the second argument, `allowEmptyParams`, is set to `true`, the function will include keys
  with empty string values in the final query string, e.g. 'emptyKey='.

#### Type parameters

| Parameter |
| :------ |
| `T` extends [`QueryStringParams`](queryString.md#querystringparams) |

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `T` | `undefined` | An object of search parameters to be converted to a query<br />string. |
| `allowEmptyParams`? | `boolean` | `false` | Set to `true` to include keys with empty string<br />values, e.g. 'emptyKey='. |

#### Returns

`string`

- A query string of search parameters for use in a final fetch URL.

#### Source

[utils/queryString.ts:100](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/queryString.ts#L100)

***

### encodeQueryStringParams()

> **encodeQueryStringParams**\<`T`\>(`params`): [`QueryStringParamsEncoded`](queryString.md#querystringparamsencodedt)\<`T`\>

This function is used internally by other package functions. As a consumer of this package, you
should not need to use this function directly in most cases.

Utility function to perform URI component encoding on all values in an object, for use in URL
query strings.

- Returns an object of valid URI encoded parameters with same keys as the original object.
- Will silently filter out parameters with values that are not type `string`, `number`, or
  `boolean`.
- It filters invalid key/values so that encodeURIComponent() does not throw an error.

In it's current implementation, this function assumes that invalid types have already been
filtered out, and that all values are valid. If you need to be sure that all keys are present
in the returned object, you can use the `validateArgument()` function to check the types of all
values are valid before calling this function.

This function is not exported by the package, but is used internally by other
functions. However, it _is_ exported by the package as part of the composable function
`useQueryString`, and renamed to `encodeParams` for less verbose use.

#### Type parameters

| Parameter |
| :------ |
| `T` extends [`QueryStringParams`](queryString.md#querystringparams) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | `T` | An object of search parameters to be encoded. |

#### Returns

[`QueryStringParamsEncoded`](queryString.md#querystringparamsencodedt)\<`T`\>

- A new object of same keys as the original object with
values converted to URI component strings. Any keys with values not a string, number, or
boolean are filtered out of final object.

#### Source

[utils/queryString.ts:44](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/queryString.ts#L44)
