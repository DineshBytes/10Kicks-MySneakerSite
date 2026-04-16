const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const pumaStart = html.indexOf('puma:[');
const converseStart = html.indexOf('converse:[');

if (pumaStart > -1 && converseStart > -1) {
  // Extract everything from puma:[ to just before converse:[
  const brokenPumaSection = html.substring(pumaStart, converseStart);
  
  const fixedPumaSection = `puma:[
    {id:'pm1',name:'Adidas OG Sambas',price:10999,back:'pg-puma',
     img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G',
     imgs:['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G'],
     desc:'The timeless Samba OG. Classic street style.'},
    {id:'pm2',name:'Handball Spezial Shoes',price:8999,back:'pg-puma',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4'],
     desc:'Handball Spezial — Authentic style and comfort.'},
    {id:'pm3',name:'Nizza RF Shoes',price:6999,back:'pg-puma',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg'],
     desc:'Classic canvas styling in a modern low-cut silhouette.'},
    {id:'pm4',name:'SUPERSTAR II SHOES',price:7599,back:'pg-puma',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg'],
     desc:'The iconic shell-toe sneaker in a premium beige colourway.'},
    {id:'pm5',name:'VL Court 3.0 Shoes',price:4599,back:'pg-puma',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4'],
     desc:'Everyday essential skate-inspired shoe.'}
  ],
  `;

  html = html.replace(brokenPumaSection, fixedPumaSection);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Fixed puma array section.');
} else {
  console.log('Could not find boundaries.');
}
