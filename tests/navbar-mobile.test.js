const { test, expect } = require('@playwright/test');

test('Mobile navigation menu works correctly', async ({ page }) => {
  // Set mobile viewport size
  await page.setViewportSize({ width: 375, height: 812 });

  // Navigate to your website
  await page.goto('http://localhost:3000');

  // Open the mobile menu
  const menuButton = await page.$('button[aria-controls="mobile-menu"]');
  await menuButton.click();

  // Click the "About" link
  const aboutLink = await page.locator('a[aria-label="About section"]');
  await aboutLink.click();

  // Check if the submenu is displayed
  const submenu = await page.locator('#mobile-about-submenu');
  expect(await submenu.isVisible()).toBe(true);

  // Click the "About" link again to navigate to the About page
  await aboutLink.click();

  // Verify that the page has navigated to the About section
  const aboutSection = await page.locator('#about');
  expect(await aboutSection.isVisible()).toBe(true);
});
