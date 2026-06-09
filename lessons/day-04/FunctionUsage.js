const Util = require("../utils/UtilMethod.js");

//Destructure
const { getInputFromKeyboard,
    getUserInputNumberFuncExpresstion   
} = require("../utils/UtilMethod.js");

let userInput = getInputFromKeyboard;
// userInput = Util.getUserInputNumber();
console.log(userInput)
// let userInputNumberFuncExpresstion = getUserInputNumberFuncExpresstion();
let userInputNumberFuncExpresstion = Util.getUserInputNumberFuncExpresstion();
console.log(userInputNumberFuncExpresstion)