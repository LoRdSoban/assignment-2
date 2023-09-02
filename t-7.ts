// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function sumOfArray(arr: number[]) {
    let sum: number = 0;
    let i: number = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

var arr: number[] = [1, 2, 3, 4, 5];

console.log("Original array: " + arr);
console.log("Sum of array: " + sumOfArray(arr));
