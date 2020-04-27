const puppeteer = require('puppeteer');
const { expect } = require('chai');

let browser;
let page;

before(async () => {
	browser = await puppeteer.launch({ headless: true });
	page = await browser.newPage();
});

describe('Check Example Homepage', () => {
	it('has title "Example Domain"', async () => {
		await page.goto('https://example.com', { waitUntil: 'networkidle0' });
		const title = await page.title();
		expect(title).equal('Example Domain');
		expect('Example Domain').equal('Example Domain');
	}).timeout(10000);
});

after(async () => {
	await browser.close();
});
