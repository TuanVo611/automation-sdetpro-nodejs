/**
url: https://jsonplaceholder.typicode.com
Library: fetch
slugs:
GET	/posts
 */

const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POST_ENDPOINT = `${BASE_URL}/posts`;
const USER_ENDPOINT = `${BASE_URL}/users`;

//Main function
app();

//Support Functions
function app() {
    let isPlaying = true;
    while (true) {
        handlePromise();
        break;
    }

    function handlePromise() {
        if (!isPlaying) return;

        printMenu();
        getUserOption().then(function (userOption) {
            switch (userOption) {
                case 0:
                    isPlaying = false;
                    console.log("See you again!")
                    break;
                case 1:
                    return handleGetPostContent();
                case 2:
                    return handleGetAllPostContent();
                default:
                    console.log("Wrong Input ...");
            }
        }).then(handlePromise)
    }
}

function printMenu() {
    console.log(`
        1. Get a post content.
        2. Get all posts
        3. Exit
    `);
}

function getUserOption() {
    return new Promise(function (resolve) {
        resolve(Number(readline.question("Select your option: ")));
    })
}

function handleGetPostContent() {
    const userId = _getUserInput("userId: ");
    return _getAllPostForUser(userId).then(function (returnedData) {
        if (returnedData.hasUser) {
            const postId = _getUserInput("postId: ");
            const targetPost = returnedData.userRelatedPosts.filter(function (post) {
                return post.id === postId;
            })
            console.log(targetPost);
        }
    })
}

function handleGetAllPostContent() {
    const userId = _getUserInput("userId: ");
    return _getAllPostForUser(userId).then(function (returnedData) {
        if (returnedData.hasUser) {
            console.log(returnedData.userRelatedPosts);
        }
    })
}

//Support Function
function _getAllPostForUser(userId) {
    // Check to see user is existing from DB
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function (userResponse) {
            console.log(userResponse)
            const hasUser = userResponse.ok;
            if (hasUser) {
                //Logic to get post for that user
                const postId = _getUserInput("postId: ");
                return fetch(POST_ENDPOINT).then(function (promisePostResponse) {
                    return promisePostResponse.json().then(function (postResponse) {
                        const userRelatedPosts = postResponse.filter(function (post) {
                            return post.userId === userId;
                        })
                        return {
                            hasUser: true,
                            userRelatedPosts: userRelatedPosts
                        }
                    })
                })
            } else {
                console.log(`UserID ${userId} is not existing!`);
                return { hasUser: false };
            }
        })
}

function _getUserInput(question) {
    return Number(readline.question(question));
}

async function getAllPostForUserWithAsync() {
    const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
    const userData = await userResponse.json();
    const hasUser = userData.id;
    if(hasUser){
        const postResponse = await fetch(POST_ENDPOINT);
        const postData = await postResponse.json();
        
    } else {

    }
}

