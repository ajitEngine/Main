// const { test, expect } = require('@playwright/test');

// test.setTimeout(120000);

// test('Fetch Order ID, Refresh Page, Click Order & Verify Total Amount', async ({ page }) => {
//   // **1️⃣ Navigate to login page and login**
//   await page.goto('https://dev-supplier.zeemart.co/login?sessionExpired=true');
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('nagademotesting@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).fill('!123456Zm');
//   await page.getByRole('button', { name: 'Log in' }).click();

//   // **2️⃣ Navigate to Orders and Create an Order**
//   await page.getByRole('link', { name: 'Orders' }).click();
//   await page.getByRole('button', { name: 'Create order' }).click();
  
//   // **3️⃣ Search & Select Product**
//   await page.getByRole('textbox', { name: 'Search' }).fill('VEL MASALA250');
//   await page.getByRole('dialog').getByText('VEL MASALA250').click();

//   // **4️⃣ Search & Select SKU**
//   await page.getByRole('textbox', { name: 'Search SKU name' }).fill('Another Test Custom');
//   await page.getByText('Add to order').first().click();

//   // **5️⃣ Proceed to Checkout**
//   await page.getByRole('button', { name: /items \(S\$\d+\.\d{2}\)/ }).click();

//   // **6️⃣ Fill Additional Instructions**
//   await page.getByRole('textbox', { name: 'eg. Prepare or pack item in' }).fill('Handle Carefully');

//   // **7️⃣ Extract Total Amount Before Placing Order**
//   await page.waitForSelector('xpath=//app-review-order//div[4]/div[1]/span[2]', { timeout: 10000 });
//   const totalAmountLocator = page.locator('xpath=//app-review-order//div[4]/div[1]/span[2]');
//   const totalAmountTextBefore = await totalAmountLocator.innerText();
//   console.log("Total Amount Before Placing Order:", totalAmountTextBefore);

//   // Extract numeric value
//   const matchBefore = totalAmountTextBefore.match(/S\$(\d+\.\d{2})/);
//   const expectedTotalAmount = matchBefore ? parseFloat(matchBefore[1]) : null;
//   if (expectedTotalAmount === null) throw new Error("Failed to extract total amount before placing order!");

//   // **8️⃣ Take Screenshot Before Placing the Order**
//   await page.screenshot({ path: 'before_place_order.png', fullPage: true });
// await page.pause()
//   // **9️⃣ Place the Order**
//   await page.getByRole('button', { name: 'Place order' }).click();

// //   // **🔟 Extract Order Number from Toaster Notification using getByLabel**
// //   const orderToaster = await page.getByText('Order created Order');/*  */
// //   await orderToaster.waitFor({ state: 'visible', timeout: 30000 });
  
// //   const orderText = await orderToaster.innerText();
// //   console.log("Toaster Message:", orderText); // Debugging log to verify the exact message
  
// //   // Extract the order number dynamically
// //   const orderNumberMatch = orderText.match(/Order created Order (\d+)/);
// //   const orderNumber = orderNumberMatch ? orderNumberMatch[1] : null;
  
// //   if (!orderNumber) throw new Error("❌ Order number not found in toaster notification!");
// //   console.log("✅ Extracted Order Number:", orderNumber);
  
// //   // **1️⃣1️⃣ Refresh the Page and Click on the Extracted Order Number**
// //   await page.reload();
// //   await page.waitForTimeout(5000); // Ensures the page reloads properly
  
// //   const orderIdLocator = page.getByText(orderNumber);
// //   await orderIdLocator.waitFor({ state: 'visible', timeout: 10000 });
// //   await orderIdLocator.click();
// //   console.log(`✅ Successfully clicked on Order ID: ${orderNumber}`);

// //   // **1️⃣3️⃣ Extract & Verify Total Amount in Order Details**
// //   await page.waitForSelector('xpath=//div[contains(text(), "Estimated total")]/following-sibling::p', { timeout: 10000 });
// //   const totalAmountLocatorAfter = page.locator('xpath=//div[contains(text(), "Estimated total")]/following-sibling::p');
// //   const totalAmountTextAfter = await totalAmountLocatorAfter.innerText();
// //   console.log("Total Amount After Placing Order:", totalAmountTextAfter);

// //   // Extract numeric value
// //   const matchAfter = totalAmountTextAfter.match(/S\$(\d+\.\d{2})/);
// //   const actualTotalAmount = matchAfter ? parseFloat(matchAfter[1]) : null;
// //   if (actualTotalAmount === null) throw new Error("Failed to extract total amount after placing order!");

// //   // **1️⃣4️⃣ Assert the Total Amount Before & After is Same**
// //   expect(actualTotalAmount).toBe(expectedTotalAmount);
// //   console.log("✅ Total amount before and after order placement matched successfully!");

// //   // **1️⃣5️⃣ Take Screenshot After Placing the Order**
// //   await page.screenshot({ path: 'after_place_order.png', fullPage: true });
// });
