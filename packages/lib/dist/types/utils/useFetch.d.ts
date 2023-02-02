import type { QueryStringParams, NhtsaResponse } from '../types';
/**
 * `useFetch` is a composable function that returns an object containing methods for making HTTP
 * requests to the NHTSA API. All request methods return a Promise that resolves to an object
 * containing the response data, see [NhtsaApiResponse](#TODO-LINK-TO-DOCS) type.
 *
 * The exported methods are:
 * - createUrl() - Builds the URL string and stores it in an internal instance variable
 * - get() - Makes a GET request, uses the internal url variable if no URL is provided
 * - post() - Makes a POST request, uses the internal url variable if no URL is provided
 *
 * ---
 *
 * **Important!** This composable uses the native fetch method to make requests with no polyfills
 * included. You may need to polyfill the fetch() method if you expect this package to be used in
 * older browsers or Node.js versions < 18. See root package README for more info on polyfilling
 * native fetch in your project.
 *
 * ---
 *
 * An explanation of how this composable works:
 *
 * When you call useFetch(), it returns an object containing the methods you can use to interact
 * with the NHTSA API. Each time you call useFetch(), a new instance of the composable is created
 * and returned. This means you can call useFetch() multiple times and each instance will have
 * its own internal state. This is why you must call createUrl() before making a request, so that
 * the URL is stored in the instance's internal state. For example:
 *
 * ```javascript
 * const { createUrl, get } = useFetch()
 * createUrl({...options})
 * get()
 * ```
 *
 * In the example, a url is stored as private variable inside the composable instance created by
 * calling createFetch(). This is done so that the URL can be accessed by all methods after setting
 * it when using the same instance. This is also why, in the example, the URL is not passed to the
 * get() method.
 *
 * After the first createUrl(), any of the other methods in the same instance can access the
 * stored URL. This means you can call createUrl() multiple times from the same instance and it
 * will overwrite the previous URL, then you can make a new get() call using the newest URL.
 *
 * Note that createUrl() is not called automatically by any of the other methods. You must call it
 * yourself before making a request or provide get and post methods with the pre-built URL as an
 * argument. If you call get() or post() without first calling createUrl() or providing the URL as
 * an argument, an error will be thrown. For example:
 *
 * ```javascript
 * const { get } = useFetch()
 * get() // throws an error, URL is undefined because createUrl() was never called first
 * ```
 *
 * All composable methods will also set the internal URL variable if you pass them a URL
 * string. This will always overwrite the current URL stored in the composable instance and
 * immediately make the request with the new URL. The only exception to this is when providing
 * option of `saveUrl: false` to instance methods, see _Options_ section below for more info.
 *
 * For example you could do this if you don't need to build the URL first:
 *
 * ```javascript
 * const { get, post } = useFetch()
 * get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/1?format=json')
 * post('https://some.other.api.com/api/endpoint', { body: 'some data' })
 * get() // fetches 'https://some.other.api.com/api/endpoint'
 * ```
 *
 * In the example above, get uses the provided URL, saves it in the composable instance, and makes
 * the request. Then, the post method is called with a url, it uses that new URL, saves it,
 * and makes the request. Finally, the get method is called again without a URL, it uses the URL
 * saved by the preceding post method, and makes the request with that same URL.
 *
 * If you make another request with get() or post() without first calling createUrl() or providing
 * the URL as an argument, it will use the most recently stored URL value. For example:
 *
 * ```javascript
 * const { get, post, createUrl } = useFetch()
 * createUrl({...options}) // initializes and saves the first url
 * get() // uses url initialized with createUrl()
 * get() // uses same url as preceding get()
 * get('https://some.other.api.com/api/endpoint') // uses and sets a new url
 * post(undefined, { body: 'some data' }) // uses same url as preceding get()
 * get() // uses same url as two preceding requests
 * createUrl({...options}) // saves a new url
 * get() // uses url saved with preceding createUrl()
 * ```
 *
 * The above example shows how `useFetch` can be used to make multiple requests
 * with different URLs using only one instance of the composable. This is useful if you need to
 * make multiple requests to the same API with different endpoints or query string parameters.
 *
 * ---
 *
 * ### Options
 *
 * All of the above is default behavior, but you can also pass option `{ saveUrl: false }` to all
 * composable methods to prevent them from saving the URL in the composable instance. This is
 * useful if you need to make a request with a URL and you don't want to save or overwrite the
 * current URL stored in the composable instance.
 *
 * In this example all of the code is using the same composable instance:
 *
 * ```javascript
 * const { get, post, createUrl } = useFetch()
 *
 * // save url in a local variable only, not in the composable instance
 * const url = createUrl({ ...options, saveUrl: false })
 * get(url, { saveUrl: false })
 * get() // Error, url still undefined
 *
 * // These work as expected but the url is not saved in the composable instance
 * get('https://some.other.api.com/api/endpoint', { saveUrl: false })
 * post('https://some.other.api.com/api/endpoint', {
 *   body: 'some data',
 *   saveUrl: false
 * })
 *
 * // this has no effect, the url is never saved nor used
 * createUrl({ ...options, saveUrl: false })
 *
 * get() // Error, url still undefined
 * get(url) // uses url saved in the local variable above and saves it in the composable instance
 * get() // uses url saved in the composable instance during the preceding get() call
 * ```
 */
export declare const useFetch: () => {
    createUrl: ({ endpointName, allowEmptyParams, includeQueryString, path, params, saveUrl, }: {
        endpointName: string;
        allowEmptyParams?: boolean | undefined;
        includeQueryString?: boolean | undefined;
        path?: string | undefined;
        params?: QueryStringParams | undefined;
        saveUrl?: boolean | undefined;
    }) => string;
    get: <T>(url?: string, options?: RequestInit & {
        saveUrl?: boolean;
    }) => Promise<NhtsaResponse<T>>;
    post: <T_1>(url?: string, options?: RequestInit & {
        saveUrl?: boolean;
    }) => Promise<NhtsaResponse<T_1>>;
};
//# sourceMappingURL=useFetch.d.ts.map