//PART OF THE VIEW

import { saveTask } from "./controller";
import { taskList } from "./task";

export function buildPage() {
  const body = document.body;
  body.innerHTML = '';
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  body.appendChild(content);
  content.appendChild(buildHeader());
  content.appendChild(buildProjectContainer());
  content.appendChild(buildTaskContainer());
}

export function buildHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerText = 'Timely';
  return header;
}

export function buildProjectContainer() {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-container');
  projectContainer.append(buildProjectItem('Inbox'));
  projectContainer.append(buildProjectItem('Today'));
  projectContainer.append(buildProjectItem('Tomorrow'));
  return projectContainer;
}

export function buildProjectItem(name) {
  const projectItem = document.createElement('div');
  projectItem.classList.add('project-item');
  const projectTitle = document.createElement('h3');
  projectTitle.innerText = `${name}`;
  projectItem.append(projectTitle);
  return projectItem;
}

export function buildTaskContainer() {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  taskContainer.appendChild(buildTaskContainerHeader('Inbox'));
  return taskContainer;
}

export function buildTaskContainerHeader(name){
  const taskContainerHeader = document.createElement('div');
  taskContainerHeader.classList.add('tasks-header');
  const taskContainerHeaderText = document.createElement('h3');
  taskContainerHeaderText.innerText = `${name}`;
  taskContainerHeader.appendChild(taskContainerHeaderText);
  const plusSign = document.createElement('h1');
  plusSign.classList.add('add', 'tooltip');
  plusSign.innerText = '+';
  const toolTipText = document.createElement('span');
  toolTipText.classList.add('tooltiptext');
  toolTipText.innerText = 'Add a new task';
  plusSign.appendChild(toolTipText);
  taskContainerHeader.appendChild(plusSign);
  return taskContainerHeader;
}


//This is to try building a new container
export function buildTaskItemsContainer() {
  const taskItemsContainer = document.createElement('div');
  taskItemsContainer.classList.add
}

export function buildTaskItem(title, date, priority) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', 'task-item');
  const taskItemTitle = document.createElement('label');
  taskItemTitle.setAttribute('for', 'task-item');
  taskItemTitle.innerText = title;
  const taskDate = document.createElement('p');
  taskDate.innerText = date;
  const taskPriority = document.createElement('p');
  taskPriority.classList.add(priority, 'priority');
  taskPriority.innerText = priority;
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('delete', 'tooltip');
  const deleteButtonImage = document.createElement('img');
  deleteButtonImage.src = './trash-small.png';
  const toolTipText = document.createElement('span');
  toolTipText.classList.add('tooltiptext');
  toolTipText.innerText = 'Delete this task';
  deleteButton.appendChild(deleteButtonImage);
  deleteButton.appendChild(toolTipText);
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskItemTitle);
  taskItem.appendChild(taskDate);
  taskItem.appendChild(taskPriority);
  taskItem.appendChild(deleteButton);
  return taskItem;
}

//Need to figure out how to append each task to the task container
//I would like to not rebuild the header every time, but there may be no way around that
//Will have to build another container
//For right now, I'll just rebuild the header unnecessarily because I'm stupid

export function displayTasks(taskContainer, projectName) {
  taskList.forEach((task) => {
    taskContainer.appendChild(buildTaskItem(task.title, task.date, task.priority));
  });
}

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