"use strict";
// Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified 
// index in the array. Return the modified array.
function insertValue(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);
let modifiedArr = insertValue(arr, 2, 10);
console.log("Modified array: " + modifiedArr);
