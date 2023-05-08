import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-web/');
  await page.getByRole('link', { name: 'Placeholder Image MyWeb Class' }).click();
});