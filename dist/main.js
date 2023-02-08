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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/CLRNDNC.TTF */ \"./src/fonts/CLRNDNC.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: customFont;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0 auto;\\r\\n  box-sizing: border-box;\\r\\n  font-family: customFont, sans-serif;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: customFont, sans-serif;\\r\\n}\\r\\n\\r\\n.navigation-bar {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  top: 0;\\r\\n  height: 10vh;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  height: 80%;\\r\\n}\\r\\n\\r\\n.navigation-list {\\r\\n  display: flex;\\r\\n  width: 70%;\\r\\n  justify-content: space-around;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.home-page {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr;\\r\\n  overflow-y: auto;\\r\\n  margin: 5% auto;\\r\\n}\\r\\n\\r\\n.episode-tile {\\r\\n  margin: 5%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.episode-image {\\r\\n  width: 85%;\\r\\n}\\r\\n\\r\\n.popup-wrapper {\\r\\n  position: fixed;\\r\\n  z-index: 99;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  overflow-y: scroll;\\r\\n  background-color: rgb(202, 202, 202);\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  width: 90%;\\r\\n  margin: 5% auto;\\r\\n  padding: 10% 5%;\\r\\n  background: #fff;\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#close-button {\\r\\n  font-size: 2em;\\r\\n  position: absolute;\\r\\n  right: 2%;\\r\\n  top: 2%;\\r\\n}\\r\\n\\r\\n.popup-episode-img {\\r\\n  width: 90%;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.popup-episode-header {\\r\\n  font-size: 1.7em;\\r\\n}\\r\\n\\r\\n.popup-comments-header,\\r\\n.popup-form-header {\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n\\r\\n.popup-episode-details-wrapper {\\r\\n  display: grid;\\r\\n  width: 70%;\\r\\n  grid-template-columns: 1fr 1fr;\\r\\n}\\r\\n\\r\\n.popup-episode-details-wrapper > * {\\r\\n  margin: 0;\\r\\n  padding: 1% 0;\\r\\n}\\r\\n\\r\\n.popup-comments-container {\\r\\n  width: 70%;\\r\\n  height: 15vh;\\r\\n  padding: 0 2%;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.comment-line {\\r\\n  display: flex;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.comment-line > * {\\r\\n  margin: 1% 2%;\\r\\n}\\r\\n\\r\\n.comment-date {\\r\\n  width: 20%;\\r\\n}\\r\\n\\r\\n.comment-user {\\r\\n  width: 35%;\\r\\n}\\r\\n\\r\\n.comment-text {\\r\\n  width: 45%;\\r\\n}\\r\\n\\r\\n#popup-comments-form {\\r\\n  width: 70%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: start;\\r\\n}\\r\\n\\r\\n.form-input {\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  margin: 1% 0;\\r\\n  padding: 3%;\\r\\n}\\r\\n\\r\\n.form-label {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.formsubmit-btn {\\r\\n  width: 50%;\\r\\n  font-size: 1.1em;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  border-top: 2px solid black;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  margin-top: 5px;\\r\\n  margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n#like-button {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .home-page {\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n  }\\r\\n\\r\\n  .popup {\\r\\n    width: 70%;\\r\\n    margin: 10% auto;\\r\\n  }\\r\\n\\r\\n  #close-button {\\r\\n    font-size: 2.4em;\\r\\n  }\\r\\n\\r\\n  .popup-episode-details-wrapper > * {\\r\\n    font-size: 1.4em;\\r\\n  }\\r\\n\\r\\n  .popup-episode-header {\\r\\n    font-size: 2em;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 992px) {\\r\\n  .home-page {\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n  }\\r\\n\\r\\n  #close-button {\\r\\n    font-size: 3em;\\r\\n  }\\r\\n\\r\\n  .popup-episode-header {\\r\\n    font-size: 2em;\\r\\n  }\\r\\n\\r\\n  .popup-comments-header,\\r\\n  .popup-form-header {\\r\\n    font-size: 1.8em;\\r\\n  }\\r\\n\\r\\n  .comment-line > * {\\r\\n    font-size: 1.3em;\\r\\n  }\\r\\n\\r\\n  .formsubmit-btn {\\r\\n    font-size: 1.5em;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/APIfunctions.js */ \"./src/modules/APIfunctions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nconst seasons = ['130070', '58465', '58464'];\r\nwindow.onload = () => {\r\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0]);\r\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchLike)();\r\n};\r\n\r\nconst seasonbtn1 = document.querySelector('#season-1');\r\nseasonbtn1.onclick = () => {\r\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0]);\r\n};\r\n\r\nconst seasonbtn2 = document.querySelector('#season-2');\r\nseasonbtn2.onclick = () => {\r\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[1]);\r\n};\r\n\r\nconst seasonbtn3 = document.querySelector('#season-3');\r\nseasonbtn3.onclick = () => {\r\n  (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[2]);\r\n};\r\n\r\nconst episodesContainer = document.querySelector('.home-page');\r\nepisodesContainer.onclick = (event) => {\r\n  if (event.target.id === 'main-comment-popup') {\r\n    const { episodeId } = event.target.parentNode.dataset;\r\n    (0,_modules_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.fetchEpisode)(episodeId);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIfunctions.js":
/*!*************************************!*\
  !*** ./src/modules/APIfunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"fetchEpisode\": () => (/* binding */ fetchEpisode),\n/* harmony export */   \"fetchLike\": () => (/* binding */ fetchLike),\n/* harmony export */   \"fetchSeason\": () => (/* binding */ fetchSeason),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\n/* harmony import */ var _DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMfunctions.js */ \"./src/modules/DOMfunctions.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/modules/homepage.js\");\n// eslint-disable-next-line\r\n\r\n\r\n\r\nconst appId = '/B6a2ll1hsjifFXa5Lo8D';\r\nconst commentURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/comments`;\r\nconst likeURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps${appId}/likes`;\r\n\r\nconst fetchComments = async (episodeId) => {\r\n  let comments = [];\r\n  const fetchCommentUrl = `${commentURL}?item_id=${episodeId}`;\r\n  const commentResponse = await fetch(fetchCommentUrl);\r\n  if (commentResponse.status === 200) {\r\n    comments = [...await commentResponse.json()];\r\n    (0,_DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__.updatePopupComments)(comments);\r\n  }\r\n};\r\n\r\nconst postComments = async (commentObj) => {\r\n  await fetch(commentURL, {\r\n    method: 'POST',\r\n    body: JSON.stringify(commentObj),\r\n    headers: { 'Content-type': 'application/json' },\r\n  }).then((response) => response.text());\r\n  fetchComments(commentObj.item_id);\r\n};\r\n\r\nconst fetchEpisode = async (episodeId) => {\r\n  const tvResponse = await fetch(`https://api.tvmaze.com/episodes/${episodeId}`);\r\n  if (tvResponse.status === 200) {\r\n    const epiDetails = await tvResponse.json();\r\n    (0,_DOMfunctions_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(epiDetails);\r\n    fetchComments(episodeId);\r\n  }\r\n};\r\n\r\nconst fetchSeason = async (seasonId) => {\r\n  const url = `https://api.tvmaze.com/seasons/${seasonId}/episodes`;\r\n  await fetch(url)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.createSeasonList)(data);\r\n    })\r\n    .catch((error) => {\r\n      console.error(error);\r\n    });\r\n};\r\n\r\nconst fetchLike = async () => {\r\n  let likes = [];\r\n  const fetchLikeUrl = `${likeURL}`;\r\n  const likeResponse = await fetch(fetchLikeUrl);\r\n  if (likeResponse.status === 200) {\r\n    likes = [...await likeResponse.json()];\r\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.displayLikes)(likes);\r\n  }\r\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/APIfunctions.js?");

/***/ }),

/***/ "./src/modules/DOMfunctions.js":
/*!*************************************!*\
  !*** ./src/modules/DOMfunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopup\": () => (/* binding */ createPopup),\n/* harmony export */   \"showErrorMsg\": () => (/* binding */ showErrorMsg),\n/* harmony export */   \"updatePopupComments\": () => (/* binding */ updatePopupComments)\n/* harmony export */ });\n/* harmony import */ var _APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIfunctions.js */ \"./src/modules/APIfunctions.js\");\n/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter.js */ \"./src/modules/commentsCounter.js\");\n// eslint-disable-next-line\r\n\r\n\r\n\r\nconst showErrorMsg = (msg) => {\r\n  const errorDiv = document.createElement('h5');\r\n  errorDiv.textContent = msg;\r\n  document.body.appendChild(errorDiv);\r\n};\r\n\r\nconst createCommentChild = (comment) => {\r\n  const commentLine = document.createElement('div');\r\n  commentLine.classList.add('comment-line');\r\n  const commentDate = document.createElement('p');\r\n  commentDate.classList.add('comment-date');\r\n  commentDate.textContent = comment.creation_date;\r\n\r\n  const commentUser = document.createElement('p');\r\n  commentUser.classList.add('comment-user');\r\n  commentUser.textContent = comment.username;\r\n\r\n  const commentText = document.createElement('p');\r\n  commentText.classList.add('comment-text');\r\n  commentText.textContent = comment.comment;\r\n\r\n  commentLine.appendChild(commentDate);\r\n  commentLine.appendChild(commentUser);\r\n  commentLine.appendChild(commentText);\r\n\r\n  return commentLine;\r\n};\r\n\r\nconst updatePopupComments = (comments) => {\r\n  const cmtContainer = document.querySelector('.popup-comments-container');\r\n  while (cmtContainer.firstChild) {\r\n    cmtContainer.removeChild(cmtContainer.firstChild);\r\n  }\r\n  comments.forEach((comment) => {\r\n    cmtContainer.appendChild(createCommentChild(comment));\r\n  });\r\n  (0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_1__.countComments)(comments);\r\n};\r\n\r\nconst dismissPopup = (popupElement) => {\r\n  document.body.removeChild(popupElement);\r\n  document.body.style.overflow = 'auto';\r\n};\r\n\r\nconst getInputFromForm = (epiId) => {\r\n  const nameVal = document.querySelector('#input-name').value;\r\n  const CmmtVal = document.querySelector('#input-comment').value;\r\n  (0,_APIfunctions_js__WEBPACK_IMPORTED_MODULE_0__.postComments)({ item_id: epiId, username: nameVal, comment: CmmtVal });\r\n};\r\n\r\nconst createPopup = (epiDetails) => {\r\n  const popupWrapper = document.createElement('div');\r\n  popupWrapper.classList.add('popup-wrapper');\r\n  const popup = document.createElement('div');\r\n  popup.classList.add('popup');\r\n  popup.dataset.episodeId = epiDetails.id;\r\n  popup.style.background = `radial-gradient(rgba(255,255,255, 0.75),\r\n  rgba(209,209,209, 0.75)),url(${epiDetails.image.medium}), 0, 0, no-repeat`;\r\n  popup.style.backgroundSize = 'cover';\r\n\r\n  const closeButton = document.createElement('i');\r\n  closeButton.classList.add('fa', 'fa-close');\r\n  closeButton.id = 'close-button';\r\n  closeButton.onclick = () => {\r\n    dismissPopup(popupWrapper);\r\n  };\r\n\r\n  const mainImg = document.createElement('img');\r\n  mainImg.classList.add('popup-episode-img');\r\n  mainImg.src = epiDetails.image.original;\r\n  mainImg.alt = 'Image from the episode';\r\n\r\n  const epiHeader = document.createElement('h2');\r\n  epiHeader.classList.add('popup-episode-header');\r\n  epiHeader.textContent = epiDetails.name;\r\n\r\n  const epiDetailsWrapper = document.createElement('div');\r\n  epiDetailsWrapper.classList.add('popup-episode-details-wrapper');\r\n\r\n  const rating = document.createElement('p');\r\n  rating.textContent = `Avg. Rating: ${epiDetails.rating.average}`;\r\n\r\n  const airDate = document.createElement('p');\r\n  airDate.textContent = `Aired Date: ${epiDetails.airdate}`;\r\n\r\n  const seasonNo = document.createElement('p');\r\n  seasonNo.textContent = `Season: ${epiDetails.season}`;\r\n\r\n  const episodeLink = document.createElement('p');\r\n  episodeLink.innerHTML = `More details: <a href=${epiDetails.url} target='_blank'>Link...</a>`;\r\n\r\n  epiDetailsWrapper.appendChild(rating);\r\n  epiDetailsWrapper.appendChild(airDate);\r\n  epiDetailsWrapper.appendChild(seasonNo);\r\n  epiDetailsWrapper.appendChild(episodeLink);\r\n\r\n  const commentsHeader = document.createElement('h3');\r\n  commentsHeader.classList.add('popup-comments-header');\r\n  commentsHeader.textContent = 'Comments';\r\n  const commentsCounter = document.createElement('span');\r\n  commentsCounter.classList.add('comments-count');\r\n  commentsCounter.textContent = '(0)';\r\n  commentsHeader.appendChild(commentsCounter);\r\n\r\n  const commentsContainer = document.createElement('div');\r\n  commentsContainer.classList.add('popup-comments-container');\r\n\r\n  const formHeader = document.createElement('h3');\r\n  formHeader.classList.add('popup-form-header');\r\n  formHeader.textContent = 'Add a comment';\r\n\r\n  const commentForm = document.createElement('form');\r\n  commentForm.id = 'popup-comments-form';\r\n  commentForm.action = 'post';\r\n\r\n  commentForm.innerHTML = `<label class=\"form-label\" for=\"name\">Name</label>\r\n  <input id=\"input-name\" class=\"form-input\" type=\"text\" placeholder=\"Your Name...\" required>\r\n  <label class=\"form-label\" for=\"comment\">Comment</label>\r\n  <textarea id=\"input-comment\" class=\"form-input\" type=\"text\" placeholder=\"Your Insights...\" rows=\"3\" required></textarea>\r\n  <label class=\"form-label\" for=\"submitbtn\">Submit</label>      \r\n  <button id=\"submitbtn\" class=\"form-input formsubmit-btn\" type=\"submit\">Comment</button>`;\r\n\r\n  commentForm.onsubmit = (event) => {\r\n    event.preventDefault();\r\n    getInputFromForm(commentForm.parentNode.dataset.episodeId);\r\n    commentForm.reset();\r\n  };\r\n\r\n  popup.appendChild(closeButton);\r\n  popup.appendChild(mainImg);\r\n  popup.appendChild(epiHeader);\r\n  popup.appendChild(epiDetailsWrapper);\r\n  popup.appendChild(commentsHeader);\r\n  popup.appendChild(commentsContainer);\r\n  popup.appendChild(formHeader);\r\n  popup.appendChild(commentForm);\r\n\r\n  popupWrapper.appendChild(popup);\r\n  document.body.appendChild(popupWrapper);\r\n  document.body.style.overflow = 'hidden';\r\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/DOMfunctions.js?");

/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComments\": () => (/* binding */ countComments)\n/* harmony export */ });\nconst countComments = (comments) => {\r\n  const counterElement = document.querySelector('.comments-count');\r\n  let count = 0;\r\n  comments.forEach(() => { count += 1; });\r\n  counterElement.textContent = `(${count})`;\r\n};\r\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/commentsCounter.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSeasonList\": () => (/* binding */ createSeasonList),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n// eslint-disable-next-line\r\nconst createSeasonList = (episodeDetails) => {\r\n  const homePage = document.querySelector('.home-page');\r\n  if (homePage.childNodes.length > 0) {\r\n    homePage.innerHTML = '';\r\n  }\r\n  episodeDetails.forEach((episodeDetail) => {\r\n    const episodeTile = document.createElement('div');\r\n    episodeTile.classList.add('episode-tile');\r\n    episodeTile.dataset.episodeId = episodeDetail.id;\r\n    episodeTile.innerHTML = `\r\n    <img class=\"episode-image\" src=\"${episodeDetail.image.medium}\" alt=\"episode image\">\r\n    <h3 class=\"episode-name\">${episodeDetail.name}</h3>\r\n    <button id=\"like-button\">Like button</button>\r\n    <p class=\"likes-count\"></p>\r\n    <button id=\"main-comment-popup\" type=\"button\">Comments</button>`;\r\n    homePage.appendChild(episodeTile);\r\n  });\r\n};\r\nconst displayLikes = (likes) => {\r\n  const display = document.querySelector('.likes-count');\r\n  likes.forEach((like) => {\r\n    display.textContent = `Likes: ${like.likes}`;\r\n  });\r\n};\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/homepage.js?");

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