let intArr1 = [1, 12, 16, 28, 34]
let intArr2 = [1, 13, 16, 27, 99]


function mergeArr(intArr1, intArr2) {
    let intResultArr = [];
    let i = 0;
    let j = 0;

    for (; i < intArr1.length;) {
        for (; j < intArr2.length;) {
            if (intArr1[i] <= intArr2[j]) {
                intResultArr.push(intArr1[i]);
                i++;
            } else {
                intResultArr.push(intArr2[j]);
                j++;
            }
        }

    }

    while (i < intArr1.length) {
        intResultArr.push(intArr1[i])
    }

    while (j < intArr2.length) {
        intResultArr.push(intArr2[j])
    }

    return intResultArr
}

console.log(mergeArr(intArr1, intArr2))