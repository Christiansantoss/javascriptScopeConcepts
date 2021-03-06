'use strict';

// // calcAge function is a global scope but creates its own local/block scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   // variable look up example below
//   function printAge() {
//     const output = `${firstName} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 <= 1996) {
//       var millenial = true;
//       // creating NEW vriable with same name as
//       // outers scope's variable
//       const firstName = 'steven'; // variable lookup firstName is within function scope
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     console.log(add(2, 3)); // not accessible because the function is block scoped
//   }
//   printAge();

//   return age;
// }

// // global scope below
// const firstName = 'Jonas';
// calcAge(1991); // function call that is global scoped
// // printAge();

// *************** TEMPORAL DEAD ZONE LET AND CONST ***************
// *************** DIFFERENT TYPES OF ERROR MESSAGES ***************

// const myName = 'jonas';

// if (myName === 'jonas') {
//   console.log(`jonas is a ${job}`); // TEMPORAL DEAD ZONE FOR JOB VARIABLE - REFERENCE ERROR CANNOT ACCESS 'JOB' BEFORE INITIALIZATION
//   const job = 'teacher';
//   const age = 2037 - 1989;
//   console.log(age);
//   console.log(x); // REFERENCE ERROR X IS NOT DEFINED
// }

// // Variables
// console.log(me);
// // console.log(job);
// console.log(year);

// var me = 'jonas';
// // let job = 'teacher';
// // const year = 1991;

// // Functions
// console.log(addDecl(2, 3)); // able to call the function before its declaration
// console.log(addExpr(2, 6)); // Assigning a function value to a const or let variable is placed in the TEMPORAL DEAD ZONE!!! No access!
// console.log(addArrow(5, 5));

// //only function you can use before declaring is function declaration
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// *************Example*******
// clean code
// Declare variables at the top of each scope
// Always declare functions first and use them after declaration

// if (!numProducts) deleteShoppingCart(); // because of hoisting the all products gets deleted
// // even when products is 10

// var numProducts = 10; //dont use var to declare variables use const or let if you need to reassign a variable

// function deleteShoppingCart() {
//   console.log('All Products deleted');
// }

// var x = 1; // variables declared with var will create a property on the window object
// console.log(x === window.x);
// let y = 2; // variables declared with let or const wont create a property on the window object
// const z = 3;

// ****************** This Keyword ****************

// console.log(this);

// // const calcAge = function (birthYear) {
// //   console.log(2037 - birthYear);
// //   console.log(this);
// // };

// // calcAge(1991);

// const calcAge = birthYear => {
//   // Arrow function does not get its own this keyword
//   // Arrow function using its lexical this keyword
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year); // calculate data based on whats already in object with THIS keyword
//   },
// };
// // THIS keyword works because in the function call
// //jonas is being referenced "CALLED" points to itself as in 'this'
// jonas.calcAge(); // jonas was the object calling the method calcAge

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // method borrowing from one object to another
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); // function is not attatched to an object it becomes undefined
// // it is now just a regular function call

// *************pitfalls of this keyword and arrow functions below ********************
// var firstName = 'matilda';

// const jonas = {
//   // not a code block but an object literal
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     // ****** SOLUTION 1 below ************

//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // ************* SOlUTION 2 ****************

//     const isMillenial = () => {
//       // ARROW FUNCTION INHERITS THIS KEYWORD FROM ITS PARENTS SCOPE!!!
//       console.log(this);
//       // console.log(self.year >= 1981 && self.year <= 1996);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
//   // The parent method of the greet method is its global scope
//   // Arrow function doesnt get its own THIS keyword
//   // Uses This keyword from its sorroundings
//   // Never use an arrrow function as a method
// };

// jonas.greet();
// jonas.calcAge();

// *****      Arguments keyword    ***********
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   // argument keyword only exists in function declaration not in arrow functions
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

// *****************    Primitive Data Types *******************

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// let lastName = 'Williams'; // primitive type stored in stack
// let oldLastName = lastName;
// lastName = 'Davis';
// // console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // Object referenced type stored in stack and heap
marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage', marriedJessica);

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow clone
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
