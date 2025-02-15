const Firstchild = new TaskManager();
Firstchild.load();
Firstchild.render();

const validFormValidInput = () => {
    

    const tasks = document.querySelector('#task');
    let getTasks = tasks.value;

    const descriptions = document.querySelector('#description');
    let getDescriptions = descriptions.value;

    const users = document.querySelector('#user');
    let getUsers = users.value;

    const duedates = document.querySelector('#duedate');
    let getDuedates = duedates.value;
    
    if(getTasks === "" || getDescriptions === "" || getUsers === "" || getDuedates === "") {
        alert("Please check for valid input :)");
        return;      
    }
    
//Event Listener/Handler for new task creation using addTask method from our TaskManager Superclass
submitbuttonEL.addEventListener('click', Firstchild.addTask(getTasks, getDescriptions, getUsers, getDuedates));
submitbuttonEL.addEventListener('click', Firstchild.render(getTasks, getDescriptions, getUsers, getDuedates));
Firstchild.save();

getTasks = "";
getDescriptions = "";
getUsers = "";
getDuedates = "";
}



//Event Target Retrieval
const submitbuttonEL = document.getElementById('submitbutton');
//Event Listener/Handler for Validation Form
submitbuttonEL.addEventListener('click', validFormValidInput);

//Mark as Done Button Functionality
//Get Event Target - our ul with id task-list
const taskListEl = document.querySelector('#task-list');

//Add Event Listener
taskListEl.addEventListener('click', (event) => {
    //Variable to hold array of tasks that have Mark as Done clicked
    if(event.target.classList.contains('done-button')) {
        let parentTask = event.target.parentNode.parentNode;
        const taskId = Number(parentTask.dataset.taskId);
        const task = Firstchild.getTaskById(taskId);
        task.taskStatus = "DONE";
        Firstchild.save();
        Firstchild.render();
    }
    if(event.target.classList.contains('delete-button')) {
        let parentTask = event.target.parentNode.parentNode;
        const taskId = Number(parentTask.dataset.taskId);
        Firstchild.delete(taskId);
        Firstchild.save();
        Firstchild.render();
    }
});

