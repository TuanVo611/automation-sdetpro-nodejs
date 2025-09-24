import { BaseApiClient } from "./BaseApiClient";

export default class UseApi extends BaseApiClient {
    async getUser(){
        return this.get('/users')
    }

    async createUser(userObj: any){
        return this.post('/users', userObj)
    }

    
}