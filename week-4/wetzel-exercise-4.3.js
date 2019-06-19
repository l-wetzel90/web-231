/*
============================================
; Title:  Exercise 4.3
; Author: Loren Wetzel
; Date:   19 June 2019
; Modified By:
; Description: use conditionals to determine
;   the equality of an array value
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 4.3"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Scooter
  Semi

  -- SELECTED VALUE --
  Truck

  -- SELECTED VALUE --
  Scooter
*/

// array of string values
const vehicles = ["Car", "Truck", "Motorcycle", "Scooter", "Semi"]

// output
console.log(" -- DISPLAYING ARRAY ITEMS --");
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

/**
 * Params: array, vehicleValue
 * Response: array element
 * Description: Returns a filtered value from an array
 */
function getValue(arr, vehicleValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === vehicleValue) {
      return arr[i];
    }
  }
}

// output
console.log("\n -- SELECTED VALUE --");
console.log(getValue(vehicles, "Truck"));

// output
console.log("\n -- SELECTED VALUE --");
console.log(getValue(vehicles, "Scooter"));

//end program
