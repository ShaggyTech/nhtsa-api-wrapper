#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

/* This file is named with a .mjs extension to allow for the import syntax and
 * indicate that it is a module, even though it is using the UMD bundle with .cjs
 * extension.
 * See the node-umd-example.cjs file for another example of using the UMD bundle
 * with the require syntax.
 */

import nhtsa from "@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.cjs";

const decoderTest = async () => {
  const { Results } = await nhtsa
    .DecodeVin("3VWCK21C92M452103")
    .catch((err) => err);

  return Results;
};

const results = await decoderTest();

console.log(JSON.stringify(results));
