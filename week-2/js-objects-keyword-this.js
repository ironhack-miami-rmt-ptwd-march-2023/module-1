const person = {
    name: "john",
    lastName: "doe",
    age: 33,
    hasMotorbike: false,
    id: undefined,
    hobbies: ["programming", "ski"],
    getOld(){
      // console.log(this);
      this.age += 1;
    }
  };
  
  console.log(person.getOld());
  console.log(person.age);
  
  // primitives are copied by their value
  
  let x = 10;
  let y = x; // y = 10
  
  console.log(`1: x = ${x}`); // 10
  console.log(`1: y = ${y}`); // 10
  
  x = 20;
  
  console.log(`2: x = ${x}`); // 20
  console.log(`2: y = ${y}`); // 10
  
  
  // objects get copied by reference
  
  console.log(`person name: ${person.name}`); // john
  
  let human = person;
  console.log(`human name: ${human.name}`); // john
  
  human.name = "alex";
  
  console.log(`person name AFTER: ${person.name}`); // alex
  console.log(`human name AFTER: ${human.name}`); // alex