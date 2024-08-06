function selectedBoard(selectedId) {
    // const boardIds = ['size-one', 'size-two', 'size-three'];
    // boardIds.forEach(id => {
    //     document.getElementById(id).style = id === selectedId ? "border: 5px solid aquamarine" : "border: 2px solid white";
    };

// const newTaskInput = document.getElementById("new-task-input");
// newTaskInput.addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         console.log("Hello World!")
//     }
// });

function enableNewTask() {
    const newTaskInput = document.getElementById("new-task-input");
    if (!newTaskInput) {
        console.log("Element 'new-task-input' not found");
        return;
    }

    const addTaskContainer = newTaskInput.closest('.board-one-kanban-column, .board-two-kanban-column, .board-three-kanban-column');
    if (!addTaskContainer) {
        console.log('No active task container found.');
        return;
    }

    newTaskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const taskValue = event.target.value.trim();
            if (!taskValue) {
                console.log("Empty task connot be added.")
                return;
            }
            const newTask = document.createElement('div');
            newTask.classList.add("task");
            

            const taskText = document.createElement('p');
            taskText.innerText = taskValue;
            newTask.appendChild(taskText);

            const buttonContainer = document.createElement('div');
                buttonContainer.classList.add("btn-container");

            newTask.appendChild(buttonContainer);

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.classList.add("edit-btn");
            editButton.addEventListener("click", function() {
                const newText = prompt("Edit your Text: ", taskText.innerText);
                if (newText !== null && newText.trim() !== "") {
                    taskText.innerText = newText.trim();
                }
            });
            buttonContainer.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", function() {
                if (confirm("Are you sure you want to delete this task?")) {
                    newTask.remove();
                }
                
            });
            buttonContainer.appendChild(deleteButton);

            if (!addTaskContainer.classList.contains("board-one-kanban-column")) {
                const moveButton = document.createElement('button');
                moveButton.innerText = "Move";
                moveButton.classList.add("move-btn");
                moveButton.addEventListener("click", function() {
                    const currentColumn = newTask.closest(".board-two-kanban-column, .board-three-kanban-column, .in-progress-list, .done-list");
                    let nextColumn;
                    console.log(currentColumn);
                    if (currentColumn.classList.contains("board-two-kanban-column")) {
                        nextColumn = document.querySelector("#kanban-board-two .done-list");
                        if (nextColumn) {
                            nextColumn.appendChild(newTask);
                            buttonContainer.removeChild(moveButton);
                    }

                    } else if (currentColumn.classList.contains("to-do-list")) {
                        nextColumn = document.querySelector("#kanban-board-three .in-progress-list");
                        console.log("In progress");
                        if (nextColumn) {
                            nextColumn.appendChild(newTask);
                        }
                    } else if (currentColumn.classList.contains('in-progress-list')) {
                        nextColumn = document.querySelector("#kanban-board-three .done-list");
                        if (nextColumn) {
                            nextColumn.appendChild(newTask);
                            
                            buttonContainer.removeChild(moveButton);
                        }
                    } else if (currentColumn.classList.contains('done-list')) {
                        console.log("Task is already at it's final destination");
                    
                        return;
                    }

                    if (nextColumn) {
                        nextColumn.appendChild(newTask);
                    }
                });
                buttonContainer.appendChild(moveButton);
            }
            addTaskContainer.appendChild(newTask);
            newTaskInput.value = '';
            console.log(`New Task added: ${taskValue}`);
        }
    });
}




console.log("Hello World!")
document.getElementById('size-one').addEventListener('click', function() {
    console.log("Clicked size one");
    const kanbanBoard = document.createElement('div');
    kanbanBoard.id = 'kanban-board-one';
    kanbanBoard.innerHTML = '<div class="board-one-kanban-column" id="board-one-todo"><h2 id="Reminders">Reminders</h2> <input type="text" placeholder="Enter Task here" id="new-task-input"/> </div>';
    document.getElementById('boardcontainer').style.display = 'flex';
    document.getElementById('boardcontainer').innerHTML = '';
    document.getElementById('boardcontainer').appendChild(kanbanBoard);
    enableNewTask();
});

document.getElementById('size-two').addEventListener('click', function() {
    console.log("Clicked size two");

    const kanbanBoard = document.createElement('div');
    kanbanBoard.id = 'kanban-board-two';
    kanbanBoard.innerHTML = '<div class="board-two-kanban-column" id="board-two-todo"><h2 class="to-do-list">To Do</h2> <input type="text" placeholder="Enter Task here" id="new-task-input"/> </div> <div class="board-two-kanban-column done-list"><h2>Done</h2></div>';
    document.getElementById('boardcontainer').style.display = 'flex';
    document.getElementById('boardcontainer').innerHTML = '';
    document.getElementById('boardcontainer').appendChild(kanbanBoard);
    enableNewTask()
});

document.getElementById('size-three').addEventListener('click', function() {
    console.log("Clicked size three");
    
    const kanbanBoard = document.createElement('div');
    kanbanBoard.id = 'kanban-board-three';
    kanbanBoard.innerHTML = '<div class="board-three-kanban-column to-do-list" id="board-three-todo"> <h2 class="to-do-list">To Do</h2> <input type="text" placeholder="Enter Task here" id="new-task-input"/> </div> <div class="board-three-kanban-column in-progress-list"><h2>In Progress</h2></div> <div class="board-three-kanban-column done-list"><h2>Done</h2></div>';
    document.getElementById('boardcontainer').style.display = 'flex';
    document.getElementById('boardcontainer').innerHTML = '';
    document.getElementById('boardcontainer').appendChild(kanbanBoard);
    enableNewTask()
});


