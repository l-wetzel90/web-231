/*
============================================
; Title:  rattanavilay-discussion-3.1.js
; Author: Thip Rattanavilay
; Date:   12 June 2019
; Modified By:
; Description: simple program using a for, while, if or switch statement with errors
;===========================================
*/

// Imported the header file for this exercise 3.1 - Week 3
// const header = require('../rattanavilay-header.js');

// Output
// console.log(header.display('Thip', 'Rattanavilay', 'Discussion 3.1 - Week 3'));
// console.log("\n");

// End Program

console.log("NBA Finals 2019! The team with the highest basketball hoops Wins!\n");

//variables not declared. added var declaration.
var warriors=Math.floor(Math.floor(100));
var raptors=Math.floor(Math.floor(103));

console.log("Golden State Warriors: " + warriors);//Warriors not same as variable. needs to be warriors
console.log("Toronto Raptors: " + raptors);//Raptors not the same variable. needs to be raptors
console.log("\n");


if(warriors>raptors) {//Raptors not the same variable. needs to be raptors
    console.log("Golden State Warriors Wins!");
}
else if(raptors>warriors) {//Warriors not same as variable. needs to be warriors
console.log("Toronto Raptors Wins!");
}
else {
    console.log("There is a tie!");
}

console.log("\n");

var warriors = 100;

while(warriors < 0) {
  n++;
}

console.log("With only "  + warriors + " points on the board, the Warriors are is the losers!");

// Start Program

/*
  Expected output:
Thip Rattanavilay
Discussion 3.1 - Week 3
Date: 6/12/2019
NBA Finals 2019! The team with the highest basketball hoops Wins!
Golden State Warriors: 100
Toronto Raptors: 103
Toronto Raptors Wins!
With only 100 points on the board, the Warriors are is the losers!
*/
