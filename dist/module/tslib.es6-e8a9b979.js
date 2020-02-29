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
function n(n,t,e,c){return new(e||(e=Promise))((function(o,u){function i(n){try{a(c.next(n))}catch(n){u(n)}}function r(n){try{a(c.throw(n))}catch(n){u(n)}}function a(n){n.done?o(n.value):new e((function(t){t(n.value)})).then(i,r)}a((c=c.apply(n,t||[])).next())}))}export{n as _};
//# sourceMappingURL=tslib.es6-e8a9b979.js.map
