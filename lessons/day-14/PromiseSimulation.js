// Promise and thenable chain
asyncFun01("originalValue")
    .then(function (returnedValue1) {
        return asyncFun02(returnedValue1);
    })
    .then(function (returnedValue2) {
        return asyncFun03(returnedValue2);
    })
    .then(function (finalResult) {
        console.log(finalResult);
    })

function asyncFun01(param1) {
    //wrap any async operation/task into a promise
    console.log(`Processing param: ${param1}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFun01 - ' + param1;
            resolve(returnedValue);
        }, 1 * 1000)
    })
}

function asyncFun02(param2) {
    //wrap any async operation/task into a promise
    console.log(`Processing param: ${param2}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFun02 - ' + param2;
            resolve(returnedValue);
        }, 2 * 1000)
    })
}

function asyncFun03(param3) {
    //wrap any async operation/task into a promise
    console.log(`Processing param: ${param3}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFun03 - ' + param3;
            resolve(returnedValue);
        }, 3 * 1000)
    })
}