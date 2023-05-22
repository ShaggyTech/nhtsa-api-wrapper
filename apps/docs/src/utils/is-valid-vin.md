# isValidVin Utility Function

```typescript
const isValidVin: (vin: string) => boolean
```

---

Provides **offline** validation of Vehicle Identification Numbers (VINs) using the
[VIN Check Algorithm](<https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit>).

`isValidVin` returns a boolean value of `true` if the VIN is valid, or `false` if it is not.

Behind the scenes, the function uses a the
[VIN Check Algorithm](<https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/Check_digit>)
to validate the VIN.

For an interactive view of how the VIN digit is calculated see the
[VPIC Check Digit Calculator](https://vpic.nhtsa.dot.gov/decoder/CheckDigit/Index/5yj3e1eaxhf000316)
page.

::: tip

You can see implementation of the VIN Check Algorithm in the
[source code](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/73d35828eec1392d2736a979ce874216456fc837/packages/lib/src/utils/isValidVin.ts)
for `isValidVin`.

:::

---

## Usage

```typescript
import { isValidVin } from '@shaggytools/nhtsa-api-wrapper'

const isValid = isValidVin('WA1A4AFY2J2008189') // true
```

If you need to test that the function works, you can use 17 ones `11111111111111111` as a valid
VIN.

Straight-ones (seventeen consecutive '1's) will suffice the check-digit algorithm. This is because a
value of one, multiplied against 89 (sum of weights), is still 89. And 89 % 11 is 1, the check
digit. This is an easy way to test a vin-check algorithm.

```typescript
const isValidStraightOnes = isValidVin('11111111111111111') // true
```

## Examples

See the [Offline VIN Validation](/guide/offline-vin-validation#examples) page for examples.
