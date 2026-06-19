import Person from "./Person.js";

class BonusManagement {
    getEligibleMoneyAmount(person) {
        if (person.age >= 80) {
            return 500;
        } else {
            return 100;
        }
    }
}

let teo = new Person("Teo", 600);
const money = new BonusManagement().getEligibleMoneyAmount(600);

console.log(money);
