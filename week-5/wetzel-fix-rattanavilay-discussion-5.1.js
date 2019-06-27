/*
============================================
; Title:  rattanavilay-discussion-5.1.js
; Author: Thip Rattanavilay
; Date:   25 June 2019
; Modified By: Loren Wetzel
; Description: Advance Array error program
;===========================================
*/

/*
Thip Rattanavilay
Discussion 5.1 - Week 5
Date: 6/19/2019

--Expected output--
I would like to buy 2 oranges!
*/

//start program

// Imported the header file for this exercise 4.1 - Week 4
// const header = require('../rattanavilay-header.js');

// // Output
// console.log(header.display('Thip', 'Rattanavilay', 'Discussion 4.1 - Week 4'));

// new line
console.log("\n")

// Declaring a variable let map value new Map
let map = new Map();

// map set ('banana', 1);('orange', 2);('meat', 4);
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

// now obj = { banana: 1, orange: 2, meat: 4 }
// let obj = Object.fromEntries(map)
/*
was 'Map", needed to be lowercase to match
node.js doesn't support .fromEntries()
*/

// Expected Output: I would like to buy 2 oranges!
console.log("I would like to buy " + map.get('orange') + " oranges!");
/*
needed '+' to concat
bypassed the object and used .get() for maps
to access the value of key 'orange'
*/

// end program
