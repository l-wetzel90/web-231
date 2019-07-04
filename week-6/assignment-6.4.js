/*
============================================
; Title:  Assignment 6.4
; Author: Loren Wetzel
; Date:   2 July 2019
; Modified By:
; Description: Create an object literal
;   ticket with a nested object
;   literal person and display the results
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 6.4"));

//start program

//object literal with nested object literal
var ticket = {
  id: 135,
  name: "It won't work!!!!",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: 1,
  personId: 5,

  person: {
    id: 5,
    firstName: "Loren",
    lastName: "Wetzel",
    jobTitle: "Programmer I"
  }
};

//output
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated
  + " and assigned to employee " + ticket.person.firstName + " "
  + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");

//end program
