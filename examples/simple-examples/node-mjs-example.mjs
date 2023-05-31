#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

// No need to import from /dist/ in this example, the ESM (.mjs) bundle is the default when using
// files with the .mjs extension.

import { DecodeVin } from "@shaggytools/nhtsa-api-wrapper";

const results = await DecodeVin("3VWCK21C92M452103");

console.log(JSON.stringify(results));
