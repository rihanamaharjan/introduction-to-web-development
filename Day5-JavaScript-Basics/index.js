// JavaScript Variables

var fullName = "Rihana Maharjan";
let address = "Kathmandu,Nepal";
const bloodGroup = "A+";

console.log("Full Name:", fullName);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);

// Data types

let name = "Rihana"; //string

let age = 20; //number

let isStudent = true; //boolean

let hobbies = ["Coding", "Travelling", "Cooking"]; //Array

console.log(hobbies[0]);

let user = {
  name: "Rihana",
  age: 20,
  isStudent: true,
  hobbies: ["Coding", "Travelling", "Cooking"],
}; //object

console.log(user["name"]);
console.log(user.name);

function greet(name) {
  console.log("Welcome", name);
}
greet("Rihana");

// DOM Manipulation

const headingElementById = document.getElementById("Heading-2");
console.log("heading element By id ", headingElementById);

const headingElementByQuery = document.querySelector("#Heading-2");
console.log("heading element By query selector", headingElementByQuery);

headingElementByQuery.textContent = "Get element by query selector";
headingElementByQuery.style.color = "blue";
headingElementByQuery.style.fontsize = "24px";

const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click', function() {
    alert('Button clicked');
    console.log('Button clicked');
});