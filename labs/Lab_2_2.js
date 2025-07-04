const readLine = require("readline-sync");
let inputNumber = readLine.question("Input Number: ")

if (inputNumber % 2 == 0) {
    console.log("Number is even number");
} else {
    console.log("Number is odd");
}