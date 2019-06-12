/*
============================================
; Title:  Exercise 3.3
; Author: Loren Wetzel
; Date:   12 June 2019
; Modified By:
; Description: switch statement exercise
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 3.3"));


//start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

//variable
let eventKeyCode = 13

//switch statement and output
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}

//end program
