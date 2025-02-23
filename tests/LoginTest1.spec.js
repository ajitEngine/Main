import{test, expect} from '@playwright/test'

test('DemoLogin 1 @smoke', async({page})=>{
     
    await page.goto('https://demo.applitools.com/')
   // await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Ajith')
   // await page.locator()
   await page.getByRole('textbox', { name: 'Enter your password' }).fill('12233444')
   await page.waitForSelector('text=Sign in',{timeout:5000})
   
   await page.locator('text=Sign in').click()
  // await page.pause()
   
})

test('DemoLogin 2', async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php')
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
 // await page.pause()
  // await page.getByText('Test 20 benim').click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();

  // ---------------------
  await page.close();
   
})