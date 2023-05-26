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

<br />

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

## CreateUrlOptions

Here are the [`CreateUrlOptions`](../typedoc/modules/api_useNHTSA#createurloptions) for `createUrl`
and `createCachedUrl`:

- `endpointName` - The name of the endpoint to use, see [VPIC API Endpoints](../api/#vpic-api-endpoints)
  (required)

- `path` - The final path to use in the full url path (default: `""`)

- `params` - An object of query string params to include in the url (default: `{}`)

- `allowEmptyParams` - If true, empty params will be included in the query string (default: `false`)

- `includeQueryString` - If true, the query string will be included in the url (default: `true`)

- `saveUrl` - If true, the url will be cached in the composable instance (default: `true` for
  `createCachedUrl` and `false` for `createUrl`)

---

## GET Endpoints

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

## POST Endpoints

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
