console.log("Hello World!")
document.getElementById('size-one'),addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Clicked size one");
    createBoard(1);
});

document.getElementById('size-two'),addEventListener('click', function() {
    console.log("Clicked size two");
    createBoard(2);
});

document.getElementById('size-three'),addEventListener('click', function() {
    console.log("Clicked size three");
    createBoard(3);
});

document.getElementById('size-four'),addEventListener('click', function() {
    console.log("Clicked size four");
    createBoard(4);
});

document.getElementById('size-five'),addEventListener('click', function() {
    console.log("Clicked size five");
    createBoard(5);
});

function createBoard(numColumns) {
    const boardContainer = document.getElementById('boardcontainer');
    // boardContainer.innerHTML = '';
    console.log("Hello World!");
    const board = document.createElement('div');
    board.className = "kanban-board";
    console.log("Hello World!")
    for (let i = 0; i < numColumns; i++) {
        const column = document.createElement('div');
        column.className = "kanban-column";
        const addButton = document.createElement('button');
        addButton.className = "add-task-btn";
        addButton.onclick = function() {
            addTask(column.id);
        };
        column.appendChild(addButton);
        board.appendChild(column);
    }
    console.log("Hello World!")
}