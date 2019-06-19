/*
============================================
; Title:  Exercise 4.2
; Author: Loren Wetzel
; Date:   19 June 2019
; Modified By:
; Description: using a function to iterate
;  and display a parameterized array
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 4.2"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Blueberry
  Pineapple
  Orange
  Apple
  Kiwi
*/

//string array
const fruits = ["Blueberry", "Pineapple", "Orange", "Apple", "Kiwi"];

/**
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */

function getFruit(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//outputs array to console
getFruit(fruits);

//end program
