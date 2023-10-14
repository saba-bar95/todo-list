/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);





const body = document.querySelector("body");

body.appendChild((0,_header_header__WEBPACK_IMPORTED_MODULE_1__.header)());
body.appendChild((0,_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebar)());
body.appendChild((0,_content_content__WEBPACK_IMPORTED_MODULE_3__.content)());




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  min-height: 100vh;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,iBAAiB;AACnB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  min-height: 100vh;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _src_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);






function header() {
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "header-div");

  const menuIcon = new Image();
  menuIcon.classList.add("header-icon", "menu-icon");
  menuIcon.src = _src_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__;

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Todo List";

  const headerRightSide = document.createElement("div");
  headerRightSide.classList.add("header-rightside");
  headerRightSide.appendChild(menuIcon);
  headerRightSide.appendChild(headerText);

  const plusIcon = new Image();
  plusIcon.classList.add("header-icon", "plus-icon");
  plusIcon.src = _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__;

  headerDiv.appendChild(headerRightSide);
  headerDiv.appendChild(plusIcon);

  menuIcon.addEventListener("click", function () {
    _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.sidebarDiv.classList.toggle("hidden");

    if (_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.sidebarDiv.classList.contains("hidden"))
      _content_content__WEBPACK_IMPORTED_MODULE_4__.contentDiv.style.gridColumn = "1/-1";
    else _content_content__WEBPACK_IMPORTED_MODULE_4__.contentDiv.style.gridColumn = "2/-1";
  });

  return headerDiv;
}


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(15), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "MondayRain";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#header-div {
  background-color: #ffb766;
  grid-column: 1/-1;
  padding: 30px;
  display: flex;
  justify-content: space-between;
}

#header-div .header-rightside {
  display: flex;
  gap: 15px;
}

#header-div .header-icon {
  width: 30px;
}

#header-div .header-icon:hover {
  cursor: pointer;
}

#header-div .header-text {
  font-family: "MondayRain";
  color: #475569;
  letter-spacing: 0.05em;
}
`, "",{"version":3,"sources":["webpack://./src/header/header.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAA0D;AAC5D;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"MondayRain\";\n  src: url(/src/fonts/monday-rain-font/MondayRain-MVn8r.ttf);\n}\n\n#header-div {\n  background-color: #ffb766;\n  grid-column: 1/-1;\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n#header-div .header-rightside {\n  display: flex;\n  gap: 15px;\n}\n\n#header-div .header-icon {\n  width: 30px;\n}\n\n#header-div .header-icon:hover {\n  cursor: pointer;\n}\n\n#header-div .header-text {\n  font-family: \"MondayRain\";\n  color: #475569;\n  letter-spacing: 0.05em;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d0b6b1c16c3edf86b4b.ttf";

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectItem: () => (/* binding */ createProjectItem),
/* harmony export */   navItemDivs: () => (/* binding */ navItemDivs),
/* harmony export */   projectItems: () => (/* binding */ projectItems),
/* harmony export */   sidebar: () => (/* binding */ sidebar),
/* harmony export */   sidebarDiv: () => (/* binding */ sidebarDiv)
/* harmony export */ });
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _src_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _src_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _newproject_newProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _deleteproject_deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);








let sidebarDiv;
let leftIcon;
let plusIcon;
let createProjectItem;
let navItemDivs = [];
let projectItems;

function sidebar() {
  sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar-div");

  const nav = document.createElement("ul");
  nav.classList.add("sidebar-nav");

  const navItems = ["inbox", "today", "projects"];

  navItems.forEach((el) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item", `nav-item-${el}`);
    navItem.textContent = el;
    nav.appendChild(navItem);

    if (el === "projects") {
      const rightSide = document.createElement("div");
      rightSide.classList.add("projects-rightside");
      navItem.appendChild(rightSide);

      leftIcon = new Image();
      leftIcon.src = _src_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__;
      leftIcon.classList.add("sidebar-icon", "left-icon");
      leftIcon.setAttribute("title", "Collapse Projects");
      rightSide.appendChild(leftIcon);

      plusIcon = new Image();
      plusIcon.src = _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__;
      plusIcon.classList.add("sidebar-icon", "plus-icon");
      plusIcon.setAttribute("title", "Add new project");
      rightSide.appendChild(plusIcon);
    }

    navItemDivs.push(navItem);
  });

  const projectContainer = document.createElement("ul");
  projectContainer.classList.add("projects-container");

  projectItems = ["work", "home", "gym"];

  createProjectItem = function (el) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("nav-item", "project-item", `project-item-${el}`);
    projectItem.textContent = el;
    projectContainer.appendChild(projectItem);
    navItemDivs.push(projectItem);

    const deleteIcon = new Image();
    deleteIcon.src = _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__;
    deleteIcon.classList.add("sidebar-icon", "hidden");
    deleteIcon.style.float = "right";
    projectItem.appendChild(deleteIcon);

    projectItem.addEventListener("mouseenter", function () {
      deleteIcon.classList.toggle("hidden");
    });

    projectItem.addEventListener("mouseleave", function () {
      deleteIcon.classList.toggle("hidden");
    });

    deleteIcon.addEventListener("click", function () {
      (0,_deleteproject_deleteProject__WEBPACK_IMPORTED_MODULE_6__["default"])(deleteIcon);
    });
  };

  projectItems.forEach((el) => {
    createProjectItem(el);
  });

  leftIcon.addEventListener("click", function () {
    projectContainer.classList.toggle("hidden");
    if (projectContainer.classList.contains("hidden")) {
      leftIcon.src = _src_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__;
      leftIcon.setAttribute("title", "Expand Projects");
    } else {
      leftIcon.setAttribute("title", "Collapse Projects");
      leftIcon.src = _src_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__;
    }
  });

  plusIcon.addEventListener("click", function () {
    (0,_newproject_newProject__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });

  sidebarDiv.appendChild(nav);
  sidebarDiv.appendChild(projectContainer);

  return sidebarDiv;
}






/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(21), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Frenstyle";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#sidebar-div {
  grid-column: 1/1;
  grid-row: 2/-1;
  background-color: #f1f5f9;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#sidebar-div .sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#sidebar-div .nav-item {
  text-transform: capitalize;
  list-style: none;
  font-family: "Frenstyle", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #404040;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 2px;
}

#sidebar-div .nav-item:hover {
  translate: 3px;
  background-color: #ffb766;
  cursor: pointer;
}

#sidebar-div .selected {
  background-color: #ffb766;
}

#sidebar-div .nav-item-projects {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#sidebar-div .sidebar-icon {
  width: 25px;
}

#sidebar-div .projects-rightside {
  display: flex;
}

#sidebar-div .projects-container {
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#sidebar-div .project-item {
  list-style: initial;
  color: #475569;
}

#sidebar-div .sidebar-icon:hover {
  cursor: pointer;
}

#sidebar-div .hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/sidebar/sidebar.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8D;AAChE;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB;;cAEY;EACZ,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n#sidebar-div {\n  grid-column: 1/1;\n  grid-row: 2/-1;\n  background-color: #f1f5f9;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .nav-item {\n  text-transform: capitalize;\n  list-style: none;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  color: #404040;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  padding: 2px;\n}\n\n#sidebar-div .nav-item:hover {\n  translate: 3px;\n  background-color: #ffb766;\n  cursor: pointer;\n}\n\n#sidebar-div .selected {\n  background-color: #ffb766;\n}\n\n#sidebar-div .nav-item-projects {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#sidebar-div .sidebar-icon {\n  width: 25px;\n}\n\n#sidebar-div .projects-rightside {\n  display: flex;\n}\n\n#sidebar-div .projects-container {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .project-item {\n  list-style: initial;\n  color: #475569;\n}\n\n#sidebar-div .sidebar-icon:hover {\n  cursor: pointer;\n}\n\n#sidebar-div .hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8a9e512c57d2818c87f.otf";

/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36bec1667db89cdb26a7.svg";

/***/ }),
/* 23 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8840d99d8e9a90e337c9.svg";

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _newProject_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _content_createContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);






function newProject() {
  ___WEBPACK_IMPORTED_MODULE_1__.body.style.overflow = "hidden";
  const newProjectDiv = document.createElement("div");
  newProjectDiv.setAttribute("id", "new-project");

  const newProjectContainer = document.createElement("div");
  newProjectContainer.classList.add("new-project-container");
  newProjectDiv.appendChild(newProjectContainer);

  const newProjectHeader = document.createElement("h1");
  newProjectHeader.classList.add("new-project-header");
  newProjectHeader.textContent = "Add new project";
  newProjectContainer.appendChild(newProjectHeader);

  const newProjectLabel = document.createElement("label");
  newProjectLabel.textContent = "name";
  newProjectLabel.setAttribute("for", "project-name");
  newProjectContainer.appendChild(newProjectLabel);

  const labelSpan = document.createElement("span");
  labelSpan.textContent = "*";
  newProjectLabel.appendChild(labelSpan);

  const newProjectName = document.createElement("input");
  newProjectName.setAttribute("type", "text");
  newProjectName.setAttribute("id", "project-name");
  newProjectName.setAttribute("autocomplete", "off");
  newProjectName.setAttribute("required", "");
  newProjectContainer.appendChild(newProjectName);

  const addNewProjectBtn = document.createElement("button");
  addNewProjectBtn.textContent = "Add project";
  addNewProjectBtn.classList.add("newproject-btn");
  newProjectContainer.appendChild(addNewProjectBtn);

  function checkElement(element, array) {
    return array.some(function (item) {
      return item.toLowerCase() === element.toLowerCase();
    });
  }

  addNewProjectBtn.addEventListener("click", function () {
    if (checkElement(newProjectName.value, _sidebar__WEBPACK_IMPORTED_MODULE_2__.projectItems)) {
      alert("This project already exist");
      newProjectName.value = "";
      return;
    }

    if (newProjectName.validity.valid) {
      (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.createProjectItem)(newProjectName.value);
      _sidebar__WEBPACK_IMPORTED_MODULE_2__.projectItems.push(newProjectName.value);
      newProjectDiv.remove();
      document.querySelector(
        ".projects-qty"
      ).textContent = `${_sidebar__WEBPACK_IMPORTED_MODULE_2__.projectItems.length} projets `;

      (0,_content_createContent__WEBPACK_IMPORTED_MODULE_3__.createContentProjectItem)(
        newProjectName.value,
        document.querySelector(".content-projects-container")
      );
    }

    if (!newProjectName.validity.valid) alert("Enter project name, please");
  });

  newProjectDiv.addEventListener("click", function (e) {
    if (!e.target.closest(".new-project-container")) newProjectDiv.remove();
  });

  ___WEBPACK_IMPORTED_MODULE_1__.body.appendChild(newProjectDiv);
}


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_newProject_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_newProject_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_newProject_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_newProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_newProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 27 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(28), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Fontspring";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#new-project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#new-project .new-project-container {
  padding: 30px;
  width: 50%;
  height: 40%;
  background-color: aliceblue;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#new-project .new-project-header {
  font-family: "Fontspring";
  text-align: center;
  font-size: 1.7em;
  color: #475569;
  border-bottom: 1px solid #a1a1aa;
  padding-bottom: 10px;
}

#new-project label {
  font-family: "Fontspring";
  font-size: 1.2em;
  color: #475569;
  text-transform: uppercase;
}

#new-project span {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: red;
  font-weight: 700;
  margin-left: 5px;
}

#new-project input {
  width: 70%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #a1a1aa;
}

#new-project .newproject-btn {
  padding: 10px 20px;
  background-color: #475569;
  align-self: start;
  border: none;
  border-radius: 20%;
  font-family: "Fontspring";
  font-size: 1em;
  color: #e4e4e7;
}

#new-project .newproject-btn:hover {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/sidebar/newproject/newProject.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAwF;AAC1F;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,UAAU;EACV,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,6EAA6E;EAC7E,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: \"Fontspring\";\n  src: url(/src/fonts/fontspring/Fontspring-DEMO-oktah_regular_italic-BF651105f83b382.otf);\n}\n\n#new-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#new-project .new-project-container {\n  padding: 30px;\n  width: 50%;\n  height: 40%;\n  background-color: aliceblue;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 4%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#new-project .new-project-header {\n  font-family: \"Fontspring\";\n  text-align: center;\n  font-size: 1.7em;\n  color: #475569;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 10px;\n}\n\n#new-project label {\n  font-family: \"Fontspring\";\n  font-size: 1.2em;\n  color: #475569;\n  text-transform: uppercase;\n}\n\n#new-project span {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  color: red;\n  font-weight: 700;\n  margin-left: 5px;\n}\n\n#new-project input {\n  width: 70%;\n  padding: 5px;\n  border-radius: 3px;\n  border: 1px solid #a1a1aa;\n}\n\n#new-project .newproject-btn {\n  padding: 10px 20px;\n  background-color: #475569;\n  align-self: start;\n  border: none;\n  border-radius: 20%;\n  font-family: \"Fontspring\";\n  font-size: 1em;\n  color: #e4e4e7;\n}\n\n#new-project .newproject-btn:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08a94357365c4bbddb2e.otf";

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContent: () => (/* binding */ createContent),
/* harmony export */   createContentProjectItem: () => (/* binding */ createContentProjectItem)
/* harmony export */ });
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);





const createContentProjectItem = function (item, projectsContainer) {
  const projectItem = document.createElement("li");
  projectItem.classList.add("content-project-item", `project-item-${item}`);
  projectItem.textContent = item;
  projectsContainer.appendChild(projectItem);

  projectItem.addEventListener("click", function () {
    document.querySelectorAll(".project-item").forEach((el) => {
      if (el.classList.contains(`project-item-${projectItem.textContent}`))
        createContent(el);
    });
  });
};

function createContent(item) {
  let projecstsQty;
  if (item.classList.contains("sidebar-icon")) return;

  if (item.closest(".nav-item")) {
    _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.navItemDivs.forEach((el) => {
      el.classList.remove("selected");
    });

    _content__WEBPACK_IMPORTED_MODULE_1__.contents.forEach((el) => {
      if (el.classList.contains(`content-${item.textContent}`))
        el.classList.remove("hidden");
      else el.classList.add("hidden");
    });

    if (item.classList.contains("nav-item-projects")) {
      if (document.querySelector(".projects-qty")) {
        document.querySelector(
          ".projects-qty"
        ).textContent = `${_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.projectItems.length} projects`;
      }
    }

    item.closest(".nav-item").classList.add("selected");
    if (item.closest(".nav-item").classList.contains("created")) return;
    item.closest(".nav-item").classList.add("created");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add(
      "content-container",
      `content-${item.textContent}`
    );
    _content__WEBPACK_IMPORTED_MODULE_1__.contentDiv.appendChild(contentContainer);
    _content__WEBPACK_IMPORTED_MODULE_1__.contents.push(contentContainer);

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.textContent = item.textContent;
    contentContainer.appendChild(contentHeader);

    if (item.classList.contains("nav-item-projects")) {
      projecstsQty = document.createElement("div");
      projecstsQty.textContent = `${_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.projectItems.length} projects `;
      projecstsQty.classList.add("projects-qty");
      contentContainer.appendChild(projecstsQty);

      const projectsContainer = document.createElement("ul");
      projectsContainer.classList.add("content-projects-container");
      contentContainer.appendChild(projectsContainer);

      _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.projectItems.forEach((item) => {
        createContentProjectItem(item, projectsContainer);
      });

      return;
    }

    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("add-task-div");
    contentContainer.appendChild(addTaskDiv);

    const plusIcon = new Image();
    plusIcon.src = _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__;
    plusIcon.classList.add("content-icon", "plus-icon");
    addTaskDiv.appendChild(plusIcon);

    const addTaskText = document.createElement("p");
    addTaskText.classList.add("add-task-text");
    addTaskText.textContent = "Add task";
    addTaskDiv.appendChild(addTaskText);
  }
}




/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   contentDiv: () => (/* binding */ contentDiv),
/* harmony export */   contents: () => (/* binding */ contents)
/* harmony export */ });
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _createContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);




let contentDiv;
let contents = [];

function content() {
  contentDiv = document.createElement("div");
  contentDiv.setAttribute("id", "content-div");

  (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(document.querySelector(".nav-item-projects"));

  _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarDiv.addEventListener("click", function (e) {
    (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(e.target);
  });

  return contentDiv;
}





/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 32 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(21), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(33), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Frenstyle";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "Matcha-Serif";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#content-div {
  grid-column: 2/-1;
  grid-row: 2/-1;
  background-color: #fafafa;
  padding: 30px;
}

#content-div .hidden {
  display: none !important;
}

#content-div .content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#content-div .content-header {
  width: 50%;
  color: #020617;
  letter-spacing: 0.07em;
  font-size: 1.2em;
  font-family: "Frenstyle", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  text-transform: capitalize;
  text-align: center;
  border-bottom: 1px solid #a1a1aa;
  padding-bottom: 20px;
}

#content-div .content-icon {
  width: 25px;
}

#content-div .add-task-div {
  display: flex;
  gap: 20px;
  align-items: center;
}

#content-div .add-task-text {
  font-family: "Frenstyle", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.9em;
  opacity: 0.5;
}

#content-div .add-task-div:hover .add-task-text {
  opacity: 1;
  color: #dc2626;
}

#content-div .add-task-div:hover {
  cursor: pointer;
}

#content-div .projects-qty {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1.2em;
}

#content-div .content-projects-container {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#content-div .content-project-item {
  text-transform: capitalize;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1em;
}

#content-div .content-project-item:hover {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/content/content.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8D;AAChE;;AAEA;EACE,2BAA2B;EAC3B,4CAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB;;cAEY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE;;cAEY;EACZ,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;sDACoD;EACpD,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B;sDACoD;EACpD,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n@font-face {\n  font-family: \"Matcha-Serif\";\n  src: url(\"/src/fonts/matcha-serif/matchaserif-regular.otf\");\n}\n\n#content-div {\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  background-color: #fafafa;\n  padding: 30px;\n}\n\n#content-div .hidden {\n  display: none !important;\n}\n\n#content-div .content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .content-header {\n  width: 50%;\n  color: #020617;\n  letter-spacing: 0.07em;\n  font-size: 1.2em;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 20px;\n}\n\n#content-div .content-icon {\n  width: 25px;\n}\n\n#content-div .add-task-div {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n#content-div .add-task-text {\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 0.9em;\n  opacity: 0.5;\n}\n\n#content-div .add-task-div:hover .add-task-text {\n  opacity: 1;\n  color: #dc2626;\n}\n\n#content-div .add-task-div:hover {\n  cursor: pointer;\n}\n\n#content-div .projects-qty {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1.2em;\n}\n\n#content-div .content-projects-container {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .content-project-item {\n  text-transform: capitalize;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1em;\n}\n\n#content-div .content-project-item:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "528649809963e83594ff.otf";

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _deleteProject_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _content_createContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _content_deleteContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);






function deleteProject(deleteIcon) {
  ___WEBPACK_IMPORTED_MODULE_1__.body.style.overflow = "hidden";

  const deleteProject = document.createElement("div");
  deleteProject.setAttribute("id", "delete-project");
  ___WEBPACK_IMPORTED_MODULE_1__.body.appendChild(deleteProject);

  const deleteProjectContainer = document.createElement("div");
  deleteProjectContainer.classList.add("delete-project-container");
  deleteProject.appendChild(deleteProjectContainer);

  const deleteProjectHeader = document.createElement("h1");
  deleteProjectHeader.classList.add("delete-project-header");
  deleteProjectHeader.textContent = "Do you want to delete the project?";
  deleteProjectContainer.appendChild(deleteProjectHeader);

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");
  deleteProjectContainer.appendChild(btnsContainer);

  const yesBtn = document.createElement("button");
  yesBtn.classList.add("delete-btn", "yes-btn");
  yesBtn.textContent = "yes";
  btnsContainer.appendChild(yesBtn);

  const noBtn = document.createElement("button");
  noBtn.classList.add("delete-btn", "no-btn");
  noBtn.textContent = "no";
  btnsContainer.appendChild(noBtn);

  function removeElement(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  yesBtn.addEventListener("click", function () {
    deleteIcon.parentElement.remove();
    deleteProject.remove();
    (0,_content_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(document.querySelector(".nav-item-inbox"));
    (0,_content_deleteContent__WEBPACK_IMPORTED_MODULE_3__["default"])(deleteIcon.parentElement);
    if (_sidebar__WEBPACK_IMPORTED_MODULE_4__.projectItems.includes(deleteIcon.parentElement.textContent))
      removeElement(_sidebar__WEBPACK_IMPORTED_MODULE_4__.projectItems, deleteIcon.parentElement.textContent);

    const contentProjectItems = document.querySelectorAll(
      ".content-project-item"
    );

    contentProjectItems.forEach((el) => {
      if (
        el.classList.contains(
          `project-item-${deleteIcon.parentElement.textContent}`
        )
      )
        el.remove();
    });
  });

  noBtn.addEventListener("click", function () {
    deleteProject.remove();
  });

  deleteProject.addEventListener("click", function (e) {
    if (!e.target.closest(".delete-project-container")) deleteProject.remove();
  });
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 36 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(28), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Fontspring";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#delete-project {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#delete-project .delete-project-container {
  padding: 30px;
  width: 25%;
  height: 30%;
  background-color: aliceblue;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#delete-project .delete-project-header {
  font-family: "Fontspring";
  text-align: center;
  font-size: 1.2em;
  color: #475569;
  padding-bottom: 10px;
}

#delete-project .btns-container {
  display: flex;
  justify-content: space-around;
}

#delete-project .delete-btn {
  padding: 5px 10px;
  text-transform: uppercase;
}

#delete-project .delete-btn:hover {
  border: none;
  cursor: pointer;
}

#delete-project .yes-btn:hover {
  background-color: #65a30d;
}

#delete-project .no-btn:hover {
  background-color: #dc2626;
}
`, "",{"version":3,"sources":["webpack://./src/sidebar/deleteproject/deleteProject.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAwF;AAC1F;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,UAAU;EACV,WAAW;EACX,2BAA2B;EAC3B,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Fontspring\";\n  src: url(/src/fonts/fontspring/Fontspring-DEMO-oktah_regular_italic-BF651105f83b382.otf);\n}\n\n#delete-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#delete-project .delete-project-container {\n  padding: 30px;\n  width: 25%;\n  height: 30%;\n  background-color: aliceblue;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 4%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#delete-project .delete-project-header {\n  font-family: \"Fontspring\";\n  text-align: center;\n  font-size: 1.2em;\n  color: #475569;\n  padding-bottom: 10px;\n}\n\n#delete-project .btns-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n#delete-project .delete-btn {\n  padding: 5px 10px;\n  text-transform: uppercase;\n}\n\n#delete-project .delete-btn:hover {\n  border: none;\n  cursor: pointer;\n}\n\n#delete-project .yes-btn:hover {\n  background-color: #65a30d;\n}\n\n#delete-project .no-btn:hover {\n  background-color: #dc2626;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteContent)
/* harmony export */ });
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


function deleteContent(item) {
  _content__WEBPACK_IMPORTED_MODULE_0__.contents.forEach((el) => {
    if (el.classList.contains(`content-${item.textContent}`)) el.remove();
  });
}


/***/ })
/******/ 	]);
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			0: 0
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQVE7QUFDVix5Q0FBeUMsaUJBQWlCO0FBQzFELEdBQUc7QUFDSDs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9oZWFkZXIvaGVhZGVyLmNzcz9iZWY1Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzPzEzMWYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0LyBuZXdQcm9qZWN0LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0L25ld1Byb2plY3QuY3NzPzVmN2QiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL25ld3Byb2plY3QvbmV3UHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NyZWF0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzP2I0YzQiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9kZWxldGVwcm9qZWN0L2RlbGV0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5jc3M/MjQ5NiIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvZGVsZXRlQ29udGVudC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvc2lkZWJhclwiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL2NvbnRlbnQvY29udGVudFwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuXG5leHBvcnQgeyBib2R5IH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsImltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IG1lbnVTdmcgZnJvbSBcIi9zcmMvaWNvbnMvbWVudS5zdmdcIjtcbmltcG9ydCBwbHVzU3ZnIGZyb20gXCIvc3JjL2ljb25zL3BsdXMtYm94LnN2Z1wiO1xuaW1wb3J0IHsgc2lkZWJhckRpdiB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi4vY29udGVudC9jb250ZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1kaXZcIik7XG5cbiAgY29uc3QgbWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uXCIsIFwibWVudS1pY29uXCIpO1xuICBtZW51SWNvbi5zcmMgPSBtZW51U3ZnO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcImhlYWRlci10ZXh0XCIpO1xuICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcblxuICBjb25zdCBoZWFkZXJSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJSaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci1yaWdodHNpZGVcIik7XG4gIGhlYWRlclJpZ2h0U2lkZS5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gIGhlYWRlclJpZ2h0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gIHBsdXNJY29uLnNyYyA9IHBsdXNTdmc7XG5cbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0U2lkZSk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzaWRlYmFyRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cbiAgICBpZiAoc2lkZWJhckRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG4gICAgICBjb250ZW50RGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvLTFcIjtcbiAgICBlbHNlIGNvbnRlbnREaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8tMVwiO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9tb25kYXktcmFpbi1mb250L01vbmRheVJhaW4tTVZuOHIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9uZGF5UmFpblwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI2hlYWRlci1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXJpZ2h0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9uZGF5UmFpblwiO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hlYWRlci9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25kYXlSYWluXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvbW9uZGF5LXJhaW4tZm9udC9Nb25kYXlSYWluLU1WbjhyLnR0Zik7XFxufVxcblxcbiNoZWFkZXItZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXJpZ2h0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbmRheVJhaW5cXFwiO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBcIi4vc2lkZWJhci5jc3NcIjtcbmltcG9ydCBsZWZ0U3ZnIGZyb20gXCIvc3JjL2ljb25zL2Fycm93LWxlZnQuc3ZnXCI7XG5pbXBvcnQgcGx1c1N2ZyBmcm9tIFwiL3NyYy9pY29ucy9wbHVzLWJveC5zdmdcIjtcbmltcG9ydCBkb3duU3ZnIGZyb20gXCIvc3JjL2ljb25zL2Fycm93LWRvd24uc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU3ZnIGZyb20gXCIvc3JjL2ljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL25ld3Byb2plY3QvIG5ld1Byb2plY3RcIjtcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gXCIuL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdFwiO1xuXG5sZXQgc2lkZWJhckRpdjtcbmxldCBsZWZ0SWNvbjtcbmxldCBwbHVzSWNvbjtcbmxldCBjcmVhdGVQcm9qZWN0SXRlbTtcbmxldCBuYXZJdGVtRGl2cyA9IFtdO1xubGV0IHByb2plY3RJdGVtcztcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gIHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1kaXZcIik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbmF2XCIpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gW1wiaW5ib3hcIiwgXCJ0b2RheVwiLCBcInByb2plY3RzXCJdO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBgbmF2LWl0ZW0tJHtlbH1gKTtcbiAgICBuYXZJdGVtLnRleHRDb250ZW50ID0gZWw7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuXG4gICAgaWYgKGVsID09PSBcInByb2plY3RzXCIpIHtcbiAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXJpZ2h0c2lkZVwiKTtcbiAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcblxuICAgICAgbGVmdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGxlZnRJY29uLnNyYyA9IGxlZnRTdmc7XG4gICAgICBsZWZ0SWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pY29uXCIsIFwibGVmdC1pY29uXCIpO1xuICAgICAgbGVmdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJDb2xsYXBzZSBQcm9qZWN0c1wiKTtcbiAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChsZWZ0SWNvbik7XG5cbiAgICAgIHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICAgICAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaWNvblwiLCBcInBsdXMtaWNvblwiKTtcbiAgICAgIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQWRkIG5ldyBwcm9qZWN0XCIpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgICB9XG5cbiAgICBuYXZJdGVtRGl2cy5wdXNoKG5hdkl0ZW0pO1xuICB9KTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG5cbiAgcHJvamVjdEl0ZW1zID0gW1wid29ya1wiLCBcImhvbWVcIiwgXCJneW1cIl07XG5cbiAgY3JlYXRlUHJvamVjdEl0ZW0gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgXCJwcm9qZWN0LWl0ZW1cIiwgYHByb2plY3QtaXRlbS0ke2VsfWApO1xuICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gZWw7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgbmF2SXRlbURpdnMucHVzaChwcm9qZWN0SXRlbSk7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTdmc7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pY29uXCIsIFwiaGlkZGVuXCIpO1xuICAgIGRlbGV0ZUljb24uc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVQcm9qZWN0KGRlbGV0ZUljb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHByb2plY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNyZWF0ZVByb2plY3RJdGVtKGVsKTtcbiAgfSk7XG5cbiAgbGVmdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgaWYgKHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICBsZWZ0SWNvbi5zcmMgPSBkb3duU3ZnO1xuICAgICAgbGVmdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFeHBhbmQgUHJvamVjdHNcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQ29sbGFwc2UgUHJvamVjdHNcIik7XG4gICAgICBsZWZ0SWNvbi5zcmMgPSBsZWZ0U3ZnO1xuICAgIH1cbiAgfSk7XG5cbiAgcGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBuZXdQcm9qZWN0KCk7XG4gIH0pO1xuXG4gIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQobmF2KTtcbiAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICByZXR1cm4gc2lkZWJhckRpdjtcbn1cblxuZXhwb3J0IHsgc2lkZWJhckRpdiwgbmF2SXRlbURpdnMgfTtcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RJdGVtIH07XG5leHBvcnQgeyBwcm9qZWN0SXRlbXMgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNzaWRlYmFyLWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzE7XG4gIGdyaWQtcm93OiAyLy0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAubmF2LWl0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtaXRlbTpob3ZlciB7XG4gIHRyYW5zbGF0ZTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaWRlYmFyLWRpdiAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xufVxuXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtLXByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLXJpZ2h0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcbiAgbGlzdC1zdHlsZTogaW5pdGlhbDtcbiAgY29sb3I6ICM0NzU1Njk7XG59XG5cbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2lkZWJhci1kaXYgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQjs7Y0FFWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXFxcIik7XFxufVxcblxcbiNzaWRlYmFyLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMS8xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzQwNDA0MDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2NjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XFxuICBjb2xvcjogIzQ3NTU2OTtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zaWRlYmFyLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFwiLi9uZXdQcm9qZWN0LmNzc1wiO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgcHJvamVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NpZGViYXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbSB9IGZyb20gXCIuLi8uLi9jb250ZW50L2NyZWF0ZUNvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LXByb2plY3RcIik7XG5cbiAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBuZXdQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBuZXdQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1oZWFkZXJcIik7XG4gIG5ld1Byb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBuZXcgcHJvamVjdFwiO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmV3UHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJuYW1lXCI7XG4gIG5ld1Byb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdExhYmVsKTtcblxuICBjb25zdCBsYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbGFiZWxTcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIG5ld1Byb2plY3RMYWJlbC5hcHBlbmRDaGlsZChsYWJlbFNwYW4pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGROZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgcHJvamVjdFwiO1xuICBhZGROZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJuZXdwcm9qZWN0LWJ0blwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0QnRuKTtcblxuICBmdW5jdGlvbiBjaGVja0VsZW1lbnQoZWxlbWVudCwgYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0udG9Mb3dlckNhc2UoKSA9PT0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjaGVja0VsZW1lbnQobmV3UHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RJdGVtcykpIHtcbiAgICAgIGFsZXJ0KFwiVGhpcyBwcm9qZWN0IGFscmVhZHkgZXhpc3RcIik7XG4gICAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5ld1Byb2plY3ROYW1lLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBjcmVhdGVQcm9qZWN0SXRlbShuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICBwcm9qZWN0SXRlbXMucHVzaChuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICBuZXdQcm9qZWN0RGl2LnJlbW92ZSgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIucHJvamVjdHMtcXR5XCJcbiAgICAgICkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0SXRlbXMubGVuZ3RofSBwcm9qZXRzIGA7XG5cbiAgICAgIGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbShcbiAgICAgICAgbmV3UHJvamVjdE5hbWUudmFsdWUsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1wcm9qZWN0cy1jb250YWluZXJcIilcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0TmFtZS52YWxpZGl0eS52YWxpZCkgYWxlcnQoXCJFbnRlciBwcm9qZWN0IG5hbWUsIHBsZWFzZVwiKTtcbiAgfSk7XG5cbiAgbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmV3LXByb2plY3QtY29udGFpbmVyXCIpKSBuZXdQcm9qZWN0RGl2LnJlbW92ZSgpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld1Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdQcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI25ldy1wcm9qZWN0IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI25ldy1wcm9qZWN0IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI25ldy1wcm9qZWN0IGlucHV0IHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMWExYWE7XG59XG5cbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlNGU0ZTc7XG59XG5cbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyL25ld3Byb2plY3QvbmV3UHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQXdGO0FBQzFGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90Zik7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgLm5ldy1wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjdlbTtcXG4gIGNvbG9yOiAjNDc1NTY5O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMWExYWE7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4jbmV3LXByb2plY3Qgc3BhbiB7XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIFxcXCJHaWxsIFNhbnMgTVRcXFwiLCBDYWxpYnJpLCBcXFwiVHJlYnVjaGV0IE1TXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0IHtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTFhMWFhO1xcbn1cXG5cXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGNvbG9yOiAjZTRlNGU3O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IG5hdkl0ZW1EaXZzIH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhclwiO1xuaW1wb3J0IHsgY29udGVudHMsIGNvbnRlbnREaXYgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyXCI7XG5pbXBvcnQgcGx1c1N2ZyBmcm9tIFwiL3NyYy9pY29ucy9wbHVzLWJveC5zdmdcIjtcblxuY29uc3QgY3JlYXRlQ29udGVudFByb2plY3RJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIHByb2plY3RzQ29udGFpbmVyKSB7XG4gIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1wcm9qZWN0LWl0ZW1cIiwgYHByb2plY3QtaXRlbS0ke2l0ZW19YCk7XG4gIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gaXRlbTtcbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYHByb2plY3QtaXRlbS0ke3Byb2plY3RJdGVtLnRleHRDb250ZW50fWApKVxuICAgICAgICBjcmVhdGVDb250ZW50KGVsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudChpdGVtKSB7XG4gIGxldCBwcm9qZWNzdHNRdHk7XG4gIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItaWNvblwiKSkgcmV0dXJuO1xuXG4gIGlmIChpdGVtLmNsb3Nlc3QoXCIubmF2LWl0ZW1cIikpIHtcbiAgICBuYXZJdGVtRGl2cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuXG4gICAgY29udGVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYGNvbnRlbnQtJHtpdGVtLnRleHRDb250ZW50fWApKVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgZWxzZSBlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWl0ZW0tcHJvamVjdHNcIikpIHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXF0eVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnByb2plY3RzLXF0eVwiXG4gICAgICAgICkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0SXRlbXMubGVuZ3RofSBwcm9qZWN0c2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAoaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZWRcIikpIHJldHVybjtcbiAgICBpdGVtLmNsb3Nlc3QoXCIubmF2LWl0ZW1cIikuY2xhc3NMaXN0LmFkZChcImNyZWF0ZWRcIik7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImNvbnRlbnQtY29udGFpbmVyXCIsXG4gICAgICBgY29udGVudC0ke2l0ZW0udGV4dENvbnRlbnR9YFxuICAgICk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBjb250ZW50cy5wdXNoKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWl0ZW0tcHJvamVjdHNcIikpIHtcbiAgICAgIHByb2plY3N0c1F0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWNzdHNRdHkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0SXRlbXMubGVuZ3RofSBwcm9qZWN0cyBgO1xuICAgICAgcHJvamVjc3RzUXR5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1xdHlcIik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3N0c1F0eSk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAgIHByb2plY3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbShpdGVtLCBwcm9qZWN0c0NvbnRhaW5lcik7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZFRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay10ZXh0XCIpO1xuICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbSB9O1xuIiwiaW1wb3J0IFwiLi9jb250ZW50LmNzc1wiO1xuaW1wb3J0IHsgc2lkZWJhckRpdiB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tIFwiLi9jcmVhdGVDb250ZW50XCI7XG5cbmxldCBjb250ZW50RGl2O1xubGV0IGNvbnRlbnRzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50KCkge1xuICBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtZGl2XCIpO1xuXG4gIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1wcm9qZWN0c1wiKSk7XG5cbiAgc2lkZWJhckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjcmVhdGVDb250ZW50KGUudGFyZ2V0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmV4cG9ydCB7IGNvbnRlbnREaXYgfTtcbmV4cG9ydCB7IGNvbnRlbnRzIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0Y2hhLVNlcmlmXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jY29udGVudC1kaXYge1xuICBncmlkLWNvbHVtbjogMi8tMTtcbiAgZ3JpZC1yb3c6IDIvLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6ICMwMjA2MTc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIgLmFkZC10YXNrLXRleHQge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAucHJvamVjdHMtcXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE4RDtBQUNoRTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0Q0FBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQjs7Y0FFWTtFQUNaLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7O2NBRVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7c0RBQ29EO0VBQ3BELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjtzREFDb0Q7RUFDcEQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGNoYS1TZXJpZlxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBjb2xvcjogIzAyMDYxNztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMWExYWE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmFkZC10YXNrLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2OmhvdmVyIC5hZGQtdGFzay10ZXh0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnByb2plY3RzLXF0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgXCIuL2RlbGV0ZVByb2plY3QuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSBcIi4uLy4uL2NvbnRlbnQvY3JlYXRlQ29udGVudFwiO1xuaW1wb3J0IGRlbGV0ZUNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbnRlbnQvZGVsZXRlQ29udGVudFwiO1xuaW1wb3J0IHsgcHJvamVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NpZGViYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChkZWxldGVJY29uKSB7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgZGVsZXRlUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBkZWxldGVQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1oZWFkZXJcIik7XG4gIGRlbGV0ZVByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD9cIjtcbiAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRucy1jb250YWluZXJcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIsIFwieWVzLWJ0blwiKTtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJ5ZXNcIjtcbiAgYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuXG4gIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbm9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIiwgXCJuby1idG5cIik7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJub1wiO1xuICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGFycmF5LCBlbGVtZW50VG9SZW1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICAgIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1pbmJveFwiKSk7XG4gICAgZGVsZXRlQ29udGVudChkZWxldGVJY29uLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmIChwcm9qZWN0SXRlbXMuaW5jbHVkZXMoZGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSlcbiAgICAgIHJlbW92ZUVsZW1lbnQocHJvamVjdEl0ZW1zLCBkZWxldGVJY29uLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpO1xuXG4gICAgY29uc3QgY29udGVudFByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5jb250ZW50LXByb2plY3QtaXRlbVwiXG4gICAgKTtcblxuICAgIGNvbnRlbnRQcm9qZWN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgIGBwcm9qZWN0LWl0ZW0tJHtkZWxldGVJY29uLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnR9YFxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lclwiKSkgZGVsZXRlUHJvamVjdC5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVsZXRlUHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbGV0ZVByb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNkZWxldGUtcHJvamVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA0JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuYnRucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLnllcy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhMzBkO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLm5vLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQXdGO0FBQzFGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90Zik7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiAyNSU7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWhlYWRlciB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjNDc1NTY5O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuYnRucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1idG46aG92ZXIge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLnllcy1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1YTMwZDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5uby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVDb250ZW50KGl0ZW0pIHtcbiAgY29udGVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGBjb250ZW50LSR7aXRlbS50ZXh0Q29udGVudH1gKSkgZWwucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==