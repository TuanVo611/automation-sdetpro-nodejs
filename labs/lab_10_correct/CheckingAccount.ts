import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {

    constructor(){
        super();
        this.minimumBalance = 50;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
    
    withDraw(amount: number): void {
        const errMsg = `The minimum balance must be ${this.minimumBalance}`
        this._withDraw(amount,errMsg);
        } 
}