# useNHTSA Composable Function

```typescript
const useNHTSA: () => {
  setCachedUrl: (url: string) => string
  getCachedUrl: () => string
  clearCachedUrl: () => string
  createCachedUrl: (input: CreateUrlOptions | string) => string
  createUrl: (options: CreateUrlOptions) => string
  createPostBody: (data: string) => string
  get: <T>(
    url?: string | CreateUrlOptions,
    options?: RequestInit & {
      saveUrl?: boolean
    }
  ) => Promise<NhtsaResponse<T>>
  post: <T>(
    url?: string | CreateUrlOptions,
    options?: RequestInit & {
      saveUrl?: boolean
    }
  ) => Promise<NhtsaResponse<T>>
}
```

::: warning ⚠️ Important:

This package uses native [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with no
polyfill for older browsers or Node.js versions < 18. See
[This Package Uses Native Fetch](#this-package-uses-native-fetch) for more details.

The only `useNHTSA` methods that use native fetch are `get` and `post`.

:::

---

`useNHTSA` returns an object containing helper functions for working with the NHTSA VPIC
API. It is used internally by the package and by users to make direct requests to the VPIC API.

It contains functions for making HTTP requests to the VPIC API. All request methods return a
Promise that resolves to an object containing the full response data. See the
[VPIC API Response](../api/vpic-api-response) page for more info on the full response returned by the
request functions.

It also contains functions for building and returning the URL string for the VPIC API endpoints.

::: tip See Also:

- [useNHTSA Reference](../typedoc/modules/api_useNHTSA)

- [Alternate Use of This Package](../guide/bring-your-own-fetch#option-2-using-usenhtsa)

:::

---

## Returns

The functions returned by the composable are:

- `setCachedUrl` - Directly sets the URL internal state, does not build URL nor check if URL is
  valid.

- `getCachedUrl` - Gets the URL stored in internal state.

- `clearCachedUrl` - Clears the URL stored in internal state.

- `createCachedUrl` - Builds the URL string and stores it in internal state. If input is a string the
  URL is stored directly without being built or validated.

- `createUrl` - Returns a built URL string but does not store it in internal state.

- `createPostBody` - Creates a POST body string from an object of key/value pairs.

- `get` - Makes a GET request, uses the internal url variable if no URL is provided.

- `post` - Makes a POST request, uses the internal url variable if no URL is provided.

## Internal State

It's important to note that each instance of `useNHTSA` has its own isolated internal state.

Each of the following calls to `useNHTSA` returns a different instance of the function with its own
internal state. This means you can cache multiple URL strings at the same time without them
interfering with each other's internal state.

```javascript
const useNHTSA1 = useNHTSA().cacheUrl('ABC123')
const useNHTSA2 = useNHTSA().cacheUrl('DEF456')
const useNHTSA3 = useNHTSA().cacheUrl('GHI789')

console.log(useNHTSA1.getCachedUrl()) // ABC123
console.log(useNHTSA2.getCachedUrl()) // DEF456
console.log(useNHTSA3.getCachedUrl()) // GHI789
```

The following demonstrates how the internal state works. All of the code is using
the same composable instance declared at the top of the example, and therefore the same internal
state.

Assume that all of the of the following code is in the same file/function, executed in
sequence going from top to bottom of the file/function.

```javascript
const { get, post, createCachedUrl, clearCachedUrl, createUrl, getCachedUrl } =
  useNHTSA()

// create a VPIC url with your custom options, does not cache url
const urlString = createUrl({ ...options })

// fetches urlString, but saveUrl = false, so does not cache url
get(urlString, { saveUrl: false })

// Error, url still undefined, no cached url
get()

// returns undefined, still no cached url
getCachedUrl()

// Works as expected, url string is cached in composable instance
get('https://some.api.com/api/endpoint/GET')

// even though get() cached the url, post() does not use it because you're providing a url string
post('https://some.api.com/api/endpoint/POST', { body: 'some data' })

// returns last cached url - https://some.api.com/api/endpoint/POST
getCachedUrl()

// this has no effect, the url is never saved nor used as a variable
createUrl({ ...options })

// fetches https://some.api.com/api/endpoint/POST from earlier cache -- BAD!
get()

// caches and returns new custom url in composable instance
createCachedUrl({ ...options })

// fetches url cached during the preceding createCachedUrl() call
get()

// returns url cached during the preceding createCachedUrl() call
getCachedUrl()

// clears the cached url
clearCachedUrl()

// no url cached, cleared in previous setp, will error due to undefined url
get()

// fetches urlString and caches it in composable instance, overwriting previous url
get(urlString)

// uses url cached during the preceding get() call and makes the same request
get()
```

---

## Options

[`CreateUrlOptions`](../typedoc/modules/api_useNHTSA#createurloptions):

- `endpointName` - The name of the endpoint to use, see [VPIC API Endpoints](../api/#vpic-api-endpoints)
  (required)

- `path` - The final path to use in the full url path (default: `""`)

- `params` - An object of query string params to include in the url (default: `{}`)

- `allowEmptyParams` - If true, empty params will be included in the query string (default: `false`)

- `includeQueryString` - If true, the query string will be included in the url (default: `true`)

- `saveUrl` - If true, the url will be cached in the composable instance (default: `true` for
  `createCachedUrl` and `false` for `createUrl`)

Parameters for `get` and `post`:

`url` - either a full url `string` or an `object` of type `CreateUrlOptions` as described above

- `required` if there is no url cached in the composable instance

- if an object is provided, `createCachedUrl` will be called with the object to build the url before
  making the request

- if a string is provided, it is assumed the string is a full url and it will be stored in the
  instance as such before making the request

`options` - An object of type <`{ body?: string, saveUrl: boolean } & RequestInit`>

---

Options for `createCachedUrl` and `createUrl` are a single `object` of type `CreateUrlOptions`:

- `endpointName` - The name of the endpoint to use, see
  [NHTSA API Endpoints](https://github.com/shaggytech/nhtsa-api-wrapper#nhtsa-api-endpoints)
  (required)

- `path` - The final path to use in the full url path (default: '')

- `params` - An object of query string params to include in the url (default: {})

- `allowEmptyParams` - If true, empty params will be included in the query string
  (default: false)

- `includeQueryString` - If true, the query string will be included in the url (default: true)

- `saveUrl` - If true, the url will be cached in the composable instance (default: true)

## How This Composable Works

When you call `useNHTSA()`, it returns an object containing methods you can use to interact
with the NHTSA API. Each time you call `useNHTSA()`, a new instance of the composable is created
and returned. This means you can call `useNHTSA()` multiple times and each instance will have
its own internal state.

This is also why you must call `createUrl()` before making a request, so that the URL is stored in
the instance's internal state. You can also pass `CreateUrlOptions` directly to `get()` and `post()`
and they will call `createCachedUrl()` for you before making the request.

You can either destructure the methods you want to use from the returned object, or you can
call them directly on the returned object. If you want to reuse the same instance of the
composable, you should destructure the methods you want to use from one call to `useNHTSA()`
and use them directly.

For example, the following are equivalent in regards to base functionality:

```javascript
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'

// destructure the methods you want to use from the returned object
const { get, post, createCachedUrl, createUrl, getCachedUrl } = useNHTSA()

const url = 'https://some.api.com/api/endpoint/GET'

// uses the same instance of the composable each time
const getData = get(url)
const postData = post(url)
const cachedUrl = createCachedUrl({ ...options })
const ephemeralUrl = createUrl({ ...options })

// this variable would be undefined if there were no url cached, but in the flow of this example there is a url cached from the preceding call to createCachedUrl() and it will return that one
const mostRecentUrl = getCachedUrl()
```

```javascript
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'

const url = 'https://some.api.com/api/endpoint/GET'

// uses a new instance of the composable each time, each with its own internal state so the url will be different for each one
const getData = useNHTSA().get(url)
const postData = useNHTSA().post(url)
const cachedUrl = useNHTSA().createCachedUrl({ ...options })
const tempUrl = useNHTSA().createUrl({ ...options })

// in this flow the following would error as it's a new instance with no cached url
const someOtherUrl = useNHTSA().getCachedUrl()
```

Note that neither `createCachedUrl` nor `createUrl` are called automatically by `get` or `post`
methods. You must call them yourself before making a request or provide `get` and `post` with the
pre-built url as an argument.

You can pass `CreateUrlOptions` directly to `get()` and `post()` as `options` and they will call
`createCachedUrl()` for you before making the request with the custom url built from the options.

This means if you call `get` or `post` without first calling `createCachedUrl` or `createUrl`, or
providing a valid argument to `get` or `post`, an `Error` will be returned saying that the url is
undefined.

## Example Usage

Note that `{...options}` is an object of type `CreateUrlOptions` in these examples.

The following demonstrates how to use the composable to make multiple requests to different
endpoints using the same instance of the composable:

```javascript
import type { CreateUrlOptions } from '@shaggytools/nhtsa-api-wrapper'

const { createUrl, get } = useNHTSA()

// DecodeVinValues example options
const decodeVinOptions: CreateUrlOptions = {
  endpointName: 'DecodeVinValues',
  path: '5UXWX7C5*BA', // VIN is the path in this endpoint
  params: { modelYear: 2009 }, // optional query string params specific to this endpoint
}

/* GetAllMakes is a different endpoint, so we need a different url, this one is simple and doesn't
   require a path or params */
const getAllMakesOptions: CreateUrlOptions = {
  endpointName: 'GetAllMakes',
}

// First decode the vin
createCachedUrl({ ...decodeVinOptions }) // create a url to fetch DecodeVinValues and cache it
const vehicleInfo = get() // make the request to DecodeVinValues using the url from the cache

// Then reuse the composable instance to get all makes
createCachedUrl({ ...getAllMakesOptions }) // create a new url to fetch GetAllMakes and cache it
const allMakes = get() // make the request to GetAllMakes using the url from the cache
```

`get` and `post` accept a full url `string`

```javascript
const { createUrl, get, post } = useNHTSA()

// create a url string with options
const urlString = createUrl({ ...options })
// use the url string
const response1 = get(urlString)

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
  { body: '5UXWX7C5*BA' }
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
  { body: '5UXWX7C5*BA', saveUrl: false }
)
```

Use `createCachedUrl` to save the url to the instance state and call `get` or `post` without
arguments. Will use the cached url from the most recent `createCachedUrl` call.

```javascript
const { createUrl, createCachedUrl, get, post } = useNHTSA()

const urlString = createUrl({ ...options }) // doesn't save to internal state

/*
The following demonstrates the flow of use, we're omitting saving to variables for brevity.
Technically this would still work if you're just trying to make a request and don't care
about saving the results to variables.
*/

get(urlString, { saveUrl: false }) // uses the url string but doesn't save it to internal state
get() // errors because no url is cached

createCachedUrl({ ...otherOptions }) // saves url to internal state, also returns the url string
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

---

## Create URLs for GET Endpoints

This is a simplified example of using this package as a VPIC URL builder ONLY. This example uses
axios as the fetch implementation, but you can use any fetch implementation you want.

The purpose of this example is to show how to use createUrl() to get a VPIC URL string and then use
your own fetch implementation to make the request.

We're using the `createUrl` function as it does not store the URL in internal state and
simplifies the examples. `createCachedUrl` works in a similar way but stores the URL in internal
state for later use.

Example (using `axios` as the `fetch` implementation):

```javascript
import { useNHTSA } from '@shaggytools/nhtsa-api-wrapper'
import axios from 'axios' // or any other fetch implementation

// composable destructuring
const { createUrl } = useNHTSA()

// alternatively: useNHTSA().createUrl({ ... })
const url = createUrl({
  endpointName: 'DecodeVin',
  path: 'WA1A4AFY2J2008189',
  params: { modelYear: 2018 },
})

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'

const response = await axios.get(url)
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
  endpoint in the [VPIC API docs](https://vpic.nhtsa.dot.gov/api/). Path is the last part of the
  url path, before the query string.

- `params`

```javascript
const url = createUrl({
  endpointName: 'DecodeVin',
  path: 'WA1A4AFY2J2008189',
  params: { modelYear: 2018 }, // [!code focus]
})
```

The `params` are query string parameters to use for the endpoint, in this case `modelYear=2011`.
Keep in mind, `params` will be unique to each endpoint, some have required params, some have none.

All of the above will result in the following url:

```javascript
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

---

## Create URLs for POST Endpoints

::: tip :bulb: TIP
`DecodeVinValuesBatch` is the only endpoint that uses a POST request.
:::

VPIC POST requests require the post body to be a specially formatted string and certain headers set.
The helper functions (DecodeVinValuesBatch) would handle this for you automatically, but if you use
createUrl() to get the URL string and then use your own fetch implementation, you will need to
handle this yourself.

Here is a simplified example of how to make a POST request with your own fetch implementation.

The differences between this example and the GET example above are highlighted below.

```javascript{4,8,11,14,15,16,19}
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

<br />

When using `createUrl` in this way for a POST request, you should set `includeQueryString = false`.
This is so that `'&format=json'` will _NOT_ be included in the params, and thus in the url query
string, which would cause the POST request to error.

Using `createPostBody` will append `'&format=json'` to the final body string, which is required for
POST requests to respond in JSON format. It will also perform `encodeURI()` on the body string to
ensure it is encoded properly for the request.

Both of the above are handled for you when using the endpoint methods directly, such as
`DecodeVinValuesBatch()`.
