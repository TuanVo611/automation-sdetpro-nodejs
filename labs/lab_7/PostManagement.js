const Post = require("./Post").default;
const RequestHandler = require("./RequestHandler").default;

// Excution
lab11();

// Function Declaration
async function lab11() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // const post = ...
    const targetPost = await requestHandler.getTargetPost(userId, postId);
    console.log(targetPost);

    // const allPost = ...
    const allPost = await requestHandler.getAllPosts(userId);
    console.log(allPost)
}