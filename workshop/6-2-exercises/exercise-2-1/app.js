// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'

//board global variables

const BOARD_SIZE = 900;
const COLUMNS = 4;
const ROWS = 4;
const TOTAL_CELLS = `${ROWS*COLUMNS}`


//setting the board container a size
let board = document.getElementById("board");
board.style.width = `${BOARD_SIZE}px`
board.style.height = `${BOARD_SIZE}px`


//cell maker - for loop (just horizontal div's until I display grid it)
for (let i=0; i < TOTAL_CELLS;i++) {
let cells = document.createElement("div");
board.appendChild(cells)
cells.classList.add("cell")
cells.id = `cell-${i}`
}

//grid display
board.style.display = "grid";
board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;// 4x 1fr basically
board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`;
