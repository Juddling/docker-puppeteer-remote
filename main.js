const puppeteer = require('puppeteer-core');

(async () => {
  // connect to the dockerised chrome
  const browser = await puppeteer.connect({
    browserURL: 'http://docker.for.mac.localhost:9222'
  });
  const page = await browser.newPage();
  await page.goto('https://github.com/puppeteer/puppeteer', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshots/example.png' });
  await browser.close();
})();