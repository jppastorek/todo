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
    console.log("task list");
    console.log(this.taskList);
    this.storeTask(task);
    console.log("local storage");
    console.log(localStorage);
  }

  deleteTask(itemIndex) {
    this.taskList.splice(itemIndex, 1);
    this.removeTaskFromStorage(`task${itemIndex}`);
    console.log("task list");
    console.log(this.taskList);
    console.log("local storage");
    console.log(localStorage);
  }

  storeTask(task) {
    const taskJSON = JSON.stringify(task);
    localStorage.setItem(`task${this.taskList.length - 1}`, taskJSON);
  }

  removeTaskFromStorage(task) {
    localStorage.removeItem(task);
    //this will not when you remove them out of order because their names task1 etc will not line up with their index in the storage
    //or maybe not??? it is working so far...!!!
  }

  populateTaskList() {
    if (localStorage.length > 0) {
      const values = Object.values(localStorage);
      values.forEach((value) => {
        this.taskList.push(JSON.parse(value));
      });
    }
    console.log(this.taskList);
  }
}
