/*
============================================
; Title:  Exercise 6.2
; Author: Loren Wetzel
; Date:   2 July 2019
; Modified By:
; Description: Throw an error of your choosing
;   Using a try, catch, and finally block,
;   catch and display the error
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 6.2"));

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//start program

//try catch block
//check if one random number is module of another random number
try {
  var x = randomNumber100();

  var y = randomNumber10();

  var isMod = x % y;

  //custom error message
  //found here https://stackoverflow.com/questions/464359/custom-exceptions-in-javascript
  var error = { reason: x + " % " + y + " is not 0" }

  // if isMod var not 0 throw error
  if (isMod != 0) throw error.reason;

  //output if isMod = 0
  console.log(x + " % " + y + " = " + isMod);

} catch (err) {

  console.log("Catch clause: " + err);

} finally {

  console.log("Finally clause reached");

}

/**
 * Params:
 * Response: random number
 * Description: creates random number between 0-100
 */
function randomNumber100() {
  return Math.floor((Math.random() * 100) + 1)
}
/**
 * Params:
 * Response: random number
 * Description: creates random number between 0-10
 */
function randomNumber10() {
  return Math.floor((Math.random() * 10) + 1)
}

//end program
