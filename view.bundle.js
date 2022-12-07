/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _images_trash_small_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/trash-small.png */ "./src/images/trash-small.png");


class View {
  constructor(controller, containerElement, storage) {
    this.controller = controller;
    this.containerElement = containerElement;
    this.storage = storage;
  }

  buildPage() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    this.containerElement.appendChild(content);
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
    // displayTasks(taskContainer);
    return taskContainer;
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
        alert('Choose a date');
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEtBQUs7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtc21hbGwucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyLCBjb250YWluZXJFbGVtZW50LCBzdG9yYWdlKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2U7XG4gIH1cblxuICBidWlsZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRQcm9qZWN0Q29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRhc2tDb250YWluZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkRm9vdGVyKCkpO1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy5idWlsZE1vZGFsKCk7XG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gdGhpcy5idWlsZE1vZGFsQ29udGVudCgpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0Zvcm0oKSk7XG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRNb2RhbE92ZXJsYXkoKSk7XG4gIH1cblxuICBidWlsZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIlRpbWVseVwiO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBhLmFwcGVuZENoaWxkKGgxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuXG4gIGJ1aWxkUHJvamVjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1aWxkUHJvamVjdEl0ZW0oXCJJbmJveFwiKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5idWlsZFByb2plY3RJdGVtKFwiVG9kYXlcIikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRQcm9qZWN0SXRlbShcIlRvbW9ycm93XCIpKTtcbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbiAgfVxuXG4gIGJ1aWxkUHJvamVjdEl0ZW0obmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgIHByb2plY3RJdGVtLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgIHJldHVybiBwcm9qZWN0SXRlbTtcbiAgfVxuXG4gIGJ1aWxkVGFza0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYnVpbGRUYXNrQ29udGFpbmVySGVhZGVyKFwiSW5ib3hcIikpO1xuICAgIC8vIGRpc3BsYXlUYXNrcyh0YXNrQ29udGFpbmVyKTtcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbiAgfVxuXG4gIGJ1aWxkVGFza0NvbnRhaW5lckhlYWRlcihuYW1lKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFza3MtaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXJUZXh0LmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXJIZWFkZXJUZXh0KTtcbiAgICBjb25zdCBwbHVzU2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBwbHVzU2lnbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIsIFwidG9vbHRpcFwiKTtcbiAgICBwbHVzU2lnbi5pbm5lclRleHQgPSBcIitcIjtcbiAgICBjb25zdCB0b29sVGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvb2xUaXBUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwdGV4dFwiKTtcbiAgICB0b29sVGlwVGV4dC5pbm5lclRleHQgPSBcIkFkZCBhIG5ldyB0YXNrXCI7XG4gICAgcGx1c1NpZ24uYXBwZW5kQ2hpbGQodG9vbFRpcFRleHQpO1xuICAgIHBsdXNTaWduLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrRm9ybSgpO1xuICAgIH0pO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuYXBwZW5kQ2hpbGQocGx1c1NpZ24pO1xuICAgIHJldHVybiB0YXNrQ29udGFpbmVySGVhZGVyO1xuICB9XG5cbiAgZGlzcGxheVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW92ZXJsYXlcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGhpZGVUYXNrRm9ybSgpIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1vdmVybGF5XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBidWlsZFRhc2tJdGVtKHRpdGxlLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgY29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1pdGVtXCIpO1xuICAgIGNvbnN0IHRhc2tJdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJdGVtVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tJdGVtVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1pdGVtXCIpO1xuICAgIHRhc2tJdGVtVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgY29uc3QgdGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEYXRlLmlubmVyVGV4dCA9IGRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQocHJpb3JpdHksIFwicHJpb3JpdHlcIik7XG4gICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHByaW9yaXR5O1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlQnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIsIFwidG9vbHRpcC1kZWxldGVcIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVCdXR0b25JbWFnZS5zcmMgPSBJY29uO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0LWRlbGV0ZVwiKTtcbiAgICB0b29sVGlwVGV4dC5pbm5lclRleHQgPSBcIkRlbGV0ZSB0aGlzIHRhc2tcIjtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uSW1hZ2UpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmRlbGV0ZVRhc2sodGFza0l0ZW0pO1xuICAgIH0pO1xuICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrSXRlbVRpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tJdGVtVGl0bGUpO1xuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICBkZWxldGVCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveERpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0l0ZW1UaXRsZURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0RhdGVEaXYpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uRGl2KTtcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIHRoaXMuY29udHJvbGxlci50YXNrTGlzdC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGFza0l0ZW07XG4gIH1cblxuICBkaXNwbGF5TmV3VGFzaygpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IHRoaXMuY29udHJvbGxlci50YXNrTGlzdDtcbiAgICBjb25zdCBsYXN0VGFza0l0ZW0gPSB0YXNrTGlzdFt0YXNrTGlzdC5sZW5ndGggLSAxXTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuICAgICAgdGhpcy5idWlsZFRhc2tJdGVtKFxuICAgICAgICBsYXN0VGFza0l0ZW0udGl0bGUsXG4gICAgICAgIGxhc3RUYXNrSXRlbS5kdWVEYXRlLFxuICAgICAgICBsYXN0VGFza0l0ZW0ucHJpb3JpdHlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGFza1ZpZXdzID0gW107XG5cbiAgc2F2ZVRhc2sodGl0bGUsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5jb250cm9sbGVyLmFkZFRhc2sodGl0bGUsIGRhdGUsIHByaW9yaXR5KTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2soaXRlbSkge1xuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuZGVsZXRlVGFzayhpdGVtLmdldEF0dHJpYnV0ZShcImRhdGFcIikpO1xuICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkTW9kYWwoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbDtcbiAgfVxuXG4gIGJ1aWxkTW9kYWxDb250ZW50KCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICAgIHJldHVybiBtb2RhbENvbnRlbnQ7XG4gIH1cblxuICBidWlsZE1vZGFsT3ZlcmxheSgpIHtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3ZlcmxheVwiLCBcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGFsT3ZlcmxheTtcbiAgfVxuXG4gIGJ1aWxkVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICAvL3RpdGxlIGlucHV0XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOZXcgdGFza1wiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE1XCIpO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIC8vbmV3IHJvd1xuICAgIGNvbnN0IGZvcm1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Sb3cuY2xhc3NMaXN0LmFkZChcImZvcm0tcm93XCIpO1xuICAgIC8vZGF0ZSBpbnB1dFxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgICAvL3ByaW9yaXR5IGRyb3Bkb3duXG4gICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IG5vcm1hbFByaW9yaXR5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub3JtYWxQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5vcm1hbFwiKTtcbiAgICBub3JtYWxQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIm5vcm1hbFwiO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJoaWdoXCI7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChub3JtYWxQcmlvcml0eU9wdGlvbik7XG4gICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHlPcHRpb24pO1xuICAgIC8vc2F2ZSByb3dcbiAgICBjb25zdCBzYXZlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzYXZlUm93LmNsYXNzTGlzdC5hZGQoXCJzYXZlLXJvd1wiKTtcbiAgICAvL2NhbmNlbCBidXR0b25cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICB9KTtcbiAgICAvL3NhdmUgYnV0dG9uXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2F2ZVwiKTtcbiAgICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghZGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KCdDaG9vc2UgYSBkYXRlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5RHJvcGRvd24udmFsdWUpO1xuICAgICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpO1xuICAgICAgICB0aGlzLmRpc3BsYXlOZXdUYXNrKCk7XG4gICAgICB9XG4gICAgICBcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdyk7XG4gICAgZm9ybVJvdy5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzYXZlUm93KTtcbiAgICBzYXZlUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGJ1aWxkRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJqcHBhc3RvcmVrLmNvbVwiO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9