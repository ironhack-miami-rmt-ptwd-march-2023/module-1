console.log("JS connected ✅");

// add, update and remove attributes

const paragraphNode = document.querySelector("#paragraph-1");

const paragraphId = paragraphNode.getAttribute("id");

console.log("paragraphId: ", paragraphId);

// Set the attribute (update the existing one)
paragraphNode.setAttribute("id", "cool-id");
console.log(paragraphNode.id);

// Create a new attribute
paragraphNode.setAttribute("class", "red-box");

// Remove the attribute
paragraphNode.removeAttribute("id");

// add, update and remove DOM elements

// 1. create a dom element
const mainTitle = document.createElement("h1");

// 2. add text (attributes)
mainTitle.innerText = "Main Title"

// 3. append a newly created element to the DOM (to the parent node) so it becomes visible
// In our case, this element will be a child of the 'body' element
const parent = document.querySelector("body");
parent.appendChild(mainTitle);


// adding an element before some other element

const siblingNodeP = document.querySelector("p");

parent.insertBefore(mainTitle, siblingNodeP);

const link = document.getElementById("google-link");
link.innerText = "Click on Google!";

link.setAttribute("href", "https://google.com/");
link.setAttribute("target", "_blank")

parent.removeChild(siblingNodeP);

// add events to DOM elements

const addCommentButton = document.querySelector("#add-comment-button");

// console.log(addCommentButton);

addCommentButton.addEventListener("click", () => {
    // console.log("I am hitting the comment button!");

    const commentParagraph = document.createElement("p");

    commentParagraph.innerText = "This is super funny comment! 🤣";

    parent.appendChild(commentParagraph)
})


// handling inputs and forms

const newItemInput = document.querySelector("#item-input");
const addItemButton = document.querySelector("#add-item-button");
const deleteButtons = document.querySelectorAll(".delete-item-button");


// console.log(addItemButton);

addItemButton.addEventListener("click", () => {
    const listParent = document.querySelector("#item-list");

    // console.log(newItemInput.value)

    const newListItem = document.createElement("li");

    newListItem.innerHTML = `${newItemInput.value} <button class="delete-item-button">🗑</button>`


    listParent.appendChild(newListItem);

    const newDeleteButton = newListItem.querySelector(".delete-item-button");

    newDeleteButton.addEventListener("click", () => {
        const isConfirmed = confirm("Are you sure you want to delete this item?");

        if (isConfirmed){
            const parentLiTag = newDeleteButton.parentElement;

            parentLiTag.remove()
        }
    })


    newItemInput.value = "";
})

deleteButtons.forEach(oneButton => {
    oneButton.addEventListener("click", () =>{
        const isConfirmed = confirm("Are you sure you want to delete this item?");

        if (isConfirmed){
            const parentLiTag = oneButton.parentElement;

            parentLiTag.remove()
        }
    })
})