/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    setTitle(newTitle) {
        this.title = newTitle;
        return this.title;
    }
  
    setDescription(newDescription) {
      this.description = newDescription;
      return this.description;
    }
  
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
    return this.dueDate;
  }
  
  setPriority(newPriority) {
    this.priority = newPriority;
    return this.priority;
  }

  setCompleted() {
    this.completed = true;
    return this.completed
  }
}

const taskList = [];

function createTaskForm(taskContainer) {
  //header
  const header = document.createElement('h4');
  header.classList.add('header');
  header.innerText = 'Create a New Task';
  //form
  const form = document.createElement('form');
  form.classList.add('form');
  //title label
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.innerText = 'Task Name:';
  //title input
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('for', 'title');
  //description label
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.innerText = 'Description:';
  //description input
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'textarea');
  descriptionInput.setAttribute('id', 'description');
  descriptionInput.setAttribute('for', 'description');
  //high priority checkbox
  const priorityCheckbox = document.createElement('input');
  priorityCheckbox.setAttribute('type', 'checkbox');
  priorityCheckbox.setAttribute('id', 'priority');
  priorityCheckbox.setAttribute('name', 'priority');
  priorityCheckbox.setAttribute('value', 'high-priority');
  //high priority checkbox label
  const priorityCheckboxLabel = document.createElement('label');
  priorityCheckboxLabel.setAttribute('for', 'priority');
  priorityCheckboxLabel.innerText = 'High Priority';
  //save button
  const saveButton = document.createElement('button');
  saveButton.classList.add('save-button');
  saveButton.setAttribute('type', 'button');
  saveButton.setAttribute('value', 'Save');
  saveButton.innerText = 'Save';
  saveButton.addEventListener('click', saveTask());

  //create a list of all form elements
  const formElements = [titleLabel, titleInput, descriptionLabel, descriptionInput, priorityCheckbox, priorityCheckboxLabel, saveButton]

  //build it
  taskContainer.innerHTML = '';
  taskContainer.appendChild(header);
  taskContainer.appendChild(form);
  formElements.forEach(element => form.appendChild(element));
}

function saveTask() {
  console.log('Task saved.');
  // taskList.push(new Task(titleInput.value, descriptionInput.value, 'date', priorityCheckbox.value, false));
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHNldFRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICBcbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICBcbiAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9XG4gIFxuICBzZXRQcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIHNldENvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSh0YXNrQ29udGFpbmVyKSB7XG4gIC8vaGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgaGVhZGVyLmlubmVyVGV4dCA9ICdDcmVhdGUgYSBOZXcgVGFzayc7XG4gIC8vZm9ybVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgLy90aXRsZSBsYWJlbFxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUYXNrIE5hbWU6JztcbiAgLy90aXRsZSBpbnB1dFxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAvL2Rlc2NyaXB0aW9uIGxhYmVsXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gIC8vZGVzY3JpcHRpb24gaW5wdXRcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHRhcmVhJyk7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIC8vaGlnaCBwcmlvcml0eSBjaGVja2JveFxuICBjb25zdCBwcmlvcml0eUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJpb3JpdHlDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgcHJpb3JpdHlDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5Q2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gIHByaW9yaXR5Q2hlY2tib3guc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoLXByaW9yaXR5Jyk7XG4gIC8vaGlnaCBwcmlvcml0eSBjaGVja2JveCBsYWJlbFxuICBjb25zdCBwcmlvcml0eUNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcmlvcml0eUNoZWNrYm94TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgcHJpb3JpdHlDaGVja2JveExhYmVsLmlubmVyVGV4dCA9ICdIaWdoIFByaW9yaXR5JztcbiAgLy9zYXZlIGJ1dHRvblxuICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2F2ZS1idXR0b24nKTtcbiAgc2F2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIHNhdmVCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTYXZlJyk7XG4gIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gJ1NhdmUnO1xuICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRhc2soKSk7XG5cbiAgLy9jcmVhdGUgYSBsaXN0IG9mIGFsbCBmb3JtIGVsZW1lbnRzXG4gIGNvbnN0IGZvcm1FbGVtZW50cyA9IFt0aXRsZUxhYmVsLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvbklucHV0LCBwcmlvcml0eUNoZWNrYm94LCBwcmlvcml0eUNoZWNrYm94TGFiZWwsIHNhdmVCdXR0b25dXG5cbiAgLy9idWlsZCBpdFxuICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm1FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZm9ybS5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFzaygpIHtcbiAgY29uc29sZS5sb2coJ1Rhc2sgc2F2ZWQuJyk7XG4gIC8vIHRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgJ2RhdGUnLCBwcmlvcml0eUNoZWNrYm94LnZhbHVlLCBmYWxzZSkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==