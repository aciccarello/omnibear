(function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)})([function(e,t,n){!function(e,n){n(t)}(this,function(e){function t(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,n){var r,o,i,a,u;for(u=arguments.length;u-- >2;)W.push(arguments[u]);for(n&&n.children&&(W.length||W.push(n.children),delete n.children);W.length;)if((i=W.pop())instanceof Array)for(u=i.length;u--;)W.push(i[u]);else null!=i&&i!==!0&&i!==!1&&("number"==typeof i&&(i=String(i)),a="string"==typeof i,a&&o?r[r.length-1]+=i:((r||(r=[])).push(i),o=a));var s=new t(e,n||void 0,r||F);return G.vnode&&G.vnode(s),s}function r(e,t){if(t)for(var n in t)e[n]=t[n];return e}function o(e){return r({},e)}function i(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}function a(e){return"function"==typeof e}function u(e){return"string"==typeof e}function s(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function l(e,t){return n(e.nodeName,r(o(e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function c(e,t,n){var r=t.split(".");return function(t){for(var o=t&&t.target||this,a={},s=a,l=u(n)?i(t,n):o.nodeName?o.type.match(/^che|rad/)?o.checked:o.value:t,c=0;c<r.length-1;c++)s=s[r[c]]||(s[r[c]]=!c&&e.state[r[c]]||{});s[r[c]]=l,e.setState(a)}}function f(e){!e._dirty&&(e._dirty=!0)&&1==Q.push(e)&&(G.debounceRendering||B)(p)}function p(){var e,t=Q;for(Q=[];e=t.pop();)e._dirty&&L(e)}function h(e){var t=e&&e.nodeName;return t&&a(t)&&!(t.prototype&&t.prototype.render)}function d(e,t){return e.nodeName(m(e),t||z)}function y(e,t){return u(t)?e instanceof Text:u(t.nodeName)?!e._componentConstructor&&b(e,t.nodeName):a(t.nodeName)?!e._componentConstructor||e._componentConstructor===t.nodeName||h(t):void 0}function b(e,t){return e.normalizedNodeName===t||Y(e.nodeName)===Y(t)}function m(e){var t=o(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n,r,o){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=s(r)),"key"===t);else if("class"!==t||o)if("style"===t){if((!r||u(r)||u(n))&&(e.style.cssText=r||""),r&&"object"==typeof r){if(!u(n))for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"!=typeof r[i]||q[i]?r[i]:r[i]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=e._listeners||(e._listeners={});t=Y(t.substring(2)),r?l[t]||e.addEventListener(t,E,!!J[t]):l[t]&&e.removeEventListener(t,E,!!J[t]),l[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)_(e,t,null==r?"":r),null!=r&&r!==!1||e.removeAttribute(t);else{var c=o&&t.match(/^xlink\:?(.+)/);null==r||r===!1?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",Y(c[1])):e.removeAttribute(t):"object"==typeof r||a(r)||(c?e.setAttributeNS("http://www.w3.org/1999/xlink",Y(c[1]),r):e.setAttribute(t,r))}else e.className=r||""}function _(e,t,n){try{e[t]=n}catch(e){}}function E(e){return this._listeners[e.type](G.event&&G.event(e)||e)}function w(e){if(v(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||Y(e.nodeName);(K[t]||(K[t]=[])).push(e)}}function O(e,t){var n=Y(e),r=K[n]&&K[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function S(){for(var e;e=X.pop();)G.afterMount&&G.afterMount(e),e.componentDidMount&&e.componentDidMount()}function k(e,t,n,r,o,i){Z++||($=o&&"undefined"!=typeof o.ownerSVGElement,ee=e&&!(H in e));var a=P(e,t,n,r);return o&&a.parentNode!==o&&o.appendChild(a),--Z||(ee=!1,i||S()),a}function P(e,t,n,r){for(var o=t&&t.attributes&&t.attributes.ref;h(t);)t=d(t,n);if(null==t&&(t=""),u(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&N(e),e=document.createTextNode(t)),e;if(a(t.nodeName))return R(e,t,n,r);var i=e,s=String(t.nodeName),l=$,c=t.children;if($="svg"===s||"foreignObject"!==s&&$,e){if(!b(e,s)){for(i=O(s,$);e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),N(e)}}else i=O(s,$);var f=i.firstChild,p=i[H];if(!p){i[H]=p={};for(var y=i.attributes,m=y.length;m--;)p[y[m].name]=y[m].value}return!ee&&c&&1===c.length&&"string"==typeof c[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=c[0]&&(f.nodeValue=c[0]):(c&&c.length||f)&&C(i,c,n,r,!!p.dangerouslySetInnerHTML),T(i,t.attributes,p),o&&(p.ref=o)(i),$=l,i}function C(e,t,n,r,o){var i,a,u,s,l=e.childNodes,c=[],f={},p=0,h=0,d=l.length,b=0,m=t&&t.length;if(d)for(var g=0;g<d;g++){var _=l[g],E=_[H],w=m?(a=_._component)?a.__key:E?E.key:null:null;null!=w?(p++,f[w]=_):(ee||o||E||_ instanceof Text)&&(c[b++]=_)}if(m)for(var g=0;g<m;g++){u=t[g],s=null;var w=u.key;if(null!=w)p&&w in f&&(s=f[w],f[w]=void 0,p--);else if(!s&&h<b)for(i=h;i<b;i++)if(a=c[i],a&&y(a,u)){s=a,c[i]=void 0,i===b-1&&b--,i===h&&h++;break}s=P(s,u,n,r),s&&s!==e&&(g>=d?e.appendChild(s):s!==l[g]&&(s===l[g+1]&&v(l[g]),e.insertBefore(s,l[g]||null)))}if(p)for(var g in f)f[g]&&N(f[g]);for(;h<=b;)s=c[b--],s&&N(s)}function N(e,t){var n=e._component;if(n)A(n,!t);else{e[H]&&e[H].ref&&e[H].ref(null),t||w(e);for(var r;r=e.lastChild;)N(r,t)}}function T(e,t,n){var r;for(r in n)t&&r in t||null==n[r]||g(e,r,n[r],n[r]=void 0,$);if(t)for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||g(e,r,n[r],n[r]=t[r],$)}function j(e){var t=e.constructor.name,n=te[t];n?n.push(e):te[t]=[e]}function M(e,t,n){var r=new e(t,n),o=te[e.name];if(D.call(r,t,n),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function x(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&G.syncComponentUpdates===!1&&e.base?f(e):L(e,1,o)),e.__ref&&e.__ref(e))}function L(e,t,n,i){if(!e._disable){var u,s,l,c,f=e.props,p=e.state,y=e.context,b=e.prevProps||f,v=e.prevState||p,g=e.prevContext||y,_=e.base,E=e.nextBase,w=_||E,O=e._component;if(_&&(e.props=b,e.state=v,e.context=g,2!==t&&e.shouldComponentUpdate&&e.shouldComponentUpdate(f,p,y)===!1?u=!0:e.componentWillUpdate&&e.componentWillUpdate(f,p,y),e.props=f,e.state=p,e.context=y),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!u){for(e.render&&(s=e.render(f,p,y)),e.getChildContext&&(y=r(o(y),e.getChildContext()));h(s);)s=d(s,y);var P,C,T=s&&s.nodeName;if(a(T)){var j=m(s);l=O,l&&l.constructor===T&&j.key==l.__key?x(l,j,1,y):(P=l,l=M(T,j,y),l.nextBase=l.nextBase||E,l._parentComponent=e,e._component=l,x(l,j,0,y),L(l,1,n,!0)),C=l.base}else c=w,P=O,P&&(c=e._component=null),(w||1===t)&&(c&&(c._component=null),C=k(c,s,y,n||!_,w&&w.parentNode,!0));if(w&&C!==w&&l!==O){var R=w.parentNode;R&&C!==R&&(R.replaceChild(C,w),P||(w._component=null,N(w)))}if(P&&A(P,C!==w),e.base=C,C&&!i){for(var D=e,U=e;U=U._parentComponent;)(D=U).base=C;C._component=D,C._componentConstructor=D.constructor}}!_||n?X.unshift(e):u||(e.componentDidUpdate&&e.componentDidUpdate(b,v,g),G.afterUpdate&&G.afterUpdate(e));var W,F=e._renderCallbacks;if(F)for(;W=F.pop();)W.call(e);Z||i||S()}}function R(e,t,n,r){for(var o=e&&e._component,i=o,a=e,u=o&&e._componentConstructor===t.nodeName,s=u,l=m(t);o&&!s&&(o=o._parentComponent);)s=o.constructor===t.nodeName;return o&&s&&(!r||o._component)?(x(o,l,3,n,r),e=o.base):(i&&!u&&(A(i,!0),e=a=null),o=M(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,a=null),x(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,N(a))),e}function A(e,t){G.beforeUnmount&&G.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;if(r)A(r,t);else if(n){n[H]&&n[H].ref&&n[H].ref(null),e.nextBase=n,t&&(v(n),j(e));for(var o;o=n.lastChild;)N(o,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function D(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}function U(e,t,n){return k(n,e,{},!1,t)}var G={},W=[],F=[],I={},Y=function(e){return I[e]||(I[e]=e.toLowerCase())},V="undefined"!=typeof Promise&&Promise.resolve(),B=V?function(e){V.then(e)}:setTimeout,z={},H="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",q={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},J={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},Q=[],K={},X=[],Z=0,$=!1,ee=!1,te={};r(D.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=c(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=o(n)),r(n,a(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(){L(this,2)},render:function(){}}),e.h=n,e.cloneElement=l,e.Component=D,e.render=U,e.rerender=p,e.options=G})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.NEW_NOTE="new-note",t.PAGE_REPLY="page-reply",t.ITEM_REPLY="item-reply",t.MESSAGE_SUCCESS="success",t.MESSAGE_ERROR="error"},function(e,t,n){"use strict";function r(e,t,n){console.warn("Using deprecated function: requests.post");var r;return r="string"==typeof t?t:o(t),fetch(e+"?"+r,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:n?JSON.stringify(n):null}).then(function(e){return e.text()})}function o(e){var t=[];for(var n in e)t.push(n+"="+e[n]);return t.join("&")}function i(e,t,n){return console.warn("Using deprecated function: requests.postMicropub"),fetch(e,{method:"POST",headers:{Authorization:"Bearer "+n},body:new FormData(t)}).then(function(e){return e.text()})}function a(e,t,n){return new Promise(function(r,o){fetch(e,{method:"POST",headers:{Authorization:"Bearer "+n},body:u(t)}).then(function(e){return e.status<200||e.status>=400?o(e.status):void r(e.text())})})}function u(e){var t=new FormData;for(var n in e)Array.isArray(e[n])?e[n].forEach(function(e,r){t.append(n,e)}):t.append(n,e[n]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.post=r,t.getParamString=o,t.postMicropub=i,t.postFormData=a,t.formDataFromObject=u},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=n(1),c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return(0,s.h)("div",{className:this.getClass()},this.props.children)}},{key:"getClass",value:function(){var e,t=(e={},r(e,l.MESSAGE_INFO,"message message--info"),r(e,l.MESSAGE_SUCCESS,"message message--success"),r(e,l.MESSAGE_ERROR,"message message--danger"),e);return t[this.props.type]||t[l.MESSAGE_INFO]}}]),t}(s.Component);t.default=c},function(e,t,n){"use strict";function r(e){e.preventDefault(),e.target.href&&chrome.tabs.create({url:e.target.href})}function o(){return new Promise(function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},function(n){if(!n.length)return t();var r=n[0].url;e(r.split("?")[0])})})}function i(e){return JSON.parse(JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0}),t.openLink=r,t.getCurrentTabUrl=o,t.clone=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=n(11),c=r(l),f=n(10),p=r(f),h=n(3),d=r(h),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayMessage=function(e){n.setState({currentView:"feedback",message:e})},n.handleLogout=function(){localStorage.clear(),n.setState({currentView:"login"})},n.isAuthenticated()?n.setState({currentView:"new-note"}):n.setState({currentView:"login"}),n}return a(t,e),u(t,[{key:"render",value:function(){switch(this.state.currentView){case"login":return(0,s.h)(c.default,null);case"feedback":return(0,s.h)(d.default,null,this.state.message);default:return(0,s.h)(p.default,{handleLogout:this.handleLogout,userFeedback:this.displayMessage})}}},{key:"isAuthenticated",value:function(){return!!localStorage.getItem("token")}}]),t}(s.Component);t.default=y},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=n(1),l=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.handleClick=function(e){e.preventDefault();var t={};t[s.NEW_NOTE]=s.PAGE_REPLY,t[s.PAGE_REPLY]=s.NEW_NOTE,t[s.ITEM_REPLY]=s.PAGE_REPLY,i.props.onChange(t[i.props.postType])},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){return(0,u.h)("button",{className:"button-link button-small",onClick:this.handleClick},this.getText())}},{key:"getText",value:function(){var e={};return e[s.NEW_NOTE]="Reply to current page",e[s.PAGE_REPLY]="Create new note",e[s.ITEM_REPLY]="Reply to current page",e[this.props.postType]}}]),t}(u.Component);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.handleClick=function(e){e.preventDefault(),i.props.onLogout()},a=n,o(i,a)}return i(t,e),a(t,[{key:"render",value:function(){return(0,u.h)("footer",{className:"footer"},(0,u.h)("div",null,"Authenticated to ",(0,u.h)("strong",null,this.props.domain)),(0,u.h)("button",{className:"button-link",onClick:this.handleClick},"Logout"))}}]),t}(u.Component);t.default=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=n(4),l=function(e){function t(){var e,n,i,a;r(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.onSubmit=function(e){e.preventDefault(),i.props.onSubmit(i.props.entry)},a=n,o(i,a)}return i(t,e),a(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.content.focus()},150)}},{key:"render",value:function(){var e=this;return(0,u.h)("form",{onSubmit:this.onSubmit},(0,u.h)("div",null,(0,u.h)("label",{for:"input-content"},"Content"),(0,u.h)("textarea",{id:"input-content",value:this.props.entry.content,onChange:this.updateField("content"),rows:"4",disabled:this.props.isDisabled,ref:function(t){e.content=t}})),(0,u.h)("div",null,(0,u.h)("label",{for:"input-tags"},"Tags"),(0,u.h)("input",{id:"input-tags",type:"text",placeholder:"e.g. web, personal",value:this.props.entry.tags.join(" "),onChange:this.updateFieldArray("tags"),disabled:this.props.isDisabled})),(0,u.h)("div",null,(0,u.h)("label",{for:"input-slug"},"Slug"),(0,u.h)("input",{id:"input-slug",type:"text",name:"mp-slug",value:this.props.entry["mp-slug"],onChange:this.updateField("mp-slug"),disabled:this.props.isDisabled})),(0,u.h)("button",{type:"submit",disabled:this.props.isDisabled},"Post"))}},{key:"updateField",value:function(e){var t=this;return function(n){n.preventDefault();var r=(0,s.clone)(t.props.entry);r[e]=n.target.value,t.props.updateEntry(r)}}},{key:"updateFieldArray",value:function(e){var t=this;return function(n){n.preventDefault();var r=(0,s.clone)(t.props.entry);r[e]=n.target.value.trim().split(" "),t.props.updateEntry(r)}}}]),t}(u.Component);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=n(1),l=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return(0,u.h)("header",{className:this.getClass()},(0,u.h)("div",null,this.getMessage(),this.props.url?(0,u.h)("div",{class:"metadata"},this.props.url):null),this.renderQuickActions())}},{key:"getClass",value:function(){var e={};return e[s.NEW_NOTE]="header header--new",e[s.PAGE_REPLY]="header header--page",e[s.ITEM_REPLY]="header header--item",e[this.props.postType]}},{key:"getMessage",value:function(){var e={};return e[s.NEW_NOTE]="New Note",e[s.PAGE_REPLY]="Reply to current page",e[s.ITEM_REPLY]="Reply to selected item",e[this.props.postType]}},{key:"renderQuickActions",value:function(){return this.props.url?(0,u.h)("ul",{className:"quick-actions"},(0,u.h)("li",null,(0,u.h)("button",{onClick:this.props.onRepost},"repost")),(0,u.h)("li",null,(0,u.h)("button",{onClick:this.props.onLike},"like"))):null}}]),t}(u.Component);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=n(9),c=r(l),f=n(3),p=r(f),h=n(6),d=r(h),y=n(8),b=r(y),m=n(7),v=r(m),g=n(2),_=n(4),E=n(1),w=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleLike=function(){n.state.url&&n.postEntry({h:"entry","like-of":n.state.url}).then(function(){var e=n.state.postType===E.ITEM_REPLY?"Item":"Page";n.flashSuccessMessage(e+" liked successfully")}).catch(function(e){console.error(e),n.flashErrorMessage("Error posting like")})},n.handleRepost=function(){n.state.url&&n.postEntry({h:"entry","repost-of":n.state.url}).then(function(){var e=n.state.postType===E.ITEM_REPLY?"Item":"Page";n.flashSuccessMessage(e+" reposted successfully")}).catch(function(e){console.error(e),n.flashErrorMessage("Error reposting")})},n.updateEntry=function(e){n.setState({entry:e})},n.handleSubmit=function(e){n.state.postType!==E.NEW_NOTE&&(e["in-reply-to"]=n.state.url),n.postEntry(e).then(function(e){console.log(e);var t=n.state.postType===E.NEW_NOTE?"Note":"Reply";n.flashSuccessMessage(t+" posted successfully")}).catch(function(e){n.flashErrorMessage("Error posting Note")})},n.changeView=function(e){e==E.PAGE_REPLY?(0,_.getCurrentTabUrl)().then(function(t){n.setState({url:t,postType:e})}):n.setState({url:null,postType:e})},n.state={postType:E.NEW_NOTE,url:null,userDomain:localStorage.getItem("domain"),entry:{h:"entry",content:"",tags:[],"mp-slug":""},isDisabled:!1},n}return a(t,e),u(t,[{key:"render",value:function(){return(0,s.h)("div",null,(0,s.h)(c.default,{postType:this.state.postType,url:this.state.url,onLike:this.handleLike,onRepost:this.handleRepost}),(0,s.h)("div",{className:"container"},(0,s.h)("div",{className:"text-right"},(0,s.h)(d.default,{postType:this.state.postType,onChange:this.changeView})),(0,s.h)(b.default,{entry:this.state.entry,updateEntry:this.updateEntry,onSubmit:this.handleSubmit,isDisabled:this.state.isDisabled}),this.state.errorMessage?(0,s.h)(p.default,{type:E.MESSAGE_ERROR},this.state.errorMessage):null),(0,s.h)(v.default,{domain:this.state.userDomain,onLogout:this.props.handleLogout}))}},{key:"flashSuccessMessage",value:function(e){this.props.userFeedback(e,E.MESSAGE_SUCCESS),setTimeout(function(){window.close()},4e3)}},{key:"flashErrorMessage",value:function(e){var t=this;this.setState({errorMessage:e,isDisabled:!1}),setTimeout(function(){t.state.errorMessage===e&&t.setState({errorMessage:!1})},4e3)}},{key:"postEntry",value:function(e){var t=localStorage.getItem("micropubEndpoint"),n=localStorage.getItem("token");return this.setState({isDisabled:!0}),(0,g.postFormData)(t,e,n)}}]),t}(s.Component);t.default=w},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=n(3),c=r(l),f=n(4),p=n(12),h=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handleChange=function(e){r.setState({domain:e.target.value,hasErrors:!1})},r.handleSubmit=function(e){e.preventDefault(),r.setState({isLoading:!0}),(0,p.fetchSiteMetadata)(r.state.domain).then(function(e){if(!e.authEndpoint||!e.tokenEndpoint||!e.micropub)return r.setState({hasErrors:!0,errorMessage:"Missing micropub data on "+r.state.domain+". Please ensure the following links are present: authorization_endpoint, token_endpoint, micropub",isLoading:!1});var t=e.authEndpoint+"?"+r.getFields(r.state.domain);chrome.runtime.sendMessage({action:"begin-auth",payload:{authUrl:t,domain:r.state.domain,metadata:e}})}).catch(function(e){r.setState({hasErrors:!0,errorMessage:"Error fetching page: "+r.state.domain,isLoading:!1})})},a=n,i(r,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.input.focus()},150)}},{key:"render",value:function(){var e=this;return(0,s.h)("form",{class:"container",method:"GET",onSubmit:this.handleSubmit},(0,s.h)("p",null,"To use Omnibear, sign in with your domain. Your website will need to support"," ",(0,s.h)("a",{href:"http://indieweb.org/micropub",onClick:f.openLink},"Micropub")," ","for creating new posts."),(0,s.h)("div",{class:"fields-inline"},(0,s.h)("input",{type:"text",name:"me",placeholder:"https://example.com",className:"fields-inline__fill",value:this.state.domain,onKeyUp:this.handleChange,ref:function(t){return e.input=t}}),(0,s.h)("button",{type:"submit",disabled:this.state.isLoading},"Sign in")),this.state.hasErrors?(0,s.h)(c.default,{type:"error"},this.state.errorMessage||"Error"):null)}},{key:"getFields",value:function(e){return["redirect_uri=http://omnibear.com/auth/success/","client_id=http://omnibear.com","response_type=code","scope=create","me="+e].join("&")}}]),t}(s.Component);t.default=h},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=e.querySelector('link[rel="'+t+'"]');return n?n.href:null}function i(e){return fetch(e).then(function(e){return e.text()}).then(function(e){var t=document.createElement("html");return t.innerHTML=e,{authEndpoint:o(t,"authorization_endpoint"),tokenEndpoint:o(t,"token_endpoint"),micropub:o(t,"micropub")}})}var a;e.exports=(a={getLinkValue:o},r(a,"getLinkValue",o),r(a,"fetchSiteMetadata",i),a)},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=n(5),a=r(i);document.addEventListener("DOMContentLoaded",function(){(0,o.render)((0,o.h)(a.default,null),document.body)})}]);
//# sourceMappingURL=index.js.map