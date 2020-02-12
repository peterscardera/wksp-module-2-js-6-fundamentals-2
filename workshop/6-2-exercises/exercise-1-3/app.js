// Exercise 1.3
// ----------

// STEP 1
// Reimplement the functionality of 1.1 and 1.2
// - button one disappears
// - button two turns 'crimson'
// - button three turns 'lightblue'
// - button four starts shaking... (animation provided in styles.css)
// - This time the buttons should toggle.
// - Meaning if the user clicks on them a second time, it should go back to initial state.
// - initial button color is 'gold'
// - initial opacity is '100'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// STEP 2
// The new RESET button should reset all of the buttons to their original state.

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let mainButtonListener = document.getElementById("btn-list");
mainButtonListener.addEventListener("click",buttonHandler)

//default appearances 
function resetButtonHandler() {
    for (let id = 1; id < 5; id++){
        let defaultB = document.getElementById(`btn-${id}`)
        defaultB.style.opacity = "100";
        defaultB.style.backgroundColor = "gold"
    
    if(defaultB.classList.length > 0) {   //ASK TA ABOUT WHY Scott had id  if (id === 4 && (initButton.classList.length > 0)) 
        defaultB.classList.remove("jitters")
    }
    }
}
//ASK TA ABOUT WHY SCOTT HAD resetButtonHandler() here

function buttonHandler(event) {
    let buttonId = event.target.id
    let eachButton = document.getElementById(buttonId)
    switch(buttonId) {
        case "btn-1":
            eachButton.style.opacity = "100" ? "0" : "100"
            break;
        case "btn-2":
            togglerF(buttonId, "crimson");
            break;
        case "btn-3":
            togglerF(buttonId,"lightblue");
            break;
        case "btn-4":
            eachButton.classList.toggle("jitters");
            break;
        case "reset":
            resetButtonHandler();
        default:
            break;

    }
}

function togglerF(id,color) {
    let button = document.getElementById(id);
    let defaultB = button.style.backgroundColor
    button.style.backgroundColor = defaultB === "gold" ? color : "gold"
}