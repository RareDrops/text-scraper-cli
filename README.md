# Text Scraper CLI

![Image](https://github.com/user-attachments/assets/46c3e35c-802e-4852-8a9b-3966acf32bfa)

A simple command line interface tool to scrape and extract text from web pages using a specified CSS selector.

## Features

- Fetches HTML content from a given URL.
- Extracts text content based on a given CSS selector.


## Installation

1. Clone this repository:
```bash
git clone https://github.com/RareDrops/text-scraper-cli
cd text-scraper-cli
```

2. Install dependencies
```bash
npm install
```

3. Test script (optional)
```bash
npx text-scraper-cli
```

## Usage

After installation, run the CLI tool with the following syntax:
```bash
node index.js <url> <css-selector>
```

css-selector can be any element from the html(i.e. html, body, div, a) or classes(i.e. .centered-div) or specific ids(i.e. #id-1)

Alternatively, you can run
```bash
npx text-scraper-cli
```

You can also install the command globally into your environment by doing:
```bash
npm install -g
```

this will allow your terminal to run:

```bash
text-scraper-cli <url> <css-selector>
```

anywhere