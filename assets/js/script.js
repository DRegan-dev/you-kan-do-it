console.log("Hello World!")
document.getElementById('size-one').addEventListener('click', function() {
    console.log("Clicked size one");
    if (true) {
        const kanbanBoard = document.createElement('div');
        kanbanBoard.id = 'kanban-board-one';
        kanbanBoard.innerHTML = '<div class="board-one-kanban-column"><h2 id="Reminders">Reminders</h2></div>';
        document.getElementById('boardcontainer').style.display = 'flex';
        document.getElementById('boardcontainer').innerHTML = '';
        document.getElementById('boardcontainer').appendChild(kanbanBoard);
    } else {
        console.log("The board size has not been selected.")
    }
});

document.getElementById('size-two').addEventListener('click', function() {
    console.log("Clicked size two");
    if (true) {
        const kanbanBoard = document.createElement('div');
        kanbanBoard.id = 'kanban-board-two';
        kanbanBoard.innerHTML = '<div class="board-two-kanban-column"><h2 class="to-do-list">To Do</h2></div> <div class="board-two-kanban-column"><h2 class = "done-list">Done</h2></div>';
        document.getElementById('boardcontainer').style.display = 'flex';
        document.getElementById('boardcontainer').innerHTML = '';
        document.getElementById('boardcontainer').appendChild(kanbanBoard);
    } else {
        console.log("The board size has not been selected.")
    }
});

document.getElementById('size-three').addEventListener('click', function() {
    console.log("Clicked size three");
    if (true) {
        const kanbanBoard = document.createElement('div');
            kanbanBoard.id = 'kanban-board-three';
            kanbanBoard.innerHTML = '<div class="board-three-kanban-column"><h2 class="to-do-list">To Do</h2></div> <div class="board-three-kanban-column"><h2 class = "in-progess-list">In Progress</h2></div> <div class="board-three-kanban-column"><h2 class="done-list">Done</h2></div>';
            document.getElementById('boardcontainer').style.display = 'flex';
            document.getElementById('boardcontainer').innerHTML = '';
            document.getElementById('boardcontainer').appendChild(kanbanBoard);
    } else {
        console.log("The board size has not been selected.")
    }
});

document.getElementById('size-four').addEventListener('click', function() {
    console.log("Clicked size four");
    if (true) {
        const kanbanBoard = document.createElement('div');
            kanbanBoard.id = 'kanban-board-four';
            kanbanBoard.innerHTML = '<div class="board-four-kanban-column">Kanban Column</div> <div class="board-four-kanban-column">Kanban Column 2</div> <div class="board-four-kanban-column">Kanban Column 3</div> <div class="board-four-kanban-column">Kanban Column 4</div>';
            document.getElementById('boardcontainer').style.display = 'flex';
            document.getElementById('boardcontainer').innerHTML = '';
            document.getElementById('boardcontainer').appendChild(kanbanBoard);
    } else {
        console.log("The board size has not been selected.")
    }
});

document.getElementById('size-five').addEventListener('click', function() {
    console.log("Clicked size five");
    if (true) {
        const kanbanBoard = document.createElement('div');
            kanbanBoard.id = 'kanban-board-five';
            kanbanBoard.innerHTML = '<div class="board-five-kanban-column">Kanban Column</div> <div class="board-five-kanban-column">Kanban Column 2</div> <div class="board-five-kanban-column">Kanban Column 3</div> <div class="board-five-kanban-column">Kanban Column 4</div> <div class="board-five-kanban-column">Kanban Column 5</div>';
            document.getElementById('boardcontainer').style.display = 'flex';
            document.getElementById('boardcontainer').innerHTML = '';
            document.getElementById('boardcontainer').appendChild(kanbanBoard);
    } else {
        console.log("The board size has not been selected.")
    }
});


// function createBoard(numColumns) {
//     const boardContainer = document.getElementById('boardcontainer');
//     // boardContainer.innerHTML = '';
//     console.log("Hello World!");
//     const board = document.createElement('div');
//     board.className = "kanban-board";
//     console.log("Hello World!")
//     for (let i = 0; i < numColumns; i++) {
//         const column = document.createElement('div');
//         column.className = "kanban-column";
//         const addButton = document.createElement('button');
//         addButton.className = "add-task-btn";
//         addButton.onclick = function() {
//             addTask(column.id);
//         };
//         column.appendChild(addButton);
//         board.appendChild(column);
//     }
//     console.log("Hello World!")
// }