let intArr = [1, 2, 3, 4, 5, 30, 29, 31, 46];

let numberOfOdd = 0;
let numberOfEven = 0;

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] == 0) {
        console.log(`Zero is not odd or even!`)
    } else {
        if (intArr[index] % 2 == 0) {
            numberOfEven++;
        } else {
            numberOfOdd++;
        }
    }
}

console.log(`Number Of Odd: ${numberOfOdd}`)
console.log(`Number Of Even: ${numberOfEven}`)