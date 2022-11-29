//PART OF THE VIEW

import { saveTask } from "./controller";
import { taskList } from "./task";

export function createTaskForm(taskContainer) {
    //form
    const form = document.createElement('form');
    form.classList.add('form');
    //title input
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('for', 'title');
    titleInput.setAttribute('placeholder', 'Name your task');
    //date input
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'due-date');
    dateInput.setAttribute('name', 'due-date');
    //priority dropdown
    const priorityDropdown = document.createElement('select');
    priorityDropdown.setAttribute('id', 'priority');
    priorityDropdown.setAttribute('name', 'priority');
    const normalPriorityOption = document.createElement('option');
    normalPriorityOption.setAttribute('value', 'normal');
    normalPriorityOption.innerText = 'normal';
    const highPriorityOption = document.createElement('option');
    highPriorityOption.setAttribute('value', 'high');
    highPriorityOption.innerText = 'high';
    priorityDropdown.appendChild(normalPriorityOption);
    priorityDropdown.appendChild(highPriorityOption);
    //save button
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-button');
    saveButton.setAttribute('type', 'button');
    saveButton.setAttribute('value', 'Save');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', ()=> {
      saveTask(titleInput.value, dateInput.value, priorityDropdown.value);
      displayTasks(taskContainer);
    });
      //create a list of all form elements
    const formElements = [titleInput, dateInput, priorityDropdown, saveButton];

    //build it
    taskContainer.innerHTML = '';
    taskContainer.appendChild(form);
    formElements.forEach(element => form.appendChild(element));
};

export function displayTasks(taskContainer) {
  taskContainer.innerHTML = '';
  createTaskForm(taskContainer);
  taskList.forEach((task) => {
    const div = document.createElement('div');
    div.classList.add('task-item');
    const taskName = document.createElement('h4');
    taskName.innerText = `${task.title}`;
    const taskDate = document.createElement('p');
    taskDate.innerText = `${task.dueDate}`;
    const taskPriority = document.createElement('p');
    taskPriority.innerText = `${task.priority}`;
    div.appendChild(taskName);
    div.appendChild(taskDate);
    div.appendChild(taskPriority);
    taskContainer.appendChild(div);
  })
}