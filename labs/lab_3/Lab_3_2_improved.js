let intArr = [1,1,1,1,1,1];

let minCurrentValue = intArr[0];
let maxCurrentValue = intArr[0];
let minCurrentIndexes = [0];
let maxCurrentIndexes = [0];

for (let index = 1; index < intArr.length; index++) {
    const currentValue = intArr[index];

    if (currentValue < minCurrentValue) {
        minCurrentValue = currentValue;
        minCurrentIndexes = []
        minCurrentIndexes.push(index)
    } else if (currentValue === minCurrentValue) {
        minCurrentIndexes.push(index)
    }

    if (currentValue > maxCurrentValue) {
        maxCurrentValue = currentValue;
        maxCurrentIndexes = []
        maxCurrentIndexes.push(index)
    } else if (currentValue === maxCurrentValue) {
        maxCurrentIndexes.push(index)
    }
}

if (minCurrentValue === maxCurrentValue) {
    console.log(`All element have same as value: ${minCurrentValue}`)
} else {
    console.log(minCurrentIndexes)
    console.log(maxCurrentIndexes)
}

