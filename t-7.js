"use strict";
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function sumOfArray(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);
console.log("Sum of array: " + sumOfArray(arr));
