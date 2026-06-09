const readLine = require("readline-sync")
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

//Common JS Module
module.exports = {
    getInputFromKeyboard: getUserInputNumber,
    getUserInputNumberFuncExpresstion
}