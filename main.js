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
`, "",{"version":3,"sources":["webpack://./src/content/content.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Frenstyle\";\n  src: url(\"/src/fonts/frenstyle/Frenstyle-BF6524edc01dc16.otf\");\n}\n\n@font-face {\n  font-family: \"Matcha-Serif\";\n  src: url(\"/src/fonts/matcha-serif/matchaserif-regular.otf\");\n}\n\n#content-div {\n  grid-column: 2/-1;\n  grid-row: 2/-1;\n  background-color: #fafafa;\n  padding: 30px;\n}\n\n#content-div .hidden {\n  display: none !important;\n}\n\n#content-div .content-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .content-header {\n  width: 50%;\n  color: #020617;\n  letter-spacing: 0.07em;\n  font-size: 1.2em;\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  text-transform: capitalize;\n  text-align: center;\n  border-bottom: 1px solid #a1a1aa;\n  padding-bottom: 20px;\n}\n\n#content-div .content-icon {\n  width: 25px;\n}\n\n#content-div .add-task-div {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n\n#content-div .add-task-text {\n  font-family: \"Frenstyle\", system-ui, -apple-system, BlinkMacSystemFont,\n    \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n    sans-serif;\n  font-size: 0.9em;\n  opacity: 0.5;\n}\n\n#content-div .add-task-div:hover .add-task-text {\n  opacity: 1;\n  color: #dc2626;\n}\n\n#content-div .add-task-div:hover {\n  cursor: pointer;\n}\n\n#content-div .projects-qty {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1.2em;\n}\n\n#content-div .content-projects-container {\n  padding-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .content-project-item {\n  text-transform: capitalize;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 1em;\n  padding: 10px;\n  width: 50%;\n}\n\n#content-div .content-project-item:hover {\n  cursor: pointer;\n  background-color: #ffb766;\n  font-weight: 700;\n}\n\n#content-div .task-items-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n#content-div .task-item {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  position: relative;\n}\n\n#content-div .task-item:hover {\n  cursor: pointer;\n  padding: 5px;\n  background-color: #f1f5f9;\n  border-radius: 10px;\n}\n\n#content-div .selected {\n  border: 2px solid #737373;\n  padding: 5px;\n  border-radius: 10px;\n  cursor: auto;\n}\n\n#content-div .mouseentered {\n  background-color: #d1d5db;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n#content-div .title-container {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n#content-div .task-item--title {\n  font-family: \"Frenstyle\";\n  font-size: 0.9em;\n  outline: none;\n}\n\n#content-div .task-title-before {\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  display: block;\n}\n\n#content-div .task-date-container {\n  display: flex;\n  gap: 8px;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  outline: none;\n  color: #1f2937;\n}\n\n#content-div .editable-item:focus {\n  cursor: pointer;\n  border-bottom: 1px solid black;\n}\n\n#content-div .task-description-container {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n#content-div .task-item--description {\n  font-family: \"Frenstyle\";\n  font-size: 0.85em;\n  display: inline;\n  vertical-align: middle;\n  color: #737373;\n  outline: none;\n}\n\n#content-div .task-date-para {\n  outline: none;\n}\n\n#content-div .task-priority {\n  font-family: \"Frenstyle\";\n  border: 1px solid #64748b;\n  padding: 3px;\n  border-radius: 5px;\n  display: inline;\n  font-size: 0.75em;\n}\n\n#content-div .task-item--rightside {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#content-div .task-item--leftside {\n  display: flex;\n  gap: 12px;\n  align-items: start;\n}\n\n#content-div .task-icon {\n  vertical-align: middle;\n  width: 15px;\n}\n\n#content-div .edit-icon,\n#content-div .delete-icon,\n#content-div .dots-icon {\n  cursor: pointer;\n  width: 20px;\n}\n\n#content-div .editable {\n  border: 1px solid black;\n  padding: 10px 10px 10px 15px;\n  border-radius: 5px;\n}\n\n#content-div .date-container {\n  position: relative;\n  display: flex;\n  gap: 8px;\n}\n\n#content-div .date-container:hover {\n  caret-color: #dc2626;\n}\n\n#content-div .datepicker-toggle {\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n\n#content-div .datepicker-toggle-button {\n  position: absolute;\n  left: -2px;\n  top: 2px;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/src/icons/calendar-range.svg\");\n  background-repeat: no-repeat;\n  width: 20px;\n}\n\n#content-div .datepicker-input {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n#content-div .datepicker-input::-webkit-calendar-picker-indicator {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n#content-div .datetext-input {\n  border: none;\n  outline: none;\n  color: #737373;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 0.9em;\n  background: none;\n  font-weight: 700;\n}\n\n#content-div .new-priority {\n  font-family: \"Frenstyle\";\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  font-size: 0.8em;\n  width: 60%;\n  letter-spacing: 0.05em;\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
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
      newPriority,
      item.dueDate
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
  newPriority,
  dueDate
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
    const currentDateText = currentItem.querySelector(".datetext-input").value;
    const counter = +currentItem.classList[1].slice(11);

    let currentDate;
    if (!currentItem.querySelector(".datepicker-input").value)
      currentDate = dueDate;
    else currentDate = currentItem.querySelector(".datepicker-input").value;

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

          function removeElement(array, elementToRemove) {
            const index = array.indexOf(elementToRemove);
            if (index !== -1) {
              array.splice(index, 1);
            }
          }

          currentTasks.forEach((task) => {
            if (task.project === "today" && task.counter === counter)
              removeElement(currentTasks, task);
          });

          localStorage.setItem("tasks", JSON.stringify(currentTasks));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBGQUEwRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMEdBQTBHLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFB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QUF1QyxpQkFBaUIsb0JBQW9CLEdBQUcsb0NBQW9DLDhCQUE4QixHQUFHLG1DQUFtQyw4QkFBOEIsR0FBRyxxQkFBcUI7QUFDMXREO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ3BFRjs7QUFFdEI7QUFDZixFQUFFLDhDQUFRO0FBQ1YseUNBQXlDLGlCQUFpQjtBQUMxRCxHQUFHO0FBQ0g7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvaGVhZGVyL2hlYWRlci5jc3M/YmVmNSIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2hlYWRlci9oZWFkZXIuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9zaWRlYmFyLmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9zaWRlYmFyLmNzcz8xMzFmIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvbmV3cHJvamVjdC8gbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvbmV3cHJvamVjdC9uZXdQcm9qZWN0LmNzcz81ZjdkIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9uZXdwcm9qZWN0L25ld1Byb2plY3QuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC9jcmVhdGVDb250ZW50LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC9jb250ZW50LmpzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC9jb250ZW50LmNzcz9iNGM0Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L3Rhc2tjb250ZW50L3Rhc2tDb250ZW50LmNzcz9jODg2Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC90YXNrY29udGVudC90YXNrQ29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L3Rhc2tjb250ZW50L2NyZWF0ZVNlbGVjdE9wdGlvbi5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvYWRkVGFza0l0ZW0uanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9jb250ZW50L3Rhc2tjb250ZW50L2VkaXRUYXNrSXRlbS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdXBkYXRlVGFza1F0eS5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdXBkYXRlUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZGVza3RvcC8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9kZXNrdG9wLy4vc3JjL3NpZGViYXIvZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0LmNzcz8yNDk2Iiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvc2lkZWJhci9kZWxldGVwcm9qZWN0L2RlbGV0ZVByb2plY3QuY3NzIiwid2VicGFjazovL2Rlc2t0b3AvLi9zcmMvY29udGVudC9kZWxldGVDb250ZW50LmpzIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNrdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZGVza3RvcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Rlc2t0b3Avd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcIi4vc2lkZWJhci9zaWRlYmFyXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vY29udGVudC9jb250ZW50XCI7XG5pbXBvcnQgYWRkVGFza0l0ZW0gZnJvbSBcIi4vY29udGVudC90YXNrY29udGVudC9hZGRUYXNrSXRlbVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyKCkpO1xuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KCkpO1xuXG5jb25zdCB0YXNrQXJyID0gW107XG5jb25zdCBjdXJyZW50VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuXG5jb25zdCB2YWxpZGF0ZURhdGUgPSBmdW5jdGlvbiAodGFza0RhdGUpIHtcbiAgY29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIGlmICghdGFza0RhdGUpIHJldHVybiB0cnVlO1xuICBpZiAodGFza0RhdGUgPCBkYXRlU3RyaW5nKSB7XG4gICAgYWxlcnQoXCJZb3UgY2Fubm90IGVudGVyIGFuIG9sZCBkYXRlLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBkYXRlLlwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHRhc2tJdGVtID0gZnVuY3Rpb24gKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0LFxuICBjb3VudGVyXG4pIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgdGhpcy5jb3VudGVyID0gY291bnRlcjtcbn07XG5cbmlmIChjdXJyZW50VGFza3MgJiYgY3VycmVudFRhc2tzLmxlbmd0aCA+IDApIHtcbiAgY3VycmVudFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBhZGRUYXNrSXRlbShcbiAgICAgIHRhc2ssXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGVudC0ke3Rhc2sucHJvamVjdH1gKSxcbiAgICAgIHRhc2suY291bnRlclxuICAgICk7XG4gIH0pO1xufSBlbHNlIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza0FycikpO1xuXG5leHBvcnQgeyBib2R5LCB2YWxpZGF0ZURhdGUsIHRhc2tJdGVtIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsImltcG9ydCBcIi4vaGVhZGVyLmNzc1wiO1xuaW1wb3J0IG1lbnVTdmcgZnJvbSBcIi9zcmMvaWNvbnMvbWVudS5zdmdcIjtcbmltcG9ydCBwbHVzU3ZnIGZyb20gXCIvc3JjL2ljb25zL3BsdXMtYm94LnN2Z1wiO1xuaW1wb3J0IHsgc2lkZWJhckRpdiB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnREaXYgfSBmcm9tIFwiLi4vY29udGVudC9jb250ZW50XCI7XG5pbXBvcnQgeyB0YXNrQ29udGVudCB9IGZyb20gXCIuLi9jb250ZW50L3Rhc2tjb250ZW50L3Rhc2tDb250ZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlYWRlci1kaXZcIik7XG5cbiAgY29uc3QgaGVhZGVyUmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyUmlnaHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItcmlnaHRzaWRlXCIpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyUmlnaHRTaWRlKTtcblxuICBjb25zdCBtZW51SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWljb25cIiwgXCJtZW51LWljb25cIik7XG4gIG1lbnVJY29uLnNyYyA9IG1lbnVTdmc7XG4gIGhlYWRlclJpZ2h0U2lkZS5hcHBlbmRDaGlsZChtZW51SWNvbik7XG5cbiAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXRleHRcIik7XG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICBoZWFkZXJSaWdodFNpZGUuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1pY29uXCIsIFwicGx1cy1pY29uXCIpO1xuICBwbHVzSWNvbi5zcmMgPSBwbHVzU3ZnO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgc2lkZWJhckRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGlmIChzaWRlYmFyRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcbiAgICAgIGNvbnRlbnREaXYuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8tMVwiO1xuICAgIGVsc2UgY29udGVudERpdi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLy0xXCI7XG4gIH0pO1xuXG4gIHBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGFza0NvbnRlbnQoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlckRpdjtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvRmxpcGthcnQvUmlvbmEtU2Fucy1XMDEtQm9sZC1JdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRmxpcGthcnRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNoZWFkZXItZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2NjtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2hlYWRlci1kaXYgLmhlYWRlci1yaWdodHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE1cHg7XG59XG5cbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4jaGVhZGVyLWRpdiAuaGVhZGVyLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNoZWFkZXItZGl2IC5oZWFkZXItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZsaXBrYXJ0XCI7XG4gIGNvbG9yOiAjNDc1NTY5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsNENBQTREO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZsaXBrYXJ0XFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvRmxpcGthcnQvUmlvbmEtU2Fucy1XMDEtQm9sZC1JdGFsaWMudHRmKTtcXG59XFxuXFxuI2hlYWRlci1kaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2NjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItcmlnaHRzaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbiNoZWFkZXItZGl2IC5oZWFkZXItaWNvbiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2hlYWRlci1kaXYgLmhlYWRlci1pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlYWRlci1kaXYgLmhlYWRlci10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmxpcGthcnRcXFwiO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IFwiLi9zaWRlYmFyLmNzc1wiO1xuaW1wb3J0IGxlZnRTdmcgZnJvbSBcIi9zcmMvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIjtcbmltcG9ydCBwbHVzU3ZnIGZyb20gXCIvc3JjL2ljb25zL3BsdXMtYm94LnN2Z1wiO1xuaW1wb3J0IGRvd25TdmcgZnJvbSBcIi9zcmMvaWNvbnMvYXJyb3ctZG93bi5zdmdcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi9zcmMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IG5ld1Byb2plY3QgZnJvbSBcIi4vbmV3cHJvamVjdC8gbmV3UHJvamVjdFwiO1xuaW1wb3J0IGRlbGV0ZVByb2plY3QgZnJvbSBcIi4vZGVsZXRlcHJvamVjdC9kZWxldGVQcm9qZWN0XCI7XG5cbmxldCBzaWRlYmFyRGl2O1xubGV0IGxlZnRJY29uO1xubGV0IHBsdXNJY29uO1xubGV0IGNyZWF0ZVByb2plY3RJdGVtO1xubGV0IHByb2plY3RJdGVtcztcbmxldCBuYXZJdGVtRGl2cyA9IFtdO1xubGV0IHByb2plY3RJdGVtc0FyciA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lkZWJhcigpIHtcbiAgc2lkZWJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyLWRpdlwiKTtcblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1uYXZcIik7XG4gIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcImluYm94XCIsIFwidG9kYXlcIiwgXCJwcm9qZWN0c1wiXTtcblxuICBuYXZJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgYG5hdi1pdGVtLSR7ZWx9YCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdkl0ZW0pO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZWw7XG4gICAgbmF2SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBpZiAoZWwgIT09IFwicHJvamVjdHNcIikge1xuICAgICAgbmF2SXRlbURpdnMucHVzaChuYXZJdGVtKTtcbiAgICAgIGNvbnN0IG5hdlNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIG5hdlNwYW4uY2xhc3NMaXN0LmFkZChcIm5hdi1zcGFuXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgbmF2U3Bhbi50ZXh0Q29udGVudCA9IDA7XG4gICAgICBuYXZJdGVtLmFwcGVuZENoaWxkKG5hdlNwYW4pO1xuXG4gICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICB9KTtcblxuICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdlNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWwgPT09IFwicHJvamVjdHNcIikge1xuICAgICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtcmlnaHRzaWRlXCIpO1xuICAgICAgbmF2SXRlbS5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuXG4gICAgICBsZWZ0SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgbGVmdEljb24uc3JjID0gbGVmdFN2ZztcbiAgICAgIGxlZnRJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWljb25cIiwgXCJsZWZ0LWljb25cIik7XG4gICAgICBsZWZ0SWNvbi5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBcIkNvbGxhcHNlIFByb2plY3RzXCIpO1xuICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGxlZnRJY29uKTtcblxuICAgICAgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIHBsdXNJY29uLnNyYyA9IHBsdXNTdmc7XG4gICAgICBwbHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pY29uXCIsIFwicGx1cy1pY29uXCIpO1xuICAgICAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJBZGQgbmV3IHByb2plY3RcIik7XG4gICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgICBsZWZ0SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIGlmIChwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgICAgIGxlZnRJY29uLnNyYyA9IGRvd25Tdmc7XG4gICAgICAgICAgbGVmdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJFeHBhbmQgUHJvamVjdHNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGVmdEljb24uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJDb2xsYXBzZSBQcm9qZWN0c1wiKTtcbiAgICAgICAgICBsZWZ0SWNvbi5zcmMgPSBsZWZ0U3ZnO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3UHJvamVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1jb250YWluZXJcIik7XG4gIHNpZGViYXJEaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgY3JlYXRlUHJvamVjdEl0ZW0gPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgXCJwcm9qZWN0LWl0ZW1cIiwgYHByb2plY3QtaXRlbS0ke2VsfWApO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIG5hdkl0ZW1EaXZzLnB1c2gocHJvamVjdEl0ZW0pO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZWw7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgbmF2U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5hdlNwYW4uY2xhc3NMaXN0LmFkZChcIm5hdi1zcGFuXCIsIFwiaGlkZGVuXCIpO1xuICAgIG5hdlNwYW4udGV4dENvbnRlbnQgPSAwO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKG5hdlNwYW4pO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUljb24uc3JjID0gZGVsZXRlU3ZnO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaWNvblwiLCBcImhpZGRlblwiKTtcbiAgICBkZWxldGVJY29uLnN0eWxlLmZsb2F0ID0gXCJyaWdodFwiO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgbmF2U3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgbmF2U3Bhbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZGVsZXRlUHJvamVjdChkZWxldGVJY29uKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RJdGVtc0Fyci5wdXNoKHByb2plY3RJdGVtKTtcbiAgfTtcblxuICBwcm9qZWN0SXRlbXMgPSBbXCJ3b3JrXCIsIFwiaG9tZVwiLCBcImd5bVwiXTtcblxuICBjb25zdCBzdG9yYWdlUHJvamVjdEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RJdGVtc1wiKSk7XG5cbiAgaWYgKHN0b3JhZ2VQcm9qZWN0SXRlbXMpXG4gICAgc3RvcmFnZVByb2plY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY3JlYXRlUHJvamVjdEl0ZW0oZWwpO1xuICAgIH0pO1xuICBlbHNlXG4gICAgcHJvamVjdEl0ZW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjcmVhdGVQcm9qZWN0SXRlbShlbCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SXRlbXMpKTtcbiAgICB9KTtcblxuICByZXR1cm4gc2lkZWJhckRpdjtcbn1cblxuZXhwb3J0IHtcbiAgc2lkZWJhckRpdixcbiAgbmF2SXRlbURpdnMsXG4gIGNyZWF0ZVByb2plY3RJdGVtLFxuICBwcm9qZWN0SXRlbXMsXG4gIHByb2plY3RJdGVtc0Fycixcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NpZGViYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jc2lkZWJhci1kaXYge1xuICBncmlkLWNvbHVtbjogMS8xO1xuICBncmlkLXJvdzogMi8tMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxuICAgIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuI3NpZGViYXItZGl2IC5wcm9qZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSAubmF2LXNwYW4ge1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSBpbWcge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtaXRlbTpob3ZlciB7XG4gIHRyYW5zbGF0ZTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaWRlYmFyLWRpdiAubmF2LXNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHggNnB4IDBweCA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xufVxuXG4jc2lkZWJhci1kaXYgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2Njtcbn1cblxuI3NpZGViYXItZGl2IC5uYXYtaXRlbS1wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGViYXItZGl2IC5zaWRlYmFyLWljb24ge1xuICB3aWR0aDogMjVweDtcbn1cblxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1yaWdodHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSB7XG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XG4gIGNvbG9yOiAjNDc1NTY5O1xufVxuXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NpZGViYXItZGl2IC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2lkZWJhci9zaWRlYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEQ7QUFDaEU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUI7O2NBRVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvZm9udHMvZnJlbnN0eWxlL0ZyZW5zdHlsZS1CRjY1MjRlZGMwMWRjMTYub3RmXFxcIik7XFxufVxcblxcbiNzaWRlYmFyLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMS8xO1xcbiAgZ3JpZC1yb3c6IDIvLTE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcXG4gICAgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG4gICAgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNDA0MDQwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnByb2plY3QtaXRlbSAubmF2LXNwYW4ge1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIGltZyB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5uYXYtaXRlbTpob3ZlciB7XFxuICB0cmFuc2xhdGU6IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3NjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAubmF2LXNwYW4ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDJweCA2cHggMHB4IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQ1ZGI7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLm5hdi1pdGVtLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLnNpZGViYXItaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxufVxcblxcbiNzaWRlYmFyLWRpdiAucHJvamVjdC1pdGVtIHtcXG4gIGxpc3Qtc3R5bGU6IGluaXRpYWw7XFxuICBjb2xvcjogIzQ3NTU2OTtcXG59XFxuXFxuI3NpZGViYXItZGl2IC5zaWRlYmFyLWljb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhci1kaXYgLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFwiLi9uZXdQcm9qZWN0LmNzc1wiO1xuaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuLi8uLlwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEl0ZW0gfSBmcm9tIFwiLi4vc2lkZWJhclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudFByb2plY3RJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbnRlbnQvY3JlYXRlQ29udGVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgY29uc3QgbmV3UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld1Byb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctcHJvamVjdFwiKTtcblxuICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtY29udGFpbmVyXCIpO1xuICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG5ld1Byb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWhlYWRlclwiKTtcbiAgbmV3UHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIG5ldyBwcm9qZWN0XCI7XG4gIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEhlYWRlcik7XG5cbiAgY29uc3QgbmV3UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuZXdQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIm5hbWVcIjtcbiAgbmV3UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TGFiZWwpO1xuXG4gIGNvbnN0IGxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBsYWJlbFNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgbmV3UHJvamVjdExhYmVsLmFwcGVuZENoaWxkKGxhYmVsU3Bhbik7XG5cbiAgY29uc3QgbmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgbmV3UHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuICBuZXdQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgYWRkTmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZE5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBwcm9qZWN0XCI7XG4gIGFkZE5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcIm5ld3Byb2plY3QtYnRuXCIpO1xuICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RCdG4pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRWxlbWVudChlbGVtZW50LCBhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS50b0xvd2VyQ2FzZSgpID09PSBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIpKTtcblxuICBhZGROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNoZWNrRWxlbWVudChuZXdQcm9qZWN0TmFtZS52YWx1ZSwgcHJvamVjdEl0ZW1zKSkge1xuICAgICAgYWxlcnQoXCJUaGlzIHByb2plY3QgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgIG5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3UHJvamVjdE5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGNyZWF0ZVByb2plY3RJdGVtKG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgIHByb2plY3RJdGVtcy5wdXNoKG5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgIG5ld1Byb2plY3REaXYucmVtb3ZlKCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5wcm9qZWN0cy1xdHlcIlxuICAgICAgKS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RJdGVtcy5sZW5ndGh9IHByb2pldHMgYDtcblxuICAgICAgY3JlYXRlQ29udGVudFByb2plY3RJdGVtKFxuICAgICAgICBuZXdQcm9qZWN0TmFtZS52YWx1ZSxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LXByb2plY3RzLWNvbnRhaW5lclwiKVxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3RvcmFnZVByb2plY3RJdGVtcyA9IEpTT04ucGFyc2UoXG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIpXG4gICAgICApO1xuXG4gICAgICBzdG9yYWdlUHJvamVjdEl0ZW1zLnB1c2gobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVByb2plY3RJdGVtcykpO1xuXG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgaWYgKCFuZXdQcm9qZWN0TmFtZS52YWxpZGl0eS52YWxpZCkgYWxlcnQoXCJFbnRlciBwcm9qZWN0IG5hbWUsIHBsZWFzZVwiKTtcbiAgfSk7XG5cbiAgbmV3UHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCIubmV3LXByb2plY3QtY29udGFpbmVyXCIpKSBuZXdQcm9qZWN0RGl2LnJlbW92ZSgpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25ld1Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uZXdQcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZvbnRzcHJpbmcvRm9udHNwcmluZy1ERU1PLW9rdGFoX3JlZ3VsYXJfaXRhbGljLUJGNjUxMTA1ZjgzYjM4Mi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGb250c3ByaW5nXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4jbmV3LXByb2plY3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiNuZXctcHJvamVjdCBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM0NzU1Njk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNuZXctcHJvamVjdCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNuZXctcHJvamVjdCBpbnB1dCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTFhMWFhO1xufVxuXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZTRlNGU3O1xufVxuXG4jbmV3LXByb2plY3QgLm5ld3Byb2plY3QtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2xhdGU6IDNweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NpZGViYXIvbmV3cHJvamVjdC9uZXdQcm9qZWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qiw0Q0FBd0Y7QUFDMUY7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkVBQTZFO0VBQzdFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIHNyYzogdXJsKC9zcmMvZm9udHMvZm9udHNwcmluZy9Gb250c3ByaW5nLURFTU8tb2t0YWhfcmVndWxhcl9pdGFsaWMtQkY2NTExMDVmODNiMzgyLm90Zik7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXctcHJvamVjdC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMzBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNuZXctcHJvamVjdCAubmV3LXByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuN2VtO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGb250c3ByaW5nXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogIzQ3NTU2OTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiNuZXctcHJvamVjdCBzcGFuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgXFxcIkdpbGwgU2FucyBNVFxcXCIsIENhbGlicmksIFxcXCJUcmVidWNoZXQgTVNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4jbmV3LXByb2plY3QgaW5wdXQge1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMWExYWE7XFxufVxcblxcbiNuZXctcHJvamVjdCAubmV3cHJvamVjdC1idG4ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc1NTY5O1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBjb2xvcjogI2U0ZTRlNztcXG59XFxuXFxuI25ldy1wcm9qZWN0IC5uZXdwcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2xhdGU6IDNweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IG5hdkl0ZW1EaXZzLCBwcm9qZWN0SXRlbXMsIHByb2plY3RJdGVtc0FyciB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IGNvbnRlbnRzLCBjb250ZW50RGl2IH0gZnJvbSBcIi4vY29udGVudFwiO1xuaW1wb3J0IHsgdGFza0NvbnRlbnQgfSBmcm9tIFwiLi90YXNrY29udGVudC90YXNrQ29udGVudFwiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdE9wdGlvbiBmcm9tIFwiLi90YXNrY29udGVudC9jcmVhdGVTZWxlY3RPcHRpb25cIjtcbmltcG9ydCBwbHVzU3ZnIGZyb20gXCIvc3JjL2ljb25zL3BsdXMtYm94LnN2Z1wiO1xuXG5jb25zdCBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgcHJvamVjdHNDb250YWluZXIpIHtcbiAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LXByb2plY3QtaXRlbVwiLCBgcHJvamVjdC1pdGVtLSR7aXRlbX1gKTtcbiAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtO1xuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG5cbiAgY3JlYXRlQ29udGVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC1pdGVtLSR7aXRlbX1gKSk7XG4gIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYHByb2plY3QtaXRlbS0ke3Byb2plY3RJdGVtLnRleHRDb250ZW50fWApKVxuICAgICAgICBjcmVhdGVDb250ZW50KGVsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudChpdGVtKSB7XG4gIGlmIChpdGVtLmNsb3Nlc3QoXCIubmF2LWl0ZW1cIikpIHtcbiAgICBuYXZJdGVtRGl2cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1wcm9qZWN0c1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG5cbiAgICBjb250ZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoYGNvbnRlbnQtJHtpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50fWApXG4gICAgICApXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBlbHNlIGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtaXRlbS1wcm9qZWN0c1wiKSkge1xuICAgICAgbGV0IHByb2plY3RzO1xuICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1wcm9qZWN0cy1jb250YWluZXJcIikpIHtcbiAgICAgICAgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCJcbiAgICAgICAgKS5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICAgIH1cbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXF0eVwiKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLnByb2plY3RzLXF0eVwiXG4gICAgICAgICkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c30gcHJvamVjdHNgO1xuICAgICAgfVxuICAgIH1cblxuICAgIGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgaWYgKGl0ZW0uY2xvc2VzdChcIi5uYXYtaXRlbVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJjcmVhdGVkXCIpKSByZXR1cm47XG4gICAgaXRlbS5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVkXCIpO1xuXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICAgICAgYGNvbnRlbnQtJHtpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50fWBcbiAgICApO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lcik7XG4gICAgY29udGVudHMucHVzaChjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkZXJcIik7XG4gICAgY29udGVudEhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcInBcIikudGV4dENvbnRlbnQ7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50SGVhZGVyKTtcblxuICAgIGxldCBwcm9qZWNzdHNRdHk7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWl0ZW0tcHJvamVjdHNcIikpIHtcbiAgICAgIHByb2plY3N0c1F0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWNzdHNRdHkudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0SXRlbXMubGVuZ3RofSBwcm9qZWN0cyBgO1xuICAgICAgcHJvamVjc3RzUXR5LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1xdHlcIik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3N0c1F0eSk7XG5cbiAgICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyXCIpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5cbiAgICAgIHByb2plY3RJdGVtc0Fyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnRQcm9qZWN0SXRlbShcbiAgICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50LFxuICAgICAgICAgIHByb2plY3RzQ29udGFpbmVyXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1kaXZcIik7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrRGl2KTtcblxuICAgIGNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcGx1c0ljb24uc3JjID0gcGx1c1N2ZztcbiAgICBwbHVzSWNvbi5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1pY29uXCIsIFwicGx1cy1pY29uXCIpO1xuICAgIGFkZFRhc2tEaXYuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuXG4gICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRUYXNrVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stdGV4dFwiKTtcbiAgICBhZGRUYXNrVGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcbiAgICBhZGRUYXNrRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcblxuICAgIGNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICB0YXNrSXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2staXRlbXMtY29udGFpbmVyXCIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW1zQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNlbGVjdE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXByb2plY3RcIik7XG5cbiAgICBhZGRUYXNrRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdGFza0NvbnRlbnQoKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiRElWXCIpXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbihlLnRhcmdldCwgc2VsZWN0T3B0aW9uKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiSU1HXCIgfHwgZS50YXJnZXQudGFnTmFtZSA9PT0gXCJQXCIpXG4gICAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbihlLnRhcmdldCwgc2VsZWN0T3B0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVDb250ZW50UHJvamVjdEl0ZW0gfTtcbiIsImltcG9ydCBcIi4vY29udGVudC5jc3NcIjtcbmltcG9ydCB7IHNpZGViYXJEaXYsIG5hdkl0ZW1EaXZzIH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhclwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudCB9IGZyb20gXCIuL2NyZWF0ZUNvbnRlbnRcIjtcblxubGV0IGNvbnRlbnREaXY7XG5sZXQgY29udGVudHMgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRlbnQoKSB7XG4gIGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudC1kaXZcIik7XG5cbiAgbmF2SXRlbURpdnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNyZWF0ZUNvbnRlbnQoaXRlbSk7XG4gIH0pO1xuXG4gIGNyZWF0ZUNvbnRlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtaXRlbS1wcm9qZWN0c1wiKSk7XG5cbiAgc2lkZWJhckRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1pY29uXCIpKSByZXR1cm47XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiU1BBTlwiIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiUFwiKVxuICAgICAgY3JlYXRlQ29udGVudChlLnRhcmdldC5jbG9zZXN0KFwiLm5hdi1pdGVtXCIpKTtcbiAgICBlbHNlIGNyZWF0ZUNvbnRlbnQoZS50YXJnZXQpO1xuICB9KTtcblxuICBjcmVhdGVDb250ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0taW5ib3hcIikpO1xuXG4gIHJldHVybiBjb250ZW50RGl2O1xufVxuXG5leHBvcnQgeyBjb250ZW50RGl2IH07XG5leHBvcnQgeyBjb250ZW50cyB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2ZvbnRzL2ZyZW5zdHlsZS9GcmVuc3R5bGUtQkY2NTI0ZWRjMDFkYzE2Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZm9udHMvbWF0Y2hhLXNlcmlmL21hdGNoYXNlcmlmLXJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9pY29ucy9jYWxlbmRhci1yYW5nZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGNoYS1TZXJpZlwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuI2NvbnRlbnQtZGl2IHtcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XG4gIGdyaWQtcm93OiAyLy0xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5jb250ZW50LWhlYWRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIGNvbG9yOiAjMDIwNjE3O1xuICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY29udGVudC1kaXYgLmFkZC10YXNrLXRleHQge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2OmhvdmVyIC5hZGQtdGFzay10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgY29sb3I6ICNkYzI2MjY7XG59XG5cbiNjb250ZW50LWRpdiAuYWRkLXRhc2stZGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudC1kaXYgLnByb2plY3RzLXF0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0LWl0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzY2O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzM3MzczO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogYXV0bztcbn1cblxuI2NvbnRlbnQtZGl2IC5tb3VzZWVudGVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjb250ZW50LWRpdiAudGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tdGl0bGUge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRhdGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNjb250ZW50LWRpdiAudGFzay1kYXRlLXBhcmEge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLXByaW9yaXR5IHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlbnN0eWxlXCI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NDc0OGI7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tcmlnaHRzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tbGVmdHNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEycHg7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuI2NvbnRlbnQtZGl2IC50YXNrLWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5lZGl0LWljb24sXG4jY29udGVudC1kaXYgLmRlbGV0ZS1pY29uLFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jY29udGVudC1kaXYgLmVkaXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZS1jb250YWluZXI6aG92ZXIge1xuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOXB4O1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJweDtcbiAgdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY29udGVudC1kaXYgLmRhdGVwaWNrZXItaW5wdXQ6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRlbnQtZGl2IC5kYXRldGV4dC1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jY29udGVudC1kaXYgLm5ldy1wcmlvcml0eSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZW5zdHlsZVwiO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNjAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBOEQ7QUFDaEU7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTJEO0FBQzdEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VB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RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZDtzREFDb0Q7RUFDcEQsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL2ZyZW5zdHlsZS9GcmVuc3R5bGUtQkY2NTI0ZWRjMDFkYzE2Lm90ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWF0Y2hhLVNlcmlmXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL21hdGNoYS1zZXJpZi9tYXRjaGFzZXJpZi1yZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5cXG4jY29udGVudC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIvLTE7XFxuICBncmlkLXJvdzogMi8tMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbiNjb250ZW50LWRpdiAuY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuY29udGVudC1oZWFkZXIge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGNvbG9yOiAjMDIwNjE3O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ExYTFhYTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtaWNvbiB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuYWRkLXRhc2stdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LFxcbiAgICBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5hZGQtdGFzay1kaXY6aG92ZXIgLmFkZC10YXNrLXRleHQge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjZGMyNjI2O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmFkZC10YXNrLWRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAucHJvamVjdHMtcXR5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmNvbnRlbnQtcHJvamVjdC1pdGVtIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbiNjb250ZW50LWRpdiAuY29udGVudC1wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjc2NjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnNlbGVjdGVkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MzczNzM7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLm1vdXNlZW50ZXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkNWRiO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC50aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC50YXNrLXRpdGxlLWJlZm9yZSB7XFxuICB3aWR0aDogMC41ZW07XFxuICBoZWlnaHQ6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjMWYyOTM3O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmVkaXRhYmxlLWl0ZW06Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staXRlbS0tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY29sb3I6ICM3MzczNzM7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2stZGF0ZS1wYXJhIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1wcmlvcml0eSB7XFxuICBmb250LWZhbWlseTogXFxcIkZyZW5zdHlsZVxcXCI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNjQ3NDhiO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1yaWdodHNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAudGFzay1pdGVtLS1sZWZ0c2lkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLnRhc2staWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdC1pY29uLFxcbiNjb250ZW50LWRpdiAuZGVsZXRlLWljb24sXFxuI2NvbnRlbnQtZGl2IC5kb3RzLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZWRpdGFibGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY29udGVudC1kaXYgLmRhdGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlLWNvbnRhaW5lcjpob3ZlciB7XFxuICBjYXJldC1jb2xvcjogI2RjMjYyNjtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMThweDtcXG4gIGhlaWdodDogMTlweDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5kYXRlcGlja2VyLXRvZ2dsZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTJweDtcXG4gIHRvcDogMnB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9zcmMvaWNvbnMvY2FsZW5kYXItcmFuZ2Uuc3ZnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXBpY2tlci1pbnB1dDo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250ZW50LWRpdiAuZGF0ZXRleHQtaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjNzM3MzczO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI2NvbnRlbnQtZGl2IC5uZXctcHJpb3JpdHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGcmVuc3R5bGVcXFwiO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3aWR0aDogNjAlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBib2R5LCB2YWxpZGF0ZURhdGUsIHRhc2tJdGVtIH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgXCIuL3Rhc2tDb250ZW50LmNzc1wiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdE9wdGlvbiBmcm9tIFwiLi9jcmVhdGVTZWxlY3RPcHRpb25cIjtcbmltcG9ydCBhZGRUYXNrSXRlbSBmcm9tIFwiLi9hZGRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5sZXQgdGFza1ByaW9yaXR5O1xubGV0IGNvdW50ZXI7XG5cbmlmIChcbiAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSAmJlxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpLmxlbmd0aCA+IDBcbikge1xuICBjb3VudGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50ZXJcIikpO1xufSBlbHNlIGNvdW50ZXIgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza0NvbnRlbnQoKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWNvbnRlbnRcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgdGFza0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgbmFtZVwiKTtcbiAgdGFza05hbWUuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgY29uc3Qgd3JhcHBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXJEaXYuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItZGl2XCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyRGl2KTtcblxuICBjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGFza0RhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIHRhc2tEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gIHRhc2tEYXRlLnZhbHVlID0gZGF0ZVN0cmluZztcbiAgd3JhcHBlckRpdi5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XG5cbiAgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1zZWxlY3RcIik7XG4gIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDU7IGkrKykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Qtb3B0aW9uXCIsIGBvcHRpb24tJHtpfWApO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgUHJpb3JpdHkgJHtpfWA7XG4gICAgdGFza1ByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgaWYgKGkgPT0gNCkgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICB9XG5cbiAgY29uc3QgbGFzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxhc3REaXYuY2xhc3NMaXN0LmFkZChcImxhc3QtZGl2XCIpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZChsYXN0RGl2KTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LXByb2plY3RcIik7XG4gIGxhc3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdCk7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xuXG4gIG5hdkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjcmVhdGVTZWxlY3RPcHRpb24oaXRlbS5xdWVyeVNlbGVjdG9yKFwicFwiKS50ZXh0Q29udGVudCwgc2VsZWN0UHJvamVjdCk7XG4gIH0pO1xuXG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcbiAgbGFzdERpdi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiY2FuY2VsXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIiwgXCJjYW5jZWwtYnRuXCIpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcImFkZCB0YXNrXCI7XG4gIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIsIFwiYWRkLWJ0blwiKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWJ0blwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9KTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgdGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBhZGRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZDMzYTJjXCI7XG4gICAgICBhZGRCdG4uc3R5bGUuYm94U2hhZG93ID0gXCJyZ2JhKDAsIDAsIDAsIDAuMTIpIDAgMXB4IDNweCAwIGluc2V0XCI7XG4gICAgICBhZGRCdG4uc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICB9XG4gICAgaWYgKCF0YXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGFkZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmU3ZTdcIjtcbiAgICAgIGFkZEJ0bi5zdHlsZS5jb2xvciA9IFwiI2RjMjYyNlwiO1xuICAgICAgYWRkQnRuLnN0eWxlLmJveFNoYWRvdyA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSAmJiB2YWxpZGF0ZURhdGUodGFza0RhdGUudmFsdWUpKSB7XG4gICAgICBjb3VudGVyKys7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50ZXJcIiwgSlNPTi5zdHJpbmdpZnkoY291bnRlcikpO1xuXG4gICAgICB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gICAgICBjb250ZW50SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudC0ke3NlbGVjdFByb2plY3QudmFsdWV9YCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdUYXNrSXRlbSA9IG5ldyB0YXNrSXRlbShcbiAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlLFxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgdGFza0RhdGUudmFsdWUsXG4gICAgICAgICAgICB0YXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0LnZhbHVlLFxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBhZGRUYXNrSXRlbShuZXdUYXNrSXRlbSwgZWwsIGNvdW50ZXIpO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG4gICAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFza0l0ZW0pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cbiAgICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0YXNrRGF0ZS52YWx1ZSkpKSB7XG4gICAgICAgICAgICBuZXdUYXNrSXRlbS5wcm9qZWN0ID0gXCJ0b2RheVwiO1xuICAgICAgICAgICAgYWRkVGFza0l0ZW0oXG4gICAgICAgICAgICAgIG5ld1Rhc2tJdGVtLFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kYXlcIiksXG4gICAgICAgICAgICAgIGNvdW50ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFza0l0ZW0pO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdGFza0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY29udGFpbmVyXCIpKSB0YXNrQ29udGVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0NvbnRlbnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrQ29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9mcmVuc3R5bGUvRnJlbnN0eWxlLUJGNjUyNGVkYzAxZGMxNi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGcmVuc3R5bGVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiN0YXNrLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweCA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDM2JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNCU7XG4gIGJveC1zaGFkb3c6IDAgMjZweCA1OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKSxcbiAgICAwIDVweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuI3Rhc2stY29udGVudCAudGFzay1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4jdGFzay1jb250ZW50IC50YXNrLWZvcm06Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2stbmFtZSxcbi50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLFxuICAgIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgcGFkZGluZzogM3B4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jdGFzay1jb250ZW50IC50YXNrLW5hbWUge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4jdGFzay1jb250ZW50IC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cblxuI3Rhc2stY29udGVudCAuZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAzMSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM2YjcyODA7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMyU7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmRhdGUtY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xufVxuXG4jdGFzay1jb250ZW50IC5kYXRlLXRleHQge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICM2NDc0OGI7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnRhc2staWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4jdGFzay1jb250ZW50IC53cmFwcGVyLWRpdiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY0NzQ4YjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbiN0YXNrLWNvbnRlbnQgaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXG4gICAgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuI3Rhc2stY29udGVudCAucHJpb3JpdHktc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI3Rhc2stY29udGVudCAuc2VsZWN0LXByb2plY3QsXG4uY2FuY2VsLWJ0bixcbi5hZGQtYnRuIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFzay1jb250ZW50IC5sYXN0LWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Rhc2stY29udGVudCAuYnRuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTNweDtcbn1cblxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNmU2ZDcwO1xuICBib3gtc2hhZG93OiAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICBpbnNldCAwcHggMC41cHggMC41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxuICAgIDBweCAwcHggMHB4IDAuNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiAjZGZkZWRmO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jdGFzay1jb250ZW50IC5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDAuOHB4IDBweCAtMC4yNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSxcbiAgICAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggMy41cHggcmdiYSg1OCwgMTA4LCAyMTcsIDAuNSk7XG4gIG91dGxpbmU6IDA7XG59XG5cbiN0YXNrLWNvbnRlbnQgLmFkZC1idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlN2U3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGMyNjI2O1xuICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICBjb2xvcjogI2QzM2EyYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzNhMmM7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggM3B4IDAgaW5zZXQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdGFzay1jb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2RjMjYyNjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQvdGFza2NvbnRlbnQvdGFza0NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCO29DQUNrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFO3NEQUNvRDtFQUNwRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEI7c0RBQ29EO0VBQ3BELHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkO3NEQUNvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQjs7eUNBRXVDO0VBQ3ZDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOytFQUM2RTtFQUM3RSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpREFBaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRnJlbnN0eWxlXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2ZvbnRzL2ZyZW5zdHlsZS9GcmVuc3R5bGUtQkY2NTI0ZWRjMDFkYzE2Lm90ZlxcXCIpO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMzYlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA0JTtcXG4gIGJveC1zaGFkb3c6IDAgMjZweCA1OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKSxcXG4gICAgMCA1cHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDNweDtcXG59XFxuI3Rhc2stY29udGVudCAudGFzay1mb3JtOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1uYW1lLFxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBwYWRkaW5nOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC50YXNrLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAzMSU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmI3MjgwO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmRhdGUtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmRhdGUtdGV4dCB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XFxuICBjb2xvcjogIzY0NzQ4YjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAudGFzay1pY29uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC53cmFwcGVyLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDc0OGI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG59XFxuXFxuI3Rhc2stY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiAjNjQ3NDhiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgU2Fuc1xcXCIsIFxcXCJMdWNpZGEgU2FucyBSZWd1bGFyXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnByaW9yaXR5LXNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5zZWxlY3QtcHJvamVjdCxcXG4uY2FuY2VsLWJ0bixcXG4uYWRkLWJ0biB7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLnNlbGVjdC1wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAubGFzdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0YXNrLWNvbnRlbnQgLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTNweDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0biB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogIzZlNmQ3MDtcXG4gIGJveC1zaGFkb3c6IDBweCAwLjVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcbiAgICBpbnNldCAwcHggMC41cHggMC41cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxcbiAgICAwcHggMHB4IDBweCAwLjVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgY29sb3I6ICNkZmRlZGY7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMC44cHggMHB4IC0wLjI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxcbiAgICAwcHggMC41cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDBweCAwcHggMy41cHggcmdiYSg1OCwgMTA4LCAyMTcsIDAuNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jdGFzay1jb250ZW50IC5hZGQtYnRuIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU3ZTc7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGMyNjI2O1xcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcXG4gIGNvbG9yOiAjZDMzYTJjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuYWRkLWJ0bjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzM2EyYztcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMCAxcHggM3B4IDAgaW5zZXQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI3Rhc2stY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMyNjI2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibGV0IHByb2plY3RHcm91cDtcbmxldCBpdGVtVGV4dDtcbmxldCBzZWxlY3RJdGVtcztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9uKGl0ZW0sIHNlbGVjdFByb2plY3QpIHtcbiAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gXCJQXCIgfHwgaXRlbS50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgaXRlbVRleHQgPSBpdGVtLnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIHNlbGVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtaXRlbVwiKTtcbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG4gICAgc2VsZWN0SXRlbXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYHNlbGVjdC1pdGVtLSR7aXRlbVRleHR9YCkpXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpdGVtLnRhZ05hbWUgPT09IFwiRElWXCIpIHtcbiAgICBpdGVtVGV4dCA9IGl0ZW0ucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIHNlbGVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWxlY3QtaXRlbVwiKTtcbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG5cbiAgICBzZWxlY3RJdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhgc2VsZWN0LWl0ZW0tJHtpdGVtVGV4dH1gKSlcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXRlbVRleHQgPSBpdGVtO1xuICBpZiAoaXRlbVRleHQgPT09IFwicHJvamVjdHNcIikge1xuICAgIHByb2plY3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKTtcbiAgICBwcm9qZWN0R3JvdXAubGFiZWwgPSBcIlByb2plY3RzXCI7XG4gICAgc2VsZWN0UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0R3JvdXApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzZWxlY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgc2VsZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0LWl0ZW1cIiwgYHNlbGVjdC1pdGVtLSR7aXRlbVRleHR9YCk7XG4gIHNlbGVjdEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgc2VsZWN0SXRlbS52YWx1ZSA9IGl0ZW1UZXh0O1xuXG4gIGlmIChpdGVtVGV4dCA9PT0gXCJ0b2RheVwiKSByZXR1cm47XG5cbiAgaWYgKGl0ZW1UZXh0ID09PSBcImluYm94XCIpIHNlbGVjdFByb2plY3QuYXBwZW5kQ2hpbGQoc2VsZWN0SXRlbSk7XG4gIGVsc2UgcHJvamVjdEdyb3VwLmFwcGVuZENoaWxkKHNlbGVjdEl0ZW0pO1xufVxuIiwiaW1wb3J0IGNvbW1lbnRTdmcgZnJvbSBcIi9zcmMvaWNvbnMvY29tbWVudC5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIvc3JjL2ljb25zL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBkZWxldGVTdmcgZnJvbSBcIi9zcmMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGVkaXRUYXNrSXRlbSwgeyBlZGl0RGF0ZSB9IGZyb20gXCIuL2VkaXRUYXNrSXRlbVwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuL3VwZGF0ZVRhc2tRdHlcIjtcbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgeyB1cGRhdGVQcmlvcml0eSB9IGZyb20gXCIuL3VwZGF0ZVByaW9yaXR5XCI7XG5cbmxldCBmb3JtYXREYXRlO1xubGV0IG9wdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFza0l0ZW0oaXRlbSwgY29udGVudEl0ZW0sIGNvdW50ZXIpIHtcbiAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIiwgYHRhc2staXRlbS0tJHtjb3VudGVyfWApO1xuICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIGZhbHNlKTtcblxuICBjb25zdCB0YXNrSXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtcy1jb250YWluZXJcIik7XG5cbiAgdGFza0l0ZW1Db250YWluZXIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChjb250ZW50SXRlbS5jb250YWlucyhpdGVtKSkgaXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJpZ2h0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtLS1yaWdodHNpZGVcIik7XG4gIHRhc2tJdGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICByaWdodFNpZGUuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLXRpdGxlXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrVGl0bGVCZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGFza1RpdGxlQmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlLWJlZm9yZVwiKTtcbiAgdXBkYXRlUHJpb3JpdHkoaXRlbS5wcmlvcml0eSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgdGl0bGVDb250YWluZXIuaW5zZXJ0QmVmb3JlKHRhc2tUaXRsZUJlZm9yZSwgdGFza1RpdGxlKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25Db250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1jb250YWluZXJcIik7XG4gIHJpZ2h0U2lkZS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25Db250YWludGVyKTtcblxuICBjb25zdCBjb21tZW50SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb21tZW50SWNvbi5zcmMgPSBjb21tZW50U3ZnO1xuICBjb21tZW50SWNvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pY29uXCIsIFwiY29tbWVudC1pY29uXCIpO1xuICB0YXNrRGVzY3JpcHRpb25Db250YWludGVyLmFwcGVuZENoaWxkKGNvbW1lbnRJY29uKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCIsIFwiZWRpdGFibGUtaXRlbVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgdGFza0Rlc2NyaXB0aW9uQ29udGFpbnRlci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gIGNvbnN0IGRhdGVwaWNrZXJUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGF0ZXBpY2tlclRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZXBpY2tlci10b2dnbGVcIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZSk7XG5cbiAgY29uc3QgZGF0ZXBpY2tlclRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlcGlja2VyVG9nZ2xlQnRuLmNsYXNzTGlzdC5hZGQoXCJkYXRlcGlja2VyLXRvZ2dsZS1idXR0b25cIik7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZXBpY2tlclRvZ2dsZUJ0bik7XG5cbiAgY29uc3QgZGF0ZXBpY2tlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlcGlja2VySW5wdXQuY2xhc3NMaXN0LmFkZChcImRhdGVwaWNrZXItaW5wdXRcIik7XG4gIGRhdGVwaWNrZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlcGlja2VySW5wdXQpO1xuICBkYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGZvcm1hdERhdGUgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLXVzXCIsIHsgZGF0ZVN0eWxlOiBcImxvbmdcIiB9KTtcbiAgY29uc3QgZGF0ZXRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZXRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZGF0ZXRleHQtaW5wdXRcIik7XG4gIGRhdGV0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgaWYgKGlzVG9kYXkobmV3IERhdGUoaXRlbS5kdWVEYXRlKSkpXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlRvZGF5XCIpO1xuICBlbHNlXG4gICAgZGF0ZXRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZhbHVlXCIsXG4gICAgICBpdGVtLmR1ZURhdGUgPyBgJHtmb3JtYXREYXRlLmZvcm1hdChuZXcgRGF0ZShpdGVtLmR1ZURhdGUpKX1gIDogXCJObyBkYXRlXCJcbiAgICApO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGV0ZXh0SW5wdXQpO1xuXG4gIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5ldy1wcmlvcml0eVwiLCBcImhpZGRlblwiKTtcbiAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKG5ld1ByaW9yaXR5KTtcbiAgbmV3UHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNTsgaSsrKSB7XG4gICAgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcInNlbGVjdC1vcHRpb25cIiwgYG9wdGlvbi0ke2l9YCk7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGkpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGBQcmlvcml0eSAke2l9YDtcbiAgICBuZXdQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgbmV3UHJpb3JpdHlcbiAgICAucXVlcnlTZWxlY3RvcihgLm9wdGlvbi0ke2l0ZW0ucHJpb3JpdHl9YClcbiAgICAuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG5cbiAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtLS1sZWZ0c2lkZVwiKTtcbiAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuXG4gIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIiwgXCJlZGl0LWljb25cIiwgXCJoaWRkZW5cIik7XG4gIGVkaXRJY29uLnNyYyA9IGVkaXRTdmc7XG4gIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRWRpdCB0YXNrXCIpO1xuICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWljb25cIiwgXCJkZWxldGUtaWNvblwiLCBcImhpZGRlblwiKTtcbiAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTdmc7XG4gIGxlZnRTaWRlLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gIHVwZGF0ZVRhc2tRdHkoaXRlbS5wcm9qZWN0KTtcblxuICBmdW5jdGlvbiBjbGFzc1RvZ2dsZSgpIHtcbiAgICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgbmV3UHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIHRhc2tJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRhc2tJdGVtLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICBjbGFzc1RvZ2dsZSgpO1xuICAgICAgdGFza0l0ZW0uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgfVxuICB9KTtcblxuICB0YXNrSXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0YXNrSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgY2xhc3NUb2dnbGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdXBkYXRlVGFza1F0eShlLnRhcmdldCk7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcbiAgICBjdXJyZW50VGFzay5yZW1vdmUoKTtcbiAgICBjb25zdCBjdXJyZW50VGFza051bWJlciA9ICtjdXJyZW50VGFzay5jbGFzc0xpc3RbMV0uc2xpY2UoMTEpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRhc2sgPSBjdXJyZW50VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICByZXR1cm4gK3Rhc2suY291bnRlciAhPT0gY3VycmVudFRhc2tOdW1iZXI7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KGZpbHRlcmVkVGFzaykpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5jb250YWlucyhlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKS5jbGFzc0xpc3RbMV0pXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdG9kYXlUYXNrID0gaXRlbTtcbiAgICAgICAgdXBkYXRlVGFza1F0eSh0b2RheVRhc2sucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtaWNvblwiKSk7XG4gICAgICAgIHRvZGF5VGFzay5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZWRpdFRhc2tJdGVtKFxuICAgICAgZSxcbiAgICAgIHRhc2tJdGVtLFxuICAgICAgdGFza1RpdGxlLFxuICAgICAgZWRpdEljb24sXG4gICAgICBkYXRlcGlja2VySW5wdXQsXG4gICAgICBuZXdQcmlvcml0eSxcbiAgICAgIGl0ZW0uZHVlRGF0ZVxuICAgICk7XG4gIH0pO1xuXG4gIGRhdGVwaWNrZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBlZGl0RGF0ZShkYXRlcGlja2VySW5wdXQudmFsdWUsIGRhdGV0ZXh0SW5wdXQpO1xuICB9KTtcblxuICBuZXdQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVQcmlvcml0eShuZXdQcmlvcml0eS52YWx1ZSwgdGFza1RpdGxlQmVmb3JlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGZvcm1hdERhdGUgfTtcbiIsImltcG9ydCB7IHZhbGlkYXRlRGF0ZSwgdGFza0l0ZW0gYXMgbmV3VGFza0l0ZW0gfSBmcm9tIFwiLi4vLi5cIjtcbmltcG9ydCBzYXZlU3ZnIGZyb20gXCIvc3JjL2ljb25zL2NvbnRlbnQtc2F2ZS5zdmdcIjtcbmltcG9ydCBlZGl0U3ZnIGZyb20gXCIvc3JjL2ljb25zL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBhZGRUYXNrSXRlbSwgeyBmb3JtYXREYXRlIH0gZnJvbSBcIi4vYWRkVGFza0l0ZW1cIjtcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHVwZGF0ZVRhc2tRdHkgfSBmcm9tIFwiLi91cGRhdGVUYXNrUXR5XCI7XG5pbXBvcnQgeyB1cGRhdGVQcmlvcml0eSB9IGZyb20gXCIuL3VwZGF0ZVByaW9yaXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRUYXNrSXRlbShcbiAgZXZlbnQsXG4gIHRhc2tJdGVtLFxuICB0YXNrVGl0bGUsXG4gIGVkaXRJY29uLFxuICBkYXRlcGlja2VySW5wdXQsXG4gIG5ld1ByaW9yaXR5LFxuICBkdWVEYXRlXG4pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0YWJsZS1pdGVtXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1pdGVtXCIpLmNvbnRhaW5zKGl0ZW0pKSB7XG4gICAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBldmVudENvbnRlbnQgPSBldmVudC50YXJnZXRcbiAgICAuY2xvc2VzdChcIi5jb250ZW50LWNvbnRhaW5lclwiKVxuICAgIC5xdWVyeVNlbGVjdG9yKFwiaDFcIikudGV4dENvbnRlbnQ7XG5cbiAgdGFza0l0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpO1xuICBpZiAodGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICB0YXNrVGl0bGUuZm9jdXMoKTtcbiAgICBlZGl0SWNvbi5zcmMgPSBzYXZlU3ZnO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiU2F2ZSBjaGFuZ2VzXCIpO1xuXG4gICAgaWYgKGV2ZW50Q29udGVudCAhPT0gXCJ0b2RheVwiKSBkYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBuZXdQcmlvcml0eS5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIGlmICghdGFza0l0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICBlZGl0SWNvbi5zcmMgPSBlZGl0U3ZnO1xuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIFwiRWRpdCB0YXNrXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdGFibGUtaXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGRhdGVwaWNrZXJJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgbmV3UHJpb3JpdHkuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VycmVudFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnRhc2staXRlbVwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9XG4gICAgICBjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbS0tdGl0bGVcIikudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudERlc2NyaXB0aW9uID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLnRhc2staXRlbS0tZGVzY3JpcHRpb25cIlxuICAgICkudGV4dENvbnRlbnQ7XG4gICAgY29uc3QgY3VycmVudFByaW9yaXR5ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5uZXctcHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgY3VycmVudERhdGVUZXh0ID0gY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5kYXRldGV4dC1pbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBjb3VudGVyID0gK2N1cnJlbnRJdGVtLmNsYXNzTGlzdFsxXS5zbGljZSgxMSk7XG5cbiAgICBsZXQgY3VycmVudERhdGU7XG4gICAgaWYgKCFjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVwaWNrZXItaW5wdXRcIikudmFsdWUpXG4gICAgICBjdXJyZW50RGF0ZSA9IGR1ZURhdGU7XG4gICAgZWxzZSBjdXJyZW50RGF0ZSA9IGN1cnJlbnRJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZXBpY2tlci1pbnB1dFwiKS52YWx1ZTtcblxuICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5jb3VudGVyID09PSBjb3VudGVyKSB7XG4gICAgICAgIHRhc2sudGl0bGUgPSBjdXJyZW50VGl0bGU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBjdXJyZW50RGVzY3JpcHRpb247XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBjdXJyZW50UHJpb3JpdHk7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGN1cnJlbnREYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staXRlbVwiKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SXRlbVF0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIGAudGFzay1pdGVtLS0ke2NvdW50ZXJ9YFxuICAgICAgKTtcblxuICAgICAgaWYgKGl0ZW0gPT09IGN1cnJlbnRJdGVtICYmIGN1cnJlbnRJdGVtUXR5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBpZiAoY3VycmVudERhdGVUZXh0ICYmIGN1cnJlbnREYXRlICYmIGlzVG9kYXkobmV3IERhdGUoY3VycmVudERhdGUpKSkge1xuICAgICAgICAgIGNvbnN0IHRvZGF5SXRlbSA9IG5ldyBuZXdUYXNrSXRlbShcbiAgICAgICAgICAgIGN1cnJlbnRUaXRsZSxcbiAgICAgICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLFxuICAgICAgICAgICAgY3VycmVudFByaW9yaXR5LFxuICAgICAgICAgICAgXCJ0b2RheVwiLFxuICAgICAgICAgICAgY291bnRlclxuICAgICAgICAgICk7XG4gICAgICAgICAgYWRkVGFza0l0ZW0oXG4gICAgICAgICAgICB0b2RheUl0ZW0sXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtdG9kYXlcIiksXG4gICAgICAgICAgICBjb3VudGVyXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjdXJyZW50VGFza3MucHVzaCh0b2RheUl0ZW0pO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFRhc2tzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGN1cnJlbnRJdGVtLmNsYXNzTGlzdFsxXSkgJiZcbiAgICAgICAgaXRlbSAhPT0gY3VycmVudEl0ZW1cbiAgICAgICkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY3VycmVudEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5kYXRlcGlja2VyLWlucHV0XCIpLnZhbHVlICYmXG4gICAgICAgICAgIWlzVG9kYXkoXG4gICAgICAgICAgICBuZXcgRGF0ZShjdXJyZW50SXRlbS5xdWVyeVNlbGVjdG9yKFwiLmRhdGVwaWNrZXItaW5wdXRcIikudmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB1cGRhdGVUYXNrUXR5KFxuICAgICAgICAgICAgaXRlbS5jbG9zZXN0KFwiLmNvbnRlbnQtY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudCxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChhcnJheSwgZWxlbWVudFRvUmVtb3ZlKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gXCJ0b2RheVwiICYmIHRhc2suY291bnRlciA9PT0gY291bnRlcilcbiAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudChjdXJyZW50VGFza3MsIHRhc2spO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza3MpKTtcbiAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2staXRlbS0tdGl0bGVcIikudGV4dENvbnRlbnQgPSBjdXJyZW50VGl0bGU7XG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW0tLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICBjdXJyZW50RGVzY3JpcHRpb247XG4gICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5uZXctcHJpb3JpdHlcIikudmFsdWUgPSBjdXJyZW50UHJpb3JpdHk7XG4gICAgICAgIHVwZGF0ZVByaW9yaXR5KFxuICAgICAgICAgIGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5uZXctcHJpb3JpdHlcIikudmFsdWUsXG4gICAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGUtYmVmb3JlXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXREYXRlKGRhdGVwaWNrZXJJbnB1dCwgZGF0ZXRleHRJbnB1dCkge1xuICBpZiAoIWRhdGVwaWNrZXJJbnB1dCkge1xuICAgIGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBcIk5vIGRhdGVcIjtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzVG9kYXkobmV3IERhdGUoZGF0ZXBpY2tlcklucHV0KSkpIGRhdGV0ZXh0SW5wdXQudmFsdWUgPSBcIlRvZGF5XCI7XG4gIGVsc2Uge1xuICAgIHZhbGlkYXRlRGF0ZShkYXRlcGlja2VySW5wdXQpXG4gICAgICA/IChkYXRldGV4dElucHV0LnZhbHVlID0gZm9ybWF0RGF0ZS5mb3JtYXQobmV3IERhdGUoZGF0ZXBpY2tlcklucHV0KSkpXG4gICAgICA6IChkYXRldGV4dElucHV0LnZhbHVlID0gXCJObyBkYXRlXCIpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza1F0eSh2YWx1ZSwgYWNjID0gMCkge1xuICBsZXQgY291bnRlciA9IDAgKyBhY2M7XG4gIGlmICh2YWx1ZS50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgY291bnRlciA9IDE7XG4gICAgdmFsdWUgPSB2YWx1ZS5jbG9zZXN0KFwiLmNvbnRlbnQtY29udGFpbmVyXCIpLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGNvbnN0IG5hdlNwYW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtc3BhblwiKTtcbiAgbmF2U3BhbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoXG4gICAgICBlbC5jbG9zZXN0KGAubmF2LWl0ZW0tJHt2YWx1ZX1gKSB8fFxuICAgICAgZWwuY2xvc2VzdChgLnByb2plY3QtaXRlbS0ke3ZhbHVlfWApXG4gICAgKSB7XG4gICAgICBlbC50ZXh0Q29udGVudCA9XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LSR7dmFsdWV9YClcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi50YXNrLWl0ZW1zLWNvbnRhaW5lclwiKS5jaGlsZEVsZW1lbnRDb3VudCAtIGNvdW50ZXI7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcmlvcml0eShwcmlvcml0eSwgdGFza1RpdGxlQmVmb3JlKSB7XG4gIGlmICgrcHJpb3JpdHkgPT09IDQpIHRhc2tUaXRsZUJlZm9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gIGlmICgrcHJpb3JpdHkgPT09IDMpIHRhc2tUaXRsZUJlZm9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsdWVcIjtcbiAgaWYgKCtwcmlvcml0eSA9PT0gMikgdGFza1RpdGxlQmVmb3JlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwib3JhbmdlXCI7XG4gIGlmICgrcHJpb3JpdHkgPT09IDEpIHRhc2tUaXRsZUJlZm9yZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xufVxuIiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCJpbXBvcnQgXCIuL2RlbGV0ZVByb2plY3QuY3NzXCI7XG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi4uLy4uXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZW50IH0gZnJvbSBcIi4uLy4uL2NvbnRlbnQvY3JlYXRlQ29udGVudFwiO1xuaW1wb3J0IGRlbGV0ZUNvbnRlbnQgZnJvbSBcIi4uLy4uL2NvbnRlbnQvZGVsZXRlQ29udGVudFwiO1xuaW1wb3J0IHsgdXBkYXRlVGFza1F0eSB9IGZyb20gXCIuLi8uLi9jb250ZW50L3Rhc2tjb250ZW50L3VwZGF0ZVRhc2tRdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChkZWxldGVJY29uKSB7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZWxldGVQcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgZGVsZXRlUHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0Q29udGFpbmVyKTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBkZWxldGVQcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1oZWFkZXJcIik7XG4gIGRlbGV0ZVByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgcHJvamVjdD9cIjtcbiAgZGVsZXRlUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SGVhZGVyKTtcblxuICBjb25zdCBidG5zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRucy1jb250YWluZXJcIik7XG4gIGRlbGV0ZVByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuc0NvbnRhaW5lcik7XG5cbiAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIsIFwieWVzLWJ0blwiKTtcbiAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJ5ZXNcIjtcbiAgYnRuc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuXG4gIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbm9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIiwgXCJuby1idG5cIik7XG4gIG5vQnRuLnRleHRDb250ZW50ID0gXCJub1wiO1xuICBidG5zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICBjb25zdCBwcm9qZWN0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIpKTtcblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGFycmF5LCBlbGVtZW50VG9SZW1vdmUpIHtcbiAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZGVsZXRlSWNvbi5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1jb250YWluZXJcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYGNvbnRlbnQtJHtwcm9qZWN0TmFtZX1gKSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbkl0ZW1zID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi50YXNrLWl0ZW1zLWNvbnRhaW5lclwiXG4gICAgICAgICkuY2hpbGRyZW47XG5cbiAgICAgICAgQXJyYXkuZnJvbShjaGlsZHJlbkl0ZW1zKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtXCIpLmZvckVhY2goKGVsMikgPT4ge1xuICAgICAgICAgICAgaWYgKGVsMi5jbGFzc0xpc3QuY29udGFpbnMoZWwuY2xhc3NMaXN0WzFdKSkge1xuICAgICAgICAgICAgICB1cGRhdGVUYXNrUXR5KGVsMi5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1pY29uXCIpKTtcbiAgICAgICAgICAgICAgZWwyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgICBkZWxldGVJY29uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgZGVsZXRlUHJvamVjdC5yZW1vdmUoKTtcbiAgICBjcmVhdGVDb250ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW0taW5ib3hcIikpO1xuICAgIGRlbGV0ZUNvbnRlbnQoZGVsZXRlSWNvbi5wYXJlbnRFbGVtZW50KTtcblxuICAgIGlmIChwcm9qZWN0SXRlbXMuaW5jbHVkZXMocHJvamVjdE5hbWUpKSB7XG4gICAgICByZW1vdmVFbGVtZW50KHByb2plY3RJdGVtcywgcHJvamVjdE5hbWUpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1wcm9qZWN0LWl0ZW1cIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYHByb2plY3QtaXRlbS0ke3Byb2plY3ROYW1lfWApKSBlbC5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LSR7cHJvamVjdE5hbWV9YCkucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdEl0ZW1zID0gSlNPTi5wYXJzZShcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEl0ZW1zXCIpXG4gICAgKTtcblxuICAgIGNvbnN0IGluZGV4VG9SZW1vdmUgPSBzdG9yYWdlUHJvamVjdEl0ZW1zLmluZGV4T2YocHJvamVjdE5hbWUpO1xuXG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPiAtMSkge1xuICAgICAgc3RvcmFnZVByb2plY3RJdGVtcy5zcGxpY2UoaW5kZXhUb1JlbW92ZSwgMSk7XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVByb2plY3RJdGVtcykpO1xuXG4gICAgY29uc3QgY3VycmVudFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICBjb25zdCB0YXNrTnVtYmVycyA9IG5ldyBTZXQoW10pO1xuXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0VGFza3MgPSBjdXJyZW50VGFza3MuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLnByb2plY3QgPT09IHByb2plY3ROYW1lKSB0YXNrTnVtYmVycy5hZGQoZWwuY291bnRlcik7XG4gICAgICByZXR1cm4gZWwucHJvamVjdCAhPT0gcHJvamVjdE5hbWU7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRvZGF5VGFza3MgPSBmaWx0ZXJlZFByb2plY3RUYXNrcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICghdGFza051bWJlcnMuaGFzKGVsZW1lbnQuY291bnRlcikpIHJldHVybiBlbGVtZW50O1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShmaWx0ZXJlZFRvZGF5VGFza3MpKTtcbiAgfSk7XG5cbiAgbm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbiAgfSk7XG5cbiAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoXCIuZGVsZXRlLXByb2plY3QtY29udGFpbmVyXCIpKSBkZWxldGVQcm9qZWN0LnJlbW92ZSgpO1xuICB9KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZWxldGVQcm9qZWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVsZXRlUHJvamVjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9mb250cy9mb250c3ByaW5nL0ZvbnRzcHJpbmctREVNTy1va3RhaF9yZWd1bGFyX2l0YWxpYy1CRjY1MTEwNWY4M2IzODIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udHNwcmluZ1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDE4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA0JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRzcHJpbmdcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuYnRucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI2RlbGV0ZS1wcm9qZWN0IC5kZWxldGUtYnRuIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLWJ0bjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLnllcy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhMzBkO1xufVxuXG4jZGVsZXRlLXByb2plY3QgLm5vLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyL2RlbGV0ZXByb2plY3QvZGVsZXRlUHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsNENBQXdGO0FBQzFGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRzcHJpbmdcXFwiO1xcbiAgc3JjOiB1cmwoL3NyYy9mb250cy9mb250c3ByaW5nL0ZvbnRzcHJpbmctREVNTy1va3RhaF9yZWd1bGFyX2l0YWxpYy1CRjY1MTEwNWY4M2IzODIub3RmKTtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICB3aWR0aDogMTglO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLXByb2plY3QtaGVhZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRm9udHNwcmluZ1xcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICM0NzU1Njk7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2RlbGV0ZS1wcm9qZWN0IC5idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLWJ0biB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAuZGVsZXRlLWJ0bjpob3ZlciB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNkZWxldGUtcHJvamVjdCAueWVzLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjVhMzBkO1xcbn1cXG5cXG4jZGVsZXRlLXByb2plY3QgLm5vLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgY29udGVudHMgfSBmcm9tIFwiLi9jb250ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUNvbnRlbnQoaXRlbSkge1xuICBjb250ZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoYGNvbnRlbnQtJHtpdGVtLnRleHRDb250ZW50fWApKSBlbC5yZW1vdmUoKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9