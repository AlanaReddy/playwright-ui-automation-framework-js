
const {When, Then, Given} = require('@cucumber/cucumber')
const {POManager} = require('../../tests/pageobjects/POManager');
const {expect} = require('@playwright/test');
const {playwright} = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}',{timeout : 100*1000},async function (username, password) {
    
    const products = this.page.locator(".card-body b");
    const LoginPage = this.poManager.getLoginPage();
    await LoginPage.goTo();
    await LoginPage.validLogin(username,password);
    

});
When('Add {string} to cart', async function(productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();

});

Then('Verify {string} is displayed in the cart', async function(productName){
    const cartPage =  this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

});

When('Enter the valid details and Place the Order', async function(){
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);


});

Then('Verify the order is present in the OrderHistory', async function(){
    await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(this.orderId);
   expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();



});


Given('a login to Ecommerce3 application with {string} and {string}',async function (username, password) {
    const products = this.page.locator(".card-body b");
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin(username,password);
});

Then('Login error message {string} should be displayed', async function (expectedMessage) {
    const ErrorMessage = await this.loginPage.getLoginErrorMessage();
    expect(ErrorMessage).toContain(expectedMessage);
});

