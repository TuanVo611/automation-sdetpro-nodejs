// Send request to a server and just stop when response is 5xx
const readline = require("readline-sync")
let guessingTime = 0;
let randomNumber = generateRandomNumber();
do {
    let userNumber = getUserNumber();
    if (userNumber === randomNumber) {
        console.log(`Congratulations!`);
        break;
    }
    guessingTime++;
} while (guessingTime < 3);

if(guessingTime === 3){
    console.log("Lucky later!");
} else {
    console.log(`See You Again!`);
}

function generateRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNumber(){
    return Number(readline.question(`Please select an option!`))
}