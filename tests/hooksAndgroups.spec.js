import {test, expect} from '@playwright/test'



test.describe('All The tests', ()=>{
test.beforeEach(async({page})=>{
  
  await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
})

test('Order', async({page})=>{
  
  await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.getByRole('button', { name: 'Create order' }).click();
  await page.getByRole('dialog').getByText('VEL MASALA250').click();
  await page.locator('span > .text-primary').first().click();
  await page.locator('datatable-scroller').getByRole('textbox').click();
  await page.locator('datatable-scroller').getByRole('textbox').fill('15');
  await page.getByRole('button', { name: 'items (S$35.00)' }).click();
  await page.getByRole('button', { name: 'Place order' }).click()
 // await page.pause( )
})

test.afterEach(async({page})=>{
  // await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
  // await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
  // await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
  // await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.locator('div').filter({ hasText: /^Shwetha Testing$/ }).nth(4).click();
  await page.getByText('Logout').click();
  await page.close( )
})

})




