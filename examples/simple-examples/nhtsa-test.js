#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

import { DecodeVin } from "../../packages/lib/dist/nhtsa-api-wrapper.js";

async function testApi() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const result = await DecodeVin("3VWCK21C92M452103");
  console.log(result);
  return result;
}

testApi();
