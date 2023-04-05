// 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  print(); // => ???
  
  // ------------------------------------------------------------------------
  
  // 2: Use setTimeout() to print 'I am printing after ___ seconds.' 
  // depending on how much delay is passed to setTimeout as delay.
  
  function printing(delay) {
    console.log(`I am printing after ${delay} seconds.`);
  }
  
  setTimeout(() => printing(2), 2000);
  setTimeout(() => printing(8), 8000);
  
  // ------------------------------------------------------------------------
  
  //3: Countdown from 10 to 0. When the countdown is zero, it should show “Pop!” and stop the interval.
  
  let i = 10;
  const intervalId = setInterval(() => {
    
    if (i > 0) {
      console.log(i);
    } else {
      console.log('Pop!');
      clearInterval(intervalId);
    }
  
    i--;

  }, 1000);
  
  // ------------------------------------------------------------------------
  
  // BONUS: Write a script that prints  'Ironhack -> __ sec.' after every delay.
  // Example, if you start with the delay of 1 second, it  should print 'Ironhack -> 1 sec.'
  // After that, the delay should be incremented by 1 second each time.
  // After 2 seconds, it should print 'Ironhack -> 2 sec.'
  // Then the delay should be 3 seconds, so after that time, it should print 'Ironhack -> 3 sec.'
  // And so on.

  function printIronhack(delay) {
    // ... your code here
  }
  printIronhack(1);