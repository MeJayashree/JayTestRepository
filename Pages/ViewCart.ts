import {Locator, Page} from 'playwright';

export class ViewCart{

    private cart: Locator;
    private page: Page;
    private verifyCart: Locator;
    private checkout: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.cart = page.locator("#cart-total");
        this.verifyCart = page.getByText("view cart");
        this.checkout = page.getByText("Checkout").last();
    }
    async viewAndVerifyCart(){
        await this.cart.click();
        await this.verifyCart.click()
    }

    async shoppingCart(){
        const  orderName = await this.page.locator(".text-left").nth(1).textContent()
        const rows = await this.page.locator("tbody tr.text-left")
        const rowcount = await rows.count()
        let cartID
        for(let i=0; i<rowcount; i++){
            cartID = await rows.nth(i).locator('td').textContent()
            if(cartID.includes(orderName)){
                console.log("Order is present in the cart")  
                break;
        }
        }
        await this.checkout.click();
    }
}
