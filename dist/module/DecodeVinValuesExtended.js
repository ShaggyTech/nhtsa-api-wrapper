import{F as e,_ as r,g as t}from"./Fetch-af103524.js";class n extends e{constructor(e){super(e)}DecodeVinValuesExtended(e,n){return r(this,void 0,void 0,(function*(){const r="DecodeVinValuesExtended",o=t(n);if(n&&"object"!==o)return Promise.reject(new Error(`DecodeVinValuesExtended, "params" argument must be of type object, got: <${o}> ${n}`));const s=t(e);if("string"!==s)return Promise.reject(new Error(`DecodeVinValuesExtended, "vin" argument is required and must be of type string, got: <${s}> ${e}`));const i=t(null==n?void 0:n.modelYear);if((null==n?void 0:n.modelYear)&&"number"!==i)return Promise.reject(new Error(`DecodeVinValuesExtended, "params.modelYear" argument is required and must be of type string or number, got: <${i}> ${n.modelYear}`));const d=yield this.buildQueryString(n).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),u=`${this.baseUrl}/${r}/${e}${d}`;return yield this.get(u).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}export{n as DecodeVinValuesExtended};
