parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wKTd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.globalState=void 0,exports.globalState={currentFn:void 0};
},{}],"mxom":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useDependency=void 0;var e=require("./globalState");function n(){var n=new Set;return window.addEventListener("hashchange",function(){n.clear()}),{depend:function(){"function"==typeof e.globalState.currentFn&&n.add(e.globalState.currentFn)},notify:function(){n.forEach(function(e){return e()})}}}exports.useDependency=n;
},{"./globalState":"wKTd"}],"WWYb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createState=void 0;var e=require("./dependency");function t(t){var r=e.useDependency();return new Proxy(t,{get:function(e,t,n){return r.depend(),Reflect.get(e,t,n)},set:function(e,t,n,c){var o=Reflect.set(e,t,n,c);return r.notify(),o}})}exports.createState=t;
},{"./dependency":"mxom"}],"v5qW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createComponent=void 0;var e=require("./globalState");function t(t){e.globalState.currentFn=t,t(),e.globalState.currentFn=void 0}function o(e,o){t(function(){document.querySelector(e).innerHTML=o()})}exports.createComponent=o;
},{"./globalState":"wKTd"}],"ZkQd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.on=void 0;var e=[];function t(t){return{click:function(n){e.some(function(e){return e===n})||document.querySelector(t).addEventListener("click",n)},event:function(n,o){e.some(function(e){return e===o})||document.querySelector(t).addEventListener(n,o)}}}exports.on=t;
},{}],"UJHR":[function(require,module,exports) {
"use strict";function e(e){var t=e;return{get:function(){return t},set:function(e){t=e}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.useState=void 0,exports.useState=e;
},{}],"ZQSk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useEffect=exports.clearEffect=void 0;var e=require("./closure"),t=e.useState([]);function r(){t.set([])}function s(e){setTimeout(function(){t.get().some(function(t){return t===e})||(t.get().push(e),e())},0)}exports.clearEffect=r,exports.useEffect=s;
},{"./closure":"UJHR"}],"N8lG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useRouter=exports.getParams=void 0;var t=require("./createComponent"),e=require("./useEffect"),n=Object.create(null);function r(){return n}function o(){var r=Object.create(null);function o(){n={},e.clearEffect();for(var t=location.hash;t.startsWith("/")||t.startsWith("#");)t=t.substring(1);for(;t.endsWith("/");)t=t.substring(0,t.length-1);return t}function i(e,o){if("function"!=typeof r[e]){for(var i=function(i){if(i.includes(":")){var s=e.split("/"),u=i.split("/"),a=[];if(u.forEach(function(t,e){t.startsWith(":")&&a.push(e)}),a.forEach(function(t){s[t]=u[t]}),s.join("/")===i){var c=e.split("/");return a.forEach(function(t){n[u[t].substring(1)]=c[t]}),t.createComponent(o,r[i]),{value:void 0}}}if(i.endsWith("**")){var f=i.slice(0,-2);if(e.startsWith(f))return t.createComponent(o,r[i]),{value:void 0}}},s=0,u=Object.keys(r);s<u.length;s++){var a=i(u[s]);if("object"==typeof a)return a.value}"function"!=typeof r["*"]?t.createComponent(o,function(){return"<p>404 Not Found</p>"}):t.createComponent(o,r["*"])}else t.createComponent(o,r[e])}return{route:function(t,e){for(;t.startsWith("/");)t=t.substring(1);r[t]=e},render:function(t){window.addEventListener("hashchange",function(){i(o(),t)},!1),i(o(),t)}}}exports.getParams=r,exports.useRouter=o;
},{"./createComponent":"v5qW","./useEffect":"ZQSk"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./createState"),r=require("./createComponent"),t=require("./mountHandler"),u=require("./useEffect"),a=require("./router"),o={useState:e.createState,render:r.createComponent,useEffect:u.useEffect,on:t.on,Router:{getParams:a.getParams,useRouter:a.useRouter}};exports.default=o;
},{"./createState":"WWYb","./createComponent":"v5qW","./mountHandler":"ZkQd","./useEffect":"ZQSk","./router":"N8lG"}]},{},["QCba"], "ReOdd")