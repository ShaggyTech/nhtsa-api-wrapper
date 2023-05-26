# BYOF - Bring Your Own Fetch

In some cases, you may want to use this package without a `fetch` polyfill or fetch the data
yourself with your own `fetch` implementation such as Axios or Express.

This package can be used in _URL Builder_ mode, which means you can use the endpoint helper
functions to get the full API endpoint URL string, but skip the built-in `fetch` request.

---

## Alternate Use of This Package

There are two ways to use this package as a _URL Builder_ for the VPIC API. You'll still get
automatic query string building, encoding, and `format=json` appended to the URL or body string, but
fetching is left up to you.

- [Option 1](#option-1-set-dofetch-to-false) (recommended):
  Use the endpoint helper functions (DecodeVin, etc.), but pass `false` as the last
  argument of the function to skip internal use of `fetch` and instead return the full VPIC url
  string to use how you want.

- [Option 2](#option-2-using-usenhtsa):
  The `useNHTSA` composable function. You can use it to build a custom VPIC url with any endpoint
  name, path, or query params.

Either option is useful:

- if you want to use your own fetch implementation, like Axios or Express.

- if your project runtime doesn't support native fetch and you can't / won't use a polyfill.

Option 2 is mainly useful:

- if the API changes and you want to try the new/updated endpoints or pass new parameters before
  they're added to this package.

::: tip RELATED:

- [Support for Node Versions < 18](../guide/native-fetch)
- [useNHTSA Composable Function](../utils/use-nhtsa)

:::

---

## Option 1: Set `doFetch` to `false`

This is the easiest way to use your own `fetch` implementation and/or not use a `fetch` polyfill.

You can prevent the endpoint helper functions (DecodeVin, etc.) from making the request and instead
return the full API endpoint URL for you to use with your own fetch implementation.

To use it in this way, pass boolean `false` as the last (or only depending on endpoint) arg of the
endpoint helper function. The endpoint helper function will then return the full API endpoint URL
and skip fetching the request for you.

```javascript
const url = await DecodeVinValues(
  'WA1A4AFY2J2008189',
  { modelYear: 2018 },
  false // [!code ++]
)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/WA1A4AFY2J2008189?modelYear=2018&format=json'
```

This sets the `doFetch` option to `false` and skips the fetch request. Instead, the function will
return a full VPIC URL string ready for fetching data in the JSON format.

In most cases, simply give `false` as the last/only argument.

### POST Requests

POST requests require special handling via the useNHTSA composable function. If you pass
`false` as the last arg for POST endpoitns, it will return the correct VPIC URL string but you'll
still need the POST body properly formatted and certain headers set.

Note that `DecodeVinValuesBatch` is the only VPIC POST endpoint.

See [Create URLs for POST Endpoints](../utils/use-nhtsa#create-urls-for-post-endpoints) section for
more info.

### Caveats

If the endpoint function has no other args besides `doFetch`, you can just pass `false` as the only
arg.

```javascript
const url = await GetAllMakes(false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json'
```

The following are workarounds so you don't have to pass `undefined` in place of intentionally
undefined args.

If the function **requires** a `path`, and **optional** `params`:

```javascript
// Without optional params
DecodeVinValues('WA1A4AFY2J2008189', undefined, false) // [!code --]
DecodeVinValues('WA1A4AFY2J2008189', false) // [!code ++]

// With params
DecodeVinValues('WA1A4AFY2J2008189', { modelYear: 2018 }, false) // [!code ++]
```

If the function has no `path` and **optional** `params`:

```javascript
// Without optional params
GetAllManufacturers(undefined, false) // [!code --]
GetAllManufacturers(false) // [!code ++]

// With params
GetAllManufacturers({ manufacturerType: 'completed', page: 2 }, false) // [!code ++]
```

---

## Option 2: Using `useNHTSA`

This package exports a function called `useNHTSA`, which returns an object of helper functions to
build URL strings for the VPIC API.

Use `useNHTSA.createUrl` to get the URL string based on the endpoint name, path, and params.

`createUrl` creates and returns the URL string based on the endpoint name, path, and params.

You would essentially be using this package as a utility to build the URL string for the VPIC API
with custom URL `path` and `params`. You would then use your own fetch implementation to make the
request with the URL string.

```javascript
const url = createUrl({
  endpointName: 'DecodeVin',
  path: 'WA1A4AFY2J2008189',
  params: { modelYear: 2018 },
})
// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/WA1A4AFY2J2008189?modelYear=2018&format=json'
```

This example uses Axios, but you can use Nitro, Express, etc.

If you're making a POST request, you can also use `useNHTSA.createBody` to build the request body
properly formatted for the API.

There are other helper functions exported by `useNHTSA` but you don't need to use them in this
context.

::: tip MORE INFO:

- [useNHTSA](../utils/use-nhtsa)

- [Create URLs for GET Endpoints](../utils/use-nhtsa#create-urls-for-get-endpoints)

- [Create URLs for POST Endpoints](../utils/use-nhtsa#create-urls-for-post-endpoints)

:::

### Caveats

Using it this way won't make the request for you, nor will it handle the path and params in a smart
and consistent way such as when using one of the endpoint methods directly (DecodeVin, etc.).

You will need to have some knowledge of the VPIC API url structure because each endpoint has a
different `path` and required/optional `params`. You can see url examples for each endpoint in the
[official VPIC docs](https://vpic.nhtsa.dot.gov/api/). The documentation for this package also
includes examples of each endpoint and their required/optional params as well as what each final
url will look like.

This is why method #1 described above is recommended over this one. It simplifies all of this for
you and still ensures runtime type safety and consistency when building the VPIC URLs.
