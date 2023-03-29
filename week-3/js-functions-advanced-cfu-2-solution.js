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


// Challenge 2
// Create a function that takes in a string and a callback function as parameters.
// The function should split the string into words and apply the callback function to each word.
// The callback function should perform a simple operation (e.g. capitalization, adding a suffix) on each word.
// Invoke the function with different strings and callback functions.
  
function processWords(str, callback) {
  const words = str.split(" ");
  const processedWords = [];
  for (let i = 0; i < words.length; i++) {
    const processedWord = callback(words[i]);
    processedWords.push(processedWord);
  }
  return processedWords.join(" ");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function addSuffix(word) {
  return word + "-ed";
}

const sentence1 = "hello world";
const sentence2 = "the quick brown fox";
const capitalizedSentence = processWords(sentence1, capitalize);
const suffixedSentence = processWords(sentence2, addSuffix);
console.log(capitalizedSentence); // "Hello World"
console.log(suffixedSentence); // "the-ed quick-ed brown-ed fox-ed"