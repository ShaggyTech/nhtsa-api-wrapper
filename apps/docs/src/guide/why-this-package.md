# Why this package?

Put simply, all this package really does is make it easier to use the VPIC API.

- Provides a set of helper functions to interact with each of the 24 endpoints, so you
  don't have to worry about the url structure, query parameters, formatting, or fetching the data.

- Provides a helper composable function with tools to interact with the VPIC API and build the
  custom URLs for each of the 24 endpoints. This is useful if you want to use your own fetching
  implementation or if you want to use a different fetch library like Axios.

---

## Story Time

All of the VPIC endpoints require close attention when using them directly. Each endpoint requires a
different url structure, path, and query parameters. Some will return a 404 if parameters are
missing or not included as empty strings. A mix of 'POST' and 'GET' methods, plus other quirks that
make it take longer and cause frustration to use.

My professional background is in the automotive industry, so I was excited to find an API that
would allow me to build things for my vehicle related apps.

My goal was to create a simple contact form for my website that would allow the user to select a
year, make, and model from a dropdown list. I wanted to populate and filter the make and model
dropdowns based on selected year, with the help of the VPIC API.

Let's just say I learned quickly how crucial good documentation is when trying to learn
something new.

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
