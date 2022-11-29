//PART OF THE CONTROLLER

import { Task, taskList } from "./task.js";
import format from "date-fns/format";

export function saveTask(title, date, priority) {
    console.log('Task saved.');
    taskList.push(new Task(title, format(new Date(date), 'MM/dd/yyyy'), priority, false));
    console.log(taskList);
}

export function deleteTask() {
    //some code
}