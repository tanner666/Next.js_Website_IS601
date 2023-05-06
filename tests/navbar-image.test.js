const { test, expect } = require('@playwright/test');

test('Image is properly displayed in the Navbar', async ({ page }) => {
  // Navigate to your website (Replace 'http://localhost:3000' with your website URL)
  await page.goto('http://localhost:3000');

  // Check if the image is properly displayed
  const image = await page.$('nav img');
  expect(image).toBeTruthy();

  // Check if the image has correct 'src' attribute
  const imageSrc = await image.getAttribute('src');
  expect(imageSrc).toContain('lightbulb.png');

  // Check if the image has correct 'alt' attribute
  const imageAlt = await image.getAttribute('alt');
  expect(imageAlt).toBe('Blue lightbulb');

  // Check if the image has correct width and height
  const imageWidth = await image.getAttribute('width');
  const imageHeight = await image.getAttribute('height');
  expect(imageWidth).toBe('20');
  expect(imageHeight).toBe('20');
});
