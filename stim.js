const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Visit your referral page
  await page.goto('https://prisriva.github.io/referral/ref.html', { waitUntil: 'networkidle2' });

  // ✅ Correct way to delay: use Promise with setTimeout
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
})();
