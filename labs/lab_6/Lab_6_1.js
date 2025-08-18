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
            const filterResponseData = filterData(validateRespone, userId, postId)
            console.log(filterResponseData);

            const allPostData = getAllPostsData(validateRespone, userId);
            console.log(allPostData)
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

function filterData(validateRespone, userId, postId) {
    console.log(`Content user with user id: ${userId} and post id: ${postId}`)
    let countUserId = 0;
    for (let index = 0; index < validateRespone.length; index++) {
        if (Number(validateRespone[index].userId) === userId) {
            if (Number(validateRespone[index].id === postId)) {
                console.log(`Post id: ${validateRespone[index].id}`)
                console.log(`User id: ${validateRespone[index].userId}`)
                console.log(`Title: ${validateRespone[index].title}`)
                console.log(`Body: ${validateRespone[index].body}`)
            }
        } else {
            countUserId++;
        }
    }

    if (countUserId === validateRespone.length) {
        console.log(`Does not exist user id: ${userId}`);
    }
}

function getAllPostsData(validateRespone, userId) {
    console.log(`Content all post for user with user id: ${userId}`)
    for (let index = 0; index < validateRespone.length; index++) {
        if (Number(validateRespone[index].userId) === userId) {
            console.log(validateRespone[index])
        } else {
            countUserId++;
        }
    }
}

