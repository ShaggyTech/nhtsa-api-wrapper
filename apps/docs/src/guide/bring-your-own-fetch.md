# BYOF - Bring Your Own Fetch

::: tip 📦 INFO
In some cases, you may want to use this package without a `fetch` polyfill or fetch the data
yourself.

This package can be used in "_URL Builder_ mode", which means you can use the endpoint helper
functions to get the full API endpoint URL string, but skip the `fetch` request.

:::

---

[[toc]]

## Alternate Use of This Package

There are two ways to use this package in _URL Builder_ mode:

- [Option 1](#option-1-set-dofetch-to-false) (recommended):
  Use the endpoint helper functions (DecodeVin, etc.), but pass `false` as the last
  argument of the function to skip internal use of `fetch` and instead return the full VPIC url
  string to use how you want.

- [Option 2](#option-2-using-createurl):
  Use the `createUrl` function. You can use it to build a custom VPIC url with any endpoint name,
  path, or query params.

Either option is useful:

- if you want to use your own fetch implementation, like Axios or Express.
- if your project runtime doesn't support native fetch and you can't / won't use a polyfill.
- if the API changes and you want to try the new/updated endpoints or pass new parameters before
  they're added to this package

You'll still get automatic query string building, encoding, and `format=json` appended to the URL or
body string, but fetching is left up to you.

::: tip RELATED:

- [This Package Uses Native Fetch](../guide/native-fetch.md#this-package-uses-native-fetch)

:::

## Option 1: Set `doFetch` to `false`

This is the easiest way to use your own `fetch` implementation and/or not use a `fetch` polyfill.

You can prevent the endpoint helper functions (DecodeVin, etc.) from making the request and instead
return the full API endpoint URL for you to use with your own fetch implementation.

To use it in this way, pass boolean `false` as the last (or only depending on endpoint) arg of the
endpoint helper function. The endpoint helper function will then return the full API endpoint URL
and skip fetching the request for you.

```javascript
const results = await DecodeVinValues(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false // [!code ++]
)
```

This sets the `doFetch` option to `false` and skips the fetch request.

In most cases, simply give `false` as the last/only argument. This should be obvious,
but if the endpoint function has no other args besides `doFetch`, you can just pass `false` as the
only arg.

```javascript
const makes = await GetAllMakes(false)
```

### Using `doFetch`

::: tip :bulb: TIP
If using `doFetch` = `false` on a POST endpoint, such as `DecodeVinValuesBatch`, see
[Using With Post Endpoints](../guide/bring-your-own-fetch#using-with-post-endpoints) for more info.
:::

Some endpoints require query params and some don't have a trailing `path`.

Here are some workarounds for the endpoints that have optional or no `params`/`path` args so you
don't have to pass `undefined` in their place:

If the endpoint function **requires** a `path`, and **optional** `params`:

```javascript
ㅤ
DecodeVinValues('WA1A4AFY2J2008189', undefined, false) // [!code --]
DecodeVinValues('WA1A4AFY2J2008189', false) // [!code ++]
```

If the function has no `path`, but **optional** `params` as first arg:

```javascript
ㅤ
GetAllManufacturers(undefined, false) // [!code --]
GetAllManufacturers(false) // [!code ++]
```

## Option 2: Using `createUrl`

Another alternative is a composable function this package exports called `useNHTSA`, which returns
an object of helper functions to interact with the API.

Use `createUrl` to get the URL string based on the endpoint name, path, and params. Then use your
own fetch implementation to make the request. See
[Using createUrl With GET](#using-with-get-endpoints).

- `createUrl` creates and returns the URL string based on the endpoint name, path, and params.
- you use your own fetch implementation to make the request with the url string.

You would essentially be using this package as a utility to build the URL string for the VPIC API
with custom `path` and `params`.

```javascript
const url = createUrl({
  endpointName: 'DecodeVin',
  path: 'WA1A4AFY2J2008189',
  params: { modelYear: 2018 },
})
// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'
```

::: info This example uses Axios, but you can use Nitro, Express, etc.
:::

If you're making a POST request, you can also use the `createBody` from `useNHTSA` composable to
build the request body properly formatted for the API. See
[Using createUrl With POST](#using-with-post-endpoints) for more info.

There are other helper functions exported by `useNHTSA` but you don't need to use them in this case.
The other available functions are `get`, `post`, `createCachedUrl`, and `getCachedUrl`.

### Caveats

Using it this way won't make the request for you, nor will it handle the path and params in a smart
and consistent way such as when using one of the endpoint methods directly (DecodeVin, etc.).

You will need to have some knowledge of the NHTSA API url structure because each endpoint has a
different `path` and required/optional `params`. You can see url examples for each endpoint in the
[NHTSA API docs](https://vpic.nhtsa.dot.gov/api/). Also, in the source code of this package, each
endpoint function is documented and typed if you need help with the path and params structure for
each.

::: tip
This is why method #1 described above is recommended over this one. It simplifies all of this for
you and still ensures runtime type safety and consistency with the VPIC API.
:::

### In Depth

Here are the CreateUrlOptions for `createUrl`:

- `endpointName` - The name of the endpoint to use, see [NHTSA API Endpoints](#nhtsa-api-endpoints)
  (required)
- `path` - The final path to use in the full url path (default: " ")
- `params` - An object of query string params to include in the url (default: {})
- `allowEmptyParams` - If true, empty params will be included in the query string (default: false)
- `includeQueryString` - If true, the query string will be included in the url (default: true)
- `saveUrl` - If true, the url will be cached in the composable instance (default: true)

#### Using With GET Endpoints

Here's a simplified example of retrieving data from the NHTSA API using this package as a URL
builder ONLY. This example uses axios as the fetch implementation, but you can use any fetch
implementation you want. The purpose of this example is to show how to use createUrl() to get
the URL string from this package and then use your own fetch implementation to make the request.

Example (using `axios` as the `fetch` implementation):

```javascript{8,9,10,11,12,13,14}
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'
import axios from 'axios' // or any other fetch implementation

// composable destructuring
const { createUrl } = useNHTSA()

// alternatively: useNHTSA().createUrl({ ... })
const url = createUrl({
  endpointName: 'DecodeVin',
  path: 'WA1A4AFY2J2008189',
  params: { modelYear: 2018 }
})

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'

const results = await axios.get(url)
```

To explain the above example:

- `endpointName`

  ```javascript
  const url = createUrl({
    endpointName: 'DecodeVin', // [!code focus]
    path: 'WA1A4AFY2J2008189',
    params: { modelYear: 2018 },
  })
  ```

  Name of NHTSA API endpoint you're trying to use. `DecodeVin` in the example above.
  It's not required for it to have uppercase letters, all lowercase is fine or a mix of both.

- `path`

  ```javascript
  const url = createUrl({
    endpointName: 'DecodeVin',
    path: 'WA1A4AFY2J2008189', // [!code focus]
    params: { modelYear: 2018 },
  })
  ```

  In this example `path` is the VIN you are searching. Each endpoint is different, so
  you will need to know the path for each. You can see examples of the paths for each
  endpoint in the [NHTSA API docs](https://vpic.nhtsa.dot.gov/api/). Path is the last part of the
  url path, before the query string.

- ```javascript
  const url = createUrl({
    endpointName: 'DecodeVin',
    path: 'WA1A4AFY2J2008189',
    params: { modelYear: 2018 }, // [!code focus]
  })
  ```

  The `params` are query string parameters to use for the endpoint, in this case `modelYear=2011`.
  Keep in mind, `params` will be unique to each endpoint, some have required params, some have none.

- ```javascript
  ㅤ
  url =
    'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'

  const results = await axios.get(url)
  ```

  The return from `createUrl` will be a full url string similar to the one above. You can then use
  your own fetch implementation to make the request. In this example, we use axios.

Some additional things to note:

- `format=json` will always be appended to the final query string that is built for you. This is the
  only VPIC response format supported by this package.

- If the endpoint doesn't require a `path` or `params` you can omit those keys and just provide
  `endpointName`.

- You could also get the base url for the VPIC API this way, just use `{ endpointName: "" }`. This
  will return the base url for the VPIC API.

#### Using with POST Endpoints

Note that POST requests to the NHTSA API requires body to be a string and certain headers set.
The endpoint functions would handle this for you automatically, but if you use createUrl() to get
the URL string and then use your own fetch implementation, you will need to handle this yourself.

::: tip :bulb: TIP
`DecodeVinValuesBatch` is the only endpoint that uses a POST request.
:::

Here is a simplified example of how to make a POST request with your own fetch implementation:

```javascript{7,9,11,12,13}
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'
import axios from 'axios'

const { createUrl, createPostBody } = useNHTSA()
const url = createUrl({
  endpointName: 'DecodeVinValuesBatch',
  includeQueryString: false
})
const body = createPostBody('5UXWX7C5*BA; 5UXWX7C5*BB')
// body = "DATA=5UXWX7C5*BA;%205UXWX7C5*BB&format=json "
const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
// use your own fetch implementation to make the POST request, axios in this example
const response = await axios.post(url, body, { headers })
```

It requires a few things:

- Create the URL string with `createUrl()` and set `includeQueryString: false`
- Create the POST body with `createPostBody()`, you should give it a string as described in the
  `DecodeVinValuesBatch` documentation of this package.
- Set the Content-Type header to `application/x-www-form-urlencoded`
- Use your own fetch implementation to make the request, axios in this example

Using `createPostBody` to create the body string will append `'&format=json'`, which is required for
POST requests to respond in JSON format. It will also perform `encodeURI()` on the body string to
ensure it is encoded properly for the request.

When using `createUrl` in this way for a POST request, you should set `includeQueryString: false` so
that `'&format=json'` will _not_ be included in the params, and subsequently in a query string,
which would cause the POST request to fail.

Both of the above are handled for you when using the endpoint methods directly, such as
`DecodeVinValuesBatch()`.
