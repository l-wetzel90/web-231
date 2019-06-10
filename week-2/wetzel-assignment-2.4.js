/*
============================================
; Title:  exercise 2.4
; Author: Loren Wetzel
; Date:   8 June 2019
; Modified By:
; Description: creating functions
;===========================================
*/

//header
var header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 2.3"));

// start program

/*
    Expected output:

    FirstName LastName
    Assignment 2.4
    Today's Date

    Hello my name is <concatenated full name>!

    Today's date is <formatted date> and the current temperature is <formatted number with 1 fixed decimal position>

    I am <parsed int> years old and my savings account goal is <parsed float value> dollars.

*/

// function(s) go here...
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function dateWriter(year, month, day) {
  return new Date(year, month - 1, day).toDateString();
}

function formatNumber(number, fixedPosition) {
  return number.toFixed(fixedPosition);
}

function convertToInt(number) {
  return parseInt(number);
}

function convertToFloat(number) {
  return parseFloat(number).toLocaleString();
}

// output
console.log('\n');
console.log("Hello my name is " + fullName('Loren', 'Wetzel') + "!\n");
// console.log('\n');
console.log("Today's date is " + dateWriter(2019, 6, 8) + " and the current temperature is " +
formatNumber(84.65, 1) + ".\n");
// console.log('\n');
console.log("I am " + convertToInt('37') + " years old, and my savings account goal is $"+
  convertToFloat(500000) + " dollars.");

// end program
