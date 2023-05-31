#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

async function testApi() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // No need to import from /dist/ in this example, the CJS bundle is the default in the case of CommonJS environments.
  const NHTSA = await require("@shaggytools/nhtsa-api-wrapper");
  const result = await NHTSA.DecodeVin("3VWCK21C92M452103");
  console.log(result);
  return result;
}

testApi();
