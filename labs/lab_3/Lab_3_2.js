let intArr = [1, 2, 3, 4, 5, 6, 0];

let maxValue = 0;

function findMaxValue(intArr) {
    let maxValue = 0;

    if (!Array.isArray(intArr) || intArr.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    for (let index = 0; index < intArr.length; index++) {
        if (intArr[index] > maxValue) {
            maxValue = intArr[index]
        }
    }
    return maxValue;
}

maxValue = findMaxValue(intArr);

console.log(maxValue);

let minValue = 0;

function findMinValue(intArr) {
    let minValue = intArr[0];

    if (!Array.isArray(intArr) || intArr.length === 0) {
        throw new Error("Input must be a non-empty array");
    }

    for (let index = 0; index < intArr.length; index++) {
        if (intArr[index] < minValue) {
            minValue = intArr[index]
        }
    }
    return minValue;
}

minValue = findMinValue(intArr);

console.log(minValue);