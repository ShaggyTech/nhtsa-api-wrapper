# @shaggytools/nhtsa-api-wrapper

---

✔️ A thin Javascript client for the [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/)

✔️ 24 helper functions to retrieve data from each of the [VPIC API endpoints](../api/index#vpic-api-endpoints)

✔️ Works in Node.js via package managers and in browser scripts via CDN.

✔️ Fully tree-shakeable and side-effect free with no dependencies or bundled polyfills.

✔️ Built with TypeScript support in mind. Get full type hints and code
completion in your IDE.

---

## Overview

This package provides an easy way to interact with the National Highway Traffic Safety
Administration (NHTSA) Vehicle Information (VPIC) API.

It's a thin javascript 'wrapper' or 'client' around the VPIC API. Included are helper functions to
make interacting with the API and retrieving data less of a chore.

---

## Features

- Provides a set of 24 helper functions to interact with each of the 24 endpoints, so you
  don't have to worry about the url structure, query parameters, formatting, or fetching the data.
  See the [VPIC API](/api/) section for more info.

- Use the built in `fetch` functionionality or provide your own. The endpoint functions can be used
  to build full VPIC URLs for you to use your own fetch implentation such as Axios or a polyfill.
  See the [Bring Your Own Fetch](/guide/bring-your-own-fetch) guide for more info.

- Provides a helper composable called `useNHTSA` that returns functions to interact with the VPIC
  API at a lower level. See the [useNHTSA](/guide/use-nhtsa) guide for more info.

- All endpoints are typed, so you get intellisense and type checking in your IDE. Response data is
  also typed so you know exactly what to expect for each endpoint. See the
  [TypeScript](/guide/typescript) guide for more info.

- Built in runtime type checking so you can be sure you're passing the correct parameters to each
  endpoint. The functions will throw an error if you pass missing or wrong parameters, and the error
  message will tell you exactly what you did wrong.

---

## What is the NHTSA VPIC API?

The [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/) is primarily used for decoding useful
information from a Vehicle Identification Number (VIN) in the United States and Canada.
It can also be used to get all models of a make, to decode WMIs, get all makes for a certain year,
and more.

A list of all 24 VPIC endpoints can be found in the
[NHTSA API Endpoints](../api/index#vpic-api-endpoints) section.

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

For a real world example of this, check out some of my other projects that use this package and the
VPIC API:

- [Dubsquared Contact Form](https://dubsquared.com/contact#contact-form)
- [Simple Vin-Decoder](https://shaggytech.com/vin-decoder)

---

## Where can you use this package?

- Use it in out of the box in Javascript environments that support the
  [native Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  See also
  [This Package Uses Native Fetch](../guide/native-fetch#this-package-uses-native-fetch).

- Use it in _any_ Javascript environment to simply build the url strings for the endpoints
  and do the fetching yourself. It will not use the native Fetch API internally this way.
  See also
  [Alternate Use Of This Package](../guide/bring-your-own-fetch#alternate-use-of-this-package).

::: warning 🔞 WARNING

This package uses the
[built-in Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no bundled
polyfill for very old Browsers or Node.js versions < 18.

:::

---

## Next Steps

- [Installation](../guide/install)
- [Quick Start](../guide/getting-started)
