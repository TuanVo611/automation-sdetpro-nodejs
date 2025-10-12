import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAcc = new SavingAccount();
let checkingAcc = new CheckingAccount();

// Deposit:
savingAcc.deposit(100);
checkingAcc.deposit(100);

// Get balance:
console.log(`Saving account balance: ${savingAcc.getBalance()}`);
console.log(`Checking account balance: ${checkingAcc.getBalance()}`);
console.log(`Vo Anh Tuan`);


// Withdraw positive case:
savingAcc.withDraw(100);
checkingAcc.withDraw(50);

// Withdraw negative case:
savingAcc.withDraw(1);


