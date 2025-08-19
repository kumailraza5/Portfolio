/* eslint-disable */
const fs = require('fs');
const path = require('path');

const dist = path.resolve(__dirname, '..', 'dist');
const indexHtml = path.join(dist, 'index.html');
const notFoundHtml = path.join(dist, '404.html');

try {
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, notFoundHtml);
    console.log('Created 404.html for GitHub Pages SPA routing');
  }
} catch (e) {
  console.error('postbuild failed:', e);
  process.exit(0);
}


