console.log("hello");

// declaring = naming a variable 

// let const (var 💀)

let student; // var. declaration (saving an empty spot in the storage/memory)
console.log(student); // undefined

student = "leandra";
console.log(student); // leandra

let firstName = "sandra";
console.log(firstName);

// ❌ don't start your variable names with uppercase ❌
// let LastName = "boskovic";
// console.log(LastName)

// let 3students
// let class;
// let function
// let let
// let const

// camelCase 
// snake_case

// single comment

/* this is
multiple lines
comment */

// let greeting;

const sayHi = "hello there";
// sayHi = "hiiiiiii!";

const age = 34; // integer
const price = 12.99; // floating-point number

// ** exponent
console.log(5**2); // 25
console.log(2**5); // 32 

// 2*2*2*2*2 = 32

// % modulo
console.log(22 % 3); // 1
console.log(26 % 4); // 2

console.log(22 % 3 === 3); // false
console.log(24 % 3 === 0); // true

// 3 ways to create strings
// "", '', `` (template literal)

let name = "Ana";
console.log(`Hello there, ${name}!`); // Hello there, Ana!

console.log(`${name} has ${22 + 13} years.`); // Ana has 35 years.

let statement = "this is our test string";
console.log(`This is the first letter - 1: ${statement[0]}`);
console.log("This is the first letter - 2: " + statement[0]);

statement[0] = "T";
console.log("-=-=-=-=-=: ", statement);

let num = 3;
console.log(typeof num); // number

num = num + 11;

console.log(num); // 14

num = "3";
console.log(typeof num); // string


// concatenation
num = num + 11;
console.log(num); // 311

// check if a string includes a substring or a character
// includes() ==> true or false
// indexOf() ==> returns the position where is the character  or -1 if the character is not found

// let statement = "this is our test string";

console.log(`example with includes: ${statement.includes("stri")}`); // true
console.log(`example with includes: ${statement.includes("stri ")}`); // false

console.log(`example with indexOf: ${statement.indexOf("string")}`); // 17
console.log(`example with indexOf: ${statement.indexOf("stri ")}`); // -1

// access character in the string - charAt()

console.log(statement.charAt(8)) // 0

// --------------------------------------
// substring((start, end]) --> the last one is not included --> (5, 9) --> counts till 8
// treats a negative parameter as a zero
// reverses parameters, as it will always use the smalles one as a start

let substring1 = statement.substring(5, 10); 
console.log(substring1); // is ou 

let substring2 = statement.substring(-11, 5); 
console.log(substring2); // this

let substring3 = statement.substring(5); 
console.log(substring3); // is our test string

let substring4 = statement.substring(10, 2); 
console.log(substring4); // is is ou

// --------------------------------------
// substr(start, howManyFromTheStart)

let substr1 = statement.substr(5, 11);
console.log(substr1);

// --------------------------------------
// slice(start, end)

let slice1 = statement.slice(5, 10);
console.log(slice1); // is ou

let useSliceWithNegative = statement.slice(-4);
console.log(useSliceWithNegative); // ring

// --------------------------------------

// startsWith() - checks if the string begins with the character

const str = "to be or not to be, the question is now";

console.log(str.startsWith("to be")); // true
console.log(str.startsWith("not to be", 9)); // true


// ********* advanced number methods **************

let num1 = 3.2;
let num2 = 5.7;

// Math.floor()
console.log(Math.floor(num1)); // 3
console.log(Math.floor(num2)); // 5

// Math.round()
console.log(Math.round(num1)); // 3
console.log(Math.round(num2)); // 6

// Math.ceil()
console.log(Math.ceil(num1)); // 4
console.log(Math.ceil(num2)); // 6

let price1 = 5.8018047188999
console.log(price1.toFixed(4)); // 5.8018