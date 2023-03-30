// filter never mutates the original array
// filter always returns a new array of the smaller size (the length) than the original array

const numbers = [3, 7, 9, 10, 12];

console.log(`original arr length: ${numbers.length}`)

const filteredArr = numbers.filter(number => {
  if (number % 3 === 0){
    return number;
  }
})

// const filteredArr1 = numbers.filter(number => number % 3 === 0);

console.log(filteredArr)

// console.log(filteredArr1)

console.log(`filtered arr length: ${filteredArr.length}`);

const filtered = [];

for (const num of numbers){
  if (num % 3 === 0){
    filtered.push(num)
  }
}

console.log(`filtered arr using for loop: ${filtered}`);