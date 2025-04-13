#!/usr/bin/env node
// tells the operating system: run this file using Node.js, also automatically searches node.js in our system environment variables

import * as cheerio from 'cheerio';
import axios from 'axios';

// process.argvs returns a list of arguments with the first argument being the node.exe path and second argument being the script file, 
// the subsequent items are the real arguments
const [nodePath, scriptPath, url, selector] = process.argv;

// if wrong number of arguments are passed, exit the process
if (!url || !selector) {
	console.log("Usage: text-scraper-cli <url> <css selector>")
	process.exit(1);
}

// command line usage example: node index.js https://raredrops.github.io/ ul
async function fetchText(url, selector) {
	try {
		const response = await axios.get(url);
		const $ = cheerio.load(response.data);
		const selectedElements = $(selector);

		if (selectedElements.length == 0) {
			console.log('No elements matched the selector');
			return;
		}

		var elementsArray = []
		selectedElements.each((i, element) => {
			elementsArray.push($(element).text().replace(/\s+/g, ' ')); // replaces all occurences of white space, replace with 1 space
		})

		return elementsArray;

	} catch (error) {
		console.error('Error fetching URL:', error.message);
	}
}

console.log(await fetchText(url, selector));	