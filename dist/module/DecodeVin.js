import{F as e,_ as r,g as t}from"./Fetch-5397316f.js";class o extends e{constructor(e){super(e)}DecodeVin(e,o){return r(this,void 0,void 0,(function*(){const r="DecodeVin",n=t(o);if(o&&"object"!==n)return Promise.reject(new Error(`DecodeVin, "params" argument must be of type object, got: <${n}> ${o}`));const i=t(e);if("string"!==i)return Promise.reject(new Error(`DecodeVin, "vin" argument is required and must be of type string, got: <${i}> ${e}`));const s=t(null==o?void 0:o.modelYear);if((null==o?void 0:o.modelYear)&&"number"!==s)return Promise.reject(new Error(`DecodeVin, "params.modelYear" argument is required and must be of type string or number, got: <${s}> ${o.modelYear}`));const c=yield this.buildQueryString(o).catch(e=>Promise.reject(new Error(`${r}, Error building query string: ${e}`))),u=`${this.baseUrl}/${r}/${e}${c}`;return yield this.get(u).then(e=>e).catch(e=>Promise.reject(new Error(`${r}, Fetch.get() error: ${e}`)))}))}}export{o as DecodeVin};
//# sourceMappingURL=DecodeVin.js.map
