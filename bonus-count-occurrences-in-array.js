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
    const count = {};

    // for (let i = 0; i < array.length; i++) {
    //   if (count[array[i]] === undefined){
    //     count[array[i]] = 1
    //   } else {
    //     count[array[i]] +=1 
    //   }
    // }
  
    // loop through the array of words and increment the count for each word
    for (let word of arr) {

      if (count[word] === undefined){ // if elem of the arr doesn't exist as a key in the object then it is undefined
        count[word] = 1; // this creates the "key" in the object (the keys are the elements of the array)
      } else {
        count[word] += 1; // if the elem of the arr already exists as the key in the object, then count ++ 
      }

    }
  
    // return the object with the word counts
    return count;
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


function countWords (array) {
  let count = {};
  

  
  for (let word of array){
    if (count[word] === undefined){
      count[word] = 1
    } else {
      count[word] += 1
    }
  }
  
  return count;
}