const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const adidasStart = html.indexOf('adidas:[');
const pumaStart = html.indexOf('puma:[');
const converseStart = html.indexOf('converse:[');

if (adidasStart !== -1 && pumaStart !== -1 && converseStart !== -1) {
  // Extract sections
  const oldAdidasSection = html.substring(adidasStart, pumaStart);
  const oldPumaSection = html.substring(pumaStart, converseStart);

  const newAdidasSection = `adidas:[
    {id:'ad1',name:'Adidas OG Sambas',price:10999,back:'pg-adidas',
     img:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G',
     imgs:['https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPCbLu9U3GCM-ubF8uXYWXJne733AiBT8wZLwehWjOF65wkHXW129klBGywSJ9yOudLW03dRPcfNgzrdo09uP2QGOWpZ4G'],
     desc:'The timeless Samba OG. Classic street style.'},
    {id:'ad2',name:'Handball Spezial Shoes',price:8999,back:'pg-adidas',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/ae5c35320ae54e68be1c40c8f68189c1_d98c/Handball_Spezial_Shoes_Blue_BD7632_video.mp4'],
     desc:'Handball Spezial — Authentic style and comfort.'},
    {id:'ad3',name:'Nizza RF Shoes',price:6999,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/87e4407cf7da4c84a47eaa3a011d6756_9366/Nizza_RF_Shoes_Black_EE5599_04_standard.jpg'],
     desc:'Classic canvas styling in a modern low-cut silhouette.'},
    {id:'ad4',name:'SUPERSTAR II SHOES',price:7599,back:'pg-adidas',
     img:'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg',
     imgs:['https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/23c7df764c4a475bae1df8f707a624c5_9366/SUPERSTAR_II_SHOES_Beige_IH4145_01_00_standard.jpg'],
     desc:'The iconic shell-toe sneaker in a premium beige colourway.'},
    {id:'ad5',name:'VL Court 3.0 Shoes',price:4599,back:'pg-adidas',
     img:'https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4',
     imgs:['https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/290986e1c20147dda2a8242c91533560_d98c/VL_Court_3.0_Shoes_Black_ID6286_video.mp4'],
     desc:'Everyday essential skate-inspired shoe.'}
  ],
  `;

  const newPumaSection = `puma:[
    {id:'pm1',name:'Speedcat Sneakers',price:9999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/406329/02/sv01/fnd/IND/fmt/png/Speedcat-Sneakers',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/406329/02/sv01/fnd/IND/fmt/png/Speedcat-Sneakers'],
     desc:'Classic motorsport-inspired Speedcat sneakers.'},
    {id:'pm2',name:'Puma Palermo',price:8499,back:'pg-puma',
     img:'https://kxadmin.metroshoes.com/product/359-39646407/660/359-39646407H16.jpg',
     imgs:['https://kxadmin.metroshoes.com/product/359-39646407/660/359-39646407H16.jpg'],
     desc:'Vintage terrace style with the Puma Palermo.'},
    {id:'pm3',name:'BMW M Motorsport A3rokart Mid',price:10999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308235/04/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-A3rokart-Mid-Sneakers',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/308235/04/sv01/fnd/IND/fmt/png/BMW-M-Motorsport-A3rokart-Mid-Sneakers'],
     desc:'Track-ready style with BMW Motorsport aesthetics.'},
    {id:'pm4',name:'Park Lifestyle Sneakers',price:5999,back:'pg-puma',
     img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395022/01/sv01/fnd/IND/fmt/png/Park-Lifestyle-Sneakers',
     imgs:['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/395022/01/sv01/fnd/IND/fmt/png/Park-Lifestyle-Sneakers'],
     desc:'Casual lifestyle sneaker for everyday comfort.'},
    {id:'pm5',name:'Puma SUEDE VTG AMI JAFFA',price:7999,back:'pg-puma',
     img:'https://www.superkicks.in/cdn/shop/products/1-36_f543dbe4-989b-4933-8d52-691931db30a9.jpg?v=1675975222&width=1946',
     imgs:['https://www.superkicks.in/cdn/shop/products/1-36_f543dbe4-989b-4933-8d52-691931db30a9.jpg?v=1675975222&width=1946'],
     desc:'Premium suede vintage edition in collaboration with AMI.'}
  ],
  `;

  html = html.replace(oldAdidasSection, newAdidasSection);
  html = html.replace(oldPumaSection, newPumaSection);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully swapped arrays for adidas and puma.');
} else {
  console.log('Array boundaries not found in index.html');
}
