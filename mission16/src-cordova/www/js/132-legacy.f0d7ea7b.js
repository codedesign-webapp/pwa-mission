"use strict";(self["webpackChunkmission16"]=self["webpackChunkmission16"]||[]).push([[132],{7273:function(){},1123:function(e,t,n){n.d(t,{D:function(){return C_},T:function(){return T_}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return S},SDK_VERSION:function(){return ht},_DEFAULT_ENTRY_NAME:function(){return Xe},_addComponent:function(){return tt},_addOrOverwriteComponent:function(){return nt},_apps:function(){return Ze},_clearComponents:function(){return ot},_components:function(){return et},_getProvider:function(){return it},_registerComponent:function(){return rt},_removeServiceInstance:function(){return st},deleteApp:function(){return _t},getApp:function(){return dt},getApps:function(){return pt},initializeApp:function(){return ut},onLog:function(){return gt},registerVersion:function(){return ft},setLogLevel:function(){return mt}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw o(t)},o=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},l=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,h=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),r.push(n[c],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):l(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const c=i<e.length,h=c?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==h)throw Error();const u=t<<2|o>>4;if(r.push(u),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==h){const e=l<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){const t=a(e);return c.encodeByteArray(t,!0)},u=function(e){return h(e).replace(/\./g,"")},d=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&f(n)&&(e[n]=_(e[n],t[n]));return e}function f(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function v(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function w(){return"object"===typeof self&&self.self===self}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function T(){return"object"===typeof indexedDB}function k(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(dn){t(dn)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?R(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function R(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){return JSON.parse(e)}function N(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=x(d(s[0])||""),n=x(d(s[1])||""),i=s[2],r=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:r,signature:i}},A=function(e){const t=O(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},D=function(e){const t=O(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function q(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(B(n)&&B(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let h=0;h<16;h++)n[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)n[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const e=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=4294967295&(e<<1|e>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):h<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const e=(s<<5|s>>>27)+r+c+i+n[h]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;while(r<t){if(0===s)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else while(r<t)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function H(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=$(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function $(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(e,t,n,r){let i;if(r<t?i="at least "+t:r>n&&(i=0===n?"none":"no more than "+n),i){const t=e+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".";throw new Error(t)}};function G(e,t){return`${e} failed: ${t} argument `}function Y(e,t,n,r){if((!r||n)&&"function"!==typeof n)throw new Error(G(e,t)+"must be a valid function.")}function K(e,t,n,r){if((!r||n)&&("object"!==typeof n||null===n))throw new Error(G(e,t)+"must be a valid context object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,s(r<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(r)-56320;i=65536+(t<<10)+n}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},J=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class te{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new ne(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new re(this._db.createObjectStore(e,t))}close(){this._db.close()}}class ne{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new re(this._transaction.objectStore(e))}}class re{constructor(e){this._store=e}index(e){return new ie(this._store.index(e))}createIndex(e,t,n){return new ie(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return ee(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return ee(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return ee(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return ee(e,"Error clearing IndexedDB object store")}}class ie{constructor(e){this._index=e}get(e){const t=this._index.get(e);return ee(t,"Error reading from IndexedDB")}}function se(e,t,n){return new Promise(((r,i)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{r(new te(e.target.result))},s.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new te(s.result),e.oldVersion,e.newVersion,new ne(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}}))}class oe{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new g;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(he(e))try{this.getOrInitializeService({instanceIdentifier:ae})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=ae){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ae){return this.instances.has(e)}getOptions(e=ae){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ce(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=ae){return this.component?this.component.multipleInstances?e:ae:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ce(e){return e===ae?void 0:e}function he(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new le(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de=[];var pe;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(pe||(pe={}));const _e={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},fe=pe.INFO,ge={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},me=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ge[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ye{constructor(e){this.name=e,this._logLevel=fe,this._logHandler=me,this._userLogHandler=null,de.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?_e[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}function ve(e){de.forEach((t=>{t.setLogLevel(e)}))}function we(e,t){for(const n of de){let r=null;t&&t.level&&(r=_e[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:pe[n].toLowerCase(),message:s,args:i,type:t.name})}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Ce(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Ce(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Te="@firebase/app",ke="0.7.21",Ee=new ye("@firebase/app"),Se="@firebase/app-compat",Ie="@firebase/analytics-compat",Re="@firebase/analytics",Pe="@firebase/app-check-compat",xe="@firebase/app-check",Ne="@firebase/auth",Oe="@firebase/auth-compat",Ae="@firebase/database",De="@firebase/database-compat",Le="@firebase/functions",Fe="@firebase/functions-compat",Me="@firebase/installations",qe="@firebase/installations-compat",Ue="@firebase/messaging",Be="@firebase/messaging-compat",je="@firebase/performance",We="@firebase/performance-compat",He="@firebase/remote-config",ze="@firebase/remote-config-compat",$e="@firebase/storage",Ve="@firebase/storage-compat",Qe="@firebase/firestore",Ge="@firebase/firestore-compat",Ye="firebase",Ke="9.6.11",Xe="[DEFAULT]",Je={[Te]:"fire-core",[Se]:"fire-core-compat",[Re]:"fire-analytics",[Ie]:"fire-analytics-compat",[xe]:"fire-app-check",[Pe]:"fire-app-check-compat",[Ne]:"fire-auth",[Oe]:"fire-auth-compat",[Ae]:"fire-rtdb",[De]:"fire-rtdb-compat",[Le]:"fire-fn",[Fe]:"fire-fn-compat",[Me]:"fire-iid",[qe]:"fire-iid-compat",[Ue]:"fire-fcm",[Be]:"fire-fcm-compat",[je]:"fire-perf",[We]:"fire-perf-compat",[He]:"fire-rc",[ze]:"fire-rc-compat",[$e]:"fire-gcs",[Ve]:"fire-gcs-compat",[Qe]:"fire-fst",[Ge]:"fire-fst-compat","fire-js":"fire-js",[Ye]:"fire-js-all"},Ze=new Map,et=new Map;function tt(e,t){try{e.container.addComponent(t)}catch(n){Ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nt(e,t){e.container.addOrOverwriteComponent(t)}function rt(e){const t=e.name;if(et.has(t))return Ee.debug(`There were multiple attempts to register component ${t}.`),!1;et.set(t,e);for(const n of Ze.values())tt(n,e);return!0}function it(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function st(e,t,n=Xe){it(e,t).clearInstance(n)}function ot(){et.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},lt=new I("app","Firebase",at);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new oe("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=Ke;function ut(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Xe,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw lt.create("bad-app-name",{appName:String(r)});const i=Ze.get(r);if(i){if(U(e,i.options)&&U(n,i.config))return i;throw lt.create("duplicate-app",{appName:r})}const s=new ue(r);for(const a of et.values())s.addComponent(a);const o=new ct(e,n,s);return Ze.set(r,o),o}function dt(e=Xe){const t=Ze.get(e);if(!t)throw lt.create("no-app",{appName:e});return t}function pt(){return Array.from(Ze.values())}async function _t(e){const t=e.name;Ze.has(t)&&(Ze.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ft(e,t,n){var r;let i=null!==(r=Je[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ee.warn(e.join(" "))}rt(new oe(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function gt(e,t){if(null!==e&&"function"!==typeof e)throw lt.create("invalid-log-argument");we(e,t)}function mt(e){ve(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="firebase-heartbeat-database",vt=1,wt="firebase-heartbeat-store";let bt=null;function Ct(){return bt||(bt=se(yt,vt,((e,t)=>{switch(t){case 0:e.createObjectStore(wt)}})).catch((e=>{throw lt.create("storage-open",{originalErrorMessage:e.message})}))),bt}async function Tt(e){try{const t=await Ct();return t.transaction(wt).objectStore(wt).get(Et(e))}catch(t){throw lt.create("storage-get",{originalErrorMessage:t.message})}}async function kt(e,t){try{const n=await Ct(),r=n.transaction(wt,"readwrite"),i=r.objectStore(wt);return await i.put(t,Et(e)),r.complete}catch(n){throw lt.create("storage-set",{originalErrorMessage:n.message})}}function Et(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=1024,It=2592e6;class Rt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=It})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pt(),{heartbeatsToSend:t,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=u(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pt(){const e=new Date;return e.toISOString().substring(0,10)}function xt(e,t=St){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ot(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ot(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!T()&&k().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Tt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ot(e){return u(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){rt(new oe("platform-logger",(e=>new be(e)),"PRIVATE")),rt(new oe("heartbeat",(e=>new Rt(e)),"PRIVATE")),ft(Te,ke,e),ft(Te,ke,"esm2017"),ft("fire-js","")}At("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e,t){this._delegate=e,this.firebase=t,tt(e,new oe("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),_t(this._delegate))))}_getService(e,t=Xe){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Xe){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){tt(this._delegate,e)}_addOrOverwriteComponent(e){nt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ft=new I("app-compat","Firebase",Lt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mt(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:ft,setLogLevel:mt,onLog:gt,apps:null,SDK_VERSION:ht,INTERNAL:{registerComponent:l,removeApp:i,useAsService:c,modularAPIs:r}};function i(e){delete t[e]}function s(e){if(e=e||Xe,!L(t,e))throw Ft.create("no-app",{appName:e});return t[e]}function o(r,i={}){const s=ut(r,i);if(L(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function l(t){const r=t.name,i=r.replace("-compat","");if(rt(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[i])throw Ft.create("invalid-app-argument",{appName:r});return e[i]()};void 0!==t.serviceProps&&_(o,t.serviceProps),n[i]=o,e.prototype[i]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[i]:null}function c(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){const e=Mt(Dt);function t(t){_(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:qt,extendNamespace:t,createSubscribe:H,ErrorFactory:I,deepExtend:_}),e}const Ut=qt(),Bt=new ye("@firebase/app-compat"),jt="@firebase/app-compat",Wt="0.1.22";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ht(e){ft(jt,Wt,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(w()&&void 0!==self.firebase){Bt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Bt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const zt=Ut;Ht();var $t="firebase",Vt="9.6.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
zt.registerVersion($t,Vt,"app-compat");const Qt="@firebase/database",Gt="0.12.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Yt="";function Kt(e){Yt=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),N(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:x(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return L(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Xt(t)}}catch(t){}return new Jt},en=Zt("localStorage"),tn=Zt("sessionStorage"),nn=new ye("@firebase/database"),rn=function(){let e=1;return function(){return e++}}(),sn=function(e){const t=X(e),n=new W;n.update(t);const r=n.digest();return c.encodeByteArray(r)},on=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"===typeof r&&"number"===typeof r.length?t+=on.apply(null,r):t+="object"===typeof r?N(r):r,t+=" "}return t};let an=null,ln=!0;const cn=function(e,t){s(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(nn.logLevel=pe.VERBOSE,an=nn.log.bind(nn),t&&tn.set("logging_enabled",!0)):"function"===typeof e?an=e:(an=null,tn.remove("logging_enabled"))},hn=function(...e){if(!0===ln&&(ln=!1,null===an&&!0===tn.get("logging_enabled")&&cn(!0)),an){const t=on.apply(null,e);an(t)}},un=function(e){return function(...t){hn(e,...t)}},dn=function(...e){const t="FIREBASE INTERNAL ERROR: "+on(...e);nn.error(t)},pn=function(...e){const t=`FIREBASE FATAL ERROR: ${on(...e)}`;throw nn.error(t),new Error(t)},_n=function(...e){const t="FIREBASE WARNING: "+on(...e);nn.warn(t)},fn=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&_n("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gn=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},mn=function(e){if(C()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},yn="[MIN_NAME]",vn="[MAX_NAME]",wn=function(e,t){if(e===t)return 0;if(e===yn||t===vn)return-1;if(t===yn||e===vn)return 1;{const n=An(e),r=An(t);return null!==n?null!==r?n-r===0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},bn=function(e,t){return e===t?0:e<t?-1:1},Cn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+N(t))},Tn=function(e){if("object"!==typeof e||null===e)return N(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=N(t[r]),n+=":",n+=Tn(e[t[r]]);return n+="}",n},kn=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function En(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Sn=function(e){s(!gn(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,o,a,l,c;0===e?(o=0,a=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),o=l+r,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-r-n))));const h=[];for(c=n;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(i?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(u.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},In=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Rn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function Pn(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const xn=new RegExp("^-?(0*)\\d{1,10}$"),Nn=-2147483648,On=2147483647,An=function(e){if(xn.test(e)){const t=Number(e);if(t>=Nn&&t<=On)return t}return null},Dn=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw _n("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Ln=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fn=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){_n(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(hn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_n(e)}}class Un{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Un.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bn="5",jn="v",Wn="s",Hn="r",zn="f",$n=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vn="ls",Qn="p",Gn="ac",Yn="websocket",Kn="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jn(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Zn(e,t,n){let r;if(s("string"===typeof t,"typeof type must == string"),s("object"===typeof n,"typeof params must == object"),t===Yn)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Kn)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Jn(e)&&(n["ns"]=e.namespace);const i=[];return En(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.counters_={}}incrementCounter(e,t=1){L(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return p(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr={},nr={};function rr(e){const t=e.toString();return tr[t]||(tr[t]=new er),tr[t]}function ir(e,t){const n=e.toString();return nr[n]||(nr[n]=t()),nr[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Dn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="start",ar="close",lr="pLPCommand",cr="pRTLPCB",hr="id",ur="pw",dr="ser",pr="cb",_r="seg",fr="ts",gr="d",mr="dframe",yr=1870,vr=30,wr=yr-vr,br=25e3,Cr=3e4;class Tr{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=un(e),this.stats_=rr(t),this.urlFn=e=>(this.appCheckToken&&(e[Gn]=this.appCheckToken),Zn(t,Kn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new sr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Cr)),mn((()=>{if(this.isClosed_)return;this.scriptTagHolder=new kr(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===or)this.id=n,this.password=r;else{if(t!==ar)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[or]="t",e[dr]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[pr]=this.scriptTagHolder.uniqueCallbackIdentifier),e[jn]=Bn,this.transportSessionId&&(e[Wn]=this.transportSessionId),this.lastSessionId&&(e[Vn]=this.lastSessionId),this.applicationId&&(e[Qn]=this.applicationId),this.appCheckToken&&(e[Gn]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&$n.test(location.hostname)&&(e[Hn]=zn);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return!C()&&(!!Tr.forceAllow_||!Tr.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!In()&&!Rn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=h(t),r=kn(n,wr);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(C())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[mr]="t",n[hr]=e,n[ur]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class kr{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,C())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=rn(),window[lr+this.uniqueCallbackIdentifier]=e,window[cr+this.uniqueCallbackIdentifier]=t,this.myIFrame=kr.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){hn("frame writing exception"),i.stack&&hn(i.stack),hn(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||hn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hr]=this.myID,e[ur]=this.myPW,e[dr]=this.currentSerial;let t=this.urlFn(e),n="",r=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+vr+n.length<=yr))break;{const e=this.pendingSegs.shift();n=n+"&"+_r+r+"="+e.seg+"&"+fr+r+"="+e.ts+"&"+gr+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(br)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){C()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{hn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=16384,Sr=45e3;let Ir=null;"undefined"!==typeof MozWebSocket?Ir=MozWebSocket:"undefined"!==typeof WebSocket&&(Ir=WebSocket);class Rr{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=un(this.connId),this.stats_=rr(t),this.connURL=Rr.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={};return i[jn]=Bn,!C()&&"undefined"!==typeof location&&location.hostname&&$n.test(location.hostname)&&(i[Hn]=zn),t&&(i[Wn]=t),n&&(i[Vn]=n),r&&(i[Gn]=r),Zn(e,Yn,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{if(C()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${Bn}/${Yt}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:""},r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(t["proxy"]={origin:r}),this.mySock=new Ir(this.connURL,[],t)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ir(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ir&&!Rr.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||!0===en.get("previous_websocket_failure")}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=x(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(s(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=kn(t,Er);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(Sr))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rr.responsesRequiredToBeHealthy=2,Rr.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,Rr]}initTransports_(e){const t=Rr&&Rr["isAvailable"]();let n=t&&!Rr.previouslyFailed();if(e.webSocketOnly&&(t||_n("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Rr];else{const e=this.transports_=[];for(const t of Pr.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=6e4,Nr=5e3,Or=10240,Ar=102400,Dr="t",Lr="d",Fr="s",Mr="r",qr="e",Ur="o",Br="a",jr="n",Wr="p",Hr="h";class zr{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=un("c:"+this.id+":"),this.transportManager_=new Pr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e["healthyTimeout"]||0;r>0&&(this.healthyTimeout_=Fn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ar?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Or?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dr in e){const t=e[Dr];t===Br?this.upgradeIfSecondaryHealthy_():t===Mr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Ur&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Cn("t",e),n=Cn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Br,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Cn("t",e),n=Cn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Cn(Dr,e);if(Lr in e){const n=e[Lr];if(t===Hr)this.onHandshake_(n);else if(t===jr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Fr?this.onConnectionShutdown_(n):t===Mr?this.onReset_(n):t===qr?dn("Server Error: "+n):t===Ur?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bn!==n&&_n("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Fn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(xr))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Nr))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.allowedEvents_=e,this.listeners_={},s(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){s(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Vr{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||v()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Qr}getInitialEvent(e){return s("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=32,Yr=768;class Kr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xr(){return new Kr("")}function Jr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Zr(e){return e.pieces_.length-e.pieceNum_}function ei(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Kr(e.pieces_,t)}function ti(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ni(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ri(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ii(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Kr(t,0)}function si(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Kr)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Kr(n,0)}function oi(e){return e.pieceNum_>=e.pieces_.length}function ai(e,t){const n=Jr(e),r=Jr(t);if(null===n)return t;if(n===r)return ai(ei(e),ei(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function li(e,t){const n=ri(e,0),r=ri(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=wn(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function ci(e,t){if(Zr(e)!==Zr(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function hi(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Zr(e)>Zr(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ui{constructor(e,t){this.errorPrefix_=t,this.parts_=ri(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=J(this.parts_[n]);_i(this)}}function di(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=J(t),_i(e)}function pi(e){const t=e.parts_.pop();e.byteLength_-=J(t),e.parts_.length>0&&(e.byteLength_-=1)}function _i(e){if(e.byteLength_>Yr)throw new Error(e.errorPrefix_+"has a key path longer than "+Yr+" bytes ("+e.byteLength_+").");if(e.parts_.length>Gr)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gr+") or object contains a cycle "+fi(e))}function fi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Vr{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new gi}getInitialEvent(e){return s("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=1e3,yi=3e5,vi=3e3,wi=3e4,bi=1.3,Ci=3e4,Ti="server_kill",ki=3;class Ei extends $r{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ei.nextPersistentConnectionId_++,this.log_=un("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mi,this.maxReconnectDelay_=yi,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!C())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gi.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Qr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(N(i)),s(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new g,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),vi),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),s(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),s(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},s="q";e.tag&&(i["q"]=t._queryObject,i["t"]=e.tag),i["h"]=e.hashFn(),this.sendRequest(s,i,(i=>{const s=i["d"],o=i["s"];Ei.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(r);a===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&L(e,"w")){const n=F(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();_n(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||D(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=A(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],r=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),s(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const i=this.removeListen_(n,r);i&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},s="n";r&&(i["q"]=n,i["t"]=r),this.sendRequest(s,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s["h"]=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):dn("Unrecognized action received from server: "+N(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){s(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Ci&&(this.reconnectDelay_=mi),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bi)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Ei.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){s(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?hn("getToken() completed but was canceled"):(hn("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new zr(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{_n(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ti)}),i))}catch(dn){this.log_("Failed to get token: "+dn),o||(this.repoInfo_.nodeAdmin&&_n(dn),l())}}}interrupt(e){hn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],M(this.interruptReasons_)&&(this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Tn(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Kr(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){hn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ki&&(this.reconnectDelay_=wi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ki&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";C()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Yt.replace(/\./g,"-")]=1,v()?e["framework.cordova"]=1:b()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qr.getInstance().currentlyOnline();return M(this.interruptReasons_)&&e}}Ei.nextPersistentConnectionId_=0,Ei.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Si(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Si(yn,e),r=new Si(yn,t);return 0!==this.compare(n,r)}minPost(){return Si.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;class Pi extends Ii{static get __EMPTY_NODE(){return Ri}static set __EMPTY_NODE(e){Ri=e}compare(e,t){return wn(e.name,t.name)}isDefinedOn(e){throw o("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Si.MIN}maxPost(){return new Si(vn,Ri)}makePost(e,t){return s("string"===typeof e,"KeyIndex indexValue must always be a string."),new Si(e,Ri)}toString(){return".key"}}const xi=new Pi;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Oi.RED,this.left=null!=r?r:Di.EMPTY_NODE,this.right=null!=i?i:Di.EMPTY_NODE}copy(e,t,n,r,i){return new Oi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Di.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Di.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oi.RED=!0,Oi.BLACK=!1;class Ai{copy(e,t,n,r,i){return this}insert(e,t,n){return new Oi(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Di{constructor(e,t=Di.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Di(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Oi.BLACK,null,null))}remove(e){return new Di(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oi.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ni(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ni(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(e,t){return wn(e.name,t.name)}function Fi(e,t){return wn(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;function qi(e){Mi=e}Di.EMPTY_NODE=new Ai;const Ui=function(e){return"number"===typeof e?"number:"+Sn(e):"string:"+e},Bi=function(e){if(e.isLeafNode()){const t=e.val();s("string"===typeof t||"number"===typeof t||"object"===typeof t&&L(t,".sv"),"Priority must be a string or number.")}else s(e===Mi||e.isEmpty(),"priority of unexpected type.");s(e===Mi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ji,Wi,Hi;class zi{constructor(e,t=zi.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,s(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Bi(this.priorityNode_)}static set __childrenNodeConstructor(e){ji=e}static get __childrenNodeConstructor(){return ji}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zi(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:zi.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oi(e)?this:".priority"===Jr(e)?this.priorityNode_:zi.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:zi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Jr(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(s(".priority"!==n||1===Zr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,zi.__childrenNodeConstructor.EMPTY_NODE.updateChild(ei(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ui(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Sn(this.value_):this.value_,this.lazyHash_=sn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zi.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zi.__childrenNodeConstructor?-1:(s(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=zi.VALUE_TYPE_ORDER.indexOf(t),i=zi.VALUE_TYPE_ORDER.indexOf(n);return s(r>=0,"Unknown leaf type: "+t),s(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function $i(e){Wi=e}function Vi(e){Hi=e}zi.VALUE_TYPE_ORDER=["object","boolean","number","string"];class Qi extends Ii{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?wn(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Si.MIN}maxPost(){return new Si(vn,new zi("[PRIORITY-POST]",Hi))}makePost(e,t){const n=Wi(e);return new Si(t,new zi("[PRIORITY-POST]",n))}toString(){return".priority"}}const Gi=new Qi,Yi=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){const t=e=>parseInt(Math.log(e)/Yi,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xi=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Oi(a,o.node,Oi.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),h=i(l+1,r);return o=e[l],a=n?n(o):o,new Oi(a,o.node,Oi.BLACK,c,h)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),h=e[s],u=n?n(h):h;l(new Oi(u,h.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Oi.BLACK):(a(r,Oi.BLACK),a(r,Oi.RED))}return s},o=new Ki(e.length),a=s(o);return new Di(r||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji;const Zi={};class es{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return s(Zi&&Gi,"ChildrenNode.ts has not been loaded"),Ji=Ji||new es({".priority":Zi},{".priority":Gi}),Ji}get(e){const t=F(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Di?t:null}hasIndex(e){return L(this.indexSet_,e.toString())}addIndex(e,t){s(e!==xi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Si.Wrap);let o,a=i.getNext();while(a)r=r||e.isDefinedOn(a.node),n.push(a),a=i.getNext();o=r?Xi(n,e.getCompare()):Zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new es(h,c)}addToIndexes(e,t){const n=q(this.indexes_,((n,r)=>{const i=F(this.indexSet_,r);if(s(i,"Missing index implementation for "+r),n===Zi){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Si.Wrap);let s=r.getNext();while(s)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Xi(n,i.getCompare())}return Zi}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Si(e.name,r))),i.insert(e,e.node)}}));return new es(n,this.indexSet_)}removeFromIndexes(e,t){const n=q(this.indexes_,(n=>{if(n===Zi)return n;{const r=t.get(e.name);return r?n.remove(new Si(e.name,r)):n}}));return new es(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class ns{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Bi(this.priorityNode_),this.children_.isEmpty()&&s(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new ns(new Di(Fi),null,es.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new ns(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ts:t}}getChild(e){const t=Jr(e);return null===t?this:this.getImmediateChild(t).getChild(ei(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(s(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Si(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?ts:this.priorityNode_;return new ns(r,s,i)}}updateChild(e,t){const n=Jr(e);if(null===n)return t;{s(".priority"!==Jr(e)||1===Zr(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ei(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Gi,((s,o)=>{t[s]=o.val(e),n++,i&&ns.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ui(this.getPriority().val())+":"),this.forEachChild(Gi,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":sn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Si(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Si(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Si(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Si.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)<0)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Si.Wrap);let r=n.peek();while(null!=r&&t.compare(r,e)>0)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===is?-1:0}withIndex(e){if(e===xi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ns(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===xi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Gi),n=t.getIterator(Gi);let r=e.getNext(),i=n.getNext();while(r&&i){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===xi?null:this.indexMap_.get(e.toString())}}ns.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rs extends ns{constructor(){super(new Di(Fi),ns.EMPTY_NODE,es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ns.EMPTY_NODE}isEmpty(){return!1}}const is=new rs;Object.defineProperties(Si,{MIN:{value:new Si(yn,ns.EMPTY_NODE)},MAX:{value:new Si(vn,is)}}),Pi.__EMPTY_NODE=ns.EMPTY_NODE,zi.__childrenNodeConstructor=ns,qi(is),Vi(is);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss=!0;function os(e,t=null){if(null===e)return ns.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),s(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new zi(n,os(t))}if(e instanceof Array||!ss){let n=ns.EMPTY_NODE;return En(e,((t,r)=>{if(L(e,t)&&"."!==t.substring(0,1)){const e=os(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(os(t))}{const n=[];let r=!1;const i=e;if(En(i,((e,t)=>{if("."!==e.substring(0,1)){const i=os(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Si(e,i)))}})),0===n.length)return ns.EMPTY_NODE;const s=Xi(n,Li,(e=>e.name),Fi);if(r){const e=Xi(n,Gi.getCompare());return new ns(s,os(t),new es({".priority":e},{".priority":Gi}))}return new ns(s,os(t),es.Default)}}$i(os);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as extends Ii{constructor(e){super(),this.indexPath_=e,s(!oi(e)&&".priority"!==Jr(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?wn(e.name,t.name):i}makePost(e,t){const n=os(e),r=ns.EMPTY_NODE.updateChild(this.indexPath_,n);return new Si(t,r)}maxPost(){const e=ns.EMPTY_NODE.updateChild(this.indexPath_,is);return new Si(vn,e)}toString(){return ri(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends Ii{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?wn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Si.MIN}maxPost(){return Si.MAX}makePost(e,t){const n=os(e);return new Si(t,n)}toString(){return".value"}}const cs=new ls,hs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",us="-",ds="z",ps=786,_s=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const o=new Array(8);for(i=7;i>=0;i--)o[i]=hs.charAt(n%64),n=Math.floor(n/64);s(0===n,"Cannot push at time == 0");let a=o.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)a+=hs.charAt(t[i]);return s(20===a.length,"nextPushId: Length should be 20."),a}}(),fs=function(e){if(e===""+On)return us;const t=An(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charAt(o);if(n.length<ps)return n.push(us),n.join("");let r=n.length-1;while(r>=0&&n[r]===ds)r--;if(-1===r)return vn;const i=n[r],s=hs.charAt(hs.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},gs=function(e){if(e===""+Nn)return yn;const t=An(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let r=0;r<n.length;r++)n[r]=e.charAt(r);return n[n.length-1]===us?1===n.length?""+On:(delete n[n.length-1],n.join("")):(n[n.length-1]=hs.charAt(hs.indexOf(n[n.length-1])-1),n.join("")+ds.repeat(ps-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ms(e){return{type:"value",snapshotNode:e}}function ys(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function vs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ws(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function bs(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){s(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(vs(t,a)):s(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ys(t,n)):o.trackChildChange(ws(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Gi,((e,r)=>{t.hasChild(e)||n.trackChildChange(vs(e,r))})),t.isLeafNode()||t.forEachChild(Gi,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(ws(t,r,i))}else n.trackChildChange(ys(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ns.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.indexedFilter_=new Cs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ts.getStartPost_(e),this.endPost_=Ts.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Si(t,n))||(n=ns.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ns.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(ns.EMPTY_NODE);const i=this;return t.forEachChild(Gi,((e,t)=>{i.matches(new Si(e,t))||(r=r.updateImmediateChild(e,ns.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.rangedFilter_=new Ts(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Si(t,n))||(n=ns.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=ns.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=ns.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(ns.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&i(t,n)<=0;l?o++:r=r.updateImmediateChild(t.name,ns.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;s(a.numChildren()===this.limit_,"");const l=new Si(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=r.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=r.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,l),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=i&&i.trackChildChange(ws(t,n,e)),a.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(vs(t,e));const n=a.updateImmediateChild(t,ns.EMPTY_NODE),r=null!=s&&this.rangedFilter_.matches(s);return r?(null!=i&&i.trackChildChange(ys(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=i&&(i.trackChildChange(vs(c.name,c.node)),i.trackChildChange(ys(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,ns.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Gi}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return s(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return s(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yn}hasEnd(){return this.endSet_}getIndexEndValue(){return s(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return s(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return s(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Gi}copy(){const e=new Es;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ss(e){return e.loadsAllData()?new Cs(e.getIndex()):e.hasLimit()?new ks(e):new Ts(e)}function Is(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Rs(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Ps(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function xs(e,t,n){let r;if(e.index_===xi)"string"===typeof t&&(t=fs(t)),r=Ps(e,t,n);else{let i;i=null==n?vn:fs(n),r=Ps(e,t,i)}return r.startAfterSet_=!0,r}function Ns(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Os(e,t,n){let r,i;return e.index_===xi?("string"===typeof t&&(t=gs(t)),i=Ns(e,t,n)):(r=null==n?yn:gs(n),i=Ns(e,t,r)),i.endBeforeSet_=!0,i}function As(e,t){const n=e.copy();return n.index_=t,n}function Ds(e){const t={};if(e.isDefault())return t;let n;return e.index_===Gi?n="$priority":e.index_===cs?n="$value":e.index_===xi?n="$key":(s(e.index_ instanceof as,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=N(n),e.startSet_&&(t["startAt"]=N(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+N(e.indexStartName_))),e.endSet_&&(t["endAt"]=N(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+N(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ls(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==Gi&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends $r{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=un("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(s(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Fs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ds(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),F(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Fs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ds(e._queryParams),n=e._path.toString(),r=new g;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t["auth"]=r.accessToken),i&&i.token&&(t["ac"]=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+j(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=x(o.responseText)}catch(e){_n("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&_n("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.rootNode_=ns.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return{value:null,children:new Map}}function Us(e,t,n){if(oi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Jr(t);e.children.has(r)||e.children.set(r,qs());const i=e.children.get(r);t=ei(t),Us(i,t,n)}}function Bs(e,t){if(oi(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(Gi,((t,n)=>{Us(e,new Kr(t),n)})),Bs(e,t)}}if(e.children.size>0){const n=Jr(t);if(t=ei(t),e.children.has(n)){const r=Bs(e.children.get(n),t);r&&e.children.delete(n)}return 0===e.children.size}return!0}function js(e,t,n){null!==e.value?n(t,e.value):Ws(e,((e,r)=>{const i=new Kr(t.toString()+"/"+e);js(r,i,n)}))}function Ws(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&En(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=1e4,$s=3e4,Vs=3e5;class Qs{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hs(e);const n=zs+($s-zs)*Math.random();Fn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;En(e,((e,r)=>{r>0&&L(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Fn(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vs))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gs;function Ys(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Gs||(Gs={}));class Js{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Gs.ACK_USER_WRITE,this.source=Ys()}operationForChild(e){if(oi(this.path)){if(null!=this.affectedTree.value)return s(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Kr(e));return new Js(Xr(),t,this.revert)}}return s(Jr(this.path)===e,"operationForChild called for unrelated child."),new Js(ei(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.source=e,this.path=t,this.type=Gs.LISTEN_COMPLETE}operationForChild(e){return oi(this.path)?new Zs(this.source,Xr()):new Zs(this.source,ei(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Gs.OVERWRITE}operationForChild(e){return oi(this.path)?new eo(this.source,Xr(),this.snap.getImmediateChild(e)):new eo(this.source,ei(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Gs.MERGE}operationForChild(e){if(oi(this.path)){const t=this.children.subtree(new Kr(e));return t.isEmpty()?null:t.value?new eo(this.source,Xr(),t.value):new to(this.source,Xr(),t)}return s(Jr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new to(this.source,ei(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Jr(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function io(e,t,n,r){const i=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(bs(t.childName,t.snapshotNode))})),so(e,i,"child_removed",t,r,n),so(e,i,"child_added",t,r,n),so(e,i,"child_moved",s,r,n),so(e,i,"child_changed",t,r,n),so(e,i,"value",t,r,n),i}function so(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>ao(e,t,n))),o.forEach((n=>{const r=oo(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function oo(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ao(e,t,n){if(null==t.childName||null==n.childName)throw o("Should only compare child_ events.");const r=new Si(t.childName,t.snapshotNode),i=new Si(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(e,t){return{eventCache:e,serverCache:t}}function co(e,t,n,r){return lo(new no(t,n,r),e.serverCache)}function ho(e,t,n,r){return lo(e.eventCache,new no(t,n,r))}function uo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function po(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;const fo=()=>(_o||(_o=new Di(bn)),_o);class go{constructor(e,t=fo()){this.value=e,this.children=t}static fromObject(e){let t=new go(null);return En(e,((e,n)=>{t=t.set(new Kr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Xr(),value:this.value};if(oi(e))return null;{const n=Jr(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ei(e),t);if(null!=i){const e=si(new Kr(n),i.path);return{path:e,value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(oi(e))return this;{const t=Jr(e),n=this.children.get(t);return null!==n?n.subtree(ei(e)):new go(null)}}set(e,t){if(oi(e))return new go(t,this.children);{const n=Jr(e),r=this.children.get(n)||new go(null),i=r.set(ei(e),t),s=this.children.insert(n,i);return new go(this.value,s)}}remove(e){if(oi(e))return this.children.isEmpty()?new go(null):new go(null,this.children);{const t=Jr(e),n=this.children.get(t);if(n){const r=n.remove(ei(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new go(null):new go(this.value,i)}return this}}get(e){if(oi(e))return this.value;{const t=Jr(e),n=this.children.get(t);return n?n.get(ei(e)):null}}setTree(e,t){if(oi(e))return t;{const n=Jr(e),r=this.children.get(n)||new go(null),i=r.setTree(ei(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new go(this.value,s)}}fold(e){return this.fold_(Xr(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(si(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Xr(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(oi(e))return null;{const r=Jr(e),i=this.children.get(r);return i?i.findOnPath_(ei(e),si(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xr(),t)}foreachOnPath_(e,t,n){if(oi(e))return this;{this.value&&n(t,this.value);const r=Jr(e),i=this.children.get(r);return i?i.foreachOnPath_(ei(e),si(t,r),n):new go(null)}}foreach(e){this.foreach_(Xr(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(si(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.writeTree_=e}static empty(){return new mo(new go(null))}}function yo(e,t,n){if(oi(t))return new mo(new go(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=ai(i,t);return s=s.updateChild(o,n),new mo(e.writeTree_.set(i,s))}{const r=new go(n),i=e.writeTree_.setTree(t,r);return new mo(i)}}}function vo(e,t,n){let r=e;return En(n,((e,n)=>{r=yo(r,si(t,e),n)})),r}function wo(e,t){if(oi(t))return mo.empty();{const n=e.writeTree_.setTree(t,new go(null));return new mo(n)}}function bo(e,t){return null!=Co(e,t)}function Co(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ai(n.path,t)):null}function To(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Gi,((e,n)=>{t.push(new Si(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Si(e,n.value))})),t}function ko(e,t){if(oi(t))return e;{const n=Co(e,t);return new mo(null!=n?new go(n):e.writeTree_.subtree(t))}}function Eo(e){return e.writeTree_.isEmpty()}function So(e,t){return Io(Xr(),e.writeTree_,t)}function Io(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(s(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Io(si(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(si(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e,t){return Xo(t,e)}function Po(e,t,n,r,i){s(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=yo(e.visibleWrites,t,n)),e.lastWriteId=r}function xo(e,t,n,r){s(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=vo(e.visibleWrites,t,n),e.lastWriteId=r}function No(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function Oo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));s(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,a=e.allWrites.length-1;while(i&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ao(t,r.path)?i=!1:hi(r.path,t.path)&&(o=!0)),a--}if(i){if(o)return Do(e),!0;if(r.snap)e.visibleWrites=wo(e.visibleWrites,r.path);else{const t=r.children;En(t,(t=>{e.visibleWrites=wo(e.visibleWrites,si(r.path,t))}))}return!0}return!1}function Ao(e,t){if(e.snap)return hi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&hi(si(e.path,n),t))return!0;return!1}function Do(e){e.visibleWrites=Fo(e.allWrites,Lo,Xr()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Lo(e){return e.visible}function Fo(e,t,n){let r=mo.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)hi(n,e)?(t=ai(n,e),r=yo(r,t,s.snap)):hi(e,n)&&(t=ai(e,n),r=yo(r,Xr(),s.snap.getChild(t)));else{if(!s.children)throw o("WriteRecord should have .snap or .children");if(hi(n,e))t=ai(n,e),r=vo(r,t,s.children);else if(hi(e,n))if(t=ai(e,n),oi(t))r=vo(r,Xr(),s.children);else{const e=F(s.children,Jr(t));if(e){const n=e.getChild(ei(t));r=yo(r,Xr(),n)}}}}}return r}function Mo(e,t,n,r,i){if(r||i){const s=ko(e.visibleWrites,t);if(!i&&Eo(s))return n;if(i||null!=n||bo(s,Xr())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(hi(e.path,t)||hi(t,e.path))},o=Fo(e.allWrites,s,t),a=n||ns.EMPTY_NODE;return So(o,a)}return null}{const r=Co(e.visibleWrites,t);if(null!=r)return r;{const r=ko(e.visibleWrites,t);if(Eo(r))return n;if(null!=n||bo(r,Xr())){const e=n||ns.EMPTY_NODE;return So(r,e)}return null}}}function qo(e,t,n){let r=ns.EMPTY_NODE;const i=Co(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Gi,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=ko(e.visibleWrites,t);return n.forEachChild(Gi,((e,t)=>{const n=So(ko(i,new Kr(e)),t);r=r.updateImmediateChild(e,n)})),To(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}{const n=ko(e.visibleWrites,t);return To(n).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}}function Uo(e,t,n,r,i){s(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=si(t,n);if(bo(e.visibleWrites,o))return null;{const t=ko(e.visibleWrites,o);return Eo(t)?i.getChild(n):So(t,i.getChild(n))}}function Bo(e,t,n,r){const i=si(t,n),s=Co(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n)){const t=ko(e.visibleWrites,i);return So(t,r.getNode().getImmediateChild(n))}return null}function jo(e,t){return Co(e.visibleWrites,t)}function Wo(e,t,n,r,i,s,o){let a;const l=ko(e.visibleWrites,t),c=Co(l,Xr());if(null!=c)a=c;else{if(null==n)return[];a=So(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();while(l&&e.length<i)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}function Ho(){return{visibleWrites:mo.empty(),allWrites:[],lastWriteId:-1}}function zo(e,t,n,r){return Mo(e.writeTree,e.treePath,t,n,r)}function $o(e,t){return qo(e.writeTree,e.treePath,t)}function Vo(e,t,n,r){return Uo(e.writeTree,e.treePath,t,n,r)}function Qo(e,t){return jo(e.writeTree,si(e.treePath,t))}function Go(e,t,n,r,i,s){return Wo(e.writeTree,e.treePath,t,n,r,i,s)}function Yo(e,t,n){return Bo(e.writeTree,e.treePath,t,n)}function Ko(e,t){return Xo(si(e.treePath,t),e.writeTree)}function Xo(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;s("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),s(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ws(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,vs(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,ys(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw o("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ws(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const ea=new Zo;class ta{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new no(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:po(this.viewCache_),i=Go(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e){return{filter:e}}function ra(e,t){s(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),s(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ia(e,t,n,r,i){const a=new Jo;let l,c;if(n.type===Gs.OVERWRITE){const o=n;o.source.fromUser?l=la(e,t,o.path,o.snap,r,i,a):(s(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered()&&!oi(o.path),l=aa(e,t,o.path,o.snap,r,i,c,a))}else if(n.type===Gs.MERGE){const o=n;o.source.fromUser?l=ha(e,t,o.path,o.children,r,i,a):(s(o.source.fromServer,"Unknown source."),c=o.source.tagged||t.serverCache.isFiltered(),l=da(e,t,o.path,o.children,r,i,c,a))}else if(n.type===Gs.ACK_USER_WRITE){const s=n;l=s.revert?fa(e,t,s.path,r,i,a):pa(e,t,s.path,s.affectedTree,r,i,a)}else{if(n.type!==Gs.LISTEN_COMPLETE)throw o("Unknown operation type: "+n.type);l=_a(e,t,n.path,r,a)}const h=a.getChanges();return sa(t,l,h),{viewCache:l,changes:h}}function sa(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=uo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ms(uo(t)))}}function oa(e,t,n,r,i,o){const a=t.eventCache;if(null!=Qo(r,n))return t;{let l,c;if(oi(n))if(s(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=po(t),i=n instanceof ns?n:ns.EMPTY_NODE,s=$o(r,i);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=zo(r,po(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=Jr(n);if(".priority"===h){s(1===Zr(n),"Can't have a priority with additional path components");const i=a.getNode();c=t.serverCache.getNode();const o=Vo(r,n,i,c);l=null!=o?e.filter.updatePriority(i,o):a.getNode()}else{const s=ei(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=Vo(r,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=Yo(r,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,s,i,o):a.getNode()}}return co(t,l,a.isFullyInitialized()||oi(n),e.filter.filtersNodes())}}function aa(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(oi(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Jr(n);if(!l.isCompleteForPath(n)&&Zr(n)>1)return t;const i=ei(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(i,r);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,i,ea,null)}const u=ho(t,c,l.isFullyInitialized()||oi(n),h.filtersNodes()),d=new ta(i,u,s);return oa(e,u,n,i,d,a)}function la(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const h=new ta(i,t,s);if(oi(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=co(t,c,!0,e.filter.filtersNodes());else{const i=Jr(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=co(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=ei(n),c=a.getNode().getImmediateChild(i);let u;if(oi(s))u=r;else{const e=h.getCompleteChild(i);u=null!=e?".priority"===ti(s)&&e.getChild(ii(s)).isEmpty()?e:e.updateChild(s,r):ns.EMPTY_NODE}if(c.equals(u))l=t;else{const n=e.filter.updateChild(a.getNode(),i,u,s,h,o);l=co(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ca(e,t){return e.eventCache.isCompleteForChild(t)}function ha(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=si(n,r);ca(t,Jr(c))&&(a=la(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=si(n,r);ca(t,Jr(c))||(a=la(e,a,c,l,i,s,o))})),a}function ua(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function da(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=oi(n)?r:new go(null).setTree(n,r);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(h.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),h=ua(e,l,r);c=aa(e,c,new Kr(n),h,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!h.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),h=ua(e,l,r);c=aa(e,c,new Kr(n),h,i,s,o,a)}})),c}function pa(e,t,n,r,i,s,o){if(null!=Qo(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(oi(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return aa(e,t,n,l.getNode().getChild(n),i,s,a,o);if(oi(n)){let r=new go(null);return l.getNode().forEachChild(xi,((e,t)=>{r=r.set(new Kr(e),t)})),da(e,t,n,r,i,s,a,o)}return t}{let c=new go(null);return r.foreach(((e,t)=>{const r=si(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),da(e,t,n,c,i,s,a,o)}}function _a(e,t,n,r,i){const s=t.serverCache,o=ho(t,s.getNode(),s.isFullyInitialized()||oi(n),s.isFiltered());return oa(e,o,n,r,ea,i)}function fa(e,t,n,r,i,o){let a;if(null!=Qo(r,n))return t;{const l=new ta(r,t,i),c=t.eventCache.getNode();let h;if(oi(n)||".priority"===Jr(n)){let n;if(t.serverCache.isFullyInitialized())n=zo(r,po(t));else{const e=t.serverCache.getNode();s(e instanceof ns,"serverChildren would be complete if leaf node"),n=$o(r,e)}n=n,h=e.filter.updateFullNode(c,n,o)}else{const i=Jr(n);let s=Yo(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=c.getImmediateChild(i)),h=null!=s?e.filter.updateChild(c,i,s,ei(n),l,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,ns.EMPTY_NODE,ei(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=zo(r,po(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Qo(r,Xr()),co(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Cs(n.getIndex()),i=Ss(n);this.processor_=na(i);const s=t.serverCache,o=t.eventCache,a=r.updateFullNode(ns.EMPTY_NODE,s.getNode(),null),l=i.updateFullNode(ns.EMPTY_NODE,o.getNode(),null),c=new no(a,s.isFullyInitialized(),r.filtersNodes()),h=new no(l,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=lo(h,c),this.eventGenerator_=new ro(this.query_)}get query(){return this.query_}}function ma(e){return e.viewCache_.serverCache.getNode()}function ya(e){return uo(e.viewCache_)}function va(e,t){const n=po(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!oi(t)&&!n.getImmediateChild(Jr(t)).isEmpty())?n.getChild(t):null}function wa(e){return 0===e.eventRegistrations_.length}function ba(e,t){e.eventRegistrations_.push(t)}function Ca(e,t,n){const r=[];if(n){s(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Ta(e,t,n,r){t.type===Gs.MERGE&&null!==t.source.queryId&&(s(po(e.viewCache_),"We should always have a full cache before handling merges"),s(uo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=ia(e.processor_,i,t,n,r);return ra(e.processor_,o.viewCache),s(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Ea(e,o.changes,o.viewCache.eventCache.getNode(),null)}function ka(e,t){const n=e.viewCache_.eventCache,r=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(Gi,((e,t)=>{r.push(ys(e,t))}))}return n.isFullyInitialized()&&r.push(ms(n.getNode())),Ea(e,r,n.getNode(),t)}function Ea(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return io(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa,Ia;class Ra{constructor(){this.views=new Map}}function Pa(e){s(!Sa,"__referenceConstructor has already been defined"),Sa=e}function xa(){return s(Sa,"Reference.ts has not been loaded"),Sa}function Na(e){return 0===e.views.size}function Oa(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return s(null!=o,"SyncTree gave us an op for an invalid query."),Ta(o,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Ta(s,t,n,r));return i}}function Aa(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=zo(n,i?r:null),s=!1;e?s=!0:r instanceof ns?(e=$o(n,r),s=!1):(e=ns.EMPTY_NODE,s=!1);const o=lo(new no(e,s,!1),new no(r,i,!1));return new ga(t,o)}return o}function Da(e,t,n,r,i,s){const o=Aa(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),ba(o,n),ka(o,n)}function La(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Ba(e);if("default"===i)for(const[l,c]of e.views.entries())o=o.concat(Ca(c,n,r)),wa(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(Ca(t,n,r)),wa(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Ba(e)&&s.push(new(xa())(t._repo,t._path)),{removed:s,events:o}}function Fa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ma(e,t){let n=null;for(const r of e.views.values())n=n||va(r,t);return n}function qa(e,t){const n=t._queryParams;if(n.loadsAllData())return ja(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ua(e,t){return null!=qa(e,t)}function Ba(e){return null!=ja(e)}function ja(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){s(!Ia,"__referenceConstructor has already been defined"),Ia=e}function Ha(){return s(Ia,"Reference.ts has not been loaded"),Ia}let za=1;class $a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new go(null),this.pendingWriteTree_=Ho(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Va(e,t,n,r,i){return Po(e.pendingWriteTree_,t,n,r,i),i?sl(e,new eo(Ys(),t,n)):[]}function Qa(e,t,n,r){xo(e.pendingWriteTree_,t,n,r);const i=go.fromObject(n);return sl(e,new to(Ys(),t,i))}function Ga(e,t,n=!1){const r=No(e.pendingWriteTree_,t),i=Oo(e.pendingWriteTree_,t);if(i){let t=new go(null);return null!=r.snap?t=t.set(Xr(),!0):En(r.children,(e=>{t=t.set(new Kr(e),!0)})),sl(e,new Js(r.path,t,n))}return[]}function Ya(e,t,n){return sl(e,new eo(Ks(),t,n))}function Ka(e,t,n){const r=go.fromObject(n);return sl(e,new to(Ks(),t,r))}function Xa(e,t){return sl(e,new Zs(Ks(),t))}function Ja(e,t,n){const r=ul(e,n);if(r){const n=dl(r),i=n.path,s=n.queryId,o=ai(i,t),a=new Zs(Xs(s),o);return pl(e,i,a)}return[]}function Za(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Ua(s,t))){const a=La(s,t,n,r);Na(s)&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),h=e.syncPointTree_.findOnPath(i,((e,t)=>Ba(t)));if(c&&!h){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=_l(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=ll(e,r);e.listenProvider_.startListening(fl(i),cl(e,i),s.hashFn,s.onComplete)}}}if(!h&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(fl(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(hl(t));e.listenProvider_.stopListening(fl(t),n)}));gl(e,l)}return o}function el(e,t,n,r){const i=ul(e,r);if(null!=i){const r=dl(i),s=r.path,o=r.queryId,a=ai(s,t),l=new eo(Xs(o),a,n);return pl(e,s,l)}return[]}function tl(e,t,n,r){const i=ul(e,r);if(i){const r=dl(i),s=r.path,o=r.queryId,a=ai(s,t),l=go.fromObject(n),c=new to(Xs(o),a,l);return pl(e,s,c)}return[]}function nl(e,t,n){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ai(e,r);i=i||Ma(t,n),o=o||Ba(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||Ba(l),i=i||Ma(l,Xr())):(l=new Ra,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=i)a=!0;else{a=!1,i=ns.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=Ma(t,Xr());n&&(i=i.updateImmediateChild(e,n))}))}const c=Ua(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=hl(t);s(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ml();e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}const h=Ro(e.pendingWriteTree_,r);let u=Da(l,t,n,h,i,a);if(!c&&!o){const n=qa(l,t);u=u.concat(yl(e,t,n))}return u}function rl(e,t,n){const r=!0,i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=ai(e,t),i=Ma(n,r);if(i)return i}));return Mo(i,t,s,n,r)}function il(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=ai(e,n);r=r||Ma(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Ma(i,Xr()):(i=new Ra,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new no(r,!0,!1):null,a=Ro(e.pendingWriteTree_,t._path),l=Aa(i,t,a,s?o.getNode():ns.EMPTY_NODE,s);return ya(l)}function sl(e,t){return ol(t,e.syncPointTree_,null,Ro(e.pendingWriteTree_,Xr()))}function ol(e,t,n,r){if(oi(e.path))return al(e,t,n,r);{const i=t.get(Xr());null==n&&null!=i&&(n=Ma(i,Xr()));let s=[];const o=Jr(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ko(r,o);s=s.concat(ol(a,l,e,t))}return i&&(s=s.concat(Oa(i,e,r,n))),s}}function al(e,t,n,r){const i=t.get(Xr());null==n&&null!=i&&(n=Ma(i,Xr()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Ko(r,t),l=e.operationForChild(t);l&&(s=s.concat(al(l,i,o,a)))})),i&&(s=s.concat(Oa(i,e,r,n))),s}function ll(e,t){const n=t.query,r=cl(e,n);return{hashFn:()=>{const e=ma(t)||ns.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?Ja(e,n._path,r):Xa(e,n._path);{const r=Pn(t,n);return Za(e,n,null,r)}}}}function cl(e,t){const n=hl(t);return e.queryToTagMap.get(n)}function hl(e){return e._path.toString()+"$"+e._queryIdentifier}function ul(e,t){return e.tagToQueryMap.get(t)}function dl(e){const t=e.indexOf("$");return s(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Kr(e.substr(0,t))}}function pl(e,t,n){const r=e.syncPointTree_.get(t);s(r,"Missing sync point for query tag that we're tracking");const i=Ro(e.pendingWriteTree_,t);return Oa(r,n,i,null)}function _l(e){return e.fold(((e,t,n)=>{if(t&&Ba(t)){const e=ja(t);return[e]}{let e=[];return t&&(e=Fa(t)),En(n,((t,n)=>{e=e.concat(n)})),e}}))}function fl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Ha())(e._repo,e._path):e}function gl(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=hl(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ml(){return za++}function yl(e,t,n){const r=t._path,i=cl(e,t),o=ll(e,n),a=e.listenProvider_.startListening(fl(t),i,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(r);if(i)s(!Ba(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!oi(e)&&t&&Ba(t))return[ja(t).query];{let e=[];return t&&(e=e.concat(Fa(t).map((e=>e.query)))),En(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(fl(r),cl(e,r))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new vl(t)}node(){return this.node_}}class wl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=si(this.path_,e);return new wl(this.syncTree_,t)}node(){return rl(this.syncTree_,this.path_)}}const bl=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Cl=function(e,t,n){return e&&"object"===typeof e?(s(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Tl(e[".sv"],t,n):"object"===typeof e[".sv"]?kl(e[".sv"],t):void s(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Tl=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:s(!1,"Unexpected server value: "+e)}},kl=function(e,t,n){e.hasOwnProperty("increment")||s(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e["increment"];"number"!==typeof r&&s(!1,"Unexpected increment value: "+r);const i=t.node();if(s(null!==i&&"undefined"!==typeof i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i,a=o.getValue();return"number"!==typeof a?r:a+r},El=function(e,t,n,r){return Il(t,new wl(n,e),r)},Sl=function(e,t,n){return Il(e,new vl(t),n)};function Il(e,t,n){const r=e.getPriority().val(),i=Cl(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Cl(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new zi(s,os(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new zi(i))),r.forEachChild(Gi,((e,r)=>{const i=Il(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Pl(e,t){let n=t instanceof Kr?t:new Kr(t),r=e,i=Jr(n);while(null!==i){const e=F(r.node.children,i)||{children:{},childCount:0};r=new Rl(i,r,e),n=ei(n),i=Jr(n)}return r}function xl(e){return e.node.value}function Nl(e,t){e.node.value=t,ql(e)}function Ol(e){return e.node.childCount>0}function Al(e){return void 0===xl(e)&&!Ol(e)}function Dl(e,t){En(e.node.children,((n,r)=>{t(new Rl(n,e,r))}))}function Ll(e,t,n,r){n&&!r&&t(e),Dl(e,(e=>{Ll(e,t,!0,r)})),n&&r&&t(e)}function Fl(e,t,n){let r=n?e:e.parent;while(null!==r){if(t(r))return!0;r=r.parent}return!1}function Ml(e){return new Kr(null===e.parent?e.name:Ml(e.parent)+"/"+e.name)}function ql(e){null!==e.parent&&Ul(e.parent,e.name,e)}function Ul(e,t,n){const r=Al(n),i=L(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ql(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ql(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=/[\[\].#$\/\u0000-\u001F\u007F]/,jl=/[\[\].#$\u0000-\u001F\u007F]/,Wl=10485760,Hl=function(e){return"string"===typeof e&&0!==e.length&&!Bl.test(e)},zl=function(e){return"string"===typeof e&&0!==e.length&&!jl.test(e)},$l=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),zl(e)},Vl=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!gn(e)||e&&"object"===typeof e&&L(e,".sv")},Ql=function(e,t,n,r){r&&void 0===t||Gl(G(e,"value"),t,n)},Gl=function(e,t,n){const r=n instanceof Kr?new ui(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+fi(r));if("function"===typeof t)throw new Error(e+"contains a function "+fi(r)+" with contents = "+t.toString());if(gn(t))throw new Error(e+"contains "+t.toString()+" "+fi(r));if("string"===typeof t&&t.length>Wl/3&&J(t)>Wl)throw new Error(e+"contains a string greater than "+Wl+" utf8 bytes "+fi(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,i=!1;if(En(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Hl(t)))throw new Error(e+" contains an invalid key ("+t+") "+fi(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');di(r,t),Gl(e,s,r),pi(r)})),n&&i)throw new Error(e+' contains ".value" child '+fi(r)+" in addition to actual children.")}},Yl=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=ri(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Hl(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(li);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&hi(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Kl=function(e,t,n,r){if(r&&void 0===t)return;const i=G(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];En(t,((e,t)=>{const r=new Kr(e);if(Gl(i,t,si(n,r)),".priority"===ti(r)&&!Vl(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),Yl(i,s)},Xl=function(e,t,n){if(!n||void 0!==t){if(gn(t))throw new Error(G(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Vl(t))throw new Error(G(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Jl=function(e,t,n,r){if((!r||void 0!==n)&&!Hl(n))throw new Error(G(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Zl=function(e,t,n,r){if((!r||void 0!==n)&&!zl(n))throw new Error(G(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ec=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zl(e,t,n,r)},tc=function(e,t){if(".info"===Jr(t))throw new Error(e+" failed = Can't modify data under /.info/")},nc=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Hl(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!$l(n))throw new Error(G(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ic(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ci(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function sc(e,t,n){ic(e,n),ac(e,(e=>ci(e,t)))}function oc(e,t,n){ic(e,n),ac(e,(e=>hi(e,t)||hi(t,e)))}function ac(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(lc(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function lc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();an&&hn("event: "+n.toString()),Dn(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="repo_interrupt",hc=25;class uc{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qs(),this.transactionQueueTree_=new Rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dc(e,t,n){if(e.stats_=rr(e.repoInfo_),e.forceRestClient_||Ln())e.server_=new Fs(e.repoInfo_,((t,n,r,i)=>{fc(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>gc(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Ei(e.repoInfo_,t,((t,n,r,i)=>{fc(e,t,n,r,i)}),(t=>{gc(e,t)}),(t=>{mc(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=ir(e.repoInfo_,(()=>new Qs(e.stats_,e.server_))),e.infoData_=new Ms,e.infoSyncTree_=new $a({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ya(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),yc(e,"connected",!1),e.serverSyncTree_=new $a({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);oc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function pc(e){const t=e.infoData_.getNode(new Kr(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function _c(e){return bl({timestamp:pc(e)})}function fc(e,t,n,r,i){e.dataUpdateCount++;const s=new Kr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=q(n,(e=>os(e)));o=tl(e.serverSyncTree_,s,t,i)}else{const t=os(n);o=el(e.serverSyncTree_,s,t,i)}else if(r){const t=q(n,(e=>os(e)));o=Ka(e.serverSyncTree_,s,t)}else{const t=os(n);o=Ya(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=qc(e,s)),oc(e.eventQueue_,a,o)}function gc(e,t){yc(e,"connected",t),!1===t&&Tc(e)}function mc(e,t){En(t,((t,n)=>{yc(e,t,n)}))}function yc(e,t,n){const r=new Kr("/.info/"+t),i=os(n);e.infoData_.updateSnapshot(r,i);const s=Ya(e.infoSyncTree_,r,i);oc(e.eventQueue_,r,s)}function vc(e){return e.nextWriteId_++}function wc(e,t){const n=il(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const r=os(n).withIndex(t._queryParams.getIndex()),i=Ya(e.serverSyncTree_,t._path,r);return sc(e.eventQueue_,t._path,i),Promise.resolve(r)}),(n=>(Oc(e,"get for query "+N(t)+" failed: "+n),Promise.reject(new Error(n)))))}function bc(e,t,n,r,i){Oc(e,"set",{path:t.toString(),value:n,priority:r});const s=_c(e),o=os(n,r),a=rl(e.serverSyncTree_,t),l=Sl(o,a,s),c=vc(e),h=Va(e.serverSyncTree_,t,l,c,!0);ic(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||_n("set at "+t+" failed: "+n);const o=Ga(e.serverSyncTree_,c,!s);oc(e.eventQueue_,t,o),Ac(e,i,n,r)}));const u=zc(e,t);qc(e,u),oc(e.eventQueue_,u,[])}function Cc(e,t,n,r){Oc(e,"update",{path:t.toString(),value:n});let i=!0;const s=_c(e),o={};if(En(n,((n,r)=>{i=!1,o[n]=El(si(t,n),os(r),e.serverSyncTree_,s)})),i)hn("update() called with empty data.  Don't do anything."),Ac(e,r,"ok",void 0);else{const i=vc(e),s=Qa(e.serverSyncTree_,t,o,i);ic(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||_n("update at "+t+" failed: "+n);const a=Ga(e.serverSyncTree_,i,!o),l=a.length>0?qc(e,t):t;oc(e.eventQueue_,l,a),Ac(e,r,n,s)})),En(n,(n=>{const r=zc(e,si(t,n));qc(e,r)})),oc(e.eventQueue_,t,[])}}function Tc(e){Oc(e,"onDisconnectEvents");const t=_c(e),n=qs();js(e.onDisconnect_,Xr(),((r,i)=>{const s=El(r,i,e.serverSyncTree_,t);Us(n,r,s)}));let r=[];js(n,Xr(),((t,n)=>{r=r.concat(Ya(e.serverSyncTree_,t,n));const i=zc(e,t);qc(e,i)})),e.onDisconnect_=qs(),oc(e.eventQueue_,Xr(),r)}function kc(e,t,n){e.server_.onDisconnectCancel(t.toString(),((r,i)=>{"ok"===r&&Bs(e.onDisconnect_,t),Ac(e,n,r,i)}))}function Ec(e,t,n,r){const i=os(n);e.server_.onDisconnectPut(t.toString(),i.val(!0),((n,s)=>{"ok"===n&&Us(e.onDisconnect_,t,i),Ac(e,r,n,s)}))}function Sc(e,t,n,r,i){const s=os(n,r);e.server_.onDisconnectPut(t.toString(),s.val(!0),((n,r)=>{"ok"===n&&Us(e.onDisconnect_,t,s),Ac(e,i,n,r)}))}function Ic(e,t,n,r){if(M(n))return hn("onDisconnect().update() called with empty data.  Don't do anything."),void Ac(e,r,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,((i,s)=>{"ok"===i&&En(n,((n,r)=>{const i=os(r);Us(e.onDisconnect_,si(t,n),i)})),Ac(e,r,i,s)}))}function Rc(e,t,n){let r;r=".info"===Jr(t._path)?nl(e.infoSyncTree_,t,n):nl(e.serverSyncTree_,t,n),sc(e.eventQueue_,t._path,r)}function Pc(e,t,n){let r;r=".info"===Jr(t._path)?Za(e.infoSyncTree_,t,n):Za(e.serverSyncTree_,t,n),sc(e.eventQueue_,t._path,r)}function xc(e){e.persistentConnection_&&e.persistentConnection_.interrupt(cc)}function Nc(e){e.persistentConnection_&&e.persistentConnection_.resume(cc)}function Oc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),hn(n,...t)}function Ac(e,t,n,r){t&&Dn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Dc(e,t,n,r,i,o){Oc(e,"transaction on "+t);const a={path:t,update:n,onComplete:r,status:null,order:rn(),applyLocally:o,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Lc(e,t,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(void 0===c)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Gl("transaction failed: Data returned ",c,a.path),a.status=0;const n=Pl(e.transactionQueueTree_,t),r=xl(n)||[];let i;if(r.push(a),Nl(n,r),"object"===typeof c&&null!==c&&L(c,".priority"))i=F(c,".priority"),s(Vl(i),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=rl(e.serverSyncTree_,t)||ns.EMPTY_NODE;i=n.getPriority().val()}const o=_c(e),h=os(c,i),u=Sl(h,l,o);a.currentOutputSnapshotRaw=h,a.currentOutputSnapshotResolved=u,a.currentWriteId=vc(e);const d=Va(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);oc(e.eventQueue_,t,d),Fc(e,e.transactionQueueTree_)}}function Lc(e,t,n){return rl(e.serverSyncTree_,t,n)||ns.EMPTY_NODE}function Fc(e,t=e.transactionQueueTree_){if(t||Hc(e,t),xl(t)){const n=jc(e,t);s(n.length>0,"Sending zero length transaction queue");const r=n.every((e=>0===e.status));r&&Mc(e,Ml(t),n)}else Ol(t)&&Dl(t,(t=>{Fc(e,t)}))}function Mc(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Lc(e,t,r);let o=i;const a=i.hash();for(let h=0;h<n.length;h++){const e=n[h];s(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=ai(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,(r=>{Oc(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ga(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Hc(e,Pl(e.transactionQueueTree_,t)),Fc(e,e.transactionQueueTree_),oc(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Dn(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{_n("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}qc(e,t)}}),a)}function qc(e,t){const n=Bc(e,t),r=Ml(n),i=jc(e,n);return Uc(e,i,r),r}function Uc(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let l=0;l<t.length;l++){const o=t[l],c=ai(n,o.path);let h,u=!1;if(s(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,i=i.concat(Ga(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=hc)u=!0,h="maxretry",i=i.concat(Ga(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Lc(e,o.path,a);o.currentInputSnapshot=n;const r=t[l].update(n.val());if(void 0!==r){Gl("transaction failed: Data returned ",r,o.path);let t=os(r);const s="object"===typeof r&&null!=r&&L(r,".priority");s||(t=t.updatePriority(n.getPriority()));const l=o.currentWriteId,c=_c(e),h=Sl(t,n,c);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=h,o.currentWriteId=vc(e),a.splice(a.indexOf(l),1),i=i.concat(Va(e.serverSyncTree_,o.path,h,o.currentWriteId,o.applyLocally)),i=i.concat(Ga(e.serverSyncTree_,l,!0))}else u=!0,h="nodata",i=i.concat(Ga(e.serverSyncTree_,o.currentWriteId,!0))}oc(e.eventQueue_,n,i),i=[],u&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===h?r.push((()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot))):r.push((()=>t[l].onComplete(new Error(h),!1,null)))))}Hc(e,e.transactionQueueTree_);for(let s=0;s<r.length;s++)Dn(r[s]);Fc(e,e.transactionQueueTree_)}function Bc(e,t){let n,r=e.transactionQueueTree_;n=Jr(t);while(null!==n&&void 0===xl(r))r=Pl(r,n),t=ei(t),n=Jr(t);return r}function jc(e,t){const n=[];return Wc(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Wc(e,t,n){const r=xl(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Dl(t,(t=>{Wc(e,t,n)}))}function Hc(e,t){const n=xl(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Nl(t,n.length>0?n:void 0)}Dl(t,(t=>{Hc(e,t)}))}function zc(e,t){const n=Ml(Bc(e,t)),r=Pl(e.transactionQueueTree_,t);return Fl(r,(t=>{$c(e,t)})),$c(e,r),Ll(r,(t=>{$c(e,t)})),n}function $c(e,t){const n=xl(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(s(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(s(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ga(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Nl(t,void 0):n.length=o+1,oc(e.eventQueue_,Ml(t),i);for(let e=0;e<r.length;e++)Dn(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}function Qc(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_n(`Invalid query segment '${n}' in query '${e}'`)}return t}const Gc=function(e,t){const n=Yc(e),r=n.namespace;"firebase.com"===n.domain&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fn();const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Xn(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Kr(n.pathString)}},Yc=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(i=Vc(e.substring(h,u)));const d=Qc(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kc{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+N(this.snapshot.exportVal())}}class Xc{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return s(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new g;return kc(this._repo,this._path,e.wrapCallback((()=>{}))),e.promise}remove(){tc("OnDisconnect.remove",this._path);const e=new g;return Ec(this._repo,this._path,null,e.wrapCallback((()=>{}))),e.promise}set(e){tc("OnDisconnect.set",this._path),Ql("OnDisconnect.set",e,this._path,!1);const t=new g;return Ec(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}setWithPriority(e,t){tc("OnDisconnect.setWithPriority",this._path),Ql("OnDisconnect.setWithPriority",e,this._path,!1),Xl("OnDisconnect.setWithPriority",t,!1);const n=new g;return Sc(this._repo,this._path,e,t,n.wrapCallback((()=>{}))),n.promise}update(e){tc("OnDisconnect.update",this._path),Kl("OnDisconnect.update",e,this._path,!1);const t=new g;return Ic(this._repo,this._path,e,t.wrapCallback((()=>{}))),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return oi(this._path)?null:ti(this._path)}get ref(){return new ih(this._repo,this._path)}get _queryIdentifier(){const e=Ls(this._queryParams),t=Tn(e);return"{}"===t?"default":t}get _queryObject(){return Ls(this._queryParams)}isEqual(e){if(e=Z(e),!(e instanceof eh))return!1;const t=this._repo===e._repo,n=ci(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+ni(this._path)}}function th(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function nh(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===xi){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==yn)throw new Error(r);if("string"!==typeof t)throw new Error(i)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==vn)throw new Error(r);if("string"!==typeof n)throw new Error(i)}}else if(e.getIndex()===Gi){if(null!=t&&!Vl(t)||null!=n&&!Vl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(s(e.getIndex()instanceof as||e.getIndex()===cs,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function rh(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ih extends eh{constructor(e,t){super(e,t,new Es,!1)}get parent(){const e=ii(this._path);return null===e?null:new ih(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class sh{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Kr(e),n=lh(this.ref,e);return new sh(this._node.getChild(t),n,Gi)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new sh(n,lh(this.ref,t),Gi))))}hasChild(e){const t=new Kr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oh(e,t){return e=Z(e),e._checkNotDeleted("ref"),void 0!==t?lh(e._root,t):e._root}function ah(e,t){e=Z(e),e._checkNotDeleted("refFromURL");const n=Gc(t,e._repo.repoInfo_.nodeAdmin);nc("refFromURL",n);const r=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||r.host===e._repo.repoInfo_.host||pn("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+e._repo.repoInfo_.host+")"),oh(e,n.path.toString())}function lh(e,t){return e=Z(e),null===Jr(e._path)?ec("child","path",t,!1):Zl("child","path",t,!1),new ih(e._repo,si(e._path,t))}function ch(e,t){e=Z(e),tc("push",e._path),Ql("push",t,e._path,!0);const n=pc(e._repo),r=_s(n),i=lh(e,r),s=lh(e,r);let o;return o=null!=t?uh(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hh(e){return tc("remove",e._path),uh(e,null)}function uh(e,t){e=Z(e),tc("set",e._path),Ql("set",t,e._path,!1);const n=new g;return bc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function dh(e,t){e=Z(e),tc("setPriority",e._path),Xl("setPriority",t,!1);const n=new g;return bc(e._repo,si(e._path,".priority"),t,null,n.wrapCallback((()=>{}))),n.promise}function ph(e,t,n){if(tc("setWithPriority",e._path),Ql("setWithPriority",t,e._path,!1),Xl("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const r=new g;return bc(e._repo,e._path,t,n,r.wrapCallback((()=>{}))),r.promise}function _h(e,t){Kl("update",t,e._path,!1);const n=new g;return Cc(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function fh(e){return e=Z(e),wc(e._repo,e).then((t=>new sh(t,new ih(e._repo,e._path),e._queryParams.getIndex())))}class gh{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Kc("value",this,new sh(e.snapshotNode,new ih(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xc(this,e,t):null}matches(e){return e instanceof gh&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class mh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Xc(this,e,t):null}createEvent(e,t){s(null!=e.childName,"Child events should have a childName.");const n=lh(new ih(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Kc(e.type,this,new sh(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof mh&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function yh(e,t,n,r,i){let s;if("object"===typeof r&&(s=void 0,i=r),"function"===typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Pc(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Jc(n,s||void 0),a="value"===t?new gh(o):new mh(t,o);return Rc(e._repo,e,a),()=>Pc(e._repo,e,a)}function vh(e,t,n,r){return yh(e,"value",t,n,r)}function wh(e,t,n,r){return yh(e,"child_added",t,n,r)}function bh(e,t,n,r){return yh(e,"child_changed",t,n,r)}function Ch(e,t,n,r){return yh(e,"child_moved",t,n,r)}function Th(e,t,n,r){return yh(e,"child_removed",t,n,r)}function kh(e,t,n){let r=null;const i=n?new Jc(n):null;"value"===t?r=new gh(i):t&&(r=new mh(t,i)),Pc(e._repo,e,r)}class Eh{}class Sh extends Eh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ql("endAt",this._value,e._path,!0);const t=Ns(e._queryParams,this._value,this._key);if(rh(t),nh(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new eh(e._repo,e._path,t,e._orderByCalled)}}function Ih(e,t){return Jl("endAt","key",t,!0),new Sh(e,t)}class Rh extends Eh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ql("endBefore",this._value,e._path,!1);const t=Os(e._queryParams,this._value,this._key);if(rh(t),nh(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new eh(e._repo,e._path,t,e._orderByCalled)}}function Ph(e,t){return Jl("endBefore","key",t,!0),new Rh(e,t)}class xh extends Eh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ql("startAt",this._value,e._path,!0);const t=Ps(e._queryParams,this._value,this._key);if(rh(t),nh(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new eh(e._repo,e._path,t,e._orderByCalled)}}function Nh(e=null,t){return Jl("startAt","key",t,!0),new xh(e,t)}class Oh extends Eh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Ql("startAfter",this._value,e._path,!1);const t=xs(e._queryParams,this._value,this._key);if(rh(t),nh(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new eh(e._repo,e._path,t,e._orderByCalled)}}function Ah(e,t){return Jl("startAfter","key",t,!0),new Oh(e,t)}class Dh extends Eh{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new eh(e._repo,e._path,Is(e._queryParams,this._limit),e._orderByCalled)}}function Lh(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Dh(e)}class Fh extends Eh{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new eh(e._repo,e._path,Rs(e._queryParams,this._limit),e._orderByCalled)}}function Mh(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Fh(e)}class qh extends Eh{constructor(e){super(),this._path=e}_apply(e){th(e,"orderByChild");const t=new Kr(this._path);if(oi(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new as(t),r=As(e._queryParams,n);return nh(r),new eh(e._repo,e._path,r,!0)}}function Uh(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Zl("orderByChild","path",e,!1),new qh(e)}class Bh extends Eh{_apply(e){th(e,"orderByKey");const t=As(e._queryParams,xi);return nh(t),new eh(e._repo,e._path,t,!0)}}function jh(){return new Bh}class Wh extends Eh{_apply(e){th(e,"orderByPriority");const t=As(e._queryParams,Gi);return nh(t),new eh(e._repo,e._path,t,!0)}}function Hh(){return new Wh}class zh extends Eh{_apply(e){th(e,"orderByValue");const t=As(e._queryParams,cs);return nh(t),new eh(e._repo,e._path,t,!0)}}function $h(){return new zh}class Vh extends Eh{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Ql("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Sh(this._value,this._key)._apply(new xh(this._value,this._key)._apply(e))}}function Qh(e,t){return Jl("equalTo","key",t,!0),new Vh(e,t)}function Gh(e,...t){let n=Z(e);for(const r of t)n=r._apply(n);return n}Pa(ih),Wa(ih);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yh="FIREBASE_DATABASE_EMULATOR_HOST",Kh={};let Xh=!1;function Jh(e,t,n,r){e.repoInfo_=new Xn(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),r&&(e.authTokenProvider_=r)}function Zh(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hn("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Gc(s,i),c=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:""}[Yh]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Gc(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const h=i&&o?new Un(Un.OWNER):new qn(e.name,e.options,t);nc("Invalid Firebase Database URL",l),oi(l.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=tu(c,e,h,new Mn(e.name,n));return new nu(u,e)}function eu(e,t){const n=Kh[t];n&&n[e.key]===e||pn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),xc(e),delete n[e.key]}function tu(e,t,n,r){let i=Kh[t.name];i||(i={},Kh[t.name]=i);let s=i[e.toURLString()];return s&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new uc(e,Xh,n,r),i[e.toURLString()]=s,s}class nu{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dc(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ih(this._repo,Xr())),this._rootInternal}_delete(){return null!==this._rootInternal&&(eu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&pn("Cannot call "+e+" on a deleted database.")}}function ru(e,t,n,r={}){e=Z(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Un(Un.OWNER);else if(r.mockUserToken){const t="string"===typeof r.mockUserToken?r.mockUserToken:m(r.mockUserToken,e.app.options.projectId);s=new Un(t)}Jh(i,t,n,s)}function iu(e){e=Z(e),e._checkNotDeleted("goOffline"),xc(e._repo)}function su(e){e=Z(e),e._checkNotDeleted("goOnline"),Nc(e._repo)}function ou(e,t){cn(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(e){Kt(ht),rt(new oe("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Zh(n,r,i,t)}),"PUBLIC").setMultipleInstances(!0)),ft(Qt,Gt,e),ft(Qt,Gt,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={".sv":"timestamp"};function cu(){return lu}function hu(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function du(e,t,n){var r;if(e=Z(e),tc("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const i=null===(r=null===n||void 0===n?void 0:n.applyLocally)||void 0===r||r,s=new g,o=(t,n,r)=>{let i=null;t?s.reject(t):(i=new sh(r,new ih(e._repo,e._path),Gi),s.resolve(new uu(n,i)))},a=vh(e,(()=>{}));return Dc(e._repo,e._path,t,o,a,i),s.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ei.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};au();const pu="@firebase/database-compat",_u="0.1.8",fu=new ye("@firebase/database-compat"),gu=function(e){const t="FIREBASE WARNING: "+e;fu.warn(t)},mu=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!==typeof n)throw new Error(G(e,t)+"must be a boolean.")},yu=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(G(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(e){this._delegate=e}cancel(e){Q("OnDisconnect.cancel",0,1,arguments.length),Y("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then((()=>e(null)),(t=>e(t))),t}remove(e){Q("OnDisconnect.remove",0,1,arguments.length),Y("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then((()=>e(null)),(t=>e(t))),t}set(e,t){Q("OnDisconnect.set",1,2,arguments.length),Y("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){Q("OnDisconnect.setWithPriority",2,3,arguments.length),Y("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}update(e,t){if(Q("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,gu("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Y("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then((()=>t(null)),(e=>t(e))),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Q("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this._database=e,this._delegate=t}val(){return Q("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Q("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Q("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Q("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Q("DataSnapshot.child",0,1,arguments.length),e=String(e),Zl("DataSnapshot.child","path",e,!1),new bu(this._database,this._delegate.child(e))}hasChild(e){return Q("DataSnapshot.hasChild",1,1,arguments.length),Zl("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Q("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Q("DataSnapshot.forEach",1,1,arguments.length),Y("DataSnapshot.forEach","action",e,!1),this._delegate.forEach((t=>e(new bu(this._database,t))))}hasChildren(){return Q("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Q("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Q("DataSnapshot.ref",0,0,arguments.length),new Tu(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Cu{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var i;Q("Query.on",2,4,arguments.length),Y("Query.on","callback",t,!1);const s=Cu.getCancelAndContextArgs_("Query.on",n,r),o=(e,n)=>{t.call(s.context,new bu(this.database,e),n)};o.userCallback=t,o.context=s.context;const a=null===(i=s.cancel)||void 0===i?void 0:i.bind(s.context);switch(e){case"value":return vh(this._delegate,o,a),t;case"child_added":return wh(this._delegate,o,a),t;case"child_removed":return Th(this._delegate,o,a),t;case"child_changed":return bh(this._delegate,o,a),t;case"child_moved":return Ch(this._delegate,o,a),t;default:throw new Error(G("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Q("Query.off",0,3,arguments.length),yu("Query.off",e,!0),Y("Query.off","callback",t,!0),K("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,kh(this._delegate,e,r)}else kh(this._delegate,e)}get(){return fh(this._delegate).then((e=>new bu(this.database,e)))}once(e,t,n,r){Q("Query.once",1,4,arguments.length),Y("Query.once","callback",t,!0);const i=Cu.getCancelAndContextArgs_("Query.once",n,r),s=new g,o=(e,n)=>{const r=new bu(this.database,e);t&&t.call(i.context,r,n),s.resolve(r)};o.userCallback=t,o.context=i.context;const a=e=>{i.cancel&&i.cancel.call(i.context,e),s.reject(e)};switch(e){case"value":vh(this._delegate,o,a,{onlyOnce:!0});break;case"child_added":wh(this._delegate,o,a,{onlyOnce:!0});break;case"child_removed":Th(this._delegate,o,a,{onlyOnce:!0});break;case"child_changed":bh(this._delegate,o,a,{onlyOnce:!0});break;case"child_moved":Ch(this._delegate,o,a,{onlyOnce:!0});break;default:throw new Error(G("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return Q("Query.limitToFirst",1,1,arguments.length),new Cu(this.database,Gh(this._delegate,Lh(e)))}limitToLast(e){return Q("Query.limitToLast",1,1,arguments.length),new Cu(this.database,Gh(this._delegate,Mh(e)))}orderByChild(e){return Q("Query.orderByChild",1,1,arguments.length),new Cu(this.database,Gh(this._delegate,Uh(e)))}orderByKey(){return Q("Query.orderByKey",0,0,arguments.length),new Cu(this.database,Gh(this._delegate,jh()))}orderByPriority(){return Q("Query.orderByPriority",0,0,arguments.length),new Cu(this.database,Gh(this._delegate,Hh()))}orderByValue(){return Q("Query.orderByValue",0,0,arguments.length),new Cu(this.database,Gh(this._delegate,$h()))}startAt(e=null,t){return Q("Query.startAt",0,2,arguments.length),new Cu(this.database,Gh(this._delegate,Nh(e,t)))}startAfter(e=null,t){return Q("Query.startAfter",0,2,arguments.length),new Cu(this.database,Gh(this._delegate,Ah(e,t)))}endAt(e=null,t){return Q("Query.endAt",0,2,arguments.length),new Cu(this.database,Gh(this._delegate,Ih(e,t)))}endBefore(e=null,t){return Q("Query.endBefore",0,2,arguments.length),new Cu(this.database,Gh(this._delegate,Ph(e,t)))}equalTo(e,t){return Q("Query.equalTo",1,2,arguments.length),new Cu(this.database,Gh(this._delegate,Qh(e,t)))}toString(){return Q("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Q("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Q("Query.isEqual",1,1,arguments.length),!(e instanceof Cu)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,Y(e,"cancel",r.cancel,!0),r.context=n,K(e,"context",r.context,!0);else if(t)if("object"===typeof t&&null!==t)r.context=t;else{if("function"!==typeof t)throw new Error(G(e,"cancelOrContext")+" must either be a cancel callback or a context object.");r.cancel=t}return r}get ref(){return new Tu(this.database,new ih(this._delegate._repo,this._delegate._path))}}class Tu extends Cu{constructor(e,t){super(e,new eh(t._repo,t._path,new Es,!1)),this.database=e,this._delegate=t}getKey(){return Q("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Q("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new Tu(this.database,lh(this._delegate,e))}getParent(){Q("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Tu(this.database,e):null}getRoot(){return Q("Reference.root",0,0,arguments.length),new Tu(this.database,this._delegate.root)}set(e,t){Q("Reference.set",1,2,arguments.length),Y("Reference.set","onComplete",t,!0);const n=uh(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}update(e,t){if(Q("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,gu("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}tc("Reference.update",this._delegate._path),Y("Reference.update","onComplete",t,!0);const n=_h(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}setWithPriority(e,t,n){Q("Reference.setWithPriority",2,3,arguments.length),Y("Reference.setWithPriority","onComplete",n,!0);const r=ph(this._delegate,e,t);return n&&r.then((()=>n(null)),(e=>n(e))),r}remove(e){Q("Reference.remove",0,1,arguments.length),Y("Reference.remove","onComplete",e,!0);const t=hh(this._delegate);return e&&t.then((()=>e(null)),(t=>e(t))),t}transaction(e,t,n){Q("Reference.transaction",1,3,arguments.length),Y("Reference.transaction","transactionUpdate",e,!1),Y("Reference.transaction","onComplete",t,!0),mu("Reference.transaction","applyLocally",n,!0);const r=du(this._delegate,e,{applyLocally:n}).then((e=>new wu(e.committed,new bu(this.database,e.snapshot))));return t&&r.then((e=>t(null,e.committed,e.snapshot)),(e=>t(e,!1,null))),r}setPriority(e,t){Q("Reference.setPriority",1,2,arguments.length),Y("Reference.setPriority","onComplete",t,!0);const n=dh(this._delegate,e);return t&&n.then((()=>t(null)),(e=>t(e))),n}push(e,t){Q("Reference.push",0,2,arguments.length),Y("Reference.push","onComplete",t,!0);const n=ch(this._delegate,e),r=n.then((e=>new Tu(this.database,e)));t&&r.then((()=>t(null)),(e=>t(e)));const i=new Tu(this.database,n);return i.then=r.then.bind(r),i.catch=r.catch.bind(r,void 0),i}onDisconnect(){return tc("Reference.onDisconnect",this._delegate._path),new vu(new Zc(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,n={}){ru(this._delegate,e,t,n)}ref(e){if(Q("database.ref",0,1,arguments.length),e instanceof Tu){const t=ah(this._delegate,e.toString());return new Tu(this,t)}{const t=oh(this._delegate,e);return new Tu(this,t)}}refFromURL(e){const t="database.refFromURL";Q(t,1,1,arguments.length);const n=ah(this._delegate,e);return new Tu(this,n)}goOffline(){return Q("database.goOffline",0,0,arguments.length),iu(this._delegate)}goOnline(){return Q("database.goOnline",0,0,arguments.length),su(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Eu({app:e,url:t,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){Kt(n);const o=new le("auth-internal",new ue("database-standalone"));return o.setComponent(new oe("auth-internal",(()=>r),"PRIVATE")),{instance:new ku(Zh(e,o,void 0,t,s),e),namespace:i}}ku.ServerValue={TIMESTAMP:cu(),increment:e=>hu(e)};var Su=Object.freeze({__proto__:null,initStandalone:Eu});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=ku.ServerValue;function Ru(e){e.INTERNAL.registerComponent(new oe("database-compat",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new ku(r,n)}),"PUBLIC").setServiceProps({Reference:Tu,Query:Cu,Database:ku,DataSnapshot:bu,enableLogging:ou,INTERNAL:Su,ServerValue:Iu}).setMultipleInstances(!0)),e.registerVersion(pu,_u)}Ru(zt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pu="firebasestorage.googleapis.com",xu="storageBucket",Nu=12e4,Ou=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au extends S{constructor(e,t){super(Du(e),`Firebase Storage: ${t} (${Du(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Au.prototype)}_codeEquals(e){return Du(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Du(e){return"storage/"+e}function Lu(){const e="An unknown error occurred, please check the error payload for server response.";return new Au("unknown",e)}function Fu(e){return new Au("object-not-found","Object '"+e+"' does not exist.")}function Mu(e){return new Au("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qu(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Au("unauthenticated",e)}function Uu(){return new Au("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Bu(e){return new Au("unauthorized","User does not have permission to access '"+e+"'.")}function ju(){return new Au("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Wu(){return new Au("canceled","User canceled the upload/download.")}function Hu(e){return new Au("invalid-url","Invalid URL '"+e+"'.")}function zu(e){return new Au("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function $u(){return new Au("no-default-bucket","No default bucket found. Did you set the '"+xu+"' property when initializing the app?")}function Vu(){return new Au("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Qu(){return new Au("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function Gu(){return new Au("no-download-url","The given file does not have any download URLs.")}function Yu(e){return new Au("invalid-argument",e)}function Ku(){return new Au("app-deleted","The Firebase app was deleted.")}function Xu(e){return new Au("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ju(e,t){return new Au("invalid-format","String does not match format '"+e+"': "+t)}function Zu(e){throw new Au("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=ed.makeFromUrl(e,t)}catch(r){return new ed(e,"")}if(""===n.path)return n;throw zu(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),a={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${c}/b/${r}/o${u}`,"i"),p={bucket:1,path:3},_=t===Pu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,f="([^?#]*)",g=new RegExp(`^https?://${_}/${r}/${f}`,"i"),m={bucket:1,path:2},y=[{regex:o,indices:a,postModify:i},{regex:d,indices:p,postModify:l},{regex:g,indices:m,postModify:l}];for(let v=0;v<y.length;v++){const t=y[v],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new ed(e,i),t.postModify(n);break}}if(null==n)throw Hu(e);return n}}class td{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function h(...e){c||(c=!0,t.apply(null,e))}function u(t){i=setTimeout((()=>{i=null,e(p,l())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(c)return void d();if(e)return d(),void h.call(null,e,...t);const n=l()||o;if(n)return d(),void h.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),u(i)}let _=!1;function f(e){_||(_=!0,d(),c||(null!==i?(e||(a=2),clearTimeout(i),u(0)):e||(a=1)))}return u(0),s=setTimeout((()=>{o=!0,f(!0)}),n),f}function rd(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(e){return void 0!==e}function sd(e){return"function"===typeof e}function od(e){return"object"===typeof e&&!Array.isArray(e)}function ad(e){return"string"===typeof e||e instanceof String}function ld(e){return cd()&&e instanceof Blob}function cd(){return"undefined"!==typeof Blob}function hd(e,t,n,r){if(r<t)throw Yu(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Yu(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function dd(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pd;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(pd||(pd={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _d{constructor(e,t,n,r,i,s,o,a,l,c,h){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new fd(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===pd.NO_ERROR,i=n.getStatus();if(!t||this.isRetryStatusCode_(i)){const t=n.getErrorCode()===pd.ABORT;return void e(!1,new fd(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new fd(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());id(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=Lu();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?Ku():Wu();r(e)}else{const e=ju();r(e)}};this.canceled_?t(!1,new fd(!1,null,!0)):this.backoffId_=nd(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&rd(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class fd{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function gd(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function md(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function yd(e,t){t&&(e["X-Firebase-GMPID"]=t)}function vd(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function wd(e,t,n,r,i,s){const o=dd(e.urlParams),a=e.url+o,l=Object.assign({},e.headers);return yd(l,t),gd(l,n),md(l,s),vd(l,r),new _d(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Cd(...e){const t=bd();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(cd())return new Blob(e);throw new Au("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Td(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sd{constructor(e,t){this.data=e,this.contentType=t||null}}function Id(e,t){switch(e){case Ed.RAW:return new Sd(Rd(t));case Ed.BASE64:case Ed.BASE64URL:return new Sd(xd(e,t));case Ed.DATA_URL:return new Sd(Od(t),Ad(t))}throw Lu()}function Rd(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Pd(e){let t;try{t=decodeURIComponent(e)}catch(n){throw Ju(Ed.DATA_URL,"Malformed data URL.")}return Rd(t)}function xd(e,t){switch(e){case Ed.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw Ju(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case Ed.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw Ju(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kd(t)}catch(i){throw Ju(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Nd{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Ju(Ed.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=Dd(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function Od(e){const t=new Nd(e);return t.base64?xd(Ed.BASE64,t.rest):Pd(t.rest)}function Ad(e){const t=new Nd(e);return t.contentType}function Dd(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t){let n=0,r="";ld(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(ld(this.data_)){const n=this.data_,r=Td(n,e,t);return null===r?null:new Ld(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Ld(n,!0)}}static getBlob(...e){if(cd()){const t=e.map((e=>e instanceof Ld?e.data_:e));return new Ld(Cd.apply(null,t))}{const t=e.map((e=>ad(e)?Id(Ed.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new Ld(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(e){let t;try{t=JSON.parse(e)}catch(n){return null}return od(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function qd(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function Ud(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e,t){return t}class jd{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Bd}}let Wd=null;function Hd(e){return!ad(e)||e.length<2?e:Ud(e)}function zd(){if(Wd)return Wd;const e=[];function t(e,t){return Hd(t)}e.push(new jd("bucket")),e.push(new jd("generation")),e.push(new jd("metageneration")),e.push(new jd("name","fullPath",!0));const n=new jd("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new jd("size");return i.xform=r,e.push(i),e.push(new jd("timeCreated")),e.push(new jd("updated")),e.push(new jd("md5Hash",null,!0)),e.push(new jd("cacheControl",null,!0)),e.push(new jd("contentDisposition",null,!0)),e.push(new jd("contentEncoding",null,!0)),e.push(new jd("contentLanguage",null,!0)),e.push(new jd("contentType",null,!0)),e.push(new jd("metadata","customMetadata",!0)),Wd=e,Wd}function $d(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new ed(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Vd(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return $d(r,e),r}function Qd(e,t,n){const r=Fd(t);if(null===r)return null;const i=r;return Vd(e,i,n)}function Gd(e,t,n,r){const i=Fd(t);if(null===i)return null;if(!ad(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),l=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),l=ud(a,n,r),c=dd({alt:"media",token:t});return l+c}));return l[0]}function Yd(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="prefixes",Xd="items";function Jd(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Kd])for(const i of n[Kd]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new ed(t,n));r.prefixes.push(s)}if(n[Xd])for(const i of n[Xd]){const n=e._makeStorageReference(new ed(t,i["name"]));r.items.push(n)}return r}function Zd(e,t,n){const r=Fd(n);if(null===r)return null;const i=r;return Jd(e,t,i)}class ep{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e){if(!e)throw Lu()}function np(e,t){function n(n,r){const i=Qd(e,r,t);return tp(null!==i),i}return n}function rp(e,t){function n(n,r){const i=Zd(e,t,r);return tp(null!==i),i}return n}function ip(e,t){function n(n,r){const i=Qd(e,r,t);return tp(null!==i),Gd(i,r,e.host,e._protocol)}return n}function sp(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?Uu():qu():402===t.getStatus()?Mu(e.bucket):403===t.getStatus()?Bu(e.path):n,r.serverResponse=n.serverResponse,r}return t}function op(e){const t=sp(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=Fu(e.path)),i.serverResponse=r.serverResponse,i}return n}function ap(e,t,n){const r=t.fullServerUrl(),i=ud(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new ep(i,s,np(e,n),o);return a.errorHandler=op(t),a}function lp(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=ud(o,e.host,e._protocol),l="GET",c=e.maxOperationRetryTime,h=new ep(a,l,rp(e,t.bucket),c);return h.urlParams=s,h.errorHandler=sp(t),h}function cp(e,t,n){const r=t.fullServerUrl(),i=ud(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new ep(i,s,ip(e,n),o);return a.errorHandler=op(t),a}function hp(e,t,n,r){const i=t.fullServerUrl(),s=ud(i,e.host,e._protocol),o="PATCH",a=Yd(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime,h=new ep(s,o,np(e,r),c);return h.headers=l,h.body=a,h.errorHandler=op(t),h}function up(e,t){const n=t.fullServerUrl(),r=ud(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new ep(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=op(t),a}function dp(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function pp(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=dp(null,t)),r}function _p(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=pp(t,r,i),h=Yd(c,n),u="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+h+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",p=Ld.getBlob(u,r,d);if(null===p)throw Vu();const _={name:c["fullPath"]},f=ud(s,e.host,e._protocol),g="POST",m=e.maxUploadRetryTime,y=new ep(f,g,np(e,n),m);return y.urlParams=_,y.headers=o,y.body=p.uploadData(),y.errorHandler=sp(t),y}class fp{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function gp(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){tp(!1)}const r=t||["active"];return tp(!!n&&-1!==r.indexOf(n)),n}function mp(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=pp(t,r,i),a={name:o["fullPath"]},l=ud(s,e.host,e._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},u=Yd(o,n),d=e.maxUploadRetryTime;function p(e){let t;gp(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){tp(!1)}return tp(ad(t)),t}const _=new ep(l,c,p,d);return _.urlParams=a,_.headers=h,_.body=u,_.errorHandler=sp(t),_}function yp(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=gp(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){tp(!1)}n||tp(!1);const i=Number(n);return tp(!isNaN(i)),new fp(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,l=new ep(n,o,s,a);return l.headers=i,l.errorHandler=sp(t),l}const vp=262144;function wp(e,t,n,r,i,s,o,a){const l=new fp(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Qu();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const u=l.current,d=u+h,p=h===c?"upload, finalize":"upload",_={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},f=r.slice(u,d);if(null===f)throw Vu();function g(e,n){const i=gp(e,["active","final"]),o=l.current+h,a=r.size();let c;return c="final"===i?np(t,s)(e,n):null,new fp(o,a,"final"===i,c)}const m="POST",y=t.maxUploadRetryTime,v=new ep(n,m,g,y);return v.headers=_,v.body=f.uploadData(),v.progressCallback=a||null,v.errorHandler=sp(e),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={STATE_CHANGED:"state_changed"},Cp={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Tp(e){switch(e){case"running":case"pausing":case"canceling":return Cp.RUNNING;case"paused":return Cp.PAUSED;case"success":return Cp.SUCCESS;case"canceled":return Cp.CANCELED;case"error":return Cp.ERROR;default:return Cp.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,n){const r=sd(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sp=null;class Ip{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pd.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=pd.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=pd.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Zu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zu("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Zu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Rp extends Ip{initXhr(){this.xhr_.responseType="text"}}function Pp(){return Sp?Sp():new Rp}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=zd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=mp(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Pp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=yp(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,Pp,t,n);this._request=i,i.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=vp*this._chunkMultiplier,t=new fp(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=wp(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,Pp,r,i);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=vp*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ap(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Pp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=_p(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Pp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Wu(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Tp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new kp(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(Tp(this._state)){case Cp.SUCCESS:Ep(this._resolve.bind(null,this.snapshot))();break;case Cp.CANCELED:case Cp.ERROR:const t=this._reject;Ep(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=Tp(this._state);switch(t){case Cp.RUNNING:case Cp.PAUSED:e.next&&Ep(e.next.bind(e,this.snapshot))();break;case Cp.SUCCESS:e.complete&&Ep(e.complete.bind(e))();break;case Cp.CANCELED:case Cp.ERROR:e.error&&Ep(e.error.bind(e,this._error))();break;default:e.error&&Ep(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this._service=e,this._location=t instanceof ed?t:ed.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Np(e,t)}get root(){const e=new ed(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ud(this._location.path)}get storage(){return this._service}get parent(){const e=Md(this._location.path);if(null===e)return null;const t=new ed(this._location.bucket,e);return new Np(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw Xu(e)}}function Op(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new xp(e,new Ld(t),n)}function Ap(e){const t={prefixes:[],items:[]};return Dp(e,t).then((()=>t))}async function Dp(e,t,n){const r={pageToken:n},i=await Lp(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Dp(e,t,i.nextPageToken)}function Lp(e,t){null!=t&&"number"===typeof t.maxResults&&hd("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=lp(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Pp)}function Fp(e){e._throwIfRoot("getMetadata");const t=ap(e.storage,e._location,zd());return e.storage.makeRequestWithTokens(t,Pp)}function Mp(e,t){e._throwIfRoot("updateMetadata");const n=hp(e.storage,e._location,t,zd());return e.storage.makeRequestWithTokens(n,Pp)}function qp(e){e._throwIfRoot("getDownloadURL");const t=cp(e.storage,e._location,zd());return e.storage.makeRequestWithTokens(t,Pp).then((e=>{if(null===e)throw Gu();return e}))}function Up(e){e._throwIfRoot("deleteObject");const t=up(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Pp)}function Bp(e,t){const n=qd(e._location.path,t),r=new ed(e._location.bucket,n);return new Np(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e){return/^[A-Za-z]+:\/\//.test(e)}function Wp(e,t){return new Np(e,t)}function Hp(e,t){if(e instanceof Qp){const n=e;if(null==n._bucket)throw $u();const r=new Np(n,n._bucket);return null!=t?Hp(r,t):r}return void 0!==t?Bp(e,t):e}function zp(e,t){if(t&&jp(t)){if(e instanceof Qp)return Wp(e,t);throw Yu("To use ref(service, url), the first argument must be a Storage instance.")}return Hp(e,t)}function $p(e,t){const n=null===t||void 0===t?void 0:t[xu];return null==n?null:ed.makeFromBucketSpec(n,e)}function Vp(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:m(i,e.app.options.projectId))}class Qp{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Pu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nu,this._maxUploadRetryTime=Ou,this._requests=new Set,this._bucket=null!=r?ed.makeFromBucketSpec(r,this._host):$p(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=ed.makeFromBucketSpec(this._url,e):this._bucket=$p(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Np(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new td(Ku());{const i=wd(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Gp="@firebase/storage",Yp="0.9.5",Kp="storage";function Xp(e,t,n){return e=Z(e),Op(e,t,n)}function Jp(e){return e=Z(e),Fp(e)}function Zp(e,t){return e=Z(e),Mp(e,t)}function e_(e,t){return e=Z(e),Lp(e,t)}function t_(e){return e=Z(e),Ap(e)}function n_(e){return e=Z(e),qp(e)}function r_(e){return e=Z(e),Up(e)}function i_(e,t){return e=Z(e),zp(e,t)}function s_(e,t){return Bp(e,t)}function o_(e,t,n,r={}){Vp(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Qp(n,r,i,t,ht)}function l_(){rt(new oe(Kp,a_,"PUBLIC").setMultipleInstances(!0)),ft(Gp,Yp,""),ft(Gp,Yp,"esm2017")}l_();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c_{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new c_(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new c_(t,this,this._ref))}),t)}on(e,t,n,r){let i;return t&&(i="function"===typeof t?e=>t(new c_(e,this,this._ref)):{next:t.next?e=>t.next(new c_(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class u_{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new d_(e,this._service)))}get items(){return this._delegate.items.map((e=>new d_(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=s_(this._delegate,e);return new d_(t,this.storage)}get root(){return new d_(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new d_(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new h_(Xp(this._delegate,e,t),this)}putString(e,t=Ed.RAW,n){this._throwIfRoot("putString");const r=Id(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new h_(new xp(this._delegate,new Ld(r.data,!0),i),this)}listAll(){return t_(this._delegate).then((e=>new u_(e,this.storage)))}list(e){return e_(this._delegate,e||void 0).then((e=>new u_(e,this.storage)))}getMetadata(){return Jp(this._delegate)}updateMetadata(e){return Zp(this._delegate,e)}getDownloadURL(){return n_(this._delegate)}delete(){return this._throwIfRoot("delete"),r_(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw Xu(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(__(e))throw Yu("ref() expected a child path but got a URL, use refFromURL instead.");return new d_(i_(this._delegate,e),this)}refFromURL(e){if(!__(e))throw Yu("refFromURL() expected a full URL but got a child path, use ref() instead.");try{ed.makeFromUrl(e,this._delegate.host)}catch(t){throw Yu("refFromUrl() expected a valid full URL but got an invalid one.")}return new d_(i_(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){o_(this._delegate,e,t,n)}}function __(e){return/^[A-Za-z]+:\/\//.test(e)}const f_="@firebase/storage-compat",g_="0.1.13",m_="storage-compat";function y_(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new p_(n,r);return i}function v_(e){const t={TaskState:Cp,TaskEvent:bp,StringFormat:Ed,Storage:p_,Reference:d_};e.INTERNAL.registerComponent(new oe(m_,y_,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(f_,g_)}v_(zt);var w_=zt.initializeApp({databaseURL:"https://pwa-camera.firebaseio.com",storageBucket:"pwa-camera.appspot.com"}),b_=w_.database(),C_=b_.ref("pictures"),T_=w_.storage()},7024:function(e,t,n){n(7273);var r=n(144),i=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),l=(()=>o.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c=(()=>o.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),h={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function u(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const d=new Map;t["Z"]=r.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:s}){let o="";for(const i in t)o+=String(t[i]);let a=d.get(o);if(!a){let e;for(e in a=[],h)h[e].forEach((n=>{const r=t[n],i=u(e,n,r);i&&a.push(i)}));const n=a.some((e=>e.startsWith("col-")));a.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),d.set(o,a)}return e(t.tag,(0,i.ZP)(n,{class:a}),r)}})},1819:function(e,t,n){n.d(t,{Z:function(){return o}});n(8582),n(7273);var r=n(144);function i(e){return r.Z.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:r,children:i}){r.staticClass=`${e} ${r.staticClass||""}`.trim();const{attrs:s}=r;if(s){r.attrs={};const e=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(r.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(r.staticClass+=` ${e.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,r,i)}})}var s=n(7559),o=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:r}){let i;const{attrs:o}=n;return o&&(n.attrs={},i=Object.keys(o).filter((e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(i||[])}),r)}})},7894:function(e,t,n){n(7273);var r=n(144),i=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(e,t){return o.reduce(((n,r)=>(n[e+(0,s.jC)(r)]=t(),n)),{})}const c=e=>[...a,"baseline","stretch"].includes(e),h=l("align",(()=>({type:String,default:null,validator:c}))),u=e=>[...a,"space-between","space-around"].includes(e),d=l("justify",(()=>({type:String,default:null,validator:u}))),p=e=>[...a,"space-between","space-around","stretch"].includes(e),_=l("alignContent",(()=>({type:String,default:null,validator:p}))),f={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(_)},g={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,n){let r=g[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const y=new Map;t["Z"]=r.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},..._},render(e,{props:t,data:n,children:r}){let s="";for(const i in t)s+=String(t[i]);let o=y.get(s);if(!o){let e;for(e in o=[],f)f[e].forEach((n=>{const r=t[n],i=m(e,n,r);i&&o.push(i)}));o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(s,o)}return e(t.tag,(0,i.ZP)(n,{staticClass:"row",class:o}),r)}})}}]);
//# sourceMappingURL=132-legacy.f0d7ea7b.js.map