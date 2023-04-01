let x = 10;

let y = 10;

// y = 11;

console.log(x === y);  // true

const person = {
  name: "jon",
  age: 30
}

const personCopy = person;

console.log(person); // { name: 'jon', age: 30 }
console.log(personCopy); // { name: 'jon', age: 30 }
console.log(person === personCopy); // true


personCopy.age = 40;
console.log("------------------------------------");
console.log(person); // { name: 'jon', age: 40 }
console.log(personCopy); // { name: 'jon', age: 40 }

const book1 = {
  author: "charlotte bronte"
}

const book2 = {
  author: "charlotte bronte"
}

console.log(book1 === book2); // false

const students = ["derek", "amber"];
const ironhackers = ["derek", "amber"];

console.log(students === ironhackers); // false


// how to copy an object

const book3 = Object.assign({}, book1);

console.log(book3); // { author: 'charlotte bronte' }

console.log(book1 === book3); // false

book3.pages = 300;

console.log("book1: ", book1); // book1:  { author: 'charlotte bronte' }
console.log("book3: ", book3); // book3:  { author: 'charlotte bronte', pages: 300 }

const originalObj = {
  a: 1,
  b: [2, 3]
}

const copiedObj = Object.assign({}, originalObj);

copiedObj.b.push(4);

originalObj.a = 1000;

console.log("original: ", originalObj); //  { a: 1000, b: [ 2, 3, 4 ] }
console.log("copy: ", copiedObj); // { a: 1, b: [ 2, 3, 4 ] }


console.log("------------------------------------");

// spread ... - creates a copy but SHALLOW

const originalObj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}

const copiedObj1 = {...originalObj1};
originalObj1.a = "sandra"
copiedObj1.b.c = 3300;

console.log("original 1: ", originalObj1); // { a: 'sandra', b: { c: 3300, d: 3 } }
console.log("copy 1: ", copiedObj1); // { a: 1, b: { c: 3300, d: 3 } }

console.log("------------------------------------");

// DEEP COPY
// JSON.parse()
// JSON.stringify()

const orinalObj3 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
}

const copedObj3 = JSON.parse(JSON.stringify(orinalObj3));

copedObj3.b.d.push(5000);

console.log("original 3: ", orinalObj3); // { a: 1, b: { c: 2, d: [ 3, 4 ] } }
console.log("copied 3: ", copedObj3); //  { a: 1, b: { c: 2, d: [ 3, 4, 5000 ] } }

console.log("------------------------------------");

// How to copy arrays

// spread operator - shallow copy

const nums = [1, 2, [3, 4]];

const numsCopy = [...nums];

numsCopy[2].push(17);
console.log("nums: ", nums); // [ 1, 2, [ 3, 4, 17 ] ]
console.log("nums copy: ", numsCopy); // [ 1, 2, [ 3, 4, 17 ] ]

console.log("------------------------------------");

// DEEP COPY
// JSON.parse()
// JSON.stringify()

const copedNums1 = JSON.parse(JSON.stringify(nums));

copedNums1[2].push("apple");

console.log("nums: ", nums); // [ 1, 2, [ 3, 4, 17 ] ]
console.log("copedNums1: ", copedNums1); // [ 1, 2, [ 3, 4, 17, 'apple' ] ]
