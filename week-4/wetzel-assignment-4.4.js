/*
============================================
; Title:  Assignment 4.4
; Author: Loren Wetzel
; Date:   19 June 2019
; Modified By:
; Description: use conditionals to determine
;  the equality of an array value
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 4.4"));

//start program

//one-dimensional 5 element array
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

/**
 * Params: element, value
 * Response: true/false
 * Description: Returns true/false given the comparison
 */
function getValue(x, val) {
  return x === val;
}

// output
console.log(" -- ORIGINAL ARRAY --");
states.forEach(function (state) {
  console.log(state);
});

// output
console.log("\n -- SORTED ARRAY --");
states.sort().forEach(function (state) {
  console.log(state);
});

// output
console.log("\n --Selected value-- ");
var selectedValue = states.filter(function (x) {
      return getValue(x, "Iowa");
    });
console.log(selectedValue[0])

//end program
