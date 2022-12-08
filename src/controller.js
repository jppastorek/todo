import Task from "./task.js";
import format from "date-fns/format";
export default class Controller {
  constructor() {
    this.taskList = [];
  }

  addTask(title, dueDate, priority) {
    const task = new Task(
      title,
      format(new Date(dueDate), "MM/dd/yyyy"),
      priority,
      false
    );
    this.taskList.push(task);
    this.storeTask(task);
  }

  deleteTask(itemIndex) {
    this.taskList.splice(itemIndex, 1);
    this.removeTaskFromStorage(`task${itemIndex}`);
  }

  storeTask(task) {
    const taskJSON = JSON.stringify(task);
    localStorage.setItem(`task${this.taskList.length - 1}`, taskJSON);
  }

  removeTaskFromStorage(task) {
    localStorage.removeItem(task);
  }

  populateTaskList() {
    if (localStorage.length > 0) {
      const values = Object.values(localStorage);
      values.forEach((value) => {
        this.taskList.push(JSON.parse(value));
      });
    }
  }
}
