import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://concretio-17f-dev-ed.develop.my.salesforce.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('bhavya@concret.io');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('porwal123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://concretio-17f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('option', { name: 'Sales Console' }).click();
  await page.goto('https://concretio-17f-dev-ed.develop.lightning.force.com/lightning/page/home');
});