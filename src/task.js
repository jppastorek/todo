export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setTitle(newTitle) {
        this.title = newTitle;
        return this.title;
    }
  
    setDescription(newDescription) {
      this.description = newDescription;
      return this.description;
    }
  
  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
    return this.dueDate;
  }
  
  setPriority(newPriority) {
    this.priority = newPriority;
    return this.priority;
  }
}