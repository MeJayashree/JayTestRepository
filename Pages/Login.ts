import {Locator, Page} from 'playwright';


export class Login{

    private myAccount : Locator;
    private login : Locator;
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;


constructor(page: Page){
    this.page = page;
    this.myAccount = page.getByTitle('My Account');
    this.login = page.getByText('Login');
    this.username = page.locator("#input-email");
    this.password = page.locator("#input-password");
    this.loginButton = page.getByRole("button", {name: 'Login'});
}

async launchURL(url : string){
    await this.page.goto(url);
}

async goToLoginPage(){
    await this.myAccount.click();
    await this.login.click();
}

async loginCredentials(userName : string, password : string){
    await this.username.fill(userName);
    await this.password.fill(password);
}

async clickLoginButton(){
    await this.loginButton.click();
}

}