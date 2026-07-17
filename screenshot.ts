import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // iPhone 12 Pro max
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    defaultBrowserType: 'chromium'
  });
  const page = await context.newPage();

  await page.goto('http://localhost:3000');

  // Wait for network idle
  await page.waitForLoadState('networkidle');

  // Scroll down to trigger framer-motion whileInView
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'mobile_full.png', fullPage: true });

  await browser.close();
})();
