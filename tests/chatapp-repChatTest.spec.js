import {test, expect} from '@playwright/test';
import chatConstants from '../utils/chatConstants';
import { readFileSync } from 'fs';

let data='tests/chatapp-data.json';

test("Chat button to open chat window", async function({page}){
    const dataFile = readFileSync(data);
    var dataFileObj= JSON.parse(dataFile);

    await page.goto(chatConstants.TEST_LOGIN_URL);
    await page.waitForTimeout(3000);

    await page.locator('#username').click();
    await page.locator('#username').fill(dataFileObj.scratchUsername);
    await page.locator('#password').click();
    await page.locator('#password').fill(dataFileObj.scratchPassword);
    await page.locator('#Login').click();


    // await page.goto(chatConstants.REP_BASE_URL);
    // await page.waitForTimeout(5000);
    // expect(chatConstants.REP_BASE_URL).toBeTruthy();
    
})
