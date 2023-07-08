'use server';
import fs from 'fs';
import Parser from 'rss-parser';
import cheerio from 'cheerio';

export async function mediumHandler() {
  const parser = new Parser();
  const feedURL = 'https://medium.com/feed/rm-ritik'; // Replace with your Medium RSS feed URL

  try {
    const feed = await parser.parseURL(feedURL);
    const decodedItems = await Promise.all(feed.items.map(async (item) => {
      const $ = cheerio.load(item['content:encoded']);
      const content = $('body').text();
      return {
        ...item,
        content,
      };
    }));
    return decodedItems;
  } catch (error) {
    console.log(error);
  }
}





