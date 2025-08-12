const readline = require("readline-sync");

//Data - In memory DB - local DB sqllite
const user1Account = {
    name: "User 1",
    accountNumber: "4221498696375000",
    routingNumber: "123456789",
    balance: 100000000
};
const user2Account = JSON.parse(JSON.stringify(user1Account));
user2Account.name = "User 2";
user2Account.accountNumber = "4221498696356999";
user2Account.balance = 2000000;
const bankAccounts = [user1Account, user2Account];


//Usage: Provide data and call controllers to solve requirements
bankApp();

//Controllers
function bankApp() {
    let isInteracting = true;
    let failAttempts = 0;
    while (isInteracting && failAttempts < 3) {
        printAppMenu();
        const userOption = getUserOption();
        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                printAccountInfo(foundAccount);
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log(`Wrong Option! Attemp: ${failAttempts}`);
                failAttempts++;
        }
    }
    console.log(`See you again!`);
}

//Support funtions
function printAppMenu() {
    console.log(`
    /**
     * === Banking application===
     * 1. Find an account
     * 2. Update balance
     * 0. Exit the program
    */
    `)
}

function getUserOption() {
    return Number(readline.question(`Please select your option: `))
}

function findAccount() {
    let foundAccount = null;
    //Get user account number
    const inputAccountNumber = readline.question("Please enter account number: ");

    // Loop over bank account data
    for (const account of bankAccounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            return foundAccount;
        }
    }

    return foundAccount;
}

function printAccountInfo(account) {
    if (account) {
        const { name, balance } = account;
        console.log(`Account information | name: ${name} | balance: ${balance}`);
    } else {
        console.log(`Account is not existing!`);
    }

    // if(account === null){
    //     console.log(`Account is not existing!`);
    // } else {
    //     const {name, balance} = account;
    //     console.log(`Account information | name: ${name} | balance: ${balance}`);
    // }
}
function updateBalance() {
    /**
     * do {
     * log(`Starting withdraw process...`)
     * Get account info using findAccount function
     * if(foundAccount)
     *  get the current balance: foundAccount.balance
     *  Ask user about withDraw amount
     *      if(withDrawAmount > currentBalance){
     *      log a warning
     *      updateBalanceAttemps++;
     *      }
     *      else 
     *          update balance: foundAccount.balance = (currentBalance - withDrawAmount)
     * else
     *      amountAttemps++;
     *      log a warning about account not existing
     * } while (updateBalanceAttempts < MAX_ALLOWED_ATTEMPT && amountAttemps < MAX_ALLOWED_ATTEMPT)
    */

    const foundAccount = findAccount();
    if (foundAccount) {
        const { balance } = foundAccount;
        console.log(`This is your current balance: ${balance}`);
        const withDrawAmount = Number(readline.question(`How much do you want to with draw?`));
        if (withDrawAmount <= balance) {
            foundAccount.balance = balance - withDrawAmount;
            console.log(`With draw succeed!`)
        } else {
            console.log(`Insufficient Balance!`);
        }
    } else {
        console.log(`Account is not existing!`)
    }
}


