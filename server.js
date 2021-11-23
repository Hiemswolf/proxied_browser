const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.port || 3001;

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/getPage', async (req, res) => {
	const url = req.query.url;
	console.log(`Received api request...  (${url})`);

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	await res.send(await page.content());
	browser.close();
});

app.listen(port, () => console.log(`Listening on port: ${port}...`));



// (async () => {
// 	const browser = await puppeteer.launch({
// 		headless: false,
// 	});
// 	const page = await browser.newPage();
// 	await page.goto('https://example.com');

// 	setTimeout(() => brower.close(), 5000)
// })();

