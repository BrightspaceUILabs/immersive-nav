const puppeteer = require('puppeteer');
const VisualDiff = require ('@brightspace-ui/visual-diff');

describe('d2l-labs-immersive-nav', () => {

	const visualDiff = new VisualDiff('d2l-labs-immersive-nav', __dirname);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.goto(`${visualDiff.getBaseUrl()}/test/immersive-nav.visual-diff.html`, { waitUntil: ['networkidle0', 'load'] });
		await page.bringToFront();
	});

	after(async() => await browser.close());

	it('passes visual-diff comparison', async function() {
		const rect = await visualDiff.getRect(page, '#default');
		await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
	});

});
