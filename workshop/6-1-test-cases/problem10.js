let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {

  let splittedString = str.split(" ") //as it must be in array to use the array methods
  let answer = [];
  
  for(let i = 0;i < splittedString.length; i++) {
      let capitalMaker = splittedString[i].charAt(0).toUpperCase() + splittedString[i].slice(1).toLowerCase();
      answer.push(capitalMaker)
      
  }
  return answer.join(" ")
  
  
}

// Test cases
let inputs = ["HELLO THIS IS A TEST","lets see if it works", "HeLLO WoRlD", "DeBUGGER","LAST TesT"];
let outputs = ["Hello This Is A Test","Lets See If It Works", "Hello World","Debugger","Last Test"];

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
