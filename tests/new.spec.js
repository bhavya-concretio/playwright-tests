import {test, expect} from '@playwright/test'

test.skip("First Check", async function({page}){
    expect(102).toBe(102);
});

test.skip("Second Check", async function({page}){
    expect(101).not.toBe(102);
});

test.skip("Third Check", async function({page}){
    expect('abc').toBe('abc');
});
test.skip("fourth", async function ({page}) {
    expect(true).toBeTruthy();
});

test.skip("fifth", async function({page}){
    expect(false).toBeFalsy();

})
test("sixth", async function ({page}) {
    await page.goto("https://www.google.com/");
});
test("Seventh", async function({page}){
    await expect("Bhavya Jain".includes("Jain")).toBeTruthy();
})