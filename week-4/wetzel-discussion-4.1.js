/*
============================================
; Title:  Discussion 4.1
; Author: Loren Wetzel
; Date:   19 June 2019
; Modified By:
; Description: create a simple JavaScript
;  program using an array with at least
;  two (2) errors.
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Discussion 4.1"));

/*
Expected output:

  FirstName LastName
  Discussion 4.1
  Today's Date

  White's hex code is #FFFFFF
  Black's hex code is #000000
  Red's hex code is #FF0000
  Green's hex code is #00FF00
  Blue's hex code is #0000FF
*/

//start program

//define 2 arrays
var colors = ["White", "Black", "Red",, "Green", "Blue"];
var hexCode = ["#FFFFFF", "#000000", "#FF0000", "#00FF00",, "#0000FF"];

/**
 * Params: array, array2
 * Response: console message
 * Description: Writes the contents of 2 arrays to the console window
 */
function hexOfColor(arr, arr2) {
  //third array
  var arr3;

  for (let i = 0; i < arr.length; i++) {

    arr3[i] = arr[i] + "'s hex code is " + arr2[i];

    console.log(arr3[i])
  }
}

//output of combined arrays to console
hexOfColor(colors, HexCode)

//end program
