export default class LoginPage {
    protected usernameSel = "";
    protected passwordSel = "";
    protected loginBtnSel = "";

    public inputUserName(username: string) {
        console.log(`Input username for selector: ${this.usernameSel} with username : ${username}`)
    }

    public inputPassword(password: string) {
        console.log(`Input password for selector: ${this.passwordSel} with password: ${password}`)
    }

    public clickLoginBtn() {
        console.log(`Input loginBtn for selector: ${this.loginBtnSel}`)
    }
}