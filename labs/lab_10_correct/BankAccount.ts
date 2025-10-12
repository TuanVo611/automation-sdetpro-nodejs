export default abstract class BankAccount {

    protected balance: number = 0;
    protected minimumBalance: number = 0;

    protected abstract deposit(amount: number): void;
    protected abstract withDraw(amount: number): void;

    public getBalance(): number {
        return this.balance;
    }

    protected _withDraw(amount: number, errorMessage: string){
        let tempBalance = this.balance - amount;
        if(tempBalance < this.minimumBalance){
            throw new Error(errorMessage);
            this.balance = this.balance - amount;
            console.log(`[SUCCESS] Withrawing ${amount}`);
        }
    }
}