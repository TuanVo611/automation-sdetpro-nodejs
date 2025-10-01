let myNum1 = 1;
let myNum2 = 2;

// 1. Right operand and left operand
let result = myNum1 + myNum2
console.log(result);

console.log("Total result: " + result);
console.log("Total result: ", result);

//String litteral/template: backstick
console.log(`5/2: ${5 / 2}`);
console.log(`4/2: ${4 / 2}`);
console.log(`10/3: ${10 / 3}`);

//Rounding
let roundingNearest = Math.round(9/2)
console.log(`9/2(rounding nearest): ${roundingNearest}`);

//Rouding floor
let roundingFloor = Math.floor(9/2)
console.log(`9/2(rounding floor): ${roundingFloor}`);


//Rouding ceiling
let roundingCeiling = Math.ceil(10/3)
console.log(`10/3(rounding ceiling): ${roundingCeiling}`);

//To fixed number
let anotherResult = 10/3
let MAX_FLOATING_NUMBER = 2
let toFixedNumber = anotherResult.toFixed(MAX_FLOATING_NUMBER);
console.log(`10/3(to fixed number)): ${toFixedNumber}`);

//square up a number
let squareNumber = 9*3
console.log(squareNumber);
