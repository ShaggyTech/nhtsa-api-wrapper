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

---

The functions returned by the composable are:

- `createCachedUrl` - Builds the URL string and stores it in internal state

- `getCachedUrl` - Gets the URL stored in internal state```\*\*

- `setCachedUrl` - Directly sets the URL internal state, does not check if URL is valid

- `clearCachedUrl` - Clears the URL stored in internal state

- `createUrl` - Returns a built URL string but does not store it in internal state

- `createPostBody` - Creates a POST body string from an object of key/value pairs

- `get` - Makes a GET request, uses the internal url variable if no URL is provided

- `post` - Makes a POST request, uses the internal url variable if no URL is provided
