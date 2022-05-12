export class ToDoClass {
    constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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

    addTodo = function (ToDo) {
        this.todos.push(ToDo)
    }
}

