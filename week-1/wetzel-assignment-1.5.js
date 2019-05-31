/*
Title: Exercise 1.5 Types, values and variables
Author: Loren Wetzel
Date: 31 May 2019
Modified By: 
Description: Creating and assigning 
variables in js
*/

//declaring and assigning variables
//first employee
var firstName = "Loren", 
lastName = "Wetzel", 
address = "123 Something Ave", 
payRate = 25,
hireDate = new Date(2015, 7, 9);

//output first employee
console.log("Employee 1: " + lastName + ", " + firstName + "\n" 
+ "Address: " + address + "\n"
+ "Hourly Pay Rate: $" + payRate.toFixed(2) + "\n"
+ "Hired On: " + hireDate.toLocaleDateString() + "\n");

//re assigning vars to create second employee
firstName = "Romeo", 
lastName = "Wetzel", 
address = "123 Something Street", 
payRate = 15.26,
hireDate = new Date(2017, 3, 25);


//output second employee
console.log("Employee 2: " + lastName + ", " + firstName + "\n" 
+ "Address: " + address + "\n"
+ "Hourly Pay Rate: $" + payRate.toFixed(2) + "\n"
+ "Hired On: " + hireDate.toLocaleDateString() + "\n");

//re assigning vars to create third employee
firstName = "Ashton", 
lastName = "Wetzel", 
address = "123 Something Blvd", 
payRate = 8.79,
hireDate = new Date(2019, 1, 13);

//output third employee
console.log("Employee 3: " + lastName + ", " + firstName + "\n" 
+ "Address: " + address + "\n"
+ "Hourly Pay Rate: $" + payRate.toFixed(2) + "\n"
+ "Hired On: " + hireDate.toLocaleDateString() + "\n");