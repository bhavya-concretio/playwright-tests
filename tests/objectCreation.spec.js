import {test, expect} from '@playwright/test';
import constants from '../utils/constants';
const {readFileSync}= require('fs');

let dataForEveerthing= 'tests/objectCreation.json';

test("Creating a custom object", async function ({page}) {
    const dataForEveerthingFile= readFileSync(dataForEveerthing);
    var dataForEveerthingFileObj = JSON.parse(dataForEveerthingFile);

    await page.goto(constants.BASE_URL);
    expect(constants.BASE_URL).toBeTruthy();

    await page.locator('#username').click();
    await page.locator('#username').fill(dataForEveerthingFileObj.salesforceUsername);
    await page.locator('#password').click();
    await page.locator('#password').fill(dataForEveerthingFileObj.salesforcePassword);
    await page.locator('#Login').click();
    await page.goto(constants.HOMEPAGE_URL);
    expect(constants.HOMEPAGE_URL).toBeTruthy();

    await page.getByTitle('Object Manager').click();
    expect(constants.OBJECTPAGE_URL).toBeTruthy();
    await page.waitForTimeout(2000);

    console.log('Attempting to click the Create button...');
    await page.getByRole('button', { name: 'Create' }).waitFor();
    await page.getByRole('button', { name: 'Create' }).isVisible();
    const create= page.getByRole('button', { name: 'Create' });
    await create.click();

    console.log('Create button clicked.');
    await page.waitForTimeout(1000);

    console.log('Waiting for the Custom Object menu item to be visible...');
    await page.getByRole('menuitem', { name: 'Custom Object', exact: true }).waitFor({state: 'visible'});
    await page.getByRole('menuitem', { name: 'Custom Object', exact: true }).isVisible();
    console.log('Custom Object menu item is visible.');
    console.log('Attempting to click the Custom Object menu item...');
    await page.getByRole('menuitem', { name: 'Custom Object', exact: true }).click();
    console.log('Custom Object menu item clicked.');


    expect(constants.NEW_OBJECT_CREATION_URL).toBeTruthy();
    const frame=page.frameLocator('iframe[name^="vfFrameId_"]');
    await frame.locator('#MasterLabel').waitFor();
    await frame.locator('#MasterLabel').isVisible();
    await frame.locator('#MasterLabel').click();
    await frame.locator('#MasterLabel').fill(dataForEveerthingFileObj.objectName);

    await frame.locator('#PluralLabel').waitFor();
    await frame.locator('#PluralLabel').isVisible();
    await frame.locator('#PluralLabel').click();
    await frame.locator('#PluralLabel').fill(dataForEveerthingFileObj.pluralObjectName);

    await frame.locator('#MasterNameFieldLabel').waitFor();
    await frame.locator('#MasterNameFieldLabel').isVisible();
    await frame.locator('#MasterNameFieldLabel').click();
    await frame.locator('#MasterNameFieldLabel').clear();
    await frame.locator('#MasterNameFieldLabel').fill(dataForEveerthingFileObj.recordNumber);

    await frame.locator('#AutoNo').waitFor();
    await frame.locator('#AutoNo').isVisible();
    const selector= frame.locator('#AutoNo');
    await selector.click();

    await selector.selectOption({label:'Auto Number'});
    await frame.locator('#NameAutoNumberMask').waitFor({state:'visible'});
    await frame.locator('#NameAutoNumberMask').click();
    await frame.locator('#NameAutoNumberMask').fill("L-{000}");
    await frame.locator('#StartingNo').waitFor({state:'visible'});
    await frame.locator('#StartingNo').click();
    await frame.locator('#StartingNo').fill('101');

    // await frame.locator('#CreateTab').waitFor({state:'visible'});  //if we want to add wizard tab
    // await frame.locator('#CreateTab').check();

    await frame.locator('//*[@id="bottomButtonRow"]/input[1]').scrollIntoViewIfNeeded();
    await frame.locator('//*[@id="bottomButtonRow"]/input[1]').click();

    expect(constants.OBJECT_CREATED_PAGE).toBeTruthy();


    //DELETION OF OBJECT
    await page.getByRole('button', {name:'Delete'}).waitFor({state:"visible"});
    await page.getByRole('button', {name:'Delete'}).click();

    await page.waitForTimeout(1000);

    await page.locator("div[id^=content_]").waitFor({state:'visible'});
    await page.getByRole('button', { name: 'Delete' }).click();
    expect(constants.AFTER_DELETE_URL).toBeTruthy();
    await page.waitForTimeout(2000);


    // await page.locator('iframe[name="vfFrameId_1738755690079"]').contentFrame().getByRole('textbox', { name: '* Label' }).click();
    // const menu=page.locator("div.actionMenu[role='menu']");
    // await menu.waitFor();
    //we can use this also which is:  //a[@title="Custom Object"]
    // await expect(test).toBeVisible();



    // await page.getByRole("menuitem", {name: "Custom Object"}).getByTitle('Custom Object').click();
    

    // expect(constants.NEWOBJECTPAGE_URL).toBeTruthy();
    // await page.locator('#MasterLabel').click();
    // await page.locator('#MasterLabel').fill(dataForEveerthingFileObj.objectName);
    // await page.locator('#PluralLabel').click();
    // await page.locator('#PluralLabel').fill(dataForEveerthingFileObj.pluralObjectName);
    // await page.locator('#MasterNameFieldLabel').click();
    // await page.locator('#MasterNameFieldLabel').fill(dataForEveerthingFileObj.recordName);

    // //const menu= page.locator("locator('#brandBand_2').getByLabel('Create').locator('div')");
    // await expect(test).toBeVisible();
    
})

