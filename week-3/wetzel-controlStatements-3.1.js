/*
============================================
; Title:  discussion board 3.1
; Author: Loren Wetzel
; Date:   12 June 2019
; Modified By:
; Description: simple program using a for,
;   while, if or switch statement with errors
;===========================================
*/

/*
  Expected output:

  Let's count...
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

  Now let's add them up...
  0 + 1 = 1
  1 + 2 = 3
  3 + 3 = 6
  6 + 4 = 10
  10 + 5 = 15
  15 + 6 = 21
  21 + 7 = 28
  28 + 8 = 36
  36 + 9 = 45
  45 + 10 = 55
  55 + 11 = 66
  66 + 12 = 78
  78 + 13 = 91
  91 + 14 = 105
  105 + 15 = 120
*/

console.log("Let's count...")

//array variable to store numbers in
var numArray;

//populate values into array
for (i = 0; i < 20; i++) {
  numArray[i] = i + 1;
  console.log(numArray.join(', '));
}

console.log("\nNow let's add them up...")

//the sum of numArray
var total = 0;
for (num in numArray) {
  total += num;
  console.log(total - numArray[num] + " + " + numArray[num] + " = " + total);
}
