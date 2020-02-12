// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));

// 9 -> 3-10 = 2 , 2*2 =4 , 4-1 =3, 3*3 = 9

// Q2
decrement(decrement(square(square(3))));

//79 ->  3*3 = 9, 9*8 = 81, 81-1=80, 80-1 = 79

// Q3
duplicateString(reverseString("hello"));

//1 splits all the letters h e l l o in an array
//2 reverse all the letter in the array o l l e h
//3 joins all the letters to make olleh
//4 the duplicate function concatenates the same result of reverse string to ==> olleholleh

// Q4
reverseString(duplicateString(duplicateString("foo")));


//1 foofoo
//2 foofoofoofoo
//3 oofoofoofoof

