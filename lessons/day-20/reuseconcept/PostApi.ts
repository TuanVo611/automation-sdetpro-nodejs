import { BaseApiClient } from "./BaseApiClient";

export default class PostApi extends BaseApiClient{
    async getPost(){
        return this.get('/posts');
    }

    async createPost(postObj: any){
        return this.post('/posts', postObj);
    }

    async getPostById(postId: number){
        return this.get(`/posts/${postId}`);
    }

    async updatePost(postId: number, postObj: any){
        return this.put(`/posts/${postId}`, postObj);
    }

    async deletePost(postId: number){
        return this.delete(`/posts/${postId}`);
    }
    
}