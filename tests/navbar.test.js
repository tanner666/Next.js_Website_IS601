import { test, expect } from '@playwright/test';

test.use({
    viewport: {
      height: 667,
      width: 1200
    }
  });

test('test', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-web/');
  await page.getByRole('menuitem', { name: 'Resources section' }).click();
  await page.getByRole('menuitem', { name: 'Home section' }).click();
});
