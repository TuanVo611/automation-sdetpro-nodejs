class Person {
    constructor(name, age) {
        if(age <= 0){
            throw new Error('Age can not be less than zero!')
        }
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

    get age(){
        return this._age;
    }
}
module.exports = Person;


