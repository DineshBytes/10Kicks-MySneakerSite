const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Nike Jordan 1 Retro High OG image replacement
// We find nk2 and replace its img and imgs array entirely
const nkReg = /{id:'nk2',name:'AIR JORDAN 1 RETRO HIGH OG',price:16995,back:'pg-nike',\s*img:'[^']+',\s*imgs:\[[\s\S]*?\]/m;
html = html.replace(
  nkReg,
  `{id:'nk2',name:'AIR JORDAN 1 RETRO HIGH OG',price:16995,back:'pg-nike',
     img:'https://crepdogcrew.com/cdn/shop/products/taxihigh1.png?v=1755097107&width=800',
     imgs:['https://crepdogcrew.com/cdn/shop/products/taxihigh1.png?v=1755097107&width=800']`
);

// 2. Puma array replace entirely
const newPuma = `puma:[
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
  ]`;
html = html.replace(/puma:\[\s*\{[\s\S]*?\]/, newPuma);

// 3. buildGrid to support video
const oldGridBlock = `<img class="prod-thumb" src="\${p.img}" alt="\${p.name}"\n        onerror="this.src='https://placehold.co/180x170/1c1c1c/555?text=No+Image'"/>`;
const newGridBlock = `\${p.img.endsWith('.mp4') ? \`<video class="prod-thumb" src="\${p.img}" autoplay loop muted playsinline style="object-fit:cover; background:#fff;"></video>\` : \`<img class="prod-thumb" src="\${p.img}" alt="\${p.name}" onerror="this.src='https://placehold.co/180x170/1c1c1c/555?text=No+Image'"/>\`}`;
if (html.includes(oldGridBlock)) {
  html = html.replace(oldGridBlock, newGridBlock);
} else {
  // regex fallback if spacing varies
  html = html.replace(/<img class="prod-thumb" src="\$\{p\.img\}" alt="\$\{p\.name\}"\s*onerror="[^"]*"\/>/, newGridBlock);
}

// 4. Update showDetail to not use a carousel array, and support video
const oldCarouselLines = /document\.getElementById\('det-car-inner'\)\.innerHTML=\s*p\.imgs\.map\(\(src,i\)=>`<div class="carousel-item\$\{i===0\?' active':''\}"><img src="\$\{src\}" alt="\$\{p\.name\}" onerror="this\.src='https:\/\/placehold\.co\/600x390\/f5f5f5\/999\?text=Image'"\/><\/div>`\)\.join\(''\);/;
const newCarouselLines = `document.getElementById('det-car-inner').innerHTML=
    \`<div class="carousel-item active">\${p.img.endsWith('.mp4') ? \\\`<video src="\${p.img}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;"></video>\\\` : \\\`<img src="\${p.img}" alt="\${p.name}" onerror="this.src='https://placehold.co/600x390/f5f5f5/999?text=Image'"/>\\\` }</div>\`;`;

html = html.replace(oldCarouselLines, newCarouselLines);

// Hide carousel controls naturally
html = html.replace(
  `try{$('#det-car').carousel(0);}catch(e){}`,
  `try{$('#det-car').carousel('dispose');}catch(e){}
  const inds = document.querySelector('.carousel-indicators');
  if(inds) inds.style.display = 'none';
  const ctrls = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  ctrls.forEach(c => c.style.display = 'none');`
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done replacing DB items and updating image/video logic');
