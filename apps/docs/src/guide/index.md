# @shaggytools/nhtsa-api-wrapper

---

## Features

✔️ A thin Javascript client for the [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/)

✔️ Includes a set of helper functions to retrieve data from each of the
[24 VPIC API endpoints](../api/index.md#vpic-api-endpoints)

✔️ A helper composable function (`useNHTSA`) with tools to interact with the VPIC API at a lower
level. See [useNHTSA](../utils/use-nhtsa-composable.md)

✔️ Built with TypeScript support in mind. Get full type hints and code
completion. API responses are [fully typed](../guide/typescript.md#nhtsa-api-response-types)

## Overview

`@shaggytools/nhtsa-api-wrapper` provides an easy way to interact with the National Highway Traffic
Safety Administration (NHTSA) Vehicle Information API (VPIC).

It's a thin javascript 'wrapper' or 'client' around the VPIC API. Included are helper functions to
make interacting with the API and retrieving data less of a chore.

## What is the NHTSA VPIC API?

The [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/) is primarily used for decoding useful
information from a Vehicle Identification Number (VIN) in the United States and Canada.
It can also be used to get all models of a make, to decode WMIs, get all makes for a certain year,
and more.

A list of all 24 VPIC endpoints can be found in the
[NHTSA API Endpoints](../api/index.md#vpic-api-endpoints) section.

::: tip :bulb: TIP

When this documentation mentions API "Endpoints" it's referring to the 24 `Methods` listed in
the [VPIC API Docs](https://vpic.nhtsa.dot.gov/api/).

:::

The best part about the VPIC API is that it's free and doesn't require an API key. The
wonderful people at the National Highway Traffic Safety Administration (NHTSA) have made it
openly available to the public.

You can use it to build things for vehicle related apps. Creating a contact form for example, you
would have the user first select a year and then have make and model dropdowns populated with the
actual makes and models for that year.

For a real world example of this, check out some of my other projects that use the VPIC API:

- **[Dubsquared Contact Form](https://dubsquared.com/contact#contact-form)**
- **[Simple Vin-Decoder](https://shaggytech.com/vin-decoder)**

## Where can you use this package?

- Use it in out of the box in Javascript environments that support the
  [native Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  See also
  [This Package Uses Native Fetch](../guide/native-fetch.md#this-package-uses-native-fetch).

- Use it in _any_ Javascript environment to simply build the url strings for the endpoints
  and do the fetching yourself. It will not use the native Fetch API internally this way.
  See also
  [Alternate Use Of This Package](../guide/bring-your-own-fetch.md#alternate-use-of-this-package).

::: warning 🔞 WARNING

This package uses the
[built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no bundled
polyfill for very old Browsers or Node.js versions < 18.

:::

## Next Steps

- [Installation](../guide/install.md)
- [Getting Started](../guide/getting-started.md)
- [VIN Decoding](../guide/vin-decoding.md)
- [Offline VIN Validation](../guide/offline-vin-validation.md)
- [NHTSA API Endpoints](../api/index.md#vpic-api-endpoints)
