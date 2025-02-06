import {test, expect} from '@playwright/test';
const {readFileSync} = require('fs');
import constants from '../utils/constants';


let dataFromJson='tests/sca.json';

test("Creation 101", async function({page}){
    const dataFromJsonFile=readFileSync(dataFromJson);
    var dataFromJsonFileObj=JSON.parse(dataFromJsonFile);

    await page.goto(constants.BASE_URL);  
    await page.locator('#username').click();
    await page.locator('#username').fill(dataFromJsonFileObj.salesforceUsername);
    await page.locator('#password').click();
    await page.locator('#password').fill(dataFromJsonFileObj.salesforcePassword);
    await page.locator('#Login').click();
    await expect(constants.HOMEPAGE_URL).toBeTruthy();
    

    await page.locator('.slds-r5').click();
    await page.getByPlaceholder('Search apps and items...').click();
    await page.getByPlaceholder('Search apps and items...').fill('accounts');
    await page.locator('.slds-size_small').click();
    await expect(constants.ACCOUNT_PAGE_URL).toBeTruthy();
    

    await page.getByRole("button", {name:"New"}).click();
    await expect(constants.NEW_ACCOUNT_PAGEURL).toBeTruthy();
    await page.getByRole("textbox", {name:"Name"}).click();
    await page.getByRole("textbox", {name:"Name"}).fill(dataFromJsonFileObj.salesforceAccountName);
    await page.getByRole("textbox", {name:"Account Number"}).click();
    await page.getByRole("textbox", {name:"Account Number"}).fill(dataFromJsonFileObj.salesforceAccountNumber);
    await page.locator('button[name="SaveEdit"]').click();
    expect(constants.ACCOUNT_CREATED_URL).toBeTruthy();




})