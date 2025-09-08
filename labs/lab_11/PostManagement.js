const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

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
    const post = new Post();
    const targetPostList = await requestHandler.getTargetPost(userId, postId);
    for (const targetPost of targetPostList) {
        post.userId = targetPost.userId;
        post.id = targetPost.id;
        post.title = targetPost.title;
        post.body = targetPost.body;
    }

    // console.log(post);

    // const allPost = ...
    const allPost = await requestHandler.getAllPosts(userId);
    for (const targetPost of allPost) {
        post.userId = targetPost.userId;
        post.id = targetPost.id;
        post.title = targetPost.title;
        post.body = targetPost.body;
    }
    console.log(post);
}