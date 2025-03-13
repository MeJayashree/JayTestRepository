import {Locator, Page} from 'playwright';

export class CheckoutAddress{

    private page: Page;
    private firstName: Locator;
    private lastName: Locator;
    private address1: Locator;
    private city: Locator;
    private postCode: Locator;
    private country: Locator;
    private region: Locator;
    private continue: Locator;
    private changeAddress
    
    constructor(page: Page){
        this.page = page;
        this.firstName = page.locator("#input-payment-firstname");
        this.lastName = page.locator("#input-payment-lastname");
        this.address1 = page.locator("#input-payment-address-1");   
        this.city = page.locator("#input-payment-city");
        this.postCode = page.locator("#input-payment-postcode");
        this.country = page.locator("#input-payment-country");
        this.region = page.locator("#input-payment-zone");
        this.continue = page.locator("#button-payment-address");
        this.changeAddress = page.getByLabel("I want to use a new address");
    }
    async addAddress(){
        await this.changeAddress.click();
    }

    async enterAddressDetails(firstName: string, lastName: string, address1: string, city: string, postCode: string, country: string, region: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.address1.fill(address1);
        await this.city.fill(city);
        await this.postCode.fill(postCode);
        await this.country.selectOption({label: country});
        await this.region.selectOption({label: region});
        await this.continue.click();
    }
}
