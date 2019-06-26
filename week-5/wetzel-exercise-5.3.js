/*
============================================
; Title:  Exercise 5.3
; Author: Loren Wetzel
; Date:   25 June 2019
; Modified By:
; Description: Using JavaScripts built-in
;   forEach() function, iterate over the
;   composer objects and output the results
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Exercise 5.3"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//create array of objects
var famComposers = [
  {
    firstName: 'Ludwig van',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: '8'
  },
  {
    firstName: 'Wolfgang Amadeus',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: '10'
  },
  {
    firstName: 'Johann Sebastian',
    lastName: 'Bach',
    genre: 'Classical',
    rating: '9'
  },
  {
    firstName: 'Joseph',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: '6'
  },
  {
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: '5'
  }
];
//output
console.log(" -- COMPOSERS -- ");

//using .forEach() to output formated object
famComposers.forEach(function (composer) {
  console.log(
    "Last Name: " + composer.lastName +
    ", Genre: " + composer.genre +
    ", Rating: " + composer.rating
  )
});

//end program
