//MODEL LAYER
export class Task {
  constructor(title, dueDate, priority, state) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.state = state;
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

  getState() {
    return this.state;
  }

  setState() {
    this.state = !this.state;
    return this.state;
  }
}

export const taskList = [];



