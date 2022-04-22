let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputfield');
let button = document.getElementById('submitBtn');

button.addEventListener('click', function () {
    let task = document.createElement('p');
    task.classList.add('task');
    task.innerText = inputField.value;
    toDoContainer.appendChild(task);
    inputField.preventDefault();
})


function removeTask() {
    toDoContainer.removeChild(task);
}

/// ** task.addEventListener('click', lineThrough);
task.addEventListener('dblclick', removeTask);
