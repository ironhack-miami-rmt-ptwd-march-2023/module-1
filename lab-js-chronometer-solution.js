class Chronometer {
    // Constructor function initializes the properties of the Chronometer instance
    constructor() {
      this.currentTime = 0;
      this.intervalId = null;
    }
    
    // Method to start the Chronometer instance and execute a callback function
    // to print the current time in the desired format
    start(printTimeCallback) {
      
        // setInterval() method will be called with a time interval of 1000 milliseconds (1 second)
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) {
          // if the printTimeCallback function is defined, execute it to print the current time
          return printTimeCallback()
        };
      }, 1000);
    }
  
    // Method to get the minutes part from the current time
    getMinutes() {
      return Math.floor(this.currentTime / 60);
    }

    // Method to get the seconds part from the current time
    getSeconds() {
      return this.currentTime % 60;
    }
  
    // Method to compute a two-digit number for values less than 10
    computeTwoDigitNumber(value) {
      if (value < 10) {
        return `0${value}`;
      }
  
      return `${value}`
    }
  
    // Method to stop the Chronometer instance by clearing the interval
    stop() {
      clearInterval(this.intervalId);
    }
  
    // Method to reset the current time of the Chronometer instance to zero
    reset() {
      this.currentTime = 0;
    }
  
    // Method to return the current time of the Chronometer instance in "mm:ss" format
    split() {
      const minutes = this.getMinutes()
      const computedMinutes = this.computeTwoDigitNumber(minutes);
  
      const seconds = this.getSeconds()
      const computedSeconds = this.computeTwoDigitNumber(seconds);
  
      return `${computedMinutes}:${computedSeconds}`;
    }
  }
  