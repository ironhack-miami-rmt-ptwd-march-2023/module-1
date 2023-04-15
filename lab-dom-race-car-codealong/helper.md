## What is `offsetWidth` and `offsetHeight`?

`offsetWidth` and `offsetHeight` are properties of a DOM element in HTML, representing the size of an element including its border and padding but excluding its margin.


## What is `getBoundingClientRect()`?

`getBoundingClientRect()` is a method available in the browser's DOM (Document Object Model) API that returns the size of an element and its position relative to the viewport.
When called on an element, `getBoundingClientRect()` returns a DOMRect object with properties that describe the element's position and dimensions. These properties include:
    * `x` and `y`: the coordinates of the top-left corner of the rectangle relative to the viewport.
    * `width` and `height`: the dimensions of the rectangle.
    * `top`, `right`, `bottom` and `left`: the distances between the edges of the rectangle and the edges of the viewport.
This method is commonly used in web development to determine the position and size of an element on the screen, so that it can be positioned or manipulated in response to user interactions or other events.

## Why did we use `Math.random() > 0.98`?

`Math.random() > 0.98` is used to generate a random probability for creating a new obstacle.

The `Math.random()` function generates a random number between 0 and 1 (exclusive). 
By checking if the generated number is greater than 0.98, we're creating a probability of 2% that a new obstacle will be created.
You can adjust the probability by changing the value 0.98 to a different value between 0 and 1. For example, if you want to increase the probability of creating a new obstacle, you can use a smaller number, such as 0.9 or 0.5. On the other hand, if you want to decrease the probability of creating a new obstacle, you can use a larger number, such as 0.99 or 0.999.