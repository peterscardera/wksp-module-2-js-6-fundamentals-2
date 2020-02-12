// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

//first we grab the main button container


let buttons = document.querySelector("#btn-list");
buttons.addEventListener("click",mainHandler);

function mainHandler(event) {
    buttonId = event.target.id;
    let specificButton = document.getElementById(buttonId)
    switch(buttonId) {
        case "btn-1":
            specificButton.style.opacity = "100" ? "0":"100";
            break;
        case "btn-2":
            togglerF(buttonId,"crimson");
            break;
        case "btn-3":
            togglerF(buttonId, "lightblue");
        case "btn-4":
            specificButton.classList.toggle("jitters");
            break;
        default:
            break;
            
    }   
}
//for loop setting defaults
for (let id = 1; id < 5; id++)  {
    let defaultButton = document.getElementById(`btn-${id}`);
    defaultButton.style.opacity ="100";
    defaultButton.style.backgroundColor = "gold"
}

function togglerF(id,color) {
  let individualB = document.getElementById(id)
  let backGroundCol = individualB.style.backgroundColor;
  individualB.style.backgroundColor = backGroundCol === 'gold' ? color : 'gold';
}