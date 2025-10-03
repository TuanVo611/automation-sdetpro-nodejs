import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let checkingAcc = new CheckingAccount();
let savingAcc = new SavingAccount();

checkingAcc.deposit(50000);
checkingAcc.withdraw(2000000)
console.log(checkingAcc.getBalance());

savingAcc.deposit(1000);
savingAcc.withdraw(2000000);
console.log(savingAcc.getBalance());