import Task from "./task.js";
import format from "date-fns/format";

export default class Controller {
  constructor() {
    this.taskList = [];
  }

  addTask(project, title, dueDate, priority) {
    const task = new Task(
      project,
      title,
      dueDate,
      priority,
      false
    );
    this.taskList.push(task);
    this.updateStorage();
    console.log(this.taskList);
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
