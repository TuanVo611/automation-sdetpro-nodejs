let array = [12, 34, 1, 16, 28]

for (let outerIndex = array.length - 1; outerIndex > 0; outerIndex--) {
    for (let innerIndex = 0; innerIndex < outerIndex; innerIndex++) {
        swap(array, innerIndex);
    }
}

function swap(array, index) {
    let temp = 0;
    if (array[index] > array[index + 1]) {
        temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
    }
}

console.log(array);