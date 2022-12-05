import Controller from './controller.js';
import View from './view.js';
import './styles.css';

const body = document.body;
const controller = new Controller();
const view = new View(controller, body)
view.buildPage();

//This is just used to make sure the objects worked and dates formatted properly
// taskList.push(new Task('task1','test', format(new Date(2022, 10, 29), 'MM/dd/yyyy'), 'high', false));
// taskList.push(new Task('task2','test2', format(new Date(2022, 11, 29), 'MM/dd/yyyy'), 'low', false));
// console.log(taskList);