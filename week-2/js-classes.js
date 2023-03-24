const person1 = {
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
  
  const person2 = {
    name: "daniel",
    lastName: "cornejo",
    age: 33,
    isMarried: false,
    id: undefined,
    hobbies: ["programming", "gym"],
    getMarried(){
      this.isMarried = true
    }
  };
  
  // class - template to create new objects
  // name is typically SINGULAR
  // camelCase, first letter is always uppercase (Book, Student, Author)
  
  class Person {
    constructor(placeholder1, placeholder2, placeholder3){
      this.name = placeholder1;
      this.lastName = placeholder2;
      this.age = placeholder3;
      // if we have this method inside the constructor, each of the new objects will have the same method that does exactly the same thing, so unnecessarily we are adding the same function (vriable) in our memory multiple times and this makes our program run slower
      // this.sayName = function(){
      //   console.log(`My name is ${this.name}`);
      // }
    }  
  
    // solution is to take out a new method outside of the constructor method
  
    sayName(){
      console.log(`My name is ${this.name}`);
    }
  }
  
  const kseniia = new Person("kseniia", "ernest", 30);
  console.log(kseniia.age);
  
  
  const johnatan = new Person("johnatan", "bijl", 32);
  console.log(johnatan.lastName);
  
  kseniia.sayName();
  
  johnatan.sayName();
  
  class Player extends Person {
    constructor(name, lastName, age, nickname, lives, cash){
      // we use super to say we are inheriting certain properties from parent (Person class) so instead of listing them with this.name = name... we can simply do it in one line with super()
      super(name, lastName, age);
      
      this.nickname = nickname;
      this.lives = lives;
      this.cash = cash;
    }
  
    spendCash(amount){
      this.cash -= amount;
    }
  
    updateLives(number){
      this.lives += number;
    }
  }
  
  
  const player1 = new Player("jon", "perez", 28, "superJon", 3, 3000);
  
  console.log(player1);
  
  player1.sayName(); // My name is jon
  
  player1.spendCash(1000);
  
  console.log(player1.cash); // 2000
  
  player1.updateLives(3);
  
  console.log(player1.lives); // 6
  
  
  const player2 = new Player("derek", "xyz", 20, "masterDerek", 100, 10000);
  
  console.log(player2);
  
  player2.sayName(); // My name is derek
  
  player2.spendCash(4000);
  
  console.log(player2.cash); // 6000
  
  player2.updateLives(3);
  
  console.log(player2.lives); // 6
  