const readLine = require("readline-sync");

let arrivalTimeStr = readLine.question("Arrival Time: ")
let arrivalTime = Number(arrivalTimeStr)
let isHeOnTime = arrivalTime === 7;

if (isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write a letter!");
}

//Ternary operator
let msg = isHeOnTime ? "Let's Talk! " : "Write a letter!"
console.log(msg)




if (!isHeOnTime) {
    console.log("Let's talk!");
} else {
    console.log("Write a letter!");
}


//Mimic real situation if life
if (isSalaryIncreased) {
    //Nested if...else condition
    //Stay at company
    if (isSightlyDiff) {
        //Stay a while
    } else {
        // Stay longer
    }
} else {
    //Leave
}