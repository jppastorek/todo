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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n.active {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header, .project-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n    color: var(--timely-blue);\n}\n\n.save:hover {\n    color: var(--lighter-timely-blue);\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--lighter-grey);\n}\n\n.cancel:hover {\n    color: var(--cancel-red);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    width: 100%;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal, .project-form {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 230px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*PROJECT FORM -------------------------------------------*/\n.project-form {\n    border-radius: 4px;\n    background-color: var(--dark-grey);\n    padding: 15px;\n    width: 350px;\n  }\n\n  .project-form h1, .task-form h1 {\n    margin-bottom: 20px;\n    color: var(--lighter-grey);\n    font-family: 'Roboto Slab', serif;\n    text-align: center;\n  }\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&family=Roboto&family=Roboto+Slab&display=swap');\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n\n}\n\n:root {\n    --darker-grey: #1b1b1b;\n    --dark-grey: #343434;\n    --white: #ffffff;\n    --lighter-grey: #bdbdbd;\n    --light-grey: #9b9999;\n    --medium-grey: #575757;\n    --timely-blue: #009eff;\n    --lighter-timely-blue: #41b4fc;\n    --overlay-grey: rgba(0, 0, 0, 0.842);\n    --cancel-red: rgb(126, 83, 83);\n    --cancel-red-hover: rgb(141, 75, 75);\n\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    grid-template-rows: 50px auto 25px;\n    height: 100vh;\n    padding: 10px;\n    gap: 10px;\n    overflow: scroll;\n    background-color: var(--darker-grey);\n}\n\n.header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n    color: var(--timely-blue);\n    border: none;\n    font-family: 'Pacifico', cursive;\n    font-size: larger;\n    margin-bottom: 10px;\n}\n\n.header a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.header a:visited {\n    color: var(--timely-blue);\n}\n\n/*PROJECTS -----------------------------------------*/\n\n.project-container {\n    grid-row: 2/3;\n    padding: 20px;\n    color: var(--lighter-grey);\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n    font-family: 'Roboto Slab', serif;\n    resize: horizontal;\n    overflow: auto;\n}\n\n.project-item {\n    height: 40px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n.project-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 9px;\n}\n\n.active {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n}\n\n/*TASKS --------------------------------------------*/\n\n.task-container {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    grid-row: 2/3;\n    background-color: var(--dark-grey);\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n/*-----TASKS HEADER--------*/\n\n.tasks-header, .project-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--lighter-grey);\n    margin-bottom: 10px;\n    font-family: 'Roboto Slab', serif;\n    font-size: larger;\n}\n\n.add {\n    color: var(--timely-blue);\n}\n\n.add:hover {\n    cursor: pointer;\n    color: var(--lighter-timely-blue);\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: 14px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltip-delete {\n    position: relative;\n    display: inline-block;\n}\n\n.tooltip-delete .tooltiptext-delete {\n    visibility: hidden;\n    width: 120px;\n    background-color: var(--darker-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    position: absolute;\n    z-index: 1;\n    right: 135%;\n    top: -5px;\n    font-size: 14px;\n    font-family: 'Roboto', sans-serif;\n}\n\n.tooltip-delete:hover .tooltiptext-delete {\n    visibility: visible;\n}\n\n/*-------TASK ITEMS ----------*/\n\n.task-item {\n    height: 50px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 10px;\n    color: var(--lighter-grey);\n    border: 1px solid var(--darker-grey);\n    border-width: 0 0 1px 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n.task-item:hover {\n    background-color: var(--medium-grey);\n    border: 1px solid var(--medium-grey);\n    border-radius: 4px;\n}\n\n.checkbox {\n    position: relative;\n    width: 1.5em;\n    height: 1.5em;\n    color: var(--darker-grey);\n    border: 1px solid var(--lighter-grey);\n    border-radius: 10px;\n    appearance: none;\n    outline: 0;\n    cursor: pointer;\n    transition: 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\n}\n\n.checkbox::before {\n    position: absolute;\n    content: '';\n    display: block;\n    top: 0px;\n    left: 5px;\n    width: 6px;\n    height: 12px;\n    border-style: solid;\n    border-color: var(--timely-blue);\n    border-width: 0 2px 2px 0;\n    transform: rotate(31deg);\n    opacity: 0;\n}\n\n.checkbox:checked {\n    color: var(--timely-blue);\n    border-color: var(--lighter-grey);\n}\n\n.checkbox:checked:before {\n    opacity: 1;\n}\n\nlabel::before {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n}\n\n.delete {\n    height: 16px;\n    color: var(--lighter-grey);\n}\n\n.delete:hover {\n    cursor: pointer;\n}\n\n.high {\n    color: red;\n    font-weight: bold;\n}\n\n.normal {\n    color: var(--lighter-grey);\n    ;\n}\n\n.priority {\n    width: 70px;\n    text-align: left;\n}\n\n.checkbox-container {\n    width: 1.5em;\n}\n\n.title-container {\n    width: 100px;\n    overflow: hidden;\n    text-align: left;\n}\n\n.date-container {\n    width: 100px;\n    text-align: left;\n}\n\n\n/*FORM ----------------------------------------------*/\n\n.form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ninput[type=text] {\n    width: 100%;\n    height: 30px;\n    background-color: var(--medium-grey);\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n    color: var(--lighter-grey);\n    font-size: large;\n    font-family: 'Roboto', sans-serif;\n    padding: 15px;\n}\n\ninput[type=text]:focus {\n    border: 1px solid var(--dark-grey);\n}\n\ninput[type=\"date\"]{\n    background-color: var(--medium-grey);\n    padding: 5px;\n    font-family: \"Roboto\", sans-serif;\n    width: 160px;\n    color: var(--lighter-grey);\n    font-size: large;\n    border: 1px solid var(--darker-grey);\n    outline: none;\n    border-radius: 5px;\n    text-align: center;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: #ffffff;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 3px;\n}\n\n.form-row {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n#priority {\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n    background-color: var(--medium-grey);\n    color: var(--lighter-grey);\n    text-align: center;\n    border: 1px solid var(--darker-grey);\n    border-radius: 5px;\n}\n\n.save, .cancel {\n    font-family: 'Roboto', sans-serif;\n    color: var(--light-grey);\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n}\n\n.save {\n    font-size: larger;\n    color: var(--timely-blue);\n}\n\n.save:hover {\n    color: var(--lighter-timely-blue);\n}\n\n.cancel {\n    font-size: smaller;\n    color: var(--lighter-grey);\n}\n\n.cancel:hover {\n    color: var(--cancel-red);\n}\n\n.save-row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 20px;\n    width: 100%;\n    margin-top: 10px;\n    padding: 0 1px;\n}\n\n.blue {\n    color: var(--timely-blue);\n}\n\n/*MODAL ---------------------------------------------*/\n\n.modal, .project-form {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 300px;\n    max-width: 100%;\n    height: 230px;\n    max-height: 100%;\n    z-index: 1010;\n    display: flex;\n    align-items: center;\n    border: 1px solid var(--dark-grey);\n    border-radius: 4px;\n}\n\n.modal-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    padding: 15px;\n    overflow: auto;\n    background-color: var(--dark-grey);\n}\n\n.modal-overlay {\n    z-index: 1000;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--overlay-grey);\n}\n\n.hidden {\n    display: none;\n}\n\n/*PROJECT FORM -------------------------------------------*/\n.project-form {\n    border-radius: 4px;\n    background-color: var(--dark-grey);\n    padding: 15px;\n    width: 350px;\n  }\n\n  .project-form h1, .task-form h1 {\n    margin-bottom: 20px;\n    color: var(--lighter-grey);\n    font-family: 'Roboto Slab', serif;\n    text-align: center;\n  }\n\n/*FOOTER -------------------------------------------*/\n\n.footer {\n    grid-column: 1/3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--lighter-grey);\n    border: none;\n}\n\n.footer a {\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.footer a:visited {\n    color: var(--lighter-grey);\n}"],"sourceRoot":""}]);
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
    modalContent.appendChild(this.buildProjectForm());
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
      this.displayForm("project");
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
      for (let i = 0; i < numberOfItems; i++) {
        taskItems[0].remove();
      }
    }
    const taskList = this.controller.taskList;
    taskList.forEach((task) => {
      if (task.project == project) {
        taskContainer.append(
          this.buildTaskItem(
            project,
            task.title,
            task.dueDate,
            task.priority,
            taskList.indexOf(task)
          )
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
      this.displayForm("task");
    });
    taskContainerHeader.appendChild(plusSign);
    return taskContainerHeader;
  }

  displayForm(value) {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    const taskForm = document.querySelector(".task-form");
    const projectForm = document.querySelector(".project-form");
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
    if (value == "task") {
      taskForm.classList.remove("hidden");
    } else {
      projectForm.classList.remove("hidden");
    }
  }

  hideForm(value) {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    const taskForm = document.querySelector(".task-form");
    const projectForm = document.querySelector(".project-form");
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
    if (value == "task") {
      taskForm.classList.add("hidden");
    } else {
      projectForm.classList.add("hidden");
    }
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
    form.classList.add("form", "task-form", "hidden");
    const header = document.createElement("h1");
    header.classList.add("task-form-header");
    header.innerText = "Add new task";
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
      this.hideForm("task");
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
        this.hideForm("task");
        const taskContainer = document.querySelector(".task-container");
        this.displayTasksFromStorage(taskContainer, this.currentProject);
      }
    });
    form.appendChild(header);
    form.appendChild(titleInput);
    form.appendChild(formRow);
    formRow.appendChild(dateInput);
    formRow.appendChild(priorityDropdown);
    form.appendChild(saveRow);
    saveRow.appendChild(cancelButton);
    saveRow.appendChild(saveButton);
    return form;
  }

  buildProjectForm() {
    const form = document.createElement("div");
    form.classList.add("form", "project-form", "hidden");
    const header = document.createElement("h1");
    header.classList.add("project-form-header");
    header.innerText = "Add new project";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("for", "title");
    titleInput.setAttribute("placeholder", "Project name");
    titleInput.setAttribute("maxlength", "15");
    titleInput.required = true;
    const saveRow = document.createElement("div");
    saveRow.classList.add("save-row");
    //cancel button
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
      this.hideForm("project");
    });
    //save button
    const saveButton = document.createElement("button");
    saveButton.classList.add("save");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", () => {
      const projectContainer = document.querySelector(".project-container");
      const projectTitle = document.querySelector(".project-title");
      projectContainer.appendChild(this.buildProjectItem(titleInput.value));
      this.currentProject = titleInput.value
      projectTitle.innerText = this.currentProject;
      this.hideForm("project");
    });
    form.appendChild(header);
    form.appendChild(titleInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ1o7QUFDUDs7QUFFdEIsdUJBQXVCLHNEQUFVO0FBQ2pDLGlCQUFpQixnREFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZmYW1pbHk9UGFjaWZpY28mZmFtaWx5PVJvYm90byZmYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZGFya2VyLWdyZXk6ICMxYjFiMWI7XFxuICAgIC0tZGFyay1ncmV5OiAjMzQzNDM0O1xcbiAgICAtLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWxpZ2h0ZXItZ3JleTogI2JkYmRiZDtcXG4gICAgLS1saWdodC1ncmV5OiAjOWI5OTk5O1xcbiAgICAtLW1lZGl1bS1ncmV5OiAjNTc1NzU3O1xcbiAgICAtLXRpbWVseS1ibHVlOiAjMDA5ZWZmO1xcbiAgICAtLWxpZ2h0ZXItdGltZWx5LWJsdWU6ICM0MWI0ZmM7XFxuICAgIC0tb3ZlcmxheS1ncmV5OiByZ2JhKDAsIDAsIDAsIDAuODQyKTtcXG4gICAgLS1jYW5jZWwtcmVkOiByZ2IoMTI2LCA4MywgODMpO1xcbiAgICAtLWNhbmNlbC1yZWQtaG92ZXI6IHJnYigxNDEsIDc1LCA3NSk7XFxuXFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggYXV0byAyNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxufVxcblxcbi8qUFJPSkVDVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogOXB4O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbi8qVEFTS1MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLyotLS0tLVRBU0tTIEhFQURFUi0tLS0tLS0tKi9cXG5cXG4udGFza3MtaGVhZGVyLCAucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLmFkZDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvb2x0aXAtZGVsZXRlIC50b29sdGlwdGV4dC1kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHJpZ2h0OiAxMzUlO1xcbiAgICB0b3A6IC01cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9vbHRpcC1kZWxldGU6aG92ZXIgLnRvb2x0aXB0ZXh0LWRlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi8qLS0tLS0tLVRBU0sgSVRFTVMgLS0tLS0tLS0tLSovXFxuXFxuLnRhc2staXRlbSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcbn1cXG5cXG4uY2hlY2tib3g6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBoZWlnaHQ6IDEycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMWRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGVja2JveDpjaGVja2VkIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZDpiZWZvcmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5sYWJlbDo6YmVmb3JlIHtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxufVxcblxcbi5kZWxldGUge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm9ybWFsIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jaGVja2JveC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuXFxuLypGT1JNIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3J7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5mb3JtLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNhdmUsIC5jYW5jZWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2F2ZSB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4uc2F2ZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVxcblxcbi5jYW5jZWw6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2FuY2VsLXJlZCk7XFxufVxcblxcbi5zYXZlLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwIDFweDtcXG59XFxuXFxuLmJsdWUge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4vKk1PREFMIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuXFxuLm1vZGFsLCAucHJvamVjdC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMTA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxufVxcblxcbi5tb2RhbC1vdmVybGF5IHtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW92ZXJsYXktZ3JleSk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlBST0pFQ1QgRk9STSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4ucHJvamVjdC1mb3JtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdC1mb3JtIGgxLCAudGFzay1mb3JtIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbi8qRk9PVEVSIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7SUFHSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHFEQUFxRDs7QUFFckQ7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7QUFDeEM7O0FBRUEscURBQXFEOztBQUVyRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQSw0QkFBNEI7O0FBRTVCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSwrQkFBK0I7O0FBRS9CO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGVBQWU7SUFDZixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7OztBQUdBLHNEQUFzRDs7QUFFdEQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLHNEQUFzRDs7QUFFdEQ7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSwyREFBMkQ7QUFDM0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEI7O0FBRUYscURBQXFEOztBQUVyRDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PVBhY2lmaWNvJmZhbWlseT1Sb2JvdG8mZmFtaWx5PVJvYm90bytTbGFiJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWRhcmtlci1ncmV5OiAjMWIxYjFiO1xcbiAgICAtLWRhcmstZ3JleTogIzM0MzQzNDtcXG4gICAgLS13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1saWdodGVyLWdyZXk6ICNiZGJkYmQ7XFxuICAgIC0tbGlnaHQtZ3JleTogIzliOTk5OTtcXG4gICAgLS1tZWRpdW0tZ3JleTogIzU3NTc1NztcXG4gICAgLS10aW1lbHktYmx1ZTogIzAwOWVmZjtcXG4gICAgLS1saWdodGVyLXRpbWVseS1ibHVlOiAjNDFiNGZjO1xcbiAgICAtLW92ZXJsYXktZ3JleTogcmdiYSgwLCAwLCAwLCAwLjg0Mik7XFxuICAgIC0tY2FuY2VsLXJlZDogcmdiKDEyNiwgODMsIDgzKTtcXG4gICAgLS1jYW5jZWwtcmVkLWhvdmVyOiByZ2IoMTQxLCA3NSwgNzUpO1xcblxcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IGF1dG8gMjVweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBhOnZpc2l0ZWQge1xcbiAgICBjb2xvcjogdmFyKC0tdGltZWx5LWJsdWUpO1xcbn1cXG5cXG4vKlBST0pFQ1RTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDlweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWVkaXVtLWdyZXkpO1xcbn1cXG5cXG4vKlRBU0tTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi8qLS0tLS1UQVNLUyBIRUFERVItLS0tLS0tLSovXFxuXFxuLnRhc2tzLWhlYWRlciwgLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmFkZCB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxufVxcblxcbi5hZGQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLnRvb2x0aXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMTM1JTtcXG4gICAgdG9wOiAxNHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnRvb2x0aXAtZGVsZXRlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi50b29sdGlwLWRlbGV0ZSAudG9vbHRpcHRleHQtZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICByaWdodDogMTM1JTtcXG4gICAgdG9wOiAtNXB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRvb2x0aXAtZGVsZXRlOmhvdmVyIC50b29sdGlwdGV4dC1kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4vKi0tLS0tLS1UQVNLIElURU1TIC0tLS0tLS0tLS0qL1xcblxcbi50YXNrLWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFzay1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItZ3JleSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMTc1bXMgY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAwLjI1LCAxKTtcXG59XFxuXFxuLmNoZWNrYm94OjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDVweDtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgaGVpZ2h0OiAxMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzFkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uY2hlY2tib3g6Y2hlY2tlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1lbHktYmx1ZSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XFxuXFxuLmNoZWNrYm94OmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxubGFiZWw6OmJlZm9yZSB7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbn1cXG5cXG4uZGVsZXRlIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci1ncmV5KTtcXG59XFxuXFxuLmRlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm5vcm1hbCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICA7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2hlY2tib3gtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZGF0ZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcblxcbi8qRk9STSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1ncmV5KTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9ye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZm9ybS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXItZ3JleSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFya2VyLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zYXZlLCAuY2FuY2VsIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNhdmUge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLnNhdmU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlci10aW1lbHktYmx1ZSk7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cXG5cXG4uY2FuY2VsOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNhbmNlbC1yZWQpO1xcbn1cXG5cXG4uc2F2ZS1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgcGFkZGluZzogMCAxcHg7XFxufVxcblxcbi5ibHVlIHtcXG4gICAgY29sb3I6IHZhcigtLXRpbWVseS1ibHVlKTtcXG59XFxuXFxuLypNT0RBTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbi5tb2RhbCwgLnByb2plY3QtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDIzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDEwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbn1cXG5cXG4ubW9kYWwtb3ZlcmxheSB7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdmVybGF5LWdyZXkpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypQUk9KRUNUIEZPUk0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnByb2plY3QtZm9ybSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgfVxcblxcbiAgLnByb2plY3QtZm9ybSBoMSwgLnRhc2stZm9ybSBoMSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4vKkZPT1RFUiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIGE6dmlzaXRlZCB7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVyLWdyZXkpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrTGlzdCA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayhwcm9qZWN0LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICBwcm9qZWN0LFxuICAgICAgdGl0bGUsXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBmYWxzZVxuICAgICk7XG4gICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgZGVsZXRlVGFzayhpdGVtSW5kZXgpIHtcbiAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlU3RvcmFnZSgpO1xuICB9XG5cbiAgdXBkYXRlU3RvcmFnZSgpIHtcbiAgICBjb25zdCB0YXNrSlNPTiA9IEpTT04uc3RyaW5naWZ5KHRoaXMudGFza0xpc3QpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrTGlzdCcsIHRhc2tKU09OKTtcbiAgfVxuXG4gIHBvcHVsYXRlVGFza0xpc3QoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSk7XG4gICAgfVxuICB9XG59XG4iLCIvL01PREVMIExBWUVSXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvamVjdCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpIHtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtc21hbGwucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyLCBjb250YWluZXJFbGVtZW50KSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG4gIH1cblxuICBidWlsZFBhZ2UoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLnBvcHVsYXRlVGFza0xpc3QoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUHJvamVjdENvbnRhaW5lcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRUYXNrQ29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEZvb3RlcigpKTtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMuYnVpbGRNb2RhbCgpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IHRoaXMuYnVpbGRNb2RhbENvbnRlbnQoKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRhc2tGb3JtKCkpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUHJvamVjdEZvcm0oKSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRNb2RhbE92ZXJsYXkoKSk7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9XG5cbiAgYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJUZXh0ID0gXCJUaW1lbHlcIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgYS5hcHBlbmRDaGlsZChoMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RDb250YWluZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUHJvamVjdENvbnRhaW5lckhlYWRlcigpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1aWxkUHJvamVjdEl0ZW0oXCJJbmJveFwiKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5idWlsZFByb2plY3RJdGVtKFwiVG9kYXlcIikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRQcm9qZWN0SXRlbShcIlRvbW9ycm93XCIpKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfVxuXG4gIGJ1aWxkUHJvamVjdENvbnRhaW5lckhlYWRlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlclwiKTtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItdGV4dFwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dC5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVySGVhZGVyVGV4dCk7XG4gICAgY29uc3QgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcGx1c1NpZ24uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcInRvb2x0aXBcIik7XG4gICAgcGx1c1NpZ24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgY29uc3QgdG9vbFRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sVGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbFRpcFRleHQuaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgcHJvamVjdFwiO1xuICAgIHBsdXNTaWduLmFwcGVuZENoaWxkKHRvb2xUaXBUZXh0KTtcbiAgICBwbHVzU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybShcInByb2plY3RcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJIZWFkZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG5hbWU7XG4gICAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgICAgdGFza3NIZWFkZXIuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XG4gIH1cblxuICBidWlsZFRhc2tDb250YWluZXIoKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0NvbnRhaW5lckhlYWRlcihcIkluYm94XCIpKTtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnRhc2tMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzRnJvbVN0b3JhZ2UodGFza0NvbnRhaW5lciwgXCJJbmJveFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gIH1cblxuICBkaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staXRlbVwiKTtcbiAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gdGFza0l0ZW1zLmxlbmd0aDtcbiAgICBpZiAobnVtYmVyT2ZJdGVtcyA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZJdGVtczsgaSsrKSB7XG4gICAgICAgIHRhc2tJdGVtc1swXS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFza0xpc3QgPSB0aGlzLmNvbnRyb2xsZXIudGFza0xpc3Q7XG4gICAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sucHJvamVjdCA9PSBwcm9qZWN0KSB7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIHRoaXMuYnVpbGRUYXNrSXRlbShcbiAgICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgICAgIHRhc2tMaXN0LmluZGV4T2YodGFzaylcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFRhc2tDb250YWluZXJIZWFkZXIobmFtZSkge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWhlYWRlclwiKTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyVGV4dC5pbm5lclRleHQgPSBgJHtuYW1lfWA7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVySGVhZGVyVGV4dCk7XG4gICAgY29uc3QgcGx1c1NpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcGx1c1NpZ24uY2xhc3NMaXN0LmFkZChcImFkZFwiLCBcInRvb2x0aXBcIik7XG4gICAgcGx1c1NpZ24uaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgY29uc3QgdG9vbFRpcFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0b29sVGlwVGV4dC5jbGFzc0xpc3QuYWRkKFwidG9vbHRpcHRleHRcIik7XG4gICAgdG9vbFRpcFRleHQuaW5uZXJUZXh0ID0gXCJBZGQgYSBuZXcgdGFza1wiO1xuICAgIHBsdXNTaWduLmFwcGVuZENoaWxkKHRvb2xUaXBUZXh0KTtcbiAgICBwbHVzU2lnbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5Rm9ybShcInRhc2tcIik7XG4gICAgfSk7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJIZWFkZXI7XG4gIH1cblxuICBkaXNwbGF5Rm9ybSh2YWx1ZSkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW92ZXJsYXlcIik7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaWYgKHZhbHVlID09IFwidGFza1wiKSB7XG4gICAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVGb3JtKHZhbHVlKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtb3ZlcmxheVwiKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpZiAodmFsdWUgPT0gXCJ0YXNrXCIpIHtcbiAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9XG5cbiAgYnVpbGRUYXNrSXRlbShwcm9qZWN0LCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGluZGV4KSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgICBjb25zdCBjaGVja2JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hlY2tib3hEaXYuY2xhc3NMaXN0LmFkZChcImNoZWNrYm94LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgY29uc3QgdGFza0l0ZW1UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0l0ZW1UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza0l0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWl0ZW1cIik7XG4gICAgdGFza0l0ZW1UaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICBjb25zdCB0YXNrRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0RhdGUuaW5uZXJUZXh0ID0gZGF0ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tQcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQocHJpb3JpdHksIFwicHJpb3JpdHlcIik7XG4gICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHByaW9yaXR5O1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIsIFwidG9vbHRpcC1kZWxldGVcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b25JbWFnZS5zcmMgPSBJY29uO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0LWRlbGV0ZVwiKTtcbiAgICB0b29sVGlwVGV4dC5pbm5lclRleHQgPSBcIkRlbGV0ZSB0aGlzIHRhc2tcIjtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uSW1hZ2UpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgIHRoaXMuZGVsZXRlVGFzayh0YXNrSXRlbSwgdGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgfSk7XG4gICAgY2hlY2tib3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tJdGVtVGl0bGVEaXYuYXBwZW5kQ2hpbGQodGFza0l0ZW1UaXRsZSk7XG4gICAgdGFza0RhdGVEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgIHRhc2tQcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrSXRlbVRpdGxlRGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRGF0ZURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5RGl2KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25EaXYpO1xuICAgIHRhc2tJdGVtLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgaW5kZXgpO1xuICAgIHJldHVybiB0YXNrSXRlbTtcbiAgfVxuXG4gIHNhdmVUYXNrKHByb2plY3QsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuY29udHJvbGxlci5hZGRUYXNrKHByb2plY3QsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb250cm9sbGVyLnRhc2tMaXN0KTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaXRlbSwgcHJvamVjdCkge1xuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlVGFzayhpdGVtLmdldEF0dHJpYnV0ZShcImRhdGFcIikpO1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrc0Zyb21TdG9yYWdlKHRhc2tDb250YWluZXIsIHByb2plY3QpO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG4gIGJ1aWxkTW9kYWxDb250ZW50KCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XG4gIH1cblxuICBidWlsZE1vZGFsT3ZlcmxheSgpIHtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3ZlcmxheVwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGFsT3ZlcmxheTtcbiAgfVxuXG4gIGJ1aWxkVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiLCBcInRhc2stZm9ybVwiLCBcImhpZGRlblwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm0taGVhZGVyXCIpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBcIkFkZCBuZXcgdGFza1wiO1xuICAgIC8vdGl0bGUgaW5wdXRcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIk5ldyB0YXNrXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTVcIik7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgLy9uZXcgcm93XG4gICAgY29uc3QgZm9ybVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVJvdy5jbGFzc0xpc3QuYWRkKFwiZm9ybS1yb3dcIik7XG4gICAgLy9kYXRlIGlucHV0XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIC8vcHJpb3JpdHkgZHJvcGRvd25cbiAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgY29uc3Qgbm9ybWFsUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG5vcm1hbFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9ybWFsXCIpO1xuICAgIG5vcm1hbFByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwibm9ybWFsXCI7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcImhpZ2hcIjtcbiAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKG5vcm1hbFByaW9yaXR5T3B0aW9uKTtcbiAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eU9wdGlvbik7XG4gICAgLy9zYXZlIHJvd1xuICAgIGNvbnN0IHNhdmVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhdmVSb3cuY2xhc3NMaXN0LmFkZChcInNhdmUtcm93XCIpO1xuICAgIC8vY2FuY2VsIGJ1dHRvblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWxcIik7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVGb3JtKFwidGFza1wiKTtcbiAgICB9KTtcbiAgICAvL3NhdmUgYnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2F2ZVwiKTtcbiAgICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIGlmICghZGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGNob29zZSBhIGRhdGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNhdmVUYXNrKFxuICAgICAgICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQsXG4gICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgICBkYXRlSW5wdXQudmFsdWUsXG4gICAgICAgICAgcHJpb3JpdHlEcm9wZG93bi52YWx1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmhpZGVGb3JtKFwidGFza1wiKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuZGlzcGxheVRhc2tzRnJvbVN0b3JhZ2UodGFza0NvbnRhaW5lciwgdGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93KTtcbiAgICBmb3JtUm93LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgZm9ybVJvdy5hcHBlbmRDaGlsZChwcmlvcml0eURyb3Bkb3duKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVSb3cpO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgYnVpbGRQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIsIFwicHJvamVjdC1mb3JtXCIsIFwiaGlkZGVuXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybS1oZWFkZXJcIik7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IFwiQWRkIG5ldyBwcm9qZWN0XCI7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IG5hbWVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxNVwiKTtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoXCJzYXZlLXJvd1wiKTtcbiAgICAvL2NhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlRm9ybShcInByb2plY3RcIik7XG4gICAgfSk7XG4gICAgLy9zYXZlIGJ1dHRvblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmVcIik7XG4gICAgc2F2ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlNhdmVcIjtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFByb2plY3RJdGVtKHRpdGxlSW5wdXQudmFsdWUpKTtcbiAgICAgIHRoaXMuY3VycmVudFByb2plY3QgPSB0aXRsZUlucHV0LnZhbHVlXG4gICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gdGhpcy5jdXJyZW50UHJvamVjdDtcbiAgICAgIHRoaXMuaGlkZUZvcm0oXCJwcm9qZWN0XCIpO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBidWlsZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmlubmVyVGV4dCA9IFwianBwYXN0b3Jlay5jb21cIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXI7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXIuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LmpzJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoY29udHJvbGxlciwgZG9jdW1lbnQuYm9keSk7XG52aWV3LmJ1aWxkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9