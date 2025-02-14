import {test, expect} from '@playwright/test';
import chatConstants from '../utils/chatConstants';
import { readFileSync } from 'fs';

let data='tests/chatapp-data.json';

test("Chat button to open chat window", async function({page}){
    const dataFile = readFileSync(data);
    var dataFileObj= JSON.parse(dataFile);

    await page.goto(chatConstants.BASE_URL);
    await page.waitForTimeout(5000);
    expect(chatConstants.BASE_URL).toBeTruthy();
    
})
