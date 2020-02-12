let verifyEquals = require('../../assets/verify-equals');

// Problem 5
// ---------
// Step 1
// Write a function that accepts an array of two values and returns those two numbers. 
// - The input of the function is an array.
// - If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.



   function f(input) {
if( input.length !== 2 || typeof input[0] !== "number" ||typeof  input[1] !== "number") {
return undefined;
} else {
return input[0] * input[1];

    }
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 7],[2, 2],[3, 3],[4, 4],[5, 5] ];
let outputs = [14,4,9,16,25];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
