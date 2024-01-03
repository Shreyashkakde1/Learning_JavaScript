const parent = document.querySelector('.parent');

// Uncommented loop to change color of children elements
// for (let i = 0; i < parent.children.length; i++) {
//     parent.children[i].style.color = "red";
// }

// Accessing the last child of the parent element
// console.log(parent.lastElementChild);

// Creating a new div element
const div = document.createElement('div');
div.className = "shreyash";
div.id = Math.floor(Math.random() * 10 + 1);
div.title = "Generated Title";
div.style.backgroundColor = "green"
div.style.padding = '10px'; // Use style to set padding
div.style.margin = '12px'; // Use style to set margin

// Adding text to the div
const addText = document.createTextNode("Shreyash Kakde (Java Developer)");
div.appendChild(addText);

// Appending the div to the document body
document.body.appendChild(div);
console.log(div);
