// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

var readlineSync = require('readline-sync');

var celsiusTemperatures: number[] = [];
var fahrenheitTemperatures: number[] = [];

var i: number = 0;

console.log("Enter temperatures in Celsius. Enter 'q' to quit.");
while (true) {
    var celsiusTemperature = readlineSync.question(`Value ${i+1}: `);
    if (celsiusTemperature == "q") {
        break;
    }
    celsiusTemperatures.push(Number(celsiusTemperature));
    i++;
}

i = 0;

while (i < celsiusTemperatures.length) {
    fahrenheitTemperatures.push((celsiusTemperatures[i] * 9 / 5) + 32);
    i++;
}

console.log("Celsius temperatures: " + celsiusTemperatures);
console.log("Fahrenheit temperatures: " + fahrenheitTemperatures);

