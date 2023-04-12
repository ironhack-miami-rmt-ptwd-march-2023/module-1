console.log("JS connected ✅");

// getting the element by "id"

const mainTitle = document.getElementById("title1");

console.log("main title: ", mainTitle);

// getting the element by "class" --> always returns an array (HTML collection)

const paragraphs = document.getElementsByClassName("paragraph");

console.log("paragraph 1: ", paragraphs[0]);

// to turn HTML collection into an array we can use spread operator "[...HTML collection]"
[...paragraphs].forEach(oneParagraph => console.log("one paragraph: ", oneParagraph));

// to turn HTML collection into an array we can use Array.from(HTML collection)

const arrayOfParagraphs = Array.from(paragraphs);
// arrayOfParagraphs.forEach(oneParagraph => console.log("one paragraph: ", oneParagraph));

console.log("--------------------------------------------------");

// getting the element by tag name --> always returns an array (HTML collection)

const theParagraphs = document.getElementsByTagName("p");

console.log(" all the paragraphs: ", theParagraphs);

console.log("--------------------------------------------------");

// getting the element using ".querySelector()" --> returns an object which is the first found match

const title2 = document.querySelector("#title2");

console.log("the first matching element with this ID or class: ", title2)

const firstParagraph = document.querySelector("p");
console.log("1:", firstParagraph);

const prodSubtitle = document.querySelector(".products h2");
console.log("subtitle inside the products section is: ", prodSubtitle)

console.log("--------------------------------------------------");

// getting all the elements using ".querySelectorAll()" -> returns a NodeList (array of objects)

const allParagraphs = document.querySelectorAll("p");
console.log("total number of paragraphs on the page is: ", allParagraphs.length, " and the paragraphs are: ", allParagraphs)

allParagraphs.forEach(par => console.log("i am looping: ", par))

console.log("--------------------------------------------------");

// access element's attributes and contents


const textOfMainTitle = mainTitle.innerHTML;

console.log("the current text in main title is: ", textOfMainTitle);

console.log("the current text in main title using innerText is: ", mainTitle.innerText);

mainTitle.style.color = "red";
mainTitle.style.backgroundColor = "yellow";

mainTitle.style.fontSize = "50px";
mainTitle.style.marginTop = "30px";
mainTitle.style.padding = "30px";

console.log("--------------------------------------------------");

// accessing and setting node's properties

allParagraphs[0].id = "red-id";

console.log("the class of the product's subtitle is: ", prodSubtitle.className);

allParagraphs.forEach(paragraph => {
    paragraph.style.fontStyle = "italic";
    paragraph.style.color = "violet";
})

// adding classes
allParagraphs[2].className += " green-text";

allParagraphs[2].classList.add("italic-letters");

// removing classes

allParagraphs[2].classList.remove("paragraph");

// toggle class -> if element has the class, then it won't have it any more, it will be removed
// or if the class doesn't exist, it will be added
allParagraphs[1].classList.toggle("paragraph")

