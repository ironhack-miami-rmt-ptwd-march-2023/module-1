const wordsCount = [
    'machine',
    'matter',
    'subset',
    'trouble',
    'starting',
    'matter',
    'eating',
    'matter',
    'truth',
    'disobedience',
    'matter',
    'subset'
  ];

  function countWords(arr) {

    // create an empty object to store the word counts
    const counts = {};
  
    // loop through the array of words and increment the count for each word
    for (let word of arr) {

      if (counts[word] === undefined){ // if elem of the arr doesn't exist as a key in the object then it is undefined
        counts[word] = 1; // this creates the "key" in the object (the keys are the elements of the array)
      } else {
        counts[word] += 1; // if the elem of the arr already exists as the key in the object, then count ++ 
      }

    }
  
    // return the object with the word counts
    return counts;
  }
  
  console.log(countWords(wordsCount));


//   {
//     machine: 1,
//     matter: 4,
//     subset: 2,
//     trouble: 1,
//     starting: 1,
//     eating: 1,
//     truth: 1,
//     disobedience: 1
//   }