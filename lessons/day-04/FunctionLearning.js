//DRY stands for Don't repeat yourself -> gather the logic and reuse
// Single Responsibility (Tính đơn nhiệm)
// Clean code

/**
 * Basic naming convention for function
 * ---
 * 1. Meaning
 * 2. Start with a verb + lower case
 * 3. camelCase
 * 
 */

const readLine = require("readline-sync")
let userInputNumber = getUserInputNumber();
console.log(`User Input Number: ${userInputNumber}`);

// 1,2,3: arguments
let result = addNumber(1,2,3);

//Method 01: [ Function Declaration ] | Hoisting
function getUserInputNumber(){
    let inputNumber = readLine.question("Your Number: ")
    return Number(inputNumber);
};

//Method 02: [ Function Expression ] | NO Hoisting
const getUserInputNumberFuncExpresstion = function(){
    let inputNumber = readLine.question("Your Number: ")
    return Number(inputNumber);
}


//Parameters
function addNumber(number1, number2){
    if(number1 && number2){
        console.log(`Number 1: ${number1}, Number 2: ${number2}`);
        return number1 + number2;
    } else {
        throw new Error('Number 1 and Number 2 must be numbers!')
    }
}

console.log(result);




