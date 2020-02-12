// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let buttons = document.querySelector("#btn-list");

buttons.addEventListener("click",mainHandler)

function mainHandler(event) {
    let buttonId = event.target.id;
    let specificButton = document.getElementById(buttonId);
    switch (buttonId)  {
        case "btn-1":
            specificButton.style.opacity = 0;
            break;
        case "btn-2":
            specificButton.style.background = "crimson";
            break;
        case "btn-3":
            specificButton.style.background = 'lightblue';
            break;
        case "btn-4":
            specificButton.classList.add('jitters');
            break;
        default:
            break;
    }
}
