const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  let page;

  test.beforeEach(async ({ context }) => {
    page = await context.newPage();
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('checks if the content is displayed', async () => {
    await page.goto('http://localhost:3000');

    // Check if the Learn More button is displayed
    const learnMoreButton = await page.$('a.inline-flex');
    expect(learnMoreButton).toBeTruthy();

    // Check if the image is displayed
    const image = await page.$('img.object-cover');
    expect(image).toBeTruthy();
  });
});
