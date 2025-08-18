//Data
const urlEndpoint = "https://jsonplaceholder.typicode.com/posts/";
const readLine = require("readline-sync");
let userId = Number(readLine.question("Please Input Your User Id: "));
let postId = Number(readLine.question("Please Input Your Post Id: "));

//Usage
getInforUser(urlEndpoint, userId, postId);

//Logic - From Controller
async function getInforUser(url, userId, postId) {
    const response = await fetch(url);
    const validateRespone = await response.json();

    const filterResponseData = filterData(validateRespone, userId, postId)
    console.log(filterResponseData);

    const allPostData = getAllPostsData(validateRespone, userId);
    console.log(allPostData)
}


//Support Function
function filterData(validateRespone, userId, postId) {
    let countUserId = 0;
    console.log(`Content user with user id: ${userId} and post id: ${postId}`)
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

        if (countUserId === validateRespone.length) {
            console.log(`Does not exist user id: ${userId}`);
        }
    }

    if (countUserId === validateRespone.length) {
        console.log(`Does not exist user id: ${userId}`);
    }
}

function getAllPostsData(validateRespone, userId) {
    let countUserId = 0;
    console.log(`Content all post for user with user id: ${userId}`)
    for (let index = 0; index < validateRespone.length; index++) {
        if (Number(validateRespone[index].userId) === userId) {
            console.log(validateRespone[index])
        } else {
            countUserId++;
        }
    }

    if (countUserId === validateRespone.length) {
        console.log(`Does not exist user id: ${userId}`);
    }
}
