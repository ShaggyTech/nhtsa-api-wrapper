# Why this package?

The VPIC API is perfect for beginner developers, it has no authentication,
no rate limits, and is free to use with no API key required.

However, there are no official Javascript libraries, and the documentation is a bit lacking with
minimal examples. Some helpful people have created _unofficial_ libraries, but they're either
outdated or don't work with the latest version of the API, and none have baked in TypeScript
support.

Put simply, all this package really does is make it easier to use the VPIC API.

---

## Why not just use the VPIC API directly?

- Lack of official documentation and examples make it difficult to know what to expect from each
  endpoint.

- Responses have the same general structure, but the data structure is different for each endpoint.
  There is no information on the structure of the response data, so you have to experiment and
  extrapolate the data structure from real responses.

- A mix of 'POST' and 'GET' methods, plus other quirks that make it take longer and cause frustration
  to use.

- All of the VPIC endpoints require close attention when using them directly. Each endpoint requires
  a different url structure, path, and query parameters.

- The API will will return a 404 response or respond in XML format if it doesn't like your request
  structure, but it's not always clear what the error is or how to avoid it. This also happens if
  query parameters are missing or not included as empty string values, even if they are
  intentionally undefined.

---

## Story Time

My professional background is in the automotive industry, so I was excited to find an API that
would allow me to build things for my vehicle related apps.

My goal was to create a simple contact form for my website that would allow the user to select a
year, make, and model from a dropdown list. I wanted to populate and filter the make and model
dropdowns based on selected year, with the help of the VPIC API.

So I decided to create my own library to make it easier to use the VPIC API. I've learned a lot
since the inception of this project and have rewritten it from the ground up. It's now on
version 3.0 and better than ever in my humble opinion.

I hope you find it useful and it saves you some time and frustration.

> \- [@ShaggyTech](https://github.com/shaggytech)
