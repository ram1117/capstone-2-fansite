/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/CLRNDNC.TTF */ \"./src/fonts/CLRNDNC.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: customFont;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n  font-family: customFont, sans-serif;\\n}\\n\\nbutton {\\n  font-family: customFont, sans-serif;\\n}\\n\\n.navigation-bar {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  height: 10vh;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n#logo {\\n  height: 80%;\\n}\\n\\n.navigation-list {\\n  display: flex;\\n  width: 70%;\\n  justify-content: space-around;\\n  list-style: none;\\n}\\n\\n.home-page {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  overflow-y: auto;\\n  margin: 5% auto;\\n}\\n\\n.episode-tile {\\n  margin: 5%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.episode-image {\\n  width: 85%;\\n}\\n\\n.popup-wrapper {\\n  position: fixed;\\n  z-index: 99;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  overflow-y: scroll;\\n  background-color: rgb(202, 202, 202);\\n}\\n\\n.popup {\\n  width: 90%;\\n  margin: 5% auto;\\n  padding: 10% 5%;\\n  background: #fff;\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n#close-button {\\n  font-size: 2em;\\n  position: absolute;\\n  right: 2%;\\n  top: 2%;\\n}\\n\\n.popup-episode-img {\\n  width: 90%;\\n  object-fit: contain;\\n}\\n\\n.popup-episode-header {\\n  font-size: 1.7em;\\n}\\n\\n.popup-comments-header,\\n.popup-form-header {\\n  font-size: 1.5em;\\n}\\n\\n.popup-episode-details-wrapper {\\n  display: grid;\\n  width: 70%;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.popup-episode-details-wrapper > * {\\n  margin: 0;\\n  padding: 1% 0;\\n}\\n\\n.popup-comments-container {\\n  width: 70%;\\n  height: 15vh;\\n  padding: 0 2%;\\n  overflow-y: scroll;\\n}\\n\\n.comment-line {\\n  display: flex;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.comment-line > * {\\n  margin: 1% 2%;\\n}\\n\\n.comment-date {\\n  width: 20%;\\n}\\n\\n.comment-user {\\n  width: 35%;\\n}\\n\\n.comment-text {\\n  width: 45%;\\n}\\n\\n#popup-comments-form {\\n  width: 70%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n}\\n\\n.form-input {\\n  border: none;\\n  border-radius: 10px;\\n  margin: 1% 0;\\n  padding: 3%;\\n}\\n\\n.form-label {\\n  display: none;\\n}\\n\\n.formsubmit-btn {\\n  width: 50%;\\n  font-size: 1.1em;\\n}\\n\\n.footer {\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  border-top: 2px solid black;\\n}\\n\\n.comment-button {\\n  margin-top: 5px;\\n  margin-bottom: 5px;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .home-page {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n\\n  .popup {\\n    width: 70%;\\n    margin: 10% auto;\\n  }\\n\\n  #close-button {\\n    font-size: 2.4em;\\n  }\\n\\n  .popup-episode-details-wrapper > * {\\n    font-size: 1.4em;\\n  }\\n\\n  .popup-episode-header {\\n    font-size: 2em;\\n  }\\n}\\n\\n@media screen and (min-width: 992px) {\\n  .home-page {\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n\\n  #close-button {\\n    font-size: 3em;\\n  }\\n\\n  .popup-episode-header {\\n    font-size: 2em;\\n  }\\n\\n  .popup-comments-header,\\n  .popup-form-header {\\n    font-size: 1.8em;\\n  }\\n\\n  .comment-line > * {\\n    font-size: 1.3em;\\n  }\\n\\n  .formsubmit-btn {\\n    font-size: 1.5em;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2-fansite/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/APIfunctions.js */ \"./src/modules/APIfunctions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst seasons = ['130070', '58465', '58464'];\nwindow.onload = () => {\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0]);\n};\n\nconst seasonbtn1 = document.querySelector('#season-1');\nseasonbtn1.onclick = () => {\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0]);\n};\n\nconst seasonbtn2 = document.querySelector('#season-2');\nseasonbtn2.onclick = () => {\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[1]);\n};\n\nconst seasonbtn3 = document.querySelector('#season-3');\nseasonbtn3.onclick = () => {\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[2]);\n};\n\nconst episodesContainer = document.querySelector('.home-page');\nepisodesContainer.onclick = (event) => {\n  if (event.target.id === 'main-comment-popup') {\n    const { episodeId } = event.target.parentNode.dataset;\n    (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchEpisode)(episodeId);\n  }\n};\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIfunctions.js":
/*!*************************************!*\
  !*** ./src/modules/APIfunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"fetchEpisode\": () => (/* binding */ fetchEpisode),\n/* harmony export */   \"fetchSeason\": () => (/* binding */ fetchSeason),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\n/* harmony import */ var _DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMfunctions.js */ \"./src/modules/DOMfunctions.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/modules/homepage.js\");\n// eslint-disable-next-line\n\n\n\nconst appId = '/B6a2ll1hsjifFXa5Lo8D';\nconst commentURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/comments`;\n\nconst fetchComments = async (episodeId) => {\n  let comments = [];\n  const fetchCommentUrl = `${commentURL}?item_id=${episodeId}`;\n  const commentResponse = await fetch(fetchCommentUrl);\n  if (commentResponse.status === 200) {\n    comments = [...await commentResponse.json()];\n    (0,_DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__.updatePopupComments)(comments);\n  }\n};\n\nconst postComments = async (commentObj) => {\n  await fetch(commentURL, {\n    method: 'POST',\n    body: JSON.stringify(commentObj),\n    headers: { 'Content-type': 'application/json' },\n  }).then((response) => response.text());\n  fetchComments(commentObj.item_id);\n};\n\nconst fetchEpisode = async (episodeId) => {\n  const tvResponse = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);\n  if (tvResponse.status === 200) {\n    const epiDetails = await tvResponse.json();\n    (0,_DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(epiDetails);\n    fetchComments(episodeId);\n  }\n};\n\nconst fetchSeason = async (seasonId) => {\n  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`;\n  await fetch(url)\n    .then((response) => response.json())\n    .then((data) => {\n      (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createSeasonList)(data);\n    })\n    .catch((error) => {\n      console.error(error);\n    });\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/APIfunctions.js?");

/***/ }),

/***/ "./src/modules/DOMfunctions.js":
/*!*************************************!*\
  !*** ./src/modules/DOMfunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopup\": () => (/* binding */ createPopup),\n/* harmony export */   \"showErrorMsg\": () => (/* binding */ showErrorMsg),\n/* harmony export */   \"updatePopupComments\": () => (/* binding */ updatePopupComments)\n/* harmony export */ });\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n/* harmony import */ var _APIfunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIfunctions.js */ \"./src/modules/APIfunctions.js\");\n\n// eslint-disable-next-line\n\n\nconst showErrorMsg = (msg) => {\n  const errorDiv = document.createElement('h5');\n  errorDiv.textContent = msg;\n  document.body.appendChild(errorDiv);\n};\n\nconst createCommentChild = (comment) => {\n  const commentLine = document.createElement('div');\n  commentLine.classList.add('comment-line');\n  const commentDate = document.createElement('p');\n  commentDate.classList.add('comment-date');\n  commentDate.textContent = comment.creation_date;\n\n  const commentUser = document.createElement('p');\n  commentUser.classList.add('comment-user');\n  commentUser.textContent = comment.username;\n\n  const commentText = document.createElement('p');\n  commentText.classList.add('comment-text');\n  commentText.textContent = comment.comment;\n\n  commentLine.appendChild(commentDate);\n  commentLine.appendChild(commentUser);\n  commentLine.appendChild(commentText);\n\n  return commentLine;\n};\n\nconst updatePopupComments = (comments) => {\n  const cmtContainer = document.querySelector('.popup-comments-container');\n  while (cmtContainer.firstChild) {\n    cmtContainer.removeChild(cmtContainer.firstChild);\n  }\n  comments.forEach((comment) => {\n    cmtContainer.appendChild(createCommentChild(comment));\n  });\n  (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comments);\n};\n\nconst dismissPopup = (popupElement) => {\n  document.body.removeChild(popupElement);\n  document.body.style.overflow = 'auto';\n};\n\nconst getInputFromForm = (epiId) => {\n  const nameVal = document.querySelector('#input-name').value;\n  const CmmtVal = document.querySelector('#input-comment').value;\n  (0,_APIfunctions_js__WEBPACK_IMPORTED_MODULE_1__.postComments)({ item_id: epiId, username: nameVal, comment: CmmtVal });\n};\n\nconst createPopup = (epiDetails) => {\n  const popupWrapper = document.createElement('div');\n  popupWrapper.classList.add('popup-wrapper');\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n  popup.dataset.episodeId = epiDetails.id;\n  popup.style.background = `radial-gradient(rgba(255,255,255, 0.75),\n  rgba(209,209,209, 0.75)),url(${epiDetails.image.medium}), 0, 0, no-repeat`;\n  popup.style.backgroundSize = 'cover';\n\n  const closeButton = document.createElement('i');\n  closeButton.classList.add('fa', 'fa-close');\n  closeButton.id = 'close-button';\n  closeButton.onclick = () => {\n    dismissPopup(popupWrapper);\n  };\n\n  const mainImg = document.createElement('img');\n  mainImg.classList.add('popup-episode-img');\n  mainImg.src = epiDetails.image.original;\n  mainImg.alt = 'Image from the episode';\n\n  const epiHeader = document.createElement('h2');\n  epiHeader.classList.add('popup-episode-header');\n  epiHeader.textContent = epiDetails.name;\n\n  const epiDetailsWrapper = document.createElement('div');\n  epiDetailsWrapper.classList.add('popup-episode-details-wrapper');\n\n  const rating = document.createElement('p');\n  rating.textContent = `Avg. Rating: ${epiDetails.rating.average}`;\n\n  const airDate = document.createElement('p');\n  airDate.textContent = `Aired Date: ${epiDetails.airdate}`;\n\n  const seasonNo = document.createElement('p');\n  seasonNo.textContent = `Season: ${epiDetails.season}`;\n\n  const episodeLink = document.createElement('p');\n  episodeLink.innerHTML = `More details: <a href=${epiDetails.url} target='_blank'>Link...</a>`;\n\n  epiDetailsWrapper.appendChild(rating);\n  epiDetailsWrapper.appendChild(airDate);\n  epiDetailsWrapper.appendChild(seasonNo);\n  epiDetailsWrapper.appendChild(episodeLink);\n\n  const commentsHeader = document.createElement('h3');\n  commentsHeader.classList.add('popup-comments-header');\n  commentsHeader.textContent = 'Comments';\n  const commentsCounter = document.createElement('span');\n  commentsCounter.classList.add('comments-count');\n  commentsCounter.textContent = '(0)';\n  commentsHeader.appendChild(commentsCounter);\n\n  const commentsContainer = document.createElement('div');\n  commentsContainer.classList.add('popup-comments-container');\n\n  const formHeader = document.createElement('h3');\n  formHeader.classList.add('popup-form-header');\n  formHeader.textContent = 'Add a comment';\n\n  const commentForm = document.createElement('form');\n  commentForm.id = 'popup-comments-form';\n  commentForm.action = 'post';\n\n  commentForm.innerHTML = `<label class=\"form-label\" for=\"name\">Name</label>\n  <input id=\"input-name\" class=\"form-input\" type=\"text\" placeholder=\"Your Name...\" required>\n  <label class=\"form-label\" for=\"comment\">Comment</label>\n  <textarea id=\"input-comment\" class=\"form-input\" type=\"text\" placeholder=\"Your Insights...\" rows=\"3\" required></textarea>\n  <label class=\"form-label\" for=\"submitbtn\">Submit</label>      \n  <button id=\"submitbtn\" class=\"form-input formsubmit-btn\" type=\"submit\">Comment</button>`;\n\n  commentForm.onsubmit = (event) => {\n    event.preventDefault();\n    getInputFromForm(commentForm.parentNode.dataset.episodeId);\n    commentForm.reset();\n  };\n\n  popup.appendChild(closeButton);\n  popup.appendChild(mainImg);\n  popup.appendChild(epiHeader);\n  popup.appendChild(epiDetailsWrapper);\n  popup.appendChild(commentsHeader);\n  popup.appendChild(commentsContainer);\n  popup.appendChild(formHeader);\n  popup.appendChild(commentForm);\n\n  popupWrapper.appendChild(popup);\n  document.body.appendChild(popupWrapper);\n  document.body.style.overflow = 'hidden';\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/DOMfunctions.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = (comments) => {\n  const counterElement = document.querySelector('.comments-count');\n  let count = 0;\n  comments.forEach(() => { count += 1; });\n  counterElement.textContent = `(${count})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSeasonList\": () => (/* binding */ createSeasonList)\n/* harmony export */ });\n// eslint-disable-next-line\nconst createSeasonList = (episodeDetails) => {\n  const homePage = document.querySelector('.home-page');\n  if (homePage.childNodes.length > 0) {\n    homePage.innerHTML = '';\n  }\n  episodeDetails.forEach((episodeDetail) => {\n    const episodeTile = document.createElement('div');\n    episodeTile.classList.add('episode-tile');\n    episodeTile.dataset.episodeId = episodeDetail.id;\n    episodeTile.innerHTML = `\n    <img class=\"episode-image\" src=\"${episodeDetail.image.medium}\" alt=\"episode image\">\n    <h3 class=\"episode-name\">${episodeDetail.name}</h3>\n    <button id=\"main-comment-popup\" type=\"button\">Comments</button>`;\n    homePage.appendChild(episodeTile);\n  });\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/fonts/CLRNDNC.TTF":
/*!*******************************!*\
  !*** ./src/fonts/CLRNDNC.TTF ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f3854469c63186f633a.TTF\";\n\n//# sourceURL=webpack://capstone-2-fansite/./src/fonts/CLRNDNC.TTF?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;