let array = [1, 2, 3, 4, 5]

const TARGET_NUMBER = 3;

// for (let index = 0; index < array.length; index++) {
//     const value = array[index];
//     if(value === TARGET_NUMBER){
//         console.log(`Found ${TARGET_NUMBER} at index ${index}`);
//         break;
//     }
//     console.log(value)
// }

// console.log(`${TARGET_NUMBER} not found`);

// where break will be ended up

let foundIndex = findIndex(array,TARGET_NUMBER);
if(foundIndex < 0){
    console.log(`${TARGET_NUMBER} not found!`)
} else {
    console.log(`Found ${TARGET_NUMBER} at index ${foundIndex}`)
}

/**
 * 
 * @param {*} array
 * @param {*} targetNumber
 * @returns a value as index, -1 if not found
 */

function findIndex (array, targetNumber){
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if(value === targetNumber){
            return index;
        }
    }
    return -1;
}