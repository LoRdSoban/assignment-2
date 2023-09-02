"use strict";
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var arr = [1, 2, 3, -4, 5, -6, 7, 8, -9, 10];
console.log("Original array: " + arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    }
}
console.log("Modified array: " + arr);
