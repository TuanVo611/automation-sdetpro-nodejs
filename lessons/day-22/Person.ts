export default class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }

    //Service Method
    public setAge(age: number){
        this.validateAge(age);
        this.age = age;
    }


    // Support method
    private validateAge(age: number) {
        if (age < 0) {
            throw new Error(`Age can't be less than zero`)
        }
    }
}

/**
 * ACCESS MODIFIERS 
 * - Default (Nothing) / Public : everywhere
 * - Protected: Sub-classes
 * - Private: Only on the class
 */