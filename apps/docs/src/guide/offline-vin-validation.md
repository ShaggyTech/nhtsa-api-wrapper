# Offline VIN Validation

This package exports an offline VIN validation function called `isValidVin`, that can be used to
validate a VIN without making a network request.

Useful if you want to validate a VIN to prevent making an unnecessary request to the API with an
invalid VIN that would return no or irrelevant results.

See the [isValidVin](../utils/is-valid-vin) documentation for more details and explanation of how
this function works.

---

## Examples

The following demonstrates how to use `isValidVin` to validate a VIN before making a request to the
VPIC API.

The helper funtion `isValidVin` returns a boolean value of `true` if the VIN is valid and `false` if
not valid.

If the VIN is invalid, the function will return early and not make the request, instead logging a
message to the console that the VIN is invalid.

```typescript
import { isValidVin, DecodeVinValues } from '@shaggytools/nhtsa-api-wrapper'

const vin = 'WA1A4AFY2J2008189'

async function decodeVin(vin: string) {
  // if the VIN is not valid, return early and log a message to the console
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
