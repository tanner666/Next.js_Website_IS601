const { test, expect } = require('@playwright/test');

test.describe('Email Subscription Input', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1024 });
  });

  test('Enter text in the email input field', async ({ page }) => {
    await page.goto('https://njit-wis.github.io/project-2-team-web/');
    await page.fill('input[type="text"]', 'john@example.com');
    const inputValue = await page.inputValue('input[type="text"]');
    expect(inputValue).toBe('john@example.com');
  });
});
