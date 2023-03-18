// function declaration || statements
// function expression

// create ==> function declaration
function printCoffeePrice(){
    console.log("Coffee price is 5$.")
  }
  
  // call => invocation
  printCoffeePrice()
  
  // create ==> function declaration
  function printSandwichPrice(){
    console.log("Sandwich price is 9$.")
  }
  
  // call => invocation
  printSandwichPrice()
  
  // price ---> placeholder & parameter
  function printProductPrice(price){
    console.log(`Sandwich price is ${price}$.`)
  }
  // 17 --> argument (a real value)
  printProductPrice(90)
  
  function printInfo(prod, price){
    // code here
    return `${prod} price is ${price}$.`;
    // anything after return doesn't exist for a function
  }
  
  console.log(printInfo("Book", 34.99))
  console.log(printInfo("Course", 14.99))
  console.log(printInfo("Shirt", 58))
  
  
  // multiple return statements - must be some kind of condition
  
  function printName(name){
    if (name === undefined){
      return `Please provide a valid name.`;
    } else {
      return `Name is ${name}.`
    }
  }
  
  console.log(printName("Daniel"))
  console.log(printName())
  

  // return multiple values (variables)
  
  function getUser(){
    const name = "ana";
    const age = "32";
  
    const nameAndAge = {
      name, age
    }
  
    // return {
    //   name, age
    // }
  
    return nameAndAge
  }
  
  // console.log(getUser())
  
  const userInfo = getUser();
  
  console.log(`Name: ${userInfo.name}, Age: ${userInfo.age}`);