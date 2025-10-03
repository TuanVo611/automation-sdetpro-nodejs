import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {

    private minimumBalance: number = 50;

    public deposit(amount: number): void {
        this.balance = this.balance + amount;
    }

    public withdraw(amount: number): void {
        const newBalance = this.balance - amount;
        if(newBalance < this.minimumBalance) {
            console.log("Checking balance can't be less than 50!")
        } else {
            this.balance = this.balance - amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }
    
}