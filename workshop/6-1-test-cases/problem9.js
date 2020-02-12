let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful

function f(str) {
    
    let maxString = "";
    let splitter = str.split(" ");
   
    for( let i = 0; i < splitter.length; i++) {
        if( maxString < splitter[i].length ) {
            maxString = splitter[i]
        }
    }
    return maxString
}

// Test cases
let inputs = ["Javascript for the win","This is","Longuest string","hello worlds again","JS aka ECMAScript"];
let outputs = ["Javascript", "This","longuest", "worlds","ECMAScript"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
