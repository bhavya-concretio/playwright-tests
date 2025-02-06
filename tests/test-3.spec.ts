import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://concretio-17f-dev-ed.develop.my.salesforce.com/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('bhavya@concret.io');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('porwal123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.goto('https://concretio-17f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('tab', { name: 'Object Manager' }).click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('menuitem', { name: 'Custom Object', exact: true }).click();
  await page.locator('iframe[name="vfFrameId_1738755690079"]').contentFrame().getByRole('textbox', { name: '* Label' }).click();
  await page.locator('iframe[name="vfFrameId_1738755690079"]').contentFrame().getByRole('textbox', { name: '* Label' }).fill('bhavya');
  await page.locator('iframe[name="vfFrameId_1738755690079"]').contentFrame().getByRole('textbox', { name: '* Plural Label' }).click();
  await page.locator('iframe[name="vfFrameId_1738755690079"]').contentFrame().getByRole('textbox', { name: '* Plural Label' }).fill('bhavyas');
});