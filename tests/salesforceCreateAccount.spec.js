import {test, expect} from '@playwright/test';
const { readFileSync }= require('fs');

let data= 'tests/sca.json';
test("Create account test 1", async function({page}){
    let dataOfUser= readFileSync(data);
    var dataOfUserObj=JSON.parse(dataOfUser);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(dataOfUserObj.username);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(dataOfUserObj.password);
    await page.locator("//button[@type='submit']").click();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');


    await page.getByAltText('profile picture').click();
    await page.getByText('Logout').click();
    await expect(page).toHaveURL(/login/);







    //await page.getByTitle('App Launcher').click();
    //https://concretio-17f-dev-ed.develop.my.salesforce.com/
    //https://concretio-17f-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home



})