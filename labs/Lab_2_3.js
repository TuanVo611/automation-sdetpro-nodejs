const readLine = require("readline-sync");
let userHeight = readLine.question("User Height: ");
let userWeight = readLine.question("User Height: ");
let BMI = userWeight / (userHeight*userHeight);

        if (BMI <= 18.5){
            console.log("Underweight ");
            let increaseWeight = 18.5*userHeight*userHeight - userWeight;
            console.log("User should increase %f kg",increaseWeight);
        }else if (BMI <= 24.9){
            console.log("Normal weight ");
        }else if (BMI <= 29.9){
            console.log("Overweight");
            let decreaseWeight = userWeight - 25*userHeight*userHeight;
            console.log("User should decrease %f kg",decreaseWeight);
        }else {
            console.log("Obesity");
            let decreaseWeight = userWeight - 29.9*userHeight*userHeight;
            console.log("User should decrease %f kg",decreaseWeight);
        }