// FOR LOOP

for (let i = 0; i <= 30; i++) { // i = i+1 --> i++

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
  
  // WHILE LOOP
  let i = 0;
  
  while (i < 10){
    console.log(i);
  
    i++;
  }
  
  // for.. of LOOP
  const greeting = "hi there";
  for (const val of greeting){
    console.log(val);
  }