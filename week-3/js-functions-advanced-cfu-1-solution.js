// 1. Write a simple function expression that takes in two parameters (a and b) and returns their sum.

const sum = function(a, b) {
  return a + b;
}

sum(3,5)


// 2. Modify the function expression you just wrote to use function declaration approach instead.

function sum1(a,b){
  return a + b;
}
sum1(3,5)


// 3. Modify the function to use arrow function syntax instead.


const sum2 = (a,b) => {
  return a + b;
}
sum2(3,5)

// or:

const sum3 = (a, b) => a + b;
sum3(3,5)