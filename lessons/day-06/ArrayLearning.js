/**
 * CRUD: Create Read Update Delete + Util (Built-in) Methods
 */

let myArr = [1, 2, 3, 4, 5, 3];
// 1st element: Index == 0
// last element: Index == myArr.length - 1

// Get the array's length:
console.log(`Array's length: ${myArr.length}`)

// Get the last element's value:
let lastElementIndex = myArr.length - 1
let lastElementValue = myArr[lastElementIndex]
console.log(`Last element's value: ${lastElementValue}`)
console.log(`Last element's value: ${myArr[myArr.length - 1]}`)


for (let i = 0; i < myArr.length; i++) {
    console.log(`Index ${[i]} have element's value: ${myArr[i]}`)
}

// Update: Using index as well but different syntax - Assignment Syntax

myArr[lastElementIndex] = 50;

console.log(myArr[lastElementIndex])

// Undefined Holes
myArr[10] = 1000; // Java: IndexOutOfBound
console.log(`Element's value at index 10: ${myArr[10]}`)

for (let i = 0; i < myArr.length; i++) {
    console.log(`Index ${[i]} have element's value: ${myArr[i]}`)
}

// push last element into array
myArr.push(101)

// remove last element in array:
myArr.pop()