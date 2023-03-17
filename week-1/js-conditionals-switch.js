const pet = prompt("Please enter your favorite pet (chose from cat, dog, fish, snake, or other): ");

switch(pet){
  case "cat":
    console.log("You love cats! 😸");
    break;
  case "dog":
    console.log("You love dogs! 🐕");
    break;
  case "fish":
    console.log("You love fishes! 🐟");
    break;
  case "snake":
    console.log("You love snakes! 🐍");
    break;
  default:
    console.log("You must love some animal! 🐶 🙊 🐢");
    break;
}