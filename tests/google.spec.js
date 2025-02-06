import {test, expect} from '@playwright/test'

test("Application Test", async function({page}){
    await page.goto("https://www.google.com/");
    const url=await page.url();
    console.log(url);

    const title= await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Google");
})