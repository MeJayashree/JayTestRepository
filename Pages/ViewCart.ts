import {Locator, Page} from 'playwright';


export class ViewCart{

    private cart: Locator;
    private page: Page;
    private verifyCart: Locator;
   

    
    constructor(page: Page){
        this.page = page;
        this.cart = page.locator("#cart-total");
        this.verifyCart = page.getByText("view cart");
    }
    async viewAndVerifyCart(){
        await this.cart.click();
        await this.verifyCart.click();
    
    }
}