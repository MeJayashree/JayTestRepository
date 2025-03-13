import {Locator, Page, Selectors} from 'playwright';
import { expect } from '@playwright/test';


export class ProductSelection{

    private page: Page;
    private category: Locator;
    private addToCart: Locator;
    private toastMessage: Locator;
    private altText: Locator;
    private search: Locator;

    constructor(page: Page){
        this.page = page;
        this.altText = page.getByAltText("naveenopencart")
        this.category = page.locator("#content").getByText("MacBook");
        this.addToCart = page.locator("#button-cart");
        this.toastMessage = page.locator(".alert-success");
        this.search = page.getByPlaceholder("Search");
    }

    async selectCategory(){
        await this.altText.click();
        await this.category.click();
    }

    async addProductfromWishlist(){
        await this.page.getByTitle('Wish List').click();
        await this.page.locator('button[onclick="cart.add(\'32\');"]').click();
        await this.page.locator('button[onclick="cart.add(\'47\');"]').click();

    }
    async clickAddToCart(){
        await this.addToCart.click();
    }

    async getToastMessage(message: string){
        await this.toastMessage.waitFor();
        await expect(this.toastMessage).toContainText(message);
    }
}