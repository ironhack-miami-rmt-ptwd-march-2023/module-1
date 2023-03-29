// Challenge 1
// Create a function that takes in two numbers and a callback function as parameters.
// The function should apply the callback function to the two numbers and return the result.
// The callback function should perform a simple arithmetic operation (e.g. addition, subtraction, multiplication, division) on the two numbers.
// Invoke the function with different pairs of numbers and callback functions.

function performArithmeticOperation(num1, num2, callback){
    return callback(num1, num2)
  }
  
  function add(num1, num2){
    return num1 + num2
  }
  
  function subtract(num1, num2){
    return num1 - num2
  }
  
  function multiply(num1, num2){
    return num1 * num2
  }
  
  function divide(num1, num2){
    return num1 / num2
  }
  
  console.log(performArithmeticOperation(4, 17, add)); // 21
  
  console.log(performArithmeticOperation(27, 7, subtract)); // 20
  
  console.log(performArithmeticOperation(7, 7, multiply)); // 49
  
  console.log(performArithmeticOperation(21, 7, divide)); // 20
  
  