const readline = require("readline-sync");


const inputStr = getSentenceFromUser();
const individualWords = processInputStr(inputStr);
const groupWords = groupWordFromStr(individualWords);
console.log(groupWords);

//Functions
function getSentenceFromUser() {
    return readline.question("Please input your sentence: ");
}

function processInputStr(inputStr) {
    return inputStr.replace(/,/gi, "").split(" ");
}

function groupWordFromStr(individualWords) {
    let returnObj = {};
    for (const word of individualWords) {
        if (returnObj[word]) {
            returnObj[word] = returnObj[word] + 1;
        } else {
            returnObj[word] = 1;
        }
    }
    return returnObj;
}