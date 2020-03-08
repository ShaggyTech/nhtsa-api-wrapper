/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function e(e,n,t,r){return new(t||(t=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new t((function(n){n(e.value)})).then(s,u)}a((r=r.apply(e,n||[])).next())}))}function n(n){return e(this,void 0,void 0,(function*(){if("string"!=typeof n||17!=n.length)return Promise.resolve(!1);const e=(n=n.toUpperCase()).split(""),t=e[8];if(isNaN(parseInt(t))&&"X"!==t)return Promise.resolve(!1);const r="X"===t?10:parseInt(t),o={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9},i=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],s=e.map((e,n)=>{let t;return t=isNaN(parseInt(e))?o[e]:parseInt(e),t*i[n]}).reduce((e,n)=>e+n,0)%11;return Promise.resolve(s===r)}))}export{e as _,n as i};
//# sourceMappingURL=isValidVin-a63c6e15.js.map
