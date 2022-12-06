import Task from "./task.js";
import format from "date-fns/format";
export default class Controller {
    constructor() {
      this.taskList = [];
    }
  
    addTask(title, dueDate, priority) {
      const task = new Task(title, format(new Date(dueDate), 'MM/dd/yyyy'), priority, false)
      this.taskList.push(task);
      console.log(this.taskList);
    }
  
    deleteTask(item) {
      this.taskList.splice(item, 1);
      console.log(this.taskList);
    }

  }
  