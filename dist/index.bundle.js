/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Roboto&family=Roboto+Slab&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--cancel-red);\n}\n\n.cancel:hover {\n    color: var(--cancel-red-hover);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 160px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Roboto&family=Roboto+Slab&display=swap');\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--cancel-red);\n}\n\n.cancel:hover {\n    color: var(--cancel-red-hover);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 160px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



class Controller {
  constructor() {
    this.taskList = [];
  }

  addTask(title, dueDate, priority) {
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      title,
      dueDate,
      priority,
      false
    );
    this.taskList.push(task);
    this.updateStorage();
  }

  deleteTask(itemIndex) {
    this.taskList.splice(itemIndex, 1);
    this.updateStorage();
  }

  updateStorage() {
    const taskJSON = JSON.stringify(this.taskList);
    localStorage.setItem('taskList', taskJSON);
  }

  populateTaskList() {
    if (localStorage.length > 0) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
    }
  }
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
//MODEL LAYER
class Task {
  constructor(title, dueDate, priority, isDone) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }
}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _images_trash_small_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/trash-small.png */ "./src/images/trash-small.png");


class View {
  constructor(controller, containerElement) {
    this.controller = controller;
    this.containerElement = containerElement;
  }

  buildPage() {
    this.controller.populateTaskList();
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.appendChild(this.buildHeader());
    content.appendChild(this.buildProjectContainer());
    content.appendChild(this.buildTaskContainer());
    content.appendChild(this.buildFooter());
    const modal = this.buildModal();
    const modalContent = this.buildModalContent();
    modalContent.appendChild(this.buildTaskForm());
    modal.appendChild(modalContent);
    content.appendChild(modal);
    content.appendChild(this.buildModalOverlay());
    this.containerElement.appendChild(content);
  }

  buildHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    const a = document.createElement("a");
    const h1 = document.createElement("h1");
    h1.innerText = "Timely";
    a.setAttribute("href", "");
    a.appendChild(h1);
    header.appendChild(a);
    return header;
  }

  buildProjectContainer() {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.append(this.buildProjectItem("Inbox"));
    projectContainer.append(this.buildProjectItem("Today"));
    projectContainer.append(this.buildProjectItem("Tomorrow"));
    return projectContainer;
  }

  buildProjectItem(name) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${name}`;
    projectItem.append(projectTitle);
    return projectItem;
  }

  buildTaskContainer() {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.appendChild(this.buildTaskContainerHeader("Inbox"));
    if (this.controller.taskList.length > 0){
      this.displayTasksFromStorage(taskContainer);
    };
    return taskContainer;
  }

  displayTasksFromStorage(taskContainer) {
    const taskList = this.controller.taskList;
    taskList.forEach((task) => {
      taskContainer.append(this.buildTaskItem(task.title, task.dueDate, task.priority));
    })
  }

  buildTaskContainerHeader(name) {
    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("tasks-header");
    const taskContainerHeaderText = document.createElement("h3");
    taskContainerHeaderText.innerText = `${name}`;
    taskContainerHeader.appendChild(taskContainerHeaderText);
    const plusSign = document.createElement("h1");
    plusSign.classList.add("add", "tooltip");
    plusSign.innerText = "+";
    const toolTipText = document.createElement("span");
    toolTipText.classList.add("tooltiptext");
    toolTipText.innerText = "Add a new task";
    plusSign.appendChild(toolTipText);
    plusSign.addEventListener("click", () => {
      this.displayTaskForm();
    });
    taskContainerHeader.appendChild(plusSign);
    return taskContainerHeader;
  }

  displayTaskForm() {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  }

  hideTaskForm() {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  }

  buildTaskItem(title, date, priority) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-container");
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "task-item");
    const taskItemTitleDiv = document.createElement("div");
    taskItemTitleDiv.classList.add("title-container");
    const taskItemTitle = document.createElement("label");
    taskItemTitle.setAttribute("for", "task-item");
    taskItemTitle.innerText = title;
    const taskDateDiv = document.createElement("div");
    taskDateDiv.classList.add("date-container");
    const taskDate = document.createElement("p");
    taskDate.innerText = date;
    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.classList.add("priority")
    const taskPriority = document.createElement("p");
    taskPriority.classList.add(priority, "priority");
    taskPriority.innerText = priority;
    const deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.classList.add("delete-container");
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete", "tooltip-delete");
    const deleteButtonImage = new Image();
    deleteButtonImage.src = _images_trash_small_png__WEBPACK_IMPORTED_MODULE_0__;
    const toolTipText = document.createElement("span");
    toolTipText.classList.add("tooltiptext-delete");
    toolTipText.innerText = "Delete this task";
    deleteButton.appendChild(deleteButtonImage);
    deleteButton.appendChild(toolTipText);
    deleteButton.addEventListener("click", () => {
      this.deleteTask(taskItem);
    });
    checkboxDiv.appendChild(checkbox);
    taskItemTitleDiv.appendChild(taskItemTitle);
    taskDateDiv.appendChild(taskDate);
    taskPriorityDiv.appendChild(taskPriority);
    deleteButtonDiv.appendChild(deleteButton);
    taskItem.appendChild(checkboxDiv);
    taskItem.appendChild(taskItemTitleDiv);
    taskItem.appendChild(taskDateDiv);
    taskItem.appendChild(taskPriorityDiv);
    taskItem.appendChild(deleteButtonDiv);
    taskItem.setAttribute("data", this.controller.taskList.length - 1);
    return taskItem;
  }

  displayNewTask() {
    const taskContainer = document.querySelector(".task-container");
    const taskList = this.controller.taskList;
    const lastTaskItem = taskList[taskList.length - 1];
    taskContainer.appendChild(
      this.buildTaskItem(
        lastTaskItem.title,
        lastTaskItem.dueDate,
        lastTaskItem.priority
      )
    );
  }

  taskViews = [];

  saveTask(title, date, priority) {
    this.controller.addTask(title, date, priority);
  }

  deleteTask(item) {
    if (confirm("Are you sure you want to delete this item?") === true) {
      this.controller.deleteTask(item.getAttribute("data"));
      const taskContainer = document.querySelector(".task-container");
      taskContainer.removeChild(item);
    }
  }

  buildModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal", "hidden");
    modal.setAttribute("id", "modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    return modal;
  }

  buildModalContent() {
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    return modalContent;
  }

  buildModalOverlay() {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay", "hidden");
    modalOverlay.addEventListener("click", () => {
      this.hideTaskForm();
    });
    return modalOverlay;
  }

  buildTaskForm() {
    const form = document.createElement("div");
    form.classList.add("form");
    //title input
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("for", "title");
    titleInput.setAttribute("placeholder", "New task");
    titleInput.setAttribute("maxlength", "15");
    titleInput.required = true;
    //new row
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    //date input
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "due-date");
    dateInput.setAttribute("name", "due-date");
    //priority dropdown
    const priorityDropdown = document.createElement("select");
    priorityDropdown.setAttribute("id", "priority");
    priorityDropdown.setAttribute("name", "priority");
    const normalPriorityOption = document.createElement("option");
    normalPriorityOption.setAttribute("value", "normal");
    normalPriorityOption.innerText = "normal";
    const highPriorityOption = document.createElement("option");
    highPriorityOption.setAttribute("value", "high");
    highPriorityOption.innerText = "high";
    priorityDropdown.appendChild(normalPriorityOption);
    priorityDropdown.appendChild(highPriorityOption);
    //save row
    const saveRow = document.createElement("div");
    saveRow.classList.add("save-row");
    //cancel button
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
      this.hideTaskForm();
    });
    //save button
    const saveButton = document.createElement("button");
    saveButton.classList.add("save");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", () => {
      if (!dateInput.value) {
        alert('Please choose a date');
      }
      else {
        this.saveTask(titleInput.value, dateInput.value, priorityDropdown.value);
        this.hideTaskForm();
        this.displayNewTask();
      }
      
    });
    form.appendChild(titleInput);
    form.appendChild(formRow);
    formRow.appendChild(dateInput);
    formRow.appendChild(priorityDropdown);
    form.appendChild(saveRow);
    saveRow.appendChild(cancelButton);
    saveRow.appendChild(saveButton);
    return form;
  }

  buildFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const a = document.createElement("a");
    a.innerText = "jppastorek.com";
    a.setAttribute("href", "");
    footer.appendChild(a);
    return footer;
  }
}


/***/ }),

/***/ "./src/images/trash-small.png":
/*!************************************!*\
  !*** ./src/images/trash-small.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c8c8f095b72b14f11eb.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ "./src/controller.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




const controller = new _controller_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
const view = new _view_js__WEBPACK_IMPORTED_MODULE_1__["default"](controller, document.body);
view.buildPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNaO0FBQ1A7O0FBRXRCLHVCQUF1QixzREFBVTtBQUNqQyxpQkFBaUIsZ0RBQUk7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Sb2JvdG8mZmFtaWx5PVJvYm90bytTbGFiJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmtlci1ncmV5OiAjMWIxYjFiO1xcbiAgICAtLWRhcmstZ3JleTogIzM0MzQzNDtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodGVyLWdyZXk6ICNiZGJkYmQ7XFxuICAgIC0tbGlnaHQtZ3JleTogIzliOTk5OTtcXG4gICAgLS1tZWRpdW0tZ3JleTogIzU3NTc1NztcXG4gICAgLS10aW1lbHktYmx1ZTogIzAwOWVmZjtcXG4gICAgLS1saWdodGVyLXRpbWVseS1ibHVlOiAjNDFiNGZjO1xcbiAgICAtLW92ZXJsYXktZ3JleTogcmdiYSgwLCAwLCAwLCAwLjg0Mik7XFxuICAgIC0tY2FuY2VsLXJlZDogcmdiKDEyNiwgODMsIDgzKTtcXG4gICAgLS1jYW5jZWwtcmVkLWhvdmVyOiByZ2IoMTQxLCA3NSwgNzUpO1xcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG8gMjVweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4vKlBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDlweDtcXG59XFxuXFxuLypUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKi0tLS0tVEFTS1MgSEVBREVSLS0tLS0tLS0qL1xcblxcbi50YXNrcy1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvb2x0aXAtZGVsZXRlIC50b29sdGlwdGV4dC1kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGU6aG92ZXIgLnRvb2x0aXB0ZXh0LWRlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qLS0tLS0tLVRBU0sgSVRFTVMgLS0tLS0tLS0tLSovXFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG4uY2hlY2tib3g6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5sYWJlbDo6YmVmb3JlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm9ybWFsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuXFxuLypGT1JNIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNhdmUsIC5jYW5jZWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2F2ZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLXJlZCk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLXJlZC1ob3Zlcik7XFxufVxcblxcbi5zYXZlLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMXB4O1xcbn1cXG5cXG4uYmx1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxufVxcblxcbi8qTU9EQUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ncmV5KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qRk9PVEVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHFEQUFxRDs7QUFFckQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQSxxREFBcUQ7O0FBRXJEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtD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Yix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVJvYm90byZmYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwJyk7XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZGFya2VyLWdyZXk6ICMxYjFiMWI7XFxuICAgIC0tZGFyay1ncmV5OiAjMzQzNDM0O1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWxpZ2h0ZXItZ3JleTogI2JkYmRiZDtcXG4gICAgLS1saWdodC1ncmV5OiAjOWI5OTk5O1xcbiAgICAtLW1lZGl1bS1ncmV5OiAjNTc1NzU3O1xcbiAgICAtLXRpbWVseS1ibHVlOiAjMDA5ZWZmO1xcbiAgICAtLWxpZ2h0ZXItdGltZWx5LWJsdWU6ICM0MWI0ZmM7XFxuICAgIC0tb3ZlcmxheS1ncmV5OiByZ2JhKDAsIDAsIDAsIDAuODQyKTtcXG4gICAgLS1jYW5jZWwtcmVkOiByZ2IoMTI2LCA4MywgODMpO1xcbiAgICAtLWNhbmNlbC1yZWQtaG92ZXI6IHJnYigxNDEsIDc1LCA3NSk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0byAyNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxufVxcblxcbi8qUFJPSkVDVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOXB4O1xcbn1cXG5cXG4vKlRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi8qLS0tLS1UQVNLUyBIRUFERVItLS0tLS0tLSovXFxuXFxuLnRhc2tzLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5hZGQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4uYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci10aW1lbHktYmx1ZSk7XFxufVxcblxcbi50b29sdGlwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcmlnaHQ6IDEzNSU7XFxuICAgIHRvcDogMTRweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b29sdGlwLWRlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGUgLnRvb2x0aXB0ZXh0LWRlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcmlnaHQ6IDEzNSU7XFxuICAgIHRvcDogLTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b29sdGlwLWRlbGV0ZTpob3ZlciAudG9vbHRpcHRleHQtZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyotLS0tLS0tVEFTSyBJVEVNUyAtLS0tLS0tLS0tKi9cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2staXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbi5jaGVja2JveDo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkOmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmxhYmVsOjpiZWZvcmUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ub3JtYWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5cXG4vKkZPUk0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2F2ZSwgLmNhbmNlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zYXZlIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtcmVkKTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtcmVkLWhvdmVyKTtcXG59XFxuXFxuLnNhdmUtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5ibHVlIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLypNT0RBTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDEwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWdyZXkpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypGT09URVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza0xpc3QgPSBbXTtcbiAgfVxuXG4gIGFkZFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgdGl0bGUsXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpdGVtSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgdXBkYXRlU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0YXNrSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIHRhc2tKU09OKTtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0xpc3QoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG4gICAgfVxuICB9XG59XG4iLCIvL01PREVMIExBWUVSXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gIH1cbn1cblxuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLXNtYWxsLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IHtcbiAgY29uc3RydWN0b3IoY29udHJvbGxlciwgY29udGFpbmVyRWxlbWVudCkge1xuICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyRWxlbWVudDtcbiAgfVxuXG4gIGJ1aWxkUGFnZSgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIucG9wdWxhdGVUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRQcm9qZWN0Q29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRhc2tDb250YWluZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkRm9vdGVyKCkpO1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5idWlsZE1vZGFsKCk7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gdGhpcy5idWlsZE1vZGFsQ29udGVudCgpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0Zvcm0oKSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRNb2RhbE92ZXJsYXkoKSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJUaW1lbHlcIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgYS5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5idWlsZFByb2plY3RJdGVtKFwiSW5ib3hcIikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRQcm9qZWN0SXRlbShcIlRvZGF5XCIpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1aWxkUHJvamVjdEl0ZW0oXCJUb21vcnJvd1wiKSk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XG4gIH1cblxuICBidWlsZFRhc2tDb250YWluZXIoKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0NvbnRhaW5lckhlYWRlcihcIkluYm94XCIpKTtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnRhc2tMaXN0Lmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyKTtcbiAgICB9O1xuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xuICB9XG5cbiAgZGlzcGxheVRhc2tzRnJvbVN0b3JhZ2UodGFza0NvbnRhaW5lcikge1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGhpcy5jb250cm9sbGVyLnRhc2tMaXN0O1xuICAgIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRUYXNrSXRlbSh0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICB9KVxuICB9XG5cbiAgYnVpbGRUYXNrQ29udGFpbmVySGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1oZWFkZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlclRleHQuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckhlYWRlclRleHQpO1xuICAgIGNvbnN0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHBsdXNTaWduLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJ0b29sdGlwXCIpO1xuICAgIHBsdXNTaWduLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0XCIpO1xuICAgIHRvb2xUaXBUZXh0LmlubmVyVGV4dCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcbiAgICBwbHVzU2lnbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgcGx1c1NpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJIZWFkZXI7XG4gIH1cblxuICBkaXNwbGF5VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtb3ZlcmxheVwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgaGlkZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW92ZXJsYXlcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGJ1aWxkVGFza0l0ZW0odGl0bGUsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgY29uc3QgdGFza0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0l0ZW1UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgdGFza0l0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBjb25zdCB0YXNrRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gZGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIilcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChwcmlvcml0eSwgXCJwcmlvcml0eVwiKTtcbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJUZXh0ID0gcHJpb3JpdHk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVCdXR0b25EaXYuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIiwgXCJ0b29sdGlwLWRlbGV0ZVwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZUJ1dHRvbkltYWdlLnNyYyA9IEljb247XG4gICAgY29uc3QgdG9vbFRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sVGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHQtZGVsZXRlXCIpO1xuICAgIHRvb2xUaXBUZXh0LmlubmVyVGV4dCA9IFwiRGVsZXRlIHRoaXMgdGFza1wiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25JbWFnZSk7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKHRvb2xUaXBUZXh0KTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGVsZXRlVGFzayh0YXNrSXRlbSk7XG4gICAgfSk7XG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tJdGVtVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza0l0ZW1UaXRsZSk7XG4gICAgdGFza0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbVRpdGxlRGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGF0ZURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25EaXYpO1xuICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgdGhpcy5jb250cm9sbGVyLnRhc2tMaXN0Lmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0YXNrSXRlbTtcbiAgfVxuXG4gIGRpc3BsYXlOZXdUYXNrKCkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGhpcy5jb250cm9sbGVyLnRhc2tMaXN0O1xuICAgIGNvbnN0IGxhc3RUYXNrSXRlbSA9IHRhc2tMaXN0W3Rhc2tMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICB0aGlzLmJ1aWxkVGFza0l0ZW0oXG4gICAgICAgIGxhc3RUYXNrSXRlbS50aXRsZSxcbiAgICAgICAgbGFzdFRhc2tJdGVtLmR1ZURhdGUsXG4gICAgICAgIGxhc3RUYXNrSXRlbS5wcmlvcml0eVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0YXNrVmlld3MgPSBbXTtcblxuICBzYXZlVGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkVGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpdGVtKSB7XG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIikgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci5kZWxldGVUYXNrKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YVwiKSk7XG4gICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIsIFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWxcIik7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG4gICAgcmV0dXJuIG1vZGFsO1xuICB9XG5cbiAgYnVpbGRNb2RhbENvbnRlbnQoKSB7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRlbnRcIik7XG4gICAgcmV0dXJuIG1vZGFsQ29udGVudDtcbiAgfVxuXG4gIGJ1aWxkTW9kYWxPdmVybGF5KCkge1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1vdmVybGF5XCIsIFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kYWxPdmVybGF5O1xuICB9XG5cbiAgYnVpbGRUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuICAgIC8vdGl0bGUgaW5wdXRcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyB0YXNrXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTVcIik7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgLy9uZXcgcm93XG4gICAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKFwiZm9ybS1yb3dcIik7XG4gICAgLy9kYXRlIGlucHV0XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIC8vcHJpb3JpdHkgZHJvcGRvd25cbiAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgY29uc3Qgbm9ybWFsUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5vcm1hbFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9ybWFsXCIpO1xuICAgIG5vcm1hbFByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwibm9ybWFsXCI7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcImhpZ2hcIjtcbiAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKG5vcm1hbFByaW9yaXR5T3B0aW9uKTtcbiAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eU9wdGlvbik7XG4gICAgLy9zYXZlIHJvd1xuICAgIGNvbnN0IHNhdmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZChcInNhdmUtcm93XCIpO1xuICAgIC8vY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpO1xuICAgIH0pO1xuICAgIC8vc2F2ZSBidXR0b25cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzYXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYXZlXCIpO1xuICAgIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCFkYXRlSW5wdXQudmFsdWUpIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBjaG9vc2UgYSBkYXRlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5RHJvcGRvd24udmFsdWUpO1xuICAgICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOZXdUYXNrKCk7XG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG4gICAgZm9ybVJvdy5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJqcHBhc3RvcmVrLmNvbVwiO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhjb250cm9sbGVyLCBkb2N1bWVudC5ib2R5KTtcbnZpZXcuYnVpbGRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=