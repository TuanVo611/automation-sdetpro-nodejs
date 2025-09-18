import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginPageFlow from "./LoginPageFlow";

let internalLoginPage = new InternalLoginPage();
let externalLoginPage = new ExternalLoginPage();

let loginPageFlow = new LoginPageFlow();

loginPageFlow.login("Tuan Vo", "Pass@word1", internalLoginPage);
loginPageFlow.login("Tuan Vo 2", "Pass@word96", externalLoginPage);