[@shaggytools/nhtsa-api-wrapper - v3.0.0](../index.md) / [Exports](../modules.md) / api/useNHTSA

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

| Name | Type |
| :------ | :------ |
| `allowEmptyParams?` | `boolean` |
| `endpointName` | `string` |
| `includeQueryString?` | `boolean` |
| `params?` | [`QueryStringParams`](utils_queryString.md#querystringparams) |
| `path?` | `string` |
| `saveUrl?` | `boolean` |

#### Defined in

[api/useNHTSA.ts:15](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/useNHTSA.ts#L15)

## Functions

### useNHTSA

▸ **useNHTSA**(): `Object`

This is the main composable function that is used to make requests to the NHTSA API.

`useNHTSA` is a composable function that returns an object containing methods for making HTTP
requests to the NHTSA API. All request methods return a Promise that resolves to an object
containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.

Pleas see the [`/api` README](https://github.com/shaggytech/nhtsa-api-wrapper/packages/lib/src/api)
for more information on the exported methods and how to use them.

---

The exported methods are:

- `get` - Makes a GET request, uses the internal url variable if no URL is provided

- `post` - Makes a POST request, uses the internal url variable if no URL is provided

- `cacheUrl` - Builds the URL string and stores it in internal state

- `createUrl` - Builds the URL string but does not store it in internal state

- `getCachedUrl` - Returns the internal URL string

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cacheUrl` | (`options`: [`CreateUrlOptions`](api_useNHTSA.md#createurloptions)) => `string` |
| `createPostBody` | (`data`: `string`) => `string` |
| `createUrl` | (`options`: [`CreateUrlOptions`](api_useNHTSA.md#createurloptions)) => `string` |
| `get` | <T\>(`url?`: `string` \| [`CreateUrlOptions`](api_useNHTSA.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean`  }) => `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<`T`\>\> |
| `getCachedUrl` | () => `string` |
| `post` | <T\>(`url?`: `string` \| [`CreateUrlOptions`](api_useNHTSA.md#createurloptions), `options?`: `RequestInit` & { `saveUrl?`: `boolean`  }) => `Promise`<[`NhtsaResponse`](api_types.md#nhtsaresponse)<`T`\>\> |

#### Defined in

[api/useNHTSA.ts:49](https://github.com/ShaggyTech/nhtsa-api-wrapper/blob/6668ba3/packages/lib/src/api/useNHTSA.ts#L49)
