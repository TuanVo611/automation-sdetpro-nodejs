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


//Support Function
function app() {
    let isPlaying = true;
    while (isPlaying) {
        handlePromise();
        console.log("See you again!")
        break;
    }

    function handlePromise() {
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
    console.log(`See you again!`);
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
            const postId = getUserInput("postId: ");
            const targetPost = returnedData.userRelatedPosts.filter(function (post) {
                return post.id === postId;
            })
            console.log(targetPost);
        }
    })
}

//Support Function
function _getAllPostForUser(userId) {
    // Check to see user is existing from DB
    return fetch(`${USER_ENDPOINT}/${userId}`)
        .then(function (userResponse) {
            const hasUser = userResponse.ok;
            if (hasUser) {
                //Logic to get post for that user
                const postId = getUserInput("postId: ");
                return fetch(POST_ENDPOINT).then(function (promisePostResponse) {
                    return promisePostResponse.json().then(function (postResponse) {
                        const userRelatedPosts = postResponse.filter(function (post) {
                            return post.userId === userId;
                        })
                        return {
                            hasUser : true,
                            userRelatedPosts : userRelatedPosts
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

