// 1: Create a function that accepts 3 numbers as parameters, and returs their sum.
function sumOfThree(a, b, c){
    return a + b + c;
  }
  
  sumOfThree(2, 5, 9); // => 16
  
  // 2: Create a function named isNameOddOrEven() that accepts a string as a parameter. 
  // The function should return whether a received name has an odd or even number of letters. 
  // The expected return should be in the following format - string: ' has an even/odd number of letters'.

  function isNameOddOrEven(name){
    // if (!name) <===> if(name.length === 0)
    if (!name) return `Please enter the valid name!`
    if( name.length % 2 === 0) return `${name} has even number of letters.`
    else return `${name} has odd number of letters.`
  }
  
  isNameOddOrEven('anamaria'); // => anamaria has even number of letters.