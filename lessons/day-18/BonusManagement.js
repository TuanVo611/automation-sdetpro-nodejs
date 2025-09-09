const Person = require("./Person");

class BonusManagement {
    getEligibleMoneyAmount(person) {
        if (person.age >= 80) {
            return 500;
        } else {
            return 100;
        }
    }
}

let teo = new Person("Teo", 18);
const money = new BonusManagement().getEligibleMoneyAmount(teo);
console.log(money);
