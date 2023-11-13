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
/* harmony import */ var _content_taskcontent_taskContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);







function header() {
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute("id", "header-div");

  const headerRightSide = document.createElement("div");
  headerRightSide.classList.add("header-rightside");
  headerDiv.appendChild(headerRightSide);

  const menuIcon = new Image();
  menuIcon.classList.add("header-icon", "menu-icon");
  menuIcon.src = _src_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
  headerRightSide.appendChild(menuIcon);

  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Todo List";
  headerRightSide.appendChild(headerText);

  const plusIcon = new Image();
  plusIcon.classList.add("header-icon", "plus-icon");
  plusIcon.src = _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__;
  headerDiv.appendChild(plusIcon);

  menuIcon.addEventListener("click", function () {
    _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.sidebarDiv.classList.toggle("hidden");
    if (_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__.sidebarDiv.classList.contains("hidden"))
      _content_content__WEBPACK_IMPORTED_MODULE_4__.contentDiv.style.gridColumn = "1/-1";
    else _content_content__WEBPACK_IMPORTED_MODULE_4__.contentDiv.style.gridColumn = "2/-1";
  });

  plusIcon.addEventListener("click", function () {
    (0,_content_taskcontent_taskContent__WEBPACK_IMPORTED_MODULE_5__.taskContent)();
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
  font-family: "Flipkart";
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
  font-family: "Flipkart";
  color: #475569;
}
`, "",{"version":3,"sources":["webpack://./src/header/header.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAA4D;AAC9D;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: \"Flipkart\";\n  src: url(/src/fonts/Flipkart/Riona-Sans-W01-Bold-Italic.ttf);\n}\n\n#header-div {\n  background-color: #ffb766;\n  grid-column: 1/-1;\n  padding: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n\n#header-div .header-rightside {\n  display: flex;\n  gap: 15px;\n}\n\n#header-div .header-icon {\n  width: 30px;\n}\n\n#header-div .header-icon:hover {\n  cursor: pointer;\n}\n\n#header-div .header-text {\n  font-family: \"Flipkart\";\n  color: #475569;\n}\n"],"sourceRoot":""}]);
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

module.exports = __webpack_require__.p + "8e1dbefd87a6206f248b.ttf";

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
/* harmony export */   projectItemsArr: () => (/* binding */ projectItemsArr),
/* harmony export */   sidebar: () => (/* binding */ sidebar),
/* harmony export */   sidebarDiv: () => (/* binding */ sidebarDiv)
/* harmony export */ });
/* harmony import */ var _sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _src_icons_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _src_icons_arrow_down_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _newproject_newProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _deleteproject_deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52);








let sidebarDiv;
let leftIcon;
let plusIcon;
let createProjectItem;
let navItemDivs = [];
let projectItems;
let projectItemsArr = [];

function sidebar() {
  sidebarDiv = document.createElement("div");
  sidebarDiv.setAttribute("id", "sidebar-div");

  const nav = document.createElement("ul");
  nav.classList.add("sidebar-nav");
  sidebarDiv.appendChild(nav);

  const navItems = ["inbox", "today", "projects"];

  navItems.forEach((el) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item", `nav-item-${el}`);
    nav.appendChild(navItem);

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.textContent = el;
    navItem.appendChild(projectName);

    if (el !== "projects") {
      navItemDivs.push(navItem);
      const navSpan = document.createElement("span");
      navSpan.classList.add("nav-span", "hidden");
      navSpan.textContent = 0;
      navItem.appendChild(navSpan);

      navItem.addEventListener("mouseover", function () {
        navSpan.classList.toggle("hidden");
      });

      navItem.addEventListener("mouseleave", function () {
        navSpan.classList.toggle("hidden");
      });
    }
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
    }
  });

  const projectContainer = document.createElement("ul");
  projectContainer.classList.add("projects-container");
  sidebarDiv.appendChild(projectContainer);

  projectItems = ["work", "home", "gym"];

  createProjectItem = function (el) {
    const projectItem = document.createElement("li");
    projectItem.classList.add("nav-item", "project-item", `project-item-${el}`);
    projectContainer.appendChild(projectItem);
    navItemDivs.push(projectItem);

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.textContent = el;
    projectItem.appendChild(projectName);

    const navSpan = document.createElement("span");
    navSpan.classList.add("nav-span", "hidden");
    navSpan.textContent = 0;
    projectItem.appendChild(navSpan);

    const deleteIcon = new Image();
    deleteIcon.src = _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__;
    deleteIcon.classList.add("sidebar-icon", "hidden");
    deleteIcon.style.float = "right";
    projectItem.appendChild(deleteIcon);

    projectItem.addEventListener("mouseenter", function () {
      deleteIcon.classList.toggle("hidden");
      navSpan.classList.toggle("hidden");
    });

    projectItem.addEventListener("mouseleave", function () {
      deleteIcon.classList.toggle("hidden");
      navSpan.classList.toggle("hidden");
    });

    deleteIcon.addEventListener("click", function () {
      (0,_deleteproject_deleteProject__WEBPACK_IMPORTED_MODULE_6__["default"])(deleteIcon);
    });

    projectItemsArr.push(projectItem);
  };

  projectItems.forEach((el) => {
    createProjectItem(el);
  });

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
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  font-family: "Frenstyle", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #404040;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 2px;
}

#sidebar-div .project-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#sidebar-div .project-item .nav-span {
  justify-self: start;
  margin-left: 7px;
}

#sidebar-div .project-item img {
  justify-self: end;
}

#sidebar-div .nav-item:hover {
  translate: 3px;
  background-color: #ffb766;
  cursor: pointer;
}

#sidebar-div .nav-span {
  border-radius: 10px;
  padding: 2px 6px 0px 6px;
  background-color: #d1d5db;
  font-size: 0.85em;
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
`, "",{"version":3,"sources":["webpack://./src/sidebar/sidebar.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8D;AAChE;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;EAC1B;;cAEY;EACZ,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n#sidebar-div {\n  grid-column: 1/1;\n  grid-row: 2/-1;\n  background-color: #f1f5f9;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .nav-item {\n  width: 60%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-transform: capitalize;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  color: #404040;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  padding: 2px;\n}\n\n#sidebar-div .project-item {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#sidebar-div .project-item .nav-span {\n  justify-self: start;\n  margin-left: 7px;\n}\n\n#sidebar-div .project-item img {\n  justify-self: end;\n}\n\n#sidebar-div .nav-item:hover {\n  translate: 3px;\n  background-color: #ffb766;\n  cursor: pointer;\n}\n\n#sidebar-div .nav-span {\n  border-radius: 10px;\n  padding: 2px 6px 0px 6px;\n  background-color: #d1d5db;\n  font-size: 0.85em;\n}\n\n#sidebar-div .selected {\n  background-color: #ffb766;\n}\n\n#sidebar-div .nav-item-projects {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#sidebar-div .sidebar-icon {\n  width: 25px;\n}\n\n#sidebar-div .projects-rightside {\n  display: flex;\n}\n\n#sidebar-div .projects-container {\n  padding-left: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n#sidebar-div .project-item {\n  list-style: initial;\n  color: #475569;\n}\n\n#sidebar-div .sidebar-icon:hover {\n  cursor: pointer;\n}\n\n#sidebar-div .hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

      ___WEBPACK_IMPORTED_MODULE_1__.body.style.overflow = "auto";
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
  padding: 30px 20px;
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
  padding: 5px 10px;
  background-color: #475569;
  align-self: start;
  border: none;
  font-family: "Fontspring";
  font-size: 1em;
  color: #e4e4e7;
}

#new-project .newproject-btn:hover {
  cursor: pointer;
  translate: 3px;
}
`, "",{"version":3,"sources":["webpack://./src/sidebar/newproject/newProject.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAwF;AAC1F;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,6EAA6E;EAC7E,UAAU;EACV,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;EACzB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB","sourcesContent":["@font-face {\n  font-family: \"Fontspring\";\n  src: url(/src/fonts/fontspring/Fontspring-DEMO-oktah_regular_italic-BF651105f83b382.otf);\n}\n\n#new-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#new-project .new-project-container {\n  padding: 30px 20px;\n  background-color: aliceblue;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 4%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#new-project .new-project-header {\n  font-family: \"Fontspring\";\n  text-align: center;\n  font-size: 1.7em;\n  color: #475569;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 10px;\n}\n\n#new-project label {\n  font-family: \"Fontspring\";\n  font-size: 1.2em;\n  color: #475569;\n  text-transform: uppercase;\n}\n\n#new-project span {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  color: red;\n  font-weight: 700;\n  margin-left: 5px;\n}\n\n#new-project input {\n  width: 70%;\n  padding: 5px;\n  border-radius: 3px;\n  border: 1px solid #a1a1aa;\n}\n\n#new-project .newproject-btn {\n  padding: 5px 10px;\n  background-color: #475569;\n  align-self: start;\n  border: none;\n  font-family: \"Fontspring\";\n  font-size: 1em;\n  color: #e4e4e7;\n}\n\n#new-project .newproject-btn:hover {\n  cursor: pointer;\n  translate: 3px;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _taskcontent_taskContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _taskcontent_createSelectOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);






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
  if (item.closest(".nav-item")) {
    _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.navItemDivs.forEach((el) => {
      el.classList.remove("selected");
      document.querySelector(".nav-item-projects").classList.remove("selected");
    });

    _content__WEBPACK_IMPORTED_MODULE_1__.contents.forEach((el) => {
      if (
        el.classList.contains(`content-${item.querySelector("p").textContent}`)
      )
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
      `content-${item.querySelector("p").textContent}`
    );
    _content__WEBPACK_IMPORTED_MODULE_1__.contentDiv.appendChild(contentContainer);
    _content__WEBPACK_IMPORTED_MODULE_1__.contents.push(contentContainer);

    const contentHeader = document.createElement("h1");
    contentHeader.classList.add("content-header");
    contentHeader.textContent = item.querySelector("p").textContent;
    contentContainer.appendChild(contentHeader);

    let projecstsQty;
    if (item.classList.contains("nav-item-projects")) {
      projecstsQty = document.createElement("div");
      projecstsQty.textContent = `${_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.projectItems.length} projects `;
      projecstsQty.classList.add("projects-qty");
      contentContainer.appendChild(projecstsQty);

      const projectsContainer = document.createElement("ul");
      projectsContainer.classList.add("content-projects-container");
      contentContainer.appendChild(projectsContainer);

      _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_0__.projectItemsArr.forEach((item) => {
        createContentProjectItem(
          item.querySelector("p").textContent,
          projectsContainer
        );
      });

      return;
    }

    const addTaskDiv = document.createElement("div");
    addTaskDiv.classList.add("add-task-div");
    contentContainer.appendChild(addTaskDiv);

    const plusIcon = new Image();
    plusIcon.src = _src_icons_plus_box_svg__WEBPACK_IMPORTED_MODULE_4__;
    plusIcon.classList.add("content-icon", "plus-icon");
    addTaskDiv.appendChild(plusIcon);

    const addTaskText = document.createElement("p");
    addTaskText.classList.add("add-task-text");
    addTaskText.textContent = "Add task";
    addTaskDiv.appendChild(addTaskText);

    const taskItemsContainer = document.createElement("ul");
    taskItemsContainer.classList.add("task-items-container");
    contentContainer.appendChild(taskItemsContainer);

    const selectOption = document.querySelector(".select-project");

    addTaskDiv.addEventListener("click", function (e) {
      (0,_taskcontent_taskContent__WEBPACK_IMPORTED_MODULE_2__.taskContent)();

      if (e.target.tagName === "DIV") {
        (0,_taskcontent_createSelectOption__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, selectOption);
      }

      if (e.target.tagName === "IMG" || e.target.tagName === "P") {
        (0,_taskcontent_createSelectOption__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, selectOption);
      }
    });
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

  _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.navItemDivs.forEach((item) => {
    (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(item);
  });

  (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(document.querySelector(".nav-item-projects"));

  _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.sidebarDiv.addEventListener("click", function (e) {
    if (e.target.classList.contains("sidebar-icon")) return;
    if (e.target.tagName === "SPAN" || e.target.tagName === "P")
      (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(e.target.closest(".nav-item"));
    else (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(e.target);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(34), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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
  padding: 10px;
  width: 50%;
}

#content-div .content-project-item:hover {
  cursor: pointer;
  background-color: #ffb766;
  font-weight: 700;
}

#content-div .task-items-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#content-div .task-item {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  position: relative;
}

#content-div .task-item:hover {
  cursor: pointer;
  padding: 5px;
  background-color: #f1f5f9;
  border-radius: 10px;
}

#content-div .selected {
  border: 2px solid #737373;
  padding: 5px;
  border-radius: 10px;
  cursor: auto;
}

#content-div .mouseentered {
  background-color: #d1d5db;
  padding: 5px;
  border-radius: 10px;
}

#content-div .title-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

#content-div .task-item--title {
  font-family: "Frenstyle";
  text-transform: capitalize;
  font-size: 0.9em;
  outline: none;
}

#content-div .task-title-before {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  display: block;
}

#content-div .task-date-container {
  display: flex;
  gap: 8px;
  outline: none;
}

#content-div .task-date-para {
  font-family: "Frenstyle";
  font-size: 0.85em;
  outline: none;
  color: #1f2937;
}

#content-div .editable-item:focus {
  cursor: pointer;
  border-bottom: 1px solid black;
}

#content-div .task-description-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

#content-div .task-item--description {
  font-family: "Frenstyle";
  font-size: 0.85em;
  display: inline;
  vertical-align: middle;
  color: #737373;
  outline: none;
}

#content-div .task-date-para {
  outline: none;
}

#content-div .task-priority {
  font-family: "Frenstyle";
  border: 1px solid #64748b;
  padding: 3px;
  border-radius: 5px;
  display: inline;
  font-size: 0.75em;
}

#content-div .task-item--rightside {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#content-div .task-item--leftside {
  display: flex;
  gap: 12px;
  align-items: start;
}

#content-div .task-icon {
  vertical-align: middle;
  width: 15px;
}

#content-div .edit-icon,
#content-div .delete-icon,
#content-div .dots-icon {
  cursor: pointer;
  width: 20px;
}

#content-div .editable {
  border: 1px solid black;
  padding: 10px 10px 10px 15px;
  border-radius: 5px;
}

#content-div .date-container {
  position: relative;
  display: flex;
  gap: 8px;
}

#content-div .date-container:hover {
  caret-color: #dc2626;
}

#content-div .datepicker-toggle {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 19px;
}

#content-div .datepicker-toggle-button {
  position: absolute;
  left: -2px;
  top: 2px;
  width: 100%;
  height: 100%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  width: 20px;
}

#content-div .datepicker-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

#content-div .datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

#content-div .datetext-input {
  border: none;
  outline: none;
  color: #737373;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.9em;
  background: none;
  font-weight: 700;
}

#content-div .new-priority {
  font-family: "Frenstyle";
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 0.8em;
  width: 60%;
  letter-spacing: 0.05em;
  font-weight: 700;
}
`, "",{"version":3,"sources":["webpack://./src/content/content.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n@font-face {\n  font-family: \"Matcha-Serif\";\n  src: url(\"/src/fonts/matcha-serif/matchaserif-regular.otf\");\n}\n\n#content-div {\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  background-color: #fafafa;\n  padding: 30px;\n}\n\n#content-div .hidden {\n  display: none !important;\n}\n\n#content-div .content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .content-header {\n  width: 50%;\n  color: #020617;\n  letter-spacing: 0.07em;\n  font-size: 1.2em;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 20px;\n}\n\n#content-div .content-icon {\n  width: 25px;\n}\n\n#content-div .add-task-div {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n#content-div .add-task-text {\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 0.9em;\n  opacity: 0.5;\n}\n\n#content-div .add-task-div:hover .add-task-text {\n  opacity: 1;\n  color: #dc2626;\n}\n\n#content-div .add-task-div:hover {\n  cursor: pointer;\n}\n\n#content-div .projects-qty {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1.2em;\n}\n\n#content-div .content-projects-container {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .content-project-item {\n  text-transform: capitalize;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1em;\n  padding: 10px;\n  width: 50%;\n}\n\n#content-div .content-project-item:hover {\n  cursor: pointer;\n  background-color: #ffb766;\n  font-weight: 700;\n}\n\n#content-div .task-items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .task-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  position: relative;\n}\n\n#content-div .task-item:hover {\n  cursor: pointer;\n  padding: 5px;\n  background-color: #f1f5f9;\n  border-radius: 10px;\n}\n\n#content-div .selected {\n  border: 2px solid #737373;\n  padding: 5px;\n  border-radius: 10px;\n  cursor: auto;\n}\n\n#content-div .mouseentered {\n  background-color: #d1d5db;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n#content-div .title-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#content-div .task-item--title {\n  font-family: \"Frenstyle\";\n  text-transform: capitalize;\n  font-size: 0.9em;\n  outline: none;\n}\n\n#content-div .task-title-before {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  display: block;\n}\n\n#content-div .task-date-container {\n  display: flex;\n  gap: 8px;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  outline: none;\n  color: #1f2937;\n}\n\n#content-div .editable-item:focus {\n  cursor: pointer;\n  border-bottom: 1px solid black;\n}\n\n#content-div .task-description-container {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#content-div .task-item--description {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  display: inline;\n  vertical-align: middle;\n  color: #737373;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  outline: none;\n}\n\n#content-div .task-priority {\n  font-family: \"Frenstyle\";\n  border: 1px solid #64748b;\n  padding: 3px;\n  border-radius: 5px;\n  display: inline;\n  font-size: 0.75em;\n}\n\n#content-div .task-item--rightside {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .task-item--leftside {\n  display: flex;\n  gap: 12px;\n  align-items: start;\n}\n\n#content-div .task-icon {\n  vertical-align: middle;\n  width: 15px;\n}\n\n#content-div .edit-icon,\n#content-div .delete-icon,\n#content-div .dots-icon {\n  cursor: pointer;\n  width: 20px;\n}\n\n#content-div .editable {\n  border: 1px solid black;\n  padding: 10px 10px 10px 15px;\n  border-radius: 5px;\n}\n\n#content-div .date-container {\n  position: relative;\n  display: flex;\n  gap: 8px;\n}\n\n#content-div .date-container:hover {\n  caret-color: #dc2626;\n}\n\n#content-div .datepicker-toggle {\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n\n#content-div .datepicker-toggle-button {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/src/icons/calendar-range.svg\");\n  background-repeat: no-repeat;\n  width: 20px;\n}\n\n#content-div .datepicker-input {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#content-div .datepicker-input::-webkit-calendar-picker-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n#content-div .datetext-input {\n  border: none;\n  outline: none;\n  color: #737373;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 0.9em;\n  background: none;\n  font-weight: 700;\n}\n\n#content-div .new-priority {\n  font-family: \"Frenstyle\";\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 0.8em;\n  width: 60%;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "528649809963e83594ff.otf";

/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91d32b02787a776f5dd5.svg";

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskContent: () => (/* binding */ taskContent),
/* harmony export */   taskItem: () => (/* binding */ taskItem),
/* harmony export */   taskPriority: () => (/* binding */ taskPriority),
/* harmony export */   validateDate: () => (/* binding */ validateDate)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _taskContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _createSelectOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _addTaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);






let validateDate;
let taskPriority;
let counter = 0;
let taskItem;

function taskContent() {
  const taskContent = document.createElement("div");
  taskContent.setAttribute("id", "task-content");
  ___WEBPACK_IMPORTED_MODULE_0__.body.appendChild(taskContent);

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  taskContent.appendChild(taskContainer);

  const taskForm = document.createElement("form");
  taskForm.setAttribute("id", "task-form");
  taskForm.classList.add("task-form");
  taskContainer.appendChild(taskForm);

  const taskName = document.createElement("input");
  taskName.classList.add("task-name");
  taskName.setAttribute("placeholder", "Task name");
  taskName.setAttribute("required", "");
  taskForm.appendChild(taskName);

  const taskDescription = document.createElement("input");
  taskDescription.classList.add("task-description");
  taskDescription.setAttribute("placeholder", "Description");
  taskForm.appendChild(taskDescription);

  const wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper-div");
  taskForm.appendChild(wrapperDiv);

  const dateString = new Date().toISOString().slice(0, 10);

  const taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.classList.add("task-date");
  taskDate.value = dateString;
  wrapperDiv.appendChild(taskDate);

  validateDate = function (taskDate) {
    if (!taskDate) return true;
    if (taskDate < dateString) {
      alert("You cannot enter an old date. Please enter a valid date.");
      return false;
    } else return true;
  };

  taskPriority = document.createElement("select");
  taskPriority.classList.add("priority-select");
  wrapperDiv.appendChild(taskPriority);

  for (let i = 1; i < 5; i++) {
    const option = document.createElement("option");
    option.classList.add("select-option", `option-${i}`);
    option.setAttribute("value", i);
    option.textContent = `Priority ${i}`;
    taskPriority.appendChild(option);
    if (i == 4) option.setAttribute("selected", "");
  }

  const lastDiv = document.createElement("div");
  lastDiv.classList.add("last-div");
  taskForm.appendChild(lastDiv);

  const selectProject = document.createElement("select");
  selectProject.classList.add("select-project");
  lastDiv.appendChild(selectProject);

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    (0,_createSelectOption__WEBPACK_IMPORTED_MODULE_2__["default"])(item.querySelector("p").textContent, selectProject);
  });

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");
  lastDiv.appendChild(btnContainer);

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "cancel";
  cancelBtn.classList.add("form-btn", "cancel-btn");
  btnContainer.appendChild(cancelBtn);

  const addBtn = document.createElement("button");
  addBtn.textContent = "add task";
  addBtn.setAttribute("type", "submit");
  addBtn.classList.add("form-btn", "add-btn");
  btnContainer.appendChild(addBtn);

  document.querySelectorAll(".form-btn").forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });

  cancelBtn.addEventListener("click", function () {
    taskContent.remove();
  });

  taskForm.addEventListener("input", function () {
    if (taskForm.checkValidity()) {
      addBtn.style.backgroundColor = "#d33a2c";
      addBtn.style.boxShadow = "rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset";
      addBtn.style.color = "#ffffff";
    }
    if (!taskForm.checkValidity()) {
      addBtn.style.backgroundColor = "#ffe7e7";
      addBtn.style.color = "#dc2626";
      addBtn.style.boxShadow = "none";
    }
  });

  taskItem = function (title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
  };

  addBtn.addEventListener("click", function () {
    if (taskForm.checkValidity() && validateDate(taskDate.value)) {
      counter++;
      taskContent.remove();
      const contentItems = document.querySelectorAll(".content-container");

      contentItems.forEach((el) => {
        if (el.classList.contains(`content-${selectProject.value}`)) {
          const newTaskItem = new taskItem(
            taskName.value,
            taskDescription.value,
            taskDate.value,
            taskPriority.value,
            selectProject.value
          );
          (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(newTaskItem, el, counter);

          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDate.value))) {
            newTaskItem.project = "today";
            (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(
              newTaskItem,
              document.querySelector(".content-today"),
              counter
            );
          }
        }
      });
    }
  });

  taskContent.addEventListener("click", function (e) {
    if (!e.target.closest(".task-container")) taskContent.remove();
  });
}




/***/ }),
/* 36 */
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskContent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskContent_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskContent_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskContent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskContent_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 37 */
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

#task-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
}

#task-content .task-container {
  padding: 20px 7px;
  background-color: aliceblue;
  position: fixed;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4%;
  box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
    0 5px 14px 0 rgba(0, 0, 0, 0.18);
}

#task-content .task-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 3px;
}
#task-content .task-form:focus {
  border: none;
}

#task-content .task-name,
.task-description {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  width: 100%;
  border: none;
  background-color: aliceblue;
  letter-spacing: 0.05em;
  padding: 3px;
  outline: none;
}

#task-content .task-name {
  font-size: 1.3em;
}

#task-content .task-description {
  font-size: 1.1em;
}

#task-content .date-container {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 31%;
  border: 1px solid #6b7280;
  padding: 3px;
  border-radius: 3%;
}

#task-content .date-container:hover {
  cursor: pointer;
  background-color: #e2e8f0;
}

#task-content .date-text {
  font-size: 0.9em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  letter-spacing: 0.05em;
  color: #64748b;
}

#task-content .task-icon {
  width: 20px;
}

#task-content .wrapper-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  border-bottom: 1px solid #64748b;
  padding-bottom: 15px;
}

#task-content input[type="date"] {
  background-color: #cbd5e1;
  padding: 5px;
  color: #64748b;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 0.9em;
  border: none;
  outline: none;
  border-radius: 5px;
}

::-webkit-calendar-picker-indicator {
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
}

#task-content .priority-select {
  background-color: #cbd5e1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 0.9em;
}

#task-content .select-project {
  border: 1px solid black;
}

#task-content .select-project,
.cancel-btn,
.add-btn {
  align-self: start;
  text-transform: capitalize;
  padding: 3px;
  font-family: inherit;
  font-size: inherit;
}

#task-content .select-project:hover {
  background-color: #cbd5e1;
  font-weight: 700;
  outline: none;
  cursor: pointer;
}

#task-content .last-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#task-content .btn-container {
  display: flex;
  gap: 13px;
}

#task-content .cancel-btn {
  font-weight: 700;
  border-radius: 6px;
  border: none;
  background: #6e6d70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
    inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5),
    0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #dfdedf;
  padding: 5px 15px;
  cursor: pointer;
}

#task-content .cancel-btn:hover {
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),
    0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}

#task-content .add-btn {
  font-weight: 700;
  cursor: pointer;
  padding: 5px 15px;
  background-color: #ffe7e7;
  border: 1px solid #dc2626;
  border-radius: 11px;
  color: #d33a2c;
  cursor: pointer;
  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

#task-content .add-btn:active {
  background-color: #d33a2c;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;
  color: #ffffff;
}

#task-content .add-btn:hover {
  border: 2px solid #dc2626;
}
`, "",{"version":3,"sources":["webpack://./src/content/taskcontent/taskContent.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8D;AAChE;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB;oCACkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;;EAEE;sDACoD;EACpD,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,sBAAsB;EACtB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB;sDACoD;EACpD,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,cAAc;EACd;sDACoD;EACpD,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;;EAGE,iBAAiB;EACjB,0BAA0B;EAC1B,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB;;yCAEuC;EACvC,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE;+EAC6E;EAC7E,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,gEAAgE;AAClE;;AAEA;EACE,yBAAyB;EACzB,iDAAiD;EACjD,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n#task-content {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n#task-content .task-container {\n  padding: 20px 7px;\n  background-color: aliceblue;\n  position: fixed;\n  top: 36%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 4%;\n  box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),\n    0 5px 14px 0 rgba(0, 0, 0, 0.18);\n}\n\n#task-content .task-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding: 3px;\n}\n#task-content .task-form:focus {\n  border: none;\n}\n\n#task-content .task-name,\n.task-description {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  width: 100%;\n  border: none;\n  background-color: aliceblue;\n  letter-spacing: 0.05em;\n  padding: 3px;\n  outline: none;\n}\n\n#task-content .task-name {\n  font-size: 1.3em;\n}\n\n#task-content .task-description {\n  font-size: 1.1em;\n}\n\n#task-content .date-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 31%;\n  border: 1px solid #6b7280;\n  padding: 3px;\n  border-radius: 3%;\n}\n\n#task-content .date-container:hover {\n  cursor: pointer;\n  background-color: #e2e8f0;\n}\n\n#task-content .date-text {\n  font-size: 0.9em;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n\n#task-content .task-icon {\n  width: 20px;\n}\n\n#task-content .wrapper-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  border-bottom: 1px solid #64748b;\n  padding-bottom: 15px;\n}\n\n#task-content input[type=\"date\"] {\n  background-color: #cbd5e1;\n  padding: 5px;\n  color: #64748b;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 0.9em;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n}\n\n::-webkit-calendar-picker-indicator {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n}\n\n#task-content .priority-select {\n  background-color: #cbd5e1;\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 0.9em;\n}\n\n#task-content .select-project {\n  border: 1px solid black;\n}\n\n#task-content .select-project,\n.cancel-btn,\n.add-btn {\n  align-self: start;\n  text-transform: capitalize;\n  padding: 3px;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n#task-content .select-project:hover {\n  background-color: #cbd5e1;\n  font-weight: 700;\n  outline: none;\n  cursor: pointer;\n}\n\n#task-content .last-div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#task-content .btn-container {\n  display: flex;\n  gap: 13px;\n}\n\n#task-content .cancel-btn {\n  font-weight: 700;\n  border-radius: 6px;\n  border: none;\n  background: #6e6d70;\n  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),\n    inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5),\n    0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);\n  color: #dfdedf;\n  padding: 5px 15px;\n  cursor: pointer;\n}\n\n#task-content .cancel-btn:hover {\n  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2),\n    0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);\n  outline: 0;\n}\n\n#task-content .add-btn {\n  font-weight: 700;\n  cursor: pointer;\n  padding: 5px 15px;\n  background-color: #ffe7e7;\n  border: 1px solid #dc2626;\n  border-radius: 11px;\n  color: #d33a2c;\n  cursor: pointer;\n  transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n\n#task-content .add-btn:active {\n  background-color: #d33a2c;\n  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 3px 0 inset;\n  color: #ffffff;\n}\n\n#task-content .add-btn:hover {\n  border: 2px solid #dc2626;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSelectOption)
/* harmony export */ });
let projectGroup;
let itemText;
let selectItems;

function createSelectOption(item, selectProject) {
  if (item.tagName === "P" || item.tagName === "IMG") {
    itemText = item.parentElement.previousSibling.textContent;
    selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach((el) => {
      el.removeAttribute("selected");
    });
    selectItems.forEach((el) => {
      if (el.classList.contains(`select-item-${itemText}`))
        el.setAttribute("selected", "");
    });
    return;
  }

  if (item.tagName === "DIV") {
    itemText = item.previousSibling.textContent;
    selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach((el) => {
      el.removeAttribute("selected");
    });

    selectItems.forEach((el) => {
      if (el.classList.contains(`select-item-${itemText}`))
        el.setAttribute("selected", "");
    });
    return;
  }

  itemText = item;
  if (itemText === "projects") {
    projectGroup = document.createElement("optgroup");
    projectGroup.label = "Projects";
    selectProject.appendChild(projectGroup);
    return;
  }
  const selectItem = document.createElement("option");
  selectItem.classList.add("select-item", `select-item-${itemText}`);
  selectItem.textContent = itemText;
  selectItem.value = itemText;

  if (itemText === "today") return;

  if (itemText === "inbox") selectProject.appendChild(selectItem);
  else projectGroup.appendChild(selectItem);
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskItem),
/* harmony export */   formatDate: () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var _src_icons_comment_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _editTaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _taskContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _updateTaskQty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);
/* harmony import */ var _updatePriority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);









let formatDate;

function addTaskItem(item, contentItem, counter) {
  counter++;
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item", `task-item-${counter}`);
  taskItem.setAttribute("spellcheck", false);

  const taskItemContainer = document.querySelectorAll(".task-items-container");

  taskItemContainer.forEach((item) => {
    if (contentItem.contains(item)) item.appendChild(taskItem);
  });

  const rightSide = document.createElement("div");
  rightSide.classList.add("task-item--rightside");
  taskItem.appendChild(rightSide);

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  rightSide.appendChild(titleContainer);

  const taskTitle = document.createElement("h1");
  taskTitle.classList.add("task-item--title", "editable-item");
  taskTitle.textContent = item.title;
  titleContainer.appendChild(taskTitle);

  const taskTitleBefore = document.createElement("span");
  taskTitleBefore.classList.add("task-title-before");
  (0,_updatePriority__WEBPACK_IMPORTED_MODULE_6__.updatePriority)(item.priority, taskTitleBefore);
  titleContainer.insertBefore(taskTitleBefore, taskTitle);

  const taskDescriptionContainter = document.createElement("div");
  taskDescriptionContainter.classList.add("task-description-container");
  rightSide.appendChild(taskDescriptionContainter);

  const commentIcon = new Image();
  commentIcon.src = _src_icons_comment_svg__WEBPACK_IMPORTED_MODULE_0__;
  commentIcon.classList.add("task-icon", "comment-icon");
  taskDescriptionContainter.appendChild(commentIcon);

  const taskDescription = document.createElement("p");
  taskDescription.classList.add("task-item--description", "editable-item");
  taskDescription.textContent = item.description;
  taskDescriptionContainter.appendChild(taskDescription);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container", "hidden");
  rightSide.appendChild(dateContainer);

  const datepickerToggle = document.createElement("span");
  datepickerToggle.classList.add("datepicker-toggle");
  dateContainer.appendChild(datepickerToggle);

  const datepickerToggleBtn = document.createElement("span");
  datepickerToggleBtn.classList.add("datepicker-toggle-button");
  dateContainer.appendChild(datepickerToggleBtn);

  const datepickerInput = document.createElement("input");
  datepickerInput.classList.add("datepicker-input");
  datepickerInput.setAttribute("type", "date");
  dateContainer.appendChild(datepickerInput);
  datepickerInput.disabled = true;

  formatDate = new Intl.DateTimeFormat("en-us", { dateStyle: "long" });
  const datetextInput = document.createElement("input");
  datetextInput.classList.add("datetext-input");
  datetextInput.setAttribute("type", "text");

  if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(item.dueDate)))
    datetextInput.setAttribute("value", "Today");
  else
    datetextInput.setAttribute(
      "value",
      item.dueDate ? `${formatDate.format(new Date(item.dueDate))}` : "No date"
    );
  dateContainer.appendChild(datetextInput);

  const newPriority = _taskContent__WEBPACK_IMPORTED_MODULE_4__.taskPriority.cloneNode(true);
  newPriority.classList.add("new-priority", "hidden");
  rightSide.appendChild(newPriority);
  newPriority.disabled = true;

  const leftSide = document.createElement("div");
  leftSide.classList.add("task-item--leftside");
  taskItem.appendChild(leftSide);

  const editIcon = new Image();
  editIcon.classList.add("task-icon", "edit-icon", "hidden");
  editIcon.src = _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__;
  editIcon.setAttribute("title", "Edit task");
  leftSide.appendChild(editIcon);

  const deleteIcon = new Image();
  deleteIcon.classList.add("task-icon", "delete-icon", "hidden");
  deleteIcon.src = _src_icons_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
  leftSide.appendChild(deleteIcon);

  (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_5__.updateTaskQty)(item.project);

  function classToggle() {
    dateContainer.classList.toggle("hidden");
    newPriority.classList.toggle("hidden");
    editIcon.classList.toggle("hidden");
    deleteIcon.classList.toggle("hidden");
  }

  taskItem.addEventListener("mouseenter", function () {
    if (!taskItem.classList.contains("selected")) {
      classToggle();
      taskItem.style.cursor = "pointer";
    }
  });

  taskItem.addEventListener("mouseleave", function () {
    if (!taskItem.classList.contains("selected")) {
      classToggle();
    }
  });

  deleteIcon.addEventListener("click", function (e) {
    (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_5__.updateTaskQty)(e.target);
    e.target.closest(".task-item").remove();
    document.querySelectorAll(".task-item").forEach((item) => {
      if (
        item.classList.contains(e.target.closest(".task-item").classList[1])
      ) {
        (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_5__.updateTaskQty)(item.querySelector(".delete-icon"));
        item.remove();
      }
    });
  });

  editIcon.addEventListener("click", function (e) {
    (0,_editTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(
      e,
      taskItem,
      taskTitle,
      editIcon,
      datepickerInput,
      newPriority
    );
  });

  datepickerInput.addEventListener("change", function () {
    (0,_editTaskItem__WEBPACK_IMPORTED_MODULE_3__.editDate)(datepickerInput.value, datetextInput);
  });

  newPriority.addEventListener("change", function () {
    (0,_updatePriority__WEBPACK_IMPORTED_MODULE_6__.updatePriority)(newPriority.value, taskTitleBefore);
  });
}




/***/ }),
/* 40 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23fc36c2af0e02bf952e.svg";

/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d317290131028fe10cf.svg";

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTaskItem),
/* harmony export */   editDate: () => (/* binding */ editDate)
/* harmony export */ });
/* harmony import */ var _src_icons_content_save_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _taskContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _addTaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var _updateTaskQty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _updatePriority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);








function editTaskItem(
  event,
  taskItem,
  taskTitle,
  editIcon,
  datepickerInput,
  newPriority
) {
  document.querySelectorAll(".editable-item").forEach((item) => {
    if (event.target.closest(".task-item").contains(item)) {
      item.contentEditable = true;
    }
  });

  const eventContent = event.target
    .closest(".content-container")
    .querySelector("h1").textContent;

  taskItem.classList.toggle("selected");
  if (taskItem.classList.contains("selected")) {
    taskTitle.focus();
    editIcon.src = _src_icons_content_save_svg__WEBPACK_IMPORTED_MODULE_0__;
    editIcon.setAttribute("title", "Save changes");

    if (eventContent !== "today") datepickerInput.disabled = false;
    newPriority.disabled = false;
  }
  if (!taskItem.classList.contains("selected")) {
    editIcon.src = _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_1__;
    editIcon.setAttribute("title", "Edit task");
    document.querySelectorAll(".editable-item").forEach((item) => {
      item.contentEditable = false;
    });
    datepickerInput.disabled = true;
    newPriority.disabled = true;

    const currentItem = event.target.closest(".task-item");
    const currentTitle =
      currentItem.querySelector(".task-item--title").textContent;
    const currentDescription = currentItem.querySelector(
      ".task-item--description"
    ).textContent;
    const currentPriority = currentItem.querySelector(".priority-select").value;
    const currentDate = currentItem.querySelector(".datepicker-input").value;
    const currentDateText = currentItem.querySelector(".datetext-input").value;

    document.querySelectorAll(".task-item").forEach((item) => {
      const currentItemQty = document.querySelectorAll(
        `.task-item-${currentItem.classList[1].slice(-1)}`
      );

      if (item === currentItem && currentItemQty.length === 1) {
        if (currentDateText && currentDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(currentDate))) {
          const todayItem = new _taskContent__WEBPACK_IMPORTED_MODULE_2__.taskItem(
            currentTitle,
            currentDescription,
            currentDate,
            currentPriority,
            "today"
          );
          const counter = currentItem.classList[1].slice(-1) - 1;
          (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(
            todayItem,
            document.querySelector(".content-today"),
            counter
          );
        }
        return;
      }

      if (item.classList.contains(currentItem.classList[1])) {
        if (
          currentItem.querySelector(".datepicker-input").value &&
          !(0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(
            new Date(currentItem.querySelector(".datepicker-input").value)
          )
        ) {
          (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__.updateTaskQty)(
            item.closest(".content-container").querySelector("h1").textContent,
            1
          );
          item.remove();
        }

        item.querySelector(".task-item--title").textContent = currentTitle;
        item.querySelector(".task-item--description").textContent =
          currentDescription;
        item.querySelector(".priority-select").value = currentPriority;
        (0,_updatePriority__WEBPACK_IMPORTED_MODULE_5__.updatePriority)(
          item.querySelector(".priority-select").value,
          item.querySelector(".task-title-before")
        );
      }
    });
  }
}

function editDate(datepickerInput, datetextInput) {
  if (!datepickerInput) {
    datetextInput.value = "No date";
    return;
  }
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(datepickerInput))) datetextInput.value = "Today";
  else
    (0,_taskContent__WEBPACK_IMPORTED_MODULE_2__.validateDate)(datepickerInput)
      ? (datetextInput.value = _addTaskItem__WEBPACK_IMPORTED_MODULE_3__.formatDate.format(new Date(datepickerInput)))
      : (datetextInput.value = "No date");
}


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83bd0b0a4d22f95e7882.svg";

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTaskQty: () => (/* binding */ updateTaskQty)
/* harmony export */ });
function updateTaskQty(value, acc = 0) {
  let counter = 0 + acc;
  if (value.tagName === "IMG") {
    counter = 1;
    value = value.closest(".content-container").querySelector("h1").textContent;
  }

  const navSpans = document.querySelectorAll(".nav-span");
  navSpans.forEach((el) => {
    if (
      el.closest(`.nav-item-${value}`) ||
      el.closest(`.project-item-${value}`)
    )
      el.textContent =
        document
          .querySelector(`.content-${value}`)
          .querySelector(".task-items-container").childElementCount - counter;
  });
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updatePriority: () => (/* binding */ updatePriority)
/* harmony export */ });
function updatePriority(priority, taskTitleBefore) {
  if (+priority === 4) taskTitleBefore.style.backgroundColor = "black";
  if (+priority === 3) taskTitleBefore.style.backgroundColor = "blue";
  if (+priority === 2) taskTitleBefore.style.backgroundColor = "orange";
  if (+priority === 1) taskTitleBefore.style.backgroundColor = "red";
}


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),
/* 51 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _deleteProject_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _content_createContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _content_deleteContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _content_taskcontent_updateTaskQty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);







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
    const projectName = deleteIcon.previousSibling.previousSibling.textContent;

    document.querySelectorAll(".content-container").forEach((el) => {
      if (el.classList.contains(`content-${projectName}`)) {
        const childrenItems = el.querySelector(
          ".task-items-container"
        ).children;

        Array.from(childrenItems).forEach((el) => {
          document.querySelectorAll(".task-item").forEach((el2) => {
            if (el2.classList.contains(el.classList[1])) {
              (0,_content_taskcontent_updateTaskQty__WEBPACK_IMPORTED_MODULE_5__.updateTaskQty)(el2.querySelector(".delete-icon"));
              el2.remove();
            }
          });
        });
      }
    });

    ___WEBPACK_IMPORTED_MODULE_1__.body.style.overflow = "auto";
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
    ___WEBPACK_IMPORTED_MODULE_1__.body.style.overflow = "auto";
  });

  deleteProject.addEventListener("click", function (e) {
    if (!e.target.closest(".delete-project-container")) deleteProject.remove();
  });
}


/***/ }),
/* 53 */
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_deleteProject_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 54 */
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
  padding: 20px 10px;
  width: 18%;
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
`, "",{"version":3,"sources":["webpack://./src/sidebar/deleteproject/deleteProject.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,4CAAwF;AAC1F;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["@font-face {\n  font-family: \"Fontspring\";\n  src: url(/src/fonts/fontspring/Fontspring-DEMO-oktah_regular_italic-BF651105f83b382.otf);\n}\n\n#delete-project {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n#delete-project .delete-project-container {\n  padding: 20px 10px;\n  width: 18%;\n  background-color: aliceblue;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 4%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#delete-project .delete-project-header {\n  font-family: \"Fontspring\";\n  text-align: center;\n  font-size: 1.2em;\n  color: #475569;\n  padding-bottom: 10px;\n}\n\n#delete-project .btns-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n#delete-project .delete-btn {\n  padding: 5px 10px;\n  text-transform: uppercase;\n}\n\n#delete-project .delete-btn:hover {\n  border: none;\n  cursor: pointer;\n}\n\n#delete-project .yes-btn:hover {\n  background-color: #65a30d;\n}\n\n#delete-project .no-btn:hover {\n  background-color: #dc2626;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 55 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwRkFBMEYsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywwR0FBMEcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9B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QUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9oZWFkZXIvaGVhZGVyLmNzcz9iZWY1Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzPzEzMWYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0LyBuZXdQcm9qZWN0LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0L25ld1Byb2plY3QuY3NzPzVmN2QiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL25ld3Byb2plY3QvbmV3UHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NyZWF0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzP2I0YzQiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC90YXNrQ29udGVudC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnQuY3NzP2M4ODYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L3Rhc2tjb250ZW50L3Rhc2tDb250ZW50LmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvY3JlYXRlU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC9hZGRUYXNrSXRlbS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvZWRpdFRhc2tJdGVtLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC91cGRhdGVUYXNrUXR5LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC91cGRhdGVQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9kZWxldGVwcm9qZWN0L2RlbGV0ZVByb2plY3QuY3NzPzI0OTYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2RlbGV0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9jb250ZW50L2NvbnRlbnRcIjtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhcigpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCgpKTtcblxuZXhwb3J0IHsgYm9keSB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDcsIDFmcik7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJpbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcbmltcG9ydCBtZW51U3ZnIGZyb20gXCIvc3JjL2ljb25zL21lbnUuc3ZnXCI7XG5pbXBvcnQgcGx1c1N2ZyBmcm9tIFwiL3NyYy9pY29ucy9wbHVzLWJveC5zdmdcIjtcbmltcG9ydCB7IHNpZGViYXJEaXYgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjb250ZW50RGl2IH0gZnJvbSBcIi4uL2NvbnRlbnQvY29udGVudFwiO1xuaW1wb3J0IHsgdGFza0NvbnRlbnQgfSBmcm9tIFwiLi4vY29udGVudC90YXNrY29udGVudC90YXNrQ29udGVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRlclJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlclJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXJpZ2h0c2lkZVwiKTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRlclJpZ2h0U2lkZSk7XG5cbiAgY29uc3QgbWVudUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uXCIsIFwibWVudS1pY29uXCIpO1xuICBtZW51SWNvbi5zcmMgPSBtZW51U3ZnO1xuICBoZWFkZXJSaWdodFNpZGUuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXG4gIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcImhlYWRlci10ZXh0XCIpO1xuICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgaGVhZGVyUmlnaHRTaWRlLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG4gIGNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItaWNvblwiLCBcInBsdXMtaWNvblwiKTtcbiAgcGx1c0ljb24uc3JjID0gcGx1c1N2ZztcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHNpZGViYXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBpZiAoc2lkZWJhckRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG4gICAgICBjb250ZW50RGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvLTFcIjtcbiAgICBlbHNlIGNvbnRlbnREaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8tMVwiO1xuICB9KTtcblxuICBwbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRhc2tDb250ZW50KCk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXJEaXY7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL0ZsaXBrYXJ0L1Jpb25hLVNhbnMtVzAxLUJvbGQtSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZsaXBrYXJ0XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jaGVhZGVyLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNoZWFkZXItZGl2IC5oZWFkZXItcmlnaHRzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuXG4jaGVhZGVyLWRpdiAuaGVhZGVyLWljb24ge1xuICB3aWR0aDogMzBweDtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXRleHQge1xuICBmb250LWZhbWlseTogXCJGbGlwa2FydFwiO1xuICBjb2xvcjogIzQ3NTU2OTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hlYWRlci9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUE0RDtBQUM5RDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGbGlwa2FydFxcXCI7XFxuICBzcmM6IHVybCgvc3JjL2ZvbnRzL0ZsaXBrYXJ0L1Jpb25hLVNhbnMtVzAxLUJvbGQtSXRhbGljLnR0Zik7XFxufVxcblxcbiNoZWFkZXItZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXJpZ2h0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIkZsaXBrYXJ0XFxcIjtcXG4gIGNvbG9yOiAjNDc1NTY5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBcIi4vc2lkZWJhci5jc3NcIjtcbmltcG9ydCBsZWZ0U3ZnIGZyb20gXCIvc3JjL2ljb25zL2Fycm93LWxlZnQuc3ZnXCI7XG5pbXBvcnQgcGx1c1N2ZyBmcm9tIFwiL3NyYy9pY29ucy9wbHVzLWJveC5zdmdcIjtcbmltcG9ydCBkb3duU3ZnIGZyb20gXCIvc3JjL2ljb25zL2Fycm93LWRvd24uc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU3ZnIGZyb20gXCIvc3JjL2ljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL25ld3Byb2plY3QvIG5ld1Byb2plY3RcIjtcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gXCIuL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdFwiO1xuXG5sZXQgc2lkZWJhckRpdjtcbmxldCBsZWZ0SWNvbjtcbmxldCBwbHVzSWNvbjtcbmxldCBjcmVhdGVQcm9qZWN0SXRlbTtcbmxldCBuYXZJdGVtRGl2cyA9IFtdO1xubGV0IHByb2plY3RJdGVtcztcbmxldCBwcm9qZWN0SXRlbXNBcnIgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gIHNpZGViYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2lkZWJhci1kaXZcIik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbmF2XCIpO1xuICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXCJpbmJveFwiLCBcInRvZGF5XCIsIFwicHJvamVjdHNcIl07XG5cbiAgbmF2SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBuYXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5hdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIGBuYXYtaXRlbS0ke2VsfWApO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZJdGVtKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGVsO1xuICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgaWYgKGVsICE9PSBcInByb2plY3RzXCIpIHtcbiAgICAgIG5hdkl0ZW1EaXZzLnB1c2gobmF2SXRlbSk7XG4gICAgICBjb25zdCBuYXZTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBuYXZTcGFuLmNsYXNzTGlzdC5hZGQoXCJuYXYtc3BhblwiLCBcImhpZGRlblwiKTtcbiAgICAgIG5hdlNwYW4udGV4dENvbnRlbnQgPSAwO1xuICAgICAgbmF2SXRlbS5hcHBlbmRDaGlsZChuYXZTcGFuKTtcblxuICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2U3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIG5hdkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGVsID09PSBcInByb2plY3RzXCIpIHtcbiAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXJpZ2h0c2lkZVwiKTtcbiAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQocmlnaHRTaWRlKTtcblxuICAgICAgbGVmdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGxlZnRJY29uLnNyYyA9IGxlZnRTdmc7XG4gICAgICBsZWZ0SWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pY29uXCIsIFwibGVmdC1pY29uXCIpO1xuICAgICAgbGVmdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJDb2xsYXBzZSBQcm9qZWN0c1wiKTtcbiAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChsZWZ0SWNvbik7XG5cbiAgICAgIHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICAgICAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaWNvblwiLCBcInBsdXMtaWNvblwiKTtcbiAgICAgIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQWRkIG5ldyBwcm9qZWN0XCIpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcblxuICAgICAgbGVmdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgICBpZiAocHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgICAgICBsZWZ0SWNvbi5zcmMgPSBkb3duU3ZnO1xuICAgICAgICAgIGxlZnRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRXhwYW5kIFByb2plY3RzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQ29sbGFwc2UgUHJvamVjdHNcIik7XG4gICAgICAgICAgbGVmdEljb24uc3JjID0gbGVmdFN2ZztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ld1Byb2plY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xuICBzaWRlYmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG4gIHByb2plY3RJdGVtcyA9IFtcIndvcmtcIiwgXCJob21lXCIsIFwiZ3ltXCJdO1xuXG4gIGNyZWF0ZVByb2plY3RJdGVtID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIFwicHJvamVjdC1pdGVtXCIsIGBwcm9qZWN0LWl0ZW0tJHtlbH1gKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICBuYXZJdGVtRGl2cy5wdXNoKHByb2plY3RJdGVtKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGVsO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIGNvbnN0IG5hdlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBuYXZTcGFuLmNsYXNzTGlzdC5hZGQoXCJuYXYtc3BhblwiLCBcImhpZGRlblwiKTtcbiAgICBuYXZTcGFuLnRleHRDb250ZW50ID0gMDtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChuYXZTcGFuKTtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZVN2ZztcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWljb25cIiwgXCJoaWRkZW5cIik7XG4gICAgZGVsZXRlSWNvbi5zdHlsZS5mbG9hdCA9IFwicmlnaHRcIjtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIG5hdlNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIG5hdlNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlbGV0ZVByb2plY3QoZGVsZXRlSWNvbik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0SXRlbXNBcnIucHVzaChwcm9qZWN0SXRlbSk7XG4gIH07XG5cbiAgcHJvamVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY3JlYXRlUHJvamVjdEl0ZW0oZWwpO1xuICB9KTtcblxuICByZXR1cm4gc2lkZWJhckRpdjtcbn1cblxuZXhwb3J0IHtcbiAgc2lkZWJhckRpdixcbiAgbmF2SXRlbURpdnMsXG4gIGNyZWF0ZVByb2plY3RJdGVtLFxuICBwcm9qZWN0SXRlbXMsXG4gIHByb2plY3RJdGVtc0Fycixcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jc2lkZWJhci1kaXYge1xuICBncmlkLWNvbHVtbjogMS8xO1xuICBncmlkLXJvdzogMi8tMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI3NpZGViYXItZGl2IC5wcm9qZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSAubmF2LXNwYW4ge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSBpbWcge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtaXRlbTpob3ZlciB7XG4gIHRyYW5zbGF0ZTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaWRlYmFyLWRpdiAubmF2LXNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHggNnB4IDBweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4jc2lkZWJhci1kaXYgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2Njtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtaXRlbS1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGViYXItZGl2IC5zaWRlYmFyLWljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1yaWdodHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSB7XG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gIGNvbG9yOiAjNDc1NTY5O1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXItZGl2IC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2lkZWJhci9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEQ7QUFDaEU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUI7O2NBRVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXFxcIik7XFxufVxcblxcbiNzaWRlYmFyLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMS8xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNDA0MDQwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSAubmF2LXNwYW4ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIGltZyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5uYXYtaXRlbTpob3ZlciB7XFxuICB0cmFuc2xhdGU6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAubmF2LXNwYW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDJweCA2cHggMHB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XFxuICBjb2xvcjogIzQ3NTU2OTtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zaWRlYmFyLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFwiLi9uZXdQcm9qZWN0LmNzc1wiO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEl0ZW0sIHByb2plY3RJdGVtcyB9IGZyb20gXCIuLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vLi4vY29udGVudC9jcmVhdGVDb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb250YWluZXJcIik7XG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtaGVhZGVyXCIpO1xuICBuZXdQcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld1Byb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwibmFtZVwiO1xuICBuZXdQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XG5cbiAgY29uc3QgbGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxhYmVsU3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBuZXdQcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxTcGFuKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkTmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgYWRkTmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3cHJvamVjdC1idG5cIik7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdEJ0bik7XG5cbiAgZnVuY3Rpb24gY2hlY2tFbGVtZW50KGVsZW1lbnQsIGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnRvTG93ZXJDYXNlKCkgPT09IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2hlY2tFbGVtZW50KG5ld1Byb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0SXRlbXMpKSB7XG4gICAgICBhbGVydChcIlRoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgICAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdQcm9qZWN0TmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY3JlYXRlUHJvamVjdEl0ZW0obmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgcHJvamVjdEl0ZW1zLnB1c2gobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgbmV3UHJvamVjdERpdi5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnByb2plY3RzLXF0eVwiXG4gICAgICApLnRleHRDb250ZW50ID0gYCR7cHJvamVjdEl0ZW1zLmxlbmd0aH0gcHJvamV0cyBgO1xuXG4gICAgICBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0oXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCIpXG4gICAgICApO1xuXG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0TmFtZS52YWxpZGl0eS52YWxpZCkgYWxlcnQoXCJFbnRlciBwcm9qZWN0IG5hbWUsIHBsZWFzZVwiKTtcbiAgfSk7XG5cbiAgbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmV3LXByb2plY3QtY29udGFpbmVyXCIpKSBuZXdQcm9qZWN0RGl2LnJlbW92ZSgpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld1Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdQcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiNuZXctcHJvamVjdCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNuZXctcHJvamVjdCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNuZXctcHJvamVjdCBpbnB1dCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTFhMWFhO1xufVxuXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZTRlNGU3O1xufVxuXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2xhdGU6IDNweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NpZGViYXIvbmV3cHJvamVjdC9uZXdQcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBd0Y7QUFDMUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90Zik7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN2VtO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogIzQ3NTU2OTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiNuZXctcHJvamVjdCBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMWExYWE7XFxufVxcblxcbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjb2xvcjogI2U0ZTRlNztcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXdwcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2xhdGU6IDNweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IG5hdkl0ZW1EaXZzLCBwcm9qZWN0SXRlbXMsIHByb2plY3RJdGVtc0FyciB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnRzLCBjb250ZW50RGl2IH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHsgdGFza0NvbnRlbnQgfSBmcm9tIFwiLi90YXNrY29udGVudC90YXNrQ29udGVudFwiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdE9wdGlvbiBmcm9tIFwiLi90YXNrY29udGVudC9jcmVhdGVTZWxlY3RPcHRpb25cIjtcbmltcG9ydCBwbHVzU3ZnIGZyb20gXCIvc3JjL2ljb25zL3BsdXMtYm94LnN2Z1wiO1xuXG5jb25zdCBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgcHJvamVjdHNDb250YWluZXIpIHtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXByb2plY3QtaXRlbVwiLCBgcHJvamVjdC1pdGVtLSR7aXRlbX1gKTtcbiAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgcHJvamVjdC1pdGVtLSR7cHJvamVjdEl0ZW0udGV4dENvbnRlbnR9YCkpXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoZWwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50KGl0ZW0pIHtcbiAgaWYgKGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKSkge1xuICAgIG5hdkl0ZW1EaXZzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pdGVtLXByb2plY3RzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke2l0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnR9YClcbiAgICAgIClcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGVsc2UgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1pdGVtLXByb2plY3RzXCIpKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1xdHlcIikpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5wcm9qZWN0cy1xdHlcIlxuICAgICAgICApLnRleHRDb250ZW50ID0gYCR7cHJvamVjdEl0ZW1zLmxlbmd0aH0gcHJvamVjdHNgO1xuICAgICAgfVxuICAgIH1cblxuICAgIGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgaWYgKGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmVhdGVkXCIpKSByZXR1cm47XG4gICAgaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVkXCIpO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICAgICAgYGNvbnRlbnQtJHtpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50fWBcbiAgICApO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGVudHMucHVzaChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkZXJcIik7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQ7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50SGVhZGVyKTtcblxuICAgIGxldCBwcm9qZWNzdHNRdHk7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWl0ZW0tcHJvamVjdHNcIikpIHtcbiAgICAgIHByb2plY3N0c1F0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWNzdHNRdHkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0SXRlbXMubGVuZ3RofSBwcm9qZWN0cyBgO1xuICAgICAgcHJvamVjc3RzUXR5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1xdHlcIik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3N0c1F0eSk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAgIHByb2plY3RJdGVtc0Fyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbShcbiAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZFRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay10ZXh0XCIpO1xuICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuXG4gICAgY29uc3QgdGFza0l0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRhc2tJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtcy1jb250YWluZXJcIik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtcHJvamVjdFwiKTtcblxuICAgIGFkZFRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrQ29udGVudCgpO1xuXG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJESVZcIikge1xuICAgICAgICBjcmVhdGVTZWxlY3RPcHRpb24oZS50YXJnZXQsIHNlbGVjdE9wdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIklNR1wiIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiUFwiKSB7XG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbihlLnRhcmdldCwgc2VsZWN0T3B0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gfTtcbiIsImltcG9ydCBcIi4vY29udGVudC5jc3NcIjtcbmltcG9ydCB7IHNpZGViYXJEaXYgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSBcIi4vY3JlYXRlQ29udGVudFwiO1xuaW1wb3J0IHsgbmF2SXRlbURpdnMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyXCI7XG5cbmxldCBjb250ZW50RGl2O1xubGV0IGNvbnRlbnRzID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZW50KCkge1xuICBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnQtZGl2XCIpO1xuXG4gIG5hdkl0ZW1EaXZzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVDb250ZW50KGl0ZW0pO1xuICB9KTtcblxuICBjcmVhdGVDb250ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0tcHJvamVjdHNcIikpO1xuXG4gIHNpZGViYXJEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItaWNvblwiKSkgcmV0dXJuO1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIlNQQU5cIiB8fCBlLnRhcmdldC50YWdOYW1lID09PSBcIlBcIilcbiAgICAgIGNyZWF0ZUNvbnRlbnQoZS50YXJnZXQuY2xvc2VzdChcIi5uYXYtaXRlbVwiKSk7XG4gICAgZWxzZSBjcmVhdGVDb250ZW50KGUudGFyZ2V0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmV4cG9ydCB7IGNvbnRlbnREaXYgfTtcbmV4cG9ydCB7IGNvbnRlbnRzIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zL2NhbGVuZGFyLXJhbmdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0Y2hhLVNlcmlmXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jY29udGVudC1kaXYge1xuICBncmlkLWNvbHVtbjogMi8tMTtcbiAgZ3JpZC1yb3c6IDIvLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6ICMwMjA2MTc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIgLmFkZC10YXNrLXRleHQge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAucHJvamVjdHMtcXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MzczNzM7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4jY29udGVudC1kaXYgLm1vdXNlZW50ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC50aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1kYXRlLXBhcmEge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXByaW9yaXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NDc0OGI7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tcmlnaHRzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tbGVmdHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5lZGl0LWljb24sXG4jY29udGVudC1kaXYgLmRlbGV0ZS1pY29uLFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZS1jb250YWluZXI6aG92ZXIge1xuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRldGV4dC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jY29udGVudC1kaXYgLm5ldy1wcmlvcml0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNjAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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QUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQXNEO0VBQ3RELDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Q7c0RBQ29EO0VBQ3BELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGNoYS1TZXJpZlxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBjb2xvcjogIzAyMDYxNztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMWExYWE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmFkZC10YXNrLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2OmhvdmVyIC5hZGQtdGFzay10ZXh0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnByb2plY3RzLXF0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNzM3MzczO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5tb3VzZWVudGVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjQ3NDhiO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1sZWZ0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdC1pY29uLFxcbiNjb250ZW50LWRpdiAuZGVsZXRlLWljb24sXFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdGFibGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmRhdGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTJweDtcXG4gIHRvcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaWNvbnMvY2FsZW5kYXItcmFuZ2Uuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXRleHQtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5uZXctcHJpb3JpdHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3aWR0aDogNjAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgXCIuL3Rhc2tDb250ZW50LmNzc1wiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdE9wdGlvbiBmcm9tIFwiLi9jcmVhdGVTZWxlY3RPcHRpb25cIjtcbmltcG9ydCBhZGRUYXNrSXRlbSBmcm9tIFwiLi9hZGRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5sZXQgdmFsaWRhdGVEYXRlO1xubGV0IHRhc2tQcmlvcml0eTtcbmxldCBjb3VudGVyID0gMDtcbmxldCB0YXNrSXRlbTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tDb250ZW50KCkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1jb250ZW50XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcblxuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1mb3JtXCIpO1xuICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIG5hbWVcIik7XG4gIHRhc2tOYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IHdyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyLWRpdlwiKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQod3JhcHBlckRpdik7XG5cbiAgY29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kYXRlXCIpO1xuICB0YXNrRGF0ZS52YWx1ZSA9IGRhdGVTdHJpbmc7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuXG4gIHZhbGlkYXRlRGF0ZSA9IGZ1bmN0aW9uICh0YXNrRGF0ZSkge1xuICAgIGlmICghdGFza0RhdGUpIHJldHVybiB0cnVlO1xuICAgIGlmICh0YXNrRGF0ZSA8IGRhdGVTdHJpbmcpIHtcbiAgICAgIGFsZXJ0KFwiWW91IGNhbm5vdCBlbnRlciBhbiBvbGQgZGF0ZS4gUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZS5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktc2VsZWN0XCIpO1xuICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA1OyBpKyspIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LW9wdGlvblwiLCBgb3B0aW9uLSR7aX1gKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gYFByaW9yaXR5ICR7aX1gO1xuICAgIHRhc2tQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGlmIChpID09IDQpIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgfVxuXG4gIGNvbnN0IGxhc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsYXN0RGl2LmNsYXNzTGlzdC5hZGQoXCJsYXN0LWRpdlwiKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQobGFzdERpdik7XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1wcm9qZWN0XCIpO1xuICBsYXN0RGl2LmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3QpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcblxuICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY3JlYXRlU2VsZWN0T3B0aW9uKGl0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQsIHNlbGVjdFByb2plY3QpO1xuICB9KTtcblxuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250YWluZXJcIik7XG4gIGxhc3REaXYuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcImNhbmNlbFwiO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiY2FuY2VsLWJ0blwiKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJhZGQgdGFza1wiO1xuICBhZGRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiLCBcImFkZC1idG5cIik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1idG5cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGFza0NvbnRlbnQucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIHRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgYWRkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2QzM2EyY1wiO1xuICAgICAgYWRkQnRuLnN0eWxlLmJveFNoYWRvdyA9IFwicmdiYSgwLCAwLCAwLCAwLjEyKSAwIDFweCAzcHggMCBpbnNldFwiO1xuICAgICAgYWRkQnRuLnN0eWxlLmNvbG9yID0gXCIjZmZmZmZmXCI7XG4gICAgfVxuICAgIGlmICghdGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBhZGRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZlN2U3XCI7XG4gICAgICBhZGRCdG4uc3R5bGUuY29sb3IgPSBcIiNkYzI2MjZcIjtcbiAgICAgIGFkZEJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tJdGVtID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH07XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2YWxpZGF0ZURhdGUodGFza0RhdGUudmFsdWUpKSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnRlbnRJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGBjb250ZW50LSR7c2VsZWN0UHJvamVjdC52YWx1ZX1gKSkge1xuICAgICAgICAgIGNvbnN0IG5ld1Rhc2tJdGVtID0gbmV3IHRhc2tJdGVtKFxuICAgICAgICAgICAgdGFza05hbWUudmFsdWUsXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICB0YXNrRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3QudmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIGFkZFRhc2tJdGVtKG5ld1Rhc2tJdGVtLCBlbCwgY291bnRlcik7XG5cbiAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0YXNrRGF0ZS52YWx1ZSkpKSB7XG4gICAgICAgICAgICBuZXdUYXNrSXRlbS5wcm9qZWN0ID0gXCJ0b2RheVwiO1xuICAgICAgICAgICAgYWRkVGFza0l0ZW0oXG4gICAgICAgICAgICAgIG5ld1Rhc2tJdGVtLFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kYXlcIiksXG4gICAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNvbnRhaW5lclwiKSkgdGFza0NvbnRlbnQucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyB2YWxpZGF0ZURhdGUsIHRhc2tQcmlvcml0eSwgdGFza0l0ZW0gfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrQ29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tDb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZyZW5zdHlsZS9GcmVuc3R5bGUtQkY2NTI0ZWRjMDFkYzE2Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI3Rhc2stY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI3Rhc2stY29udGVudCAudGFzay1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA0JTtcbiAgYm94LXNoYWRvdzogMCAyNnB4IDU4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjIpLFxuICAgIDAgNXB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4jdGFzay1jb250ZW50IC50YXNrLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cbiN0YXNrLWNvbnRlbnQgLnRhc2stZm9ybTpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuI3Rhc2stY29udGVudCAudGFzay1uYW1lLFxuLnRhc2stZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwYWRkaW5nOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4jdGFzay1jb250ZW50IC5kYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDMxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZiNzI4MDtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzJTtcbn1cblxuI3Rhc2stY29udGVudCAuZGF0ZS1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmRhdGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzY0NzQ4Yjtcbn1cblxuI3Rhc2stY29udGVudCAudGFzay1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiN0YXNrLWNvbnRlbnQgLndyYXBwZXItZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjQ3NDhiO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuI3Rhc2stY29udGVudCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4jdGFzay1jb250ZW50IC5wcmlvcml0eS1zZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4jdGFzay1jb250ZW50IC5zZWxlY3QtcHJvamVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jdGFzay1jb250ZW50IC5zZWxlY3QtcHJvamVjdCxcbi5jYW5jZWwtYnRuLFxuLmFkZC1idG4ge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDNweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmxhc3QtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jdGFzay1jb250ZW50IC5idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxM3B4O1xufVxuXG4jdGFzay1jb250ZW50IC5jYW5jZWwtYnRuIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM2ZTZkNzA7XG4gIGJveC1zaGFkb3c6IDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuICAgIGluc2V0IDBweCAwLjVweCAwLjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXG4gICAgMHB4IDBweCAwcHggMC41cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY29sb3I6ICNkZmRlZGY7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmNhbmNlbC1idG46aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMC44cHggMHB4IC0wLjI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxuICAgIDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMHB4IDBweCAzLjVweCByZ2JhKDU4LCAxMDgsIDIxNywgMC41KTtcbiAgb3V0bGluZTogMDtcbn1cblxuI3Rhc2stY29udGVudCAuYWRkLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3ZTc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzI2MjY7XG4gIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gIGNvbG9yOiAjZDMzYTJjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmFkZC1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzM2EyYztcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDFweCAzcHggMCBpbnNldDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmFkZC1idG46aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGMyNjI2O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC90YXNrY29udGVudC90YXNrQ29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQThEO0FBQ2hFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakI7b0NBQ2tDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUU7c0RBQ29EO0VBQ3BELFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQjtzREFDb0Q7RUFDcEQsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Q7c0RBQ29EO0VBQ3BELGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25COzt5Q0FFdUM7RUFDdkMsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7K0VBQzZFO0VBQzdFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlEQUFpRDtFQUNqRCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXFxcIik7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnRhc2stY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzNiU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgYm94LXNoYWRvdzogMCAyNnB4IDU4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjIpLFxcbiAgICAwIDVweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogM3B4O1xcbn1cXG4jdGFzay1jb250ZW50IC50YXNrLWZvcm06Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLW5hbWUsXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnRhc2stbmFtZSB7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmRhdGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDMxJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjcyODA7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAzJTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuZGF0ZS1jb250YWluZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuZGF0ZS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGNvbG9yOiAjNjQ3NDhiO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLWljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLndyYXBwZXItZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY0NzQ4YjtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jdGFzay1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY29sb3I6ICM2NDc0OGI7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAucHJpb3JpdHktc2VsZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0LFxcbi5jYW5jZWwtYnRuLFxcbi5hZGQtYnRuIHtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5sYXN0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3B4O1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5jYW5jZWwtYnRuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjNmU2ZDcwO1xcbiAgYm94LXNoYWRvdzogMHB4IDAuNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgIGluc2V0IDBweCAwLjVweCAwLjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXFxuICAgIDBweCAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBjb2xvcjogI2RmZGVkZjtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5jYW5jZWwtYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwLjhweCAwcHggLTAuMjVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksXFxuICAgIDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggMHB4IDBweCAzLjVweCByZ2JhKDU4LCAxMDgsIDIxNywgMC41KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmFkZC1idG4ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTdlNztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzI2MjY7XFxuICBib3JkZXItcmFkaXVzOiAxMXB4O1xcbiAgY29sb3I6ICNkMzNhMmM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMzYTJjO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwIDFweCAzcHggMCBpbnNldDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzI2MjY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJsZXQgcHJvamVjdEdyb3VwO1xubGV0IGl0ZW1UZXh0O1xubGV0IHNlbGVjdEl0ZW1zO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb24oaXRlbSwgc2VsZWN0UHJvamVjdCkge1xuICBpZiAoaXRlbS50YWdOYW1lID09PSBcIlBcIiB8fCBpdGVtLnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICBpdGVtVGV4dCA9IGl0ZW0ucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgc2VsZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdC1pdGVtXCIpO1xuICAgIHNlbGVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgc2VsZWN0LWl0ZW0tJHtpdGVtVGV4dH1gKSlcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gXCJESVZcIikge1xuICAgIGl0ZW1UZXh0ID0gaXRlbS5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgc2VsZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdC1pdGVtXCIpO1xuICAgIHNlbGVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGBzZWxlY3QtaXRlbS0ke2l0ZW1UZXh0fWApKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpdGVtVGV4dCA9IGl0ZW07XG4gIGlmIChpdGVtVGV4dCA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgcHJvamVjdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGdyb3VwXCIpO1xuICAgIHByb2plY3RHcm91cC5sYWJlbCA9IFwiUHJvamVjdHNcIjtcbiAgICBzZWxlY3RQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RHcm91cCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBzZWxlY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtaXRlbVwiLCBgc2VsZWN0LWl0ZW0tJHtpdGVtVGV4dH1gKTtcbiAgc2VsZWN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW1UZXh0O1xuICBzZWxlY3RJdGVtLnZhbHVlID0gaXRlbVRleHQ7XG5cbiAgaWYgKGl0ZW1UZXh0ID09PSBcInRvZGF5XCIpIHJldHVybjtcblxuICBpZiAoaXRlbVRleHQgPT09IFwiaW5ib3hcIikgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChzZWxlY3RJdGVtKTtcbiAgZWxzZSBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQoc2VsZWN0SXRlbSk7XG59XG4iLCJpbXBvcnQgY29tbWVudFN2ZyBmcm9tIFwiL3NyYy9pY29ucy9jb21tZW50LnN2Z1wiO1xuaW1wb3J0IGVkaXRTdmcgZnJvbSBcIi9zcmMvaWNvbnMvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tIFwiL3NyYy9pY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZWRpdFRhc2tJdGVtLCB7IGVkaXREYXRlIH0gZnJvbSBcIi4vZWRpdFRhc2tJdGVtXCI7XG5pbXBvcnQgeyB0YXNrUHJpb3JpdHkgfSBmcm9tIFwiLi90YXNrQ29udGVudFwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuL3VwZGF0ZVRhc2tRdHlcIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgeyB1cGRhdGVQcmlvcml0eSB9IGZyb20gXCIuL3VwZGF0ZVByaW9yaXR5XCI7XG5cbmxldCBmb3JtYXREYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrSXRlbShpdGVtLCBjb250ZW50SXRlbSwgY291bnRlcikge1xuICBjb3VudGVyKys7XG4gIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIsIGB0YXNrLWl0ZW0tJHtjb3VudGVyfWApO1xuICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIGZhbHNlKTtcblxuICBjb25zdCB0YXNrSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtcy1jb250YWluZXJcIik7XG5cbiAgdGFza0l0ZW1Db250YWluZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChjb250ZW50SXRlbS5jb250YWlucyhpdGVtKSkgaXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtLS1yaWdodHNpZGVcIik7XG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLXRpdGxlXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrVGl0bGVCZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGFza1RpdGxlQmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWJlZm9yZVwiKTtcbiAgdXBkYXRlUHJpb3JpdHkoaXRlbS5wcmlvcml0eSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgdGl0bGVDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tUaXRsZUJlZm9yZSwgdGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25Db250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWludGVyKTtcblxuICBjb25zdCBjb21tZW50SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb21tZW50SWNvbi5zcmMgPSBjb21tZW50U3ZnO1xuICBjb21tZW50SWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIsIFwiY29tbWVudC1pY29uXCIpO1xuICB0YXNrRGVzY3JpcHRpb25Db250YWludGVyLmFwcGVuZENoaWxkKGNvbW1lbnRJY29uKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gIGNvbnN0IGRhdGVwaWNrZXJUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGF0ZXBpY2tlclRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXBpY2tlci10b2dnbGVcIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZSk7XG5cbiAgY29uc3QgZGF0ZXBpY2tlclRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlcGlja2VyVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJkYXRlcGlja2VyLXRvZ2dsZS1idXR0b25cIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZUJ0bik7XG5cbiAgY29uc3QgZGF0ZXBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlcGlja2VySW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVwaWNrZXItaW5wdXRcIik7XG4gIGRhdGVwaWNrZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlcGlja2VySW5wdXQpO1xuICBkYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGZvcm1hdERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLXVzXCIsIHsgZGF0ZVN0eWxlOiBcImxvbmdcIiB9KTtcbiAgY29uc3QgZGF0ZXRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZXRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRleHQtaW5wdXRcIik7XG4gIGRhdGV0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgaWYgKGlzVG9kYXkobmV3IERhdGUoaXRlbS5kdWVEYXRlKSkpXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlRvZGF5XCIpO1xuICBlbHNlXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZhbHVlXCIsXG4gICAgICBpdGVtLmR1ZURhdGUgPyBgJHtmb3JtYXREYXRlLmZvcm1hdChuZXcgRGF0ZShpdGVtLmR1ZURhdGUpKX1gIDogXCJObyBkYXRlXCJcbiAgICApO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGV0ZXh0SW5wdXQpO1xuXG4gIGNvbnN0IG5ld1ByaW9yaXR5ID0gdGFza1ByaW9yaXR5LmNsb25lTm9kZSh0cnVlKTtcbiAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5ldy1wcmlvcml0eVwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgbmV3UHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdFNpZGUuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbS0tbGVmdHNpZGVcIik7XG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKGxlZnRTaWRlKTtcblxuICBjb25zdCBlZGl0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIsIFwiZWRpdC1pY29uXCIsIFwiaGlkZGVuXCIpO1xuICBlZGl0SWNvbi5zcmMgPSBlZGl0U3ZnO1xuICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkVkaXQgdGFza1wiKTtcbiAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuXG4gIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIsIFwiZGVsZXRlLWljb25cIiwgXCJoaWRkZW5cIik7XG4gIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlU3ZnO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICB1cGRhdGVUYXNrUXR5KGl0ZW0ucHJvamVjdCk7XG5cbiAgZnVuY3Rpb24gY2xhc3NUb2dnbGUoKSB7XG4gICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIG5ld1ByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgZWRpdEljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH1cblxuICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0YXNrSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgY2xhc3NUb2dnbGUoKTtcbiAgICAgIHRhc2tJdGVtLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFza0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgIGNsYXNzVG9nZ2xlKCk7XG4gICAgfVxuICB9KTtcblxuICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIHVwZGF0ZVRhc2tRdHkoZS50YXJnZXQpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1pdGVtXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWl0ZW1cIikuY2xhc3NMaXN0WzFdKVxuICAgICAgKSB7XG4gICAgICAgIHVwZGF0ZVRhc2tRdHkoaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1pY29uXCIpKTtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZWRpdFRhc2tJdGVtKFxuICAgICAgZSxcbiAgICAgIHRhc2tJdGVtLFxuICAgICAgdGFza1RpdGxlLFxuICAgICAgZWRpdEljb24sXG4gICAgICBkYXRlcGlja2VySW5wdXQsXG4gICAgICBuZXdQcmlvcml0eVxuICAgICk7XG4gIH0pO1xuXG4gIGRhdGVwaWNrZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBlZGl0RGF0ZShkYXRlcGlja2VySW5wdXQudmFsdWUsIGRhdGV0ZXh0SW5wdXQpO1xuICB9KTtcblxuICBuZXdQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVQcmlvcml0eShuZXdQcmlvcml0eS52YWx1ZSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGZvcm1hdERhdGUgfTtcbiIsImltcG9ydCBzYXZlU3ZnIGZyb20gXCIvc3JjL2ljb25zL2NvbnRlbnQtc2F2ZS5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIvc3JjL2ljb25zL3BlbmNpbC5zdmdcIjtcbmltcG9ydCB7IHZhbGlkYXRlRGF0ZSwgdGFza0l0ZW0gYXMgbmV3VGFza0l0ZW0gfSBmcm9tIFwiLi90YXNrQ29udGVudFwiO1xuaW1wb3J0IGFkZFRhc2tJdGVtLCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiLi9hZGRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuL3VwZGF0ZVRhc2tRdHlcIjtcbmltcG9ydCB7IHVwZGF0ZVByaW9yaXR5IH0gZnJvbSBcIi4vdXBkYXRlUHJpb3JpdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdFRhc2tJdGVtKFxuICBldmVudCxcbiAgdGFza0l0ZW0sXG4gIHRhc2tUaXRsZSxcbiAgZWRpdEljb24sXG4gIGRhdGVwaWNrZXJJbnB1dCxcbiAgbmV3UHJpb3JpdHlcbikge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXRhYmxlLWl0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdChcIi50YXNrLWl0ZW1cIikuY29udGFpbnMoaXRlbSkpIHtcbiAgICAgIGl0ZW0uY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGV2ZW50Q29udGVudCA9IGV2ZW50LnRhcmdldFxuICAgIC5jbG9zZXN0KFwiLmNvbnRlbnQtY29udGFpbmVyXCIpXG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcblxuICB0YXNrSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG4gIGlmICh0YXNrSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIHRhc2tUaXRsZS5mb2N1cygpO1xuICAgIGVkaXRJY29uLnNyYyA9IHNhdmVTdmc7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJTYXZlIGNoYW5nZXNcIik7XG5cbiAgICBpZiAoZXZlbnRDb250ZW50ICE9PSBcInRvZGF5XCIpIGRhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIG5ld1ByaW9yaXR5LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgaWYgKCF0YXNrSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgIGVkaXRJY29uLnNyYyA9IGVkaXRTdmc7XG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFZGl0IHRhc2tcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0YWJsZS1pdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uY29udGVudEVkaXRhYmxlID0gZmFsc2U7XG4gICAgfSk7XG4gICAgZGF0ZXBpY2tlcklucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBuZXdQcmlvcml0eS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcbiAgICBjb25zdCBjdXJyZW50VGl0bGUgPVxuICAgICAgY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW0tLXRpdGxlXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGN1cnJlbnREZXNjcmlwdGlvbiA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCJcbiAgICApLnRleHRDb250ZW50O1xuICAgIGNvbnN0IGN1cnJlbnRQcmlvcml0eSA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktc2VsZWN0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5kYXRlcGlja2VyLWlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlVGV4dCA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZXRleHQtaW5wdXRcIikudmFsdWU7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SXRlbVF0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGAudGFzay1pdGVtLSR7Y3VycmVudEl0ZW0uY2xhc3NMaXN0WzFdLnNsaWNlKC0xKX1gXG4gICAgICApO1xuXG4gICAgICBpZiAoaXRlbSA9PT0gY3VycmVudEl0ZW0gJiYgY3VycmVudEl0ZW1RdHkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChjdXJyZW50RGF0ZVRleHQgJiYgY3VycmVudERhdGUgJiYgaXNUb2RheShuZXcgRGF0ZShjdXJyZW50RGF0ZSkpKSB7XG4gICAgICAgICAgY29uc3QgdG9kYXlJdGVtID0gbmV3IG5ld1Rhc2tJdGVtKFxuICAgICAgICAgICAgY3VycmVudFRpdGxlLFxuICAgICAgICAgICAgY3VycmVudERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgY3VycmVudERhdGUsXG4gICAgICAgICAgICBjdXJyZW50UHJpb3JpdHksXG4gICAgICAgICAgICBcInRvZGF5XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBjdXJyZW50SXRlbS5jbGFzc0xpc3RbMV0uc2xpY2UoLTEpIC0gMTtcbiAgICAgICAgICBhZGRUYXNrSXRlbShcbiAgICAgICAgICAgIHRvZGF5SXRlbSxcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC10b2RheVwiKSxcbiAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGN1cnJlbnRJdGVtLmNsYXNzTGlzdFsxXSkpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZXBpY2tlci1pbnB1dFwiKS52YWx1ZSAmJlxuICAgICAgICAgICFpc1RvZGF5KFxuICAgICAgICAgICAgbmV3IERhdGUoY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5kYXRlcGlja2VyLWlucHV0XCIpLnZhbHVlKVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdXBkYXRlVGFza1F0eShcbiAgICAgICAgICAgIGl0ZW0uY2xvc2VzdChcIi5jb250ZW50LWNvbnRhaW5lclwiKS5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbS0tdGl0bGVcIikudGV4dENvbnRlbnQgPSBjdXJyZW50VGl0bGU7XG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1zZWxlY3RcIikudmFsdWUgPSBjdXJyZW50UHJpb3JpdHk7XG4gICAgICAgIHVwZGF0ZVByaW9yaXR5KFxuICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1zZWxlY3RcIikudmFsdWUsXG4gICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGUtYmVmb3JlXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXREYXRlKGRhdGVwaWNrZXJJbnB1dCwgZGF0ZXRleHRJbnB1dCkge1xuICBpZiAoIWRhdGVwaWNrZXJJbnB1dCkge1xuICAgIGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBcIk5vIGRhdGVcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzVG9kYXkobmV3IERhdGUoZGF0ZXBpY2tlcklucHV0KSkpIGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBcIlRvZGF5XCI7XG4gIGVsc2VcbiAgICB2YWxpZGF0ZURhdGUoZGF0ZXBpY2tlcklucHV0KVxuICAgICAgPyAoZGF0ZXRleHRJbnB1dC52YWx1ZSA9IGZvcm1hdERhdGUuZm9ybWF0KG5ldyBEYXRlKGRhdGVwaWNrZXJJbnB1dCkpKVxuICAgICAgOiAoZGF0ZXRleHRJbnB1dC52YWx1ZSA9IFwiTm8gZGF0ZVwiKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrUXR5KHZhbHVlLCBhY2MgPSAwKSB7XG4gIGxldCBjb3VudGVyID0gMCArIGFjYztcbiAgaWYgKHZhbHVlLnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICBjb3VudGVyID0gMTtcbiAgICB2YWx1ZSA9IHZhbHVlLmNsb3Nlc3QoXCIuY29udGVudC1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICB9XG5cbiAgY29uc3QgbmF2U3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zcGFuXCIpO1xuICBuYXZTcGFucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGVsLmNsb3Nlc3QoYC5uYXYtaXRlbS0ke3ZhbHVlfWApIHx8XG4gICAgICBlbC5jbG9zZXN0KGAucHJvamVjdC1pdGVtLSR7dmFsdWV9YClcbiAgICApXG4gICAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LSR7dmFsdWV9YClcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW1zLWNvbnRhaW5lclwiKS5jaGlsZEVsZW1lbnRDb3VudCAtIGNvdW50ZXI7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByaW9yaXR5KHByaW9yaXR5LCB0YXNrVGl0bGVCZWZvcmUpIHtcbiAgaWYgKCtwcmlvcml0eSA9PT0gNCkgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgaWYgKCtwcmlvcml0eSA9PT0gMykgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xuICBpZiAoK3ByaW9yaXR5ID09PSAyKSB0YXNrVGl0bGVCZWZvcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJvcmFuZ2VcIjtcbiAgaWYgKCtwcmlvcml0eSA9PT0gMSkgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59XG4iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImltcG9ydCBcIi4vZGVsZXRlUHJvamVjdC5jc3NcIjtcbmltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tIFwiLi4vLi4vY29udGVudC9jcmVhdGVDb250ZW50XCI7XG5pbXBvcnQgZGVsZXRlQ29udGVudCBmcm9tIFwiLi4vLi4vY29udGVudC9kZWxldGVDb250ZW50XCI7XG5pbXBvcnQgeyBwcm9qZWN0SXRlbXMgfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuLi8uLi9jb250ZW50L3Rhc2tjb250ZW50L3VwZGF0ZVRhc2tRdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChkZWxldGVJY29uKSB7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgZGVsZXRlUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBkZWxldGVQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1oZWFkZXJcIik7XG4gIGRlbGV0ZVByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD9cIjtcbiAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRucy1jb250YWluZXJcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIsIFwieWVzLWJ0blwiKTtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJ5ZXNcIjtcbiAgYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuXG4gIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbm9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIiwgXCJuby1idG5cIik7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJub1wiO1xuICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGFycmF5LCBlbGVtZW50VG9SZW1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZGVsZXRlSWNvbi5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW50LWNvbnRhaW5lclwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke3Byb2plY3ROYW1lfWApKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuSXRlbXMgPSBlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnRhc2staXRlbXMtY29udGFpbmVyXCJcbiAgICAgICAgKS5jaGlsZHJlbjtcblxuICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuSXRlbXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIikuZm9yRWFjaCgoZWwyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwyLmNsYXNzTGlzdC5jb250YWlucyhlbC5jbGFzc0xpc3RbMV0pKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVRhc2tRdHkoZWwyLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWljb25cIikpO1xuICAgICAgICAgICAgICBlbDIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIGRlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICAgIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1pbmJveFwiKSk7XG4gICAgZGVsZXRlQ29udGVudChkZWxldGVJY29uLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmIChwcm9qZWN0SXRlbXMuaW5jbHVkZXMoZGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50KSlcbiAgICAgIHJlbW92ZUVsZW1lbnQocHJvamVjdEl0ZW1zLCBkZWxldGVJY29uLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQpO1xuXG4gICAgY29uc3QgY29udGVudFByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5jb250ZW50LXByb2plY3QtaXRlbVwiXG4gICAgKTtcblxuICAgIGNvbnRlbnRQcm9qZWN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgIGBwcm9qZWN0LWl0ZW0tJHtkZWxldGVJY29uLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnR9YFxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi5kZWxldGUtcHJvamVjdC1jb250YWluZXJcIikpIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbGV0ZVByb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZWxldGVQcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jZGVsZXRlLXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogMTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5idG5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1idG4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZWxldGUtcHJvamVjdCAueWVzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWEzMGQ7XG59XG5cbiNkZWxldGUtcHJvamVjdCAubm8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBd0Y7QUFDMUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICBzcmM6IHVybCgvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGYpO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIHdpZHRoOiAxOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogIzQ3NTU2OTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC55ZXMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWEzMGQ7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAubm8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBjb250ZW50cyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQ29udGVudChpdGVtKSB7XG4gIGNvbnRlbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke2l0ZW0udGV4dENvbnRlbnR9YCkpIGVsLnJlbW92ZSgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=