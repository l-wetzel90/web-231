/*
============================================
; Title:  Exercise 6.3
; Author: Loren Wetzel
; Date:   2 July 2019
; Modified By:
; Description: Create an object literal for
;   a ticketing system and display each
;   of the fields in a single string
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 6.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

// start program

var person = {

  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones"

};

console.log("id: " + person.id + ", name: " + person.name
  + ", requester: " + person.requester);

//end program
