// Create a function named maxOfArray that receives an array of numbers as an argument. The function should return the greatest number out of the numbers provided in the array.

// Sample Input/Output:
// input: [1, 2, 3, 4]
// output: 4

// input: [1, 2, 3, -4]
// output: 3

function maxOfArray(numbers) {
    let max = numbers[0]; // Set the maximum value to the first number in the array
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update the maximum value if the current number is greater
      }
    }
    return max; // Return the maximum value
  }
  
// *************************************************************************************
// *************************************************************************************

// Create a function named getFullName that receives an object as an argument.
// The function should return the concatenated string containing the firstName and lastName property values from the object.

const webStudent = {
  firstName: 'Ana', 
  lastName: 'Alonso'
}

function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

console.log(getFullName(webStudent)); // Ana Alonso

// *************************************************************************************
// *************************************************************************************

// Create a function named doesWordExist that receives two arguments:

// an array of strings and
// a string with the word we want to check if it exists in that array.
// The function should return true/false depending on if the word exists in the array or not.

const names = ["kseniia", "amber", "courtney"];

function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}

console.log(doesWordExist(names, "amber")); // true


// *************************************************************************************
// *************************************************************************************


// Create a function named findUnique that receives an array of words as an argument.
// The function should return the first found unique (non-repeating) word.

// Sample Input/Output:
// input: ['ana', 'ivan', 'jan', 'ana', 'jan']
// output: 'ivan'

// input: ['fizz', 'foo', 'bar', 'bazz', 'fizz', 'bazz']
// output: 'foo'

// input: ['apple', 'pear', 'strawberries', 'pineapple']
// output: 'apple'


function findUnique1(wordsArr) {
  // Check if the words array is empty, return false if it is
  if (wordsArr.length === 0) {
    return false;
  }

  // Loop through each word in the array
  for (let word of wordsArr) {

    // console.log(`${word}: indexOf: ${wordsArr.indexOf(word)} ---> lastIndexOf: ${wordsArr.lastIndexOf(word)}`)

    // Check if the first index of the word is the same as the last index of the word
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      // If it is, then this word is unique, so return it
      return word;
    }
  }

  // If no unique words were found, return false
  return false;
}


function findUnique1(words) {
    // wordCount to keep track of how many times each word appears in the input array. 
    const wordCount = {};

    // The first loop iterates through the array, incrementing the count for each word encountered
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }

    // The second loop then iterates through the array again, returning the first word that has a count of 1
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (wordCount[word] === 1) {
        return word;
      }
    }
    return null;
  }



  
  