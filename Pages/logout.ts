import {Locator, Page} from 'playwright';

export class Logout{

    private page: Page;
    private logout: Locator;
    private myAccount: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.myAccount = page.getByTitle('My Account');
        this.logout = page.getByText("Logout");
    }
    
    async clickLogout(){
        await this.myAccount.click();
        await this.logout.click();
    }
}