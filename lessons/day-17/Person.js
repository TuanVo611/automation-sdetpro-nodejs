class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    //Getters: is a function that return the CURRENT value of property
    get name() {
        return this._name;
    }

    //Setters: reassign a property's value
    set name(name) {
        this._name = name;
    }


}
module.exports = Person;

// teo is an object that was created from Person Class Template 
// Can't constraint the data/properties
let teo = new Person("Teo", 29);

// Break Encapsulation | Violation
console.log(teo.name);
teo.name = "Teo 123"
console.log(teo.name);


