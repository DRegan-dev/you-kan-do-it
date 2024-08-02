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
        console.log("Element 'new-task-input' not found")
        return;
    }

    const addTaskContainer = newTaskInput.closest('.board-one-kanban-column, .board-two-kanban-column, .board-three-kanban-column')
    if (!addTaskContainer) {
        console.log('No active task container found.')
        return;
    }

    newTaskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            const taskValue = event.target.value.trim();
            if (!taskValue) {
                console.log("Empty task connot be added.")
                return;
            }
            const newTask = document.createElement('p');
            newTask.classList.add("task");
            newTask.innerText = taskValue;
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
    kanbanBoard.innerHTML = '<div class="board-two-kanban-column" id="board-two-todo"><h2 class="to-do-list">To Do</h2> <input type="text" placeholder="Enter Task here" id="new-task-input"/> </div> <div class="board-two-kanban-column"><h2 class = "done-list">Done</h2></div>';
    document.getElementById('boardcontainer').style.display = 'flex';
    document.getElementById('boardcontainer').innerHTML = '';
    document.getElementById('boardcontainer').appendChild(kanbanBoard);
    enableNewTask()
});

document.getElementById('size-three').addEventListener('click', function() {
    console.log("Clicked size three");
    
    const kanbanBoard = document.createElement('div');
    kanbanBoard.id = 'kanban-board-three';
    kanbanBoard.innerHTML = '<div class="board-three-kanban-column" id="board-three-todo"> <h2 class="to-do-list">To Do</h2> <input type="text" placeholder="Enter Task here" id="new-task-input"/> </div> <div class="board-three-kanban-column"><h2 class = "in-progess-list">In Progress</h2></div> <div class="board-three-kanban-column"><h2 class="done-list">Done</h2></div>';
    document.getElementById('boardcontainer').style.display = 'flex';
    document.getElementById('boardcontainer').innerHTML = '';
    document.getElementById('boardcontainer').appendChild(kanbanBoard);
    enableNewTask()
});


