/*
============================================
; Title:  exercise 2.3
; Author: Loren Wetzel
; Date:   8 June 2019
; Modified By:
; Description: creating functions
;===========================================
*/


//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren","Wetzel","Assignment 2.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//function properties
myName.loren = "Loren Wetzel";

//function
function myName() {
  return myName.loren;
}

//output
console.log('\n');
console.log("Hello " + myName() + "!");
