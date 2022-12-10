import Task from "./task.js";
import format from "date-fns/format";

export default class Controller {
  constructor() {
    this.taskList = [];
  }

  addTask(title, dueDate, priority) {
    const task = new Task(
      title,
      dueDate,
      priority,
      false
    );
    this.taskList.push(task);
    this.updateStorage();
  }

  deleteTask(itemIndex) {
    this.taskList.splice(itemIndex, 1);
    this.updateStorage();
  }

  updateStorage() {
    const taskJSON = JSON.stringify(this.taskList);
    localStorage.setItem('taskList', taskJSON);
  }

  populateTaskList() {
    if (localStorage.length > 0) {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
    }
  }
}
