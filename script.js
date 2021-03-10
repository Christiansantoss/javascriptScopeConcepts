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

// Example
// clean code
// Declare variables at the top of each scope
// Always declare functions first and use them after declaration

if (!numProducts) deleteShoppingCart(); // because of hoisting the all products gets deleted
// even when products is 10

const numProducts = 10; //dont use var to declare variables use const or let if you need to reassign a variable

function deleteShoppingCart() {
  console.log('All Products deleted');
}
