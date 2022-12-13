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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header, .project-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--cancel-red);\n}\n\n.cancel:hover {\n    color: var(--cancel-red-hover);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 160px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Roboto&family=Roboto+Slab&display=swap');\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header, .project-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--cancel-red);\n}\n\n.cancel:hover {\n    color: var(--cancel-red-hover);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 160px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}"],"sourceRoot":""}]);
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

  addTask(project, title, dueDate, priority) {
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      project,
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
  constructor(project, title, dueDate, priority, isDone) {
    this.project = project;
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
    this.currentProject = "Inbox";
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
    projectContainer.appendChild(this.buildProjectContainerHeader());
    projectContainer.append(this.buildProjectItem("Inbox"));
    projectContainer.append(this.buildProjectItem("Today"));
    projectContainer.append(this.buildProjectItem("Tomorrow"));
    return projectContainer;
  }

  buildProjectContainerHeader() {
    const projectContainerHeader = document.createElement("div");
    projectContainerHeader.classList.add("project-header");
    const projectContainerHeaderText = document.createElement("h3");
    projectContainerHeaderText.classList.add("project-header-text");
    projectContainerHeaderText.innerText = "Projects";
    projectContainerHeader.appendChild(projectContainerHeaderText);
    const plusSign = document.createElement("h1");
    plusSign.classList.add("add", "tooltip");
    plusSign.innerText = "+";
    const toolTipText = document.createElement("span");
    toolTipText.classList.add("tooltiptext");
    toolTipText.innerText = "Add a new project";
    plusSign.appendChild(toolTipText);
    plusSign.addEventListener("click", () => {
      this.displayTaskForm();
    });
    projectContainerHeader.appendChild(plusSign);
    return projectContainerHeader;
  }

  buildProjectItem(name) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${name}`;
    projectItem.append(projectTitle);
    projectItem.addEventListener("click", () => {
      this.currentProject = name;
      const tasksHeader = document.querySelector(".project-title");
      const taskContainer = document.querySelector(".task-container");
      tasksHeader.innerText = `${name}`;
      this.displayTasksFromStorage(taskContainer, name);
    });
    return projectItem;
  }

  buildTaskContainer() {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.appendChild(this.buildTaskContainerHeader("Inbox"));
    if (this.controller.taskList.length > 0) {
      this.displayTasksFromStorage(taskContainer, "Inbox");
    }
    return taskContainer;
  }

  displayTasksFromStorage(taskContainer, project) {
    const taskItems = document.getElementsByClassName("task-item");
    const numberOfItems = taskItems.length;
    if (numberOfItems > 0) {
      for (let i=0; i<numberOfItems; i++) {
        taskItems[0].remove();
      }

    }
    const taskList = this.controller.taskList;
    taskList.forEach((task) => {
      if (task.project == project) {
        taskContainer.append(
          this.buildTaskItem(project, task.title, task.dueDate, task.priority, taskList.indexOf(task))
        );
      }
    });
  }

  buildTaskContainerHeader(name) {
    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("tasks-header");
    const taskContainerHeaderText = document.createElement("h3");
    taskContainerHeaderText.classList.add("project-title");
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

  buildTaskItem(project, title, date, priority, index) {
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
    taskPriorityDiv.classList.add("priority");
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
      this.currentProject = project;
      this.deleteTask(taskItem, this.currentProject);
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
    taskItem.setAttribute("data", index);
    return taskItem;
  }

  saveTask(project, title, date, priority) {
    this.controller.addTask(project, title, date, priority);
    console.log(this.controller.taskList);
  }

  deleteTask(item, project) {
    if (confirm("Are you sure you want to delete this item?") === true) {
      this.controller.deleteTask(item.getAttribute("data"));
      const taskContainer = document.querySelector(".task-container");
      this.displayTasksFromStorage(taskContainer, project);
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
      const projectTitle = document.querySelector(".project-title");
      if (!dateInput.value) {
        alert("Please choose a date");
      } else {
        this.saveTask(
          projectTitle.innerText,
          titleInput.value,
          dateInput.value,
          priorityDropdown.value
        );
        this.hideTaskForm();
        const taskContainer = document.querySelector(".task-container");
        this.displayTasksFromStorage(taskContainer, this.currentProject);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUss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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOVRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNaO0FBQ1A7O0FBRXRCLHVCQUF1QixzREFBVTtBQUNqQyxpQkFBaUIsZ0RBQUk7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Sb2JvdG8mZmFtaWx5PVJvYm90bytTbGFiJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmtlci1ncmV5OiAjMWIxYjFiO1xcbiAgICAtLWRhcmstZ3JleTogIzM0MzQzNDtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodGVyLWdyZXk6ICNiZGJkYmQ7XFxuICAgIC0tbGlnaHQtZ3JleTogIzliOTk5OTtcXG4gICAgLS1tZWRpdW0tZ3JleTogIzU3NTc1NztcXG4gICAgLS10aW1lbHktYmx1ZTogIzAwOWVmZjtcXG4gICAgLS1saWdodGVyLXRpbWVseS1ibHVlOiAjNDFiNGZjO1xcbiAgICAtLW92ZXJsYXktZ3JleTogcmdiYSgwLCAwLCAwLCAwLjg0Mik7XFxuICAgIC0tY2FuY2VsLXJlZDogcmdiKDEyNiwgODMsIDgzKTtcXG4gICAgLS1jYW5jZWwtcmVkLWhvdmVyOiByZ2IoMTQxLCA3NSwgNzUpO1xcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG8gMjVweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4vKlBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDlweDtcXG59XFxuXFxuLypUQVNLUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKi0tLS0tVEFTS1MgSEVBREVSLS0tLS0tLS0qL1xcblxcbi50YXNrcy1oZWFkZXIsIC5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5hZGQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4uYWRkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci10aW1lbHktYmx1ZSk7XFxufVxcblxcbi50b29sdGlwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcmlnaHQ6IDEzNSU7XFxuICAgIHRvcDogMTRweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi50b29sdGlwLWRlbGV0ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGUgLnRvb2x0aXB0ZXh0LWRlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcmlnaHQ6IDEzNSU7XFxuICAgIHRvcDogLTVweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b29sdGlwLWRlbGV0ZTpob3ZlciAudG9vbHRpcHRleHQtZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLyotLS0tLS0tVEFTSyBJVEVNUyAtLS0tLS0tLS0tKi9cXG5cXG4udGFzay1pdGVtIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2staXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBjb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxufVxcblxcbi5jaGVja2JveDo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIHdpZHRoOiA2cHg7XFxuICAgIGhlaWdodDogMTJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkOmJlZm9yZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmxhYmVsOjpiZWZvcmUge1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWdoIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ub3JtYWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmNoZWNrYm94LWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5cXG4vKkZPUk0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJde1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmZvcm0tcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2F2ZSwgLmNhbmNlbCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zYXZlIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtcmVkKTtcXG59XFxuXFxuLmNhbmNlbDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jYW5jZWwtcmVkLWhvdmVyKTtcXG59XFxuXFxuLnNhdmUtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5ibHVlIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLypNT0RBTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDEwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWdyZXkpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypGT09URVIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztJQUdJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEscURBQXFEOztBQUVyRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMs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QTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLHFEQUFxRDs7QUFFckQ7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmZhbWlseT1QYWNpZmljbyZmYW1pbHk9Um9ib3RvJmZhbWlseT1Sb2JvdG8rU2xhYiZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1kYXJrZXItZ3JleTogIzFiMWIxYjtcXG4gICAgLS1kYXJrLWdyZXk6ICMzNDM0MzQ7XFxuICAgIC0td2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tbGlnaHRlci1ncmV5OiAjYmRiZGJkO1xcbiAgICAtLWxpZ2h0LWdyZXk6ICM5Yjk5OTk7XFxuICAgIC0tbWVkaXVtLWdyZXk6ICM1NzU3NTc7XFxuICAgIC0tdGltZWx5LWJsdWU6ICMwMDllZmY7XFxuICAgIC0tbGlnaHRlci10aW1lbHktYmx1ZTogIzQxYjRmYztcXG4gICAgLS1vdmVybGF5LWdyZXk6IHJnYmEoMCwgMCwgMCwgMC44NDIpO1xcbiAgICAtLWNhbmNlbC1yZWQ6IHJnYigxMjYsIDgzLCA4Myk7XFxuICAgIC0tY2FuY2VsLXJlZC1ob3ZlcjogcmdiKDE0MSwgNzUsIDc1KTtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCBhdXRvIDI1cHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBjdXJzaXZlO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmhlYWRlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLypQUk9KRUNUUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgICByZXNpemU6IGhvcml6b250YWw7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiA5cHg7XFxufVxcblxcbi8qVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyotLS0tLVRBU0tTIEhFQURFUi0tLS0tLS0tKi9cXG5cXG4udGFza3MtaGVhZGVyLCAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvb2x0aXAtZGVsZXRlIC50b29sdGlwdGV4dC1kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGU6aG92ZXIgLnRvb2x0aXB0ZXh0LWRlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qLS0tLS0tLVRBU0sgSVRFTVMgLS0tLS0tLS0tLSovXFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG4uY2hlY2tib3g6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5sYWJlbDo6YmVmb3JlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm9ybWFsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuXFxuLypGT1JNIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNhdmUsIC5jYW5jZWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2F2ZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLXJlZCk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLXJlZC1ob3Zlcik7XFxufVxcblxcbi5zYXZlLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMXB4O1xcbn1cXG5cXG4uYmx1ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxufVxcblxcbi8qTU9EQUwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTAxMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG59XFxuXFxuLm1vZGFsLW92ZXJsYXkge1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3ZlcmxheS1ncmV5KTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qRk9PVEVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tMaXN0ID0gW107XG4gIH1cblxuICBhZGRUYXNrKHByb2plY3QsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhcbiAgICAgIHByb2plY3QsXG4gICAgICB0aXRsZSxcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGl0ZW1JbmRleCkge1xuICAgIHRoaXMudGFza0xpc3Quc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVTdG9yYWdlKCk7XG4gIH1cblxuICB1cGRhdGVTdG9yYWdlKCkge1xuICAgIGNvbnN0IHRhc2tKU09OID0gSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tMaXN0JywgdGFza0pTT04pO1xuICB9XG5cbiAgcG9wdWxhdGVUYXNrTGlzdCgpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vTU9ERUwgTEFZRVJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICB9XG59XG5cbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltYWdlcy90cmFzaC1zbWFsbC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIsIGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IFwiSW5ib3hcIjtcbiAgfVxuXG4gIGJ1aWxkUGFnZSgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIucG9wdWxhdGVUYXNrTGlzdCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRQcm9qZWN0Q29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRhc2tDb250YWluZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkRm9vdGVyKCkpO1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5idWlsZE1vZGFsKCk7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gdGhpcy5idWlsZE1vZGFsQ29udGVudCgpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0Zvcm0oKSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRNb2RhbE92ZXJsYXkoKSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJUaW1lbHlcIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgYS5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUHJvamVjdENvbnRhaW5lckhlYWRlcigpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1aWxkUHJvamVjdEl0ZW0oXCJJbmJveFwiKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5idWlsZFByb2plY3RJdGVtKFwiVG9kYXlcIikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRQcm9qZWN0SXRlbShcIlRvbW9ycm93XCIpKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfVxuXG4gIGJ1aWxkUHJvamVjdENvbnRhaW5lckhlYWRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItdGV4dFwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dCk7XG4gICAgY29uc3QgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcGx1c1NpZ24uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcInRvb2x0aXBcIik7XG4gICAgcGx1c1NpZ24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgY29uc3QgdG9vbFRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sVGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbFRpcFRleHQuaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xuICAgIHBsdXNTaWduLmFwcGVuZENoaWxkKHRvb2xUaXBUZXh0KTtcbiAgICBwbHVzU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5VGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lckhlYWRlcjtcbiAgfVxuXG4gIGJ1aWxkUHJvamVjdEl0ZW0obmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbmFtZTtcbiAgICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICB0YXNrc0hlYWRlci5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrc0Zyb21TdG9yYWdlKHRhc2tDb250YWluZXIsIG5hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcbiAgfVxuXG4gIGJ1aWxkVGFza0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYnVpbGRUYXNrQ29udGFpbmVySGVhZGVyKFwiSW5ib3hcIikpO1xuICAgIGlmICh0aGlzLmNvbnRyb2xsZXIudGFza0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBcIkluYm94XCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgfVxuXG4gIGRpc3BsYXlUYXNrc0Zyb21TdG9yYWdlKHRhc2tDb250YWluZXIsIHByb2plY3QpIHtcbiAgICBjb25zdCB0YXNrSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1pdGVtXCIpO1xuICAgIGNvbnN0IG51bWJlck9mSXRlbXMgPSB0YXNrSXRlbXMubGVuZ3RoO1xuICAgIGlmIChudW1iZXJPZkl0ZW1zID4gMCkge1xuICAgICAgZm9yIChsZXQgaT0wOyBpPG51bWJlck9mSXRlbXM7IGkrKykge1xuICAgICAgICB0YXNrSXRlbXNbMF0ucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICB9XG4gICAgY29uc3QgdGFza0xpc3QgPSB0aGlzLmNvbnRyb2xsZXIudGFza0xpc3Q7XG4gICAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIHRoaXMuYnVpbGRUYXNrSXRlbShwcm9qZWN0LCB0YXNrLnRpdGxlLCB0YXNrLmR1ZURhdGUsIHRhc2sucHJpb3JpdHksIHRhc2tMaXN0LmluZGV4T2YodGFzaykpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFRhc2tDb250YWluZXJIZWFkZXIobmFtZSkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWhlYWRlclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyVGV4dC5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVySGVhZGVyVGV4dCk7XG4gICAgY29uc3QgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcGx1c1NpZ24uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcInRvb2x0aXBcIik7XG4gICAgcGx1c1NpZ24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgY29uc3QgdG9vbFRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sVGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbFRpcFRleHQuaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgdGFza1wiO1xuICAgIHBsdXNTaWduLmFwcGVuZENoaWxkKHRvb2xUaXBUZXh0KTtcbiAgICBwbHVzU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5VGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmFwcGVuZENoaWxkKHBsdXNTaWduKTtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lckhlYWRlcjtcbiAgfVxuXG4gIGRpc3BsYXlUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1vdmVybGF5XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBoaWRlVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtb3ZlcmxheVwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgYnVpbGRUYXNrSXRlbShwcm9qZWN0LCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGluZGV4KSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgY29uc3QgdGFza0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0l0ZW1UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgdGFza0l0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBjb25zdCB0YXNrRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gZGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQocHJpb3JpdHksIFwicHJpb3JpdHlcIik7XG4gICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHByaW9yaXR5O1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIsIFwidG9vbHRpcC1kZWxldGVcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b25JbWFnZS5zcmMgPSBJY29uO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0LWRlbGV0ZVwiKTtcbiAgICB0b29sVGlwVGV4dC5pbm5lclRleHQgPSBcIkRlbGV0ZSB0aGlzIHRhc2tcIjtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uSW1hZ2UpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMuZGVsZXRlVGFzayh0YXNrSXRlbSwgdGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tJdGVtVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza0l0ZW1UaXRsZSk7XG4gICAgdGFza0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbVRpdGxlRGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGF0ZURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25EaXYpO1xuICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgaW5kZXgpO1xuICAgIHJldHVybiB0YXNrSXRlbTtcbiAgfVxuXG4gIHNhdmVUYXNrKHByb2plY3QsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuY29udHJvbGxlci5hZGRUYXNrKHByb2plY3QsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250cm9sbGVyLnRhc2tMaXN0KTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaXRlbSwgcHJvamVjdCkge1xuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlVGFzayhpdGVtLmdldEF0dHJpYnV0ZShcImRhdGFcIikpO1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrc0Zyb21TdG9yYWdlKHRhc2tDb250YWluZXIsIHByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG4gIGJ1aWxkTW9kYWxDb250ZW50KCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XG4gIH1cblxuICBidWlsZE1vZGFsT3ZlcmxheSgpIHtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3ZlcmxheVwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGFsT3ZlcmxheTtcbiAgfVxuXG4gIGJ1aWxkVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICAvL3RpdGxlIGlucHV0XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgdGFza1wiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE1XCIpO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIC8vbmV3IHJvd1xuICAgIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZChcImZvcm0tcm93XCIpO1xuICAgIC8vZGF0ZSBpbnB1dFxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICAvL3ByaW9yaXR5IGRyb3Bkb3duXG4gICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IG5vcm1hbFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub3JtYWxQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5vcm1hbFwiKTtcbiAgICBub3JtYWxQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIm5vcm1hbFwiO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJoaWdoXCI7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChub3JtYWxQcmlvcml0eU9wdGlvbik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xuICAgIC8vc2F2ZSByb3dcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoXCJzYXZlLXJvd1wiKTtcbiAgICAvL2NhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICAvL3NhdmUgYnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2F2ZVwiKTtcbiAgICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIGlmICghZGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNob29zZSBhIGRhdGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNhdmVUYXNrKFxuICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQsXG4gICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICBkYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHlEcm9wZG93bi52YWx1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCB0aGlzLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG4gICAgZm9ybVJvdy5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJqcHBhc3RvcmVrLmNvbVwiO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlci5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL3ZpZXcuanMnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbmNvbnN0IHZpZXcgPSBuZXcgVmlldyhjb250cm9sbGVyLCBkb2N1bWVudC5ib2R5KTtcbnZpZXcuYnVpbGRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=