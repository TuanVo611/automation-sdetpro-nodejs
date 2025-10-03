export default abstract class BankingAccount {
    protected balance: number = 1000000;

    public abstract deposit(amount: number): void;
    public abstract withdraw(amount: number): void;
    public abstract getBalance(): number;

}