// function declaration (statement)

// function declaration can be used before it is initialized as it gets HOISTED
console.log(printInfo("bread", 3.59)); // bread price is 3.59$.

function printInfo(product, price){
  return `${product} price is ${price}$.`
}

// console.log(printInfo("milk", 4.99))

const milkInfo = printInfo("milk", 4.99);

console.log(milkInfo);

// ****************************************************
// ************* 1️⃣ function expression ***************
// ****************************************************

// function expression CAN"T be used before it is initialized as it doesn't get HOISTED
// console.log(add(5, 9)); // ReferenceError: Cannot access 'add' before initialization

const add = function(num1, num2){
  return num1 + num2;
}

// invoke
console.log(add(3, 7.23)); // 10.23

// ****************************************************
// ************* 2️⃣ Anonymous functions ***************
// ****************************************************

const students = ["daniel", "courtney"];

// Array()

students.forEach(function(student){
  console.log(student.toUpperCase())
})

// const getUppercased = function(elem){
//   console.log(elem.toUpperCase())
// }

// getUppercased("sandra")

// students.forEach(getUppercased)

// DANIEL
// COURTNEY

// ****************************************************
// ************* 3️⃣ Callbacks ************************* 
// ****************************************************

// function 1
function study(subject){
  setTimeout(function(){    
    console.log(`hey, i am studying ${subject}.`);
  }, 1000)
}

// function 2
function enjoy(){
  console.log(`hey, i am done with studying, now I can enjoy! `);
}

// study("JavaScript")
// enjoy()

// in the first case when there is no delay, this is the order:

// hey, i am studying JavaScript
// hey, i am done with studying, now I can enjoy! 

// in the 2nd example, when the execution of function 1 is delayed by 1 second (1000ms),
// the order is messed up:

// hey, i am done with studying, now I can enjoy! 
// and after 1 second it prints: 
// hey, i am studying JavaScript

function study1(subject, callback){
  console.log(`hey, i am studying ${subject}.`);
  callback()
}

study1("HTML", enjoy); // the callback function doesn't have "()" when we pass it as an argument to the other function

// hey, i am studying HTML.
// hey, i am done with studying, now I can enjoy!

// ****************************************************
// ************* 4️⃣ Arrow function ********************
// ****************************************************

function multiply(a, b){
  return a * b;
}

console.log(multiply(3, 7)) // 21

const divide = (a, b) => {
  // something goes

  return a / b
}

// when there is only 1 line inside the function body, we can use explicit return which basically mean we don't have to use the "return" keyword and we don't have to use "{}"

const divide1 = (a, b) => a / b

console.log(divide(6, 2)) // 3


const sayMyName = (name) => `Hey my name is ${name}`

console.log(sayMyName("courtney")); // Hey my name is courtney