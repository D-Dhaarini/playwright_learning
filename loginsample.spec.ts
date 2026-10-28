import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Navigate to Google
    await page.goto('https://www.google.com');
    const searchBox = page.getByRole('combobox', { name: 'Search' });
    await searchBox.click();
    await searchBox.fill('orangehrm');
    await searchBox.press('Enter');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with the correct URL if needed
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to "My Info" and update details
    await page.getByRole('link', { name: 'My Info' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('John');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Doe');
    await page.locator('div').filter({ hasText: /^Nickname$/ }).first().click();
 });

test('Form filling', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.getByText("Automation Testing Practice")).toBeVisible();
    await page.getByRole('link',{name:'PlaywrightPractice'}).click();
    await expect(page.getByRole('heading',{name:'Playwright Practice'})).toBeVisible;
    await expect(page.getByRole('heading',{name:'Buttons'})).toBeVisible();
    await page.getByRole('button',{name:'Primary Action'}).click(); 
    await page.getByRole('button',{name:'Toggle Button'}).click();
    const text1=await page.locator('.card').nth(0).textContent();
    console.log(text1);
    const text2=await page.locator('.card').nth(1).textContent();
    console.log(text2);
    await page.getByRole('textbox',{name:'Username'}).textContent();

    await page.getByRole('textbox',{name:'Username'}).fill('Admin');
   
    const username=await page.getByRole('textbox',{name:'Username'}).inputValue();
console.log(username)
await page.getByRole('checkbox',{name:'Accept terms'}).check();
await expect(page.getByRole('checkbox',{name:'Accept terms'})).toBeChecked();
await page.getByRole('link',{name:'Home'}).nth(1).click();
await expect(page.getByText('important text')).toBeVisible();
await page.locator('.wikipedia-search-input').fill('Playwright');
await page.locator('.wikipedia-search-input').press('Enter');
})
