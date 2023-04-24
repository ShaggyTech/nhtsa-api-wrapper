# @shaggytools/nhtsa-api-wrapper Monorepo

<p align="center">
    <a href="https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/npm/v/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://github.com/ShaggyTech/nhtsa-api-wrapper/actions/workflows/ci.yml" target="_blank">
        <img src="https://img.shields.io/github/actions/workflow/status/shaggytech/nhtsa-api-wrapper/ci.yml?style=for-the-badge">
    </a>  
    <a href="https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/bundlephobia/min/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://bundlephobia.com/result?p=@shaggytools/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/bundlephobia/minzip/@shaggytools/nhtsa-api-wrapper?style=for-the-badge">
    </a>
    <a href="https://codecov.io/gh/ShaggyTech/nhtsa-api-wrapper" target="_blank">
        <img src="https://img.shields.io/codecov/c/github/shaggytech/nhtsa-api-wrapper/main?style=for-the-badge">
    </a> 
</p>

---

## Javascript Wrapper and Helper Functions for the [NHTSA VPIC API](https://vpic.nhtsa.dot.gov/api/Home)

A universal (browser/server) javascript wrapper for the National Highway Traffic
Safety Administration (NHTSA) Vehicle Information API (VPIC).

The VPIC API is primarily used for decoding useful information from a Vehicle Identification Number
(VIN) in the United States and Canada. It can also be used to get all models of a make, to decode
WMIs, get all makes for a certain year, and more.

---

<div align="center" style="font-size: 1.5em; font-weight: bold;">Built With:</div>
<br>
<p align="center">
    <a href="https://github.com/pnpm/pnpm" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=pnpm&color=222222&logo=pnpm&logoColor=F69220&label=">
    </a>
    <a href="https://vitejs.dev" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=">
    </a>
    <a href="https://vitepress.dev/" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vitepress&color=000000&logo=Vite&logoColor=FFFFFF&label=">
    </a>   
    <a href="https://vitest.dev/" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vitest&color=222222&logo=Vitest&logoColor=4FC08D&label=">
    </a>
    <a href="https://github.com/vercel/turborepo" target="_blank">
        <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo%20by%20Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=">
    </a>  
</p>

---

## Full Documentation

### [https://shaggytech.com/nhtsa-api-wrapper](https://shaggytech.com/nhtsa-api-wrapper/)

- [Introduction](https://www.shaggytech.com/nhtsa-api-wrapper/guide)
- [Install](https://www.shaggytech.com/nhtsa-api-wrapper/guide/getting-started#install)
- [Quick Start](https://www.shaggytech.com/nhtsa-api-wrapper/guide/getting-started#quick-start)
- [API Reference](https://www.shaggytech.com/nhtsa-api-wrapper/api/)

## Mono Repo Structure

```sh
├── apps
│   ├── docs (Package Documentation)
|
├── config (Shared Configs)
│   ├── eslint-config-custom
│   ├── prettier-config
│   ├── tsconfig
│   ├── typedoc-config
|
├── packages
│   ├── lib (@shaggytools/nhtsa-api-wrapper)

```

## Install

### Node Package Managers

#### [NPM](https://www.npmjs.com/package/@shaggytools/nhtsa-api-wrapper)

```sh [npm]
$ npm install @shaggytools/nhtsa-api-wrapper
```

#### Yarn

```sh [yarn]
$ yarn add @shaggytools/nhtsa-api-wrapper
```

#### Pnpm

```sh [pnpm]
$ pnpm add @shaggytools/nhtsa-api-wrapper
```

### Browser CDNs

Browser global variable: `NHTSA`

#### [jsDelivr](https://www.jsdelivr.com/package/npm/@shaggytools/nhtsa-api-wrapper)

```html [jsDelivr]
<script src="https://cdn.jsdelivr.net/npm/@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.iife.min.js"></script>
```

#### UNPKG

```html [UNPKG]
<script src="https://www.unpkg.com/@shaggytools/nhtsa-api-wrapper@3.0.2/dist/nhtsa-api-wrapper.iife.js"></script>
```
