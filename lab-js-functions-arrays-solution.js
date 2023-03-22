// PART 1

// ***********************************************************************************************
// Iteration #1: Find the maximum
// ***********************************************************************************************

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  console.log(maxOfTwoNumbers(10, 33)); // 33
  
  // ***********************************************************************************************
  // Iteration #2: Find longest word
  // ***********************************************************************************************
  
  const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
  
  function findLongestWord(arrOfWords) {
    if (!arrOfWords.length) {
      return null;
    }
    
    if (arrOfWords.length === 1) {
      return arrOfWords[0];
    }
    
    //to start we take the first word as the longest one
    let largestWord = arrOfWords[0];
    
    // use for loop to go through the arrOfWords
    //     word is just a placeholder
    //        |
    for (let word of arrOfWords) {
    
      // if the current word is longer than the largestWord...
      if (word.length > largestWord.length) {
      
        // ... then that word becomes the new largestWord
        largestWord = word;
      }
    }
    
    return largestWord;
  }
  
  console.log(findLongestWord(words)); // crocodile
  
  // ***********************************************************************************************
  // Iteration #3: Calculate the sum
  // ***********************************************************************************************
  
  const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  
  // SOLUTION WITHOUT BONUS:
  function sumNumbers(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    
    let temp = 0;
    
    for (let number of numbers) {
      temp += number;
    }
    
    return temp;
  }
  
  // SOLUTION WITH BONUS
  function sum(someArr) {
    if (!someArr) {
      return 0;
    }
    
    let sum = 0;
    
    for (let el of someArr) {
      if (typeof el === 'object') {
        throw new Error("Unsupported data type sir or ma'am");
        return;
      }
      
      // we are adding "typeof" condition to reuse this function
      // to calculate sum of letters in the array of words
  
      // we can check the type of elements in the array:
      // console.log(`Type of el: ${typeof el}`);
  
      if (typeof el === 'string') {
        sum += el.length;
      } else {
        sum += el;
      }
    }
    
    return sum;
  }
  
  console.log(sumNumbers(numbers)); // 87
  
  // ***********************************************************************************************
  // Iteration #4: Calculate the average
  // ***********************************************************************************************
  
  // Level 1: Array of numbers
  const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
  
  // manual solution:
  // function averageNumbers (numbers) {
  //   if (!numbers.length) return null;
  //   let temp = 0;
  //   for (let number of numbers) {
  //     temp += number;
  //   }
  //   return temp / numbers.length;
  // };
  
  // cleaner solution:
  function averageNumbers(numbers) {
    if (!numbers.length) {
      return null;
    } else {
      return sumNumbers(numbers) / numbers.length;
    }
  }
  
  console.log(averageNumbers(numbersAvg)); // 6
  
  // Level 2: Array of strings
  const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
  
  // super manual solution:
  // function averageWordLength(words) {
  //   if (!words.length) return null;
  //   let wordLengths = [];
  //   for (let word of words) {
  //     wordLengths.push(word.length);
  //   }
  //   return averageNumbers(wordLengths);
  // };
  
  // the other way doing the same as above:
  function averageWordLength (words) {
    if (!words.length) {
      return null;
    }
    
    return words.join("").length / words.length;
  };
  
  console.log(averageWordLength(wordsArr)); // 5.3
  
  // BONUS:
  
  function avg(arr) {
    if (arr.length === 0) {
      return null;
    }
    
    const avgValue = (sum(arr) / arr.length).toFixed(2);
  
    return Number(avgValue);
  }