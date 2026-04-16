const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
let html = fs.readFileSync(file, 'utf8');

// Copy local artifacts to project so they load perfectly and quickly
const srcDir = 'C:/Users/Dinesh/.gemini/antigravity/brain/9f2109be-75f5-4fc6-898c-c13fb161e9d8';
const destDir = __dirname;
fs.copyFileSync(path.join(srcDir, 'media__1776294359357.jpg'), path.join(destDir, 'jordan1.jpg'));
fs.copyFileSync(path.join(srcDir, 'media__1776294492044.png'), path.join(destDir, 'speedcat.png'));
fs.copyFileSync(path.join(srcDir, 'media__1776294562210.png'), path.join(destDir, 'samba.png'));
fs.copyFileSync(path.join(srcDir, 'media__1776294645368.png'), path.join(destDir, 'chuck.png'));

// Regex to find the arrays block and replace it
const OLD_SHOES_REGEX = /const HERO_SHOES = \[\s*\{brand:'nike',[\s\S]*?\];/m;

// Setting names in camelCase as instructed: "us ecamel case" -> pumaSpeedcats etc.
const NEW_SHOES = `const HERO_SHOES = [
    {brand:'nike',   label:'NIKE',    name:'airJordan1Mid',
     img:'jordan1.jpg',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #4a0010 0%, #200005 55%, #07000a 100%)',
     glow:'rgba(220,20,20,0.30)', dot:'#E10600', streaks:true},
    {brand:'puma',   label:'PUMA',    name:'pumaSpeedcats',
     img:'speedcat.png',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #3a0000 0%, #1a0000 55%, #080000 100%)',
     glow:'rgba(220,20,20,0.28)', dot:'#e10600', streaks:false},
    {brand:'adidas', label:'ADIDAS',  name:'adidasOgSambas',
     img:'samba.png',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #2a0018 0%, #11000b 55%, #050002 100%)',
     glow:'rgba(160,20,80,0.25)', dot:'#901030', streaks:false},
    {brand:'converse',label:'CONVERSE',name:'converseChucks',
     img:'chuck.png',
     bg:'radial-gradient(ellipse 90% 80% at 65% 50%, #301800 0%, #110800 55%, #050200 100%)',
     glow:'rgba(180,100,20,0.20)', dot:'#d07010', streaks:false}
  ];`;

if (html.match(OLD_SHOES_REGEX)) {
  html = html.replace(OLD_SHOES_REGEX, NEW_SHOES);
  
  // Also adjust image CSS to handle solid backgrounds with rounded corners nicely
  html = html.replace('.shoe-item img{width:100%;height:auto;filter:drop-shadow(0 32px 80px rgba(0,0,0,0.90)) drop-shadow(0 8px 24px rgba(0,0,0,0.65)) drop-shadow(0 0 40px rgba(255,255,255,0.04));display:block;}', 
                      '.shoe-item img{width:100%;height:auto;filter:drop-shadow(0 32px 80px rgba(0,0,0,0.90)) drop-shadow(0 8px 24px rgba(0,0,0,0.65));display:block;border-radius:24px;border:1px solid rgba(255,255,255,0.08);}');
                      
  console.log('✓ Successfully injected user uploads and camelCase names');
} else {
  console.log('✗ Failed to find HERO_SHOES block');
}

fs.writeFileSync(file, html, 'utf8');
