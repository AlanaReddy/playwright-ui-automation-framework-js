 const {test,expect} = require('@playwright/test');


 test('browser context Playwright test',async ({browser}) => 
    {
    
      const context = await browser.newContext();
      const page = await context.newPage();
      const UserName = page.locator('#username');
      const SignIn = page.locator('#signInBtn');
      const cardTitles = page.locator(".card-body a");
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await UserName.fill("Rahulshetty");
        await page.locator("#password").fill("learning");
        await SignIn.click();
        console.log(await page.locator("[style*='block']").textContent());
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');

        await UserName.fill("");
        await UserName.fill("rahulshettyacademy");
        await SignIn.click();
        console.log(await page.locator(".card-body a").first().textContent());
        console.log(await page.locator(".card-body a").nth(1).textContent());
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);
        
    });
test('@check radio buttons',async ({page}) => 
    {
      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
      await page.locator("#username").fill("rahulshettyacademy");
      //await page.locator("#password").fill("learning");
      await page.locator("#signInBtn").click();
      const documentLink = page.locator("[href*='documents-request']");
      const dropdown = page.locator("select.form-control");
      await dropdown.selectOption("consult");
      await page.locator(".radiotextsty").last().click();
      await page.locator("#okayBtn").click();
      console.log(await page.locator(".radiotextsty").last().isChecked() );      
      await expect (page.locator(".radiotextsty").last()).toBeChecked();
      await page.locator("#terms").click();
      console.log(await page.locator("#terms").isChecked());
      await expect(page.locator("#terms")).toBeChecked();
      await expect(documentLink).toHaveAttribute("class","blinkingText");
    });

      test('child window handling', async({browser}) =>
      {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator('#username');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
        const[newPage] =await Promise.all([

                context.waitForEvent('page'),
                documentLink.click(),
            ])

             const text = await newPage.locator(".red").textContent();
             console.log(text);
             const arrayText = text.split("@");
             const domain = arrayText[1].split(" ")[0];
             //console.log(domain);
             await userName.fill(domain);
             console.log(await userName.inputValue());




    });
