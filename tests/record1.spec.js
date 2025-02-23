import {test, expect} from '@playwright/test'
const { chromium } = require('@playwright/test')



test('record', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://dev-supplier.zeemart.co/login?manualLogin=true');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://dev-supplier.zeemart.co/sg/pages/dashboard');
  await page.getByText('Shwetha Testing', { exact: true }).click();
  await page.getByText('Logout').click();

  // ---------------------
  await context.close();
  await browser.close();
});

// import { test, expect, devices } from '@playwright/test';

// test.use({
//   ...devices['iPhone 13 Pro'],
//   viewport:{width: 390, height:844} ,// Explicitly setting the viewport size
// });

test('test with viewport size', async ({ page }) => {
  await page.goto('https://dev-supplier.zeemart.co/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nagdemotesting@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Shwetha Testing', { exact: true }).click();
  await page.getByText('Logout').click();
});
