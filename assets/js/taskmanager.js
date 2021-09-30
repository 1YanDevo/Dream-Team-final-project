// const { builtinModules } = require("module");

const createTaskHtml = (id, taskTitle, description, assignedTo, dueDate, taskStatus) => {
    const html = `
    <li class="list-group-item" data-task-id="${id}">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${taskTitle}</h5>
            <span class="badge badge-danger bg-primary">${taskStatus}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
            <button type="button" class="done-button">Mark as Done</button>
            <button type="button" class="delete-button">Delete</button>
        </div>
        <p>${description}</p>
    </li>
    `
    return html;
}

class TaskManager {
    constructor(tasks, currentId) {
        this.tasks= [];
        this.currentId = 0;
    }
    
    addTask(taskTitle, description, assignedTo, dueDate, taskStatus = "TODO") {
        this.tasks.push({"taskTitle": taskTitle, "description": description, "assignedTo": assignedTo, "dueDate": dueDate, "taskStatus": taskStatus, "id": this.currentId});
        this.currentId++
    }

    render() {
        clearBox();
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const firstVariable = this.tasks[i];
            const date = new Date(firstVariable.dueDate);
            date.setDate(date.getDate()+1);
            const formattedDate = date.toDateString();
            const taskHtml = createTaskHtml(firstVariable.id, firstVariable.taskTitle, firstVariable.description, firstVariable.assignedTo, formattedDate, firstVariable.taskStatus)
            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');
        const element = document.createElement('div');
        element.appendChild(document.createTextNode(createTaskHtml));
        document.getElementById('task-list').appendChild(element);
        element.innerHTML = tasksHtml;
        }

    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if(task.id === taskId) {
            foundTask = task;
            }
        }
        return foundTask;
    }

    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        const currentId = JSON.stringify(this.currentId);
        localStorage.setItem('currentId', currentId);
    }

    load() {
        const tasks = localStorage.getItem('tasks');
        this.tasks = JSON.parse(tasks);
        const currentId = localStorage.getItem('currentId');
        this.currentId = Number(currentId);
    }

    delete(taskId) {
        const newTasks = [];
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if(task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }

    }

    const clearBox = () => {
        document.getElementById('task-list').innerHTML = '';}

// module.exports = TaskManager;
