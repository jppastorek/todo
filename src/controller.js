//PART OF THE CONTROLLER

import { Task } from "./task.js";
import format from "date-fns/format";
export default class Controller {
    constructor() {
      this.taskList = [];
    }
  
    addTask(title, dueDate, priority) {
      this.taskList.push(new Task(title, format(new Date(date), 'MM/dd/yyyy'), priority, false));
    }
  
    deleteTask(taskReference) {
      //some code
    }
  }
  