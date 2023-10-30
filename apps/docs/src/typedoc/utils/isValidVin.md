**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / utils/isValidVin

# utils/isValidVin

## Contents

- [Functions](isValidVin.md#functions)
  - [isValidVin()](isValidVin.md#isvalidvin)

## Functions

### isValidVin()

> **isValidVin**(`vin`): `boolean`

Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
[VIN Check Algorithm](https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit).

If you need to test that the algorithm is working correctly, you can use 17 ones `1` as
the VIN and it should return `true` as the result.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `vin` | `string` | Vehicle Identification Number. |

#### Returns

`boolean`

True for a valid VIN, false for an invalid VIN.

#### Example

Browser via html script tags
```ts
const isValid = NHTSA.isValidVin('3VWD07AJ5EM388202')
console.log(isValid) // true
```

#### Example

Imported as a module
```ts
import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'
const isValid = isValidVin('3VWD07AJ5EM388202')
console.log(isValid) // true
```

#### Source

[utils/isValidVin.ts:66](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/utils/isValidVin.ts#L66)
