// ### Challenge 1:

// Given an array of numbers, filter out the numbers that are not even, and are less than 100.


const numbers = [1, 60, 112, 123, 100, 99, 73];

const newArray = numbers.filter(number => {
  return number % 2 === 1 && number < 100;
});
// in one line: const newArray = numbers.filter(number => number % 2 === 1 && number < 100);

console.log(newArray); // [ 1, 99, 73 ]



// ## Challenge 2: 

// 1. From the given array of people, get the people who are allowed to consume alcoholic beverages (based on the US law).

// 2. _Bonus_: Get just their names, we don't need their age.


const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];


// 1. `allowedToDrink` will be the list of people who are older than 21.

const allowedToDrink = people.filter(person => {
  return person.age >= 21;
});

// in one line: const allowedToDrink = people.filter(person => person.age >= 21);
console.log(allowedToDrink);

// [ { name: 'Candice', age: 25 },
// { name: 'Tammy', age: 30 },
// { name: 'Allen', age: 49 },
// { name: 'Nettie', age: 21 } ]


// 2. We will map through the `allowedToDrink` and get only their names into a new array.


const namesArrOfAllowedToDrink = allowedToDrink.map(person => {
  return person.name;
});

// in one line: const namesArrOfAllowedToDrink = allowedToDrink.map(person => person.name);

console.log(namesArrOfAllowedToDrink); // [ 'Candice', 'Tammy', 'Allen', 'Nettie' ]



// ### Challenge 3:

// 3. Given the array of students, filter out just the ones who passed with the score 50 and more.


const students = [
  {
    name: "Peter",
    score: 50
  },
  {
    name: "Sarah",
    score: 40
  },
  {
    name: "Andy",
    score: 33
  },
  {
    name: "Grace",
    score: 70
  }
]

// Filter array for students who passed a score from 50 and above
const studentsWhoPassed = students.filter(student => {
  return student.score >= 50
})

// const studentsWhoPassed1 = students.filter(student => student.score >= 50)

console.log(studentsWhoPassed)
