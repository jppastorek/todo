export class Task {
    constructor(title, description, dueDate, priority, completed) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
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

  setCompleted() {
    this.completed = true;
    return this.completed
  }
}

export const taskList = [];

export function createTaskForm(taskContainer) {
  //header
  const header = document.createElement('h4');
  header.classList.add('header');
  header.innerText = 'Create a New Task';
  //form
  const form = document.createElement('form');
  form.classList.add('form');
  //title label
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.innerText = 'Task Name:';
  //title input
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('for', 'title');
  //description label
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.innerText = 'Description:';
  //description input
  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'textarea');
  descriptionInput.setAttribute('id', 'description');
  descriptionInput.setAttribute('for', 'description');
  //high priority checkbox
  const priorityCheckbox = document.createElement('input');
  priorityCheckbox.setAttribute('type', 'checkbox');
  priorityCheckbox.setAttribute('id', 'priority');
  priorityCheckbox.setAttribute('name', 'priority');
  priorityCheckbox.setAttribute('value', 'high-priority');
  //high priority checkbox label
  const priorityCheckboxLabel = document.createElement('label');
  priorityCheckboxLabel.setAttribute('for', 'priority');
  priorityCheckboxLabel.innerText = 'High Priority';
  //save button
  const saveButton = document.createElement('button');
  saveButton.classList.add('save-button');
  saveButton.setAttribute('type', 'button');
  saveButton.setAttribute('value', 'Save');
  saveButton.innerText = 'Save';
  saveButton.addEventListener('click', saveTask());

  //create a list of all form elements
  const formElements = [titleLabel, titleInput, descriptionLabel, descriptionInput, priorityCheckbox, priorityCheckboxLabel, saveButton]

  //build it
  taskContainer.innerHTML = '';
  taskContainer.appendChild(header);
  taskContainer.appendChild(form);
  formElements.forEach(element => form.appendChild(element));
}

export function saveTask() {
  console.log('Task saved.');
  // taskList.push(new Task(titleInput.value, descriptionInput.value, 'date', priorityCheckbox.value, false));
}