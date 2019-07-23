/*
============================================
; Title:  Exercise 7.2
; Author: Loren Wetzel
; Date:   25 June 2019
; Modified By:
; Description: Create an employee constructor
;   object with four (4) parameters/fields
;   Loop over the array and output the results
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 7.2"));

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

//start program

//constructor object
function Employee(id, firstName, lastName, title) {

  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//array of objects made from constructor
var employees = [

  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst")
];

// getEmployee(id) function
function getEmployee(id) {
  let employ = employees.find(emp => emp.id === id);
  console.log('found  ' + employ.firstName)
};

getEmployee(3);
//output
employees.forEach(function (emp) {
  console.log(emp.id + " " + emp.firstName + " " + emp.lastName + " " + emp.title)
});
