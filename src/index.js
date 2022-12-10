import Controller from './controller.js';
import View from './view.js';
import './styles.css';

const controller = new Controller();
const view = new View(controller, document.body);
view.buildPage();
