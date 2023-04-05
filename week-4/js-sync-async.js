// JavaScript is not an asynchronous language, but synchronous one with some asynchronous behaviors.

// Explanation: JavaScript is primarily a synchronous language, meaning that code is executed in a linear fashion, one line at a time, 
// from top to bottom. However, JavaScript does have some asynchronous behaviors built-in, such as event listeners and timers, which allow code to 
// execute in a non-linear fashion. This can make JavaScript seem like an asynchronous language at times, but it's important to understand that 
// its core behavior is synchronous.

function addNumbers(a, b){
    return a + b;
  }
  
  let sum = addNumbers(4, 7);
  // console.log(sum);
  


// The setTimeout() function is used to delay the execution of a piece of code by a certain amount of time. 
// It takes two parameters: a function to execute after the delay, and the time delay in milliseconds.

  function getData(callback){
    setTimeout(() => {
      callback()
    }, 2000)
  }
  
  function print(){
    console.log("test: this is some huge amount of data that takes xyz time to load");
  }
  
  // console.log(getData(print))
  
  console.log("START");
  // this is some huge amount of data that takes xyz time to load
  console.log("END");
  
  // let timeoutId = setTimeout(print, 1000);
  
  
//   The setInterval() function is similar to setTimeout(), but instead of executing the function only once, 
//   it will repeatedly execute the function at the specified time intervals. 
  function fakeClear(){
    console.log("cleared!")
    // clearTimeout(timeoutId)
    clearInterval(intervalId)
  }
  
  
  let intervalId = setInterval(print, 1000);
  
  setTimeout(fakeClear, 3000);
  
  