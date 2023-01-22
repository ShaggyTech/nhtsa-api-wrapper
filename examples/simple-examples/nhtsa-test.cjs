#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

async function testApi() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const nhsta = await require('../../dist/nhtsa-api-wrapper.umd.js')
  const result = await nhsta.DecodeVin('3VWCK21C92M452103')
  console.log(result)
  return result
}

testApi()
