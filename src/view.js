import Icon from "./images/trash-small.png";

export default class View {
  constructor(controller, containerElement) {
    this.controller = controller;
    this.containerElement = containerElement;
  }

  buildPage() {
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    this.containerElement.appendChild(content);
    content.appendChild(this.buildHeader());
    content.appendChild(this.buildProjectContainer());
    content.appendChild(this.buildTaskContainer());
    content.appendChild(this.buildFooter());
    const modal = this.buildModal();
    const modalContent = this.buildModalContent();
    modalContent.appendChild(this.buildTaskForm());
    modal.appendChild(modalContent);
    content.appendChild(modal);
    content.appendChild(this.buildModalOverlay());
  }

  buildHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    const a = document.createElement("a");
    const h1 = document.createElement("h1");
    h1.innerText = "Timely";
    a.setAttribute("href", "");
    a.appendChild(h1);
    header.appendChild(a);
    return header;
  }

  buildProjectContainer() {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.append(this.buildProjectItem("Inbox"));
    projectContainer.append(this.buildProjectItem("Today"));
    projectContainer.append(this.buildProjectItem("Tomorrow"));
    return projectContainer;
  }

  buildProjectItem(name) {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${name}`;
    projectItem.append(projectTitle);
    return projectItem;
  }

  buildTaskContainer() {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    taskContainer.appendChild(this.buildTaskContainerHeader("Inbox"));
    // displayTasks(taskContainer);
    return taskContainer;
  }

  buildTaskContainerHeader(name) {
    const taskContainerHeader = document.createElement("div");
    taskContainerHeader.classList.add("tasks-header");
    const taskContainerHeaderText = document.createElement("h3");
    taskContainerHeaderText.innerText = `${name}`;
    taskContainerHeader.appendChild(taskContainerHeaderText);
    const plusSign = document.createElement("h1");
    plusSign.classList.add("add", "tooltip");
    plusSign.innerText = "+";
    const toolTipText = document.createElement("span");
    toolTipText.classList.add("tooltiptext");
    toolTipText.innerText = "Add a new task";
    plusSign.appendChild(toolTipText);
    plusSign.addEventListener("click", () => {
      this.displayTaskForm();
    });
    taskContainerHeader.appendChild(plusSign);
    return taskContainerHeader;
  }

  displayTaskForm() {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    modal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  }

  hideTaskForm() {
    const modal = document.getElementById("modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    modal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  }

  buildTaskItem(title, date, priority) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("checkbox-container");
    const checkbox = document.createElement("input");
    checkbox.classList.add("checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "task-item");
    const taskItemTitleDiv = document.createElement("div");
    taskItemTitleDiv.classList.add("title-container");
    const taskItemTitle = document.createElement("label");
    taskItemTitle.setAttribute("for", "task-item");
    taskItemTitle.innerText = title;
    const taskDateDiv = document.createElement("div");
    taskDateDiv.classList.add("date-container");
    const taskDate = document.createElement("p");
    taskDate.innerText = date;
    const taskPriorityDiv = document.createElement("div");
    taskPriorityDiv.classList.add("priority")
    const taskPriority = document.createElement("p");
    taskPriority.classList.add(priority, "priority");
    taskPriority.innerText = priority;
    const deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.classList.add("delete-container");
    const deleteButton = document.createElement("span");
    deleteButton.classList.add("delete", "tooltip-delete");
    const deleteButtonImage = new Image();
    deleteButtonImage.src = Icon;
    const toolTipText = document.createElement("span");
    toolTipText.classList.add("tooltiptext-delete");
    toolTipText.innerText = "Delete this task";
    deleteButton.appendChild(deleteButtonImage);
    deleteButton.appendChild(toolTipText);
    deleteButton.addEventListener("click", () => {
      this.deleteTask(taskItem);
    });
    checkboxDiv.appendChild(checkbox);
    taskItemTitleDiv.appendChild(taskItemTitle);
    taskDateDiv.appendChild(taskDate);
    taskPriorityDiv.appendChild(taskPriority);
    deleteButtonDiv.appendChild(deleteButton);
    taskItem.appendChild(checkboxDiv);
    taskItem.appendChild(taskItemTitleDiv);
    taskItem.appendChild(taskDateDiv);
    taskItem.appendChild(taskPriorityDiv);
    taskItem.appendChild(deleteButtonDiv);
    taskItem.setAttribute("data", this.controller.taskList.length - 1);
    return taskItem;
  }

  displayNewTask() {
    const taskContainer = document.querySelector(".task-container");
    const taskList = this.controller.taskList;
    const lastTaskItem = taskList[taskList.length - 1];
    taskContainer.appendChild(
      this.buildTaskItem(
        lastTaskItem.title,
        lastTaskItem.dueDate,
        lastTaskItem.priority
      )
    );
  }

  taskViews = [];

  saveTask(title, date, priority) {
    this.controller.addTask(title, date, priority);
  }

  deleteTask(item) {
    if (confirm("Are you sure you want to delete this item?") === true) {
      this.controller.deleteTask(item.getAttribute("data"));
      const taskContainer = document.querySelector(".task-container");
      taskContainer.removeChild(item);
    }
  }

  buildModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal", "hidden");
    modal.setAttribute("id", "modal");
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    return modal;
  }

  buildModalContent() {
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    return modalContent;
  }

  buildModalOverlay() {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay", "hidden");
    modalOverlay.addEventListener("click", () => {
      this.hideTaskForm();
    });
    return modalOverlay;
  }

  buildTaskForm() {
    const form = document.createElement("div");
    form.classList.add("form");
    //title input
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("for", "title");
    titleInput.setAttribute("placeholder", "New task");
    titleInput.setAttribute("maxlength", "15");
    titleInput.required = true;
    //new row
    const formRow = document.createElement("div");
    formRow.classList.add("form-row");
    //date input
    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "due-date");
    dateInput.setAttribute("name", "due-date");
    //priority dropdown
    const priorityDropdown = document.createElement("select");
    priorityDropdown.setAttribute("id", "priority");
    priorityDropdown.setAttribute("name", "priority");
    const normalPriorityOption = document.createElement("option");
    normalPriorityOption.setAttribute("value", "normal");
    normalPriorityOption.innerText = "normal";
    const highPriorityOption = document.createElement("option");
    highPriorityOption.setAttribute("value", "high");
    highPriorityOption.innerText = "high";
    priorityDropdown.appendChild(normalPriorityOption);
    priorityDropdown.appendChild(highPriorityOption);
    //save row
    const saveRow = document.createElement("div");
    saveRow.classList.add("save-row");
    //cancel button
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
      this.hideTaskForm();
    });
    //save button
    const saveButton = document.createElement("button");
    saveButton.classList.add("save");
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", () => {
      if (!dateInput.value) {
        alert('Choose a date');
      }
      else {
        this.saveTask(titleInput.value, dateInput.value, priorityDropdown.value);
        this.hideTaskForm();
        this.displayNewTask();
      }
      
    });
    form.appendChild(titleInput);
    form.appendChild(formRow);
    formRow.appendChild(dateInput);
    formRow.appendChild(priorityDropdown);
    form.appendChild(saveRow);
    saveRow.appendChild(cancelButton);
    saveRow.appendChild(saveButton);
    return form;
  }

  buildFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const a = document.createElement("a");
    a.innerText = "jppastorek.com";
    a.setAttribute("href", "");
    footer.appendChild(a);
    return footer;
  }
}
