import {Task, taskList} from './task.js';
import { createTaskForm, buildPage, buildHeader } from './ui.js';
import { saveTask, deleteTask } from './controller.js';
import { format, compareAsc } from 'date-fns';
import './styles.css';

buildPage();

//This is just used to make sure the objects worked and dates formatted properly
// taskList.push(new Task('task1','test', format(new Date(2022, 10, 29), 'MM/dd/yyyy'), 'high', false));
// taskList.push(new Task('task2','test2', format(new Date(2022, 11, 29), 'MM/dd/yyyy'), 'low', false));
// console.log(taskList);