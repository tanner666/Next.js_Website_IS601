import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 667,
    width: 375
  }
});

test('test', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-web/');
  await page.getByRole('button', { name: 'Open main menu' }).click();
  await page.getByRole('menuitem', { name: 'Services section' }).click();
  await page.getByRole('button', { name: 'Open main menu' }).click();
  await page.getByRole('menuitem', { name: 'About section' }).click();
  await page.getByRole('navigation', { name: 'Main' }).getByText('Our Mission').click();
  await page.getByRole('button', { name: 'Open main menu' }).click();
  await page.getByRole('menuitem', { name: 'Home section' }).click();
});