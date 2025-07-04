const readLine = require("readline-sync");
let userHeight = readLine.question("User Height: ");
let userWeight = readLine.question("User Height: ");
let BMI = userWeight / (userHeight*2);

        if (BMI <= 18.5){
            console.log("Underweight ");
            let increaseWeight = 18.5*userHeight*2 - userWeight;
            console.log("User should increase %f kg",increaseWeight);
        }else if (18.5 < BMI && BMI <= 24.9){
            console.log("Normal weight ");
        }else if (25 < BMI && BMI <= 29.9){
            console.log("Overweight");
            let decreaseWeight = userWeight - 25*userHeight*2;
            console.log("User should decrease %f kg",decreaseWeight);
        }else {
            console.log("Obesity");
            let decreaseWeight = userWeight - 29.9*userHeight*2;
            console.log("User should decrease %f kg",decreaseWeight);
        }