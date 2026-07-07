const {test,expect} = require('@playwright/test');

test.only('sampletest playwright/test', async({page}) =>{

        const email = "alanareddy123@gmail.com";
        const products = page.locator(".card-body");
        const productName = "ADIDAS ORIGINAL";
        await page.goto("https://rahulshettyacademy.com/client");
        await page.getByPlaceholder("email@example.com").fill("alanareddy123@gmail.com");
        await page.getByPlaceholder("enter your passsword").fill("Alana@2607");
        await page.getByRole("button", {name: 'Login'}).click();
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        const Titles = (await page.locator(".card-body b").allTextContents());
        console.log(Titles);
        await page.locator(".card-body").filter({hasText: "ADIDAS ORIGINAL"}).getByRole("button", {name: "Add To Cart"}).click();
        //await expect(page.locator("button[routerlink='/dashboard/cart']")).toHaveText(' Cart 1');
        await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click();       
        await page.locator("div li").first().waitFor();
        await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();  
        await page.getByRole("button" ,{name: "Checkout"}).click();
        await page.getByPlaceholder("Select Country").pressSequentially("ind");
        await page.getByRole("button", {name: "India"}).nth(1).click();
        await page.getByText("PLACE ORDER").click();
        await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
        const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderID);
        await page.getByRole("button", {name: "ORDERS"}).click();
        await page.locator("tbody").waitFor();
        const rowOrderId= page.locator("tbody tr").first().locator("th");
        await page.getByRole("button", {name:"View"}).first().click();
        const orderIdExtracted = await page.locator(".col-text").textContent();
        console.log(orderIdExtracted);
        expect(orderID.includes(orderIdExtracted)).toBeTruthy();

        

    });
