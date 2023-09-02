"use strict";
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorial(num) {
    let result = 1;
    while (num > 0) {
        result *= num;
        num--;
    }
    return result;
}
console.log("Fatorial of 5: " + factorial(5));
