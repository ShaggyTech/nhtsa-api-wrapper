**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / utils/getTypeof

# utils/getTypeof

## Contents

- [Functions](getTypeof.md#functions)
  - [getTypeof()](getTypeof.md#gettypeof)

## Functions

### getTypeof()

> **getTypeof**(`value`): `string`

Gets type of `value` using `Object.prototype.toString.call(value)`.

Why? Because `typeof` is not reliable for all types of values.

Object.prototype.toString gives more accurate results in the case someone has used an object wrapper
for primitive data types such as `new Number()` or `new String()`.
It will also accurately recognize any Error types, Error, TypeError, etc., as 'error'.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Any kind of value (string, object, array, function, etc). |

#### Returns

`string`

- Type of value, normalized to a lowercase string.

#### Source

[utils/getTypeof.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/getTypeof.ts#L18)
