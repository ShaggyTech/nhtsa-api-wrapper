# Offline VIN Validation

This package exports an offline VIN validation function called `isValidVin`, that can be used to
validate a VIN without making a request to the API. Useful if you want to validate a VIN before
making a request to the API using an invalid VIN that would return no results.

[`isValidVin`](../utils/is-valid-vin) returns a boolean value of `true` if the VIN is valid, or
`false` if it is not.

---

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

Some other example usage would include:

- Validating a VIN before storing it in a database.
- A user enters their VIN into a form input and you want to show an error state if the VIN is
  invalid.
