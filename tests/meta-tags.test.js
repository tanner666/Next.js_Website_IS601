const { test, expect } = require('@playwright/test');

test.describe('Open Graph Tags and Twitter Card', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://njit-wis.github.io/project-2-team-web/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  test('contains Open Graph tags', async () => {
    const metaTags = await page.$$eval('head > meta', (tags) => tags.map((tag) => ({
      name: tag.getAttribute('name'),
      property: tag.getAttribute('property'),
      content: tag.getAttribute('content'),
    })));

    // Check that the Open Graph tags are present and have the correct values
    expect(metaTags.find((tag) => tag.property === 'og:image').content).toContain('https://og-image.vercel.app/');
    expect(metaTags.find((tag) => tag.property === 'og:type').content).toBe('website');
    expect(metaTags.find((tag) => tag.name === 'og:title').content).toBe('MyWebClass.org: Agile & Lean Education for the AI-Driven World');
  });

  test('contains Twitter Card', async () => {
    const metaTags = await page.$$eval('head > meta', (tags) => tags.map((tag) => ({
      name: tag.getAttribute('name'),
      property: tag.getAttribute('property'),
      content: tag.getAttribute('content'),
    })));

    // Check that the Twitter Card is present and has the correct value
    expect(metaTags.find((tag) => tag.name === 'twitter:card').content).toBe('summary_large_image');
  });
});
