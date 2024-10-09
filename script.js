document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();  // Prevent form submission
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTaskToList(taskText);
            taskInput.value = "";  // Clear input field
        }
    }
});

function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');

    // Create a new list item for the task
    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.padding = '10px 0';
    li.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)'; // Add line between tasks

    // Create span to hold task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.style.flexGrow = '1'; // Ensures task text takes most of the space

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "&#10006;";  // Cross icon
    deleteBtn.style.marginLeft = '15px'; // Space between buttons
    deleteBtn.style.fontSize = '1.2rem';
    deleteBtn.style.backgroundColor = 'transparent';
    deleteBtn.style.border = 'none';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', function () {
        li.remove();  // Remove task from list
    });

    // Create a mark completed button
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = "&#10004;";  // Check icon
    completeBtn.style.marginLeft = '15px'; // Space between buttons
    completeBtn.style.fontSize = '1.2rem';
    completeBtn.style.backgroundColor = 'transparent';
    completeBtn.style.border = 'none';
    completeBtn.style.cursor = 'pointer';
    completeBtn.addEventListener('click', function () {
        taskSpan.style.textDecoration = "line-through";  // Mark as completed
    });

    // Append task text and buttons to list item
    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add list item to the task list
    taskList.appendChild(li);
}
