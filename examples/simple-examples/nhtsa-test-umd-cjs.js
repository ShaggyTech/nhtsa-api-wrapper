#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

import nhtsa from '../../dist/nhtsa-api-wrapper.umd.cjs'

const decoderTest = async () => {
  const { Results } = await nhtsa
    .DecodeVin('3VWCK21C92M452103')
    .catch((err) => err)

  return Results
}

const results = await decoderTest()

console.log(JSON.stringify(results))
