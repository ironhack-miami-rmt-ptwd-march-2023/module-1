// ***************************************************************
// reduce()
// ***************************************************************

const numbers = [3, 7, 9, 10, 12];

console.log(`original arr length: ${numbers.length}`);


// old way:

let sum = 0;
numbers.forEach(num => {
  return sum += num
})

console.log(sum); // 41

const total = numbers.reduce((accum, curretnVal) => {
  return accum + curretnVal
}, 100)

// const total1 = numbers.reduce((accum, curretnVal) => accum + curretnVal, 21)

console.log(`total: ${total}`); // total: 141

// console.log(`total1: ${total1}`); // total: 62

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];


const totalAge = people.reduce((accum, currentVal) => {
  // console.log("currentVal: ", currentVal.age);

  return accum + currentVal.age
}, 0);

console.log(totalAge); // 161


// ***************************************************************
// sort()
// ***************************************************************

const unsrotedArr = [1, 4, 2, 11, 42];

const sortedArrOfNums = [...unsrotedArr].sort((a, b) => {
  return a - b
});

// const sortedArrOfNums1 = [...unsrotedArr].sort((a, b) =>  a - b)

// const sortedArrOfNums = unsrotedArr.slice()

console.log(sortedArrOfNums); // [ 1, 11, 2, 4, 42 ]
// [ 1, 2, 4, 11, 42 ]

// [1, 2, 4, 11, 42]

function compare(a, b){
  // < 0 ... a comes first
  // = 0 ... don't do anything
  // > 0 ... b comes first
  return a - b;
}


const sortedArrOfNumsDesc = [...unsrotedArr].sort((a, b) => {
  return b - a
});

console.log(sortedArrOfNumsDesc); // [ 42, 11, 4, 2, 1 ]


const arrOfStrings = ["Hello", "great", "First", "A", "a", "how", "dhaihfioahfoihaiofhioa"];

const sortedArrOfStrings1 = [...arrOfStrings].sort();

console.log("1: ", sortedArrOfStrings1); // 1:  [ 'A', 'First', 'Hello', 'a', 'great', 'how' ]

const properStringSort = [...arrOfStrings].sort((a, b) => {
  a = a.toLowerCase()
  b = b.toLowerCase()

  if (a === b){
    return 0
  } else if(a > b){
    return 1
  } else {
    return -1
  }
})

console.log(properStringSort); // [ 'A', 'a', 'First', 'great', 'Hello', 'how' ]

const properStringSort1 = [...arrOfStrings].sort((a, b) => {
  a = a.toLowerCase()
  b = b.toLowerCase()

  if (a === b){
    return 0
  } else if(a > b){
    return -1
  } else {
    return 1
  }
})

console.log(properStringSort1); // [ 'how', 'Hello', 'great', 'First', 'A', 'a' ]


const sortedByLengthAsc = [...arrOfStrings].sort((a, b) => {
  if (a.length > b.length){
    return 1
  } else if (a.length < b.length){
    return -1
  } else {
    return 0
  }
})

console.log("sortedByLengthAsc: ", sortedByLengthAsc)

const sortedByLengthDesc = [...arrOfStrings].sort((a, b) => {
  if (a.length > b.length){
    return -1
  } else if (a.length < b.length){
    return 1
  } else {
    return 0
  }
})

console.log("sortedByLengthDesc: ", sortedByLengthDesc);


// ***************************************************************
// reverse()
// ***************************************************************

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const reversed = [...nums].reverse();

console.log("reversed:", reversed);
// reversed: [
//   9, 8, 7, 6, 5,
//   4, 3, 2, 1, 0
// ]

