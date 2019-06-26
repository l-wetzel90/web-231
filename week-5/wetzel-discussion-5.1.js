/*
============================================
; Title:  Discussion 5.1
; Author: Loren Wetzel
; Date:   26 June 2019
; Modified By:
; Description: create a simple JavaScript
;  program using a keyed collection array
;  with at least two (2) errors.
;===========================================
*/
'use strict';

//header
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Discussion 5.1"));

/*
  Expected output:

  Loren Wetzel
  Discussion 5.1
  Date: 6/26/2019

  wetzel-discussion-5.1.js:16
  Hey y'all, my name is Loren Wetzel.
  My kids' names are Romeo Wetzel(oldest),
  Ashton Vodicka(middle),
  and Aurora Tyson(youngest)

*/

//start program

//array of objects
names = [
  {
    fName: "Loren",
    lName: "Wetzel"
  },
  {
    fName: "Romeo",
    lName: "Wetzel"
  },
  {
    fName: "Ashton",
    lName: "Vodicka"
  },
  {
    fName: "Aurora",
    lName: "Tyson"
  }
];

//map array and return combined names
let fullName = names.map((name) => {
  return name.fName + "" + name.lName;
});

//output
console("Hey y'all, my name is " + fullName[0] +
  ".\nMy kids' names are " + fullName[1] + "(oldest),\n"
  + fullName[2] + "(middle),\nand "
  + fullName[3] + "(youngest)");

