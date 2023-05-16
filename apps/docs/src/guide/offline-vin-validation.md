# Offline VIN Validation

This package exports an offline VIN validation function called `isValidVin`, that can be used to
validate a VIN without making a request to the API. Useful if you want to validate a VIN before
making a request to the API using an invalid VIN that would return no results.

---

## isValidVin

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

### Usage

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

### Examples

The following demonstrates how to use the `isValidVin` function to validate a VIN before making
a request to the API. This can serve as a way to prevent making an unnecessary request to the API
with an invalid VIN that would return no or irrelevant results.

```typescript
import { isValidVin, DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const vin = 'WA1A4AFY2J2008189'

async function decodeVin(vin: string) {
  if (!isValidVin(vin)) {
    console.log('Invalid VIN!')
    return
  }

  return DecodeVinValues(vin)
}

const response = await decodeVin(vin)

console.log(response.Results[0])
```
