#!/usr/bin/env node
// tells the operating system: run this file using Node.js, also automatically searches node.js in our system environment variables

import * as cheerio from 'cheerio';
import axios from 'axios';

// command line usage example: node index.js https://raredrops.github.io/ ul
async function fetchAndPrintText(url, selector) {
	const response = await axios.get(url);
	const $ = cheerio.load(response.data);
	const selectedText = $(selector).html();

	console.log(selectedText)
	return selectedText
}

// process.argvs returns a list of arguments with the first argument being the node.exe path and second argument being the script file, 
// the subsequent items are the real arguments
const [nodePath, scriptPath, url, selector] = process.argv;
fetchAndPrintText(url, selector)