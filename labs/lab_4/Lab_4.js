//Data
const user1 = {
    name: "Tuan Vo",
    accountNumber: "4221498696375000",
    routingNumber: "123456789",
    balance: 100000000
}

const user2 = JSON.parse(JSON.stringify(user1));
user2.name = "Tuan Vo 2"
user2.accountNumber = "4221498696356999";
user2.balance = 2000000

let bankAccounts = [user1, user2];

//Usage
const readline = require("readline-sync")
function showMenu() {
    let isStillUsing = true;

    while (isStillUsing) {
        printBankMenuApplication();
        let userOption = getUserOption();

        if (userOption === 0) {
            isStillUsing = false;
        } else if (userOption === 1) {
            findAnAccount(bankAccounts);
        } else if (userOption === 2) {
            updateBalance(bankAccounts);
        } else {
            console.log("Input Wrong Number! Input Again Please!")
        }
    }

    console.log(`See You Again!`)

    function printBankMenuApplication() {
        console.log(`
    /**
     * === Banking application===
     * 1. Find an account
     * 2. Update balance
     * 0. Exit the program
    */
    `)
    }
}

function getUserOption() {
    return Number(readline.question(`Please select your option: `))
}

//Controller
function findAnAccount(bankAccounts) {
    let accountNumberInput = getInputAccountNumber();
    let count = 0;
    for (const bankAccount of bankAccounts) {
        if (accountNumberInput === bankAccount.accountNumber) {
            console.log(`Name account bank is : ${bankAccount.name} with balance: ${bankAccount.balance})`);
        } else {
            count++;
        }
    }
    if (count === bankAccounts.length) {
        console.log(`Your account number is incorrect! Please input your account number again!`);
    }

}

function updateBalance(bankAccounts) {
    let count = 0;
    let accountNumberInput = getInputAccountNumber();
    for (const bankAccount of bankAccounts) {
        if (accountNumberInput === bankAccount.accountNumber) {
            let withDrawalAmount = getwithdrawalAmount();
            let balanceAccount = bankAccount.balance;
            if (withDrawalAmount > balanceAccount) {
                console.log(`The amount you want to withdraw cannot be greater than your balance, please 
                re-enter the amount you want to withdraw.`);
                updateBalance(bankAccounts);
            } else {
                console.log(`Name account bank is : ${bankAccount.name} with remaining balance: ${balanceAccount - withDrawalAmount})`);
            }
        } else {
            count++;
        }
    }
    
    if (count === bankAccounts.length) {
        console.log(`Your account number is incorrect! Please input your account number again!`);
    }

}

//Support Function
function getInputAccountNumber() {
    return readline.question(`Please input your account bank number: `);
}

function getwithdrawalAmount() {
    return Number(readline.question(`Please input amount you want to withdraw: `))
}

// start app:
showMenu();