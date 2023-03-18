// arrays

const pet = "snake"; // string
const animals = ["dog", "cat", "fish"];
// const mixedArr = [
//   3, 
//   "fish", 
//   true, 
//   [], 
//   {name: "sandra"}, 
//   "", 
//   null, 
//   ["table", "chair"]
// ];

// arrays are zero indexed

// length

console.log(pet.length); // 5
console.log(animals.length); // 3

// add

// .push() --> adds to the end of the array

animals.push("tiger");
console.log(animals); // ["monkey", "dog", "cat", "fish", "tiger"]

// .unshift() --> adds to the beginning of the array
animals.unshift("monkey");
console.log(animals); //  ["monkey", "dog", "cat", "fish", "tiger"]

// .splice() --> to insert on specified index

animals.splice(2,0,"horse")
console.log(animals); // ["monkey", "dog", "horse", "cat", "fish", "tiger"]

// .splice() -- to add some and remove some

animals.splice(3, 2, "lion");
console.log(animals); // ["monkey", "dog", "horse", "lion", "tiger"]

// .splice() -- to remove some element(s)
animals.splice(2, 1);
console.log(animals); // ["monkey", "dog", "lion", "tiger"]

// .pop() -> removes the last element
animals.pop();
console.log(animals); // ["monkey", "dog", "lion"]

// .shift() -> removes the first element

animals.shift();
console.log(animals); // [dog", "lion"]


// iterating over array

const mixedArr = [
  3,                       // 0 
  "fish",                  // 1
  true, 
  [], 
  {name: "sandra"}, 
  "", 
  null, 
  ["table", "chair"]      // 7
];

// for loop

console.log(mixedArr.length);

// console.log(mixedArr[8])

for (let i=0; i < mixedArr.length; i++){
  console.log(`el: ${mixedArr[i]}`)
}

mixedArr.forEach(function(element){
  console.log("element is: ", element)
})

const fruits = ["apple", "orange", "plum"];
for (let fruit of fruits){
  console.log(fruit);
}

// Different ways to copy the array
// 1. spread operator

const originalArr = [1, 2, 3];
console.log(`original: ${originalArr}`)

const copyOfOriginalArr = [...originalArr];
console.log(`copy: ${copyOfOriginalArr}`);

// 2. concat()

const fruits1 = ["apple", "orange", "plum"];
const fruitsUpdated = fruits1.concat("peach");
console.log(fruits1); // "apple", "orange", "plum"
console.log(fruitsUpdated); // "apple", "orange", "plum", "peach"

const berries = ["strawberries", "blueberries"];
const mergedArr = fruits1.concat(berries);
console.log(mergedArr); // ["apple", "orange", "plum", "strawberries", "blueberries"]

const mergedArr2 = [...fruits1, ...berries];
console.log(mergedArr2);

// isArray()

const numbers = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers)); // true