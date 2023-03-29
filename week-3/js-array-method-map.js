// map never mutates the original array
// map always returns a new array of the same size (the length) as the original array


// Differences between forEach() and map

// forEach - by default returns undefined
// should be used when we are not planning to change the data


// map
// by default returns a new array
// should be used when we want to change (alter) the data as it is much faster than forEach()


const arr = [1, 2, 3];

console.log(`original array: ${arr}`);

const newArr = arr.forEach(el => {
  return el * 3;
})

console.log(`new array: ${newArr}`); // new array: undefined

const someNewArr = [];
arr.forEach(num => {
  someNewArr.push(num * 3);
  return someNewArr
})

console.log(`forEach with the push: ${someNewArr}`); // forEach with the push: 3,6,9

// const updatedArr = arr.map(el => {
//   return el * 4
// })

const updatedArr = arr.map(el => el * 4)

console.log(`updatedArr with map: ${updatedArr}`); // updatedArr with map: 4,8,12