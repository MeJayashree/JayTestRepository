import {Locator, Page, Selectors} from 'playwright';
import { expect } from '@playwright/test';


export class ProductSelection{


    private page: Page;
    private category: Locator;
    private product: Locator;
    private addToCart: Locator;
    private toastMessage: Locator;
    private subCategory: Locator;

    

    constructor(page: Page){
        this.page = page;
        this.category = page.getByTitle("MP3 Players");
        this.product = page.locator("div.row");
        this.addToCart = page.locator("#button-cart");
        this.toastMessage = page.locator(".alert-success");
        this.subCategory = page.getByText("Show All MP3 Players");

    }

    async selectCategory(){
        await this.category.click();
        await this.subCategory.click();


    }

    async selectProduct(productName: string){
        await this.product.locator(`//a[contains(text(),'${productName}')]`).click();

    }

    async clickAddToCart(){
        await this.addToCart.click();
    }

    async getToastMessage(message: string){
        await this.toastMessage.waitFor();
        await expect(this.toastMessage).toContainText(message);
    }

    async viewCart(){

    }

}