const readLine = require("readline-sync");
let inputStr = readLine.question("Please Input Your String: ");

let removeCommaStr = inputStr.replace(/,/gm, "");
let splitStr = removeCommaStr.split(" ");

function countWords(words) {
    const wordCounts = {};

    for (let word of words) {
        if (wordCounts.hasOwnProperty(word)) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    }

    for (let word in wordCounts) {
        console.log(`${word}: ${wordCounts[word]}`);
    }
}

const str = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
countWords(splitStr);
