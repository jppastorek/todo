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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7O0FBRTdCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUs7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtc21hbGwucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyLCBjb250YWluZXJFbGVtZW50KSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBcIkluYm94XCI7XG4gIH1cblxuICBidWlsZFBhZ2UoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLnBvcHVsYXRlVGFza0xpc3QoKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkUHJvamVjdENvbnRhaW5lcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYnVpbGRUYXNrQ29udGFpbmVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZEZvb3RlcigpKTtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMuYnVpbGRNb2RhbCgpO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IHRoaXMuYnVpbGRNb2RhbENvbnRlbnQoKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFRhc2tGb3JtKCkpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkTW9kYWxPdmVybGF5KCkpO1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgfVxuXG4gIGJ1aWxkSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiVGltZWx5XCI7XG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgIGEuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhKTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9XG5cbiAgYnVpbGRQcm9qZWN0Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idWlsZFByb2plY3RDb250YWluZXJIZWFkZXIoKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQodGhpcy5idWlsZFByb2plY3RJdGVtKFwiSW5ib3hcIikpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKHRoaXMuYnVpbGRQcm9qZWN0SXRlbShcIlRvZGF5XCIpKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmJ1aWxkUHJvamVjdEl0ZW0oXCJUb21vcnJvd1wiKSk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RDb250YWluZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXJcIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLXRleHRcIik7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlclRleHQuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xuICAgIHByb2plY3RDb250YWluZXJIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lckhlYWRlclRleHQpO1xuICAgIGNvbnN0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHBsdXNTaWduLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJ0b29sdGlwXCIpO1xuICAgIHBsdXNTaWduLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0XCIpO1xuICAgIHRvb2xUaXBUZXh0LmlubmVyVGV4dCA9IFwiQWRkIGEgbmV3IHByb2plY3RcIjtcbiAgICBwbHVzU2lnbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgcGx1c1NpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXJIZWFkZXI7XG4gIH1cblxuICBidWlsZFByb2plY3RJdGVtKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IGAke25hbWV9YDtcbiAgICBwcm9qZWN0SXRlbS5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IG5hbWU7XG4gICAgICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgICAgdGFza3NIZWFkZXIuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBuYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdEl0ZW07XG4gIH1cblxuICBidWlsZFRhc2tDb250YWluZXIoKSB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJ1aWxkVGFza0NvbnRhaW5lckhlYWRlcihcIkluYm94XCIpKTtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnRhc2tMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzRnJvbVN0b3JhZ2UodGFza0NvbnRhaW5lciwgXCJJbmJveFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XG4gIH1cblxuICBkaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2staXRlbVwiKTtcbiAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gdGFza0l0ZW1zLmxlbmd0aDtcbiAgICBpZiAobnVtYmVyT2ZJdGVtcyA+IDApIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxudW1iZXJPZkl0ZW1zOyBpKyspIHtcbiAgICAgICAgdGFza0l0ZW1zWzBdLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIGNvbnN0IHRhc2tMaXN0ID0gdGhpcy5jb250cm9sbGVyLnRhc2tMaXN0O1xuICAgIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnByb2plY3QgPT0gcHJvamVjdCkge1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICB0aGlzLmJ1aWxkVGFza0l0ZW0ocHJvamVjdCwgdGFzay50aXRsZSwgdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrTGlzdC5pbmRleE9mKHRhc2spKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRUYXNrQ29udGFpbmVySGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQ29udGFpbmVySGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1oZWFkZXJcIik7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lckhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlclRleHQuaW5uZXJUZXh0ID0gYCR7bmFtZX1gO1xuICAgIHRhc2tDb250YWluZXJIZWFkZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lckhlYWRlclRleHQpO1xuICAgIGNvbnN0IHBsdXNTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHBsdXNTaWduLmNsYXNzTGlzdC5hZGQoXCJhZGRcIiwgXCJ0b29sdGlwXCIpO1xuICAgIHBsdXNTaWduLmlubmVyVGV4dCA9IFwiK1wiO1xuICAgIGNvbnN0IHRvb2xUaXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdG9vbFRpcFRleHQuY2xhc3NMaXN0LmFkZChcInRvb2x0aXB0ZXh0XCIpO1xuICAgIHRvb2xUaXBUZXh0LmlubmVyVGV4dCA9IFwiQWRkIGEgbmV3IHRhc2tcIjtcbiAgICBwbHVzU2lnbi5hcHBlbmRDaGlsZCh0b29sVGlwVGV4dCk7XG4gICAgcGx1c1NpZ24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmRDaGlsZChwbHVzU2lnbik7XG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJIZWFkZXI7XG4gIH1cblxuICBkaXNwbGF5VGFza0Zvcm0oKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtb3ZlcmxheVwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgaGlkZVRhc2tGb3JtKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW92ZXJsYXlcIik7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGJ1aWxkVGFza0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBpbmRleCkge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgY29uc3QgY2hlY2tib3hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoZWNrYm94RGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1jb250YWluZXJcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1pdGVtXCIpO1xuICAgIGNvbnN0IHRhc2tJdGVtVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJdGVtVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrSXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tJdGVtVGl0bGUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1pdGVtXCIpO1xuICAgIHRhc2tJdGVtVGl0bGUuaW5uZXJUZXh0ID0gdGl0bGU7XG4gICAgY29uc3QgdGFza0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tEYXRlLmlubmVyVGV4dCA9IGRhdGU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5LCBcInByaW9yaXR5XCIpO1xuICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSBwcmlvcml0eTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbGV0ZUJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiLCBcInRvb2x0aXAtZGVsZXRlXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlQnV0dG9uSW1hZ2Uuc3JjID0gSWNvbjtcbiAgICBjb25zdCB0b29sVGlwVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRvb2xUaXBUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwdGV4dC1kZWxldGVcIik7XG4gICAgdG9vbFRpcFRleHQuaW5uZXJUZXh0ID0gXCJEZWxldGUgdGhpcyB0YXNrXCI7XG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbkltYWdlKTtcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQodG9vbFRpcFRleHQpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLmRlbGV0ZVRhc2sodGFza0l0ZW0sIHRoaXMuY3VycmVudFByb2plY3QpO1xuICAgIH0pO1xuICAgIGNoZWNrYm94RGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrSXRlbVRpdGxlRGl2LmFwcGVuZENoaWxkKHRhc2tJdGVtVGl0bGUpO1xuICAgIHRhc2tEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICB0YXNrUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICBkZWxldGVCdXR0b25EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveERpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0l0ZW1UaXRsZURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0RhdGVEaXYpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eURpdik7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uRGl2KTtcbiAgICB0YXNrSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIGluZGV4KTtcbiAgICByZXR1cm4gdGFza0l0ZW07XG4gIH1cblxuICBzYXZlVGFzayhwcm9qZWN0LCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkVGFzayhwcm9qZWN0LCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbGxlci50YXNrTGlzdCk7XG4gIH1cblxuICBkZWxldGVUYXNrKGl0ZW0sIHByb2plY3QpIHtcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtP1wiKSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5jb250cm9sbGVyLmRlbGV0ZVRhc2soaXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpKTtcbiAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3NGcm9tU3RvcmFnZSh0YXNrQ29udGFpbmVyLCBwcm9qZWN0KTtcbiAgICB9XG4gIH1cblxuICBidWlsZE1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIiwgXCJoaWRkZW5cIik7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbFwiKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgICByZXR1cm4gbW9kYWw7XG4gIH1cblxuICBidWlsZE1vZGFsQ29udGVudCgpIHtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgICByZXR1cm4gbW9kYWxDb250ZW50O1xuICB9XG5cbiAgYnVpbGRNb2RhbE92ZXJsYXkoKSB7XG4gICAgY29uc3QgbW9kYWxPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW92ZXJsYXlcIiwgXCJoaWRkZW5cIik7XG4gICAgbW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmhpZGVUYXNrRm9ybSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBtb2RhbE92ZXJsYXk7XG4gIH1cblxuICBidWlsZFRhc2tGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gICAgLy90aXRsZSBpbnB1dFxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTmV3IHRhc2tcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxNVwiKTtcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAvL25ldyByb3dcbiAgICBjb25zdCBmb3JtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUm93LmNsYXNzTGlzdC5hZGQoXCJmb3JtLXJvd1wiKTtcbiAgICAvL2RhdGUgaW5wdXRcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG4gICAgLy9wcmlvcml0eSBkcm9wZG93blxuICAgIGNvbnN0IHByaW9yaXR5RHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBjb25zdCBub3JtYWxQcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm9ybWFsUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJub3JtYWxcIik7XG4gICAgbm9ybWFsUHJpb3JpdHlPcHRpb24uaW5uZXJUZXh0ID0gXCJub3JtYWxcIjtcbiAgICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG4gICAgaGlnaFByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiaGlnaFwiO1xuICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQobm9ybWFsUHJpb3JpdHlPcHRpb24pO1xuICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5T3B0aW9uKTtcbiAgICAvL3NhdmUgcm93XG4gICAgY29uc3Qgc2F2ZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2F2ZVJvdy5jbGFzc0xpc3QuYWRkKFwic2F2ZS1yb3dcIik7XG4gICAgLy9jYW5jZWwgYnV0dG9uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuaGlkZVRhc2tGb3JtKCk7XG4gICAgfSk7XG4gICAgLy9zYXZlIGJ1dHRvblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNhdmVcIik7XG4gICAgc2F2ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlNhdmVcIjtcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG4gICAgICBpZiAoIWRhdGVJbnB1dC52YWx1ZSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBjaG9vc2UgYSBkYXRlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zYXZlVGFzayhcbiAgICAgICAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0LFxuICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgICAgZGF0ZUlucHV0LnZhbHVlLFxuICAgICAgICAgIHByaW9yaXR5RHJvcGRvd24udmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5oaWRlVGFza0Zvcm0oKTtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuZGlzcGxheVRhc2tzRnJvbVN0b3JhZ2UodGFza0NvbnRhaW5lciwgdGhpcy5jdXJyZW50UHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cpO1xuICAgIGZvcm1Sb3cuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBmb3JtUm93LmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2F2ZVJvdyk7XG4gICAgc2F2ZVJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgIHNhdmVSb3cuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBidWlsZEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmlubmVyVGV4dCA9IFwianBwYXN0b3Jlay5jb21cIjtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==