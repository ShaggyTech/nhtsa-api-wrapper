[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / utils/queryString

# Module: utils/queryString

## Table of contents

### Type Aliases

- [QueryStringParams](utils_queryString.md#querystringparams)
- [QueryStringParamsEncoded](utils_queryString.md#querystringparamsencoded)
- [QueryStringTypes](utils_queryString.md#querystringtypes)

### Functions

- [createQueryString](utils_queryString.md#createquerystring)
- [encodeQueryStringParams](utils_queryString.md#encodequerystringparams)
- [useQueryString](utils_queryString.md#usequerystring)

## Type Aliases

### QueryStringParams

Ƭ **QueryStringParams**: `Record`<`string`, [`QueryStringTypes`](utils_queryString.md#querystringtypes)\>

Object to build the query string with

#### Defined in

[utils/queryString.ts:13](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L13)

___

### QueryStringParamsEncoded

Ƭ **QueryStringParamsEncoded**<`T`\>: { [key in keyof T]: string }

Object returned by encodeQueryStringParams()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[utils/queryString.ts:16](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L16)

___

### QueryStringTypes

Ƭ **QueryStringTypes**: `string` \| `number` \| `boolean`

Valid URI component types

#### Defined in

[utils/queryString.ts:10](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L10)

## Functions

### createQueryString

▸ **createQueryString**<`T`\>(`params?`, `allowEmptyParams?`): `string`

Utility function to generate a query string conforming to URI component standards. Takes an an
optional object of search parameters and returns an encoded query string.

The parameter `{ format: 'json' }` is hardcoded and cannot be overridden, this package provides
no support for CSV or XML formats at this time. The default query string will be "?format=json"
even if no `params` are provided by user.

- Ignores parameters that are not strings, numbers, or booleans, and also ignores empty strings
  by default.
- If first argument is not an object then it will be ignored.
- If second argument `allowEmptyParams` is set to `true`, the function will include keys with
  empty string values, e.g. 'emptyKey='

This function is not exported by the package, but is used internally by other
functions. However, it _is_ exported by the package as part of the composable function
`useQueryString`, and renamed to `createString` for less verbose use.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`QueryStringParams`](utils_queryString.md#querystringparams) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `params` | `T` | `undefined` | An object of search parameters to be converted to a query string. |
| `allowEmptyParams?` | `boolean` | `false` | Set to `true` to include keys with empty string values, e.g. 'emptyKey='. |

#### Returns

`string`

- A query string of search parameters for use in a final fetch URL.

#### Defined in

[utils/queryString.ts:42](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L42)

___

### encodeQueryStringParams

▸ **encodeQueryStringParams**<`T`\>(`params`): [`QueryStringParamsEncoded`](utils_queryString.md#querystringparamsencoded)<`T`\>

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

| Name | Type |
| :------ | :------ |
| `T` | extends [`QueryStringParams`](utils_queryString.md#querystringparams) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `T` | An object of search parameters to be encoded. |

#### Returns

[`QueryStringParamsEncoded`](utils_queryString.md#querystringparamsencoded)<`T`\>

- A new object of same keys as the original object with
values converted to URI component strings. Any keys with values not a string, number, or
boolean are filtered out of final object.

#### Defined in

[utils/queryString.ts:95](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L95)

___

### useQueryString

▸ **useQueryString**(): `Object`

`useQueryString` is a composable function that returns an object containing methods for creating
and handling query strings.

The exported methods are:
- `createString()` - Creates a query string from an object of search parameters.
- `encodeParams()` - Encodes all params in an object into URI component encoded strings and
  returns a new object with the encoded params. Silently filters out any params that are not
  strings, numbers, or booleans.

**`Example`**

```ts
// Create a query string from an object of search parameters
const params = { param1: 'value1', param2: 'value with spaces' }
const queryString = useQueryString().createString(params)
// queryString === '?param1=value1&param2=value%20with%20spaces&format=json'
// format=json is hardcoded and is always included in the query string for this package.
```

**`Example`**

```ts
// Same params and return value but using destructure syntax
const { createString } = useQueryString()
const queryString = createString(params)
```

**`Example`**

```ts
// Encode query string params values into URI component encoded strings and return a new object
const params = { param1: 'value1', param2: true, param3: ['array will be filtered'] }
const encodedParams = useQueryString().encodeParams(params)
// encodedParams === { param1: 'value1', param2: 'true' }
```

#### Returns

`Object`

- Object containing methods for creating and handling query strings.

| Name | Type |
| :------ | :------ |
| `createString` | <T\>(`params`: `T`, `allowEmptyParams?`: `boolean`) => `string` |
| `encodeParams` | <T\>(`params`: `T`) => [`QueryStringParamsEncoded`](utils_queryString.md#querystringparamsencoded)<`T`\> |

#### Defined in

[utils/queryString.ts:146](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/ffa4a7a/packages/lib/src/utils/queryString.ts#L146)
