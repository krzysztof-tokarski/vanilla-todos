export class ToDoClass {
    constructor(content) {
    this.content = content;
    }
}

export class ProjectClass {
    constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todos = [];
    }
}

