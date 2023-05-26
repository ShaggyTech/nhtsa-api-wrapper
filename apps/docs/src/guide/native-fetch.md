# Support for Node Versions < 18

::: warning IMPORTANT
This section is likely only applicable if using this package in Node versions < 18 and very
old browsers.

<br />

You can get your Node version by running `node -v` in your terminal.
:::

---

## This Package Uses Native Fetch

::: danger A polyfill for `fetch` is **_NOT_** bundled with this package:exclamation:
:::

This package uses the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
method internally, for both Node and Browser.

Native, or built-in, `fetch()` was introduced in Node v18, which is the current LTS version.
It has also been available in modern browsers for years now.

The terms `native` or `built-in` mean you don't have to explicitly import it, it's available
globally in the browser and in Node.js versions 18+.

---

## Do I need a polyfill?

Here's a brief definition of a
[polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill):

> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality
> on older environments that do not natively support it.

If you need to use this package in Node versions < 18, one of the following is required:

- include a [polyfill](#available-polyfills) for fetch yourself.
- use this package as a
  [URL Builder](../guide/bring-your-own-fetch.md#alternate-use-of-this-package), and then use a
  fetching library like [Axios](https://www.npmjs.com/package/axios) to retrieve the data.

We realize not everyone is using the latest version yet, so we provide a way to use this package
without a `fetch` polyfill.

You can use the endpoint functions to get a url string _without_ fetching. Use this url to
retrieve the data however you want, Express or Axios for example. This way `fetch` is never called
and you won't need a polyfill, at least not specifically for this package.

::: tip :bulb: Tip
See the [BYOF - Bring Your Own Fetch](../guide/bring-your-own-fetch.md) section for more
details on using it this way.
:::

You _**DO NOT**_ need a polyfill for `fetch` if using this package:

- in Node versions > 17
- in a modern browser

Therefore, if you fit one of the following scenarios:

- plan on using the package in a Node.js server that's on v17 or below
- plan on using the package in a webapp, and you have data that indicates that your users might be
  on Opera Mini or IE (e.g. by importing your analytics into https://caniuse.com/ciu/import)

...then you might want to keep reading. Otherwise, you don't need to do anything!

If you provide a polyfill for `fetch()` in your Javascript environment, this package will use that
instead of the native Fetch API and work as designed.

The package functions don't care if `fetch()` is native or polyfilled, as long as it's defined and
adheres to the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.

See Also:

- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [caniuse fetch](https://caniuse.com/?search=fetch)

_Credit:_ [github.com/BuilderIO](https://github.com/BuilderIO/this-package-uses-fetch).

---

## Available Polyfills

There are many polyfills out there, but here are the ones we'll recommend:

- node implementation: [node-fetch](https://github.com/bitinn/node-fetch)
- browser polyfill: [whatwg-fetch](https://github.com/github/fetch)

---

## Adding polyfills

To polyfill fetch in the global scope, you'll have to do the following in your application's entry
point (or at least, before the package that needs fetch is imported):

::: code-group

```ts [Server]
import fetch from 'node-fetch'
global.fetch = fetch

// only import the package _after_
import packageThatUsesFetch from 'package-that-uses-fetch'
```

```ts [Browser]
// browser
import 'whatwg-fetch'

// only import the package _after_
import packageThatUsesFetch from 'package-that-uses-fetch'
```

:::

From then on, you're free to use the package as you see fit.

---

## Why no bundled polyfill?

Because we are not providing an internal polyfill, there are no external dependencies that this
package relies on and therefore the package size can stay small.

Before Node 18 you had to use a polyfill like [node-fetch](https://www.npmjs.com/package/node-fetch)
or [cross-fetch](https://www.npmjs.com/package/cross-fetch), otherwise Node would see `fetch()` as
an undefined function.

Starting with Node 18, the native Fetch API is available as a built-in function. This means you no
longer need a polyfill to use `fetch()` natively in Node.

This package recently went through a major refactor to be more modern and tree-shakeable. This was
the perfect time to "modernize" the codebase and remove the polyfill. The resulting package size is
now significantly smaller than it was before when we bundled
[isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) as a polyfill for `fetch()`.

As Node 18 is the current LTS version, we decided to remove the polyfill and let users provide their
own if they need it. This way we can keep the package size small and not force users to download
polyfills that aren't needed in the modern age of Node.

For more information please read
[Stop Polyfilling Fetch In Your NPM Package](https://www.builder.io/blog/stop-polyfilling-fetch-in-your-npm-package).
