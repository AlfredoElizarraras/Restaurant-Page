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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".about-us {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background: #fff;\\n  height: 100%;\\n}\\n\\n.about-us__page {\\n  display: flex;\\n  color: #000000;\\n  background-color: #ff6d00;\\n  width: 90%;\\n  height: 80%;\\n  border-top-right-radius: 5em;\\n  border-bottom-right-radius: 5em;\\n}\\n\\n.about-us__info {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  padding: 3rem;\\n}\\n\\n.about-us__title {\\n  font-size: 2.5rem;\\n  margin-bottom: 2rem;\\n}\\n\\n#about-us-image {\\n  width: 40%;\\n  height: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/about-us/aboutUsStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".home {\\n  height: 100%;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n\\n.home__info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-left: 3.7rem;\\n}\\n\\n.home__image {\\n  height: 100%;\\n  width: 100%;\\n  position: fixed;\\n  z-index: -6;\\n}\\n\\n.home__title {\\n  color: #fff;\\n  font-size: 3rem;\\n  margin-bottom: 3rem;\\n}\\n\\n.home__button {\\n  border: none;\\n  font-size: 1.2rem;\\n  background-color: #ff6d00;\\n  padding: 1rem;\\n  border-radius: 5em;\\n  color: #000000;\\n}\\n\\n.home__button:hover {\\n cursor: pointer;\\n}\\n\\n.home__button:active {\\n  background-color: #c43c00;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/home/homeStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/indexStyles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/indexStyles.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\n.content {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n}\\n\\n.d-none {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/indexStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/navbar/navBarStyles.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/navbar/navBarStyles.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".navbar {\\n  display: flex;\\n  justify-content: end;\\n  align-items: center;\\n  height: 5rem;\\n  width: 100%;\\n  background-color: #c43c00;\\n  color: #fff;\\n  padding-top: 1.5rem;\\n  padding-bottom: 1.5rem;\\n}\\n\\n.navbar__tab-container {\\n  display: flex;\\n  padding-right: 1.5rem;\\n}\\n\\n.navbar__tab-item {\\n  border: none;\\n  font-size: 0.898rem;\\n  margin-right: 1.5rem;\\n  height: 3rem;\\n  background-color: #c43c00;\\n  color: #cfd8dc;\\n  text-transform: uppercase;\\n}\\n\\n.navbar__tab-item:hover {\\n  border-bottom: 1px solid #ff6d00;\\n  color: #fff;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/navbar/navBarStyles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/about-us/aboutUs.js":
/*!*********************************!*\
  !*** ./src/about-us/aboutUs.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUsStyles.css */ \"./src/about-us/aboutUsStyles.css\");\n/* harmony import */ var _aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aboutUsStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar AboutUsPage = function () {\n  var createAboutUsPageMarkUp = function createAboutUsPageMarkUp() {\n    return \"\\n    <div id=\\\"aboutUs\\\" class=\\\"about-us d-none\\\">\\n    <article class=\\\"about-us__page\\\">\\n      <img id=\\\"about-us-image\\\" src=\\\"../src/images/about-us.jpg\\\"/>\\n      \\n      <div class=\\\"about-us__info\\\">\\n        <h2 class=\\\"about-us__title\\\">About us</h2>\\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aliquid qui sint placeat tempora aperiam ducimus, odit cum omnis expedita minus accusantium! Debitis fugiat numquam officia eveniet nostrum ut et.</p>\\n      </div>\\n    </article>\\n  </div>\\n    \";\n  };\n\n  var renderAboutUsPage = function renderAboutUsPage(parent) {\n    document.getElementById(parent).innerHTML += createAboutUsPageMarkUp();\n  };\n\n  return {\n    renderAboutUsPage: renderAboutUsPage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutUsPage);\n\n//# sourceURL=webpack:///./src/about-us/aboutUs.js?");

/***/ }),

/***/ "./src/about-us/aboutUsStyles.css":
/*!****************************************!*\
  !*** ./src/about-us/aboutUsStyles.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./aboutUsStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/about-us/aboutUsStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/about-us/aboutUsStyles.css?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeStyles.css */ \"./src/home/homeStyles.css\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homeStyles_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar HomePage = function () {\n  var createHomePageMarkUp = function createHomePageMarkUp() {\n    return \"\\n  <div id=\\\"homeId\\\" class=\\\"home d-none\\\">\\n  <img class=\\\"home__image\\\" src=\\\"../src/images/home.jpg\\\"/>\\n  <div class=\\\"home__info\\\">\\n    <h2 class=\\\"home__title\\\">Restaurant Page</h2>\\n    <button class=\\\"home__button\\\">Start eating</button>\\n  </div>\\n</div>\\n  \";\n  };\n\n  var renderHomePage = function renderHomePage(parent) {\n    document.getElementById(parent).innerHTML += createHomePageMarkUp();\n  };\n\n  return {\n    renderHomePage: renderHomePage\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/home/home.js?");

/***/ }),

/***/ "./src/home/homeStyles.css":
/*!*********************************!*\
  !*** ./src/home/homeStyles.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./homeStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/home/homeStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/home/homeStyles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_navbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbarComponent */ \"./src/navbar/navbarComponent.js\");\n/* harmony import */ var _about_us_aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us/aboutUs */ \"./src/about-us/aboutUs.js\");\n/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home */ \"./src/home/home.js\");\n/* harmony import */ var _indexStyles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexStyles.css */ \"./src/indexStyles.css\");\n/* harmony import */ var _indexStyles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_indexStyles_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar showPage = function showPage(pageId) {\n  return document.getElementById(pageId).classList.remove(\"d-none\");\n};\n\nwindow.onload = function () {\n  document.getElementById(\"content\").classList.add(\"content\");\n  _navbar_navbarComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderNavBar(\"content\");\n  _about_us_aboutUs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderAboutUsPage(\"content\");\n  _home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderHomePage(\"content\");\n  document.getElementById(\"btn-about-us\").addEventListener(\"click\", function () {\n    showPage(\"aboutUs\");\n  });\n  document.getElementById(\"btn-home\").addEventListener(\"click\", function () {\n    showPage(\"homeId\");\n  });\n};\n\n//# sourceURL=webpack:///./src/index.js?");

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