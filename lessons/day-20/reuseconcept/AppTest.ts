import UseApi from "./UseApi";


main();

async function main() {
    const baseUrl = ""
    const userApiHandler = new UseApi(baseUrl);

    //Get all user
    const allUsers : any[] = await userApiHandler.getUser();

    // Create user 
    const user = {
        name: "User1",
        password: "Pass@word1"
    }

    const userCreationResponse = await userApiHandler.createUser(user);
    console.log(userCreationResponse);
}