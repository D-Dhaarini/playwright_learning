import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

//     // Navigate to Google
//     await page.goto('https://www.google.com');
//     const searchBox = page.getByRole('combobox', { name: 'Search' });
//     await searchBox.click();
//     await searchBox.fill('orangehrm');
//     await searchBox.press('Enter');
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with the correct URL if needed
//     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//     await page.getByRole('button', { name: 'Login' }).click();

//     // Navigate to "My Info" and update details
//     await page.getByRole('link', { name: 'My Info' }).click();
//     await page.getByRole('textbox', { name: 'First Name' }).fill('John');
//     await page.getByRole('textbox', { name: 'Middle Name' }).fill('Doe');
//     await page.locator('div').filter({ hasText: /^Nickname$/ }).first().click();
// });

test('Form filling', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page.getByText("Automation Testing Practice")).toBeVisible();

})
