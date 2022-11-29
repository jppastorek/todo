import {Task, taskList} from './task.js';
import { createTaskForm } from './ui.js';
import { saveTask, deleteTask } from './controller.js';
import { format, compareAsc } from 'date-fns';
import './styles.css';

const body = document.body;
const content = document.createElement('div');
content.setAttribute('id', 'content');
body.appendChild(content);

const taskContainer = document.createElement('div');
taskContainer.classList.add('task-container');
content.appendChild(taskContainer);
taskContainer.innerText = 'Add task';
const newTaskButton = document.createElement('div');
newTaskButton.classList.add('add-button');
newTaskButton.innerText = 'Add task';
newTaskButton.addEventListener('click', () => {
    createTaskForm(taskContainer)
});
taskContainer.appendChild(newTaskButton);

//This is just used to make sure the objects worked and dates formatted properly
// taskList.push(new Task('task1','test', format(new Date(2022, 10, 29), 'MM/dd/yyyy'), 'high', false));
// taskList.push(new Task('task2','test2', format(new Date(2022, 11, 29), 'MM/dd/yyyy'), 'low', false));
// console.log(taskList);