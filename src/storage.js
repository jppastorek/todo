import Controller from "./controller";
import View from "./view";
import Task from "./task";

export default class Storage {
  constructor() {
    this.storage;
  }
  storage = localStorage;
  storeTask(name, item) {
    storage.setItem(name, item);
  }
}
