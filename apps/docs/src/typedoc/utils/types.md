**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / utils/types

# utils/types

## Contents

- [References](types.md#references)
  - [IArgToValidate](types.md#iargtovalidate)
  - [QueryStringParams](types.md#querystringparams)
  - [QueryStringParamsEncoded](types.md#querystringparamsencoded)
  - [QueryStringTypes](types.md#querystringtypes)
- [Type Aliases](types.md#type-aliases)
  - [AtLeastOne`<T, R>`](types.md#atleastonet-r)
  - [Impossible`<K>`](types.md#impossiblek)
  - [NoExtraProperties`<T, U>`](types.md#noextrapropertiest-u)
  - [RequireOnlyOne`<T, Keys>`](types.md#requireonlyonet-keys)

## References

### IArgToValidate

Re-exports [IArgToValidate](argHandler.md#iargtovalidate)

### QueryStringParams

Re-exports [QueryStringParams](queryString.md#querystringparams)

### QueryStringParamsEncoded

Re-exports [QueryStringParamsEncoded](queryString.md#querystringparamsencodedt)

### QueryStringTypes

Re-exports [QueryStringTypes](queryString.md#querystringtypes)

## Type Aliases

### AtLeastOne`<T, R>`

> **AtLeastOne**\<`T`, `R`\>: `{ [P in R]-?: Required<Pick<T, P>> & Partial<Omit<T, P>> }`\[`R`\]

Require at least one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `T` | - |
| `R` extends keyof `T` | keyof `T` |

#### Source

[utils/types.ts:18](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L18)

***

### Impossible`<K>`

> **Impossible**\<`K`\>: `{ [P in K]: never }`

A type that, when passed a union of keys, creates an object which cannot have those properties.
Used in conjunction with `NoExtraProperties` to create a type that can only have the properties
you want it to have.
https://stackoverflow.com/a/57117594

#### Type parameters

| Parameter |
| :------ |
| `K` extends keyof `never` |

#### Source

[utils/types.ts:38](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L38)

***

### NoExtraProperties`<T, U>`

> **NoExtraProperties**\<`T`, `U`\>: `U` & [`Impossible`](types.md#impossiblek)\<`Exclude`\<keyof `U`, keyof `T`\>\>

Provide it the type that contains only the properties you want, and then a type that extends that
type, based on what the caller provided using generics.
https://stackoverflow.com/a/57117594

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `T` | - |
| `U` extends `T` | `T` |

#### Source

[utils/types.ts:47](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L47)

***

### RequireOnlyOne`<T, Keys>`

> **RequireOnlyOne**\<`T`, `Keys`\>: `Omit`\<`T`, `Keys`\> & `{ [K in keyof Required<T>]: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>> }`\[`Keys`\]

Require only one of a set of properties in an object
https://stackoverflow.com/a/49725198

#### Type parameters

| Parameter | Default |
| :------ | :------ |
| `T` | - |
| `Keys` extends keyof `T` | keyof `T` |

#### Source

[utils/types.ts:26](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/types.ts#L26)
