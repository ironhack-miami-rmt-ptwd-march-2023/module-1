// The CFU: https://gist.github.com/sandrabosk/c33d8fd0532a51a0de3ccfc51e7d3a97

console.log('INDEX.JS connected');

// ****************************** part 1 *********************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();

  // 1: get the input from user related to the new task and the owner of the task
  const taskInput = document.querySelector('#task-input');
  const taskContent = taskInput.value;
  const ownerInput = document.querySelector('#owner-input');
  const ownerContent = ownerInput.value;

  // 2: append it to the DOM
  const ulParent = document.querySelector('#tasks-list');
  const newLi = document.createElement('li');
  newLi.innerText = `${taskContent} by  ${ownerContent}`;

  ulParent.appendChild(newLi);

  // 3: clear the form after the submission
  taskInput.value = '';
  ownerInput.value = '';
});

// ****************************** part 2 *********************************

// 1: get the DOM element that represents 'Update gif' button
const updateGifBtn = document.getElementById('update-button');

// 2: add to click handler to it
updateGifBtn.addEventListener('click', () => {

  // 3: get the DOM element that represents 'iframe tag'
  const gifTag = document.querySelector('iframe');
  const currentGif = gifTag.className;

  // 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button
  //   gifTag.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE');
  
  // 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears
  if (currentGif === 'three-minions') {
    gifTag.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE');
    gifTag.className = 'two-minions';
  } else {
    gifTag.setAttribute('src', 'https://giphy.com/embed/MOWPkhRAUbR7i');
    gifTag.className = 'three-minions';
  }
});