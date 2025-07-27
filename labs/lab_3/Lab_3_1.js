// let intArr = [1, 2, 3, 4, 5, 30, 29, 31, 46];
const readline = require("readline-sync");

let totalArrayNums = Number(readline.question("How many numbes: "));
if(totalArrayNums > 10 || totalArrayNums < 2){
    console.log(`We accept 2-10 numbers only!`);
    process.exit(1);
}

//Loop to add nums into array
let array = [];
for (let index = 0; index < array.length; index++) {
    let addNumber = Number(readline.question(`Please input number ${index + 1}: `));
    array.push(addNumber);
}
let numberOfOdd = 0;
let numberOfEven = 0;
let arrayOdd = [];
let arrayEven = [];

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] === 0) {
        console.log(`Zero is not odd or even!`)
    } else {
        if (intArr[index] % 2 === 0) {
            numberOfEven++;
            arrayEven.push(intArr[index]);
        } else {
            numberOfOdd++;
            arrayOdd.push(intArr[index]);
        }
    }
}

console.log(`Number Of Odd: ${numberOfOdd}, array: ${arrayOdd}`)
console.log(`Number Of Even: ${numberOfEven}, array: ${arrayEven}`)