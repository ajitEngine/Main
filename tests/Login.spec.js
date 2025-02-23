import{test, expect} from '@playwright/test'
import { text } from 'stream/consumers'

test('Login Function', async({page, browser})=>{
    
 await page.goto('https://dev-supplier.zeemart.co/login/')
 await browser.newContext({
    viewport: { width: 1536, height: 695 }
    // Set viewport to Full HD resolution
  });
 await page.pause()
//  const context = await browser.newContext({
//     viewport: { width: 1536, height: 695 }
//     // Set viewport to Full HD resolution
//   });
 //Using Locators
 await page.locator('input[type="email"]').fill('nagademotesting@gmail.com')
 await page.locator('//input[@name="loginPassword"]').fill('!123456Zm')

 //Using CSS Selectors 
 await page.locator('body > app-root > ng-component > zm-fullpagecontent > zm-body > div > div > div.login_content > div > div > form > div:nth-child(3)').click()
 await page.pause()

 await page.locator(':has-text("Reports")').click()
 await page.pause()

})