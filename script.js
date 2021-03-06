'use strict';

// calcAge function is a global scope but creates its own local/block scope
function calcAge(birthYear) {
  const age = 2020 - birthYear;

  // variable look up example below
  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

// global scope below
const firstName = 'Jonas';
calcAge(1997); // function call that is global scoped
// printAge();
