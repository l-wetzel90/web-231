/*
============================================
; Title:  Assignment 5.4
; Author: Loren Wetzel
; Date:   26 June 2019
; Modified By:
; Description: create filtered lists using
; .map() and iterate over list with .forEach()
;===========================================
*/
'use strict';

//header output
const header = require('../wetzel-header.js');
console.log(header.display("Loren", "Wetzel", "Assignment 5.4"));

//start program

//create array of composer objects
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

//create string array using .map() method combined with a function
var composersByRating = famComposers.map(function (composer) {
  //*******I am not sure I did this right.*******
  var rateLast = "Rating: " + composer.rating
    + "\nComposer: " + composer.lastName + "\n";
  return rateLast;
});

//create string array using .map() method combined with a function
var composersByGenre = famComposers.map(function (composer) {
  //This either
  var genreLast = [composer.genre, composer.lastName];
  return genreLast;
});

//output
console.log("-- COMPOSER BY RATING --");
//using .forEach to output ratings and last name
composersByRating.forEach(function (poser) {
  console.log(poser)
});

//output
console.log("-- COMPOSER BY GENRE --");
//using .forEach to output ratings and last name
composersByGenre.forEach(function (poser) {
  console.log("Genre: " + poser[0] + "\nComposer: " + poser[1] + "\n");
});

//end program
