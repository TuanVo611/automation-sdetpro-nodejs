const readLine = require("readline-sync");

let clientAge = Number(readLine.question("Client Age: "))


let someValueMeaningFul = clientAge >= 18 && clientAge <= 55;
let middleCategory = someValueMeaningFul || somethingElse

if (clientAge < 18) {
    console.log("Khong ban");
} else if (middleCategory) {
    console.log("Unlimited!");
} else {
    console.log("Ban 2 chai!")
}