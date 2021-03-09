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

const myName = 'jonas';

if (myName === 'jonas') {
  console.log(`jonas is a ${job}`); // TEMPORAL DEAD ZONE FOR JOB VARIABLE - REFERENCE ERROR CANNOT ACCESS 'JOB' BEFORE INITIALIZATION
  const job = 'teacher';
  const age = 2037 - 1989;
  console.log(age);
  console.log(x); // REFERENCE ERROR X IS NOT DEFINED
}
