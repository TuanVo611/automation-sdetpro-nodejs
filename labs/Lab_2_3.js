const readLine = require("readline-sync");
const minBMI = 18.5;
const maxBMI = 24.9;

const userHeight = readLine.question("User Height: ");
const userWeight = readLine.question("User Weight: ");
const BMI = userWeight / (userHeight * userHeight);

console.log(`Min BMI: ${minBMI}, Max BMI: ${maxBMI}, Current Your BMI: ${BMI}`)

if (BMI <= minBMI) {
    console.log("Underweight ");
    let increaseWeight = minBMI * userHeight * userHeight - userWeight;
    console.log("User should increase %f kg", increaseWeight);
} else if (BMI <= maxBMI) {
    console.log("Normal weight ");
} else if (BMI <= 29.9) {
    console.log("Overweight");
    let decreaseWeight = userWeight - 25 * userHeight * userHeight;
    console.log("User should decrease %f kg", decreaseWeight);
} else {
    console.log("Obesity");
    let decreaseWeight = userWeight - 29.9 * userHeight * userHeight;
    console.log("User should decrease %f kg", decreaseWeight);
}