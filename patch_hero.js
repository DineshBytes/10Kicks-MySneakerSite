const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');
let changes = 0;

// Nike → white AF1 dark bg (confirmed working)
// Already set to photo-1600269452121 ✓

// Puma → confirmed working Puma sneaker shot
const OLD_PUMA = "img:'https://images.unsplash.com/photo-1608667440527-cb3b9d77f4da?w=800&q=90'";
const NEW_PUMA = "img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=90'";

if (html.includes(OLD_PUMA)) {
  html = html.replace(OLD_PUMA, NEW_PUMA);
  console.log('✓ Puma image fixed to confirmed working URL');
  changes++;
} else {
  // Check what's currently set
  const nikeLine = html.match(/brand:'nike'[^}]+img:'([^']+)'/s);
  const pumaLine = html.match(/brand:'puma'[^}]+img:'([^']+)'/s);
  console.log('Nike img:', nikeLine ? nikeLine[1].slice(0, 60) : 'not found');
  console.log('Puma img:', pumaLine ? pumaLine[1].slice(0, 60) : 'not found');
}

fs.writeFileSync(file, html, 'utf8');
console.log(`Done — ${changes} fix(es)`);
