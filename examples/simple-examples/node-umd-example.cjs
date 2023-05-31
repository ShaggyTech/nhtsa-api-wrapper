#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

/* This file is named with a .cjs extension to allow for the require syntax.
 * See the node-umd-example.mjs file for another example of using the UMD bundle
 * with the import syntax.
 */

async function testApi() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const NHTSA =
    await require("@shaggytools/nhtsa-api-wrapper/dist/nhtsa-api-wrapper.umd.cjs");

  const result = await NHTSA.DecodeVin("3VWCK21C92M452103");

  console.log(result);
  return result;
}

testApi();
