//Adding functionality to form:
//Step 1: Validating our Form Fields

function validFormFieldInput() {
//Get the values of our 4 text fields
    const newTaskNameInput = document.querySelector('#Tskname');
    const taskName = newTaskNameInput.value;

    const taskAssignedTo = document.querySelector('#assignedto');
    const personResponsible = taskAssignedTo.value;

    const dateElement = document.querySelector('#Ddate');
    const dueDate = dateElement.value;

    const textArea = document.querySelector('#subject');
    const textBox = textArea.value;

    console.log("Task Name: " + taskName);
    console.log("Task Assigned To: " + personResponsible);
    console.log("Due Date: " + dueDate);
    console.log("Description: " + textBox);
}

validFormFieldInput();