'use strict';
/*
============================================
; Title:  Exercise 3.2
; Author: Loren Wetzel
; Date:   12 June 2019
; Modified By:
; Description: creating function to test for pattern matching
;===========================================
*/

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 3.2"));

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

//start program

//function to compare variables
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

//functions to output match() results
function logMismatch(x, y) {
  console.log(x + " and " + y + " do not match!");
}

function logMatch(x, y) {
  console.log(x + " and " + y + " do match!");
}

//variables
var test1 = "Truck", test2 = "Car",
  test3 = "Bike", test4 = "Bike",
  test5 = 4, test6 = 3;

//output of match()
console.log(match(test1, test2));
console.log(match(test3, test4));
console.log(match(test5, test6) + '\n');


//output of if else blocks
if (match(test1, test2)) {
  logMatch(test1, test2);
} else {
  logMismatch(test1, test2);
}

if (match(test3, test4)) {
  logMatch(test3, test4);
} else {
  logMismatch(test3, test4);
}

if (match(test5, test6)) {
  logMatch(test5, test6);
} else {
  logMismatch(test5, test6);
}

//end program
