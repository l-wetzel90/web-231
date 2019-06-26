/*
============================================
; Title:  Exercise 5.2
; Author: Loren Wetzel
; Date:   25 June 2019
; Modified By:
; Description: Using JavaScripts built-in
;   forEach() function, iterate over the
;   array and output the results.
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 5.2"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//string array of foods
var foods = ["Blueberries", "Pizza", "Philly Cheesesteak", "Meatloaf", "Peanut Butter"];

//iterating over array with .forEach() to output elements in console
foods.forEach(function (food) {
  console.log(food)
});

//end program
