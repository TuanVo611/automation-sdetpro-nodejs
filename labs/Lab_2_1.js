const readLine = require("readline-sync");
let userHeight = readLine.question("User Height: ");
let userWeight = readLine.question("User Height: ");
let BMI = userWeight / (userHeight*2);

        if (BMI <= 18.5){
            console.log("Underweight ");
        }else if (18.5 < BMI && BMI <= 24.9){
            console.log("Normal weight ");
        }else if (25 < BMI && BMI <= 29.9){
            console.log("Overweight");
        }else {
            console.log("Obesity");
        }