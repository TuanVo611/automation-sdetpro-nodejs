const Util = require("../day-04/UtilMethod.js");

//Destructure
const { getInputFromKeyboard,
        getUserInputNumberFuncExpresstion 
} = require("../day-04/UtilMethod.js");

let userInput = getInputFromKeyboard;
// userInput = Util.getUserInputNumber();
console.log(userInput)
// let userInputNumberFuncExpresstion = getUserInputNumberFuncExpresstion();
let userInputNumberFuncExpresstion = Util.getUserInputNumberFuncExpresstion();
console.log(userInputNumberFuncExpresstion)