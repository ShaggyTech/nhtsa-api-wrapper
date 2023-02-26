#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

async function testApi() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nhsta = await require("../../packages/lib/dist/nhtsa-api-wrapper.cjs");
  const result = await nhsta.DecodeVin("3VWCK21C92M452103", false);
  console.log(result);
  return result;
}

testApi();
