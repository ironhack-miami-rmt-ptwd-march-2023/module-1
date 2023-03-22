
// arrays of objects

const students = [
  {
    firstName: 'Paola',
    lastName: 'Sanchez',
    bootcamp: 'Web Dev',
    favorites: ['JavaScript', 'HTML'],
    isCareerChanger: true
  },
  {
    firstName: 'Mila',
    lastName: 'Bjorn',
    bootcamp: 'Data Analytics',
    favorites: ['Python', 'SQL'],
    isCareerChanger: true
  },
  {
    firstName: 'Frank',
    lastName: 'Bellagio',
    bootcamp: 'UX',
    favorites: ['Sketch', 'InVision'],
    isCareerChanger: false
  }
];

console.log(students[1].firstName); // Mila
console.log(students[0].isCareerChanger); // true
console.log(students[2].firstName); // Frank
console.log(students[2].favorites); // [ 'Sketch', 'InVision' ]
console.log(students[0].favorites[0]); // JavaScript

for(let i = 0; i < students.length; i++){
  console.log(students[i].firstName)
}
// Paola
// Mila
// Frank
// ----------------------------------------------------

// array of arrays

const developers = [
  ['Ana', 'Will', 'Camilo'],
  ['Sandra', 'Miller', 'Chris'],
  ['Bjorn', 'Francisco', 'Robert']
];

console.log(developers[0][0]); // ana
console.log(developers[1][0]); // sandra
console.log(developers[2][2]); // robert

for(let i = 0; i < developers.length; i++){
  console.log(developers[i][0])
}

// Ana
// Sandra
// Bjorn

// ----------------------------------------------------

// objects with nested objects

const classRoom = {
  teacher:  {
    firstName: 'Greg',
    lastName: 'Dach',
    age: 38,
    address: {
      street: "3085 Kelton Knolls",
      city: "Aldaside",
      state: "Maryland"
    }
  }
};

console.log(classRoom.teacher.firstName); // Greg
console.log(classRoom.teacher.address.city); // Aldaside