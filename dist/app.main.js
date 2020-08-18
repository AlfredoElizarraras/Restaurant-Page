/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Menu/menuStyles.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Menu/menuStyles.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Take as an example the modal tutorial in w3schools\\n   https://www.w3schools.com/howto/howto_css_modals.asp\\n*/\\n\\n/* #region Modal */\\n.modal {\\n  position: fixed;\\n  z-index: 1;\\n  margin-top: 5rem;\\n  padding-top: 2rem;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  top: 0;\\n  width: 100%; \\n  height: 100%; \\n  background-color: rgb(0, 0, 0); \\n  background-color: rgba(0, 0, 0, 0.4); \\n}\\n\\n.modal-content {\\n  position: relative;\\n  background-color: #fefefe;\\n  margin: auto;\\n  padding: 0;\\n  border: 1px solid #888;\\n  width: 70%;\\n  height: 70%;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  -webkit-animation-name: animatetop;\\n  -webkit-animation-duration: 0.4s;\\n  animation-name: animatetop;\\n  animation-duration: 0.4s;\\n  overflow-y: scroll;\\n}\\n\\n.close {\\n  color: white;\\n  float: right;\\n  font-size: 28px;\\n  font-weight: bold;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: #000;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.modal-header {\\n  padding: 2px 16px;\\n  background-color: #c56200;\\n  color: #000;\\n}\\n\\n.modal-body {\\n  display: flex;\\n  align-items: center;\\n  padding: 1rem;\\n}\\n\\n.modal-body__grade {\\n  align-self: flex-end;\\n  justify-self: flex-end;\\n}\\n\\n.modal-body__info {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  flex-grow: 1;\\n}\\n\\n.modal-body__image {\\n  max-width: 30%;\\n  max-height: 35%;\\n  margin-right: 2rem;\\n}\\n/* #endregion Modal */\\n\\n/* #region Menu Cards */\\n.menu-container {\\n  display: flex;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  padding-top: 2rem;\\n  background-color: #ff6d00;\\n}\\n\\n.menu__card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  max-width: 20%;\\n  max-height: 52%;\\n  margin-right: 1rem;\\n  margin-bottom: 1rem;\\n  cursor: pointer;\\n}\\n\\n.menu__card-image {\\n  width: 100%;\\n  max-height: 200px;\\n}\\n\\n.menu__card-grade {\\n  align-self: flex-end;\\n}\\n\\n.menu__card-info {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  border: 0.5px solid lightgray;\\n  border-bottom-right-radius: 0.5em;\\n  border-bottom-left-radius: 0.5em;\\n  padding: 1rem;\\n  padding-top: 0;\\n  background-color: #fff;\\n}\\n\\n.menu__card-info>p {\\n  display: none;\\n}\\n\\n.menu__card:hover {\\n  -webkit-box-shadow: 9px 15px 9px -7px rgba(0, 0, 71, 0.5);\\n  -moz-box-shadow: 9px 15px 9px -7px rgba(0, 0, 71, 0.5);\\n  box-shadow: 9px 15px 9px -7px rgba(0, 0, 71, 0.9);\\n}\\n/* #endregion Menu Cards */\\n\\n/* #region Animations */\\n@-webkit-keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0;\\n  }\\n  to {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes animatetop {\\n  from {\\n    top: -300px;\\n    opacity: 0;\\n  }\\n  to {\\n    top: 0;\\n    opacity: 1;\\n  }\\n}\\n/* #endregion Animations */\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/Menu/menuStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".about-us {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background: #fff;\\n}\\n\\n.about-us__page {\\n  display: flex;\\n  color: #000000;\\n  background-color: #ff6d00;\\n  width: 90%;\\n  height: 80%;\\n  border-top-right-radius: 5em;\\n  border-bottom-right-radius: 5em;\\n}\\n\\n.about-us__info {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 3rem;\\n}\\n\\n.about-us__title {\\n  font-size: 2.5rem;\\n  margin-bottom: 2rem;\\n}\\n\\n#about-us-image {\\n  width: 40%;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/about-us/aboutUsStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".home {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n\\n.home__info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-left: 3.7rem;\\n}\\n\\n.home__image {\\n  height: 100%;\\n  width: 100%;\\n  position: fixed;\\n  z-index: -6;\\n}\\n\\n.home__title {\\n  color: #fff;\\n  font-size: 3rem;\\n  margin-bottom: 3rem;\\n}\\n\\n.home__button {\\n  border: none;\\n  font-size: 1.2rem;\\n  background-color: #ff6d00;\\n  padding: 1rem;\\n  border-radius: 5em;\\n  color: #000000;\\n}\\n\\n.home__button:hover {\\n cursor: pointer;\\n}\\n\\n.home__button:active {\\n  background-color: #c43c00;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/home/homeStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/indexStyles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/indexStyles.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.content {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n}\\n\\n.d-none {\\n  display: none !important;\\n}\\n\\n.page {\\n  width: 100%;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/indexStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navbar/navBarStyles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navbar/navBarStyles.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar {\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  height: 5rem;\\n  width: 100%;\\n  background-color: #c43c00;\\n  color: #fff;\\n  padding-top: 1.5rem;\\n  padding-bottom: 1.5rem;\\n}\\n\\n.navbar__tab-container {\\n  display: flex;\\n  padding-right: 1.5rem;\\n}\\n\\n.navbar__tab-item {\\n  border: none;\\n  font-size: 0.898rem;\\n  margin-right: 1.5rem;\\n  height: 3rem;\\n  background-color: #c43c00;\\n  color: #cfd8dc;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n}\\n\\n.navbar__tab-item:hover {\\n  border-bottom: 1px solid #ff6d00;\\n  color: #fff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/navbar/navBarStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Menu/Menu.js":
/*!**************************!*\
  !*** ./src/Menu/Menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuStyles.css */ \"./src/Menu/menuStyles.css\");\n/* harmony import */ var _menuStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menuStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_dish_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dish_1.jpg */ \"./src/images/dish_1.jpg\");\n/* harmony import */ var _images_dish_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/dish_2.jpg */ \"./src/images/dish_2.jpg\");\n/* harmony import */ var _images_dish_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/dish_3.jpg */ \"./src/images/dish_3.jpg\");\n/* harmony import */ var _images_dish_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/dish_4.jpg */ \"./src/images/dish_4.jpg\");\n\n\n\n\n\n\nvar MenuPage = function () {\n  var createMenuPageMarkUp = function createMenuPageMarkUp() {\n    return \"\\n  <div id=\\\"menuId\\\" class=\\\"menu-container page d-none\\\">\\n  <article id=\\\"menuCard1\\\" class=\\\"menu__card\\\">\\n    <img\\n      id=\\\"menuCardImage1\\\"\\n      class=\\\"menu__card-image\\\"\\n    />\\n\\n    <div class=\\\"menu__card-info\\\">\\n      <h3 id=\\\"menuCardHeader1\\\">Dish 1</h3>\\n\\n      <p id=\\\"menuCardDescription1\\\">\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,\\n        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati\\n        harum facere similique nesciunt reprehenderit mollitia expedita\\n        ullam. A tempore alias quasi!\\n      </p>\\n\\n      <span id=\\\"menuCardGrade1\\\" class=\\\"menu__card-grade\\\">\\n        4.5 / 5 \\u2B50\\n      </span>\\n    </div>\\n  </article>\\n\\n  <article id=\\\"menuCard2\\\" class=\\\"menu__card\\\">\\n    <img\\n      id=\\\"menuCardImage2\\\"\\n      class=\\\"menu__card-image\\\"\\n    />\\n\\n    <div class=\\\"menu__card-info\\\">\\n      <h3 id=\\\"menuCardHeader2\\\">Dish 2</h3>\\n\\n      <p id=\\\"menuCardDescription2\\\">\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,\\n        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati\\n        harum facere similique nesciunt reprehenderit mollitia expedita\\n        ullam. A tempore alias quasi!\\n      </p>\\n\\n      <span id=\\\"menuCardGrade2\\\" class=\\\"menu__card-grade\\\">\\n        2.5 / 5 \\u2B50\\n      </span>\\n    </div>\\n  </article>\\n\\n  <article id=\\\"menuCard3\\\" class=\\\"menu__card\\\">\\n    <img\\n      id=\\\"menuCardImage3\\\"\\n      class=\\\"menu__card-image\\\"\\n    />\\n\\n    <div class=\\\"menu__card-info\\\">\\n      <h3 id=\\\"menuCardHeader3\\\">Dish 3</h3>\\n\\n      <p id=\\\"menuCardDescription3\\\">\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,\\n        repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati\\n        harum facere similique nesciunt reprehenderit mollitia expedita\\n        ullam. A tempore alias quasi!\\n      </p>\\n\\n      <span\\n        id=\\\"menuCardGrade3\\\"\\n        class=\\\"menu__card-grade\\\"\\n        aria-valuetext=\\\"4.5\\\"\\n      >\\n        4.0 / 5 \\u2B50\\n      </span>\\n    </div>\\n  </article>\\n\\n  <article id=\\\"menuCard4\\\" class=\\\"menu__card\\\">\\n  <img\\n    id=\\\"menuCardImage4\\\"\\n    class=\\\"menu__card-image\\\"\\n  />\\n\\n  <div class=\\\"menu__card-info\\\">\\n    <h3 id=\\\"menuCardHeader4\\\">Dish 4</h3>\\n\\n    <p id=\\\"menuCardDescription4\\\">\\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quod,\\n      repudiandae nisi autem aperiam vitae quaerat voluptatem obcaecati\\n      harum facere similique nesciunt reprehenderit mollitia expedita\\n      ullam. A tempore alias quasi!\\n    </p>\\n\\n    <span id=\\\"menuCardGrade4\\\" class=\\\"menu__card-grade\\\">\\n      3.5 / 5 \\u2B50\\n    </span>\\n  </div>\\n</article>\\n</div>\\n\\n\\n  <div id=\\\"modalDishInfo\\\" class=\\\"modal d-none\\\">\\n  <div class=\\\"modal-content\\\">\\n    <div class=\\\"modal-header\\\">\\n      <span id=\\\"btn-close\\\" class=\\\"close\\\">&times;</span>\\n      <h2 id=\\\"menuModalHeader\\\">Modal Header</h2>\\n    </div>\\n    <div class=\\\"modal-body\\\">\\n      <img id=\\\"menuModalImage\\\" class=\\\"modal-body__image\\\" />\\n      <div class=\\\"modal-body__info\\\">\\n        <p id=\\\"menuModalDescription\\\">Modal description</p>\\n        <span id=\\\"menuModalGrade\\\" class=\\\"modal-body__grade\\\"\\n          >Modal grade</span\\n        >\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n  \";\n  };\n\n  var addImages = function addImages() {\n    document.getElementById('menuCardImage1').src = _images_dish_1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    document.getElementById('menuCardImage2').src = _images_dish_2_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    document.getElementById('menuCardImage3').src = _images_dish_3_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    document.getElementById('menuCardImage4').src = _images_dish_4_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  };\n\n  var renderMenuPage = function renderMenuPage(parent) {\n    document.getElementById(parent).innerHTML += createMenuPageMarkUp();\n    addImages();\n  };\n\n  return {\n    renderMenuPage: renderMenuPage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPage);\n\n//# sourceURL=webpack:///./src/Menu/Menu.js?");

/***/ }),

/***/ "./src/Menu/menuStyles.css":
/*!*********************************!*\
  !*** ./src/Menu/menuStyles.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./menuStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Menu/menuStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/Menu/menuStyles.css?");

/***/ }),

/***/ "./src/about-us/aboutUs.js":
/*!*********************************!*\
  !*** ./src/about-us/aboutUs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUsStyles.css */ \"./src/about-us/aboutUsStyles.css\");\n/* harmony import */ var _aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_about_us_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/about-us.jpg */ \"./src/images/about-us.jpg\");\n\n\n\nvar AboutUsPage = function () {\n  var createAboutUsPageMarkUp = function createAboutUsPageMarkUp() {\n    return \"\\n    <div id=\\\"aboutUsId\\\" class=\\\"about-us page d-none\\\">\\n    <article class=\\\"about-us__page\\\">\\n      <img id=\\\"about-us-image\\\"/>\\n      \\n      <div class=\\\"about-us__info\\\">\\n        <h2 class=\\\"about-us__title\\\">About us</h2>\\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.</p>\\n      </div>\\n    </article>\\n  </div>\\n    \";\n  };\n\n  var addImage = function addImage() {\n    document.getElementById('about-us-image').src = _images_about_us_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  };\n\n  var renderAboutUsPage = function renderAboutUsPage(parent) {\n    document.getElementById(parent).innerHTML += createAboutUsPageMarkUp();\n    addImage();\n  };\n\n  return {\n    renderAboutUsPage: renderAboutUsPage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUsPage);\n\n//# sourceURL=webpack:///./src/about-us/aboutUs.js?");

/***/ }),

/***/ "./src/about-us/aboutUsStyles.css":
/*!****************************************!*\
  !*** ./src/about-us/aboutUsStyles.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./aboutUsStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/about-us/aboutUsStyles.css?");

/***/ }),

/***/ "./src/events/eventModule.js":
/*!***********************************!*\
  !*** ./src/events/eventModule.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/events/helpers.js\");\n\n\nvar EventModule = function () {\n  var addTabButtonsClickEvent = function addTabButtonsClickEvent() {\n    document.getElementById('btn-about-us').addEventListener('click', function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElementsByClass\"]('.page');\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"]('aboutUsId');\n    });\n    document.getElementById('btn-home').addEventListener('click', function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElementsByClass\"]('.page');\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"]('homeId');\n    });\n    document.getElementById('btn-menu').addEventListener('click', function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElementsByClass\"]('.page');\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"]('menuId');\n    });\n    document.getElementById('btn-home-menu').addEventListener('click', function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElementsByClass\"]('.page');\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"]('menuId');\n    });\n  };\n\n  var addMenuCardsClickEvent = function addMenuCardsClickEvent() {\n    document.querySelectorAll('.menu__card').forEach(function (item) {\n      item.addEventListener('click', function () {\n        var currentCard = window.event.currentTarget;\n        document.getElementById('menuModalImage').src = document.getElementById(currentCard.id.replace('menuCard', 'menuCardImage')).src;\n        document.getElementById('menuModalHeader').innerHTML = document.getElementById(currentCard.id.replace('menuCard', 'menuCardHeader')).innerHTML;\n        document.getElementById('menuModalDescription').innerHTML = document.getElementById(currentCard.id.replace('menuCard', 'menuCardDescription')).innerHTML;\n        document.getElementById('menuModalGrade').innerHTML = document.getElementById(currentCard.id.replace('menuCard', 'menuCardGrade')).innerHTML;\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElementsByClass\"]('.menu__card');\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"showElement\"]('modalDishInfo');\n      });\n    });\n  };\n\n  var addModalDishInfoEvents = function addModalDishInfoEvents() {\n    document.getElementById('btn-close').onclick = function () {\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"]('modalDishInfo');\n      _helpers__WEBPACK_IMPORTED_MODULE_0__[\"displayElementsByClass\"]('.menu__card');\n    };\n\n    window.onclick = function (event) {\n      var modal = document.getElementById('modalDishInfo');\n\n      if (event.target === modal) {\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"hideElement\"]('modalDishInfo');\n        _helpers__WEBPACK_IMPORTED_MODULE_0__[\"displayElementsByClass\"]('.menu__card');\n      }\n    };\n  };\n\n  var addEvents = function addEvents() {\n    addTabButtonsClickEvent();\n    addMenuCardsClickEvent();\n    addModalDishInfoEvents();\n  };\n\n  return {\n    addEvents: addEvents\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventModule);\n\n//# sourceURL=webpack:///./src/events/eventModule.js?");

/***/ }),

/***/ "./src/events/helpers.js":
/*!*******************************!*\
  !*** ./src/events/helpers.js ***!
  \*******************************/
/*! exports provided: showElement, hideElement, displayElementsByClass, hideElementsByClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showElement\", function() { return showElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElement\", function() { return hideElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayElementsByClass\", function() { return displayElementsByClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElementsByClass\", function() { return hideElementsByClass; });\nvar showElement = function showElement(pageId) {\n  return document.getElementById(pageId).classList.remove('d-none');\n};\nvar hideElement = function hideElement(elementId) {\n  return document.getElementById(elementId).classList.add('d-none');\n};\nvar displayElementsByClass = function displayElementsByClass(elementsClass) {\n  document.querySelectorAll(elementsClass).forEach(function (item) {\n    showElement(item.id);\n  });\n};\nvar hideElementsByClass = function hideElementsByClass(elementsClass) {\n  document.querySelectorAll(elementsClass).forEach(function (item) {\n    hideElement(item.id);\n  });\n};\n\n//# sourceURL=webpack:///./src/events/helpers.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeStyles.css */ \"./src/home/homeStyles.css\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homeStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/home.jpg */ \"./src/images/home.jpg\");\n\n\n\nvar HomePage = function () {\n  var createHomePageMarkUp = function createHomePageMarkUp() {\n    return \"\\n  <div id=\\\"homeId\\\" class=\\\"home page\\\">\\n  <img id=\\\"homeImage\\\" class=\\\"home__image\\\"/>\\n  <div class=\\\"home__info\\\">\\n    <h2 class=\\\"home__title\\\">Restaurant Page</h2>\\n    <button id=\\\"btn-home-menu\\\" class=\\\"home__button\\\">START EATING</button>\\n  </div>\\n</div>\\n  \";\n  };\n\n  var addImage = function addImage() {\n    document.getElementById('homeImage').src = _images_home_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  };\n\n  var renderHomePage = function renderHomePage(parent) {\n    document.getElementById(parent).innerHTML += createHomePageMarkUp();\n    addImage();\n  };\n\n  return {\n    renderHomePage: renderHomePage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/home/home.js?");

/***/ }),

/***/ "./src/home/homeStyles.css":
/*!*********************************!*\
  !*** ./src/home/homeStyles.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./homeStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/home/homeStyles.css?");

/***/ }),

/***/ "./src/images/about-us.jpg":
/*!*********************************!*\
  !*** ./src/images/about-us.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9ece4d1d309f04b1ca6fa3403eb90b5c.jpg\");\n\n//# sourceURL=webpack:///./src/images/about-us.jpg?");

/***/ }),

/***/ "./src/images/dish_1.jpg":
/*!*******************************!*\
  !*** ./src/images/dish_1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"71eddf53ce3c81063a1e6be139b02ace.jpg\");\n\n//# sourceURL=webpack:///./src/images/dish_1.jpg?");

/***/ }),

/***/ "./src/images/dish_2.jpg":
/*!*******************************!*\
  !*** ./src/images/dish_2.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"665ad42884f8f2fd53efc26432fbf706.jpg\");\n\n//# sourceURL=webpack:///./src/images/dish_2.jpg?");

/***/ }),

/***/ "./src/images/dish_3.jpg":
/*!*******************************!*\
  !*** ./src/images/dish_3.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"29567f5437e8ad943698642faf0db59f.jpg\");\n\n//# sourceURL=webpack:///./src/images/dish_3.jpg?");

/***/ }),

/***/ "./src/images/dish_4.jpg":
/*!*******************************!*\
  !*** ./src/images/dish_4.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4c30b2cf00d90cbba3c98891630671a7.jpg\");\n\n//# sourceURL=webpack:///./src/images/dish_4.jpg?");

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5d8ee813ebadd55cd89b9fc9513cc1bd.jpg\");\n\n//# sourceURL=webpack:///./src/images/home.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_navbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbarComponent */ \"./src/navbar/navbarComponent.js\");\n/* harmony import */ var _about_us_aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us/aboutUs */ \"./src/about-us/aboutUs.js\");\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu/Menu */ \"./src/Menu/Menu.js\");\n/* harmony import */ var _events_eventModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/eventModule */ \"./src/events/eventModule.js\");\n/* harmony import */ var _indexStyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indexStyles.css */ \"./src/indexStyles.css\");\n/* harmony import */ var _indexStyles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_indexStyles_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nwindow.onload = function () {\n  var mainDiv = document.createElement('div');\n  mainDiv.id = 'content';\n  mainDiv.classList.add('content');\n  document.querySelector('body').appendChild(mainDiv);\n  _navbar_navbarComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderNavBar('content');\n  _about_us_aboutUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderAboutUsPage('content');\n  _home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderHomePage('content');\n  _Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].renderMenuPage('content');\n  _events_eventModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addEvents();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/indexStyles.css":
/*!*****************************!*\
  !*** ./src/indexStyles.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./indexStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/indexStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/indexStyles.css?");

/***/ }),

/***/ "./src/navbar/navBarStyles.css":
/*!*************************************!*\
  !*** ./src/navbar/navBarStyles.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./navBarStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/navbar/navBarStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/navbar/navBarStyles.css?");

/***/ }),

/***/ "./src/navbar/navbarComponent.js":
/*!***************************************!*\
  !*** ./src/navbar/navbarComponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBarStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBarStyles.css */ \"./src/navbar/navBarStyles.css\");\n/* harmony import */ var _navBarStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navBarStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NavBarComponent = function () {\n  var tabButtons = [];\n\n  var createTabMarkUp = function createTabMarkUp(caption) {\n    var captionId = \"btn-\".concat(caption.toLowerCase().replace(' ', '-'));\n    tabButtons.push(captionId);\n    return \"<button id=\\\"\".concat(captionId, \"\\\" class=\\\"navbar__tab-item\\\">\\n    \").concat(caption, \"\\n    </button>\");\n  };\n\n  var validObjectHelper = function validObjectHelper(object) {\n    return object === '' || object === null || object === undefined;\n  };\n\n  var createNavSection = function createNavSection() {\n    var navSection = document.createElement('div');\n    navSection.classList.add('navbar__tab-container');\n    return navSection;\n  };\n\n  var addTabLinksToNavSection = function addTabLinksToNavSection(nav, childs) {\n    if (validObjectHelper(nav) || validObjectHelper(childs)) return createNavSection();\n    nav.innerHTML = childs;\n    return nav;\n  };\n\n  var createTabLinks = function createTabLinks(tabCaptions) {\n    if (validObjectHelper(tabCaptions)) return '';\n    var returnTemplate = '';\n\n    if (Array.isArray(tabCaptions)) {\n      for (var tabCaption = 0; tabCaption < tabCaptions.length; tabCaption += 1) {\n        var element = tabCaptions[tabCaption];\n\n        if (returnTemplate === '') {\n          returnTemplate = createTabMarkUp(element);\n        } else {\n          returnTemplate += createTabMarkUp(element);\n        }\n      }\n    } else {\n      returnTemplate = createTabMarkUp(tabCaptions);\n    }\n\n    return returnTemplate;\n  };\n\n  var createNavBar = function createNavBar() {\n    var navbar = document.createElement('nav');\n    navbar.id = 'nav';\n    navbar.classList.add('navbar');\n    return navbar;\n  };\n\n  var addNavSectionsToNavBar = function addNavSectionsToNavBar(nav, navSection) {\n    if (validObjectHelper(nav) && validObjectHelper(navSection)) return undefined;\n    nav.appendChild(navSection);\n    return nav;\n  };\n\n  var renderNavBar = function renderNavBar(parent) {\n    var tabsLinksCaption = ['home', 'about us', 'Menu'];\n    document.getElementById(parent).appendChild(addNavSectionsToNavBar(createNavBar(), addTabLinksToNavSection(createNavSection(), createTabLinks(tabsLinksCaption))));\n  };\n\n  return {\n    renderNavBar: renderNavBar,\n    tabButtons: tabButtons\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBarComponent);\n\n//# sourceURL=webpack:///./src/navbar/navbarComponent.js?");

/***/ })

/******/ });