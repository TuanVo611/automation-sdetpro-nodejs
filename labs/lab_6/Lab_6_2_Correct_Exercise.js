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
    printMenu();
    let userOption = getUserOption();
    switch (userOption) {
        case 0:
            console.log("See you again!")
            break;
        case 1:
            handleGetPostContent();
            break;
        case 2:
            handleGetAllPostContent();
            break;
        default:
            console.log("Wrong Input ...");
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
    return Number(readline.question("Select your option: "));
}

async function handleGetPostContent() {
    const userId = _getUserInput("userId: ");
    const returnedData = await _getAllPostForUser(userId);
    if (returnedData.hasUser) {
        const postId = _getUserInput("postId: ");
        const targetPost = returnedData.userRelatedPosts.filter(function (post) {
            return post.id === postId;
        })
        console.log(targetPost);
    }
}

async function handleGetAllPostContent() {
    const userId = _getUserInput("userId: ");
    const returnedData = await _getAllPostForUser(userId);
    if (returnedData.hasUser) {
        console.log(returnedData.userRelatedPosts);
    }
}

//Support Function
async function _getAllPostForUser(userId) {
    const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
    const userData = await userResponse.json();
    const hasUser = userData.id;
    if (hasUser) {
        const postResponse = await fetch(POST_ENDPOINT);
        const postData = await postResponse.json();
        const userRelatedPosts = postData.filter(function (post) {
            return post.userId === userId;
        })
        // console.log(userRelatedPosts);
        return {
            hasUser: true,
            userRelatedPosts: userRelatedPosts
        }
    } else {
        console.log(`UserID ${userId} is not existing!`);
    }
}

function _getUserInput(question) {
    return Number(readline.question(question));
}

