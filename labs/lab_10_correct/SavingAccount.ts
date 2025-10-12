import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount{

    constructor(){
        super();
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
    
    withDraw(amount: number): void {
       const errMsg = `Insufficient Balance!`
        this._withDraw(amount,errMsg);
    }
}