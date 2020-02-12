let verifyEquals = require('../../assets/verify-equals.js');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {

    if(arr.length === 0) {
        return 0;
    }
    
    let answer = arr.reduce(function(acc, val) {
       if(typeof val === "number") {
           return  acc + val;
       } else {
           return acc
       }
    },0)
    return answer
}

// Test cases
let inputs = [[1,2],[],[2,2],[3,2],[7,7]];
let outputs = [3,0,4,5,14];

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
