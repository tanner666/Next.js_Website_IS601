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
  await page.goto('http://localhost:3000'); // Make sure to replace this with the correct URL of your app
});

afterEach(async () => {
  await page.close();
});

describe('Navbar', () => {
  it('should have the correct brand title', async () => {
    const brandTitle = await page.$eval('h1', (el) => el.textContent);
    expect(brandTitle).toBe('Streamline');
  });

  it('should have the correct number of navigation links', async () => {
    const navLinks = await page.$$('nav .hidden.md\\:block a');
    expect(navLinks.length).toBe(5);
  });

  it('should navigate to the correct section when a navigation link is clicked', async () => {
    await page.click('nav .hidden.md\\:block a:nth-child(2)'); // Clicks the 'About' link
    await page.waitForTimeout(1000); // Wait for the scroll animation

    const currentSection = await page.evaluate(() => {
      const el = document.querySelector('.about');
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0;
    });

    expect(currentSection).toBe(true);
  });

  it('should open the mobile menu when the menu button is clicked', async () => {
    await page.setViewportSize({ width: 375, height: 812 }); // Simulate a mobile device
    await page.click('button[aria-controls="mobile-menu"]');
    await page.waitForSelector('#mobile-menu');

    const mobileMenuVisible = await page.isVisible('#mobile-menu');
    expect(mobileMenuVisible).toBe(true);
  });
});
