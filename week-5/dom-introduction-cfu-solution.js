// 1: Get the node with the  main title

// ... your code here
const mainTitle = document.querySelector('h1');
console.log(mainTitle);

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

// ... your code here
console.log(mainTitle.innerText);

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

// ... your code here
const fruits = document.getElementsByClassName('fruit-item');
console.log(fruits);

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------
// 4: Get all the veggie items - the text

// ... your code here
const veggies = document.querySelectorAll('.veggie-item');
// const eachVeggie = function() {
  veggies.forEach(element => {
    console.log(element.innerText)
  });
// }

// console.log(eachVeggie());

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

// ... your code here
const veggiesTitle = document.querySelector('.list-veggies h2');
console.log(veggiesTitle.innerText);


// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// ... your code here
console.log(veggiesTitle.id = 'fruit-title');

// => fruit-title
// ----------------------------------------------
// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// ... your code here
[...fruits][0].classList.add('best-fruit');
[...fruits][2].className += ' best-fruit';

// loop  argument index


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

// ... your code here
const veggiesUl = document.querySelector('.veggies');
veggiesUl.classList.remove('veggies');
console.log(veggiesUl);

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// ... your code here
veggies.forEach(element => {
  element.classList.add('veggie-love');
  console.log(element)
});



// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// ... your code here
veggies.forEach(element => {
  if (element.innerText === 'Spinach') {
    element.classList.remove('veggie-item');
  }
  console.log(element)
})

// => ... <li class="veggie-love">Spinach</li>