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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\n  box-sizing: border-box; }\\n\\nhtml, body {\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Bungee', cursive;\\n  color: #816C53;\\n  background: #ffe9ce; }\\n\\nh1 {\\n  font-size: 70px;\\n  margin: 0; }\\n\\n.resource {\\n  display: none; }\\n\\n.app {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 100vw;\\n  height: 100vh; }\\n\\n.container {\\n  position: relative;\\n  padding-left: 30px;\\n  padding-right: 30px;\\n  width: 100%;\\n  height: 100%;\\n  flex-grow: 1;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n\\n.canvas-container {\\n  position: relative;\\n  display: flex;\\n  width: 100%;\\n  max-width: 700px; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ \"./src/js/main.js\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_1__);\n// Load the javascript main\n // Load the SASS main\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/app */ \"./src/js/module/app.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  Object(_module_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/AnimateBehaviour.js":
/*!*******************************************!*\
  !*** ./src/js/module/AnimateBehaviour.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AnimateBehaviour; });\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameState */ \"./src/js/module/GameState.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/js/module/helpers.js\");\n\n\nclass AnimateBehaviour {\n  /**\r\n   * @param {GameState} gameState\r\n   */\n  constructor(gameState) {\n    this.gameState = gameState;\n  }\n\n  mount() {\n    this.gameState.addOnFrameListener(this.frame.bind(this));\n  }\n\n  frame() {\n    let grid = this.gameState.gameGrid;\n\n    for (let i = 0; i < grid.width; i++) {\n      for (let j = 0; j < grid.height; j++) {\n        let tile = grid.getTile(i, j);\n        if (tile === null) continue;\n        if (tile === this.gameState.draggingTile) continue;\n\n        if (tile.offsetX != 0) {\n          tile.offsetX = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"lerp\"])(tile.offsetX, 0, 0.1);\n          this.gameState.change();\n        }\n\n        if (tile.offsetY != 0) {\n          tile.offsetY = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"lerp\"])(tile.offsetY, 0, 0.1);\n          this.gameState.change();\n        }\n\n        if (Math.abs(tile.offsetX) < 1) tile.offsetX = 0;\n        if (Math.abs(tile.offsetY) < 1) tile.offsetY = 0;\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/module/AnimateBehaviour.js?");

/***/ }),

/***/ "./src/js/module/DragBehaviour.js":
/*!****************************************!*\
  !*** ./src/js/module/DragBehaviour.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DragBehaviour; });\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameState */ \"./src/js/module/GameState.js\");\n/* harmony import */ var _GameTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameTile */ \"./src/js/module/GameTile.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/js/module/helpers.js\");\n\n\n\nclass DragBehaviour {\n  /**\r\n   * @param {HTMLCanvasElement} canvas \r\n   * @param {GameState} gameState\r\n   */\n  constructor(canvas, gameState) {\n    this.canvas = canvas;\n    this.gameState = gameState;\n    this.dragStart = {\n      x: 0,\n      y: 0\n    };\n    this.tileIndex = {\n      x: 0,\n      y: 0\n    };\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  startDrag(x, y) {\n    let i = Math.floor(x / this.gameState.width * this.gameState.gameGrid.width);\n    let j = Math.floor(y / this.gameState.height * this.gameState.gameGrid.height);\n    this.dragStart.x = x;\n    this.dragStart.y = y;\n    this.tileIndex.x = i;\n    this.tileIndex.y = j;\n    this.gameState.draggingTile = this.gameState.gameGrid.tiles[i + j * this.gameState.gameGrid.width];\n    this.gameState.change();\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  moveDrag(x, y) {\n    if (!this.isDragging) return;\n    let ts = this.gameState.width / this.gameState.gameGrid.width;\n    console.log(\"x, y: \" + x + \", \", y);\n    let minX = -ts;\n    let minY = -ts;\n    let maxX = ts;\n    let maxY = ts; // Checking constraints\n\n    if (!this.gameState.gameGrid.isEmpty(this.tileIndex.x - 1, this.tileIndex.y)) minX = 0;\n    if (!this.gameState.gameGrid.isEmpty(this.tileIndex.x + 1, this.tileIndex.y)) maxX = 0;\n    if (!this.gameState.gameGrid.isEmpty(this.tileIndex.x, this.tileIndex.y - 1)) minY = 0;\n    if (!this.gameState.gameGrid.isEmpty(this.tileIndex.x, this.tileIndex.y + 1)) maxY = 0;\n    let newX = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"clamp\"])(x - this.dragStart.x, minX, maxX);\n    let newY = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[\"clamp\"])(y - this.dragStart.y, minY, maxY); // Eliminiate the weaker axis\n\n    if (Math.abs(newX) > Math.abs(newY)) newY = 0;\n    if (Math.abs(newY) > Math.abs(newX)) newX = 0;\n    this.gameState.draggingTile.offsetX = newX;\n    this.gameState.draggingTile.offsetY = newY;\n    let recalculate = false;\n\n    if (newX < -ts / 2) {\n      this.gameState.gameGrid.moveLeft(this.tileIndex.x, this.tileIndex.y);\n      this.dragStart.x -= ts;\n      this.gameState.draggingTile.offsetX += ts;\n      this.tileIndex.x--;\n      recalculate = true;\n    }\n\n    if (newX > ts / 2) {\n      this.gameState.gameGrid.moveRight(this.tileIndex.x, this.tileIndex.y);\n      this.dragStart.x += ts;\n      this.gameState.draggingTile.offsetX -= ts;\n      this.tileIndex.x++;\n      recalculate = true;\n    }\n\n    if (newY < -ts / 2) {\n      this.gameState.gameGrid.moveUp(this.tileIndex.x, this.tileIndex.y);\n      this.dragStart.y -= ts;\n      this.gameState.draggingTile.offsetY += ts;\n      this.tileIndex.y--;\n      recalculate = true;\n    }\n\n    if (newY > ts / 2) {\n      this.gameState.gameGrid.moveDown(this.tileIndex.x, this.tileIndex.y);\n      this.dragStart.y += ts;\n      this.gameState.draggingTile.offsetY -= ts;\n      this.tileIndex.y++;\n      recalculate = true;\n    }\n\n    if (recalculate) {// this.endDrag(x, y);\n    }\n\n    this.gameState.change();\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  endDrag(x, y) {\n    this.gameState.draggingTile = null;\n    this.gameState.change();\n  }\n\n  mount() {\n    this.mouseDownListener = e => this.startDrag(e.offsetX, e.offsetY);\n\n    this.mouseUpListener = e => this.endDrag(e.offsetX, e.offsetY);\n\n    this.mouseMoveListener = e => this.moveDrag(e.offsetX, e.offsetY);\n\n    this.mouseLeaveListener = e => this.endDrag(e.offsetX, e.offsetY);\n    /** \r\n     * @param {TouchEvent} e\r\n     */\n\n\n    this.touchStart = e => {\n      let touch = e.changedTouches[0];\n      console.dir(this.canvas);\n      this.startDrag(touch.clientX - this.canvas.parentElement.offsetLeft, touch.clientY - this.canvas.parentElement.offsetTop);\n      e.preventDefault();\n    };\n    /** \r\n     * @param {TouchEvent} e\r\n     */\n\n\n    this.touchMove = e => {\n      let touch = e.changedTouches[0];\n      this.moveDrag(touch.clientX - this.canvas.parentElement.offsetLeft, touch.clientY - this.canvas.parentElement.offsetTop);\n      e.preventDefault();\n    };\n    /** \r\n     * @param {TouchEvent} e\r\n     */\n\n\n    this.touchEnd = e => {\n      let touch = e.changedTouches[0];\n      this.endDrag(touch.clientX - this.canvas.parentElement.offsetLeft, touch.clientY - this.canvas.parentElement.offsetTop);\n      e.preventDefault();\n    };\n\n    this.canvas.addEventListener(\"mousedown\", this.mouseDownListener);\n    this.canvas.addEventListener(\"mouseup\", this.mouseUpListener);\n    this.canvas.addEventListener(\"mousemove\", this.mouseMoveListener);\n    this.canvas.addEventListener(\"mouseleave\", this.mouseLeaveListener);\n    this.canvas.addEventListener(\"touchstart\", this.touchStart);\n    this.canvas.addEventListener(\"touchmove\", this.touchMove);\n    this.canvas.addEventListener(\"touchend\", this.touchEnd);\n    this.canvas.addEventListener(\"touchcancel\", this.touchEnd);\n  }\n\n  unmount() {\n    this.canvas.removeEventListener(\"mousedown\", this.mouseDownListener);\n    this.canvas.removeEventListener(\"mouseup\", this.mouseUpListener);\n    this.canvas.removeEventListener(\"mousemove\", this.mouseMoveListener);\n    this.canvas.removeEventListener(\"mouseleave\", this.mouseLeaveListener);\n  }\n  /** @returns {boolean} */\n\n\n  get isDragging() {\n    return this.gameState.draggingTile !== null;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/module/DragBehaviour.js?");

/***/ }),

/***/ "./src/js/module/GameGrid.js":
/*!***********************************!*\
  !*** ./src/js/module/GameGrid.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameGrid; });\n/* harmony import */ var _GameTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameTile */ \"./src/js/module/GameTile.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/js/module/helpers.js\");\n\n\nclass GameGrid {\n  constructor() {\n    this.width = 4;\n    this.height = 4;\n    /** @type {GameTile[]} */\n\n    this.tiles = [];\n\n    for (let i = 0; i < this.width * this.height; i++) {\n      let tile = new _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"choose\"])(_GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].empty, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].forward, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].left, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].right, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].rightTop, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].leftTop, _GameTile__WEBPACK_IMPORTED_MODULE_0__[\"GameTileTypes\"].horizontal));\n      if (Math.random() < 0.2) tile = null;\n      this.tiles.push(tile);\n    }\n\n    this.tiles[0] = null;\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @param {number} x2 \r\n   * @param {number} y2 \r\n   */\n\n\n  swapTiles(x, y, x2, y2) {\n    let tile1 = this.getTile(x, y);\n    let tile2 = this.getTile(x2, y2);\n    this.setTile(x, y, tile2);\n    this.setTile(x2, y2, tile1);\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  moveUp(x, y) {\n    this.swapTiles(x, y, x, y - 1);\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  moveDown(x, y) {\n    this.swapTiles(x, y, x, y + 1);\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  moveLeft(x, y) {\n    this.swapTiles(x - 1, y, x, y);\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   */\n\n\n  moveRight(x, y) {\n    this.swapTiles(x + 1, y, x, y);\n  }\n  /**\r\n   * \r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @returns {GameTile}\r\n   */\n\n\n  getTile(x, y) {\n    return this.tiles[x + y * this.width];\n  }\n  /**\r\n   * \r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @param {GameTile} tile\r\n   */\n\n\n  setTile(x, y, tile) {\n    this.tiles[x + y * this.width] = tile;\n  }\n  /**\r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @returns {boolean}\r\n   */\n\n\n  isEmpty(x, y) {\n    if (x < 0) return false;\n    if (x >= this.width) return false;\n    if (y < 0) return false;\n    if (y >= this.height) return false;\n    return this.getTile(x, y) == null;\n  }\n  /**\r\n   * \r\n   * @param {CanvasRenderingContext2D} context \r\n   * @param {number} w \r\n   * @param {number} h \r\n   */\n\n\n  draw(context, w, h) {\n    let tileW = w / this.width;\n    let tileH = h / this.height;\n\n    for (let i = 0; i < this.width; i++) {\n      for (let j = 0; j < this.height; j++) {\n        let tile = this.tiles[i + j * this.width];\n        if (tile === null) continue;\n        const offset = 8;\n        tile.draw(context, i * tileW + offset, j * tileH + offset, tileW - offset, tileH - offset);\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/module/GameGrid.js?");

/***/ }),

/***/ "./src/js/module/GameState.js":
/*!************************************!*\
  !*** ./src/js/module/GameState.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameState; });\n/* harmony import */ var _GameGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameGrid */ \"./src/js/module/GameGrid.js\");\n/* harmony import */ var _GameTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameTile */ \"./src/js/module/GameTile.js\");\n\n\nclass GameState {\n  constructor(width, height) {\n    this.gameGrid = new _GameGrid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    /** @type {GameTile} */\n\n    this.draggingTile = null;\n    this.width = width;\n    this.height = height;\n    /** @type {CanvasRenderingContext2D} */\n\n    this.context = null;\n    this.changed = true;\n    this.listeners = [];\n  }\n\n  frame() {\n    this.listeners.forEach(listener => listener());\n\n    if (!this.changed) {\n      return;\n    }\n\n    this.context.clearRect(0, 0, canvas.width, canvas.height);\n    this.gameGrid.draw(this.context, this.width, this.height);\n    this.changed = false;\n  }\n\n  change() {\n    this.changed = true;\n  }\n\n  addOnFrameListener(listener) {\n    this.listeners.push(listener);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/module/GameState.js?");

/***/ }),

/***/ "./src/js/module/GameTile.js":
/*!***********************************!*\
  !*** ./src/js/module/GameTile.js ***!
  \***********************************/
/*! exports provided: GameTileType, GameTileTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameTileType\", function() { return GameTileType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameTileTypes\", function() { return GameTileTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameTile; });\nclass GameTileType {\n  constructor(resource) {\n    this.resource = resource;\n  }\n\n}\nconst GameTileTypes = {\n  empty: new GameTileType(\"#resource-tile-empty\"),\n  forward: new GameTileType(\"#resource-tile-forward\"),\n  left: new GameTileType(\"#resource-tile-left\"),\n  right: new GameTileType(\"#resource-tile-right\"),\n  leftTop: new GameTileType(\"#resource-tile-left-top\"),\n  rightTop: new GameTileType(\"#resource-tile-right-top\"),\n  horizontal: new GameTileType(\"#resource-tile-horizontal\")\n};\nclass GameTile {\n  /**\r\n   * @param {GameTileType} type \r\n   */\n  constructor(type) {\n    this.offsetX = 0;\n    this.offsetY = 0;\n    this.type = type;\n    this.image = document.querySelector(this.type.resource);\n  }\n  /**\r\n   * \r\n   * @param {CanvasRenderingContext2D} context \r\n   * @param {number} x \r\n   * @param {number} y \r\n   * @param {number} width \r\n   * @param {number} height \r\n   */\n\n\n  draw(context, x, y, width, height) {\n    context.drawImage(this.image, x + this.offsetX, y + this.offsetY, width, height);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/module/GameTile.js?");

/***/ }),

/***/ "./src/js/module/app.js":
/*!******************************!*\
  !*** ./src/js/module/app.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initApp; });\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameState */ \"./src/js/module/GameState.js\");\n/* harmony import */ var _DragBehaviour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragBehaviour */ \"./src/js/module/DragBehaviour.js\");\n/* harmony import */ var _AnimateBehaviour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimateBehaviour */ \"./src/js/module/AnimateBehaviour.js\");\n\n\n\nfunction initApp() {\n  /** @type {HTMLCanvasElement} */\n  let canvas = document.querySelector(\"#canvas\");\n  canvas.width = canvas.parentElement.offsetWidth;\n  canvas.height = canvas.parentElement.offsetWidth;\n  let gameState = new _GameState__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas.width, canvas.height);\n  let context = canvas.getContext(\"2d\");\n  gameState.context = context;\n  let drag = new _DragBehaviour__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, gameState);\n  let animate = new _AnimateBehaviour__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameState);\n  drag.mount();\n  animate.mount();\n\n  let frame = () => {\n    requestAnimationFrame(frame);\n    gameState.frame();\n  };\n\n  requestAnimationFrame(frame);\n  setTimeout(() => {\n    gameState.change();\n  }, 500);\n}\n\n//# sourceURL=webpack:///./src/js/module/app.js?");

/***/ }),

/***/ "./src/js/module/helpers.js":
/*!**********************************!*\
  !*** ./src/js/module/helpers.js ***!
  \**********************************/
/*! exports provided: clamp, choose, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clamp\", function() { return clamp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"choose\", function() { return choose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerp\", function() { return lerp; });\n/**\r\n * @param {number} value \r\n * @param {number} min \r\n * @param {number} max \r\n */\nfunction clamp(value, min, max) {\n  if (value < min) return min;\n  if (value > max) return max;\n  return value;\n}\nfunction choose() {\n  if (arguments.length === 0) return;\n  let i = Math.floor(Math.random() * arguments.length);\n  return arguments[i];\n}\n/**\r\n * \r\n * @param {number} a \r\n * @param {number} b \r\n * @param {number} f \r\n */\n\nfunction lerp(a, b, f) {\n  return a + (b - a) * f;\n}\n\n//# sourceURL=webpack:///./src/js/module/helpers.js?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/scss/app.scss?");

/***/ })

/******/ });