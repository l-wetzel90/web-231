/*
============================================
; Title:  Assignment 3.4
; Author: Loren Wetzel
; Date:   12 June 2019
; Modified By:
; Description: using for loop to create var
;   and nested if/else to compare it
;   to constant var
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 3.4"));

//start program

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

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

//variable
var constNum = 8;

//output using for loop and if statement
for (var x = 0; x < 10; x++) {
  var rando = randomNumber();
  if (match(constNum, rando)) {
    logMatch(constNum, rando);
  } else {
    logMismatch(constNum, rando);
  }
}

//end program
