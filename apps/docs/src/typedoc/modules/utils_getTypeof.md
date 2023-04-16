[@shaggytools/nhtsa-api-wrapper - v3.0.2](../index.md) / [Exports](../modules.md) / utils/getTypeof

# Module: utils/getTypeof

## Table of contents

### Functions

- [getTypeof](utils_getTypeof.md#gettypeof)

## Functions

### getTypeof

▸ **getTypeof**(`value`): `string`

Gets type of `value` using `Object.prototype.toString.call(value)`.

Why? Because `typeof` is not reliable for all types of values.

Object.prototype.toString gives more accurate results in the case someone has used an object wrapper
for primitive data types such as `new Number()` or `new String()`.
It will also accurately recognize any Error types, Error, TypeError, etc., as 'error'.

#### Parameters

| Name    | Type      | Description                                               |
| :------ | :-------- | :-------------------------------------------------------- |
| `value` | `unknown` | Any kind of value (string, object, array, function, etc). |

#### Returns

`string`

- Type of value, normalized to a lowercase string.

#### Defined in

[utils/getTypeof.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/getTypeof.ts#L18)
