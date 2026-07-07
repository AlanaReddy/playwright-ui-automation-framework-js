const { test , expect } = require('@playwright/test');

test("popup validations" , async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://google.com");
    //await page.goBack();
    //await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //await page.pause();
    page.on('dialog' ,dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framePage= page.frameLocator("#courses-iframe");
    page.on('dialog' ,dialog => dialog.dismiss());
    await framePage.locator(".hidden a[href*='all-access']").click();
    const textCheck = await framePage.locator("div h2.text-3xl").textContent();
    console.log(textCheck.split(" ")[1]);








});