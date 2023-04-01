// SCOPE of a variable determines where this variable will be accessible

// global - variables declared outside of any function or block have global scope. This means they are accessible throughout the entire program.

// local {....} - variables declared inside a function or block have local scope. This means they are only accessible within that function or block

// VAR - it has a function-level scope


// "use strict"

var x = 10; // global
// vay y;
function printNums(){
  var y  = 5; // local (function scope)

  console.log("x inside the function: ", x);
  console.log("y inside the function: ", y)
}

// console.log(printNums())

// console.log("x outside the function: ", x); // 10
// console.log("y outside the function: ", y); // ReferenceError: y is not defined

// for(var i = 0; i < 5; i++){
//   console.log(i)
// }

// console.log("outside: ", i); // 5



// let is only accessible within the block it was declared in. A block is any section of code that is enclosed in curly braces {}.

for(let i = 0; i < 5; i++){
  // console.log(i);
}

// console.log("outside: ", i); // ReferenceError: i is not defined


// const - block-level scope, just like let. However, variables declared with const can't be reassigned a new value once they have been initialized. This makes const variables useful for declaring constants or values that should not change.

let a = 3;

function printNums1(){
  const b = 16;

  if(true){
    let c = 12;
    // b = "9999999999999" // TypeError: Assignment to constant variable.
    console.log("a inside if: ", a); // 3
    console.log("b inside if: ", b); // 16
    console.log("c inside if: ", c); // 12
  }

  // console.log("c outside if but still inside function: ", c); // ReferenceError: c is not defined
}

console.log(printNums1())

console.log("a outside function and if: ", a); // 3
// console.log("b outside function and if: ", b); // ReferenceError: b is not defined
// console.log("c outside function and if: ", c); // ReferenceError: c is not defined


let price1 = 22.99
price1 = "sandra"

console.log(price1); // 33.49 // sandra


const myObj = {
  name: "john",
  age: 30
};

myObj.favoriteSubject = "javascript";
myObj.age = 44;
console.log(myObj);

// { name: 'john', age: 44, favoriteSubject: 'javascript' }

const fruits = ["apples", "pears"]

fruits.push("berries");

console.log(fruits); // [ 'apples', 'pears', 'berries' 

// *⭐️****⭐️****⭐️*****⭐️*****⭐️****⭐️*****⭐️*****⭐️****⭐️*****⭐️*****⭐️*******⭐️*****⭐️

// conclusion it is considered bad practice to declare global variables as they carry a lot of risk that someone could misuse them
// also each function can change their value and this can lead to bugs and issues in our program

// *⭐️****⭐️****⭐️*****⭐️*****⭐️****⭐️*****⭐️*****⭐️****⭐️*****⭐️*****⭐️*******⭐️*****⭐️