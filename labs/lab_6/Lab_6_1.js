//Data
const urlEndpoint = "https://jsonplaceholder.typicode.com/posts";
const readLine = require("readline-sync");
let userId = Number(readLine.question("Please Input Your User Id: "));
let postId = Number(readLine.question("Please Input Your Post Id: "));

//Usage
getInforUser(urlEndpoint, userId, postId);

//Logic - from controller
function getInforUser(url, userId, postId) {
    return fetch(url)
        .then(function (response) {
            return getResponse(response);
        })
        .then(function (validateRespone) {
            for (let index = 0; index < validateRespone.length; index++) {
                if (Number(validateRespone[index].userId) === userId) {
                    if (Number(validateRespone[index].id === postId)) {
                        console.log(validateRespone[index].id)
                        console.log(validateRespone[index].userId)
                        console.log(validateRespone[index].title)
                        console.log(validateRespone[index].body)
                    }

                }
            }
        });
}

//Support Functions
function getResponse(response) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const responseData = response.json();
            resolve(responseData);
        }, 3 * 1000);
    })
}

