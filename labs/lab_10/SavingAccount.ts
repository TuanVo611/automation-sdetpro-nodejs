import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    public deposit(amount: number): void {
        this.balance = this.balance + amount;
    }
    public withdraw(amount: number): void {
        const newBalance = this.balance - amount;
        if(newBalance < 0) {
            console.log("Saving balance can't be less than 0!")
        } else {
            this.balance = this.balance - amount;
        }
    }
    public getBalance(): number {
        return this.balance;
    }
    
}