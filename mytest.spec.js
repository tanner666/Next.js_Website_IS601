import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11 Pro'],
  colorScheme: 'light',
  viewport: {
    height: 667,
    width: 375
  }
});

test('test', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-t');
});