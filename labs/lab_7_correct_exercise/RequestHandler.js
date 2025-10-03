const Post = require("./Post");

class RequestHandler {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    async getTargetPost(targetUserId, postId) {
        const targetUserPosts = await this._getAllPosts(targetUserId);
        const targetPost = targetUserPosts.find(function (post) {
            post.id === postId;
        })

        if (!targetPost) {
            console.log(`The post id:${postId} for user ${targetUserId} is not existing!`);
            return undefined;
        }

        const { userId, id, title, body } = targetPost;
        return new Post(targetUserId, id, title, body);
    }

    async getAllPosts(targetUserId) {
        let allPosts = [];
        // Get all posts for the users
        const targetUserPosts = await this._getAllPosts(targetUserId);
        // Contruct an array of posts
        for (const post of targetUserPosts) {
            const { userId, id, title, body } = post;
            allPosts.push(new Post(userId, id, title, body));
        }
        return allPosts;
    }

    async _getAllPosts(targetUserId) {
        const postEndpoint = `${this._baseUrl}/posts`;
        const respone = await fetch(postEndpoint);
        const allPost = await respone.json();
        return allPost.filter(function (post) {
            return post.userId === targetUserId;
        })
    }
}
module.exports = RequestHandler;