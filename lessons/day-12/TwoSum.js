/**
 * Input: [3, 7, 22, 1], target number: 8
 * Output: [index1, index2] | []
 * Outer loop: outer index
 * firstNum
 * findingNumber = targetNumber - firstNum
 *      inner loop
 *          outerIndex + 1
 *              if currentNumber === findingNumber
 *              return [outerNumber, innerNumber]
 * 
 * return []
 */

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;

let indicesWithBruteForce = findIndicesBruteForce(givenArray, targetNumber);
let indicesWithMap = findIndicesMap(givenArray, targetNumber);
console.log(indicesWithBruteForce);
console.log(indicesWithMap);

// Brute Force | Time Complexity: 0(n^2)
function findIndicesBruteForce(givenArray, targetNumber) {
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length - 1; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        const findingNumber = targetNumber - firstNum;
        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < givenArray.length; secondNumIndex++) {
            const secondNumber = givenArray[secondNumIndex];
            if (secondNumber === findingNumber) {
                return [firstNumIndex, secondNumIndex];
            }
        }
    }
    return [];
}

//Time Complexity: 0(n)
function findIndicesMap(givenArray, targetNumber) {
    let numMap = new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++) {
        const firstNum = givenArray[firstNumIndex];
        const lookingNumber = targetNumber - firstNum;

        if (numMap.has(lookingNumber)) {
            return [numMap.get(lookingNumber), firstNumIndex];
        }
        numMap.set(firstNum, firstNumIndex);
    }
    return [];
}