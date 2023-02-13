---
outline: deep
---

# @shaggytools/nhtsa-api-wrapper

---

[[toc]]

## Overview

`@shaggytools/nhtsa-api-wrapper` provides an easy way to interact with the National Highway Traffic
Safety Administration (NHTSA) Vehicle Information API (VPIC).

It's a thin javascript 'wrapper' or 'client' around the VPIC API. Included are helper functions to
make interacting with the API and retrieving data less of a chore.

You can take a look at the [NHTSA VPIC API Docs](https://vpic.nhtsa.dot.gov/api/) for more
information.

## Features

✔️ A set of helper functions to retrieve data from each of the 24 API endpoints.
See: [TODO - NHTSA Endpoints](#nhtsa-api-endpoints)

✔️ A helper composable function with tools to interact with the VPIC API at a lower level.
See [TODO - useNHTSA](#useNHTSA)

✔️ All functions and endpoints are typed with TypeScript and have full type hints and code
completion in your IDE. See [NHTSA API Response Types](../introduction/typescript.md#nhtsa-api-response-types)

✔️ Built in runtime type-checking and error handling for all functions, so you can be sure
you'll get back a valid response from the VPIC API. See [TODO - Error Handling](#error-handling)

## What is the NHTSA VPIC API?

::: tip 📦 TIP
When this documentation mentions "API endpoints" it's referring to the 24 `Actions` listed in
the [VPIC API Docs](https://vpic.nhtsa.dot.gov/api/).

:::

The VPIC API is primarily used for decoding useful information from a Vehicle Identification Number
(VIN) in the United States and Canada. It can also be used to get all models of a make, to decode
WMIs, get all makes for a certain year, and more.

A list of all 24 VPIC endpoints can be found in the [TODO - NHTSA API Endpoints](#nhtsa-api-endpoints)
section.

The best part about the VPIC API is that it's free and doesn't require an API key 👍🏽. The
wonderful people at the National Highway Traffic Safety Administration (NHTSA) have made it
openly available to the public.

I use it to build things for my vehicle related apps. Creating a contact form for example, you can
have the user first select a year and then have the make and model dropdowns populated with the
available options for that year.

For a real world example of this, check out some of my other projects that use this API:

- **[dubsquared.com](https://dubsquared.com/contact#contact-form)**
- **[Vin-Decoder](https://shaggytech.com/vin-decoder)**

## Where can you use this package?

Use it in any Javascript environment that can use the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

> See:
> [This Package Uses Native Fetch](../introduction/native-fetch.md#this-package-uses-native-fetch).

Use it in any Javascript environment to simply build the url strings for the endpoints
and do the fetching yourself. It will not use the native Fetch API in this case.

> See:
> [Alternate Use Of This Package](../introduction/bring-your-own-fetch.md#alternate-use-of-this-package)

## Why this package?

Put simply, all this package really does is make it easier to use the VPIC API.

- Provides a set of helper functions to interact with each of the 24 endpoints, so you
  don't have to worry about the url structure, query parameters, formatting, or fetching the data.

- Provides a helper composable function with tools to interact with the VPIC API and build the
  custom URLs for each of the 24 endpoints. This is useful if you want to use your own fetching
  implementation or if you want to use a different fetch library like Axios.

### Story Time

When I first discovered the VPIC API, I was new to Javascript and especially new to fetching data.
My goal was to create a simple contact form for my website that would allow the user to select a
year, make, and model from a dropdown list. I wanted to populate the make and model dropdowns with
the available options for the selected year, with the help of the VPIC API.

Let's just say I learned quickly out how crucial good documentation is when trying to learn something
new.

All of the VPIC endpoints require close attention when using them directly. Each endpoint requires a
different url structure, path, and query parameters. Some will return a 404 if parameters are
missing or not included as empty strings. A mix of 'POST' and 'GET' methods, plus other quirks that
make it take longer and cause frustration to use.

I have no complaints about the API itself, but using the API directly is confusing, especially for
beginner programmers. There are no official Javascript libraries, and the documentation is a bit
lacking with minimal examples. There is also no information on the structure of the response data,
which is a bit frustrating as each endpoint is different.

Some helpful people have created unofficial libraries, but they're either outdated or
don't work with the latest version of the API, and none have baked in TypeScript support.

So I decided to create my own library to make it easier to use the VPIC API. I've learned a lot
since the inception of this project and have rewritten it from the ground up. It's now on
version 3.0 and better than ever IMO. Oh and also, the documentation is hopefully up to standards
now 😁.

I hope you find it useful and it saves you some time and frustration.

> \- ShaggyTech
