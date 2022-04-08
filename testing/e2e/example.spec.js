// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto(process.env.SWA_URL || 'https://bit.ly/recipes-for-aj');
  await expect(page).toHaveTitle("Recipes 4 AJ");

  await page.locator('text=Tags').click();
});
