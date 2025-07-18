let myArr = [1, 2, 3, 4, 5]

//filter just even number from array
let myEvenNumber = myArr.filter(isOddNumber)
console.log(myEvenNumber);

function isEvenNumber(number, index, array) {
    console.log(`Validating value ${number} at index ${index} and the array is now: ${array} `)
    return number % 2 === 0
}

function isOddNumber(value, index, array) {
    return !isEvenNumber(value, index, array)
}

// Delete | Splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let clonedArray = [...myArr]
let returnedArr = clonedArray.splice(startIndex, deleteCount, insertValue);
console.log(returnedArr);
console.log(clonedArray);
console.log(myArr)