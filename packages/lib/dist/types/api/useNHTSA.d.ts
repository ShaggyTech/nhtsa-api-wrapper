import type { NhtsaResponse, QueryStringParams } from '@/types';
export declare type CreateUrlOptions = {
    endpointName: string;
    allowEmptyParams?: boolean;
    includeQueryString?: boolean;
    path?: string;
    params?: QueryStringParams;
    saveUrl?: boolean;
};
/**
 *This is the main composable function that is used to make requests to the NHTSA API.
 *
 * `useNHTSA` is a composable function that returns an object containing methods for making HTTP
 * requests to the NHTSA API. All request methods return a Promise that resolves to an object
 * containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.
 *
 * Pleas see the [`/api` README](https://github.com/shaggytech/nhtsa-api-wrapper/packages/lib/src/api)
 * for more information on the exported methods and how to use them.
 *
 * ---
 *
 * The exported methods are:
 *
 * - `get` - Makes a GET request, uses the internal url variable if no URL is provided
 *
 * - `post` - Makes a POST request, uses the internal url variable if no URL is provided
 *
 * - `cacheUrl` - Builds the URL string and stores it in internal state
 *
 * - `createUrl` - Builds the URL string but does not store it in internal state
 *
 * - `getCachedUrl` - Returns the internal URL string
 *
 */
export declare const useNHTSA: () => {
    getCachedUrl: () => string;
    cacheUrl: ({ endpointName, allowEmptyParams, includeQueryString, path, params, saveUrl, }: CreateUrlOptions) => string;
    createUrl: (options: CreateUrlOptions) => string;
    createPostBody: (data: string) => string;
    get: <T>(url?: string | CreateUrlOptions, options?: RequestInit & {
        saveUrl?: boolean;
    }) => Promise<NhtsaResponse<T>>;
    post: <T_1>(url?: string | CreateUrlOptions, options?: RequestInit & {
        saveUrl?: boolean;
    }) => Promise<NhtsaResponse<T_1>>;
};
//# sourceMappingURL=useNHTSA.d.ts.map