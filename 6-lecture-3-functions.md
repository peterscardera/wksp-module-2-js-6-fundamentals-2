# 2.6.3 - JS More Fundamentals - Functions

---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---

## Function Parameters and Arguments

---

### A parameter

is a variable in function, or method, definition.

```js
// Example
function greeting(names) {
names.forEach(function(name) {
    console.log(`${names}` want some bacon?) //we cannot do return as it doesnt return a new array the forEach
})
return `${}`! want some bacon?;
}

greeting(["peter", "bob", "claire])

function greeting(names) {
names.map(function(name) {
    return `${names}` want some bacon? //we cannot do return as it doesnt return a new array the forEach
})
return `${}`! want some bacon?;
}

greeting(["peter", "bob", "claire])

***WE WOULD HAVE TO DO BELOW***

function greeting(names) {
return names.forEach(function(name) {
    return `${names}` want some bacon? //we cannot do return as it doesnt return a new array the forEach
})
return `${}`! want some bacon?;
}

console.log(greeting(["peter", "bob", "claire]))
```


---

### An argument

is the value given to the parameter when a function, or method is called.

```js
// Example

```

---

What is the output of this function?

```js
function f() {
    console.log("hello");
}

f("bye"); it will STILL CONSOLE.log HELLO
```

---

--> Extra arguments are ignored.

---

### Extra arguments vs missing arguments

- Calling a function with extra arguments
    - Never useful
    - Usually an indication of a bug
- Calling a function with fewer arguments
    - Sometimes useful
    - But could also be a mistake

---

### _Defining_ a function

This is how we have been _defining_ (and declaring) functions up-to-now

```js
function someFunc() {
    // do something...
}
```

--- 

There are 2 other ways to _define_ a function

```js
THIS IS A FUNCTION EXPRESSION ITS NOT IN MEMORY UNTIL PROGRAM REACHES THAT POINT

const someFunc = function() {
    // do something...
}
```

This will _define_ a function expression.

⚠️ **Function expressions are NOT hoisted.**

---

The third way is an arrow function

```js
someFunc = () => {
    // do something...
}
```

This is equivalent to the previous way of _defining_ a function. 

⚠️ **It is NOT hoisted either.**

---

As of now, you are free to use the syntax you wish.

I will let you know when to _not_ use a particular syntax.

---

## What a function `returns`

```js
// Example
someFunc = () => {
    return 'bacon';
    return 'd' // this will never get reached as well
    ANYTHING UNDER RETURN GETS IGNORED
}

console.log(someFunc());
```

`return` is the end of the line...





---

Functions are a Fundamental building block of JavaScript.

Functions _encapsulate_ a particular task.

---