const readLine = require("readline-sync");
let inputNumber = Number(readLine.question("Input Number: "));

if (Number.isNaN(inputNumber)) {
    console.log("The input number is not a number!")
} else if (inputNumber === 0) {
    console.log("Zero is not considered as even or odd number!");
} else {
    let evenNumber = inputNumber % 2 === 0;
    if (evenNumber) {
        console.log("Number is even number!");
    } else {
        console.log("Number is odd number!");
    }
}

/**
 * 1. Plain logic
 * 2. Put details: variable, calculator,...
 * 3. Make sure main requirements met
 * 4. Check edge cases
 *  4.1. If have time, solve them
 *  4.2. If not, capture in a ticket and make things transparency
 * 5. Fine tune logic if any
 * 
 * Reliable: Readability, maintanible, extendable -> Reliable
 */