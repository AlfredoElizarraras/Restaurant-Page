!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=10)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=t[u]||0,d="".concat(u," ").concat(s);t[u]=s+1;var l=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:d,updater:g(f,e),references:1}),r.push(d)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function f(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,b=0;function g(n,e){var t,r,o;if(e.singleton){var i=b++;t=p||(p=s(e)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=s(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=u(n,e),s=0;s<t.length;s++){var d=c(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=i}}}},function(n,e,t){"use strict";e.a=t.p+"5d8ee813ebadd55cd89b9fc9513cc1bd.jpg"},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){var r=t(1),o=t(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,".navbar {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  height: 5rem;\n  width: 100%;\n  background-color: #c43c00;\n  color: #fff;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.navbar__tab-container {\n  display: flex;\n  padding-right: 1.5rem;\n}\n\n.navbar__tab-item {\n  border: none;\n  font-size: 0.898rem;\n  margin-right: 1.5rem;\n  height: 3rem;\n  background-color: #c43c00;\n  color: #cfd8dc;\n  text-transform: uppercase;\n}\n\n.navbar__tab-item:hover {\n  border-bottom: 1px solid #ff6d00;\n  color: #fff;\n}\n",""]),e.default=o},function(n,e,t){var r=t(1),o=t(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r)()(!1);o.push([n.i,".about-us {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  height: 100%;\n}\n\n.about-us__page {\n  display: flex;\n  color: #000000;\n  background-color: #ff6d00;\n  width: 90%;\n  height: 80%;\n  border-top-right-radius: 5em;\n  border-bottom-right-radius: 5em;\n}\n\n.about-us__info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 3rem;\n}\n\n.about-us__title {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n}\n\n#about-us-image {\n  width: 40%;\n  height: 100%;\n}\n",""]),e.default=o},function(n,e,t){var r=t(1),o=t(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(3),a=t.n(i),c=t(2),u=o()(!1),s=a()(c.a);u.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: start;\n}\n\n.d-none {\n  display: none;\n}\n\n.home {\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.home__image {\n  background-image: url("+s+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: -6;\n}\n\n.home__title {\n  color: #fff;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n}\n\n.home__button {\n  border: none;\n  font-size: 0.895rem;\n  background-color: #ff9100;\n  padding: 1rem;\n  border-radius: 5em;\n  color: #000000;\n}\n\n.home__button:hover {\n cursor: context-menu;\n}",""]),e.default=u},function(n,e,t){"use strict";t.r(e);t(4);var r,o,i,a,c=(o=function(n){var e="btn-".concat(n.toLowerCase().replace(" ","-"));return r.push(e),'<button id="'.concat(e,'" class="navbar__tab-item">\n    ').concat(n,"\n    </button>")},i=function(n){return""===n||null==n},a=function(){var n=document.createElement("div");return n.classList.add("navbar__tab-container"),n},{renderNavBar:function(n){var e,t,r;document.getElementById(n).appendChild(function(n,e){if(!i(n)||!i(e))return n.appendChild(e),n}(((r=document.createElement("nav")).id="nav",r.classList.add("navbar"),r),(e=a(),t=function(n){if(i(n))return"";var e="";if(Array.isArray(n))for(var t=0;t<n.length;t+=1){var r=n[t];""===e?e=o(r):e+=o(r)}else e=o(n);return e}(["home","about us","Menu"]),i(e)||i(t)?a():(e.innerHTML=t,e))))},tabButtons:r=[]}),u=(t(6),{renderAboutUsPage:function(n){document.getElementById(n).innerHTML+='\n    <div id="aboutUs" class="about-us">\n    <article class="about-us__page">\n      <img id="about-us-image" src="../src/images/about-us.jpg"/>\n      \n      <div class="about-us__info">\n        <h2 class="about-us__title">About us</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.</p>\n      </div>\n    </article>\n  </div>\n    '}});t(8),t(2);window.onload=function(){document.getElementById("content").classList.add("content"),c.renderNavBar("content"),u.renderAboutUsPage("content"),document.getElementById("aboutUs").classList.add("d-none"),document.getElementById("btn-about-us").addEventListener("click",(function(){var n;n="aboutUs",document.getElementById(n).classList.remove("d-none")}))}}]);