(function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=13)})({13:function(t,n,e){"use strict";function r(t,n,e){switch(t.action){case"begin-auth":o(t.payload)}}function o(t){localStorage.setItem("domain",t.domain),localStorage.setItem("authEndpoint",t.metadata.authEndpoint),localStorage.setItem("tokenEndpoint",t.metadata.tokenEndpoint),localStorage.setItem("micropubEndpoint",t.metadata.micropub),chrome.tabs.create({url:t.authUrl},function(t){d=t.id})}function a(t,n,e){if(t===d&&i(n)){var r=u("code",n.url);s(r).then(function(t){var n=c("access_token",t);localStorage.setItem("token",n),chrome.tabs.remove(e.id),d=null})}}function i(t){var n="http://omnibear.com/auth/success";return"loading"===t.status&&t.url&&t.url.startsWith(n)}function u(t,n){var e=n.split("?")[1];return c(t,e)}function c(t,n){var e=n.split("&").filter(function(n){return n.startsWith(t+"=")});if(e&&e.length){var r=e[0].substr(t.length+1);return decodeURIComponent(r)}return null}function s(t){var n={code:t,redirect_uri:"http://omnibear.com/auth/success/",client_id:"http://omnibear.com",me:"http://keithjgrant.com"},e=localStorage.getItem("tokenEndpoint");return(0,p.post)(e,n)}var p=e(2),d=null;(function(){chrome.runtime.onMessage.addListener(r),chrome.tabs.onUpdated.addListener(a)})()},2:function(t,n,e){"use strict";function r(t,n,e){console.warn("Using deprecated function: requests.post");var r;return r="string"==typeof n?n:o(n),fetch(t+"?"+r,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:e?JSON.stringify(e):null}).then(function(t){return t.text()})}function o(t){var n=[];for(var e in t)n.push(e+"="+t[e]);return n.join("&")}function a(t,n,e){return console.warn("Using deprecated function: requests.postMicropub"),fetch(t,{method:"POST",headers:{Authorization:"Bearer "+e},body:new FormData(n)}).then(function(t){return t.text()})}function i(t,n,e){return new Promise(function(r,o){fetch(t,{method:"POST",headers:{Authorization:"Bearer "+e},body:u(n)}).then(function(t){return t.status<200||t.status>=400?o(t.status):void r(t.text())})})}function u(t){var n=new FormData;for(var e in t)Array.isArray(t[e])?t[e].forEach(function(t,r){n.append(e,t)}):n.append(e,t[e]);return n}Object.defineProperty(n,"__esModule",{value:!0}),n.post=r,n.getParamString=o,n.postMicropub=a,n.postFormData=i,n.formDataFromObject=u}});
//# sourceMappingURL=background.js.map