/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   taskItem: () => (/* binding */ taskItem),
/* harmony export */   validateDate: () => (/* binding */ validateDate)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _content_taskcontent_addTaskItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);






const body = document.querySelector("body");

body.appendChild((0,_header_header__WEBPACK_IMPORTED_MODULE_1__.header)());
body.appendChild((0,_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_2__.sidebar)());
body.appendChild((0,_content_content__WEBPACK_IMPORTED_MODULE_3__.content)());

const taskArr = [];
const currentTasks = JSON.parse(localStorage.getItem("tasks"));

const validateDate = function (taskDate) {
  const dateString = new Date().toISOString().slice(0, 10);
  if (!taskDate) return true;
  if (taskDate < dateString) {
    alert("You cannot enter an old date. Please enter a valid date.");
    return false;
  } else return true;
};

const taskItem = function (
  title,
  description,
  dueDate,
  priority,
  project,
  counter
) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.counter = counter;
};

if (currentTasks && currentTasks.length > 0) {
  currentTasks.forEach((task) => {
    (0,_content_taskcontent_addTaskItem__WEBPACK_IMPORTED_MODULE_4__["default"])(
      task,
      document.querySelector(`.content-${task.project}`),
      task.counter
    );
  });
} else localStorage.setItem("tasks", JSON.stringify(taskArr));




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
let projectItems;
let navItemDivs = [];
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

  projectItems = ["work", "home", "gym"];

  const storageProjectItems = JSON.parse(localStorage.getItem("projectItems"));

  if (storageProjectItems)
    storageProjectItems.forEach((el) => {
      createProjectItem(el);
    });
  else
    projectItems.forEach((el) => {
      createProjectItem(el);
      localStorage.setItem("projectItems", JSON.stringify(projectItems));
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

  const projectItems = JSON.parse(localStorage.getItem("projectItems"));

  addNewProjectBtn.addEventListener("click", function () {
    if (checkElement(newProjectName.value, projectItems)) {
      alert("This project already exist");
      newProjectName.value = "";
      return;
    }

    if (newProjectName.validity.valid) {
      (0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.createProjectItem)(newProjectName.value);
      projectItems.push(newProjectName.value);
      newProjectDiv.remove();
      document.querySelector(
        ".projects-qty"
      ).textContent = `${projectItems.length} projets `;

      (0,_content_createContent__WEBPACK_IMPORTED_MODULE_3__.createContentProjectItem)(
        newProjectName.value,
        document.querySelector(".content-projects-container")
      );

      const storageProjectItems = JSON.parse(
        localStorage.getItem("projectItems")
      );

      storageProjectItems.push(newProjectName.value);
      localStorage.setItem("projectItems", JSON.stringify(storageProjectItems));

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

  createContent(document.querySelector(`.project-item-${item}`));
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
      let projects;
      if (document.querySelector(".content-projects-container")) {
        projects = document.querySelector(
          ".content-projects-container"
        ).childElementCount;
      }
      if (document.querySelector(".projects-qty")) {
        document.querySelector(
          ".projects-qty"
        ).textContent = `${projects} projects`;
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

      if (e.target.tagName === "DIV")
        (0,_taskcontent_createSelectOption__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, selectOption);

      if (e.target.tagName === "IMG" || e.target.tagName === "P")
        (0,_taskcontent_createSelectOption__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, selectOption);
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

  (0,_createContent__WEBPACK_IMPORTED_MODULE_2__.createContent)(document.querySelector(".nav-item-inbox"));

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
`, "",{"version":3,"sources":["webpack://./src/content/content.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,4CAA8D;AAChE;;AAEA;EACE,2BAA2B;EAC3B,4CAA2D;AAC7D;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB;;cAEY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE;;cAEY;EACZ,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;sDACoD;EACpD,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B;sDACoD;EACpD,cAAc;EACd,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;;;EAGE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,yDAAsD;EACtD,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,cAAc;EACd;sDACoD;EACpD,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,sBAAsB;EACtB,gBAAgB;AAClB","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n@font-face {\n  font-family: \"Matcha-Serif\";\n  src: url(\"/src/fonts/matcha-serif/matchaserif-regular.otf\");\n}\n\n#content-div {\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  background-color: #fafafa;\n  padding: 30px;\n}\n\n#content-div .hidden {\n  display: none !important;\n}\n\n#content-div .content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .content-header {\n  width: 50%;\n  color: #020617;\n  letter-spacing: 0.07em;\n  font-size: 1.2em;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 20px;\n}\n\n#content-div .content-icon {\n  width: 25px;\n}\n\n#content-div .add-task-div {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n#content-div .add-task-text {\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 0.9em;\n  opacity: 0.5;\n}\n\n#content-div .add-task-div:hover .add-task-text {\n  opacity: 1;\n  color: #dc2626;\n}\n\n#content-div .add-task-div:hover {\n  cursor: pointer;\n}\n\n#content-div .projects-qty {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1.2em;\n}\n\n#content-div .content-projects-container {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .content-project-item {\n  text-transform: capitalize;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1em;\n  padding: 10px;\n  width: 50%;\n}\n\n#content-div .content-project-item:hover {\n  cursor: pointer;\n  background-color: #ffb766;\n  font-weight: 700;\n}\n\n#content-div .task-items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .task-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  position: relative;\n}\n\n#content-div .task-item:hover {\n  cursor: pointer;\n  padding: 5px;\n  background-color: #f1f5f9;\n  border-radius: 10px;\n}\n\n#content-div .selected {\n  border: 2px solid #737373;\n  padding: 5px;\n  border-radius: 10px;\n  cursor: auto;\n}\n\n#content-div .mouseentered {\n  background-color: #d1d5db;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n#content-div .title-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#content-div .task-item--title {\n  font-family: \"Frenstyle\";\n  text-transform: capitalize;\n  font-size: 0.9em;\n  outline: none;\n}\n\n#content-div .task-title-before {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  display: block;\n}\n\n#content-div .task-date-container {\n  display: flex;\n  gap: 8px;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  outline: none;\n  color: #1f2937;\n}\n\n#content-div .editable-item:focus {\n  cursor: pointer;\n  border-bottom: 1px solid black;\n}\n\n#content-div .task-description-container {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#content-div .task-item--description {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  display: inline;\n  vertical-align: middle;\n  color: #737373;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  outline: none;\n}\n\n#content-div .task-priority {\n  font-family: \"Frenstyle\";\n  border: 1px solid #64748b;\n  padding: 3px;\n  border-radius: 5px;\n  display: inline;\n  font-size: 0.75em;\n}\n\n#content-div .task-item--rightside {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .task-item--leftside {\n  display: flex;\n  gap: 12px;\n  align-items: start;\n}\n\n#content-div .task-icon {\n  vertical-align: middle;\n  width: 15px;\n}\n\n#content-div .edit-icon,\n#content-div .delete-icon,\n#content-div .dots-icon {\n  cursor: pointer;\n  width: 20px;\n}\n\n#content-div .editable {\n  border: 1px solid black;\n  padding: 10px 10px 10px 15px;\n  border-radius: 5px;\n}\n\n#content-div .date-container {\n  position: relative;\n  display: flex;\n  gap: 8px;\n}\n\n#content-div .date-container:hover {\n  caret-color: #dc2626;\n}\n\n#content-div .datepicker-toggle {\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n\n#content-div .datepicker-toggle-button {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/src/icons/calendar-range.svg\");\n  background-repeat: no-repeat;\n  width: 20px;\n}\n\n#content-div .datepicker-input {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#content-div .datepicker-input::-webkit-calendar-picker-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n#content-div .datetext-input {\n  border: none;\n  outline: none;\n  color: #737373;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 0.9em;\n  background: none;\n  font-weight: 700;\n}\n\n#content-div .new-priority {\n  font-family: \"Frenstyle\";\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 0.8em;\n  width: 60%;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   taskContent: () => (/* binding */ taskContent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _taskContent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _createSelectOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _addTaskItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);






let taskPriority;
let counter;

if (
  JSON.parse(localStorage.getItem("tasks")) &&
  JSON.parse(localStorage.getItem("tasks")).length > 0
) {
  counter = JSON.parse(localStorage.getItem("counter"));
} else counter = 0;

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

  addBtn.addEventListener("click", function () {
    if (taskForm.checkValidity() && (0,___WEBPACK_IMPORTED_MODULE_0__.validateDate)(taskDate.value)) {
      counter++;
      localStorage.setItem("counter", JSON.stringify(counter));

      taskContent.remove();
      const contentItems = document.querySelectorAll(".content-container");
      contentItems.forEach((el) => {
        if (el.classList.contains(`content-${selectProject.value}`)) {
          const newTaskItem = new ___WEBPACK_IMPORTED_MODULE_0__.taskItem(
            taskName.value,
            taskDescription.value,
            taskDate.value,
            taskPriority.value,
            selectProject.value,
            counter
          );

          (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(newTaskItem, el, counter);
          const currentTasks = JSON.parse(localStorage.getItem("tasks"));
          currentTasks.push(newTaskItem);
          localStorage.setItem("tasks", JSON.stringify(currentTasks));

          if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(taskDate.value))) {
            newTaskItem.project = "today";
            (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(
              newTaskItem,
              document.querySelector(".content-today"),
              counter
            );
            const currentTasks = JSON.parse(localStorage.getItem("tasks"));
            currentTasks.push(newTaskItem);
            localStorage.setItem("tasks", JSON.stringify(currentTasks));
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
/* harmony import */ var _updateTaskQty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var _updatePriority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);








let formatDate;
let option;

function addTaskItem(item, contentItem, counter) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item", `task-item--${counter}`);
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
  (0,_updatePriority__WEBPACK_IMPORTED_MODULE_5__.updatePriority)(item.priority, taskTitleBefore);
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

  if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(item.dueDate)))
    datetextInput.setAttribute("value", "Today");
  else
    datetextInput.setAttribute(
      "value",
      item.dueDate ? `${formatDate.format(new Date(item.dueDate))}` : "No date"
    );
  dateContainer.appendChild(datetextInput);

  const newPriority = document.createElement("select");
  newPriority.classList.add("new-priority", "hidden");
  rightSide.appendChild(newPriority);
  newPriority.disabled = true;

  for (let i = 1; i < 5; i++) {
    option = document.createElement("option");
    option.classList.add("select-option", `option-${i}`);
    option.setAttribute("value", i);
    option.textContent = `Priority ${i}`;
    newPriority.appendChild(option);
  }

  newPriority
    .querySelector(`.option-${item.priority}`)
    .setAttribute("selected", "");

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

  (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__.updateTaskQty)(item.project);

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
    (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__.updateTaskQty)(e.target);
    const currentTask = e.target.closest(".task-item");
    currentTask.remove();
    const currentTaskNumber = +currentTask.classList[1].slice(11);
    const currentTasks = JSON.parse(localStorage.getItem("tasks"));

    const filteredTask = currentTasks.filter((task) => {
      return +task.counter !== currentTaskNumber;
    });

    localStorage.setItem("tasks", JSON.stringify(filteredTask));

    document.querySelectorAll(".task-item").forEach((item) => {
      if (
        item.classList.contains(e.target.closest(".task-item").classList[1])
      ) {
        const todayTask = item;
        (0,_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__.updateTaskQty)(todayTask.querySelector(".delete-icon"));
        todayTask.remove();
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
    (0,_updatePriority__WEBPACK_IMPORTED_MODULE_5__.updatePriority)(newPriority.value, taskTitleBefore);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _src_icons_content_save_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
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
    editIcon.src = _src_icons_content_save_svg__WEBPACK_IMPORTED_MODULE_1__;
    editIcon.setAttribute("title", "Save changes");

    if (eventContent !== "today") datepickerInput.disabled = false;
    newPriority.disabled = false;
  }
  if (!taskItem.classList.contains("selected")) {
    editIcon.src = _src_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;
    editIcon.setAttribute("title", "Edit task");
    document.querySelectorAll(".editable-item").forEach((item) => {
      item.contentEditable = false;
    });
    datepickerInput.disabled = true;
    newPriority.disabled = true;

    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const currentItem = event.target.closest(".task-item");

    const currentTitle =
      currentItem.querySelector(".task-item--title").textContent;
    const currentDescription = currentItem.querySelector(
      ".task-item--description"
    ).textContent;
    const currentPriority = currentItem.querySelector(".new-priority").value;

    let currentDate;
    if (!currentItem.querySelector(".datepicker-input").value)
      currentDate = new Date().toISOString().slice(0, 10);
    else currentDate = currentItem.querySelector(".datepicker-input").value;
    const currentDateText = currentItem.querySelector(".datetext-input").value;
    const counter = +currentItem.classList[1].slice(11);

    currentTasks.forEach((task) => {
      if (task.counter === counter) {
        task.title = currentTitle;
        task.description = currentDescription;
        task.priority = currentPriority;
        task.dueDate = currentDate;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasks));

    document.querySelectorAll(".task-item").forEach((item) => {
      const currentItemQty = document.querySelectorAll(
        `.task-item--${counter}`
      );

      if (item === currentItem && currentItemQty.length === 1) {
        if (currentDateText && currentDate && (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(new Date(currentDate))) {
          const todayItem = new ___WEBPACK_IMPORTED_MODULE_0__.taskItem(
            currentTitle,
            currentDescription,
            currentDate,
            currentPriority,
            "today",
            counter
          );
          (0,_addTaskItem__WEBPACK_IMPORTED_MODULE_3__["default"])(
            todayItem,
            document.querySelector(".content-today"),
            counter
          );
          currentTasks.push(todayItem);
          localStorage.setItem("tasks", JSON.stringify(currentTasks));
        }
        return;
      }

      if (
        item.classList.contains(currentItem.classList[1]) &&
        item !== currentItem
      ) {
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

          const filteredTask = currentTasks.filter(
            (task) => task.project !== "today"
          );

          localStorage.setItem("tasks", JSON.stringify(filteredTask));
          item.remove();
        }

        item.querySelector(".task-item--title").textContent = currentTitle;
        item.querySelector(".task-item--description").textContent =
          currentDescription;
        item.querySelector(".new-priority").value = currentPriority;
        (0,_updatePriority__WEBPACK_IMPORTED_MODULE_5__.updatePriority)(
          item.querySelector(".new-priority").value,
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
  else {
    (0,___WEBPACK_IMPORTED_MODULE_0__.validateDate)(datepickerInput)
      ? (datetextInput.value = _addTaskItem__WEBPACK_IMPORTED_MODULE_3__.formatDate.format(new Date(datepickerInput)))
      : (datetextInput.value = "No date");
  }
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
    ) {
      el.textContent =
        document
          .querySelector(`.content-${value}`)
          .querySelector(".task-items-container").childElementCount - counter;
    }
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
/* harmony import */ var _content_taskcontent_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);






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

  const projectItems = JSON.parse(localStorage.getItem("projectItems"));

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
              (0,_content_taskcontent_updateTaskQty__WEBPACK_IMPORTED_MODULE_4__.updateTaskQty)(el2.querySelector(".delete-icon"));
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

    if (projectItems.includes(projectName)) {
      removeElement(projectItems, projectName);
    }

    document.querySelectorAll(".content-project-item").forEach((el) => {
      if (el.classList.contains(`project-item-${projectName}`)) el.remove();
    });

    document.querySelector(`.content-${projectName}`).remove();

    const storageProjectItems = JSON.parse(
      localStorage.getItem("projectItems")
    );

    const indexToRemove = storageProjectItems.indexOf(projectName);

    if (indexToRemove > -1) {
      storageProjectItems.splice(indexToRemove, 1);
    }

    localStorage.setItem("projectItems", JSON.stringify(storageProjectItems));

    const currentTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskNumbers = new Set([]);

    const filteredProjectTasks = currentTasks.filter((el) => {
      if (el.project === projectName) taskNumbers.add(el.counter);
      return el.project !== projectName;
    });

    const filteredTodayTasks = filteredProjectTasks.filter((element) => {
      if (!taskNumbers.has(element.counter)) return element;
    });

    localStorage.setItem("tasks", JSON.stringify(filteredTodayTasks));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEZBQTBGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFL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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywwR0FBMEcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxL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QThCLEdBQUcsbUNBQW1DLDhCQUE4QixHQUFHLHFCQUFxQjtBQUMxdEQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDcEVGOztBQUV0QjtBQUNmLEVBQUUsOENBQVE7QUFDVix5Q0FBeUMsaUJBQWlCO0FBQzFELEdBQUc7QUFDSDs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9oZWFkZXIvaGVhZGVyLmNzcz9iZWY1Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzPzEzMWYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0LyBuZXdQcm9qZWN0LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0L25ld1Byb2plY3QuY3NzPzVmN2QiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL25ld3Byb2plY3QvbmV3UHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NyZWF0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzP2I0YzQiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2NvbnRlbnQuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC90YXNrQ29udGVudC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnQuY3NzP2M4ODYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L3Rhc2tjb250ZW50L3Rhc2tDb250ZW50LmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvY3JlYXRlU2VsZWN0T3B0aW9uLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC9hZGRUYXNrSXRlbS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvZWRpdFRhc2tJdGVtLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC91cGRhdGVUYXNrUXR5LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC91cGRhdGVQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9kZWxldGVwcm9qZWN0L2RlbGV0ZVByb2plY3QuY3NzPzI0OTYiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L2RlbGV0ZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2hlYWRlci9oZWFkZXJcIjtcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9jb250ZW50L2NvbnRlbnRcIjtcbmltcG9ydCBhZGRUYXNrSXRlbSBmcm9tIFwiLi9jb250ZW50L3Rhc2tjb250ZW50L2FkZFRhc2tJdGVtXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQoKSk7XG5cbmNvbnN0IHRhc2tBcnIgPSBbXTtcbmNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbmNvbnN0IHZhbGlkYXRlRGF0ZSA9IGZ1bmN0aW9uICh0YXNrRGF0ZSkge1xuICBjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgaWYgKCF0YXNrRGF0ZSkgcmV0dXJuIHRydWU7XG4gIGlmICh0YXNrRGF0ZSA8IGRhdGVTdHJpbmcpIHtcbiAgICBhbGVydChcIllvdSBjYW5ub3QgZW50ZXIgYW4gb2xkIGRhdGUuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGRhdGUuXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgdGFza0l0ZW0gPSBmdW5jdGlvbiAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3QsXG4gIGNvdW50ZXJcbikge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xufTtcblxuaWYgKGN1cnJlbnRUYXNrcyAmJiBjdXJyZW50VGFza3MubGVuZ3RoID4gMCkge1xuICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGFkZFRhc2tJdGVtKFxuICAgICAgdGFzayxcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LSR7dGFzay5wcm9qZWN0fWApLFxuICAgICAgdGFzay5jb3VudGVyXG4gICAgKTtcbiAgfSk7XG59IGVsc2UgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyKSk7XG5cbmV4cG9ydCB7IGJvZHksIHZhbGlkYXRlRGF0ZSwgdGFza0l0ZW0gfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCAxZnIpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiaW1wb3J0IFwiLi9oZWFkZXIuY3NzXCI7XG5pbXBvcnQgbWVudVN2ZyBmcm9tIFwiL3NyYy9pY29ucy9tZW51LnN2Z1wiO1xuaW1wb3J0IHBsdXNTdmcgZnJvbSBcIi9zcmMvaWNvbnMvcGx1cy1ib3guc3ZnXCI7XG5pbXBvcnQgeyBzaWRlYmFyRGl2IH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhclwiO1xuaW1wb3J0IHsgY29udGVudERpdiB9IGZyb20gXCIuLi9jb250ZW50L2NvbnRlbnRcIjtcbmltcG9ydCB7IHRhc2tDb250ZW50IH0gZnJvbSBcIi4uL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWRpdlwiKTtcblxuICBjb25zdCBoZWFkZXJSaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJSaWdodFNpZGUuY2xhc3NMaXN0LmFkZChcImhlYWRlci1yaWdodHNpZGVcIik7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkZXJSaWdodFNpZGUpO1xuXG4gIGNvbnN0IG1lbnVJY29uID0gbmV3IEltYWdlKCk7XG4gIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItaWNvblwiLCBcIm1lbnUtaWNvblwiKTtcbiAgbWVudUljb24uc3JjID0gbWVudVN2ZztcbiAgaGVhZGVyUmlnaHRTaWRlLmFwcGVuZENoaWxkKG1lbnVJY29uKTtcblxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGV4dFwiKTtcbiAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XG4gIGhlYWRlclJpZ2h0U2lkZS5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBwbHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gIHBsdXNJY29uLnNyYyA9IHBsdXNTdmc7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBzaWRlYmFyRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgaWYgKHNpZGViYXJEaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxuICAgICAgY29udGVudERpdi5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLy0xXCI7XG4gICAgZWxzZSBjb250ZW50RGl2LnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvLTFcIjtcbiAgfSk7XG5cbiAgcGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ29udGVudCgpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9GbGlwa2FydC9SaW9uYS1TYW5zLVcwMS1Cb2xkLUl0YWxpYy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGbGlwa2FydFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI2hlYWRlci1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXJpZ2h0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiRmxpcGthcnRcIjtcbiAgY29sb3I6ICM0NzU1Njk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9oZWFkZXIvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBNEQ7QUFDOUQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmxpcGthcnRcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9mb250cy9GbGlwa2FydC9SaW9uYS1TYW5zLVcwMS1Cb2xkLUl0YWxpYy50dGYpO1xcbn1cXG5cXG4jaGVhZGVyLWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2hlYWRlci1kaXYgLmhlYWRlci1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuI2hlYWRlci1kaXYgLmhlYWRlci1pY29uIHtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaGVhZGVyLWRpdiAuaGVhZGVyLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGbGlwa2FydFxcXCI7XFxuICBjb2xvcjogIzQ3NTU2OTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgXCIuL3NpZGViYXIuY3NzXCI7XG5pbXBvcnQgbGVmdFN2ZyBmcm9tIFwiL3NyYy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiO1xuaW1wb3J0IHBsdXNTdmcgZnJvbSBcIi9zcmMvaWNvbnMvcGx1cy1ib3guc3ZnXCI7XG5pbXBvcnQgZG93blN2ZyBmcm9tIFwiL3NyYy9pY29ucy9hcnJvdy1kb3duLnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVN2ZyBmcm9tIFwiL3NyYy9pY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tIFwiLi9uZXdwcm9qZWN0LyBuZXdQcm9qZWN0XCI7XG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tIFwiLi9kZWxldGVwcm9qZWN0L2RlbGV0ZVByb2plY3RcIjtcblxubGV0IHNpZGViYXJEaXY7XG5sZXQgbGVmdEljb247XG5sZXQgcGx1c0ljb247XG5sZXQgY3JlYXRlUHJvamVjdEl0ZW07XG5sZXQgcHJvamVjdEl0ZW1zO1xubGV0IG5hdkl0ZW1EaXZzID0gW107XG5sZXQgcHJvamVjdEl0ZW1zQXJyID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWRlYmFyKCkge1xuICBzaWRlYmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2lkZWJhckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNpZGViYXItZGl2XCIpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLW5hdlwiKTtcbiAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gW1wiaW5ib3hcIiwgXCJ0b2RheVwiLCBcInByb2plY3RzXCJdO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBuYXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBgbmF2LWl0ZW0tJHtlbH1gKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2SXRlbSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlbDtcbiAgICBuYXZJdGVtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIGlmIChlbCAhPT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICBuYXZJdGVtRGl2cy5wdXNoKG5hdkl0ZW0pO1xuICAgICAgY29uc3QgbmF2U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbmF2U3Bhbi5jbGFzc0xpc3QuYWRkKFwibmF2LXNwYW5cIiwgXCJoaWRkZW5cIik7XG4gICAgICBuYXZTcGFuLnRleHRDb250ZW50ID0gMDtcbiAgICAgIG5hdkl0ZW0uYXBwZW5kQ2hpbGQobmF2U3Bhbik7XG5cbiAgICAgIG5hdkl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdlNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmF2U3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlbCA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1yaWdodHNpZGVcIik7XG4gICAgICBuYXZJdGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgICAgIGxlZnRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBsZWZ0SWNvbi5zcmMgPSBsZWZ0U3ZnO1xuICAgICAgbGVmdEljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaWNvblwiLCBcImxlZnQtaWNvblwiKTtcbiAgICAgIGxlZnRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiQ29sbGFwc2UgUHJvamVjdHNcIik7XG4gICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQobGVmdEljb24pO1xuXG4gICAgICBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgcGx1c0ljb24uc3JjID0gcGx1c1N2ZztcbiAgICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gICAgICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkFkZCBuZXcgcHJvamVjdFwiKTtcbiAgICAgIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICAgIGxlZnRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgaWYgKHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgbGVmdEljb24uc3JjID0gZG93blN2ZztcbiAgICAgICAgICBsZWZ0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkV4cGFuZCBQcm9qZWN0c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZWZ0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkNvbGxhcHNlIFByb2plY3RzXCIpO1xuICAgICAgICAgIGxlZnRJY29uLnNyYyA9IGxlZnRTdmc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBwbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdQcm9qZWN0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgc2lkZWJhckRpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICBjcmVhdGVQcm9qZWN0SXRlbSA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXYtaXRlbVwiLCBcInByb2plY3QtaXRlbVwiLCBgcHJvamVjdC1pdGVtLSR7ZWx9YCk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgbmF2SXRlbURpdnMucHVzaChwcm9qZWN0SXRlbSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlbDtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBjb25zdCBuYXZTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmF2U3Bhbi5jbGFzc0xpc3QuYWRkKFwibmF2LXNwYW5cIiwgXCJoaWRkZW5cIik7XG4gICAgbmF2U3Bhbi50ZXh0Q29udGVudCA9IDA7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQobmF2U3Bhbik7XG5cbiAgICBjb25zdCBkZWxldGVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTdmc7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pY29uXCIsIFwiaGlkZGVuXCIpO1xuICAgIGRlbGV0ZUljb24uc3R5bGUuZmxvYXQgPSBcInJpZ2h0XCI7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBuYXZTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBuYXZTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGVQcm9qZWN0KGRlbGV0ZUljb24pO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEl0ZW1zQXJyLnB1c2gocHJvamVjdEl0ZW0pO1xuICB9O1xuXG4gIHByb2plY3RJdGVtcyA9IFtcIndvcmtcIiwgXCJob21lXCIsIFwiZ3ltXCJdO1xuXG4gIGNvbnN0IHN0b3JhZ2VQcm9qZWN0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIpKTtcblxuICBpZiAoc3RvcmFnZVByb2plY3RJdGVtcylcbiAgICBzdG9yYWdlUHJvamVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjcmVhdGVQcm9qZWN0SXRlbShlbCk7XG4gICAgfSk7XG4gIGVsc2VcbiAgICBwcm9qZWN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNyZWF0ZVByb2plY3RJdGVtKGVsKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RJdGVtcykpO1xuICAgIH0pO1xuXG4gIHJldHVybiBzaWRlYmFyRGl2O1xufVxuXG5leHBvcnQge1xuICBzaWRlYmFyRGl2LFxuICBuYXZJdGVtRGl2cyxcbiAgY3JlYXRlUHJvamVjdEl0ZW0sXG4gIHByb2plY3RJdGVtcyxcbiAgcHJvamVjdEl0ZW1zQXJyLFxufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNzaWRlYmFyLWRpdiB7XG4gIGdyaWQtY29sdW1uOiAxLzE7XG4gIGdyaWQtcm93OiAyLy0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAubmF2LWl0ZW0ge1xuICB3aWR0aDogNjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQwNDA0MDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIC5uYXYtc3BhbiB7XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIGltZyB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufVxuXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtOmhvdmVyIHtcbiAgdHJhbnNsYXRlOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDJweCA2cHggMHB4IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG59XG5cbiNzaWRlYmFyLWRpdiAuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xufVxuXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtLXByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLXJpZ2h0c2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5cbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcbiAgbGlzdC1zdHlsZTogaW5pdGlhbDtcbiAgY29sb3I6ICM0NzU1Njk7XG59XG5cbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2lkZWJhci1kaXYgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyL3NpZGViYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQjs7Y0FFWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcXFwiKTtcXG59XFxuXFxuI3NpZGViYXItZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzE7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAubmF2LWl0ZW0ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM0MDQwNDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIC5uYXYtc3BhbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0LWl0ZW0gaW1nIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2NjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5uYXYtc3BhbiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMnB4IDZweCAwcHggNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAubmF2LWl0ZW0tcHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAuc2lkZWJhci1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLXJpZ2h0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjVweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0LWl0ZW0ge1xcbiAgbGlzdC1zdHlsZTogaW5pdGlhbDtcXG4gIGNvbG9yOiAjNDc1NTY5O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgXCIuL25ld1Byb2plY3QuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0SXRlbSB9IGZyb20gXCIuLi9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vLi4vY29udGVudC9jcmVhdGVDb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1wcm9qZWN0XCIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb250YWluZXJcIik7XG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3UHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmV3UHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtaGVhZGVyXCIpO1xuICBuZXdQcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld1Byb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwibmFtZVwiO1xuICBuZXdQcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XG5cbiAgY29uc3QgbGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGxhYmVsU3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBuZXdQcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxTcGFuKTtcblxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiwgXCJvZmZcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkTmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHByb2plY3RcIjtcbiAgYWRkTmV3UHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3cHJvamVjdC1idG5cIik7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdEJ0bik7XG5cbiAgZnVuY3Rpb24gY2hlY2tFbGVtZW50KGVsZW1lbnQsIGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLnRvTG93ZXJDYXNlKCkgPT09IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIikpO1xuXG4gIGFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2hlY2tFbGVtZW50KG5ld1Byb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0SXRlbXMpKSB7XG4gICAgICBhbGVydChcIlRoaXMgcHJvamVjdCBhbHJlYWR5IGV4aXN0XCIpO1xuICAgICAgbmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdQcm9qZWN0TmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgY3JlYXRlUHJvamVjdEl0ZW0obmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgcHJvamVjdEl0ZW1zLnB1c2gobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgbmV3UHJvamVjdERpdi5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLnByb2plY3RzLXF0eVwiXG4gICAgICApLnRleHRDb250ZW50ID0gYCR7cHJvamVjdEl0ZW1zLmxlbmd0aH0gcHJvamV0cyBgO1xuXG4gICAgICBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0oXG4gICAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlLFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCIpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzdG9yYWdlUHJvamVjdEl0ZW1zID0gSlNPTi5wYXJzZShcbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIilcbiAgICAgICk7XG5cbiAgICAgIHN0b3JhZ2VQcm9qZWN0SXRlbXMucHVzaChuZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdEl0ZW1zKSk7XG5cbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICB9XG5cbiAgICBpZiAoIW5ld1Byb2plY3ROYW1lLnZhbGlkaXR5LnZhbGlkKSBhbGVydChcIkVudGVyIHByb2plY3QgbmFtZSwgcGxlYXNlXCIpO1xuICB9KTtcblxuICBuZXdQcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi5uZXctcHJvamVjdC1jb250YWluZXJcIikpIG5ld1Byb2plY3REaXYucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3UHJvamVjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld1Byb2plY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNuZXctcHJvamVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI25ldy1wcm9qZWN0IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI25ldy1wcm9qZWN0IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJHaWxsIFNhbnNcIiwgXCJHaWxsIFNhbnMgTVRcIiwgQ2FsaWJyaSwgXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI25ldy1wcm9qZWN0IGlucHV0IHtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMWExYWE7XG59XG5cbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6ICNlNGU0ZTc7XG59XG5cbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zbGF0ZTogM3B4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0L25ld1Byb2plY3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLDRDQUF3RjtBQUMxRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9mb250cy9mb250c3ByaW5nL0ZvbnRzcHJpbmctREVNTy1va3RhaF9yZWd1bGFyX2l0YWxpYy1CRjY1MTEwNWY4M2IzODIub3RmKTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jbmV3LXByb2plY3QgLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS43ZW07XFxuICBjb2xvcjogIzQ3NTU2OTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdCBsYWJlbCB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjNDc1NTY5O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHaWxsIFNhbnNcXFwiLCBcXFwiR2lsbCBTYW5zIE1UXFxcIiwgQ2FsaWJyaSwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbiNuZXctcHJvamVjdCBpbnB1dCB7XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ExYTFhYTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXdwcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGNvbG9yOiAjZTRlNGU3O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zbGF0ZTogM3B4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgbmF2SXRlbURpdnMsIHByb2plY3RJdGVtcywgcHJvamVjdEl0ZW1zQXJyIH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhclwiO1xuaW1wb3J0IHsgY29udGVudHMsIGNvbnRlbnREaXYgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQgeyB0YXNrQ29udGVudCB9IGZyb20gXCIuL3Rhc2tjb250ZW50L3Rhc2tDb250ZW50XCI7XG5pbXBvcnQgY3JlYXRlU2VsZWN0T3B0aW9uIGZyb20gXCIuL3Rhc2tjb250ZW50L2NyZWF0ZVNlbGVjdE9wdGlvblwiO1xuaW1wb3J0IHBsdXNTdmcgZnJvbSBcIi9zcmMvaWNvbnMvcGx1cy1ib3guc3ZnXCI7XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBwcm9qZWN0c0NvbnRhaW5lcikge1xuICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtcHJvamVjdC1pdGVtXCIsIGBwcm9qZWN0LWl0ZW0tJHtpdGVtfWApO1xuICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IGl0ZW07XG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcblxuICBjcmVhdGVDb250ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0LWl0ZW0tJHtpdGVtfWApKTtcbiAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgcHJvamVjdC1pdGVtLSR7cHJvamVjdEl0ZW0udGV4dENvbnRlbnR9YCkpXG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoZWwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50KGl0ZW0pIHtcbiAgaWYgKGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKSkge1xuICAgIG5hdkl0ZW1EaXZzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pdGVtLXByb2plY3RzXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke2l0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnR9YClcbiAgICAgIClcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIGVsc2UgZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1pdGVtLXByb2plY3RzXCIpKSB7XG4gICAgICBsZXQgcHJvamVjdHM7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXByb2plY3RzLWNvbnRhaW5lclwiKSkge1xuICAgICAgICBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuY29udGVudC1wcm9qZWN0cy1jb250YWluZXJcIlxuICAgICAgICApLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgfVxuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcXR5XCIpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIucHJvamVjdHMtcXR5XCJcbiAgICAgICAgKS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzfSBwcm9qZWN0c2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBpZiAoaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5jb250YWlucyhcImNyZWF0ZWRcIikpIHJldHVybjtcbiAgICBpdGVtLmNsb3Nlc3QoXCIubmF2LWl0ZW1cIikuY2xhc3NMaXN0LmFkZChcImNyZWF0ZWRcIik7XG5cbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImNvbnRlbnQtY29udGFpbmVyXCIsXG4gICAgICBgY29udGVudC0ke2l0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnR9YFxuICAgICk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBjb250ZW50cy5wdXNoKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3QgY29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBjb250ZW50SGVhZGVyLnRleHRDb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudDtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXIpO1xuXG4gICAgbGV0IHByb2plY3N0c1F0eTtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtaXRlbS1wcm9qZWN0c1wiKSkge1xuICAgICAgcHJvamVjc3RzUXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2plY3N0c1F0eS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RJdGVtcy5sZW5ndGh9IHByb2plY3RzIGA7XG4gICAgICBwcm9qZWNzdHNRdHkuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLXF0eVwiKTtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjc3RzUXR5KTtcblxuICAgICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1wcm9qZWN0cy1jb250YWluZXJcIik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcblxuICAgICAgcHJvamVjdEl0ZW1zQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGVudFByb2plY3RJdGVtKFxuICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQsXG4gICAgICAgICAgcHJvamVjdHNDb250YWluZXJcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWRpdlwiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEaXYpO1xuXG4gICAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWljb25cIiwgXCJwbHVzLWljb25cIik7XG4gICAgYWRkVGFza0Rpdi5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZFRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay10ZXh0XCIpO1xuICAgIGFkZFRhc2tUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuXG4gICAgY29uc3QgdGFza0l0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHRhc2tJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtcy1jb250YWluZXJcIik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2VsZWN0T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3QtcHJvamVjdFwiKTtcblxuICAgIGFkZFRhc2tEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB0YXNrQ29udGVudCgpO1xuXG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJESVZcIilcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKGUudGFyZ2V0LCBzZWxlY3RPcHRpb24pO1xuXG4gICAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJJTUdcIiB8fCBlLnRhcmdldC50YWdOYW1lID09PSBcIlBcIilcbiAgICAgICAgY3JlYXRlU2VsZWN0T3B0aW9uKGUudGFyZ2V0LCBzZWxlY3RPcHRpb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbSB9O1xuIiwiaW1wb3J0IFwiLi9jb250ZW50LmNzc1wiO1xuaW1wb3J0IHsgc2lkZWJhckRpdiwgbmF2SXRlbURpdnMgfSBmcm9tIFwiLi4vc2lkZWJhci9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSBcIi4vY3JlYXRlQ29udGVudFwiO1xuXG5sZXQgY29udGVudERpdjtcbmxldCBjb250ZW50cyA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGVudCgpIHtcbiAgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50LWRpdlwiKTtcblxuICBuYXZJdGVtRGl2cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY3JlYXRlQ29udGVudChpdGVtKTtcbiAgfSk7XG5cbiAgY3JlYXRlQ29udGVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1pdGVtLXByb2plY3RzXCIpKTtcblxuICBzaWRlYmFyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaWRlYmFyLWljb25cIikpIHJldHVybjtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJTUEFOXCIgfHwgZS50YXJnZXQudGFnTmFtZSA9PT0gXCJQXCIpXG4gICAgICBjcmVhdGVDb250ZW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIubmF2LWl0ZW1cIikpO1xuICAgIGVsc2UgY3JlYXRlQ29udGVudChlLnRhcmdldCk7XG4gIH0pO1xuXG4gIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1pbmJveFwiKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnREaXY7XG59XG5cbmV4cG9ydCB7IGNvbnRlbnREaXYgfTtcbmV4cG9ydCB7IGNvbnRlbnRzIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zL2NhbGVuZGFyLXJhbmdlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0Y2hhLVNlcmlmXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4jY29udGVudC1kaXYge1xuICBncmlkLWNvbHVtbjogMi8tMTtcbiAgZ3JpZC1yb3c6IDIvLTE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6ICMwMjA2MTc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYTFhMWFhO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIgLmFkZC10YXNrLXRleHQge1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250ZW50LWRpdiAucHJvamVjdHMtcXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MzczNzM7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4jY29udGVudC1kaXYgLm1vdXNlZW50ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC50aXRsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1kYXRlLXBhcmEge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXByaW9yaXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NDc0OGI7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tcmlnaHRzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tbGVmdHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5lZGl0LWljb24sXG4jY29udGVudC1kaXYgLmRlbGV0ZS1pY29uLFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZS1jb250YWluZXI6aG92ZXIge1xuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRldGV4dC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jY29udGVudC1kaXYgLm5ldy1wcmlvcml0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNjAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEQ7QUFDaEU7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTJEO0FBQzdEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0Us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RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Q7c0RBQ29EO0VBQ3BELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGNoYS1TZXJpZlxcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9mb250cy9tYXRjaGEtc2VyaWYvbWF0Y2hhc2VyaWYtcmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyLy0xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaGVhZGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBjb2xvcjogIzAyMDYxNztcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA3ZW07XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhMWExYWE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWljb24ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmFkZC10YXNrLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2OmhvdmVyIC5hZGQtdGFzay10ZXh0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnByb2plY3RzLXF0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3RzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5jb250ZW50LXByb2plY3QtaXRlbSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbXMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5zZWxlY3RlZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNzM3MzczO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogYXV0bztcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5tb3VzZWVudGVyZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjQ3NDhiO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1sZWZ0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdC1pY29uLFxcbiNjb250ZW50LWRpdiAuZGVsZXRlLWljb24sXFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdGFibGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmRhdGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTJweDtcXG4gIHRvcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaWNvbnMvY2FsZW5kYXItcmFuZ2Uuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXRleHQtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5uZXctcHJpb3JpdHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3aWR0aDogNjAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBib2R5LCB2YWxpZGF0ZURhdGUsIHRhc2tJdGVtIH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgXCIuL3Rhc2tDb250ZW50LmNzc1wiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdE9wdGlvbiBmcm9tIFwiLi9jcmVhdGVTZWxlY3RPcHRpb25cIjtcbmltcG9ydCBhZGRUYXNrSXRlbSBmcm9tIFwiLi9hZGRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5sZXQgdGFza1ByaW9yaXR5O1xubGV0IGNvdW50ZXI7XG5cbmlmIChcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSAmJlxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpLmxlbmd0aCA+IDBcbikge1xuICBjb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIikpO1xufSBlbHNlIGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NvbnRlbnQoKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWNvbnRlbnRcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgbmFtZVwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgd3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItZGl2XCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyRGl2KTtcblxuICBjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gIHRhc2tEYXRlLnZhbHVlID0gZGF0ZVN0cmluZztcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cbiAgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1zZWxlY3RcIik7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Qtb3B0aW9uXCIsIGBvcHRpb24tJHtpfWApO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgUHJpb3JpdHkgJHtpfWA7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgaWYgKGkgPT0gNCkgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICB9XG5cbiAgY29uc3QgbGFzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxhc3REaXYuY2xhc3NMaXN0LmFkZChcImxhc3QtZGl2XCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYXN0RGl2KTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LXByb2plY3RcIik7XG4gIGxhc3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVTZWxlY3RPcHRpb24oaXRlbS5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudCwgc2VsZWN0UHJvamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgbGFzdERpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJjYW5jZWwtYnRuXCIpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcImFkZCB0YXNrXCI7XG4gIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiYWRkLWJ0blwiKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWJ0blwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9KTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBhZGRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZDMzYTJjXCI7XG4gICAgICBhZGRCdG4uc3R5bGUuYm94U2hhZG93ID0gXCJyZ2JhKDAsIDAsIDAsIDAuMTIpIDAgMXB4IDNweCAwIGluc2V0XCI7XG4gICAgICBhZGRCdG4uc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICB9XG4gICAgaWYgKCF0YXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGFkZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmU3ZTdcIjtcbiAgICAgIGFkZEJ0bi5zdHlsZS5jb2xvciA9IFwiI2RjMjYyNlwiO1xuICAgICAgYWRkQnRuLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2YWxpZGF0ZURhdGUodGFza0RhdGUudmFsdWUpKSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgSlNPTi5zdHJpbmdpZnkoY291bnRlcikpO1xuXG4gICAgICB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gICAgICBjb250ZW50SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke3NlbGVjdFByb2plY3QudmFsdWV9YCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdUYXNrSXRlbSA9IG5ldyB0YXNrSXRlbShcbiAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgdGFza0RhdGUudmFsdWUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0LnZhbHVlLFxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBhZGRUYXNrSXRlbShuZXdUYXNrSXRlbSwgZWwsIGNvdW50ZXIpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gICAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFza0l0ZW0pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cbiAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0YXNrRGF0ZS52YWx1ZSkpKSB7XG4gICAgICAgICAgICBuZXdUYXNrSXRlbS5wcm9qZWN0ID0gXCJ0b2RheVwiO1xuICAgICAgICAgICAgYWRkVGFza0l0ZW0oXG4gICAgICAgICAgICAgIG5ld1Rhc2tJdGVtLFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kYXlcIiksXG4gICAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFza0l0ZW0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFza0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY29udGFpbmVyXCIpKSB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrQ29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiN0YXNrLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG4gIGJveC1zaGFkb3c6IDAgMjZweCA1OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKSxcbiAgICAwIDVweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuI3Rhc2stY29udGVudCAudGFzay1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4jdGFzay1jb250ZW50IC50YXNrLWZvcm06Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stbmFtZSxcbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgcGFkZGluZzogM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFzay1jb250ZW50IC50YXNrLW5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4jdGFzay1jb250ZW50IC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuI3Rhc2stY29udGVudCAuZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAzMSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjcyODA7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmRhdGUtY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xufVxuXG4jdGFzay1jb250ZW50IC5kYXRlLXRleHQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2staWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jdGFzay1jb250ZW50IC53cmFwcGVyLWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY0NzQ4YjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbiN0YXNrLWNvbnRlbnQgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3Rhc2stY29udGVudCAucHJpb3JpdHktc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3QsXG4uY2FuY2VsLWJ0bixcbi5hZGQtYnRuIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFzay1jb250ZW50IC5sYXN0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Rhc2stY29udGVudCAuYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTNweDtcbn1cblxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNmU2ZDcwO1xuICBib3gtc2hhZG93OiAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICBpbnNldCAwcHggMC41cHggMC41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxuICAgIDBweCAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiAjZGZkZWRmO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFzay1jb250ZW50IC5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDAuOHB4IDBweCAtMC4yNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcbiAgICAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggMy41cHggcmdiYSg1OCwgMTA4LCAyMTcsIDAuNSk7XG4gIG91dGxpbmU6IDA7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmFkZC1idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlN2U3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGMyNjI2O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBjb2xvcjogI2QzM2EyYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzNhMmM7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggM3B4IDAgaW5zZXQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMjYyNjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCO29DQUNrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3NEQUNvRDtFQUNwRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7c0RBQ29EO0VBQ3BELHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkO3NEQUNvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjs7eUNBRXVDO0VBQ3ZDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOytFQUM2RTtFQUM3RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL2ZyZW5zdHlsZS9GcmVuc3R5bGUtQkY2NTI0ZWRjMDFkYzE2Lm90ZlxcXCIpO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzYlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA0JTtcXG4gIGJveC1zaGFkb3c6IDAgMjZweCA1OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKSxcXG4gICAgMCA1cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuI3Rhc2stY29udGVudCAudGFzay1mb3JtOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1uYW1lLFxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAzMSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmI3MjgwO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmRhdGUtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmRhdGUtdGV4dCB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogIzY0NzQ4YjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC53cmFwcGVyLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDc0OGI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuI3Rhc2stY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjNjQ3NDhiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnByaW9yaXR5LXNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5zZWxlY3QtcHJvamVjdCxcXG4uY2FuY2VsLWJ0bixcXG4uYWRkLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAubGFzdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTNweDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0biB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzZlNmQ3MDtcXG4gIGJveC1zaGFkb3c6IDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcbiAgICBpbnNldCAwcHggMC41cHggMC41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAwcHggMHB4IDBweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgY29sb3I6ICNkZmRlZGY7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMC44cHggMHB4IC0wLjI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcbiAgICAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggMy41cHggcmdiYSg1OCwgMTA4LCAyMTcsIDAuNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5hZGQtYnRuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3ZTc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGMyNjI2O1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIGNvbG9yOiAjZDMzYTJjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzM2EyYztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggM3B4IDAgaW5zZXQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMyNjI2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibGV0IHByb2plY3RHcm91cDtcbmxldCBpdGVtVGV4dDtcbmxldCBzZWxlY3RJdGVtcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKGl0ZW0sIHNlbGVjdFByb2plY3QpIHtcbiAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gXCJQXCIgfHwgaXRlbS50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgaXRlbVRleHQgPSBpdGVtLnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIHNlbGVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtaXRlbVwiKTtcbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG4gICAgc2VsZWN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYHNlbGVjdC1pdGVtLSR7aXRlbVRleHR9YCkpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpdGVtLnRhZ05hbWUgPT09IFwiRElWXCIpIHtcbiAgICBpdGVtVGV4dCA9IGl0ZW0ucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIHNlbGVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtaXRlbVwiKTtcbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgc2VsZWN0LWl0ZW0tJHtpdGVtVGV4dH1gKSlcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXRlbVRleHQgPSBpdGVtO1xuICBpZiAoaXRlbVRleHQgPT09IFwicHJvamVjdHNcIikge1xuICAgIHByb2plY3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgICBwcm9qZWN0R3JvdXAubGFiZWwgPSBcIlByb2plY3RzXCI7XG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0R3JvdXApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzZWxlY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgc2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWl0ZW1cIiwgYHNlbGVjdC1pdGVtLSR7aXRlbVRleHR9YCk7XG4gIHNlbGVjdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgc2VsZWN0SXRlbS52YWx1ZSA9IGl0ZW1UZXh0O1xuXG4gIGlmIChpdGVtVGV4dCA9PT0gXCJ0b2RheVwiKSByZXR1cm47XG5cbiAgaWYgKGl0ZW1UZXh0ID09PSBcImluYm94XCIpIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoc2VsZWN0SXRlbSk7XG4gIGVsc2UgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHNlbGVjdEl0ZW0pO1xufVxuIiwiaW1wb3J0IGNvbW1lbnRTdmcgZnJvbSBcIi9zcmMvaWNvbnMvY29tbWVudC5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIvc3JjL2ljb25zL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi9zcmMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXRUYXNrSXRlbSwgeyBlZGl0RGF0ZSB9IGZyb20gXCIuL2VkaXRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuL3VwZGF0ZVRhc2tRdHlcIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgeyB1cGRhdGVQcmlvcml0eSB9IGZyb20gXCIuL3VwZGF0ZVByaW9yaXR5XCI7XG5cbmxldCBmb3JtYXREYXRlO1xubGV0IG9wdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0l0ZW0oaXRlbSwgY29udGVudEl0ZW0sIGNvdW50ZXIpIHtcbiAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIiwgYHRhc2staXRlbS0tJHtjb3VudGVyfWApO1xuICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIGZhbHNlKTtcblxuICBjb25zdCB0YXNrSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtcy1jb250YWluZXJcIik7XG5cbiAgdGFza0l0ZW1Db250YWluZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChjb250ZW50SXRlbS5jb250YWlucyhpdGVtKSkgaXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtLS1yaWdodHNpZGVcIik7XG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLXRpdGxlXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrVGl0bGVCZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGFza1RpdGxlQmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWJlZm9yZVwiKTtcbiAgdXBkYXRlUHJpb3JpdHkoaXRlbS5wcmlvcml0eSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgdGl0bGVDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tUaXRsZUJlZm9yZSwgdGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25Db250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWludGVyKTtcblxuICBjb25zdCBjb21tZW50SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb21tZW50SWNvbi5zcmMgPSBjb21tZW50U3ZnO1xuICBjb21tZW50SWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIsIFwiY29tbWVudC1pY29uXCIpO1xuICB0YXNrRGVzY3JpcHRpb25Db250YWludGVyLmFwcGVuZENoaWxkKGNvbW1lbnRJY29uKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gIGNvbnN0IGRhdGVwaWNrZXJUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGF0ZXBpY2tlclRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXBpY2tlci10b2dnbGVcIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZSk7XG5cbiAgY29uc3QgZGF0ZXBpY2tlclRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlcGlja2VyVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJkYXRlcGlja2VyLXRvZ2dsZS1idXR0b25cIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZUJ0bik7XG5cbiAgY29uc3QgZGF0ZXBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlcGlja2VySW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVwaWNrZXItaW5wdXRcIik7XG4gIGRhdGVwaWNrZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlcGlja2VySW5wdXQpO1xuICBkYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGZvcm1hdERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLXVzXCIsIHsgZGF0ZVN0eWxlOiBcImxvbmdcIiB9KTtcbiAgY29uc3QgZGF0ZXRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZXRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRleHQtaW5wdXRcIik7XG4gIGRhdGV0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgaWYgKGlzVG9kYXkobmV3IERhdGUoaXRlbS5kdWVEYXRlKSkpXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlRvZGF5XCIpO1xuICBlbHNlXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZhbHVlXCIsXG4gICAgICBpdGVtLmR1ZURhdGUgPyBgJHtmb3JtYXREYXRlLmZvcm1hdChuZXcgRGF0ZShpdGVtLmR1ZURhdGUpKX1gIDogXCJObyBkYXRlXCJcbiAgICApO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGV0ZXh0SW5wdXQpO1xuXG4gIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5ldy1wcmlvcml0eVwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgbmV3UHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcInNlbGVjdC1vcHRpb25cIiwgYG9wdGlvbi0ke2l9YCk7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGBQcmlvcml0eSAke2l9YDtcbiAgICBuZXdQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgbmV3UHJpb3JpdHlcbiAgICAucXVlcnlTZWxlY3RvcihgLm9wdGlvbi0ke2l0ZW0ucHJpb3JpdHl9YClcbiAgICAuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG5cbiAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtLS1sZWZ0c2lkZVwiKTtcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuXG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIiwgXCJlZGl0LWljb25cIiwgXCJoaWRkZW5cIik7XG4gIGVkaXRJY29uLnNyYyA9IGVkaXRTdmc7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRWRpdCB0YXNrXCIpO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIiwgXCJkZWxldGUtaWNvblwiLCBcImhpZGRlblwiKTtcbiAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTdmc7XG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gIHVwZGF0ZVRhc2tRdHkoaXRlbS5wcm9qZWN0KTtcblxuICBmdW5jdGlvbiBjbGFzc1RvZ2dsZSgpIHtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRhc2tJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICBjbGFzc1RvZ2dsZSgpO1xuICAgICAgdGFza0l0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfVxuICB9KTtcblxuICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0YXNrSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgY2xhc3NUb2dnbGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdXBkYXRlVGFza1F0eShlLnRhcmdldCk7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcbiAgICBjdXJyZW50VGFzay5yZW1vdmUoKTtcbiAgICBjb25zdCBjdXJyZW50VGFza051bWJlciA9ICtjdXJyZW50VGFzay5jbGFzc0xpc3RbMV0uc2xpY2UoMTEpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRhc2sgPSBjdXJyZW50VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICByZXR1cm4gK3Rhc2suY291bnRlciAhPT0gY3VycmVudFRhc2tOdW1iZXI7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkVGFzaykpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKS5jbGFzc0xpc3RbMV0pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdG9kYXlUYXNrID0gaXRlbTtcbiAgICAgICAgdXBkYXRlVGFza1F0eSh0b2RheVRhc2sucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtaWNvblwiKSk7XG4gICAgICAgIHRvZGF5VGFzay5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZWRpdFRhc2tJdGVtKFxuICAgICAgZSxcbiAgICAgIHRhc2tJdGVtLFxuICAgICAgdGFza1RpdGxlLFxuICAgICAgZWRpdEljb24sXG4gICAgICBkYXRlcGlja2VySW5wdXQsXG4gICAgICBuZXdQcmlvcml0eVxuICAgICk7XG4gIH0pO1xuXG4gIGRhdGVwaWNrZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBlZGl0RGF0ZShkYXRlcGlja2VySW5wdXQudmFsdWUsIGRhdGV0ZXh0SW5wdXQpO1xuICB9KTtcblxuICBuZXdQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVQcmlvcml0eShuZXdQcmlvcml0eS52YWx1ZSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGZvcm1hdERhdGUgfTtcbiIsImltcG9ydCB7IHZhbGlkYXRlRGF0ZSwgdGFza0l0ZW0gYXMgbmV3VGFza0l0ZW0gfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCBzYXZlU3ZnIGZyb20gXCIvc3JjL2ljb25zL2NvbnRlbnQtc2F2ZS5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIvc3JjL2ljb25zL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBhZGRUYXNrSXRlbSwgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vYWRkVGFza0l0ZW1cIjtcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tRdHkgfSBmcm9tIFwiLi91cGRhdGVUYXNrUXR5XCI7XG5pbXBvcnQgeyB1cGRhdGVQcmlvcml0eSB9IGZyb20gXCIuL3VwZGF0ZVByaW9yaXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUYXNrSXRlbShcbiAgZXZlbnQsXG4gIHRhc2tJdGVtLFxuICB0YXNrVGl0bGUsXG4gIGVkaXRJY29uLFxuICBkYXRlcGlja2VySW5wdXQsXG4gIG5ld1ByaW9yaXR5XG4pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0YWJsZS1pdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1pdGVtXCIpLmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBldmVudENvbnRlbnQgPSBldmVudC50YXJnZXRcbiAgICAuY2xvc2VzdChcIi5jb250ZW50LWNvbnRhaW5lclwiKVxuICAgIC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG5cbiAgdGFza0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpO1xuICBpZiAodGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICB0YXNrVGl0bGUuZm9jdXMoKTtcbiAgICBlZGl0SWNvbi5zcmMgPSBzYXZlU3ZnO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiU2F2ZSBjaGFuZ2VzXCIpO1xuXG4gICAgaWYgKGV2ZW50Q29udGVudCAhPT0gXCJ0b2RheVwiKSBkYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBuZXdQcmlvcml0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGlmICghdGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICBlZGl0SWNvbi5zcmMgPSBlZGl0U3ZnO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRWRpdCB0YXNrXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGUtaXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgbmV3UHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9XG4gICAgICBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbS0tdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnRhc2staXRlbS0tZGVzY3JpcHRpb25cIlxuICAgICkudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5uZXctcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICBsZXQgY3VycmVudERhdGU7XG4gICAgaWYgKCFjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVwaWNrZXItaW5wdXRcIikudmFsdWUpXG4gICAgICBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgZWxzZSBjdXJyZW50RGF0ZSA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZXBpY2tlci1pbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZVRleHQgPSBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRhdGV0ZXh0LWlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IGNvdW50ZXIgPSArY3VycmVudEl0ZW0uY2xhc3NMaXN0WzFdLnNsaWNlKDExKTtcblxuICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5jb3VudGVyID09PSBjb3VudGVyKSB7XG4gICAgICAgIHRhc2sudGl0bGUgPSBjdXJyZW50VGl0bGU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBjdXJyZW50RGVzY3JpcHRpb247XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHk7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SXRlbVF0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGAudGFzay1pdGVtLS0ke2NvdW50ZXJ9YFxuICAgICAgKTtcblxuICAgICAgaWYgKGl0ZW0gPT09IGN1cnJlbnRJdGVtICYmIGN1cnJlbnRJdGVtUXR5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoY3VycmVudERhdGVUZXh0ICYmIGN1cnJlbnREYXRlICYmIGlzVG9kYXkobmV3IERhdGUoY3VycmVudERhdGUpKSkge1xuICAgICAgICAgIGNvbnN0IHRvZGF5SXRlbSA9IG5ldyBuZXdUYXNrSXRlbShcbiAgICAgICAgICAgIGN1cnJlbnRUaXRsZSxcbiAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLFxuICAgICAgICAgICAgY3VycmVudFByaW9yaXR5LFxuICAgICAgICAgICAgXCJ0b2RheVwiLFxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYWRkVGFza0l0ZW0oXG4gICAgICAgICAgICB0b2RheUl0ZW0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kYXlcIiksXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJyZW50VGFza3MucHVzaCh0b2RheUl0ZW0pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGN1cnJlbnRJdGVtLmNsYXNzTGlzdFsxXSkgJiZcbiAgICAgICAgaXRlbSAhPT0gY3VycmVudEl0ZW1cbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5kYXRlcGlja2VyLWlucHV0XCIpLnZhbHVlICYmXG4gICAgICAgICAgIWlzVG9kYXkoXG4gICAgICAgICAgICBuZXcgRGF0ZShjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVwaWNrZXItaW5wdXRcIikudmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB1cGRhdGVUYXNrUXR5KFxuICAgICAgICAgICAgaXRlbS5jbG9zZXN0KFwiLmNvbnRlbnQtY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRUYXNrID0gY3VycmVudFRhc2tzLmZpbHRlcihcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnByb2plY3QgIT09IFwidG9kYXlcIlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkVGFzaykpO1xuICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1pdGVtLS10aXRsZVwiKS50ZXh0Q29udGVudCA9IGN1cnJlbnRUaXRsZTtcbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbS0tZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbjtcbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcmlvcml0eVwiKS52YWx1ZSA9IGN1cnJlbnRQcmlvcml0eTtcbiAgICAgICAgdXBkYXRlUHJpb3JpdHkoXG4gICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcmlvcml0eVwiKS52YWx1ZSxcbiAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZS1iZWZvcmVcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdERhdGUoZGF0ZXBpY2tlcklucHV0LCBkYXRldGV4dElucHV0KSB7XG4gIGlmICghZGF0ZXBpY2tlcklucHV0KSB7XG4gICAgZGF0ZXRleHRJbnB1dC52YWx1ZSA9IFwiTm8gZGF0ZVwiO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNUb2RheShuZXcgRGF0ZShkYXRlcGlja2VySW5wdXQpKSkgZGF0ZXRleHRJbnB1dC52YWx1ZSA9IFwiVG9kYXlcIjtcbiAgZWxzZSB7XG4gICAgdmFsaWRhdGVEYXRlKGRhdGVwaWNrZXJJbnB1dClcbiAgICAgID8gKGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBmb3JtYXREYXRlLmZvcm1hdChuZXcgRGF0ZShkYXRlcGlja2VySW5wdXQpKSlcbiAgICAgIDogKGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBcIk5vIGRhdGVcIik7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrUXR5KHZhbHVlLCBhY2MgPSAwKSB7XG4gIGxldCBjb3VudGVyID0gMCArIGFjYztcbiAgaWYgKHZhbHVlLnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICBjb3VudGVyID0gMTtcbiAgICB2YWx1ZSA9IHZhbHVlLmNsb3Nlc3QoXCIuY29udGVudC1jb250YWluZXJcIikucXVlcnlTZWxlY3RvcihcImgxXCIpLnRleHRDb250ZW50O1xuICB9XG5cbiAgY29uc3QgbmF2U3BhbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1zcGFuXCIpO1xuICBuYXZTcGFucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGVsLmNsb3Nlc3QoYC5uYXYtaXRlbS0ke3ZhbHVlfWApIHx8XG4gICAgICBlbC5jbG9zZXN0KGAucHJvamVjdC1pdGVtLSR7dmFsdWV9YClcbiAgICApIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID1cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgLmNvbnRlbnQtJHt2YWx1ZX1gKVxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbXMtY29udGFpbmVyXCIpLmNoaWxkRWxlbWVudENvdW50IC0gY291bnRlcjtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByaW9yaXR5KHByaW9yaXR5LCB0YXNrVGl0bGVCZWZvcmUpIHtcbiAgaWYgKCtwcmlvcml0eSA9PT0gNCkgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgaWYgKCtwcmlvcml0eSA9PT0gMykgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmx1ZVwiO1xuICBpZiAoK3ByaW9yaXR5ID09PSAyKSB0YXNrVGl0bGVCZWZvcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJvcmFuZ2VcIjtcbiAgaWYgKCtwcmlvcml0eSA9PT0gMSkgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59XG4iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImltcG9ydCBcIi4vZGVsZXRlUHJvamVjdC5jc3NcIjtcbmltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRlbnQgfSBmcm9tIFwiLi4vLi4vY29udGVudC9jcmVhdGVDb250ZW50XCI7XG5pbXBvcnQgZGVsZXRlQ29udGVudCBmcm9tIFwiLi4vLi4vY29udGVudC9kZWxldGVDb250ZW50XCI7XG5pbXBvcnQgeyB1cGRhdGVUYXNrUXR5IH0gZnJvbSBcIi4uLy4uL2NvbnRlbnQvdGFza2NvbnRlbnQvdXBkYXRlVGFza1F0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGRlbGV0ZUljb24pIHtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGV0ZVByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdFwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtY29udGFpbmVyXCIpO1xuICBkZWxldGVQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RDb250YWluZXIpO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGRlbGV0ZVByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWhlYWRlclwiKTtcbiAgZGVsZXRlUHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0P1wiO1xuICBkZWxldGVQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RIZWFkZXIpO1xuXG4gIGNvbnN0IGJ0bnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG5zLWNvbnRhaW5lclwiKTtcbiAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5zQ29udGFpbmVyKTtcblxuICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB5ZXNCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIiwgXCJ5ZXMtYnRuXCIpO1xuICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcInllc1wiO1xuICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKHllc0J0bik7XG5cbiAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBub0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiLCBcIm5vLWJ0blwiKTtcbiAgbm9CdG4udGV4dENvbnRlbnQgPSBcIm5vXCI7XG4gIGJ0bnNDb250YWluZXIuYXBwZW5kQ2hpbGQobm9CdG4pO1xuXG4gIGNvbnN0IHByb2plY3RJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIikpO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoYXJyYXksIGVsZW1lbnRUb1JlbW92ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihlbGVtZW50VG9SZW1vdmUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkZWxldGVJY29uLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW50LWNvbnRhaW5lclwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke3Byb2plY3ROYW1lfWApKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuSXRlbXMgPSBlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnRhc2staXRlbXMtY29udGFpbmVyXCJcbiAgICAgICAgKS5jaGlsZHJlbjtcblxuICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuSXRlbXMpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIikuZm9yRWFjaCgoZWwyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwyLmNsYXNzTGlzdC5jb250YWlucyhlbC5jbGFzc0xpc3RbMV0pKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZVRhc2tRdHkoZWwyLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWljb25cIikpO1xuICAgICAgICAgICAgICBlbDIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICAgIGRlbGV0ZUljb24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICAgIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1pbmJveFwiKSk7XG4gICAgZGVsZXRlQ29udGVudChkZWxldGVJY29uLnBhcmVudEVsZW1lbnQpO1xuXG4gICAgaWYgKHByb2plY3RJdGVtcy5pbmNsdWRlcyhwcm9qZWN0TmFtZSkpIHtcbiAgICAgIHJlbW92ZUVsZW1lbnQocHJvamVjdEl0ZW1zLCBwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW50LXByb2plY3QtaXRlbVwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgcHJvamVjdC1pdGVtLSR7cHJvamVjdE5hbWV9YCkpIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRlbnQtJHtwcm9qZWN0TmFtZX1gKS5yZW1vdmUoKTtcblxuICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0SXRlbXMgPSBKU09OLnBhcnNlKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIilcbiAgICApO1xuXG4gICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHN0b3JhZ2VQcm9qZWN0SXRlbXMuaW5kZXhPZihwcm9qZWN0TmFtZSk7XG5cbiAgICBpZiAoaW5kZXhUb1JlbW92ZSA+IC0xKSB7XG4gICAgICBzdG9yYWdlUHJvamVjdEl0ZW1zLnNwbGljZShpbmRleFRvUmVtb3ZlLCAxKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdEl0ZW1zKSk7XG5cbiAgICBjb25zdCBjdXJyZW50VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGNvbnN0IHRhc2tOdW1iZXJzID0gbmV3IFNldChbXSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RUYXNrcyA9IGN1cnJlbnRUYXNrcy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICBpZiAoZWwucHJvamVjdCA9PT0gcHJvamVjdE5hbWUpIHRhc2tOdW1iZXJzLmFkZChlbC5jb3VudGVyKTtcbiAgICAgIHJldHVybiBlbC5wcm9qZWN0ICE9PSBwcm9qZWN0TmFtZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbHRlcmVkVG9kYXlUYXNrcyA9IGZpbHRlcmVkUHJvamVjdFRhc2tzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCF0YXNrTnVtYmVycy5oYXMoZWxlbWVudC5jb3VudGVyKSkgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkVG9kYXlUYXNrcykpO1xuICB9KTtcblxuICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICB9KTtcblxuICBkZWxldGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICghZS50YXJnZXQuY2xvc2VzdChcIi5kZWxldGUtcHJvamVjdC1jb250YWluZXJcIikpIGRlbGV0ZVByb2plY3QucmVtb3ZlKCk7XG4gIH0pO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbGV0ZVByb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZWxldGVQcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jZGVsZXRlLXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogMTglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5idG5zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1idG4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkZWxldGUtcHJvamVjdCAueWVzLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWEzMGQ7XG59XG5cbiNkZWxldGUtcHJvamVjdCAubm8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBd0Y7QUFDMUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICBzcmM6IHVybCgvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGYpO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIHdpZHRoOiAxOCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogIzQ3NTU2OTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC55ZXMtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NWEzMGQ7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAubm8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBjb250ZW50cyB9IGZyb20gXCIuL2NvbnRlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlQ29udGVudChpdGVtKSB7XG4gIGNvbnRlbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke2l0ZW0udGV4dENvbnRlbnR9YCkpIGVsLnJlbW92ZSgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=