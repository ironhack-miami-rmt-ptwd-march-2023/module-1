// The challenge: https://gist.github.com/sandrabosk/9d0f5b7dc0c2e2d96d1af478621a24cb

const language = prompt("Please enter the language - (options: spanish, french, english): ");
const name = prompt("Please enter your name:");

if (language === "spanish") { 
  console.log("Something else");
}
else if(language === "french") {
  console.log(`Salut, ${name}`);
} else if (language === "english") {
  console.log(`Hello, ${name}`);
} else {
  console.log("I am not sure what are you trying to do, sorry! 🍺");
}


const points = prompt("Please enter the number of points (the number should be from 1 to 100 inclusive): ");

if (points >= 90 && points <= 100) {
  console.log("Grade: A");
} else if (points >= 80 && points <= 89) {
  console.log("Grade: B");
} else if (points >= 70 && points <= 79) {
  console.log("Grade: C");
} else if (points >= 60 && points <= 69) {
  console.log("Grade: D");
} else if (points <= 69) {
  console.log("Grade: F");
} else {
  console.log("Please enter a valid number of points (min 1, max 100)");
}