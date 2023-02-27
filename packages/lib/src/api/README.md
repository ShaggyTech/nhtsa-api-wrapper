# /api

## `/api` exports the following:

- [useNHTSA](#useNHTSA) - a composable function that returns an object containing methods for making
  HTTP requests to the NHTSA API. The returned functions are documented in the
  [Package Documentation](https://www.shaggytech.com/nhtsa-api-wrapper)

- `/api/endpoints` contains all 24 helper functions, one for each endpoint
  (DecodeVin, GetAllMakes, etc).

- `/api/types` contains all the types used by the NHTSA API.
  - each endpoint response type is the endpoint name appended by `Results`,
  - `<EndpointName>Results`, such as `DecodeVinResults`
  - see documentation of each endpoint for more details.

---

> ⚠️ **Important**:
>
> This package uses native
> [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no polyfill for older
> browsers or Node.js < v18.0.0, see
> [This Package Uses Native Fetch](#this-package-uses-native-fetch).
>
> The only methods to use native fetch are `get` and `post` in the `useNHTSA` composable.

---

## `useNHTSA`

This is the main composable function that is used to make requests to the NHTSA API.

`useNHTSA` is a composable function that returns an object containing methods for making HTTP
requests to the NHTSA API. All request methods return a Promise that resolves to an object
containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.

The exported methods are:

- `get` - Makes a GET request, uses the internal url variable if no URL is provided

- `post` - Makes a POST request, uses the internal url variable if no URL is provided

- `cacheUrl` - Builds the URL string and stores it in internal state

- `createUrl` - Builds the URL string but does not store it in internal state

- `getCachedUrl` - Returns the internal URL string

`cacheUrl`, `get`, and `post` methods will cache url to internal state if you pass them a url
string or options object. They will always overwrite the current cached url and immediately make
the request. The only exception to this is when providing option of `saveUrl: false` when using
an options object.

The above is default behavior, but you can also pass `options.saveUrl = false` when using
an options object with the `cacheUrl`, `createUrl`, `get`, and `post` methods. This will prevent
the composable from saving the URL in the composable instance.

### `useNHTSA` Options

Options for `cacheUrl` and `createUrl` are a single `object` of type `CreateUrlOptions`:

- `endpointName` - The name of the endpoint to use, see
  [NHTSA API Endpoints](https://github.com/shaggytech/nhtsa-api-wrapper#nhtsa-api-endpoints)
  (required)

- `path` - The final path to use in the full url path (default: '')

- `params` - An object of query string params to include in the url (default: {})

- `allowEmptyParams` - If true, empty params will be included in the query string
  (default: false)

- `includeQueryString` - If true, the query string will be included in the url (default: true)

- `saveUrl` - If true, the url will be cached in the composable instance (default: true)

Options for `get` and `post`:

- `url` - either a full url `string` or an `object` of type `CreateUrlOptions` as described above

  - `required` if there is no url cached in the composable instance
  - if an object is provided, `cacheUrl` will be called with the object to build the url before
    making the request
  - if a string is provided, it is assumed the string is a full url and it will be stored in the
    instance as such before making the request

- `options` - An object of type <`{ body?: string, saveUrl: boolean } & RequestInit`>

In this example all of the code is using the same composable instance and _{...options}_ is an
object of type `CreateUrlOptions`:

```javascript
const { get, post, cacheUrl createUrl, getCachedUrl } = useNHTSA()

const urlString = createUrl({ ...options }) // does not cache url

get(url, { saveUrl: false }) // saveUrl = false, does not cache url

get() // Error, url still undefined
getCachedUrl() // returns undefined, no url cached

// Works as expected, url string is cached in composable instance
get('https://some.api.com/api/endpoint/GET')
// even though get() cached the url, post() does not use it because you're providing a url string
post('https://some.api.com/api/endpoint/POST', { body: 'some data' })

getCachedUrl() // returns https://some.api.com/api/endpoint/POST

// this has no effect, the url is never saved nor used as a variable
createUrl({ ...options })

get() // uses https://some.api.com/api/endpoint/POST from earlier cache -- OOPS!

cacheUrl({ ...options }) // caches url in composable instance
get() // uses url cached during the preceding cacheUrl() call

getCachedUrl() // returns url cached during the preceding cacheUrl() call

get(urlString) // uses urlString and caches it in composable instance, overwriting previous url
get() // uses url cached during the preceding get() call
```

### How this composable works:

When you call `useNHTSA()`, it returns an object containing methods you can use to interact
with the NHTSA API. Each time you call `useNHTSA()`, a new instance of the composable is created
and returned. This means you can call `useNHTSA()` multiple times and each instance will have
its own internal state.

This is also why you must call `createUrl()` before making a request, so that the URL is stored in
the instance's internal state. You can also pass `CreateUrlOptions` directly to `get()` and `post()`
and they will call `cacheUrl()` for you before making the request.

You can either destructure the methods you want to use from the returned object, or you can
call them directly on the returned object. If you want to reuse the same instance of the
composable, you should destructure the methods you want to use from one call to `useNHTSA()`
and use them directly.

For example, the following are equivalent in regards to base functionality:

```javascript
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'

// destructure the methods you want to use from the returned object
const { get, post, cacheUrl, createUrl, getCachedUrl } = useNHTSA()

// uses the same instance of the composable each time
const getData = get()
const postData = post()
const cachedUrl = cacheUrl({ ...options })
const ephemeralUrl = createUrl({ ...options })

/* this would be undefined if there was no url cached, but in the flow of this example, there is
   a url cached from the preceding call to cacheUrl() and it will return that one */
const mostRecentUrl = getCachedUrl()
```

```javascript
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'

/* uses a new instance of the composable each time, each instance has its own internal state
   and knows nothing about the internal state of the other instances */
const getData = useNHTSA().get()
const postData = useNHTSA().post()
const cachedUrl = useNHTSA().cacheUrl({ ...options })
const ephemeralUrl = useNHTSA().createUrl({ ...options })

const mostRecentUrl = useNHTSA().getCachedUrl() // this would be undefined, it's a new instance
```

Note that neither `cacheUrl` nor `createUrl` are called automatically by `get` or `post` methods.
You must call them yourself before making a request or provide `get` and `post` with the pre-built
url as an argument.

This means if you call `get` or `post` without first calling `cacheUrl` or `createUrl`, or providing
a valid argument to `get` or `post`, an `Error` will be returned saying that the url is undefined.

Example usage:

_`{...options}` is an object of type CreateUrlOptions in these examples_

```javascript
import type { CreateUrlOptions } from '@shaggytools/nhtsa-api-wrapper'

const { createUrl, get } = useNHTSA()

// DecodeVinValues example options
const options: CreateUrlOptions = {
  endpointName: 'DecodeVinValues',
  path: '5UXWX7C5*BA', // VIN is the path in this endpoint
  params: { modelYear: 2009 }, // optional query string params specific to this endpoint
}

/* GetAllMakes is a different endpoint, so we need a different url, this one is simple and doesn't
   require a path or params */
const differentOptions: CreateUrlOptions = {
  endpointName: 'GetAllMakes',
}

cacheUrl({ ...options }) // create a url to fetch DecodeVinValues and cache it
const results1 = get() // make the request to DecodeVinValues using the url from the cache

cacheUrl({ ...differentOptions }) // create a new url to fetch GetAllMakes and cache it
const results2 = get() // make the request to GetAllMakes using the url from the cache
```

`get` and `post` accept a full url `string`

```javascript
const { createUrl, get, post } = useNHTSA()

// create a url string with options
const urlString = createUrl({ ...options })
// use the url string
const reponse1 = get(urlString)

// or full url string directly, truncated for brevity
const response2 = post('https://.../DecodeVinValuesBatch', {
  body: '5UXWX7C5*BA',
})
```

`get` and `post` accept an object of type `CreateUrlOptions` to build the url string automatically.

```javascript
const { get, post } = useNHTSA()

const response1 = get({ ...options })
const response2 = get({ ...differentOptions })

const postResponse = post(
  { endpointName: 'DecodeVinValuesBatch' },
  { body: '5UXWX7C5*BA' },
)
```

`get` and `post` accept a second argument of type
[`RequestInit`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html)
& `{ saveUrl?: boolean }`
to pass options to the fetch request.

```javascript
const { get, post } = useNHTSA()

const response1 = get({ ...options }, { saveUrl: false })

const postResponse = post(
  { endpointName: 'DecodeVinValuesBatch' },
  { body: '5UXWX7C5*BA', saveUrl: false },
)
```

Use `cacheUrl` to save the url to the instance state and call `get` or `post` without
arguments. Will use the cached url from the most recent `cacheUrl` call.

```javascript
const { createUrl, cacheUrl, get, post } = useNHTSA()

const urlString = createUrl({ ...options }) // doesn't save to internal state

/*
The following demonstrates the flow of use, we're omitting saving to variables for brevity.
Technically this would still work if you're just trying to make a request and don't care
about saving the results to variables.
*/

get(urlString, { saveUrl: false }) // uses the url string but doesn't save it to internal state
get() // errors because no url is cached

cacheUrl({ ...otherOptions }) // saves url to internal state, also returns the url string
get() // uses the url from the most recent createUrl() call

get(urlString) // use the urlString variable, and save it to the internal state
get() // uses the urlString variable as it was saved to the internal state
```

You could do this if you don't need to build the URL first:

```javascript
const { get, post } = useNHTSA()

get('https://some.api.com/api/endpoint?param1=value1&param2=value2')

post('https://some.api.com/api/endpoint', { body: 'some data' })
```
