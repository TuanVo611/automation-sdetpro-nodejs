const readLine = require("readline-sync");
let userHeight = readLine.question("User Height: ");
let userWeight = readLine.question("User Height: ");
let BMI = userWeight / (userHeight*userHeight);

        if (BMI <= 18.5){
            console.log("Underweight ");
        }else if (BMI <= 24.9){
            console.log("Normal weight ");
        }else if (BMI <= 29.9){
            console.log("Overweight");
        }else {
            console.log("Obesity");
        }