import {test, expect} from '@playwright/test';
import {Login} from '../Pages/Login';
import data from '../TestData/login.json';
import {ProductSelection} from '../Pages/ProductSelection';
import { ViewCart } from '../Pages/ViewCart';


let login: Login;
let productSelection: ProductSelection;
let viewCart: ViewCart;
//const categoryName = "Laptops & Notebooks";
const product_name = "Sony VAIO";


test.beforeEach(async ({page}) => {
    login = new Login(page);
    await login.launchURL(data.url);
    await login.goToLoginPage();
    await login.loginCredentials(data.username, data.password);
    await login.clickLoginButton();
    productSelection = new ProductSelection(page);
    viewCart = new ViewCart(page);

})
test("Product Selection", async ({page}) => {
    await productSelection.selectCategory();
    await productSelection.selectProduct(product_name);
    await productSelection.clickAddToCart();
    await productSelection.getToastMessage(`Success: You have added '${product_name}'to your shopping cart!`);
    await expect(page.locator("#cart-total")).toContainText("item(s)");
    await viewCart.viewAndVerifyCart();
})

