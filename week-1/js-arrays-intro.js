// arrays

const pet = "snake"; // string
const animals = ["dog", "cat", "fish"];
const mixedArr = [
  3, 
  "fish", 
  true, 
  [], 
  {name: "sandra"}, 
  "", 
  null, 
  ["table", "chair"]
];

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