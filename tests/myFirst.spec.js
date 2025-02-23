const { test, expect } = require('@playwright/test');

test('Successful Login', async ({ browser}) => {
  // Create a new browser context
  const context = await browser.newContext({
    viewport: { width: 1536, height: 695 }
    // Set viewport to Full HD resolution
  });
  
  // Create a new page
  await context.tracing.start(
    {
      snapshots: true,
      screenshots: true
    }); 
  const page = await context.newPage();
  
  // Your test steps
  await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('VEL MASALA250');
  await page.getByRole('dialog').getByText('VEL MASALA250').click();
  await page.getByRole('textbox', { name: 'Search SKU name' }).fill('Another Test Custom');
  await page.getByText('Add to order').first().click();
  await page.getByRole('button', { name: 'items (S$60.00)' }).click();
  await page.getByText('Min. order is S$').click();
  await page.getByRole('dialog').locator('input[type="text"]').fill('10');
  await page.getByRole('textbox', { name: 'eg. Prepare or pack item in' }).fill('Handle Carefully');
  await page.getByText('1 itemAnother Test CustomS$10').click();
  await page.getByRole('button', { name: 'Place order' }).click();
  
  await context.tracing.stop({path:'Login_trace.zip'})
  // Close the browser context
  await context.close();
});

// test('Failure Login', async ({ browser }) => {
//   // Create a new browser context
//   const context = await browser.newContext({
//     viewport: { width: 1536, height: 695 } // Set viewport to Full HD resolution
//   });

//   // Create a new page
//   const page = await context.newPage();

//   // Your test steps
//   await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('nagdemotesting@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('link', { name: 'Orders' }).click();
//   await page.getByRole('button', { name: 'Create order' }).click();
//   await page.getByRole('textbox', { name: 'Search' }).fill('VEL MASALA250');
//   await page.getByRole('dialog').getByText('VEL MASALA250').click();
//   await page.getByRole('textbox', { name: 'Search SKU name' }).fill('Another Test Custom');
//   await page.getByText('Add to order').first().click();
//   await page.getByRole('button', { name: 'items (S$60.00)' }).click();
//   await page.getByText('Min. order is S$').click();
//   await page.getByRole('dialog').locator('input[type="text"]').fill('10');
//   await page.getByRole('textbox', { name: 'eg. Prepare or pack item in' }).fill('Handle Carefully');
//   await page.getByText('1 itemAnother Test CustomS$10').click();
//   await page.getByRole('button', { name: 'Place order' }).click();

//   // Close the browser context
//   await context.close();
// });
