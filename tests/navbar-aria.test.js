const { chromium } = require('playwright');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // Replace this with the URL of your app
});

afterEach(async () => {
  await page.close();
});

describe('Navbar ARIA compliance', () => {
  test('Desktop menu has correct ARIA attributes', async () => {
    const menuItems = await page.$$('.hidden.md\\:block .cursor-pointer');

    for (const menuItem of menuItems) {
      const role = await menuItem.getAttribute('role');
      const tabIndex = await menuItem.getAttribute('tabindex');
      const ariaLabel = await menuItem.getAttribute('aria-label');
      const ariaCurrent = await menuItem.getAttribute('aria-current');

      expect(role).toBe('menuitem');
      expect(tabIndex).toBe('0');
      expect(ariaLabel).toBeTruthy();
      expect(ariaCurrent === 'page' || ariaCurrent === null).toBeTruthy();
    }
  });

  test('Mobile menu button has correct ARIA attributes', async () => {
    const menuButton = await page.$('.md\\:hidden button');
    const ariaControls = await menuButton.getAttribute('aria-controls');
    const ariaExpanded = await menuButton.getAttribute('aria-expanded');
    const ariaLabelledBy = await menuButton.getAttribute('aria-labelledby');

    expect(ariaControls).toBe('mobile-menu');
    expect(ariaExpanded).toBeTruthy();
    expect(ariaLabelledBy).toBe('menuButtonLabel');
  });

  test('Mobile menu items have correct ARIA attributes', async () => {
    const menuButton = await page.$('.md\\:hidden button');
    await menuButton.click();

    const menuItems = await page.$$('#mobile-menu .cursor-pointer');

    for (const menuItem of menuItems) {
      const role = await menuItem.getAttribute('role');
      const tabIndex = await menuItem.getAttribute('tabindex');
      const ariaLabel = await menuItem.getAttribute('aria-label');
      const ariaCurrent = await menuItem.getAttribute('aria-current');

      expect(role).toBe('menuitem');
      expect(tabIndex).toBe('0');
      expect(ariaLabel).toBeTruthy();
      expect(ariaCurrent === 'page' || ariaCurrent === null).toBeTruthy();
    }
  });
});
