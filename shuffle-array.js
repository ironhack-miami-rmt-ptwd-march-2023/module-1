const numbers = [1, 4, 7, 9];

function shuffle(array){

  let arrayLength = array.length;

  while (arrayLength > 0){

    let randomIndex = Math.floor(Math.random() * arrayLength);

    // console.log("randomIndex: ", randomIndex);
    arrayLength --;

    // empty cup
    let tempVar = array[arrayLength];

    // console.log("tempVar: ", tempVar);

    array[arrayLength] = array[randomIndex];
    array[randomIndex] = tempVar;
    
  }



  return array
}

console.log(shuffle(numbers))