const age = 15;
if (age >= 16){
  // ...
  console.log("You can drive now.")
} else {
  console.log("Wait a bit and then you can drive once you are 16.")
}


// if (age >= 16) console.log("You can drive now.")
// else console.log("Wait a bit and then you can drive once you are 16.")

for (let i = 0; i <= 30; i++) {

  if (i % 3 === 0 && i % 5 === 0){
    console.log("FIZZBUZZ");
  } else if(i % 3 === 0){
    console.log("FIZZ");
  } else if(i % 5 === 0){
   console.log("BUZZ");
  } else {
    console.log(i);
  }
}

// i = i+1 --> i++