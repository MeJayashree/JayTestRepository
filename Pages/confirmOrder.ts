import { Locator, Page } from 'playwright';

export class ConfirmOrder{

    private page: Page;
    private paymentAddress: Locator;
    private shippingAddress: Locator;
    private shippingMethod: Locator;
    private checkox
    private confirmButton: Locator;
    private continueButton;
     
    
    constructor(page: Page){
        this.page = page;
        this.paymentAddress = page.locator("#button-payment-address");
        this.shippingAddress = page.locator("#button-shipping-address");
        this.shippingMethod = page.locator("#button-shipping-method");
        this.checkox = page.getByRole('checkbox').check();
        this.continueButton = page.getByRole('button', { name: 'Continue' }).click();
        this.confirmButton = page.locator("#button-confirm");
    }

    async confirmOrder(){
        await this.paymentAddress.click();
        await this.shippingAddress.click();
        await this.shippingMethod.click();
        await this.checkox;
        await this.continueButton;
        await this.confirmButton.click();
    }
}