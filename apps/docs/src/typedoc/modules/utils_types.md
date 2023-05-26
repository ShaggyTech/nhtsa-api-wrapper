[@shaggytools/nhtsa-api-wrapper - v3.0.4](../index.md) / [Exports](../modules.md) / utils/types

# Module: utils/types

## Table of contents

### References

- [IArgToValidate](utils_types.md#iargtovalidate)
- [QueryStringParams](utils_types.md#querystringparams)
- [QueryStringParamsEncoded](utils_types.md#querystringparamsencoded)
- [QueryStringTypes](utils_types.md#querystringtypes)

### Type Aliases

- [AtLeastOne](utils_types.md#atleastone)
- [RequireOnlyOne](utils_types.md#requireonlyone)

## References

### IArgToValidate

Re-exports [IArgToValidate](utils_argHandler.md#iargtovalidate)

---

### QueryStringParams

Re-exports [QueryStringParams](utils_queryString.md#querystringparams)

---

### QueryStringParamsEncoded

Re-exports [QueryStringParamsEncoded](utils_queryString.md#querystringparamsencoded)

---

### QueryStringTypes

Re-exports [QueryStringTypes](utils_queryString.md#querystringtypes)

## Type Aliases

### AtLeastOne

Ƭ **AtLeastOne**<`T`, `R`\>: { [P in R]-?: Required<Pick<T, P\>\> & Partial<Omit<T, P\>\> }[`R`]

Require at least one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `T`  | `T`                           |
| `R`  | extends keyof `T` = keyof `T` |

#### Defined in

[utils/types.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L18)

---

### RequireOnlyOne

Ƭ **RequireOnlyOne**<`T`, `Keys`\>: `Omit`<`T`, `Keys`\> & { [K in keyof Required<T\>]: Required<Pick<T, K\>\> & Partial<Record<Exclude<Keys, K\>, undefined\>\> }[`Keys`]

Require only one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Name   | Type                          |
| :----- | :---------------------------- |
| `T`    | `T`                           |
| `Keys` | extends keyof `T` = keyof `T` |

#### Defined in

[utils/types.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L26)
