import {test, expect} from '@playwright/test';
import {Login} from '../Pages/Login';
import data from '../TestData/login.json';
import {ProductSelection} from '../Pages/ProductSelection';
import { ViewCart } from '../Pages/ViewCart';
import { CheckoutAddress } from '../Pages/Checkout/checkoutAddress';
import address from '../TestData/address.json';
import { Logout } from '../Pages/logout';
import { ConfirmOrder } from '../Pages/confirmOrder';

let login: Login;
let productSelection: ProductSelection;
let viewCart: ViewCart;
let checkoutAddress: CheckoutAddress;
let product_name: string = "MacBook";
let logout: Logout;
let confirmOrder: ConfirmOrder;

const cart_total : string ="#cart-total";
const alert_message : string = ".alert";

test.describe("Ecommerce automation", () => {
    test.beforeEach(async ({page}) => {
        login = new Login(page);
        await login.launchURL(data.url);
        await login.goToLoginPage();
        await login.loginCredentials(data.username, data.password);
        await login.clickLoginButton();
        productSelection = new ProductSelection(page);
        viewCart = new ViewCart(page);
        checkoutAddress = new CheckoutAddress(page);
        confirmOrder = new ConfirmOrder(page);
    })

// test.afterEach(async ({page}) => {
//     logout = new Logout(page);
//     await logout.clickLogout();
// })


test("@smoke Complete Automation", async ({page}) => {
    await productSelection.selectCategory();
    await productSelection.clickAddToCart();
    await productSelection.getToastMessage(`Success: You have added ${product_name} to your shopping cart! `);
    await expect(page.locator(cart_total)).toContainText("item(s)");
    await viewCart.viewAndVerifyCart();
    await viewCart.shoppingCart();
    await checkoutAddress.addAddress();
    await checkoutAddress.enterAddressDetails(address.firstname, address.lastname, address.address, address.city, address.postcode, address.country, address.region);
    await confirmOrder.confirmOrder();
    })
    
});
