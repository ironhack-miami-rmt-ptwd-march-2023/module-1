// *********************************************
// ******* exercise: array of objects **********
// *********************************************

const designers = [
    { name: 'Bob', age: 17 },
    { name: 'Susy', age: 18 },
    { name: 'Ted', age: 28 },
    { name: 'Sarah', age: 25 },
    { name: 'Bill', age: 19 }
  ];
  
  // 1: name of a designer Bob
  console.log(designers[0].name);
  
  // 2: Sarah' age
  console.log(designers[3].age);
  
  // 3: List of all designers' names
  for(let i = 0; i < designers.length; i++){
    console.log(designers[i].name);
  }