import Task from "./task.js";
import format from "date-fns/format";
export default class Controller {
    constructor() {
      this.taskList = [];
    }
  
    addTask(title, dueDate, priority) {
      this.taskList.push(new Task(title, format(new Date(dueDate), 'MM/dd/yyyy'), priority, false));
      console.log(this.taskList);
    }
  
    deleteTask(taskReference) {
      //some code
    }
  }
  