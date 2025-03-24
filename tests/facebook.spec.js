import{test, expect, chromium} from '@playwright/test'

test('fb login', async({page})=>{
    
    await page.goto('https://www.facebook.com/');
    await page.getByTestId('royal-email').fill('9025278581');
    await page.getByTestId('royal-pass').fill('951316106004');
    await page.getByTestId('royal-login-button').click();
    
    await page.locator
    console.log('Loggedin - page title', await page.title());

    await page.close();


})