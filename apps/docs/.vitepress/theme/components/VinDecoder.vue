<script setup lang="ts">
import {
  DecodeVin,
  useNHTSA,
  type DecodeVinResults,
} from '@shaggytools/nhtsa-api-wrapper'

const decodeVin = async (vin: string) => {
  const url = await DecodeVin(vin, false)

  const results = await useNHTSA().get<DecodeVinResults>(url)
  return results.Results.map((result) => {
    return result.Variable === 'Additional Error Text'
  })
}
</script>

<template>
  <div>
    <h1>Vehicle Identification Number (VIN) Decoder</h1>
    <p>Enter a VIN to decode:</p>
    <input type="text" id="vin" name="vin" />
    <button type="button" id="decode" @click="decodeVin">Decode</button>
    <div id="result"></div>
  </div>
</template>
