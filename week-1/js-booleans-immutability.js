// Can have 2 values:
// - true
// - false

// We will heavily use booleans within conditional statements and for that purpose we need to learn
// about logical operators: OR (||), AND (&&), NOT (!).

if (4 > 2 && 5 > 3){
    // true
  }
  
  let name = "sandra";
  
  console.log(name);
  
  // =
  // ==
  // ===
  
  let x = 5;  // string
  let y = "5"; // number
  
  console.log(`Compare 2 variables with ==: ${x == y}`); // true --> comparing only values
  
  console.log(`Compare 2 variables with ===: ${x === y}`); // false --> comparing not only values but datatypes as well
  
  let city = "miami";
  console.log(city[0]); // <== m
  city[0] = "M";
  console.log(city); // <== miami
  
  
  // i can't mutate value of a string as it is immutable (primitive) 
  // but i can re-assign
  
  city = "berlin";
  console.log(city); // <== berlin
  
  const message = "i love javascript";
  console.log(message.slice(0, 6)); // i love
  console.log(message); // i love javascript