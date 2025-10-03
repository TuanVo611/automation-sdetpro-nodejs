const RequestHandler = require("../lab_11/RequestHandler");

const userId = 1;
const postId = 5;
const BASE_URL = "https://jsonplaceholder.typicode.com";

lab11();

async function lab11() {
    // Create RequestHandler object
    const requestHandler = new RequestHandler(BASE_URL);

    // const post = ...
    const targetPost = await requestHandler.getTargetPost(userId, postId);
    console.log(targetPost);

    // const allPost = ...
    const allPost = await requestHandler.getAllPosts(userId);
    // console.log(allPost)
}