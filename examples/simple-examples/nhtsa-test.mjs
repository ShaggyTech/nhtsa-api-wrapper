#!/usr/bin/env node
/* eslint-disable no-undef */
/* eslint-disable no-console */

import { DecodeVin } from "../../packages/lib/dist/nhtsa-api-wrapper.js";

const { Results } = await DecodeVin("3VWCK21C92M452103").catch((err) => err);

console.log(JSON.stringify(Results));
