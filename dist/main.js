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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/CLRNDNC.TTF */ \"./src/fonts/CLRNDNC.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: customFont;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n  font-family: customFont, sans-serif;\\n  background: linear-gradient(0.1turn, rgb(166, 166, 166), #fff, rgb(166, 166, 166));\\n}\\n\\nbutton {\\n  font-family: customFont, sans-serif;\\n}\\n\\n.navigation-bar {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  height: 10vh;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  background: rgb(49, 49, 49);\\n  opacity: 1;\\n}\\n\\n#logo {\\n  height: 60%;\\n}\\n\\n.navigation-list {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  width: 70%;\\n  list-style: none;\\n  padding: 0;\\n}\\n\\n#season-1,\\n#season-2,\\n#season-3 {\\n  text-align: center;\\n  padding: 5%;\\n  margin: 2% 5%;\\n  font-size: 1.2em;\\n  color: #fff;\\n  border: solid 2px #fff;\\n  border-radius: 20px;\\n}\\n\\n.home-page {\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  overflow-y: auto;\\n  margin: 25% auto;\\n}\\n\\n.episode-tile {\\n  margin: 5%;\\n  padding: 5% 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 2px dashed rgb(49, 49, 49);\\n  border-radius: 20px;\\n  color: rgb(59, 53, 53);\\n}\\n\\n.episode-image {\\n  width: 85%;\\n  border-radius: 15px;\\n}\\n\\n.episode-name {\\n  font-size: 1.5em;\\n}\\n\\n.header-wrapper {\\n  width: 70%;\\n  margin: 5% 0;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.likes-wrapper {\\n  width: 40%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.likes-wrapper > * {\\n  margin: 1% 0;\\n}\\n\\n#heart-button {\\n  font-size: 1.2em;\\n}\\n\\n.heart-animation {\\n  animation-name: heartLiked;\\n  animation-duration: 3s;\\n}\\n\\n@keyframes heartLiked {\\n  0% {\\n    font-size: 2em;\\n    color: red;\\n  }\\n\\n  100% {\\n    color: black;\\n  }\\n}\\n\\n.likes-text {\\n  font-size: 1.3em;\\n}\\n\\n#main-comment-popup {\\n  width: 60%;\\n  padding: 3%;\\n  font-size: 1.4em;\\n  color: rgb(59, 53, 53);\\n}\\n\\n.popup-wrapper {\\n  position: fixed;\\n  z-index: 99;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  overflow-y: scroll;\\n  background-color: rgb(202, 202, 202);\\n}\\n\\n.popup {\\n  width: 90%;\\n  margin: 5%;\\n  padding: 10% 0;\\n  background: #fff;\\n  color: rgb(59, 53, 53);\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border: 2px dashed rgb(49, 49, 49);\\n  border-radius: 20px;\\n}\\n\\n#close-button {\\n  font-size: 2em;\\n  position: absolute;\\n  right: 2%;\\n  top: 1%;\\n}\\n\\n.popup-episode-img {\\n  width: 90%;\\n  object-fit: contain;\\n  border-radius: 15px;\\n}\\n\\n.popup-episode-header {\\n  font-size: 1.7em;\\n}\\n\\n.popup-comments-header,\\n.popup-form-header {\\n  font-size: 1.5em;\\n}\\n\\n.popup-episode-details-wrapper {\\n  display: grid;\\n  width: 70%;\\n  grid-template-columns: 1fr 1fr;\\n}\\n\\n.popup-episode-details-wrapper > * {\\n  margin: 0;\\n  padding: 1% 0;\\n}\\n\\n.popup-comments-container {\\n  width: 70%;\\n  height: 15vh;\\n  padding: 0 2%;\\n  overflow-y: auto;\\n}\\n\\n.comment-line {\\n  display: flex;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.comment-line > * {\\n  margin: 1% 2%;\\n}\\n\\n.comment-date {\\n  width: 20%;\\n}\\n\\n.comment-user {\\n  width: 35%;\\n}\\n\\n.comment-text {\\n  width: 45%;\\n}\\n\\n#popup-comments-form {\\n  width: 70%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n}\\n\\n.form-input {\\n  border: none;\\n  border-radius: 10px;\\n  margin: 1% 0;\\n  padding: 3%;\\n  font-size: 1.1em;\\n  font-family: customFont, sans-serif;\\n}\\n\\n.form-label {\\n  display: none;\\n}\\n\\n.formsubmit-btn {\\n  width: 50%;\\n  font-size: 1.1em;\\n  color: rgb(59, 53, 53);\\n}\\n\\n.footer {\\n  position: fixed;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  text-align: center;\\n  background: rgb(49, 49, 49);\\n  opacity: 1;\\n  font-size: 1.3em;\\n  color: #fff;\\n}\\n\\n.footer > p > a {\\n  color: #04d9ff;\\n}\\n\\n.button-style {\\n  background: #fff;\\n  border: solid 3px rgb(49, 49, 49);\\n  border-radius: 10px;\\n}\\n\\n#heart-button:hover,\\nbutton:hover,\\n#close-button:hover,\\n#season-1:hover,\\n#season-2:hover,\\n#season-3:hover {\\n  cursor: pointer;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  .home-page {\\n    grid-template-columns: 1fr 1fr;\\n    margin: 15% auto;\\n  }\\n\\n  #logo {\\n    height: 75%;\\n  }\\n\\n  .episode-name {\\n    font-size: 1.7em;\\n  }\\n\\n  #season-1,\\n  #season-2,\\n  #season-3 {\\n    font-size: 1.5em;\\n  }\\n\\n  .popup {\\n    width: 70%;\\n    margin: 10% auto;\\n  }\\n\\n  #close-button {\\n    font-size: 2.4em;\\n  }\\n\\n  .popup-episode-details-wrapper > * {\\n    font-size: 1.4em;\\n  }\\n\\n  .popup-episode-img {\\n    border-radius: 25px;\\n  }\\n\\n  .popup-episode-header {\\n    font-size: 2em;\\n  }\\n\\n  #heart-button {\\n    font-size: 1.3em;\\n  }\\n\\n  .likes-text {\\n    font-size: 1.6em;\\n  }\\n}\\n\\n@media screen and (min-width: 992px) {\\n  .home-page {\\n    grid-template-columns: 1fr 1fr 1fr;\\n    margin: 10% auto;\\n  }\\n\\n  #season-1,\\n  #season-2,\\n  #season-3 {\\n    font-size: 1.5em;\\n  }\\n\\n  .episode-name {\\n    font-size: 2em;\\n  }\\n\\n  #close-button {\\n    font-size: 3em;\\n  }\\n\\n  .popup-episode-header {\\n    font-size: 2em;\\n  }\\n\\n  .popup-comments-header,\\n  .popup-form-header {\\n    font-size: 1.8em;\\n  }\\n\\n  .comment-line > * {\\n    font-size: 1.3em;\\n  }\\n\\n  .formsubmit-btn {\\n    font-size: 1.5em;\\n  }\\n\\n  #heart-button {\\n    font-size: 1.5em;\\n  }\\n\\n  .likes-text {\\n    font-size: 1.7em;\\n  }\\n\\n  #main-comment-popup {\\n    font-size: 1.8em;\\n  }\\n\\n  .form-input {\\n    font-family: customFont, sans-serif;\\n    font-size: 1.6em;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/APIfunctions */ \"./src/modules/APIfunctions.ts\");\n/* harmony import */ var _modules_episodeCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/episodeCounter */ \"./src/modules/episodeCounter.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nvar seasons = ['130070', '58465', '58464'];\nvar counter1 = document.querySelector('.epi-counter1');\nvar counter2 = document.querySelector('.epi-counter2');\nvar counter3 = document.querySelector('.epi-counter3');\nwindow.onload = function () {\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0], counter1);\n    (0,_modules_episodeCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(counter1);\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchLike)();\n};\nvar seasonbtn1 = document.querySelector('#season-1');\nseasonbtn1.onclick = function () {\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[0], counter1);\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchLike)();\n    counter2.textContent = '';\n    counter3.textContent = '';\n};\nvar seasonbtn2 = document.querySelector('#season-2');\nseasonbtn2.onclick = function () {\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[1], counter2);\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchLike)();\n    counter1.textContent = '';\n    counter3.textContent = '';\n};\nvar seasonbtn3 = document.querySelector('#season-3');\nseasonbtn3.onclick = function () {\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchSeason)(seasons[2], counter3);\n    (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchLike)();\n    counter1.textContent = '';\n    counter2.textContent = '';\n};\nvar episodesContainer = document.querySelector('.home-page');\nepisodesContainer.onclick = function (event) {\n    var element = event.target;\n    var parent = element.parentNode;\n    if (element.id === 'main-comment-popup') {\n        var episodeId = parent.dataset.episodeId;\n        (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.fetchEpisode)(episodeId);\n    }\n    if (element.id === 'heart-button') {\n        var button_1 = element;\n        button_1.classList.toggle('heart-animation');\n        var episodeId = element.dataset.episodeId;\n        (0,_modules_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.postNewLike)(episodeId);\n        setTimeout(function () {\n            button_1.classList.toggle('heart-animation');\n        }, 2500);\n    }\n};\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/index.ts?");

/***/ }),

/***/ "./src/modules/APIfunctions.ts":
/*!*************************************!*\
  !*** ./src/modules/APIfunctions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"fetchEpisode\": () => (/* binding */ fetchEpisode),\n/* harmony export */   \"fetchLike\": () => (/* binding */ fetchLike),\n/* harmony export */   \"fetchSeason\": () => (/* binding */ fetchSeason),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments),\n/* harmony export */   \"postNewLike\": () => (/* binding */ postNewLike)\n/* harmony export */ });\n/* harmony import */ var _DOMfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMfunctions */ \"./src/modules/DOMfunctions.ts\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/modules/homepage.ts\");\n/* harmony import */ var _episodeCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episodeCounter */ \"./src/modules/episodeCounter.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n// eslint-disable-next-line\n\n\n\nvar appId = '/KKlgY0e6iTLZYxIsAnMC';\nvar commentURL = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps\".concat(appId, \"/comments\");\nvar likeURL = \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps\".concat(appId, \"/likes\");\nvar fetchComments = function (episodeId) { return __awaiter(void 0, void 0, void 0, function () {\n    var comments, fetchCommentUrl, commentResponse, data;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                comments = [];\n                fetchCommentUrl = \"\".concat(commentURL, \"?item_id=\").concat(episodeId);\n                return [4 /*yield*/, fetch(fetchCommentUrl)];\n            case 1:\n                commentResponse = _a.sent();\n                if (!(commentResponse.status === 200)) return [3 /*break*/, 3];\n                return [4 /*yield*/, commentResponse.json()];\n            case 2:\n                data = _a.sent();\n                comments = __spreadArray([], data, true);\n                (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_0__.updatePopupComments)(comments);\n                _a.label = 3;\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nvar postComments = function (commentObj) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fetch(commentURL, {\n                    method: 'POST',\n                    body: JSON.stringify(commentObj),\n                    headers: { 'Content-type': 'application/json' },\n                })];\n            case 1:\n                _a.sent();\n                fetchComments(commentObj.item_id);\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar fetchEpisode = function (episodeId) { return __awaiter(void 0, void 0, void 0, function () {\n    var tvResponse, epiDetails;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fetch(\"https://api.tvmaze.com/episodes/\".concat(episodeId))];\n            case 1:\n                tvResponse = _a.sent();\n                if (!(tvResponse.status === 200)) return [3 /*break*/, 3];\n                return [4 /*yield*/, tvResponse.json()];\n            case 2:\n                epiDetails = _a.sent();\n                (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_0__.createPopup)(epiDetails);\n                fetchComments(episodeId);\n                _a.label = 3;\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nvar fetchSeason = function (seasonId, counter) { return __awaiter(void 0, void 0, void 0, function () {\n    var url;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                url = \"https://api.tvmaze.com/seasons/\".concat(seasonId, \"/episodes\");\n                return [4 /*yield*/, fetch(url)\n                        .then(function (response) { return response.json(); })\n                        .then(function (data) {\n                        (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createSeasonList)(data);\n                        (0,_episodeCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(counter);\n                    })\n                        .catch(function (error) {\n                        console.error(error);\n                    })];\n            case 1:\n                _a.sent();\n                return [2 /*return*/];\n        }\n    });\n}); };\nvar fetchLike = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var likes, likeResponse, _a;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0:\n                likes = [];\n                return [4 /*yield*/, fetch(likeURL)];\n            case 1:\n                likeResponse = _b.sent();\n                if (!(likeResponse.status === 200)) return [3 /*break*/, 3];\n                _a = [[]];\n                return [4 /*yield*/, likeResponse.json()];\n            case 2:\n                likes = __spreadArray.apply(void 0, _a.concat([(_b.sent()), true]));\n                (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.displayLikes)(likes);\n                _b.label = 3;\n            case 3: return [2 /*return*/];\n        }\n    });\n}); };\nvar postNewLike = function (episodeId) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fetch(likeURL, {\n                    method: 'POST',\n                    body: JSON.stringify({ item_id: episodeId }),\n                    headers: { 'Content-type': 'application/json' },\n                })];\n            case 1:\n                _a.sent();\n                fetchLike();\n                return [2 /*return*/];\n        }\n    });\n}); };\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/APIfunctions.ts?");

/***/ }),

/***/ "./src/modules/DOMfunctions.ts":
/*!*************************************!*\
  !*** ./src/modules/DOMfunctions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopup\": () => (/* binding */ createPopup),\n/* harmony export */   \"showErrorMsg\": () => (/* binding */ showErrorMsg),\n/* harmony export */   \"updatePopupComments\": () => (/* binding */ updatePopupComments)\n/* harmony export */ });\n/* harmony import */ var _APIfunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIfunctions */ \"./src/modules/APIfunctions.ts\");\n/* harmony import */ var _commentsCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsCounter */ \"./src/modules/commentsCounter.ts\");\n// eslint-disable-next-line\n\n\nvar showErrorMsg = function (msg) {\n    var errorDiv = document.createElement('h5');\n    errorDiv.textContent = msg;\n    document.body.appendChild(errorDiv);\n};\nvar createCommentChild = function (comment) {\n    var commentLine = document.createElement('div');\n    commentLine.classList.add('comment-line');\n    var commentDate = document.createElement('p');\n    commentDate.classList.add('comment-date');\n    commentDate.textContent = comment.creation_date;\n    var commentUser = document.createElement('p');\n    commentUser.classList.add('comment-user');\n    commentUser.textContent = comment.username;\n    var commentText = document.createElement('p');\n    commentText.classList.add('comment-text');\n    commentText.textContent = comment.comment;\n    commentLine.appendChild(commentDate);\n    commentLine.appendChild(commentUser);\n    commentLine.appendChild(commentText);\n    return commentLine;\n};\nvar updatePopupComments = function (comments) {\n    var cmtContainer = document.querySelector('.popup-comments-container');\n    while (cmtContainer.firstChild) {\n        cmtContainer.removeChild(cmtContainer.firstChild);\n    }\n    comments.forEach(function (comment) {\n        cmtContainer.appendChild(createCommentChild(comment));\n    });\n    (0,_commentsCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\nvar dismissPopup = function (popupElement) {\n    document.body.removeChild(popupElement);\n    document.body.style.overflow = 'auto';\n};\nvar getInputFromForm = function (epiId) {\n    var nameVal = document.querySelector('#input-name').value;\n    var CmmtVal = document.querySelector('#input-comment').value;\n    (0,_APIfunctions__WEBPACK_IMPORTED_MODULE_0__.postComments)({ item_id: epiId, username: nameVal, comment: CmmtVal });\n};\nvar createPopup = function (epiDetails) {\n    var popupWrapper = document.createElement('div');\n    popupWrapper.classList.add('popup-wrapper');\n    var popup = document.createElement('div');\n    popup.classList.add('popup');\n    popup.dataset.episodeId = epiDetails.id;\n    popup.style.background = \"radial-gradient(rgba(255,255,255, 0.75),\\n  rgba(209,209,209, 0.75)),url(\".concat(epiDetails.image.medium, \"), 0, 0, no-repeat\");\n    popup.style.backgroundSize = 'cover';\n    var closeButton = document.createElement('i');\n    closeButton.classList.add('fa', 'fa-close');\n    closeButton.id = 'close-button';\n    closeButton.onclick = function () {\n        dismissPopup(popupWrapper);\n    };\n    var mainImg = document.createElement('img');\n    mainImg.classList.add('popup-episode-img');\n    mainImg.src = epiDetails.image.original;\n    mainImg.alt = 'Image from the episode';\n    var epiHeader = document.createElement('h2');\n    epiHeader.classList.add('popup-episode-header');\n    epiHeader.textContent = epiDetails.name;\n    var epiDetailsWrapper = document.createElement('div');\n    epiDetailsWrapper.classList.add('popup-episode-details-wrapper');\n    var rating = document.createElement('p');\n    rating.textContent = \"Avg. Rating: \".concat(epiDetails.rating.average);\n    var airDate = document.createElement('p');\n    airDate.textContent = \"Aired Date: \".concat(epiDetails.airdate);\n    var seasonNo = document.createElement('p');\n    seasonNo.textContent = \"Season: \".concat(epiDetails.season);\n    var episodeLink = document.createElement('p');\n    episodeLink.innerHTML = \"More details: <a href=\".concat(epiDetails.url, \" target='_blank'>Link...</a>\");\n    epiDetailsWrapper.appendChild(rating);\n    epiDetailsWrapper.appendChild(airDate);\n    epiDetailsWrapper.appendChild(seasonNo);\n    epiDetailsWrapper.appendChild(episodeLink);\n    var commentsHeader = document.createElement('h3');\n    commentsHeader.classList.add('popup-comments-header');\n    commentsHeader.textContent = 'Comments';\n    var commentsCounter = document.createElement('span');\n    commentsCounter.classList.add('comments-count');\n    commentsCounter.textContent = '(0)';\n    commentsHeader.appendChild(commentsCounter);\n    var commentsContainer = document.createElement('div');\n    commentsContainer.classList.add('popup-comments-container');\n    var formHeader = document.createElement('h3');\n    formHeader.classList.add('popup-form-header');\n    formHeader.textContent = 'Add a comment';\n    var commentForm = document.createElement('form');\n    commentForm.id = 'popup-comments-form';\n    commentForm.action = 'post';\n    commentForm.innerHTML = \"<label class=\\\"form-label\\\" for=\\\"name\\\">Name</label>\\n  <input id=\\\"input-name\\\" class=\\\"form-input\\\" type=\\\"text\\\" placeholder=\\\"Your Name...\\\" required>\\n  <label class=\\\"form-label\\\" for=\\\"comment\\\">Comment</label>\\n  <textarea id=\\\"input-comment\\\" class=\\\"form-input\\\" type=\\\"text\\\" placeholder=\\\"Your Insights...\\\" rows=\\\"3\\\" required></textarea>\\n  <label class=\\\"form-label\\\" for=\\\"submitbtn\\\">Submit</label>      \\n  <button id=\\\"submitbtn\\\" class=\\\"form-input button-style formsubmit-btn\\\" type=\\\"submit\\\">Comment</button>\";\n    commentForm.onsubmit = function (event) {\n        event.preventDefault();\n        var parent = commentForm.parentNode;\n        getInputFromForm(parent.dataset.episodeId);\n        commentForm.reset();\n    };\n    popup.appendChild(closeButton);\n    popup.appendChild(mainImg);\n    popup.appendChild(epiHeader);\n    popup.appendChild(epiDetailsWrapper);\n    popup.appendChild(commentsHeader);\n    popup.appendChild(commentsContainer);\n    popup.appendChild(formHeader);\n    popup.appendChild(commentForm);\n    popupWrapper.appendChild(popup);\n    document.body.appendChild(popupWrapper);\n    document.body.style.overflow = 'hidden';\n};\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/DOMfunctions.ts?");

/***/ }),

/***/ "./src/modules/commentsCounter.ts":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countComments = function () {\n    var counterElement = document.querySelector('.comments-count');\n    var commentContainer = document.querySelector('.popup-comments-container');\n    var comments = commentContainer.childNodes;\n    var count = 0;\n    comments.forEach(function () {\n        count += 1;\n    });\n    counterElement.textContent = \"(\".concat(count, \")\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/commentsCounter.ts?");

/***/ }),

/***/ "./src/modules/episodeCounter.ts":
/*!***************************************!*\
  !*** ./src/modules/episodeCounter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countEpisodes = function (counterElement) {\n    var homepage = document.querySelector('.home-page');\n    counterElement.textContent = \"(\".concat(homepage.childNodes.length, \")\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countEpisodes);\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/episodeCounter.ts?");

/***/ }),

/***/ "./src/modules/homepage.ts":
/*!*********************************!*\
  !*** ./src/modules/homepage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSeasonList\": () => (/* binding */ createSeasonList),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n// eslint-disable-next-line\nvar createSeasonList = function (episodeDetails) {\n    var homePage = document.querySelector('.home-page');\n    while (homePage.lastChild) {\n        homePage.removeChild(homePage.lastChild);\n    }\n    episodeDetails.forEach(function (episodeDetail) {\n        var episodeTile = document.createElement('div');\n        episodeTile.classList.add('episode-tile');\n        episodeTile.id = episodeDetail.id;\n        episodeTile.dataset.episodeId = episodeDetail.id;\n        episodeTile.innerHTML = \"\\n    <img class=\\\"episode-image\\\" src=\\\"\".concat(episodeDetail.image.medium, \"\\\" alt=\\\"episode image\\\">\\n    <div class=\\\"header-wrapper\\\">\\n    <h3 class=\\\"episode-name\\\">\").concat(episodeDetail.name, \"</h3>\\n    <div class=\\\"likes-wrapper\\\">\\n    <p><i class=\\\"fa fa-heart\\\" id=\\\"heart-button\\\" data-episode-Id=\").concat(episodeDetail.id, \"></i></p>\\n    <p class=\\\"likes-text\\\">Likes:<span class=\\\"likes-counter\\\">(0)</span></p>\\n    </div>\\n    </div>\\n    <button class=\\\"button-style\\\" id=\\\"main-comment-popup\\\" type=\\\"button\\\">Comments</button>\");\n        homePage.appendChild(episodeTile);\n    });\n};\nvar displayLikes = function (likes) {\n    likes.forEach(function (like) {\n        var tile = document.getElementById(like.item_id);\n        if (tile !== null) {\n            var likeCounter = tile.querySelector('.likes-counter');\n            likeCounter.textContent = \"(\".concat(like.likes, \")\");\n        }\n    });\n};\n\n\n//# sourceURL=webpack://capstone-2-fansite/./src/modules/homepage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;