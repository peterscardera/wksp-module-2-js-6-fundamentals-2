// Exercise 2.2 - the Custom Grid
// ------------
// Use the grid code you wrote in 2.1
// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid
// Hints
// - use the 'blur' event
// - one event listener per input
// If you need extra hints, see somebody... :)
//board global variables

const BOARD_SIZE = 900;
//declare the data on the inputs globally but no need to assign as the row and column handler will take care of that below
let infoColumn;
let infoRow;


//setting the board container a size
let board = document.getElementById("board");
board.style.width = `${BOARD_SIZE}px`
board.style.height = `${BOARD_SIZE}px`

//function that creates cells
function cellMaker() { 
 
    for(let i = 0; i < infoColumn*infoRow; i++){
        let cells = document.createElement("div");
        board.appendChild(cells)
        cells.id =`cell-${i}`
        cells.classList.add('cell');
        board.appendChild(cells);
    }

//styling on the main container which is the 'board' variable to turn the horizontal div into cells
            board.style.display = "grid";
            board.style.gridTemplateRows = `repeat(${infoRow}, 1fr)`;
            board.style.gridTemplateColumns = `repeat(${infoColumn}, 1fr)`;
}

    //mainHandler receives both values from row & column input
    function rowHandler(event){
         infoRow = event.target.value;
        cellMaker()
    }

    function columnHandler(event) {
         infoColumn = event.target.value;
        cellMaker()    
    }



//EventListener for both inputs firing off too each handler
let rInput = document.getElementById("rows-input");
rInput.addEventListener("blur",rowHandler)
let cInput = document.getElementById("columns-input")
cInput.addEventListener("blur",columnHandler)