let userInfo = {
    userName: "Tuan",
    userAge: 29,
    // nested object
    bankAccounts: {
        checking: {
            accountNumber: "123456789"
        },
        savingAccount: {
            accountNumber: "62840303"
        }
    }
}

// console.log(userInfo)

// Trying to clone data from userInfo object:

// let user2Info = userInfo;
// user2Info.userName = "Tuan Vo";
// user2Info.userAge = 28;
// user2Info.bankAccounts.checking.accountNumber = "2931923801";
// user2Info.bankAccounts.savingAccount.accountNumber = "28273273";
// console.log(userInfo)
// console.log(user2Info)

//Shallow copy using spread syntax

// let user2Info = { ...userInfo }
// user2Info.userName = "Tuanvo"
// user2Info.bankAccounts.checking.accountNumber = "11111111"
// console.log(userInfo)
// console.log(user2Info)

//Shallow copy - handle nested objects
let userInfo3 = JSON.parse(JSON.stringify(userInfo));
userInfo3.bankAccounts.checking.accountNumber = "11111111"
console.log(userInfo)
console.log(userInfo3)


