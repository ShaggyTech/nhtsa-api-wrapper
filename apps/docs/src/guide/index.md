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
completion in your IDE. See [NHTSA API Response Types](../guide/typescript.md#nhtsa-api-response-types)

✔️ Built in runtime type-checking and error handling for all functions, so you can be sure
you'll get back a valid response from the VPIC API. See [TODO - Error Handling](#error-handling)

## What is the NHTSA VPIC API?

::: tip :bulb: TIP
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

- Use it in out of the box in Javascript environments that support the
  [native Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  See also
  [This Package Uses Native Fetch](../guide/native-fetch.md#this-package-uses-native-fetch).

- Use it in _any_ Javascript environment to simply build the url strings for the endpoints
  and do the fetching yourself. It will not use the native Fetch API internally this way.
  See also
  [Alternate Use Of This Package](../guide/bring-your-own-fetch.md#alternate-use-of-this-package).

## Why this package?

Put simply, all this package really does is make it easier to use the VPIC API.

- Provides a set of helper functions to interact with each of the 24 endpoints, so you
  don't have to worry about the url structure, query parameters, formatting, or fetching the data.

- Provides a helper composable function with tools to interact with the VPIC API and build the
  custom URLs for each of the 24 endpoints. This is useful if you want to use your own fetching
  implementation or if you want to use a different fetch library like Axios.

### Story Time

When I first discovered the VPIC API, I was new to Javascript and especially new to fetching data.

My professional background is in the automotive industry, so I was excited to find an API that
would allow me to build things for my vehicle related apps.

My goal was to create a simple contact form for my website that would allow the user to select a
year, make, and model from a dropdown list. I wanted to populate and filter the make and model
dropdowns based on selected year, with the help of the VPIC API.

Let's just say I learned quickly how crucial good documentation is when trying to learn
something new.

All of the VPIC endpoints require close attention when using them directly. Each endpoint requires a
different url structure, path, and query parameters. Some will return a 404 if parameters are
missing or not included as empty strings. A mix of 'POST' and 'GET' methods, plus other quirks that
make it take longer and cause frustration to use.

I have no complaints about the API itself, but using the API directly is confusing, especially for
beginner programmers. The VPIC API is perfect for beginner developers, it has no authentication,
no rate limits, and is free to use. It's just the documentation and the way the endpoints are
structured that make it difficult to use.

There are no official Javascript libraries, and the documentation is a bit lacking with minimal
examples. There is also no information on the structure of the response data, so you have to
experiment and extrapolate the data structure from real responses. The API will throw errors or
respond in XML format if it doesn't like your request structure, but it's not always clear what the
error is or how to avoid it.

Some helpful people have created _unofficial_ libraries, but they're either outdated or
don't work with the latest version of the API, and none have baked in TypeScript support.

So I decided to create my own library to make it easier to use the VPIC API. I've learned a lot
since the inception of this project and have rewritten it from the ground up. It's now on
version 3.0 and better than ever in my humble opinion.

I hope you find it useful and it saves you some time and frustration.

> \- [@ShaggyTech](https://github.com/shaggytech)
