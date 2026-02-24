// Arrow functions and template literals

const greet = (name) => {
  // console.log(`hello ${name}`);
};

greet("Rihana");

// Array methods

const numbers = [10, 20, 30, 40];

// Push and Pop

numbers.push(50);
numbers.push(100);

// console.log(numbers);

numbers.pop();
// console.log(numbers);

// Map filter and Reduce

const numberList = [10, 20, 35, 40, 55];

const doubleNumbers = numberList.map((number) => {
  return number * 2;
});

// console.log(doubleNumbers);

const evenNumberList = numberList.filter((number) => {
  return number % 2 === 0;
});

// console.log(evenNumberList);

const totalSum = numberList.reduce((accumulator, currentvalus) => {
  // console.log(accumulator,currentvalus);
  return accumulator + currentvalus;
}, 0);

// console.log(totalSum);

//Slice and Splice

const fruits = ["apple", "banana", "orange", "mango"];

const slicedfruits = fruits.slice(1, 3);

// console.log(slicedfruits);

fruits.splice(1, 2, "grapes", "kiwi");

// console.log(fruits);

// Spread operator

const names = ['Rejisha','Rihana','Azina'];

const newNames = [...names, 'Harry', 'Mary'];
// console.log(newNames);

const user = {
    name:'Rihana',
    age: 20,
    address: 'Kathmandu,Nepal',
};

const updateUser = {
    ...user,
    isStudent: true,
};

// console.log(updateUser);

// Destructuring

const [firstName, secondName] =  newNames;

// console.log(firstName);
// console.log(secondName);

const {name, address} = updateUser;

console.log(name, address);

