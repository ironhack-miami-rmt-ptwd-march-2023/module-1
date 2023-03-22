// const people = {
//   "john": 25,
//   "mike": 34
// }

const student = {
    firstName: "jon",
    lastName: "perez",
    age: 27,
    bootcamp: "web dev",
    favorites: ["javascript", "html"],
    isCareerChanger: true
  }
  
  // create object
  
  // object literal approach
  const product = {}; 
  
  // using object constructor syntax
  const book = new Object();
  
  // const books = new Array();
  
  
  // to get value of key in an object we use dot notation
  console.log(student.firstName); // jon
  
  // we can also use []
  console.log(student["lastName"]); // perez
  
  // to add key and value to an object we use "=" to give it a corresponding value
  
  student.year = 2022;
  
  console.log("student after adding a year: ", student);
  
  // to remove 
  
  delete student.age;
  
  console.log("student after deleting an age: ", student);
  
  // to update existing property
  student.year = 2023;
  console.log("student after updating year: ", student);
  
  // to list object keys
  const objKeys = Object.keys(student);
  
  console.log(`Obj keys are: ${objKeys}`); // Obj keys are: firstName,lastName,bootcamp,favorites,isCareerChanger,year
  
  // to list object values
  
  const objValues = Object.values(student);
  
  console.log(`Obj values are: ${objValues}`); // Obj values are: jon,perez,web dev,javascript,html,true,2023
  
  // for .. in loop - special case of for loop that we use to list all object properties
  for( let key in student){
    console.log(key);
  }
  
  // check if property exists in object
  
  console.log("firstName" in student); // true
  console.log("age" in student); // false
  