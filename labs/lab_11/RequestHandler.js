const Post = require("./Post");

const readline = require("readline-sync");

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POST_ENDPOINT = `${BASE_URL}/posts`;
const USER_ENDPOINT = `${BASE_URL}/users`;

class RequestHandler {

    async getTargetPost(userId, postId) {
        const returnedData = await this._getAllPosts(userId);
        const post = new Post();
        if (returnedData.hasUser) {
            const targetPostList = returnedData.userRelatedPosts.filter(function (post) {
                return post.id === postId;
            })
            for (const targetPost of targetPostList) {
                post.userId = targetPost.userId;
                post.id = targetPost.id;
                post.title = targetPost.title;
                post.body = targetPost.body;
            }
            return post;
        }
    }

    async getAllPosts(userId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const returnedData = await this._getAllPosts(userId);
        const post = new Post();
        let arrPost = [];
        if (returnedData.hasUser) {
            const allPostList = returnedData.userRelatedPosts;
            for (const postElem of allPostList) {
                post.userId = postElem.userId;
                post.id = postElem.id;
                post.title = postElem.title;
                post.body = postElem.body;
                arrPost.push(post)
            }
        }
        return arrPost;
    }

    async _getAllPosts(userId) {
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
}
module.exports = RequestHandler;