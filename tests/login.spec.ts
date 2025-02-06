import { test, expect } from '@playwright/test';
import { json } from 'stream/consumers';
const {readFileSync}= require('fs');

let dataJson='tests/login.json';

test('test', async ({ page }) => {


  let testData=readFileSync(dataJson);
  var testDataObj= JSON.parse(testData);

  await page.goto('https://concretio-17f-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fconcretio-17f-dev-ed.develop.lightning.force.com%252Flightning%252Fo%252FAccount%252Flist%253FfilterName%253D__Recent');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(testDataObj.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(testDataObj.password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://concretio-17f-dev-ed.develop.lightning.force.com/lightning/o/Account/list?filterName=__Recent');
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByRole('textbox', { name: '*Account Name' }).click();
  await page.getByRole('textbox', { name: '*Account Name' }).fill(testDataObj.accountName);
  await page.getByRole('textbox', { name: 'Account Number' }).click();
  await page.getByRole('textbox', { name: 'Account Number' }).fill(testDataObj.accountNumber);
  await page.getByRole('textbox', { name: 'Website' }).click();
  await page.getByRole('textbox', { name: 'Website' }).fill(testDataObj.website);
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.getByRole('option', { name: 'Customer - Direct' }).locator('span').nth(1).click();
  await page.getByRole('combobox', { name: 'Industry' }).click();
  await page.getByRole('option', { name: 'Apparel' }).click();
  await page.getByRole('textbox', { name: 'Annual Revenue' }).click();
  await page.getByRole('textbox', { name: 'Annual Revenue' }).fill(testDataObj.annulaRevenue);
  await page.locator('records-record-layout-row').filter({ hasText: 'Account Manager' }).locator('records-record-layout-item').nth(1).click();
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill(testDataObj.phoneNumber);
 
});