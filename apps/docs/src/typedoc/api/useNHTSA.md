**@shaggytools/nhtsa-api-wrapper - v3.0.4** ( [Readme](../index.md) \| API )

***

[@shaggytools/nhtsa-api-wrapper](../modules.md) / api/useNHTSA

# api/useNHTSA

## Contents

- [Type Aliases](useNHTSA.md#type-aliases)
  - [CreateUrlOptions](useNHTSA.md#createurloptions)
- [Functions](useNHTSA.md#functions)
  - [useNHTSA()](useNHTSA.md#usenhtsa)

## Type Aliases

### CreateUrlOptions

> **CreateUrlOptions**: `object`

#### Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `allowEmptyParams` | `boolean` | - |
| `apiType` | [`ApiTypes`](types.md#apitypes) | - |
| `endpointName` | `string` | - |
| `includeQueryString` | `boolean` | - |
| `params` | [`QueryStringParams`](../utils/queryString.md#querystringparams) | - |
| `path` | `string` | - |
| `saveUrl` | `boolean` | - |

#### Source

[api/useNHTSA.ts:20](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/useNHTSA.ts#L20)

## Functions

### useNHTSA()

> **useNHTSA**(): `object`

`useNHTSA` returns a composable object containing helper functions for working with the VPIC
API. It is used internally by the package and by users to make direct requests to the VPIC API.

It returns an object containing methods for making HTTP requests to the VPIC API. All
request methods return a Promise that resolves to an object containing the full response data.

The functions returned by the composable are:

- `createCachedUrl` - Builds the URL string and stores it in internal state

- `getCachedUrl` - Gets the URL stored in internal state

- `setCachedUrl` - Directly sets the URL internal state, does not check if URL is valid

- `clearCachedUrl` - Clears the URL stored in internal state

- `createUrl` - Returns a built URL string but does not store it in internal state

- `createPostBody` - Creates a POST body string from an object of key/value pairs

- `get` - Makes a GET request, uses the internal url variable if no URL is provided

- `post` - Makes a POST request, uses the internal url variable if no URL is provided

#### Returns

`object`

> | Member | Type | Description |
> | :------ | :------ | :------ |
> | `clearCachedUrl` | () => `string` | - |
> | `createCachedUrl` | (`options`) => `string` | - |
> | `createPostBody` | (`data`) => `string` | - |
> | `createUrl` | (`options`) => `string` | - |
> | `get` | \<`ResultsType`, `ApiType`\>(`url`?, `options`?) => `Promise`\<[`NhtsaResponse`](types.md#nhtsaresponseresultstype-apitype)\<`ResultsType`, `ApiType`\>\> | - |
> | `getCachedUrl` | () => `string` | - |
> | `post` | \<`ResultsType`, `ApiType`\>(`url`?, `options`?) => `Promise`\<[`NhtsaResponse`](types.md#nhtsaresponseresultstype-apitype)\<`ResultsType`, `ApiType`\>\> | - |
> | `setCachedUrl` | (`url`) => `string` | - |
>

#### Source

[api/useNHTSA.ts:56](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/useNHTSA.ts#L56)
