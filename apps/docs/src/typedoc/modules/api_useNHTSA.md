[@shaggytools/nhtsa-api-wrapper - v3.0.4](../index.md) / [Exports](../modules.md) / api/useNHTSA

# Module: api/useNHTSA

## Table of contents

### Type Aliases

- [CreateUrlOptions](api_useNHTSA.md#createurloptions)

### Functions

- [useNHTSA](api_useNHTSA.md#usenhtsa)

## Type Aliases

### CreateUrlOptions

Ƭ **CreateUrlOptions**: `Object`

#### Type declaration

| Name                  | Type                                                          |
| :-------------------- | :------------------------------------------------------------ |
| `allowEmptyParams?`   | `boolean`                                                     |
| `endpointName`        | `string`                                                      |
| `includeQueryString?` | `boolean`                                                     |
| `params?`             | [`QueryStringParams`](utils_queryString.md#querystringparams) |
| `path?`               | `string`                                                      |
| `saveUrl?`            | `boolean`                                                     |

#### Defined in

[api/useNHTSA.ts:15](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/useNHTSA.ts#L15)

## Functions

### useNHTSA

▸ **useNHTSA**(): `Object`

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

`Object`

| Name              | Type                                                                                                                                                                                                       |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clearCachedUrl`  | () => `string`                                                                                                                                                                                             |
| `createCachedUrl` | (`input`: `string` \| [`CreateUrlOptions`](api_useNHTSA.md#createurloptions)) => `string`                                                                                                                  |
| `createPostBody`  | (`data`: `string`) => `string`                                                                                                                                                                             |
| `createUrl`       | (`options`: [`CreateUrlOptions`](api_useNHTSA.md#createurloptions)) => `string`                                                                                                                            |
| `get`             | <T\>(`url?`: `string` \| [`CreateUrlOptions`](api_useNHTSA.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean` }) => `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<`T`\>\> |
| `getCachedUrl`    | () => `string`                                                                                                                                                                                             |
| `post`            | <T\>(`url?`: `string` \| [`CreateUrlOptions`](api_useNHTSA.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean` }) => `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<`T`\>\> |
| `setCachedUrl`    | (`url`: `string`) => `string`                                                                                                                                                                              |

#### Defined in

[api/useNHTSA.ts:50](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/main/packages/lib/src/api/useNHTSA.ts#L50)
