import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://njit-wis.github.io/project-2-team-web/');
  await page.getByRole('main').getByRole('heading', { name: 'Transforming Education for the Future' }).click();
  await page.getByRole('heading', { name: 'Empower the next generation with MyWebClass.org - where we revolutionize education through Agile and Lean principles. Nurture creativity, adaptability, and collaboration in students to help them excel in the AI-driven world. Join us in shaping the future of education and unlock the full potential of every learner.' }).click();
});
