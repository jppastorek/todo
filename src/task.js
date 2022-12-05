//MODEL LAYER
export default class Task {
  constructor(title, dueDate, priority, isDone) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
    return this.title;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
    return this.priority;
  }

  getStatus() {
    return this.isDone;
  }

  setStatus() {
    this.isDone = !this.isDone;
    return this.isDone;
  }
}

