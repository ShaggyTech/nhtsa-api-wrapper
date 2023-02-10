# @shaggytools/nhtsa-api-wrapper

---

::: warning ⚠️Warning
This package uses the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no polyfill for older
Browsers or Node.js versions < `18.0.0` 🔞.

See:

- [This Package Uses Native Fetch](#this-package-uses-native-fetch)
- [Alternate Use Without Polyfills](#alternate-use-without-polyfills)

:::

## Overview

This package provides an easy way to interact with the National Highway Traffic Safety
Administration (NHTSA) Vehicle Information API (VPIC).

It is a universal (browser/server) javascript wrapper that includes helper functions to make
interacting with the API and retrieving data less of a chore.

It includes full type definitions for all functions and VPIC responses to aid in code completion
and type hints in your IDE.

## Features

✔️ - Provides a set of helper functions to retrieve data from each of the 24 API endpoints.
See: [TODO - NHTSA Endpoints](#nhtsa-api-endpoints)

✔️ - Provides a helper composable function with tools to interact with the VPIC API and build the
custom URLs for each of the 24 endpoints.
See [TODO - useNHTSA](#useNHTSA)

✔️ - All functions and endpoints are typed with TypeScript and have full type hints and code
completion in your IDE. See [TODO - API Reference](#api-reference)

✔️ - Built in runtime type-checking and error handling for all functions, so you can be sure
you'll get back a valid response from the VPIC API. See [TODO - Error Handling](#error-handling)

## What is the NHTSA VPIC API?

The VPIC API is primarily used for decoding useful information from a Vehicle Identification Number
(VIN) in the United States and Canada. It can also be used to get all models of a make, to decode
WMIs, get all makes for a certain year, and more.

A list of all 24 VPIC endpoints can be found in the [TODO - NHTSA API Endpoints](#nhtsa-api-endpoints)
section.

The best part about the VPIC API is that it's free and doesn't require an API key 👍🏽. The
wonderful people at the National Highway Traffic Safety Administration (NHTSA) have made it
available to the public free of charge. I've used it in many of my projects and have never had an
issue with it. Sometimes I wonder if they noticed me purposely trying to break the API during
development 😬.

I use it to build things for my vehicle related apps. Creating a contact form for example, you can
have the user first select a year and then have the make and model dropdowns populated with the
available options for that year.

For a real world example of this, check out some of my other projects that use this API:

- **[dubsquared.com](https://dubsquared.com/contact#contact-form)**
- **[Vin-Decoder](https://shaggytech.com/vin-decoder)**

## Why do you need this package?

Put simply, all this package really does is make it easier to use the VPIC API.

All of the VPIC endpoints require close attention when using them directly. Each endpoint requires a
different url structure and query parameters, some will return a 404 if certain parameters are
missing or not included as empty strings, a mix of 'POST' and 'GET' methods, plus other quirks that
make it take longer and cause frustration to use.

This package provides a set of helper functions to interact with each of the 24 endpoints, so you
don't have to worry about the url structure, query parameters, formatting, or fetching the data.

It also provides a helper composable function with tools to interact with the VPIC API and build the
custom URLs for each of the 24 endpoints. This is useful if you want to use your own fetching
implementation or if you want to use a different fetch library like Axios.

You can use it one of two ways:

- Use the helper functions for each endpoint and automatically get the response data.
  (requires native fetch or a polyfill for fetch)
- Use the helper functions to build the VPIC URL for you and then use your own fetching implementation
  to get the response data.

## Where can you use this package?

This package can be used in any environment that can use the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). See
[TODO - This Package Uses Native Fetch](#this-package-uses-native-fetch).

It could also be used in any environment generally to simply build the url strings for the endpoints
and do the fetching yourself. It will not use the native Fetch API in this case. See
[TODO - Alternate Use Without Polyfills](#alternate-use-without-polyfills).
