import LoginPage from "./LoginPage";

export default class LoginPageFlow{

    public login(usename : string,password: string, loginPage: LoginPage){
        loginPage.inputUserName(usename);
        loginPage.inputPassword(password);
        loginPage.clickLoginBtn();
    }
}