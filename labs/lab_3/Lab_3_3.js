let intArr = [12, 34, 1, 16, 28]

function sortArr(intArr) {
    let temp = 0;

    for (let i = 0; i < intArr.length - 1; i++) {
        for (let j = i + 1; j < intArr.length; j++) {
            if (intArr[i] > intArr[j]) {
                temp = intArr[j];
                intArr[j] = intArr[i];
                intArr[i] = temp;
            }
        }
    }
    return intArr;
}

console.log(sortArr(intArr));